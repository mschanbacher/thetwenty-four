import { thesis } from '@/content/landing';
import { Container } from '@/components/primitives/Container';
import { Eyebrow } from '@/components/primitives/Eyebrow';

/**
 * Thesis — the ~150-word opening statement.
 * Eyebrow above, no H2. The argument itself, plainly stated.
 * Paragraphs come from the thesis body string, split on blank
 * lines so the copy file stays readable.
 */
export function Thesis() {
  const paragraphs = thesis.body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return (
    <Container as="section" className="landing-section">
      <Eyebrow as="div">{thesis.eyebrow}</Eyebrow>
      <div style={{ marginTop: 'var(--space-3)' }}>
        {paragraphs.map((p, i) => (
          <p key={i} className={i === 0 ? 'lead' : undefined}>
            {p}
          </p>
        ))}
      </div>
    </Container>
  );
}
