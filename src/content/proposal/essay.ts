import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

/**
 * Proposal essay content pipeline.
 *
 * The canonical prose lives in `docs/proposal-essay.md`, edited freely
 * by the author. This module reads that file at BUILD TIME (server
 * component / static generation — never shipped to the client), splits
 * it into chapters, and converts each chapter's prose to HTML.
 *
 * Figures are placed by markers in the markdown itself:
 *
 *     <!-- figure: promotion-relegation -->
 *
 * on its own line, wherever the author wants the figure to sit. The
 * marker travels with the prose, so re-writing the surrounding text
 * never breaks placement. Each marker slug maps to a React component
 * in `figures.tsx`. A chapter is therefore an ordered list of blocks,
 * each either a run of prose (HTML) or a figure slot (slug).
 *
 * Why markers-in-markdown rather than a separate manifest: the author
 * edits the prose regularly and wanted placement to live where the
 * writing lives, not in a file that could drift out of sync.
 */

const ESSAY_PATH = path.join(process.cwd(), 'docs', 'proposal-essay.md');

/** A marker line like `<!-- figure: slug -->`. */
const FIGURE_MARKER = /^<!--\s*figure:\s*([a-z0-9-]+)\s*-->$/;

/** Any other single-line HTML comment (e.g. `<!-- brief: … -->`), which
 *  is an author-only note and must be stripped, not rendered. */
const OTHER_COMMENT = /^<!--[\s\S]*-->$/;

/** A run of prose, already converted to HTML. */
export type ProseBlock = { kind: 'prose'; html: string };

/** A figure slot; `slug` selects the component in figures.tsx. */
export type FigureBlock = { kind: 'figure'; slug: string };

export type Block = ProseBlock | FigureBlock;

export type Chapter = {
  /** Slug for anchor links, e.g. "iv-how-promotion-and-relegation-work". */
  id: string;
  /** Roman-numeral label parsed from the heading, e.g. "IV". */
  numeral: string;
  /** Chapter title without the numeral, e.g. "How Promotion and Relegation Work". */
  title: string;
  /** Ordered prose/figure blocks. */
  blocks: Block[];
};

export type Essay = {
  /** Document H1, e.g. "The Proposal". */
  title: string;
  chapters: Chapter[];
};

/** Split a raw chapter body into prose runs and figure slots. */
function splitBlocks(body: string): Block[] {
  const lines = body.split('\n');
  const blocks: Block[] = [];
  let prose: string[] = [];

  const flushProse = () => {
    const md = prose.join('\n').trim();
    prose = [];
    if (!md) return;
    // marked.parse is synchronous when no async extensions are registered.
    const html = marked.parse(md, { async: false }) as string;
    blocks.push({ kind: 'prose', html });
  };

  for (const line of lines) {
    const trimmed = line.trim();
    const m = trimmed.match(FIGURE_MARKER);
    if (m) {
      flushProse();
      blocks.push({ kind: 'figure', slug: m[1] });
    } else if (OTHER_COMMENT.test(trimmed)) {
      // Author-only comments (e.g. `<!-- brief: … -->` design notes that
      // accompany a reserved figure marker). Dropped entirely so they
      // never reach the page source, rendered or not.
      continue;
    } else {
      prose.push(line);
    }
  }
  flushProse();
  return blocks;
}

/** Turn "IV. How Promotion and Relegation Work" into its parts. */
function parseHeading(heading: string): { numeral: string; title: string; id: string } {
  const m = heading.match(/^([IVXLC]+)\.\s+(.*)$/);
  const numeral = m ? m[1] : '';
  const title = m ? m[2] : heading;
  const id = `${numeral ? numeral.toLowerCase() + '-' : ''}${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')}`;
  return { numeral, title, id };
}

let cached: Essay | null = null;

/** Parse the canonical essay into chapters and blocks (memoized per build). */
export function getEssay(): Essay {
  if (cached) return cached;

  const raw = fs.readFileSync(ESSAY_PATH, 'utf8');

  // Document title: the first H1.
  const titleMatch = raw.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : 'The Proposal';

  // Split on H2 chapter headings, keeping the heading with its body.
  // The segment before the first H2 (the H1 and any preamble) is dropped
  // from chapter parsing — the page renders the title separately.
  const parts = raw.split(/^##\s+/m).slice(1);

  const chapters: Chapter[] = parts.map((part) => {
    const newline = part.indexOf('\n');
    const heading = (newline === -1 ? part : part.slice(0, newline)).trim();
    const body = newline === -1 ? '' : part.slice(newline + 1);
    const { numeral, title: chTitle, id } = parseHeading(heading);
    return { id, numeral, title: chTitle, blocks: splitBlocks(body) };
  });

  cached = { title, chapters };
  return cached;
}
