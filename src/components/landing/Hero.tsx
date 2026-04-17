import { hero } from '@/content/landing';
import { Container } from '@/components/primitives/Container';

/**
 * Hero — the page's only H1, set at display size, with tagline
 * and author byline beneath. Per the style guide's usage notes,
 * "one display per page" lives here.
 *
 * Note: the wordmark reads as "The Twenty-Four" on first sight,
 * so the tagline shoulders the "what is this" job. No throat-
 * clearing preamble, no eyebrow — the hero is plain on purpose.
 */
export function Hero() {
  return (
    <Container as="section" className="landing-hero">
      <h1 className="landing-hero-mark">{hero.wordmark}</h1>
      <p className="landing-hero-tagline">{hero.tagline}</p>
      <p className="landing-hero-byline">{hero.byline}</p>
    </Container>
  );
}
