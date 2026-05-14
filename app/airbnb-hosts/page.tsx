import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Property Reels in 24 Hours · CinemaStay",
  description:
    "Turn your property photos into cinematic Reels that bring more WhatsApp, DM, and booking inquiries. 3 vertical videos in 24 hours. No shoot needed. Kenya + USA.",
  alternates: {
    canonical: "/reels",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AirbnbHostsRedirectPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 flex items-center justify-center">
      <Script id="airbnb-hosts-to-reels-redirect" strategy="afterInteractive">
        {`(function () {
          var target = "/reels" + window.location.search + window.location.hash;
          window.location.replace(target);
        })();`}
      </Script>

      <section className="max-w-md text-center">
        <span className="eyebrow-pill mb-5 inline-flex">Property reels</span>
        <h1 className="h-display text-3xl sm:text-4xl text-[var(--ink)] leading-tight mb-4">
          Redirecting to Property Reels
        </h1>
        <p className="text-[var(--muted)] mb-6">
          This page has moved to the new reels page.
        </p>
        <Link href="/reels" className="btn-ink inline-flex">
          Open Property Reels
        </Link>
      </section>
    </main>
  );
}
