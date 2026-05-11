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
  const params = new URLSearchParams({
    autoplay: String(autoplay),
    loop: String(loop),
    muted: String(muted),
    preload: "true",
    responsive: "true",
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

export type Niche = {
  slug: "airbnb-hosts" | "realtors" | "developers";
  brand: string;          // "For Airbnb Hosts"
  shortLabel: string;     // "Hosts" — for sticky bar
  heroVideo: string;
  headline: string;
  subhead: string;
  primaryCta: string;
  primaryWaMessage: string;
  socialProof: string;
  problemP1: string;
  problemP2: string;
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
    brand: "For Airbnb Hosts",
    shortLabel: "Hosts",
    heroVideo: BUNNY_VIDEOS.post1,
    headline: "Get 30% More Airbnb Bookings With Cinematic Reels From Your Listing Photos",
    subhead: "Delivered in 24 hours. KES 6,000 / $79 per property. KES 2,000 deposit.",
    primaryCta: "WhatsApp Us — 24hr Delivery",
    primaryWaMessage: "Hi, I'm an Airbnb host interested in cinematic videos for my listing.",
    socialProof: "Trusted by hosts in: Diani · Watamu · Naivasha · Miami · Austin · Asheville",
    problemP1: "Your photos are good. The competition's photos are also good. Video is what wins the algorithm now.",
    problemP2: "Airbnb's own data shows listings with video get 2-3x more views. But shooting video means hiring crews, scheduling shoots, paying $500+. Until now.",
    steps: [
      { n: "01", title: "Send your photos", desc: "Drop 5-10 photos of your listing into WhatsApp. Any quality, any device." },
      { n: "02", title: "We deliver in 24 hours", desc: "3 cinematic videos: vertical Reel + horizontal Airbnb-format + alternate cut." },
      { n: "03", title: "Upload & watch bookings rise", desc: "Post to Airbnb's video slot, IG, and TikTok. Algorithm rewards video." },
    ],
    offerStack: [
      "1 cinematic 15-second Reel (vertical, IG/TikTok ready)",
      "1 horizontal version for Airbnb's video upload feature",
      "1 alternate version with different music/cuts",
      "Music + booking-CTA text overlay",
      "Your listing name + location branded in",
      "Delivered in 24 hours",
      "KES 2,000 deposit only — pay full amount on approval",
      "Full refund if not delivered within 24 hours",
    ],
    pricing: {
      tiers: [
        { region: "Kenya", flag: "🇰🇪", price: "KES 6,000 per property" },
        { region: "USA & global", flag: "🌍", price: "$79 per property" },
      ],
      bundles: [
        { label: "Bundle 3 properties", price: "KES 15,000 / $199", save: "Save 17%" },
        { label: "Bundle 5 properties", price: "KES 22,500 / $299", save: "Save 25%" },
      ],
      depositNote: "KES 2,000 / $25 deposit · Final on approval",
    },
    stickyBar: { title: "Hosts Bundle", price: "KES 6,000 / $79" },
    portfolioVideos: [
      { src: BUNNY_VIDEOS.post1, label: "Coastal villa · Diani" },
      { src: BUNNY_VIDEOS.post2, label: "City loft · Nairobi" },
      { src: BUNNY_VIDEOS.post3, label: "Lakeside cabin · Naivasha" },
    ],
    faqs: [
      { q: "Will Airbnb let me upload this video?", a: "Yes — designed specifically for Airbnb's new video feature, plus IG and TikTok formats included." },
      { q: "What if my listing photos are low quality?", a: "We work with what you have. We can also do mild enhancement included free." },
      { q: "How fast can you really deliver?", a: "24 hours from when we receive your photos and confirmation. If we miss 24 hours, full refund." },
      { q: "Can I add my own branding?", a: "Yes. Include your booking link or contact info as text overlay at no extra cost." },
      { q: "Do I own the video?", a: "100%. Use it forever, anywhere." },
    ],
  },

  "realtors": {
    slug: "realtors",
    brand: "For Real Estate Agents",
    shortLabel: "Realtors",
    heroVideo: BUNNY_VIDEOS.post2,
    headline: "Sell Listings 2x Faster With AI Cinematic Tours From Your Photos",
    subhead: "3 cinematic videos per listing. 24-hour delivery. KES 12,000 / $179.",
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
      "KES 4,000 / $50 deposit — final on approval",
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
    subhead: "5 cinematic videos to drive pre-sales. Delivered in 7 days. KES 45,000 / $750.",
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
