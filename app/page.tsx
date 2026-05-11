"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { ServiceCard } from "@/components/service-card";
import { HeroRendy } from "@/components/hero-rendy";
import { Testimonials } from "@/components/testimonials";
import { BUNNY_VIDEOS, bunnyEmbedUrl } from "@/data/niches";

const SAMPLE_VIDEOS = [
  { videoId: BUNNY_VIDEOS.post1, label: "Airbnb · Diani" },
  { videoId: BUNNY_VIDEOS.post2, label: "Realtor · Nairobi" },
  { videoId: BUNNY_VIDEOS.post3, label: "Developer · Off-plan" },
];

function HomeSampleTile({ videoId, label }: { videoId: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative rounded-2xl overflow-hidden bg-black border border-[var(--border)]"
        style={{ aspectRatio: "9/16", width: "100%", maxWidth: "180px" }}
      >
        <iframe
          src={bunnyEmbedUrl(videoId)}
          loading="lazy"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
          title={label}
        />
      </div>
      <span className="text-xs text-[var(--muted)]">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO — Rendy style */}
      <HeroRendy
        eyebrow="CinemaStay · AI Cinematic Property Videos"
        headline={
          <>
            Cinematic property videos
            <br />
            <span className="text-[var(--blue)]">from your photos.</span>
            <br />
            In 24-72 hours.
          </>
        }
        sub="AI-powered cinematic videos for Airbnb hosts, real estate agents, and developers. No shoot needed. Just photos."
        ctaPrimary={{ label: "Pick Your Need", href: "#pick-your-need" }}
        ctaSecondary={{ label: "See Examples", href: "#samples" }}
        trustText="Trusted by 100+ agents · Diani, Miami, Nairobi, Austin"
        variant="home"
        heroVideo={BUNNY_VIDEOS.post1}
        showBeforeAfter={true}
      />

      {/* 3-CARD CHOOSER */}
      <section id="pick-your-need" className="section-white py-20 md:py-28 border-t border-[var(--border)]">
        <div className="container-x">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="eyebrow text-[var(--blue)]">Choose Your Path</span>
            <h2 className="h-display text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] mt-3 text-[var(--ink)]">
              Built for three kinds of growth.
            </h2>
            <p className="text-[var(--muted)] mt-4 text-base md:text-lg">
              Same AI engine, different deliverables. Pick the one that matches what you sell.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <ServiceCard
              href="/airbnb-hosts"
              icon={
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M2.25 12 12 2.25l9.75 9.75M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              brand="For Airbnb Hosts"
              pitch="Get 30% more bookings"
              price="From KES 6,000 / $79 per property"
              cta="I'm a Host"
            />
            <ServiceCard
              href="/realtors"
              icon={
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              brand="For Real Estate Agents"
              pitch="Sell listings 2x faster"
              price="From KES 12,000 / $179 per listing"
              cta="I'm a Realtor"
            />
            <ServiceCard
              href="/developers"
              icon={
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              brand="For Property Developers"
              pitch="Pre-launch cinematic packages"
              price="From KES 45,000 / $750 per project"
              cta="I'm a Developer"
            />
          </div>
        </div>
      </section>

      {/* Founder + samples */}
      <section id="samples" className="section-warm py-20 md:py-28">
        <div className="container-x">
          <div className="text-center mb-12">
            <span className="eyebrow text-[var(--blue)]">Live Examples</span>
            <h2 className="h-display text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] mt-3 text-[var(--ink)]">
              Real listings. <span className="text-[var(--blue)]">Real reels.</span>
            </h2>
            <p className="text-[var(--muted)] mt-4 max-w-md mx-auto">
              Made by <span className="text-[var(--ink)] font-semibold">Burhan</span> · 100+ cinematic videos delivered since 2024
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-center gap-6 md:gap-10">
            {SAMPLE_VIDEOS.map((s, i) => (
              <HomeSampleTile key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      <Footer />
      <WhatsappFloat />
    </main>
  );
}
