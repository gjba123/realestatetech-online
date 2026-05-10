"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FloatNotifications } from "@/components/float-notifications";

type HeroProps = {
  eyebrow: string;
  headline: React.ReactNode;
  sub: string;
  ctaPrimary: { label: string; href: string; whatsapp?: boolean };
  ctaSecondary?: { label: string; href: string };
  trustText: string;
  variant?: "home" | "hosts" | "realtors" | "developers";
  heroVideo?: string;
  beforeImage?: string;
  showBeforeAfter?: boolean;
};

export function HeroRendy({
  eyebrow,
  headline,
  sub,
  ctaPrimary,
  ctaSecondary,
  trustText,
  variant = "home",
  heroVideo,
  beforeImage = "/images/thumbnail-0.png",
  showBeforeAfter = true,
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
  }, []);

  return (
    <section className="relative bg-paper overflow-hidden pt-28 md:pt-36 pb-16 md:pb-20">
      {/* Soft halo */}
      <div className="halo-soft" />

      <div className="container-x relative z-10">
        {/* Eyebrow + trust strip */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 mb-5 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)] animate-pulse" />
            <span className="eyebrow text-[var(--muted)]">{eyebrow}</span>
          </span>

          <h1 className="h-display text-[2.75rem] sm:text-[4rem] md:text-[5rem] text-[var(--ink)] mb-6 animate-fade-up" style={{ animationDelay: "0.05s" }}>
            {headline}
          </h1>

          <p className="text-base md:text-lg text-[var(--muted)] max-w-xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            {sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-up w-full sm:w-auto justify-center" style={{ animationDelay: "0.25s" }}>
            <a
              href={ctaPrimary.href}
              target={ctaPrimary.whatsapp ? "_blank" : undefined}
              rel={ctaPrimary.whatsapp ? "noopener noreferrer" : undefined}
              className={`${ctaPrimary.whatsapp ? "btn-whatsapp" : "btn-primary"} btn-mobile-full`}
            >
              {ctaPrimary.whatsapp && (
                <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              )}
              {ctaPrimary.label}
            </a>
            {ctaSecondary && (
              <a href={ctaSecondary.href} className="btn-ghost btn-mobile-full">
                {ctaSecondary.label}
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </div>

          {/* Avatar trust strip */}
          <div className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <div className="flex -space-x-2">
              {[
                "linear-gradient(135deg,#FFB68C,#FF7A45)",
                "linear-gradient(135deg,#A4D4FF,#4F8BE2)",
                "linear-gradient(135deg,#FFD27F,#D4AF37)",
                "linear-gradient(135deg,#C2E2A8,#67B143)",
                "linear-gradient(135deg,#E0BEFF,#8B5CF6)",
              ].map((g, i) => (
                <span
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-[var(--bg)]"
                  style={{ background: g }}
                />
              ))}
            </div>
            <p className="text-xs md:text-sm text-[var(--muted)]">{trustText}</p>
          </div>
        </div>

        {/* Hero visual: Before/After split */}
        <div className="relative mt-12 md:mt-16 max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <div className="relative">
            {showBeforeAfter ? (
              <div className="grid grid-cols-2 gap-3 md:gap-4 items-center relative">
                {/* BEFORE — photo grid */}
                <div className="relative">
                  <div className="absolute -top-3 left-3 z-10 px-3 py-1 rounded-full bg-[var(--surface-2)] border border-[var(--border)] text-[11px] font-semibold text-[var(--muted)] tracking-wider">
                    BEFORE · static photos
                  </div>
                  <div className="card-base p-3 md:p-4">
                    <Image
                      src={beforeImage}
                      alt="Static property photos"
                      width={520}
                      height={400}
                      className="w-full h-auto rounded-lg"
                      priority
                    />
                  </div>
                </div>

                {/* AFTER — phone with video */}
                <div className="relative">
                  <div className="absolute -top-3 left-3 z-10 px-3 py-1 rounded-full bg-[var(--blue)] text-white text-[11px] font-semibold tracking-wider">
                    AFTER · cinematic reel
                  </div>
                  <div className="card-base p-3 md:p-4 flex justify-center">
                    <div
                      className="relative rounded-[1.4rem] overflow-hidden bg-black w-full max-w-[200px]"
                      style={{ aspectRatio: "9/16" }}
                    >
                      {heroVideo && (
                        <video
                          ref={videoRef}
                          src={heroVideo}
                          muted
                          loop
                          playsInline
                          autoPlay
                          preload="metadata"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Arrow between */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[var(--ink)] text-white items-center justify-center shadow-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ) : (
              // Centered phone (when no before/after)
              <div className="flex justify-center">
                <div className="card-base p-4 max-w-[260px] mx-auto">
                  <div
                    className="rounded-[1.4rem] overflow-hidden bg-black"
                    style={{ aspectRatio: "9/16" }}
                  >
                    {heroVideo && (
                      <video
                        ref={videoRef}
                        src={heroVideo}
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Floating notifications */}
            <FloatNotifications variant={variant} />
          </div>
        </div>
      </div>
    </section>
  );
}
