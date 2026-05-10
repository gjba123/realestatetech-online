export function SocialProofBar({ text }: { text: string }) {
  return (
    <section className="section-warm border-y border-[var(--border)]">
      <div className="container-x py-4 md:py-5">
        <p className="text-center text-xs md:text-sm text-[var(--muted)] font-medium tracking-wide">
          {text}
        </p>
      </div>
    </section>
  );
}
