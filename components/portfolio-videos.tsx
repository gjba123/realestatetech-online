"use client";

import { bunnyEmbedUrl } from "@/data/niches";

type Item = { src: string; label: string };

function VideoTile({ src, label }: Item) {
  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <div
        className="relative w-full max-w-[220px] rounded-[1.45rem] overflow-hidden bg-black border-2 border-[var(--ink)] shadow-md"
        style={{ aspectRatio: "9 / 16" }}
      >
        <iframe
          src={bunnyEmbedUrl(src)}
          loading="lazy"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
          title={label}
        />
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
    <section
      id="portfolio"
      className="bg-[var(--bg)] py-14 sm:py-20 md:py-28 border-y border-[var(--border)]"
    >
      <div className="container-x">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="eyebrow-pill mb-5 inline-flex">Live examples</span>
          <h2 className="h-display text-[1.625rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] text-[var(--ink)] leading-[1.08]">
            Real listings.{" "}
            <em className="font-italic-display" style={{ color: "var(--green)" }}>
              Real reels.
            </em>
          </h2>
        </div>

        {items.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center items-start">
            {items.map((it, i) => (
              <VideoTile key={i} {...it} />
            ))}
          </div>
        ) : (
          <div className="text-center max-w-md mx-auto bg-[var(--card-2)] border border-dashed border-[var(--border)] rounded-2xl p-10">
            <p className="text-[var(--muted)] text-sm">{placeholder}</p>
          </div>
        )}
      </div>
    </section>
  );
}
