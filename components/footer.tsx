"use client";

import Link from "next/link";
import { CONTACT, waUrl } from "@/data/niches";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-2)]">
      <div className="container-x py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-baseline gap-1 mb-3">
              <span className="font-display text-2xl font-bold text-[var(--ink)]">Cinema</span>
              <span className="font-display text-2xl font-bold text-[var(--blue)]">Stay</span>
            </Link>
            <p className="text-[var(--muted)] text-sm max-w-sm leading-relaxed">
              Cinematic property videos for short-stay hosts, real estate agents,
              and developers. Delivered fast, formatted for every major platform.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[var(--ink)] font-semibold mb-3">
              Services
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[var(--muted)]">
              <li><Link href="/reels" className="hover:text-[var(--blue)] transition-colors">Property Reels</Link></li>
              <li><Link href="/realtors" className="hover:text-[var(--blue)] transition-colors">Realtors</Link></li>
              <li><Link href="/developers" className="hover:text-[var(--blue)] transition-colors">Developers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[var(--ink)] font-semibold mb-3">
              Contact
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[var(--muted)]">
              <li className="wa-only">
                <a
                  href={waUrl("Hi, I'm interested in cinematic property videos.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--whatsapp)] transition-colors"
                >
                  WhatsApp +254 788 063150
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-[var(--blue)] transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-[var(--muted)] mr-2">Payment:</span>
            {[
              { label: "M-Pesa", color: "#11A05A", waOnly: true },
              { label: "Wise", color: "#9FE870", waOnly: false },
              { label: "PayPal", color: "#003087", waOnly: false },
            ].map((p) => (
              <span
                key={p.label}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border border-[var(--border)] bg-white ${p.waOnly ? "wa-only" : ""}`}
                style={{ color: p.color }}
              >
                {p.label}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--blue-soft)] text-[var(--blue)] font-medium">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <path d="M3.5 6l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              100% refund if not delivered on time
            </span>
          </div>
        </div>

        <div className="border-t border-[var(--border)] mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[var(--muted)] wa-only">© 2026 CinemaStay · Built in Kenya · Serving clients worldwide</p>
          <p className="text-xs text-[var(--muted)] intl-only">© 2026 CinemaStay · Serving clients worldwide</p>
          <p className="text-xs text-[var(--muted)]">realestatetech.online</p>
        </div>
      </div>
    </footer>
  );
}
