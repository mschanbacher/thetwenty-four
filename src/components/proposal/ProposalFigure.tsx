import { Eyebrow } from '@/components/primitives/Eyebrow';
import { figures } from '@/content/proposal/figures';

/**
 * ProposalFigure — renders one in-essay figure inside the same
 * editorial frame the landing page uses for the Champions Field:
 * hairline warm-gray border, paper-deep interior, numbered figcaption
 * below in the sans caption style at a narrow measure.
 *
 * The visual component emits both a wide and a narrow SVG; a CSS media
 * query in globals.css shows one and hides the other. No client JS.
 *
 * `slug` comes from a `<!-- figure: slug -->` marker in the essay
 * markdown; unknown slugs render nothing (fail quiet rather than crash
 * a long reading page over a typo in a comment).
 */
export function ProposalFigure({ slug }: { slug: string }) {
  const entry = figures[slug];
  if (!entry) return null;

  return (
    <figure className="proposal-figure">
      <div className="proposal-figure-frame">{entry.render()}</div>
      <figcaption className="caption proposal-figure-caption">
        <Eyebrow as="span" muted className="mr-2">
          Figure {entry.number}
        </Eyebrow>{' '}
        {entry.caption}
      </figcaption>
    </figure>
  );
}
