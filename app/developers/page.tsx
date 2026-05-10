import type { Metadata } from "next";
import { NichePage } from "@/components/niche-page";
import { NICHES } from "@/data/niches";

export const metadata: Metadata = {
  title: "Pre-Launch Cinematic Reels for Developers · CinemaStay",
  description:
    "5 cinematic videos to drive pre-sales for off-plan property projects. Delivered in 7 days. From $750.",
};

export default function DevelopersPage() {
  return <NichePage niche={NICHES["developers"]} />;
}
