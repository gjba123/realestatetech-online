import Link from "next/link";

type Props = {
  href: string;
  icon: React.ReactNode;
  brand: string;
  pitch: string;
  price: string;
  cta: string;
  accent?: "blue" | "navy";
};

export function ServiceCard({
  href,
  icon,
  brand,
  pitch,
  price,
  cta,
  accent = "blue",
}: Props) {
  return (
    <Link
      href={href}
      className="group relative bg-white rounded-3xl border border-[var(--border)] p-7 md:p-8 card-hover flex flex-col"
    >
      {/* Accent corner */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-tr-3xl rounded-bl-3xl pointer-events-none transition-opacity"
        style={{
          background:
            accent === "blue"
              ? "radial-gradient(circle at top right, rgba(46,134,255,0.08), transparent 70%)"
              : "radial-gradient(circle at top right, rgba(10,22,40,0.06), transparent 70%)",
        }}
      />

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-[var(--blue-soft)] text-[var(--blue)] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="font-display text-2xl md:text-[1.75rem] font-bold text-[var(--ink)] mb-2 leading-tight">
        {brand}
      </h3>

      <p className="text-[var(--blue)] font-medium text-base mb-1">{pitch}</p>
      <p className="text-[var(--muted)] text-sm mb-7">{price}</p>

      <div className="mt-auto">
        <span className="inline-flex items-center gap-2 text-[var(--ink)] font-semibold text-sm group-hover:text-[var(--blue)] transition-colors">
          {cta}
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            viewBox="0 0 24 24"
            className="group-hover:translate-x-1 transition-transform"
          >
            <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
