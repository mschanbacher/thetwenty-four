import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';

const siteUrl = 'https://thetwenty-four.com';
const siteTitle = 'The Twenty-Four';
const siteDescription =
  'A proposal to restructure college football into a 24-team Champions Conference with promotion and relegation.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    // Sub-pages supply a segment; template fills it in.
    template: '%s · The Twenty-Four',
  },
  description: siteDescription,
  applicationName: siteTitle,
  authors: [{ name: 'Michael Schanbacher' }],
  creator: 'Michael Schanbacher',
  // Shipping without a custom OG image this session per plan item 4.8.
  // The /opengraph-image route is declared in page.tsx's metadata; Next
  // auto-picks it up for the root route.
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
  // Placeholder favicon only — real mark is a post-launch session.
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#F7F2EA',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: analytics — wire Plausible or Vercel Analytics after the
  // Vercel project is connected (spec § 9, session 6).
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
