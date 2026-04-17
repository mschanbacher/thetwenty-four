import { keyVisual } from '@/content/landing';
import { Container } from '@/components/primitives/Container';
import { Eyebrow } from '@/components/primitives/Eyebrow';

/**
 * KeyVisualPlaceholder — a proper editorial frame for the bracket
 * graphic that will land in the next build session. 16:9 paper-deep
 * block, hairline border, ink-faint label centered. Caption below
 * in the sans caption style, set to the narrow measure.
 *
 * This treatment makes the empty space read as "figure forthcoming,"
 * not as a broken layout, and shows the real shape the visual will
 * occupy so surrounding rhythm is correct now.
 */
export function KeyVisualPlaceholder() {
  return (
    <Container as="figure" className="landing-figure">
      <div
        className="landing-figure-frame"
        role="img"
        aria-label={`${keyVisual.figureLabel} — placeholder for the Champions Conference bracket graphic`}
      >
        {keyVisual.figureLabel} · Placeholder
      </div>
      <figcaption
        className="caption"
        style={{ marginTop: 'var(--space-3)' }}
      >
        <Eyebrow as="span" muted className="mr-2">
          {keyVisual.figureLabel}
        </Eyebrow>{' '}
        {keyVisual.caption}
      </figcaption>
    </Container>
  );
}
