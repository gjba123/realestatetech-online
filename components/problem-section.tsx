export function ProblemSection({ p1, p2 }: { p1: string; p2: string }) {
  return (
    <section className="section-light py-14 sm:py-20 md:py-28">
      <div className="container-x max-w-3xl">
        <span className="eyebrow text-[var(--blue)]">The Problem</span>
        <p className="h-display text-[1.375rem] sm:text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] mt-4 mb-6 text-[var(--ink)] leading-tight">
          {p1}
        </p>
        <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed">{p2}</p>
      </div>
    </section>
  );
}
