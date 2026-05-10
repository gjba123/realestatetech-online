"use client";

import { useEffect, useState } from "react";
import { waUrl, type Niche } from "@/data/niches";

export function StickyPricingBar({ niche }: { niche: Niche }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after 800px scroll, hide near footer
      const y = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight - 700;
      setVisible(y > 700 && y < max);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="hidden md:flex fixed bottom-0 left-0 right-0 z-40 bg-[var(--navy)] border-t border-white/10 animate-slide-up"
      style={{ boxShadow: "0 -10px 30px rgba(0,0,0,0.25)" }}
    >
      <div className="container-x flex items-center justify-between gap-4 py-3">
        <div className="flex items-center gap-4 min-w-0">
          <span className="font-display text-base font-semibold text-white truncate">
            {niche.stickyBar.title}
          </span>
          <span className="text-[var(--blue)] font-bold text-base shrink-0">
            {niche.stickyBar.price}
          </span>
        </div>
        <a
          href={waUrl(niche.primaryWaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Get Started →
        </a>
      </div>
    </div>
  );
}
