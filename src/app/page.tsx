import { Hero } from '@/components/landing/Hero';
import { Thesis } from '@/components/landing/Thesis';
import { KeyVisualPlaceholder } from '@/components/landing/KeyVisualPlaceholder';
import { ArgumentSection } from '@/components/landing/ArgumentSection';
import { CallToAction } from '@/components/landing/CallToAction';
import { Newsletter } from '@/components/landing/Newsletter';
import { Byline } from '@/components/landing/Byline';
import { argumentSections } from '@/content/landing';

/**
 * The landing page — `/`.
 *
 * Section order comes directly from spec § 5:
 *   1. Hero — wordmark, tagline, byline.
 *   2. Thesis — ~150 words, plain statement of the argument.
 *   3. Key visual — bracket or calendar (placeholder this session).
 *   4. Argument sections — four blocks of 200–300 words each,
 *      some with pullquotes.
 *   5. CTAs — read the proposal, read the spec.
 *   6. Newsletter — stubbed form, disabled until Ghost is wired.
 *   7. On-page byline — sits above the site footer.
 */
export default function LandingPage() {
  return (
    <>
      <Hero />
      <Thesis />
      <KeyVisualPlaceholder />
      {argumentSections.map((section) => (
        <ArgumentSection key={section.id} section={section} />
      ))}
      <CallToAction />
      <Newsletter />
      <Byline />
    </>
  );
}
