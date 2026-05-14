"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { CONTACT, BUNNY_VIDEOS, bunnyEmbedUrl, waUrl } from "@/data/niches";

const MAIL_HREF = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Property video inquiry")}`;

const HOME_VIDEOS = [
  { videoId: BUNNY_VIDEOS.post1, label: "Short-stay rental" },
  { videoId: BUNNY_VIDEOS.post2, label: "Listing tour" },
  { videoId: BUNNY_VIDEOS.post3, label: "Launch teaser" },
];

const SERVICES = [
  {
    href: "/reels",
    title: "Property reels",
    kicker: "For hosts and rentals",
    body: "Three vertical videos from your existing photos, built for booking inquiries and social posts.",
  },
  {
    href: "/realtors",
    title: "Listing videos",
    kicker: "For real estate agents",
    body: "Fast cinematic edits that help listings stand out across social, email, and listing pages.",
  },
  {
    href: "/developers",
    title: "Launch content",
    kicker: "For property developers",
    body: "Pre-launch reels and teaser assets for off-plan projects, campaigns, and sales teams.",
  },
];

const PROCESS = [
  "Send clear property photos and the offer you want to promote.",
  "We create polished vertical edits with music, motion, captions, and CTA text.",
  "You review the preview, approve, and post the finished videos across your channels.",
];

const FAQS = [
  {
    q: "Do I need to record new video?",
    a: "No. The service is designed to work from your existing property photos.",
  },
  {
    q: "How fast is delivery?",
    a: "Most property reel packages are delivered within 24 hours after photos and details are received.",
  },
  {
    q: "Can this work internationally?",
    a: "Yes. International clients can send photos by email and receive finished videos online.",
  },
];

function HomeVideoTile({ videoId, label, featured = false }: { videoId: string; label: string; featured?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`relative overflow-hidden bg-black border-2 border-[var(--ink)] shadow-xl ${featured ? "w-[230px] sm:w-[260px] rounded-[1.35rem]" : "w-[150px] sm:w-[170px] rounded-[1.1rem]"}`}
        style={{ aspectRatio: "9/16" }}
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
      <span className="text-xs font-medium text-[var(--muted)]">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Header />

      <section className="relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-20 md:pt-32 md:pb-20 border-b border-[var(--border)]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 45% at 50% -10%, rgba(15,61,46,0.08), transparent 70%)",
          }}
        />
        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_390px] gap-10 lg:gap-14 items-center">
            <div className="max-w-[44rem]">
              <span className="eyebrow-pill mb-5 inline-flex">Property video service</span>
              <h1 className="h-display text-[2.55rem] sm:text-[3.6rem] md:text-[4.25rem] text-[var(--ink)] leading-[0.98] mb-5 [text-wrap:balance]">
                Professional property videos from the photos you already have.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[var(--muted)] max-w-[38rem] leading-[1.55] mb-7 [text-wrap:pretty]">
                CinemaStay turns rental, listing, and development photos into polished vertical videos for Reels, TikTok, Stories, email campaigns, and listing pages.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-7 max-w-lg">
                <a
                  href={waUrl("Hi, I would like to book a property video package.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ink btn-mobile-full wa-only"
                >
                  Book a reel
                </a>
                <a href={MAIL_HREF} className="btn-ink btn-mobile-full intl-only">
                  Email us
                </a>
                <Link href="/reels" className="btn-ghost btn-mobile-full">
                  View examples
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-[34rem]">
                {[
                  ["24h", "standard delivery"],
                  ["3", "vertical videos"],
                  ["100+", "videos delivered"],
                ].map(([value, label]) => (
                  <div key={value} className="rounded-xl border border-[var(--border)] bg-[var(--card-2)] p-4">
                    <div className="font-display text-2xl text-[var(--ink)] leading-none">{value}</div>
                    <div className="text-[11px] text-[var(--muted)] mt-2 leading-tight">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[360px] min-h-[360px]">
                <div className="absolute left-0 top-12 hidden sm:block opacity-75">
                  <HomeVideoTile {...HOME_VIDEOS[1]} />
                </div>
                <div className="relative z-10 flex justify-center">
                  <HomeVideoTile {...HOME_VIDEOS[0]} featured />
                </div>
                <div className="absolute right-0 bottom-6 hidden sm:block opacity-75">
                  <HomeVideoTile {...HOME_VIDEOS[2]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-you-get" className="py-14 sm:py-20 md:py-24 border-b border-[var(--border)]">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow-pill mb-5 inline-flex">Choose your package</span>
            <h2 className="h-display text-[2rem] sm:text-[2.75rem] text-[var(--ink)] leading-[1.04]">
              Built for property teams that need video now.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--card-2)] p-6 sm:p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
              >
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--green)]">{service.kicker}</span>
                <h3 className="h-display text-2xl text-[var(--ink)] mt-4 mb-3">{service.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">{service.body}</p>
                <span className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--green)]">View service -&gt;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="bg-[var(--card)] py-14 sm:py-20 md:py-24 border-b border-[var(--border)]">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="eyebrow-pill mb-5 inline-flex">Live examples</span>
              <h2 className="h-display text-[2rem] sm:text-[2.75rem] text-[var(--ink)] leading-[1.04]">
                See the kind of videos your photos can become.
              </h2>
            </div>
            <Link href="/reels" className="btn-ghost self-start md:self-auto">
              Open examples
            </Link>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-7 md:gap-10">
            {HOME_VIDEOS.map((video, index) => (
              <HomeVideoTile key={video.videoId} {...video} featured={index === 1} />
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-14 sm:py-20 md:py-24 border-b border-[var(--border)]">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow-pill mb-5 inline-flex">How it works</span>
            <h2 className="h-display text-[2rem] sm:text-[2.75rem] text-[var(--ink)] leading-[1.04]">
              Simple enough to use every month.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {PROCESS.map((step, index) => (
              <div key={step} className="rounded-2xl border border-[var(--border)] bg-[var(--card-2)] p-6 sm:p-7">
                <span className="w-8 h-8 rounded-full bg-[var(--ink)] text-[var(--card)] flex items-center justify-center text-sm font-bold mb-5">
                  {index + 1}
                </span>
                <p className="text-[var(--ink-2)] leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[var(--card)] py-14 sm:py-20 md:py-24 border-b border-[var(--border)]">
        <div className="container-x max-w-3xl">
          <span className="eyebrow-pill mb-5 inline-flex">FAQ</span>
          <h2 className="h-display text-[2rem] sm:text-[2.75rem] text-[var(--ink)] leading-[1.04] mb-8">
            Questions clients ask first.
          </h2>
          <div className="grid gap-4">
            {FAQS.map((item) => (
              <div key={item.q} className="rounded-2xl border border-[var(--border)] bg-[var(--card-2)] p-6">
                <h3 className="font-semibold text-[var(--ink)] mb-2">{item.q}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappFloat />
    </main>
  );
}
