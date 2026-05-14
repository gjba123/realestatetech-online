import { HeroRendy } from "@/components/hero-rendy";
import { CONTACT, SPEC_CTA, bunnyEmbedUrl, waUrl, type Niche } from "@/data/niches";

const VARIANT_MAP: Record<Niche["slug"], "hosts" | "realtors" | "developers"> = {
  "airbnb-hosts": "hosts",
  realtors: "realtors",
  developers: "developers",
};

const TRUST_MAP: Record<Niche["slug"], string> = {
  "airbnb-hosts": "100+ property videos delivered · Kenya-based · USA clients",
  realtors: "Trusted by realtors closing 40% faster (NAR 2025)",
  developers: "Built for off-plan launches · 10-50+ unit projects",
};

const INTL_CTA_LABEL: Record<Niche["slug"], string> = {
  "airbnb-hosts": "Email Me Your Photos",
  realtors: "Email Us — 24hr Reply",
  developers: "Email Us — Book Discovery Call",
};

const EYEBROW_MAP: Record<Niche["slug"], string> = {
  "airbnb-hosts": "Property reels · 24h delivery",
  realtors: "Listing videos · 24h delivery",
  developers: "Launch reels · 7-day packages",
};

export function NicheHero({ niche }: { niche: Niche }) {
  const emailSubject = SPEC_CTA[niche.slug]?.emailSubject ?? encodeURIComponent("Cinematic Property Videos — Inquiry");
  const emailHref = `mailto:${CONTACT.email}?subject=${emailSubject}`;

  if (niche.slug === "airbnb-hosts") {
    return (
      <section className="relative overflow-hidden bg-[var(--bg)] pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-24 md:pb-14 border-b border-[var(--border)]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% -15%, rgba(15,61,46,0.08), transparent 70%)",
          }}
        />

        <div className="container-x relative z-10">
          <div className="grid md:grid-cols-[minmax(0,36rem)_250px] lg:grid-cols-[minmax(0,38rem)_260px] gap-7 md:gap-10 lg:gap-12 items-center">
            <div className="max-w-[34rem]">
              <span className="eyebrow-pill mb-5 inline-flex">
                Property reels · 24h delivery
              </span>

              <h1 className="h-display text-[2.2rem] sm:text-[2.8rem] md:text-[3rem] lg:text-[3.15rem] text-[var(--ink)] leading-[1.02] mb-4 [text-wrap:balance]">
                Property Reels That Bring More Booking Inquiries
              </h1>

              <p className="text-base sm:text-lg text-[var(--muted)] leading-[1.55] max-w-[30rem] mb-6 [text-wrap:pretty]">
                Send your photos. Get 3 polished vertical videos in 24 hours for
                Instagram, TikTok, Stories, and direct booking messages.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <a
                  href={waUrl(niche.primaryWaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ink btn-mobile-full wa-only"
                >
                  {niche.primaryCta}
                </a>
                <a href={emailHref} className="btn-ink btn-mobile-full intl-only">
                  {INTL_CTA_LABEL[niche.slug]}
                </a>
                <a href="#portfolio" className="btn-ghost btn-mobile-full">
                  See Sample Videos
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--muted)]">
                {["24-hour delivery", "3 vertical videos", "Refund if late"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="var(--green)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div
                className="relative w-full max-w-[240px] sm:max-w-[255px] md:max-w-[250px] rounded-[1.25rem] overflow-hidden bg-black border-2 border-[var(--ink)] shadow-xl"
                style={{ aspectRatio: "9/16" }}
              >
                <iframe
                  src={bunnyEmbedUrl(niche.heroVideo)}
                  loading="lazy"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                  title="Cinematic property reel"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <HeroRendy
      eyebrow={EYEBROW_MAP[niche.slug]}
      headline={<>{niche.headline}</>}
      sub={niche.subhead}
      ctaPrimary={{
        label: niche.primaryCta,
        href: waUrl(niche.primaryWaMessage),
        whatsapp: true,
      }}
      ctaPrimaryEmail={{
        label: INTL_CTA_LABEL[niche.slug],
        href: emailHref,
      }}
      ctaSecondary={{ label: "See Sample Videos", href: "#portfolio" }}
      trustText={TRUST_MAP[niche.slug]}
      variant={VARIANT_MAP[niche.slug]}
      heroVideo={niche.heroVideo}
      showBeforeAfter={false}
    />
  );
}
