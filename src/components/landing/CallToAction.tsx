import { cta } from '@/content/landing';
import { Container } from '@/components/primitives/Container';
import { Button } from '@/components/primitives/Button';

/**
 * CallToAction — primary button + secondary text link, side by side.
 * Style guide pattern: .button + .button-text with a space-4 gap.
 *
 * Rendered as its own full-width landing section so the CTAs get
 * breathing room rather than clinging to the end of an argument
 * section.
 */
export function CallToAction() {
  return (
    <Container as="section" className="landing-section">
      <div className="landing-cta-row" style={{ marginTop: 0 }}>
        <Button href={cta.primary.href}>{cta.primary.label}</Button>
        <Button href={cta.secondary.href} variant="text">
          {cta.secondary.label} →
        </Button>
      </div>
    </Container>
  );
}
