import type { Metadata } from "next";
import { NichePage } from "@/components/niche-page";
import { NICHES } from "@/data/niches";

export const metadata: Metadata = {
  title: "Property Reels in 24 Hours · CinemaStay",
  description:
    "Turn your property photos into cinematic Reels that bring more WhatsApp, DM, and booking inquiries. 3 vertical videos in 24 hours. No shoot needed. Kenya + USA.",
};

export default function PropertyReelsPage() {
  return <NichePage niche={NICHES["airbnb-hosts"]} />;
}
