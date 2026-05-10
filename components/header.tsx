"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CONTACT, waUrl } from "@/data/niches";
import { LocaleToggle } from "@/components/locale-toggle";

const NAV_LINKS = [
  { label: "Airbnb Hosts", href: "/airbnb-hosts" },
  { label: "Realtors", href: "/realtors" },
  { label: "Developers", href: "/developers" },
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

  // Auto = transparent on hero (top), solid navy after scroll
  // Light-first (Rendy style): transparent on hero, light backdrop on scroll
  const headerBg =
    variant === "dark"
      ? scrolled
        ? "bg-[#0A1628]/95 backdrop-blur-md border-b border-white/10"
        : "bg-transparent"
      : scrolled
        ? "bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)]"
        : "bg-transparent";

  const linkColor = variant === "dark" ? "text-white/85" : "text-[var(--ink-2)]";
  const logoColor = variant === "dark" ? "text-white" : "text-[var(--ink)]";
  const accentColor = "text-[var(--blue)]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="container-x h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-1">
          <span className={`font-display text-xl font-bold ${logoColor}`}>
            Cinema
          </span>
          <span className={`font-display text-xl font-bold ${accentColor}`}>
            Stay
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium hover:text-[var(--blue)] transition-colors ${linkColor}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline-flex">
            <LocaleToggle />
          </span>
          <a
            href={waUrl("Hi, I'm interested in cinematic property videos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary"
          >
            Get Started
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 -mr-2 ${variant === "dark" ? "text-white" : "text-[var(--ink-2)]"}`}
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
        <div
          className={`md:hidden border-t ${variant === "dark" ? "bg-[#0A1628] border-white/10" : "bg-[var(--bg)] border-[var(--border)]"}`}
        >
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
            <div className="mt-2">
              <LocaleToggle />
            </div>
            <a
              href={waUrl("Hi, I'm interested in cinematic property videos.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Get Started
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className={`text-sm ${variant === "dark" ? "text-white/60" : "text-[var(--muted)]"}`}
            >
              {CONTACT.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
