"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CONTACT, waUrl } from "@/data/niches";

const MAIL_HREF = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Booking — Cinematic Reel")}`;

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "What you get", href: "#what-you-get" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export function Header({ variant = "auto" }: { variant?: "auto" | "light" | "dark" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg = scrolled
    ? "bg-[var(--bg)]/92 backdrop-blur-md border-b border-[var(--border)]"
    : "bg-transparent";

  const linkColor = "text-[var(--ink-2)]";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container-x h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-md bg-[var(--ink)] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M15 10l4.553-2.527A1 1 0 0121 8.382v7.236a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="font-display text-[1.05rem] font-bold text-[var(--ink)] tracking-tight">
            CinemaStay
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium hover:text-[var(--green)] transition-colors ${linkColor}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block wa-only">
            <a
              href={waUrl("Hi, I'd like to book my first reel.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink text-sm px-5 py-2.5"
            >
              Book a reel →
            </a>
          </div>
          <div className="hidden md:block intl-only">
            <a href={MAIL_HREF} className="btn-ink text-sm px-5 py-2.5">
              Email us →
            </a>
          </div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 text-[var(--ink-2)]"
            aria-label="Menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[var(--bg)] border-t border-[var(--border)]">
          <div className="container-x py-5 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium ${linkColor}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={waUrl("Hi, I'd like to book my first reel.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-ink w-full text-center mt-2 wa-only"
            >
              Book a reel →
            </a>
            <a
              href={MAIL_HREF}
              onClick={() => setOpen(false)}
              className="btn-ink w-full text-center mt-2 intl-only"
            >
              Email us →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
