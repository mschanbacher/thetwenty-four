import type { Metadata } from 'next';
import { Container } from '@/components/primitives/Container';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { ProposalChapter } from '@/components/proposal/ProposalChapter';
import { getEssay } from '@/content/proposal/essay';

export const metadata: Metadata = {
  title: 'The Proposal',
  description:
    'The full long-form case for the twenty-four-team Champions Conference — a merit-based restructuring of college football with promotion, relegation, and a standings-derived playoff.',
};

/**
 * /proposal — the full nine-chapter essay.
 *
 * Prose is read at build time from docs/proposal-essay.md (the
 * canonical source the author edits) and rendered as typeset chapters
 * with inline figures placed by markers in the markdown. See
 * src/content/proposal/essay.ts for the pipeline and
 * src/content/proposal/figures.tsx for the figure registry.
 *
 * Server component: the markdown is parsed at build time and never
 * shipped to the client. Figures emit static SVG with a CSS-only
 * responsive toggle, so the page ships with no client JS.
 */
export default function ProposalPage() {
  const essay = getEssay();

  return (
    <Container as="main" className="proposal-page">
      <header className="proposal-masthead">
        <Eyebrow as="p" muted>
          The proposal
        </Eyebrow>
        <h1 className="proposal-masthead-title">{essay.title}</h1>
      </header>

      {essay.chapters.map((chapter) => (
        <ProposalChapter key={chapter.id} chapter={chapter} />
      ))}
    </Container>
  );
}
