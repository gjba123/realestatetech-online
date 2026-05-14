const FEATURED = {
  stat: "+38%",
  quote:
    "Within six weeks of replacing my hero photo with the CinemaStay cut, weekend nights jumped 38% and I closed three full-month bookings I'd been chasing since January. The reel paid for itself in eleven days.",
  name: "A. Owino",
  role: "Superhost · Coastal rental · 2 listings",
  avatar: "linear-gradient(135deg,#FFB68C,#FF7A45)",
};

const SECONDARY = [
  {
    stat: "12 units",
    quote:
      "Pre-sold 12 units off the walkthrough reel before we even opened the calendar. Easiest marketing spend of the year.",
    name: "Mateo R.",
    role: "Operator · Miami · 6 listings",
    avatar: "linear-gradient(135deg,#A4D4FF,#4F8BE2)",
  },
  {
    stat: "1/10 cost",
    quote:
      "I'd been quoted $1,400 by an agency. CinemaStay delivered better work for a fraction of it and in a day.",
    name: "Lina W.",
    role: "Host · Mountain cabin · 1 listing",
    avatar: "linear-gradient(135deg,#C2E2A8,#67B143)",
  },
];

export function Testimonials() {
  return (
    <section id="results" className="bg-[var(--bg)] py-14 sm:py-20 md:py-28 border-t border-[var(--border)]">
      <div className="container-x">
        <div className="max-w-3xl mb-12 sm:mb-14">
          <span className="eyebrow-pill mb-5 inline-flex">Results in the field</span>
          <h2 className="h-display text-[1.625rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] text-[var(--ink)] leading-[1.08]">
            From{" "}
            <em className="font-italic-display" style={{ color: "var(--green)" }}>empty calendars</em>
            {" "}to{" "}
            <em className="font-italic-display" style={{ color: "var(--green)" }}>booked-out seasons.</em>
          </h2>
          <p className="text-base md:text-lg text-[var(--muted)] mt-4 leading-relaxed">
            Real numbers from hosts and operators using short-form property video.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          <figure className="card-dark p-7 sm:p-8 flex flex-col gap-5 md:col-span-1">
            <span className="font-display text-[3rem] sm:text-[3.5rem] font-bold italic text-[var(--card-2)] leading-none">
              {FEATURED.stat}
            </span>
            <blockquote className="text-[#D5C9A8] text-sm sm:text-base leading-relaxed flex-1">
              &ldquo;{FEATURED.quote}&rdquo;
            </blockquote>
            <figcaption className="flex items-center gap-3 pt-4 border-t border-white/10">
              <span className="w-10 h-10 rounded-full flex-shrink-0" style={{ background: FEATURED.avatar }} />
              <div>
                <p className="text-sm font-semibold text-white">{FEATURED.name}</p>
                <p className="text-xs text-[#9FA89A]">{FEATURED.role}</p>
              </div>
            </figcaption>
          </figure>

          <div className="md:col-span-2 grid sm:grid-cols-2 gap-4 sm:gap-5">
            {SECONDARY.map((t, i) => (
              <figure key={i} className="card-cream p-6 sm:p-7 flex flex-col gap-4 card-hover">
                <span className="h-display text-[1.75rem] sm:text-[2rem] text-[var(--ink)] italic font-italic-display">
                  {t.stat}
                </span>
                <blockquote className="text-[var(--muted)] text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-3 border-t border-[var(--border)]">
                  <span className="w-8 h-8 rounded-full flex-shrink-0" style={{ background: t.avatar }} />
                  <div>
                    <p className="text-xs font-semibold text-[var(--ink)]">{t.name}</p>
                    <p className="text-[10px] text-[var(--muted)]">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
