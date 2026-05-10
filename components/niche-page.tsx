import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { NicheHero } from "@/components/niche-hero";
import { SocialProofBar } from "@/components/social-proof-bar";
import { ProblemSection } from "@/components/problem-section";
import { HowItWorks } from "@/components/how-it-works";
import { OfferStack } from "@/components/offer-stack";
import { PricingSection } from "@/components/pricing-section";
import { PortfolioVideos } from "@/components/portfolio-videos";
import { Testimonials } from "@/components/testimonials";
import { FaqSection } from "@/components/faq";
import { AboutSection } from "@/components/about-section";
import { FinalCta } from "@/components/final-cta";
import { StickyPricingBar } from "@/components/sticky-pricing-bar";
import { CtaStack } from "@/components/cta-stack";
import type { Niche } from "@/data/niches";

export function NichePage({ niche }: { niche: Niche }) {
  return (
    <main className="min-h-screen">
      <Header />
      <NicheHero niche={niche} />

      {/* CTA stack #1 — after hero */}
      <CtaStack slug={niche.slug} />

      <SocialProofBar text={niche.socialProof} />
      <ProblemSection p1={niche.problemP1} p2={niche.problemP2} />
      <HowItWorks steps={niche.steps} />
      <OfferStack items={niche.offerStack} />

      {/* CTA stack #2 — after offer stack */}
      <CtaStack slug={niche.slug} />

      <PricingSection niche={niche} />
      <PortfolioVideos
        items={niche.portfolioVideos}
        placeholder={niche.portfolioPlaceholder}
      />
      <Testimonials />
      <FaqSection items={niche.faqs} />

      {/* CTA stack #3 — after FAQ */}
      <CtaStack slug={niche.slug} />

      <AboutSection />
      <FinalCta niche={niche} />
      <Footer />
      <WhatsappFloat message={niche.primaryWaMessage} />
      <StickyPricingBar niche={niche} />
    </main>
  );
}
