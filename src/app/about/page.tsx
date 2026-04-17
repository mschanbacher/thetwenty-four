import type { Metadata } from 'next';
import { StubPage } from '@/components/site/StubPage';

export const metadata: Metadata = {
  title: 'About',
  description: 'About the project and the author.',
  robots: { index: false, follow: true },
};

export default function AboutPage() {
  return (
    <StubPage
      eyebrow="About · forthcoming"
      heading="About the project and the author."
      description={
        <>
          Who wrote this, why, and the colophon — fonts, tools,
          acknowledgements. A short single-scroll page, coming in a
          later build session. For now, the byline at the foot of
          the landing page is the short version.
        </>
      }
    />
  );
}
