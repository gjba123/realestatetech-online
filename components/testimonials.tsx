const TESTIMONIALS = [
  {
    name: "Maya O.",
    role: "Airbnb Superhost · Diani",
    quote:
      "I posted three of these reels and bookings spiked the next week. My listing finally looks as good as the property is.",
    avatar: "linear-gradient(135deg,#FFB68C,#FF7A45)",
    metric: "+38% bookings",
  },
  {
    name: "Chris T.",
    role: "Realtor · Austin",
    quote:
      "Got 4 inquiries in the first 24 hours after posting on IG. The cinematic exterior approach video did most of the work.",
    avatar: "linear-gradient(135deg,#A4D4FF,#4F8BE2)",
    metric: "Listed → offer in 9 days",
  },
  {
    name: "Faith N.",
    role: "Developer · Nairobi",
    quote:
      "We used the project teaser reel in our pre-launch campaign — reserved 12 units before construction even started.",
    avatar: "linear-gradient(135deg,#C2E2A8,#67B143)",
    metric: "12 units pre-sold",
  },
];

export function Testimonials() {
  return (
    <section className="section-white py-20 md:py-28 border-t border-[var(--border)]">
      <div className="container-x">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="eyebrow text-[var(--blue)]">What People Say</span>
          <h2 className="h-display text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] mt-3 text-[var(--ink)]">
            Different niches.{" "}
            <span className="text-[var(--blue)]">Same outcome.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="card-base p-7 flex flex-col gap-5 card-hover"
            >
              {/* Stars */}
              <div className="flex gap-1 text-[var(--gold)]">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-[var(--ink-2)] text-base leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Metric pill */}
              <span className="inline-flex w-fit items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--green-soft)] text-[var(--whatsapp-dark)] text-xs font-semibold">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M2 7l3 3 5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t.metric}
              </span>

              <figcaption className="flex items-center gap-3 pt-2 border-t border-[var(--border)]">
                <span
                  className="w-10 h-10 rounded-full"
                  style={{ background: t.avatar }}
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--ink)]">{t.name}</p>
                  <p className="text-xs text-[var(--muted)]">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
