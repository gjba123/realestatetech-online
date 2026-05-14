import { CONTACT, waUrl, type Niche } from "@/data/niches";

export function FinalCta({ niche }: { niche: Niche }) {
  return (
    <section className="section-light py-14 sm:py-20 md:py-28">
      <div className="container-x max-w-4xl">
        <div
          className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-center"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 50% 0%, #E8F1FF 0%, #FAFAF7 70%)",
            border: "1px solid var(--border)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(46,134,255,0.18) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10">
            <span className="eyebrow text-[var(--green)]">Ready?</span>
            <h2 className="h-display text-[1.625rem] sm:text-[2.25rem] md:text-[3rem] lg:text-[3.75rem] mt-3 mb-5 text-[var(--ink)] leading-[1.05]">
              Ready to turn your property photos into{" "}
              <em className="font-italic-display" style={{ color: "var(--green)" }}>videos?</em>
            </h2>
            <p className="text-[var(--muted)] text-base md:text-lg max-w-xl mx-auto mb-10">
              Send your photos today. We create polished vertical videos for Reels,
              TikTok, Stories, listing pages, and direct booking campaigns. Small
              deposit to start, balance after preview approval.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
              <a
                href={waUrl(niche.primaryWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp btn-mobile-full wa-only"
              >
                <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                WhatsApp us now
              </a>

              <a
                href={`mailto:${CONTACT.email}?subject=Cinematic%20${niche.shortLabel}%20Inquiry`}
                className="btn-ink btn-mobile-full intl-only"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Email us now
              </a>

              <a
                href={`mailto:${CONTACT.email}?subject=Cinematic%20${niche.shortLabel}%20Inquiry`}
                className="btn-ghost btn-mobile-full wa-only"
              >
                Email instead
              </a>
            </div>

            <p className="text-[var(--muted)] text-xs mt-6 wa-only">
              Or book a free 15-minute consultation on WhatsApp.
            </p>
            <p className="text-[var(--muted)] text-xs mt-6 intl-only">
              We reply within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
