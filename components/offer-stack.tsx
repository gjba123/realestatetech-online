export function OfferStack({ items }: { items: string[] }) {
  return (
    <section
      id="what-you-get"
      className="bg-[var(--card)] py-14 sm:py-20 md:py-28 border-y border-[var(--border)]"
    >
      <div className="container-x max-w-3xl">
        <div className="mb-10">
          <span className="eyebrow-pill mb-5 inline-flex">What you get</span>
          <h2 className="h-display text-[1.625rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] text-[var(--ink)] leading-[1.08]">
            What you get in{" "}
            <em className="font-italic-display" style={{ color: "var(--green)" }}>
              24 hours.
            </em>
          </h2>
          <p className="text-sm md:text-base text-[var(--muted)] mt-4 leading-relaxed">
            Works best with clear, bright photos. If your photos are too low quality, I&apos;ll tell you before starting.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl bg-[var(--card-2)] border border-[var(--border)]"
            >
              <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[var(--green)] text-white flex items-center justify-center">
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
