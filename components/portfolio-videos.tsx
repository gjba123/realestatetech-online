"use client";

import { useEffect, useRef } from "react";

type Item = { src: string; label: string };

function VideoTile({ src, label }: Item) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    const w = wrapRef.current;
    if (!v || !w) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.4 }
    );
    obs.observe(w);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="flex flex-col items-center gap-3">
      <div
        className="relative rounded-[1.6rem] p-[2px] w-full max-w-[220px]"
        style={{
          background:
            "linear-gradient(145deg, rgba(46,134,255,0.3), rgba(10,22,40,0.05))",
          boxShadow: "0 18px 40px rgba(10,22,40,0.12)",
        }}
      >
        <div className="rounded-[1.45rem] overflow-hidden bg-black" style={{ aspectRatio: "9/16" }}>
          <video
            ref={videoRef}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <p className="text-sm text-[var(--ink-2)] font-medium text-center">{label}</p>
    </div>
  );
}

export function PortfolioVideos({
  items,
  placeholder,
}: {
  items: Item[];
  placeholder?: string;
}) {
  return (
    <section id="portfolio" className="section-white py-20 md:py-28 border-y border-[var(--border)]">
      <div className="container-x">
        <div className="text-center mb-12">
          <span className="eyebrow text-[var(--blue)]">Live Examples</span>
          <h2 className="h-display text-[2rem] sm:text-[2.5rem] md:text-[3rem] mt-3 text-[var(--ink)]">
            Real listings. <span className="text-[var(--blue)]">Real reels.</span>
          </h2>
        </div>

        {items.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {items.map((it, i) => (
              <VideoTile key={i} {...it} />
            ))}
          </div>
        ) : (
          <div className="text-center max-w-md mx-auto bg-[var(--surface-2)] border border-dashed border-[var(--border)] rounded-2xl p-10">
            <p className="text-[var(--muted)] text-sm">{placeholder}</p>
          </div>
        )}
      </div>
    </section>
  );
}
