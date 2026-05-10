import { SPEC_PRICING, type Niche } from "@/data/niches";

/**
 * Dual-currency price block. Locale CSS hides/shows + reorders sizes:
 *   .locale-kenya         → KES large, USD small note
 *   .locale-international → USD large, KES small note
 */
export function PricingDisplay({ slug }: { slug: Niche["slug"] }) {
  const p = SPEC_PRICING[slug];
  return (
    <div className="pricing-display font-display text-3xl md:text-4xl font-bold text-[var(--ink)]">
      <span className="price-kes">
        {p.kes} <small className="text-[var(--muted)] font-medium text-base md:text-lg">/ {p.unit}</small>
      </span>
      <span className="price-usd">
        {p.usd} <small>/ {p.unit}</small>
      </span>
    </div>
  );
}
