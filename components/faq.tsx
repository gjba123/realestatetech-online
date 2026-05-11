"use client";

import { useState } from "react";
import type { FAQ as FAQType } from "@/data/niches";

export function FaqSection({ items }: { items: FAQType[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-warm py-14 sm:py-20 md:py-28">
      <div className="container-x max-w-3xl">
        <div className="text-center mb-10">
          <span className="eyebrow text-[var(--blue)]">FAQ</span>
          <h2 className="h-display text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] mt-3 text-[var(--ink)] leading-[1.1]">
            Questions? <span className="text-[var(--blue)]">Answered.</span>
          </h2>
        </div>

        <ul className="flex flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={i}
                className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-[var(--ink)] text-base md:text-lg">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full bg-[var(--blue-soft)] text-[var(--blue)] flex items-center justify-center transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 -mt-1">
                    <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
