import { CONTACT } from "@/data/niches";

export function AboutSection() {
  return (
    <section className="section-light py-14 sm:py-20 md:py-28">
      <div className="container-x max-w-4xl">
        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          {/* Founder avatar (initials) */}
          <div
            className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center font-display text-3xl font-bold text-white shrink-0"
            style={{
              background: "linear-gradient(135deg, #0A1628, #2E86FF)",
            }}
          >
            B
          </div>

          <div>
            <span className="eyebrow text-[var(--blue)]">About</span>
            <h2 className="h-display text-[1.375rem] sm:text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] mt-2 text-[var(--ink)] leading-tight">
              Built by a video specialist, not a tech bro.
            </h2>
            <p className="text-[var(--muted)] text-base md:text-lg leading-relaxed mt-5">
              I&apos;m {CONTACT.founderName}. I&apos;ve produced{" "}
              <span className="text-[var(--ink)] font-semibold">
                100+ cinematic property and lifestyle videos
              </span>{" "}
              for clients across Kenya and the US since 2024. Now I&apos;m
              bringing that quality to Airbnb hosts, real estate agents, and
              property developers — at a price and speed no traditional studio
              can match.
            </p>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "100+ videos delivered",
                "24-hour turnaround",
                "100% refund policy",
                "Built in Kenya · Worldwide clients",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--blue-soft)] text-[var(--blue)]"
                >
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                    <path d="M3.5 6l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
