import { keyVisual } from '@/content/landing';
import { fieldData } from '@/content/champions-field/2025';
import { Container } from '@/components/primitives/Container';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { ChampionsField } from '@/components/visuals/ChampionsField';

/**
 * KeyVisual — the landing-page figure. Replaces the v0.3 placeholder.
 *
 * Renders the inaugural 2025 Champions Field inside the editorial
 * frame: hairline warm-gray border, paper-deep interior, figcaption
 * below in the sans caption style set to a narrow measure.
 *
 * The ChampionsField component emits both a wide and a narrow SVG;
 * a CSS media query in globals.css shows one and hides the other.
 * No client JS, no hydration cost.
 */
export function KeyVisual() {
  return (
    <Container as="figure" className="landing-figure">
      <div className="landing-figure-frame">
        <ChampionsField data={fieldData} titleId="champions-field-2025" />
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
