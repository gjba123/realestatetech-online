type Item = { title: string; desc: string };

export function WhoItsFor({ items }: { items: Item[] }) {
  if (!items?.length) return null;
  return (
    <section className="bg-[var(--card)] py-14 sm:py-20 md:py-24 border-t border-[var(--border)]">
      <div className="container-x">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="eyebrow-pill mb-5 inline-flex">Who it&apos;s for</span>
          <h2 className="h-display text-[1.625rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] text-[var(--ink)] leading-[1.08]">
            Built for property businesses that depend on{" "}
            <em className="font-italic-display" style={{ color: "var(--green)" }}>
              social media.
            </em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {items.map((it, i) => (
            <div key={i} className="card-cream-2 p-6 flex flex-col gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[var(--sage)] text-[var(--green)] flex items-center justify-center font-display font-bold text-sm">
                {i + 1}
              </span>
              <h3 className="h-display text-[1.05rem] text-[var(--ink)] leading-snug">
                {it.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
