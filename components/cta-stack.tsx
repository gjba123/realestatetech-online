import { CONTACT, SPEC_CTA, type Niche } from "@/data/niches";

export function CtaStack({ slug }: { slug: Niche["slug"] }) {
  const cta = SPEC_CTA[slug];
  const waHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${cta.whatsappPrefill}`;
  const mailHref = `mailto:${CONTACT.email}?subject=${cta.emailSubject}`;

  return (
    <div className="container-x py-10 md:py-12">
      <div className="max-w-2xl mx-auto">
        <div className="cta-stack">
          <a href={waHref} className="cta-whatsapp wa-only" target="_blank" rel="noopener noreferrer">
            WhatsApp us
          </a>
          <a href={mailHref} className="cta-email">
            Email us
          </a>
        </div>
      </div>
    </div>
  );
}
