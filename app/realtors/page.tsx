import type { Metadata } from "next";
import { NichePage } from "@/components/niche-page";
import { NICHES } from "@/data/niches";

export const metadata: Metadata = {
  title: "AI Cinematic Tours for Realtors · CinemaStay",
  description:
    "Sell listings 2x faster with AI cinematic tours from your photos. 3 videos per listing. 24-hour delivery. From $179.",
};

export default function RealtorsPage() {
  return <NichePage niche={NICHES["realtors"]} />;
}
