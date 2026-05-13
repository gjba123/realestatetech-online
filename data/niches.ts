export const CONTACT = {
  whatsappNumber: "254788063150",
  email: "buru@realestatetech.online",
  founderName: "Burhan",
  founderTagline: "100+ cinematic videos delivered since 2024",
};

/**
 * Bunny Stream config — videos hosted on Bunny, embedded via iframe.
 * Embed URL: https://iframe.mediadelivery.net/embed/{libraryId}/{videoId}?params
 */
export const BUNNY_LIBRARY_ID = "657986";

export const BUNNY_VIDEOS = {
  post1: "c75f7cfe-e14c-478a-847d-b68108cf29d9",
  post2: "d2ea1394-0164-4ff9-b6a4-e326a908fa21",
  post3: "750bba21-7a5d-4f04-8e4f-dc5682ef4345",
  post4: "21fe8247-274b-4d8f-a057-b4e14b5c6847",
} as const;

export function bunnyEmbedUrl(
  videoId: string,
  opts: { autoplay?: boolean; loop?: boolean; muted?: boolean } = {}
) {
  const { autoplay = true, loop = true, muted = true } = opts;
  // Order matters for Bunny: autoplay+muted must both be true for browser autoplay policy to allow it.
  const params = new URLSearchParams({
    autoplay: autoplay ? "true" : "false",
    muted: muted ? "true" : "false",
    loop: loop ? "true" : "false",
    preload: "true",
    playsinline: "true",
  });
  return `https://iframe.mediadelivery.net/embed/${BUNNY_LIBRARY_ID}/${videoId}?${params.toString()}`;
}

/**
 * Per-page CTA prefills (URL-encoded — exact strings from spec).
 * Used by <CtaStack /> to construct WhatsApp/Email links.
 */
export const SPEC_CTA: Record<
  "airbnb-hosts" | "realtors" | "developers",
  { whatsappPrefill: string; emailSubject: string }
> = {
  "airbnb-hosts": {
    whatsappPrefill:
      "Hi%21%20I%27m%20an%20Airbnb%20host%20interested%20in%20cinematic%20videos%20for%20my%20property.%20Can%20you%20send%20pricing%3F",
    emailSubject:
      "Airbnb%20Cinematic%20Videos%20%E2%80%94%20Pricing%20Inquiry",
  },
  realtors: {
    whatsappPrefill:
      "Hi%21%20I%27m%20a%20realtor%20interested%20in%20cinematic%20videos%20for%20my%20listings.%20Can%20you%20send%20pricing%3F",
    emailSubject:
      "Realtor%20Cinematic%20Videos%20%E2%80%94%20Pricing%20Inquiry",
  },
  developers: {
    whatsappPrefill:
      "Hi%21%20I%27m%20a%20property%20developer%20interested%20in%20cinematic%20videos%20for%20our%20project.%20Can%20we%20discuss%3F",
    emailSubject: "Developer%20Project%20%E2%80%94%20Discovery%20Call%20Request",
  },
};

/**
 * Per-page dual-currency pricing for <PricingDisplay />.
 */
export const SPEC_PRICING: Record<
  "airbnb-hosts" | "realtors" | "developers",
  { kes: string; usd: string; unit: string }
> = {
  "airbnb-hosts": { kes: "KES 6,000", usd: "$79", unit: "property" },
  realtors: { kes: "KES 12,000", usd: "$179", unit: "listing" },
  developers: { kes: "KES 45,000", usd: "$750", unit: "project" },
};

export function waUrl(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type FAQ = { q: string; a: string };
export type Step = { n: string; title: string; desc: string };
export type PricingTier = { region: string; flag: string; price: string };
export type BundleOption = { label: string; price: string; save: string };
export type ProblemCard = { n: string; title: string; desc: string };
export type WhoItsForItem = { title: string; desc: string };

export type Niche = {
  slug: "airbnb-hosts" | "realtors" | "developers";
  brand: string;
  shortLabel: string;
  heroVideo: string;
  headline: string;
  subhead: string;
  primaryCta: string;
  primaryWaMessage: string;
  socialProof: string;
  problemP1: string;
  problemP2: string;
  /** Optional: 3 problem cards. If absent the section uses defaults. */
  problemCards?: ProblemCard[];
  /** Optional: target audience cards. If absent the section is skipped. */
  whoItsFor?: WhoItsForItem[];
  steps: Step[];
  offerStack: string[];
  pricing: { tiers: PricingTier[]; bundles: BundleOption[]; depositNote: string };
  stickyBar: { title: string; price: string };
  portfolioVideos: { src: string; label: string }[];
  portfolioPlaceholder?: string;
  faqs: FAQ[];
};

export const NICHES: Record<Niche["slug"], Niche> = {
  "airbnb-hosts": {
    slug: "airbnb-hosts",
    brand: "Property Reels",
    shortLabel: "Property Reels",
    heroVideo: BUNNY_VIDEOS.post2,
    headline: "Turn your property photos into cinematic Reels that bring more WhatsApp, DM, and booking inquiries.",
    subhead: "For villas, guesthouses, rentals, and real estate listings in Kenya and the USA. Send your photos, get 3 vertical videos in 24 hours. No shoot needed.",
    primaryCta: "WhatsApp Me Your Photos",
    primaryWaMessage: "Hi Burhan, I'd like to send my property photos and get 3 cinematic reels.",
    socialProof: "100+ property videos delivered · Kenya-based · USA clients · Refund if late",
    problemP1: "Photos show the property. Video makes people stop and imagine staying there.",
    problemP2: "Your prospects already scroll past hundreds of property photos every week. A cinematic short video gives your space movement, emotion, and a clear reason to message you.",
    problemCards: [
      {
        n: "01",
        title: "Photos alone are easy to ignore.",
        desc: "Static photos blend into every other listing on Instagram, Facebook, and listing sites. Scrollers don't stop.",
      },
      {
        n: "02",
        title: "Hiring a videographer is expensive and slow.",
        desc: "A traditional shoot costs hundreds, takes days to schedule, and even longer to edit — by the time it ships, the moment is gone.",
      },
      {
        n: "03",
        title: "Social media needs fresh video often.",
        desc: "Reels, TikTok, and Stories reward consistency. One shoot a year doesn't feed the algorithm — short videos from your existing photos do.",
      },
    ],
    whoItsFor: [
      { title: "Villas, cottages & holiday homes", desc: "Coastal villas, cabins, retreats — anywhere you want direct booking inquiries instead of agency commissions." },
      { title: "Boutique stays & guesthouses", desc: "Small, design-led stays that need cinematic content to stand out on Instagram and Booking.com." },
      { title: "Small rental businesses (1–15 properties)", desc: "Owners and managers running short-stay rentals who need a steady flow of social-ready video." },
      { title: "Realtors & agents posting listings", desc: "Agents who post listings on Instagram, TikTok, and WhatsApp Status and want videos that attract buyer leads and viewing requests." },
    ],
    steps: [
      {
        n: "01",
        title: "Send 10–20 property photos",
        desc: "WhatsApp or email your best photos, plus location, price, and the WhatsApp or booking link you want people to use.",
      },
      {
        n: "02",
        title: "I create 3 video angles",
        desc: "Example: a cinematic tour, an offer video, and a short Story/TikTok cut — each built for a specific platform.",
      },
      {
        n: "03",
        title: "You review and post",
        desc: "You get the videos, captions, and CTA text ready for Instagram, Facebook, TikTok, or WhatsApp Status.",
      },
    ],
    offerStack: [
      "3 cinematic vertical videos from your existing photos",
      "Formatted for Instagram Reels, TikTok, Stories, and WhatsApp Status",
      "Text overlay with location, price, offer, or booking CTA",
      "Music matched to the property style",
      "Caption ideas for Instagram, Facebook, and TikTok",
      "WhatsApp or booking CTA wording included",
      "1 revision included",
      "Delivered in 24 hours after photos are received",
    ],
    pricing: {
      tiers: [],
      bundles: [],
      depositNote: "Small deposit to start · Balance after preview approval · Refund if delivery is late",
    },
    stickyBar: { title: "Property Reels", price: "Custom quote" },
    portfolioVideos: [
      { src: BUNNY_VIDEOS.post1, label: "Beach villa · Diani — built for Instagram Reels + WhatsApp inquiries" },
      { src: BUNNY_VIDEOS.post2, label: "City loft · Nairobi — DM-for-viewing realtor cut" },
      { src: BUNNY_VIDEOS.post3, label: "Lakeside cabin · Naivasha — booking promo Story" },
    ],
    faqs: [
      {
        q: "Do I need to shoot new video?",
        a: "No. I create the videos from your existing photos. Clear daylight photos work best.",
      },
      {
        q: "Can this work for real estate listings, not just rentals?",
        a: "Yes. For agents, the videos are built to attract buyer leads, viewing requests, and listing inquiries.",
      },
      {
        q: "What should I send?",
        a: "Send 10–20 photos, property name, location, price or nightly rate, and the link or WhatsApp number you want people to use.",
      },
      {
        q: "What if I don't like the first version?",
        a: "One revision is included. The balance is paid only after you approve the preview.",
      },
      {
        q: "Can you add my logo or phone number?",
        a: "Yes. I can add your logo, WhatsApp number, location, price, booking link, or call-to-action text.",
      },
      {
        q: "Do you guarantee bookings?",
        a: "No one can honestly guarantee bookings from one video. What I guarantee is a professional video delivered in 24 hours, or I refund you if I am late.",
      },
    ],
  },

  "realtors": {
    slug: "realtors",
    brand: "For Real Estate Agents",
    shortLabel: "Realtors",
    heroVideo: BUNNY_VIDEOS.post2,
    headline: "Sell Listings 2x Faster With AI Cinematic Tours From Your Photos",
    subhead: "3 cinematic videos per listing. 24-hour delivery. Small deposit, full refund if late.",
    primaryCta: "WhatsApp Us — 24hr Delivery",
    primaryWaMessage: "Hi, I'm a realtor interested in cinematic videos for my listings.",
    socialProof: "Realtors using AI cinematic tours close listings 40% faster (NAR 2025 data)",
    problemP1: "Your listings sit on the market while you wait for the photographer's editing queue. Meanwhile, your competitor's listing has a cinematic video and gets the inquiry.",
    problemP2: "Cinematic tour videos drive 3x more inquiries than photos alone. Until now they cost $500-2,000 per shoot.",
    steps: [
      { n: "01", title: "Send your listing photos", desc: "5-10 photos covering exterior, interior, and any drone shots if available." },
      { n: "02", title: "We deliver 3 angles in 24 hours", desc: "Cinematic exterior approach, interior walk-through, and aerial-style sweep." },
      { n: "03", title: "Post & watch inquiries spike", desc: "Zillow, IG, FB, YouTube — every format and ratio included." },
    ],
    offerStack: [
      "Cinematic exterior approach video (15-20 sec)",
      "Cinematic interior walk-through (20-30 sec)",
      "Cinematic drone-style aerial sweep (10-15 sec)",
      "All formats: Reels (vertical) + Feed (square) + YouTube (horizontal)",
      "Music + price/beds/baths/agent name overlay",
      "Delivered in 24 hours",
      "Small deposit — final on approval",
      "Refund if listing doesn't get more inquiries in 14 days",
    ],
    pricing: {
      tiers: [
        { region: "Kenya", flag: "🇰🇪", price: "KES 12,000 per listing" },
        { region: "USA & global", flag: "🌍", price: "$179 per listing" },
      ],
      bundles: [
        { label: "Monthly retainer · 4 listings", price: "KES 40,000 / $599", save: "Save 17%" },
      ],
      depositNote: "KES 4,000 / $50 deposit · Final on approval",
    },
    stickyBar: { title: "Realtor Listing", price: "KES 12,000 / $179" },
    portfolioVideos: [
      { src: BUNNY_VIDEOS.post2, label: "Modern villa · Nairobi" },
      { src: BUNNY_VIDEOS.post3, label: "Townhouse · Westlands" },
      { src: BUNNY_VIDEOS.post1, label: "US single-family listing" },
    ],
    faqs: [
      { q: "What about MLS compliance?", a: "All videos are listing-marketing compliant. We avoid copyrighted music and follow standard MLS guidelines." },
      { q: "Can I add my agent branding and contact info?", a: "Yes — name, headshot, phone, and brokerage logo all included at no extra cost." },
      { q: "What if the listing sells before I use the video?", a: "Use it for your next listing or as social content. No expiry." },
      { q: "How is this different from a photographer's video tour?", a: "We work from your existing photos in 24 hours, no shoot needed. Photographer videos take a week and cost $500-2,000." },
      { q: "Do you do drone footage?", a: "We create drone-style aerial cinematics from your existing exterior photos using AI motion." },
    ],
  },

  "developers": {
    slug: "developers",
    brand: "For Property Developers",
    shortLabel: "Developers",
    heroVideo: BUNNY_VIDEOS.post3,
    headline: "Pre-Launch Cinematic Reels for Off-Plan Properties",
    subhead: "5 cinematic videos to drive pre-sales. Delivered in 7 days. Refundable deposit.",
    primaryCta: "Book a Discovery Call",
    primaryWaMessage: "Hi, I'm a property developer interested in a cinematic pre-launch package.",
    socialProof: "Built for: Estate developers · Apartment projects · Mixed-use · Off-plan launches",
    problemP1: "You're 12 months from completion but you need pre-sales NOW. Buyers can't visit. Renders alone don't sell. You need cinematic — without the cost of a film crew.",
    problemP2: "Traditional pre-launch video packages cost $5,000-$20,000 and take weeks. Our AI cinematic process delivers 5 launch-ready videos in 7 days at a fraction of the cost.",
    steps: [
      { n: "01", title: "Send renders & shots", desc: "Architectural renders, exterior photos, and any sample interior shots." },
      { n: "02", title: "We deliver 5 videos in 7 days", desc: "Project teaser + unit walkthroughs + lifestyle reel + aerial + final CTA reel." },
      { n: "03", title: "Launch with confidence", desc: "Deploy across IG ads, brochures, sales presentations, and your launch site." },
    ],
    offerStack: [
      "Project teaser cinematic (30-60 sec hero piece)",
      "2 unit-type walkthroughs (cinematic interiors)",
      "Lifestyle/amenities reel (15-30 sec)",
      "Drone-style aerial sweep (15-20 sec)",
      "Final CTA cinematic (sales-driver, 15 sec)",
      "All formats included (web, social, presentation)",
      "Brand integration (logo, colors, project name)",
      "Delivered in 7 days · 2 rounds of revisions per video",
    ],
    pricing: {
      tiers: [
        { region: "Kenya", flag: "🇰🇪", price: "KES 45,000 per project" },
        { region: "USA & global", flag: "🌍", price: "$750 per project" },
      ],
      bundles: [
        { label: "Enterprise · 50+ unit projects", price: "Custom packages", save: "Contact for partner pricing" },
      ],
      depositNote: "KES 15,000 / $250 deposit · Balance on delivery",
    },
    stickyBar: { title: "Developer Package", price: "KES 45,000 / $750" },
    portfolioVideos: [],
    portfolioPlaceholder: "Developer portfolio launching Q1 2026 — early-bird projects available.",
    faqs: [
      { q: "Can you work from architectural renders only (no real photos)?", a: "Yes. We specialise in pre-construction marketing — renders are our primary input." },
      { q: "Can you do animations or 3D walkthroughs?", a: "We create cinematic motion from your renders — drone-style, dolly-style, and reveal cuts." },
      { q: "How fast for a full project (10+ unit types)?", a: "7 days standard. Bulk projects (50+ units) take 14 days." },
      { q: "Do we own the videos?", a: "Yes — full commercial rights, exclusive to your project." },
      { q: "Can you white-label for our marketing agency?", a: "Yes — agencies and consultants can resell. Contact for partner pricing." },
    ],
  },
};
