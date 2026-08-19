import type { Chapter } from '@/content/proposal/essay';
import { ProposalFigure } from './ProposalFigure';

/**
 * ProposalChapter — one chapter of the long-form essay.
 *
 * Renders the chapter heading (roman numeral + title, anchored for
 * deep links) followed by its ordered blocks: prose runs come through
 * as build-time-generated HTML (injected via dangerouslySetInnerHTML —
 * the source is the author's own trusted markdown, not user input),
 * and figure slots render the ProposalFigure for that slug.
 *
 * Prose typography (measure, heading scale, pullquote/blockquote,
 * links, lists) is styled by the `.proposal-prose` rules in
 * globals.css, so the HTML here stays semantic and unstyled.
 */
export function ProposalChapter({ chapter }: { chapter: Chapter }) {
  return (
    <section className="proposal-chapter" id={chapter.id} aria-labelledby={`${chapter.id}-h`}>
      <h2 className="proposal-chapter-heading" id={`${chapter.id}-h`}>
        {chapter.numeral ? (
          <span className="proposal-chapter-numeral" aria-hidden="true">
            {chapter.numeral}
          </span>
        ) : null}
        <span className="proposal-chapter-title">{chapter.title}</span>
      </h2>

      {chapter.blocks.map((block, i) =>
        block.kind === 'figure' ? (
          <ProposalFigure key={`fig-${i}`} slug={block.slug} />
        ) : (
          <div
            key={`prose-${i}`}
            className="proposal-prose"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        ),
      )}
    </section>
  );
}
