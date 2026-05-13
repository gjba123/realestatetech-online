type Card = { n: string; title: string; desc: string };

const DEFAULT_CARDS: Card[] = [
  {
    n: "01",
    title: "Photos blend in.",
    desc: "Your hero shot looks identical to fifty other listings in the same neighborhood. Guests can't feel the space — and they keep scrolling.",
  },
  {
    n: "02",
    title: "Production is brutal.",
    desc: "A traditional shoot is expensive, takes days to schedule, and the edit still misses the moments that drive bookings.",
  },
  {
    n: "03",
    title: "Algorithms favor reels.",
    desc: "Instagram, TikTok, and listing pages now prioritize short video. Properties without it lose attention to those that have it.",
  },
];

export function ProblemSection({
  p1,
  p2,
  cards,
}: {
  p1: string;
  p2: string;
  cards?: Card[];
}) {
  const items = cards && cards.length ? cards : DEFAULT_CARDS;
  return (
    <section className="bg-[var(--bg)] py-14 sm:py-20 md:py-28 border-t border-[var(--border)]">
      <div className="container-x">
        <div className="max-w-3xl mb-12 sm:mb-14">
          <span className="eyebrow-pill mb-5 inline-flex">The problem</span>
          <h2 className="h-display text-[1.625rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] text-[var(--ink)] leading-[1.08] mb-4">
            {p1}
          </h2>
          <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed">{p2}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          {items.map((p) => (
            <div key={p.n} className="card-cream p-6 sm:p-7 flex flex-col gap-3">
              <span className="num-marker">{p.n}</span>
              <h3 className="h-display text-[1.15rem] sm:text-[1.25rem] text-[var(--ink)]">
                {p.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
