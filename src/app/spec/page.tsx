import type { Metadata } from 'next';
import { StubPage } from '@/components/site/StubPage';

export const metadata: Metadata = {
  title: 'The Spec',
  description: 'The full technical specification — under construction.',
  robots: { index: false, follow: true },
};

export default function SpecPage() {
  return (
    <StubPage
      eyebrow="The spec · forthcoming"
      heading="The technical specification lives here."
      description={
        <>
          The full spec — structure, qualification, scheduling,
          promotion-and-relegation mechanics — will be presented as
          a single navigable document with a table of contents, and
          offered as a downloadable PDF. The source document exists;
          the web presentation is being built.
        </>
      }
    />
  );
}
