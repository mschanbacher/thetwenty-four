import { byline } from '@/content/landing';
import { Container } from '@/components/primitives/Container';
import { Eyebrow } from '@/components/primitives/Eyebrow';

/**
 * Byline — the on-page byline block.
 * Sits just above the site footer on /. The hero has a small "by Name"
 * attribution; this is the fuller statement — name, one-line bio,
 * contact email — in the body of the page rather than the chrome.
 * This is the pattern a real magazine uses: attribution in the
 * header, colophon in the foot.
 */
export function Byline() {
  return (
    <Container as="section" className="landing-byline" aria-labelledby="byline-heading">
      <Eyebrow as="div">Author</Eyebrow>
      <h2
        id="byline-heading"
        style={{
          fontSize: 'var(--text-h3)',
          lineHeight: 'var(--lh-h3)',
          fontWeight: 'var(--weight-semibold)',
          fontVariationSettings: "'opsz' 24",
          margin: 'var(--space-3) 0 var(--space-3)',
        }}
      >
        {byline.name}
      </h2>
      <p style={{ maxWidth: 'var(--measure)' }}>{byline.bio}</p>
      <p className="meta" style={{ margin: 0 }}>
        <a href={`mailto:${byline.email}`}>{byline.email}</a>
      </p>
    </Container>
  );
}
