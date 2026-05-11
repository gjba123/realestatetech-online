export function OfferStack({ items }: { items: string[] }) {
  return (
    <section className="section-white py-14 sm:py-20 md:py-28 border-y border-[var(--border)]">
      <div className="container-x max-w-3xl">
        <div className="mb-10">
          <span className="eyebrow text-[var(--blue)]">What You Get</span>
          <h2 className="h-display text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] mt-3 text-[var(--ink)] leading-tight">
            Everything included.
            <br />
            <span className="text-[var(--blue)]">No upsells.</span>
          </h2>
        </div>

        <ul className="grid sm:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]"
            >
              <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[var(--blue)] text-white flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M3 6.5l2.5 2.5L10 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-sm text-[var(--ink-2)] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
