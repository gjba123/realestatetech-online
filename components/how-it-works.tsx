import type { Step } from "@/data/niches";

const ICONS = [
  // step 1 — upload
  <svg key="1" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // step 2 — magic
  <svg key="2" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09M18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // step 3 — share
  <svg key="3" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186-9.566-5.314m9.566 7.5-9.566 5.314m9.566-5.314c.18-.324.283-.696.283-1.093s-.103-.77-.283-1.093M17.25 12a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-9.566-7.5a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0Zm0 15a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export function HowItWorks({ steps }: { steps: Step[] }) {
  return (
    <section id="how-it-works" className="section-warm py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-[var(--blue)]">How It Works</span>
          <h2 className="h-display text-[2rem] sm:text-[2.5rem] md:text-[3rem] mt-3 text-[var(--ink)]">
            Three steps. Twenty-four hours. Done.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className="relative bg-white rounded-2xl p-7 border border-[var(--border)] card-hover"
            >
              <span
                className="absolute top-5 right-6 font-display text-[3.5rem] font-bold leading-none select-none pointer-events-none"
                style={{ color: "var(--blue)", opacity: 0.07 }}
              >
                {step.n}
              </span>

              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[var(--blue-soft)] text-[var(--blue)]">
                {ICONS[i] || ICONS[0]}
              </div>

              <span className="text-xs font-bold tracking-widest uppercase text-[var(--blue)] mb-2 block">
                Step {step.n}
              </span>

              <h3 className="font-display text-xl font-semibold text-[var(--ink)] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
