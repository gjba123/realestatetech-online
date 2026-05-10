import type { Metadata } from "next";
import { NichePage } from "@/components/niche-page";
import { NICHES } from "@/data/niches";

export const metadata: Metadata = {
  title: "Cinematic Airbnb Reels in 24 Hours · CinemaStay",
  description:
    "Get 30% more Airbnb bookings with cinematic video reels from your listing photos. Delivered in 24 hours. From $79 per property.",
};

export default function AirbnbHostsPage() {
  return <NichePage niche={NICHES["airbnb-hosts"]} />;
}
