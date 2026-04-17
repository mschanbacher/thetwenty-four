import { type ReactNode } from 'react';
import Link from 'next/link';
import { Container } from '@/components/primitives/Container';
import { Eyebrow } from '@/components/primitives/Eyebrow';

/**
 * StubPage — shared placeholder UI for /proposal, /spec, and /about.
 * The three routes exist so the top nav doesn't 404. Each has its
 * own `robots: { index: false }` in its route-level metadata so
 * search engines don't index these holding-page states.
 */
export function StubPage({
  eyebrow,
  heading,
  description,
}: {
  eyebrow: string;
  heading: string;
  description: ReactNode;
}) {
  return (
    <Container as="section" className="landing-section">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1
        style={{
          fontSize: 'var(--text-h1)',
          lineHeight: 'var(--lh-h1)',
          letterSpacing: 'var(--tracking-h1)',
          fontWeight: 'var(--weight-semibold)',
          fontVariationSettings: "'opsz' 48",
          margin: 'var(--space-3) 0 var(--space-6)',
          maxWidth: 'var(--measure)',
        }}
      >
        {heading}
      </h1>
      <p style={{ maxWidth: 'var(--measure)' }}>{description}</p>
      <p style={{ marginTop: 'var(--space-6)' }}>
        <Link href="/">← Return to the landing page</Link>
      </p>
    </Container>
  );
}
