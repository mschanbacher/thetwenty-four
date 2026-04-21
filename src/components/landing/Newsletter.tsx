import { newsletter } from '@/content/landing';
import { Container } from '@/components/primitives/Container';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { Button } from '@/components/primitives/Button';

/**
 * Newsletter — form UI only, no submit wiring.
 * The input and submit button are both disabled, with an honest
 * caption noting that signup opens at launch. This removes any
 * accessibility question about handling a submission we can't
 * fulfill, and it's less cute than accepting input and discarding it.
 *
 * When Ghost is wired up, this stub becomes a client component
 * that POSTs to the Ghost API. The markup stays the same.
 */
export function Newsletter() {
  return (
    <Container as="section" className="landing-newsletter" aria-labelledby="newsletter-heading">
      <Eyebrow muted>{newsletter.eyebrow}</Eyebrow>
      <h2
        id="newsletter-heading"
        className="landing-section-heading"
        style={{ marginTop: 'var(--space-3)' }}
      >
        {newsletter.heading}
      </h2>
      <p style={{ maxWidth: 'var(--measure)' }}>{newsletter.body}</p>

      <form
        className="landing-newsletter-form"
        // No action, no onSubmit — this form is intentionally non-functional
        // until the newsletter session wires it up. Inputs are disabled.
        aria-describedby="newsletter-note"
      >
        <label
          htmlFor="newsletter-email"
          className="sr-only"
          style={{
            // Visually-hidden label — still readable by screen readers.
            position: 'absolute',
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0,0,0,0)',
            whiteSpace: 'nowrap',
            borderWidth: 0,
          }}
        >
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          disabled
          className="landing-newsletter-input"
        />
        <Button type="submit" disabled>
          Subscribe
        </Button>
      </form>

      <p id="newsletter-note" className="landing-newsletter-note">
        {newsletter.disabledNote}
      </p>
    </Container>
  );
}
