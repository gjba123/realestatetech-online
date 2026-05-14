import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { NicheHero } from "@/components/niche-hero";
import { SocialProofBar } from "@/components/social-proof-bar";
import { ProblemSection } from "@/components/problem-section";
import { HowItWorks } from "@/components/how-it-works";
import { OfferStack } from "@/components/offer-stack";
import { PortfolioVideos } from "@/components/portfolio-videos";
import { Testimonials } from "@/components/testimonials";
import { FaqSection } from "@/components/faq";
import { AboutSection } from "@/components/about-section";
import { FinalCta } from "@/components/final-cta";
import { CtaStack } from "@/components/cta-stack";
import type { FAQ, Niche, Step } from "@/data/niches";

const REELS_SOCIAL_PROOF = "100+ property videos delivered · US and international clients · Refund if late";

const REELS_STEPS: Step[] = [
  {
    n: "01",
    title: "Send your photos",
    desc: "Email 10-20 clear property photos with the listing link, location, price, and the call-to-action you want viewers to follow.",
  },
  {
    n: "02",
    title: "We create 3 angles",
    desc: "You get a cinematic tour, an offer-focused reel, and a short Story/TikTok cut built for fast social posting.",
  },
  {
    n: "03",
    title: "Review and post",
    desc: "Approve the preview, then publish the finished videos with captions and booking-focused CTA text included.",
  },
];

const REELS_OFFER_STACK = [
  "3 cinematic vertical videos from your existing photos",
  "Formatted for Instagram Reels, TikTok, Stories, and listing pages",
  "Text overlay with location, price, offer, or booking CTA",
  "Music matched to the property style",
  "Caption ideas for Instagram, Facebook, and TikTok",
  "Direct booking CTA wording included",
  "1 revision included",
  "Delivered in 24 hours after photos are received",
];

const REELS_PORTFOLIO_ITEMS = [
  { src: "2159ab47-ce12-4274-a63c-846a804404a0", label: "Portfolio reel 01" },
  { src: "47c30a18-d00d-4938-9201-5764e698a8e9", label: "Portfolio reel 02" },
  { src: "89991069-e0b5-4c3f-9050-77799b254fee", label: "Portfolio reel 03" },
  { src: "3c41329d-3f7d-4f48-813a-a733eda3ca21", label: "Portfolio reel 04" },
  { src: "55d81992-560a-4d9d-8379-b008604e4ba6", label: "Portfolio reel 05" },
  { src: "c2ba93ff-ee16-40cc-a108-d6209aae0ec9", label: "Portfolio reel 06" },
  { src: "0a873b7a-7061-4a9c-938e-ee7ef4f41a0d", label: "Portfolio reel 07" },
  { src: "35a6c229-df19-43bf-b44e-f55f35718401", label: "Portfolio reel 08" },
  { src: "ec943aa3-e873-4ef7-8d69-4e8222085813", label: "Portfolio reel 09" },
  { src: "2b5cdd22-4b8b-476e-afa4-b0f0ec4cc392", label: "Portfolio reel 10" },
];

const REELS_FAQS: FAQ[] = [
  {
    q: "Do I need to shoot new video?",
    a: "No. We create the videos from your existing photos. Clear daylight photos work best.",
  },
  {
    q: "Can this work for real estate listings, not just rentals?",
    a: "Yes. For agents, the videos are built to attract buyer leads, viewing requests, and listing inquiries.",
  },
  {
    q: "What should I send?",
    a: "Send 10-20 photos, property name, location, price or nightly rate, and the link or email you want viewers to use.",
  },
  {
    q: "What if I don't like the first version?",
    a: "One revision is included. The balance is paid only after you approve the preview.",
  },
  {
    q: "Can you add my logo or contact details?",
    a: "Yes. We can add your logo, contact details, location, price, booking link, or call-to-action text.",
  },
  {
    q: "Do you guarantee bookings?",
    a: "No one can honestly guarantee bookings from one video. What we guarantee is a professional video delivered on time, or we refund you if we are late.",
  },
];

export function NichePage({ niche }: { niche: Niche }) {
  const isReelsPage = niche.slug === "airbnb-hosts";
  const socialProof = isReelsPage ? REELS_SOCIAL_PROOF : niche.socialProof;
  const steps = isReelsPage ? REELS_STEPS : niche.steps;
  const offerStack = isReelsPage ? REELS_OFFER_STACK : niche.offerStack;
  const faqs = isReelsPage ? REELS_FAQS : niche.faqs;
  const portfolioItems = isReelsPage ? REELS_PORTFOLIO_ITEMS : niche.portfolioVideos;

  return (
    <main className="min-h-screen">
      <Header />
      <NicheHero niche={niche} />

      {!isReelsPage && <CtaStack slug={niche.slug} />}

      <SocialProofBar text={socialProof} />
      {isReelsPage && (
        <PortfolioVideos
          items={portfolioItems}
          placeholder={niche.portfolioPlaceholder}
        />
      )}
      <ProblemSection
        p1={niche.problemP1}
        p2={niche.problemP2}
        cards={niche.problemCards}
      />
      <HowItWorks steps={steps} />
      <OfferStack items={offerStack} />

      <CtaStack slug={niche.slug} />

      {!isReelsPage && (
        <PortfolioVideos
          items={portfolioItems}
          placeholder={niche.portfolioPlaceholder}
        />
      )}
      <Testimonials />
      <FaqSection items={faqs} />

      <CtaStack slug={niche.slug} />

      <AboutSection />
      <FinalCta niche={niche} />
      <Footer />
      <WhatsappFloat message={niche.primaryWaMessage} />
    </main>
  );
}
