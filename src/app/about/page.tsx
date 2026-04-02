import type { Metadata } from "next";

import AboutHero from "@/components/about/about-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lama Telecom Services — infrastructure transitions, asset recovery, and accountable decommissioning for operators and enterprises.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
    </div>
  );
}
