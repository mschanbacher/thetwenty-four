import type { Metadata } from 'next';
import { StubPage } from '@/components/site/StubPage';

export const metadata: Metadata = {
  title: 'The Proposal',
  description: 'The full long-form proposal — under construction.',
  robots: { index: false, follow: true },
};

export default function ProposalPage() {
  return (
    <StubPage
      eyebrow="The proposal · forthcoming"
      heading="The full essay lives here."
      description={
        <>
          A 3,000–5,000 word long-form case for the twenty-four-team
          Champions Conference is in draft. This page will host the
          reading version, carefully typeset, with inline visuals.
          Until it lands, the landing page is the best summary of
          the argument.
        </>
      }
    />
  );
}
