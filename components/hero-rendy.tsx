"use client";

import Image from "next/image";
import { bunnyEmbedUrl } from "@/data/niches";

type HeroProps = {
  eyebrow?: string;
  headline: React.ReactNode;
  sub: string;
  ctaPrimary: { label: string; href: string; whatsapp?: boolean };
  /** Alternate primary CTA for international visitors (e.g. mailto). When provided
   *  AND ctaPrimary.whatsapp is true, the WhatsApp CTA is wrapped in .wa-only and
   *  the email CTA is wrapped in .intl-only — locale CSS shows the right one. */
  ctaPrimaryEmail?: { label: string; href: string };
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
  ctaPrimaryEmail,
  ctaSecondary,
  trustText,
  variant = "home",
  heroVideo,
  beforeImage = "/images/thumbnail-0.png",
  showBeforeAfter = true,
}: HeroProps) {
  const embedSrc = heroVideo ? bunnyEmbedUrl(heroVideo) : null;

  return (
    <section className="relative bg-[var(--bg)] overflow-hidden pt-16 sm:pt-20 pb-12 sm:pb-16 md:pb-20">
      {/* Soft background halo */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(15,61,46,0.05), transparent 70%)" }}
      />

      <div className="container-x relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* LEFT — Text content */}
          <div>
            {/* Eyebrow pill (hidden if empty) */}
            {eyebrow && (
              <span className="eyebrow-pill animate-fade-up mb-5 sm:mb-7 inline-flex">
                {eyebrow}
              </span>
            )}

            {/* Headline */}
            <h1
              className="h-display text-[1.625rem] sm:text-[2.125rem] md:text-[2.5rem] lg:text-[2.875rem] text-[var(--ink)] mb-4 sm:mb-5 animate-fade-up leading-[1.08]"
              style={{ animationDelay: "0.05s" }}
            >
              {headline}
            </h1>

            {/* Sub */}
            <p
              className="text-sm sm:text-[0.95rem] md:text-base text-[var(--muted)] max-w-md mb-5 sm:mb-6 animate-fade-up leading-relaxed"
              style={{ animationDelay: "0.12s" }}
            >
              {sub}
            </p>

            {/* MOBILE-ONLY video — sits between subtext and CTA (only when no before/after) */}
            {!showBeforeAfter && embedSrc && (
              <div className="md:hidden mb-6 flex justify-center animate-fade-up" style={{ animationDelay: "0.15s" }}>
                <div
                  className="relative w-full max-w-[240px] rounded-[1.5rem] overflow-hidden bg-black border-2 border-[var(--ink)] shadow-xl"
                  style={{ aspectRatio: "9/16" }}
                >
                  <iframe
                    src={embedSrc}
                    allow="autoplay; encrypted-media; picture-in-picture; accelerometer; gyroscope"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                    title="Cinematic property reel"
                  />
                </div>
              </div>
            )}

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 mb-6 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Kenya/default primary CTA */}
              <a
                href={ctaPrimary.href}
                target={ctaPrimary.whatsapp ? "_blank" : undefined}
                rel={ctaPrimary.whatsapp ? "noopener noreferrer" : undefined}
                className={`btn-ink btn-mobile-full ${ctaPrimary.whatsapp && ctaPrimaryEmail ? "wa-only" : ""}`}
              >
                {ctaPrimary.whatsapp && (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                )}
                {ctaPrimary.label}
              </a>

              {/* International alternate primary CTA — email */}
              {ctaPrimaryEmail && ctaPrimary.whatsapp && (
                <a href={ctaPrimaryEmail.href} className="btn-ink btn-mobile-full intl-only">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                    <path d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {ctaPrimaryEmail.label}
                </a>
              )}

              {ctaSecondary && (
                <a href={ctaSecondary.href} className="btn-ghost btn-mobile-full">
                  {ctaSecondary.label}
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>

            {/* Trust strip — checkmarks */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 animate-fade-up" style={{ animationDelay: "0.28s" }}>
              {["24-hour delivery", "100% refund guarantee", "Small deposit only"].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>

            {/* Avatar row + trust text */}
            <div className="flex items-center gap-3 mt-5 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <div className="flex -space-x-2">
                {[
                  "linear-gradient(135deg,#FFB68C,#FF7A45)",
                  "linear-gradient(135deg,#A4D4FF,#4F8BE2)",
                  "linear-gradient(135deg,#FFD27F,#D4AF37)",
                  "linear-gradient(135deg,#C2E2A8,#67B143)",
                  "linear-gradient(135deg,#E0BEFF,#8B5CF6)",
                ].map((g, i) => (
                  <span key={i} className="w-7 h-7 rounded-full border-2 border-[var(--bg)]" style={{ background: g }} />
                ))}
              </div>
              <p className="text-xs text-[var(--muted)]">{trustText}</p>
            </div>
          </div>

          {/* RIGHT — Before / After visual */}
          {showBeforeAfter ? (
            <div className="relative flex justify-center items-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
              <div className="relative w-full max-w-[420px]">

                {/* BEFORE card — slightly behind/left */}
                <div className="absolute top-6 left-0 w-[44%] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-sm z-0">
                  <div className="bg-[var(--bg-2)] px-2.5 py-1 text-[10px] font-bold tracking-widest text-[var(--muted)] border-b border-[var(--border)]">
                    BEFORE
                  </div>
                  <Image
                    src={beforeImage}
                    alt="Static property photo"
                    width={260}
                    height={320}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                {/* AFTER card — phone frame, front */}
                <div className="relative ml-auto w-[58%] z-10">
                  <div className="rounded-2xl overflow-hidden border-2 border-[var(--ink)] bg-black shadow-xl"
                    style={{ aspectRatio: "9/16" }}>
                    <div className="absolute top-0 left-0 right-0 bg-[var(--ink)] px-3 py-1.5 z-10 flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-widest text-white/70">BEFORE</span>
                      <span className="text-[10px] font-bold tracking-widest text-white px-2 py-0.5 bg-[var(--green)] rounded-full">AFTER</span>
                    </div>
                    {embedSrc ? (
                      <iframe
                        src={embedSrc}
                        loading="lazy"
                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                        title="Cinematic property reel"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-[var(--green)]">
                        <span className="text-white/50 text-sm">Video</span>
                      </div>
                    )}
                  </div>

                  {/* 24h badge */}
                  <div className="absolute -top-4 -right-4 notif-card px-3 py-2 text-xs font-semibold text-[var(--ink)] flex items-center gap-1.5 animate-float" style={{ "--rot": "-2deg" } as React.CSSProperties}>
                    <span className="text-[var(--green)] font-bold text-sm">24h</span>
                    <span className="text-[var(--muted)] text-[10px] leading-tight">in your inbox,<br/>guaranteed</span>
                  </div>

                  {/* +38% badge */}
                  <div className="absolute -bottom-4 -left-8 notif-card px-3 py-2 text-xs animate-float" style={{ "--rot": "1.5deg", animationDelay: "1s" } as React.CSSProperties}>
                    <span className="font-display text-lg font-bold text-[var(--ink)] italic">+38%</span>
                    <p className="text-[10px] text-[var(--muted)] leading-tight mt-0.5">avg booking lift<br/>in 6 weeks</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex justify-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
              <div
                className="relative w-full max-w-[280px] rounded-[1.5rem] overflow-hidden bg-black border-2 border-[var(--ink)] shadow-xl"
                style={{ aspectRatio: "9/16" }}
              >
                {embedSrc && (
                  <iframe
                    src={embedSrc}
                    allow="autoplay; encrypted-media; picture-in-picture; accelerometer; gyroscope"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                    title="Cinematic property reel"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
