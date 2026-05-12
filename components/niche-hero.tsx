import { HeroRendy } from "@/components/hero-rendy";
import { waUrl, type Niche } from "@/data/niches";

const VARIANT_MAP: Record<Niche["slug"], "hosts" | "realtors" | "developers"> = {
  "airbnb-hosts": "hosts",
  "realtors": "realtors",
  "developers": "developers",
};

const TRUST_MAP: Record<Niche["slug"], string> = {
  "airbnb-hosts": "Trusted by 100+ hosts · Diani · Watamu · Miami · Austin",
  "realtors": "Trusted by realtors closing 40% faster (NAR 2025)",
  "developers": "Built for off-plan launches · 10-50+ unit projects",
};

export function NicheHero({ niche }: { niche: Niche }) {
  // Format headline as visual lines (split on first sentence boundary)
  // Use the existing headline directly but render with display weight
  return (
    <HeroRendy
      headline={<>{niche.headline}</>}
      sub={niche.subhead}
      ctaPrimary={{
        label: niche.primaryCta,
        href: waUrl(niche.primaryWaMessage),
        whatsapp: true,
      }}
      ctaSecondary={{ label: "See Sample Videos", href: "#portfolio" }}
      trustText={TRUST_MAP[niche.slug]}
      variant={VARIANT_MAP[niche.slug]}
      heroVideo={niche.heroVideo}
      showBeforeAfter={false}
    />
  );
}
