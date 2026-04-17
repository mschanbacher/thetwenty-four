import Link from 'next/link';
import { Container } from '@/components/primitives/Container';

/**
 * SiteHeader — the top navigation.
 * Wordmark left (links to `/`), three nav items right.
 *
 * Mobile treatment: everything stays inline. Three links plus a
 * wordmark fits horizontally even at 360px with a tight gap.
 * If real content proves this wrong, we revisit with a disclosure
 * menu — but three items doesn't warrant one today.
 */
export function SiteHeader() {
  return (
    <header
      style={{
        borderBottom: 'var(--border-hairline)',
      }}
    >
      <Container as="nav" className="site-nav">
        <div className="site-nav-inner">
          <Link href="/" className="site-nav-mark" aria-label="The Twenty-Four — home">
            The Twenty-Four
          </Link>
          <ul className="site-nav-items" role="list">
            <li>
              <Link href="/proposal">The Proposal</Link>
            </li>
            <li>
              <Link href="/spec">The Spec</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
}
