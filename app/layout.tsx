import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CinemaStay — AI Cinematic Property Videos in 24 Hours",
  description:
    "Cinematic property videos from your photos. For Airbnb hosts, real estate agents, and developers. Delivered in 24-72 hours. From $79.",
  metadataBase: new URL("https://realestatetech.online"),
  openGraph: {
    title: "CinemaStay — Cinematic Property Videos From Your Photos",
    description:
      "AI-powered cinematic videos for Airbnb hosts, real estate agents, and developers. No shoot needed. Just photos.",
    url: "https://realestatetech.online",
    siteName: "CinemaStay",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: { index: true, follow: true },
};

const GEO_DETECT_SCRIPT = `(function() {
  document.documentElement.classList.add('geo-loading');

  var saved = localStorage.getItem('userLocale');
  if (saved) {
    document.documentElement.classList.add('locale-' + saved);
    document.documentElement.classList.remove('geo-loading');
    document.documentElement.classList.add('geo-detected');
    return;
  }

  fetch('https://ipapi.co/json/')
    .then(function(res) { return res.json(); })
    .then(function(data) {
      var locale = data.country_code === 'KE' ? 'kenya' : 'international';
      document.documentElement.classList.add('locale-' + locale);
      document.documentElement.classList.remove('geo-loading');
      document.documentElement.classList.add('geo-detected');
    })
    .catch(function() {
      document.documentElement.classList.add('locale-kenya');
      document.documentElement.classList.remove('geo-loading');
      document.documentElement.classList.add('geo-detected');
    });
})();

function setLocale(locale) {
  localStorage.setItem('userLocale', locale);
  document.documentElement.className = document.documentElement.className
    .replace(/locale-\\w+/g, '')
    .trim();
  document.documentElement.classList.add('locale-' + locale, 'geo-detected');
}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="geo-detect"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: GEO_DETECT_SCRIPT }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
