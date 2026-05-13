import { HeroRendy } from "@/components/hero-rendy";
import { CONTACT, SPEC_CTA, waUrl, type Niche } from "@/data/niches";

const VARIANT_MAP: Record<Niche["slug"], "hosts" | "realtors" | "developers"> = {
  "airbnb-hosts": "hosts",
  "realtors": "realtors",
  "developers": "developers",
};

const TRUST_MAP: Record<Niche["slug"], string> = {
  "airbnb-hosts": "100+ property videos delivered · Kenya-based · USA clients",
  "realtors": "Trusted by realtors closing 40% faster (NAR 2025)",
  "developers": "Built for off-plan launches · 10-50+ unit projects",
};

const INTL_CTA_LABEL: Record<Niche["slug"], string> = {
  "airbnb-hosts": "Email Me Your Photos",
  "realtors": "Email Us — 24hr Reply",
  "developers": "Email Us — Book Discovery Call",
};

export function NicheHero({ niche }: { niche: Niche }) {
  const emailSubject = SPEC_CTA[niche.slug]?.emailSubject ?? encodeURIComponent("Cinematic Property Videos — Inquiry");
  const emailHref = `mailto:${CONTACT.email}?subject=${emailSubject}`;

  return (
    <HeroRendy
      headline={<>{niche.headline}</>}
      sub={niche.subhead}
      ctaPrimary={{
        label: niche.primaryCta,
        href: waUrl(niche.primaryWaMessage),
        whatsapp: true,
      }}
      ctaPrimaryEmail={{
        label: INTL_CTA_LABEL[niche.slug],
        href: emailHref,
      }}
      ctaSecondary={{ label: "See Sample Videos", href: "#portfolio" }}
      trustText={TRUST_MAP[niche.slug]}
      variant={VARIANT_MAP[niche.slug]}
      heroVideo={niche.heroVideo}
      showBeforeAfter={false}
    />
  );
}
