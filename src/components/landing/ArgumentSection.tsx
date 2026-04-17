import { type ArgumentSection as ArgumentSectionData } from '@/content/landing';
import { Container } from '@/components/primitives/Container';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { Pullquote } from '@/components/primitives/Pullquote';

/**
 * ArgumentSection — one of the four ~200-300 word argument blocks
 * that make up the body of the landing page. Structure:
 *
 *   eyebrow
 *   H2 heading
 *   body paragraph(s)
 *   pullquote (optional, typically mid-section)
 *
 * When a pullquote is supplied, it's inserted after the first
 * paragraph rather than at the bottom — pullquotes that trail a
 * section feel like a caption for the section, not a lift from it.
 *
 * The section is wrapped in <article> because it's a self-contained
 * argument; screen readers and RSS readers benefit from the semantic
 * distinction from the generic section wrapper.
 */
export function ArgumentSection({ section }: { section: ArgumentSectionData }) {
  const headingId = `${section.id}-heading`;

  return (
    <Container
      as="section"
      className="landing-section"
    >
      <article aria-labelledby={headingId}>
        <Eyebrow>{section.eyebrow}</Eyebrow>
        <h2
          id={headingId}
          className="landing-section-heading"
          style={{ marginTop: 'var(--space-3)' }}
        >
          {section.heading}
        </h2>

        {section.body.map((paragraph, i) => {
          // Pullquote goes after the first paragraph, if present.
          const showPullquoteAfter = i === 0 && section.pullquote;
          return (
            <div key={i}>
              <p>{paragraph}</p>
              {showPullquoteAfter ? (
                <Pullquote>{section.pullquote}</Pullquote>
              ) : null}
            </div>
          );
        })}
      </article>
    </Container>
  );
}
