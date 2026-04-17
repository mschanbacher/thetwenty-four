import { Container } from '@/components/primitives/Container';
import { byline } from '@/content/landing';

/**
 * SiteFooter — byline block + small meta row.
 * Newsletter signup is a landing-page section, not a footer module,
 * per the spec: "Newsletter signup lives at the bottom of every
 * page, not in the nav." On the landing page the newsletter block
 * is rendered just above this footer.
 *
 * On stub routes we still render the byline so the page has a real
 * foot, and readers have a point of contact.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        marginTop: 'var(--space-24)',
        paddingTop: 'var(--space-16)',
        paddingBottom: 'var(--space-16)',
        borderTop: 'var(--border-hairline)',
      }}
    >
      <Container>
        <div className="site-footer-grid">
          <div className="site-footer-byline">
            <div
              className="eyebrow"
              style={{ marginBottom: 'var(--space-3)' }}
            >
              Byline
            </div>
            <p
              style={{
                fontSize: 'var(--text-body)',
                maxWidth: 'var(--measure)',
                margin: '0 0 var(--space-3)',
              }}
            >
              <strong style={{ fontWeight: 'var(--weight-semibold)' }}>
                {byline.name}
              </strong>
              {' — '}
              {byline.bio}
            </p>
            <p
              className="meta"
              style={{ margin: 0 }}
            >
              <a href={`mailto:${byline.email}`}>{byline.email}</a>
            </p>
          </div>

          <div className="site-footer-meta">
            <p className="meta" style={{ margin: 0 }}>
              © {year} The Twenty-Four
            </p>
            <p
              className="meta"
              style={{
                margin: 0,
                color: 'var(--color-ink-faint)',
              }}
            >
              Set in Source Serif 4 and IBM Plex Sans.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
