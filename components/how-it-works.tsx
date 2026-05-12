import type { Step } from "@/data/niches";

export function HowItWorks({ steps }: { steps: Step[] }) {
  return (
    <section id="how-it-works" className="bg-[var(--card)] py-14 sm:py-20 md:py-28 border-t border-[var(--border)]">
      <div className="container-x">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="h-display text-[1.625rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] text-[var(--ink)] leading-[1.08]">
            Three steps.{" "}
            <em className="font-italic-display" style={{ color: "var(--green)" }}>
              Twenty-four hours.
            </em>
          </h2>
          <p className="text-base md:text-lg text-[var(--muted)] mt-4 leading-relaxed">
            No call sheets, no rescheduling. We come, we shoot, we deliver — built for hosts who don&apos;t have a week to lose.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className="relative bg-[var(--card-2)] rounded-2xl border border-[var(--border)] p-6 sm:p-7 flex flex-col gap-4 card-hover"
            >
              {/* Step number */}
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-[var(--ink)] text-[var(--card)] flex items-center justify-center text-sm font-bold font-display">
                  {step.n}
                </span>
                <span className="text-[10px] font-bold tracking-widest text-[var(--green)] bg-[var(--sage)] px-2.5 py-1 rounded-full">
                  AFTER
                </span>
              </div>

              <div>
                <h3 className="h-display text-[1.15rem] sm:text-[1.3rem] text-[var(--ink)] mb-2">
                  {step.title.split(" ").slice(0, 1).join(" ")}{" "}
                  <em className="font-italic-display" style={{ color: "var(--green)" }}>
                    {step.title.split(" ").slice(1).join(" ")}
                  </em>
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{step.desc}</p>
              </div>

              {/* Bottom pill tag */}
              {i === 0 && (
                <span className="eyebrow-pill self-start text-[10px]">● 15-min onboarding</span>
              )}
              {i === 1 && (
                <span className="eyebrow-pill self-start text-[10px]">● 90-min on property</span>
              )}
              {i === 2 && (
                <span className="eyebrow-pill self-start text-[10px]">● 24-hour delivery</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
