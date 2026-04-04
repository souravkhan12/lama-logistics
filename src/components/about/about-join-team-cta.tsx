"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ScrollReveal } from "@/components/motion";

const CONTACT_HREF = "/contact";

export default function AboutJoinTeamCta() {
  return (
    <section
      className="bg-about-join-team-cta text-(--color-surface-cream)"
      aria-labelledby="about-join-team-heading"
    >
      <ScrollReveal className="layout-about-join-cta-inner">
        <div className="flex min-w-0 flex-col gap-[14px]">
          <h2 id="about-join-team-heading" className="font-display text-h1">
            Would you like to join the team?
          </h2>
          <p className="font-body text-b1">{`Write to us >>`}</p>
        </div>

        <div className="flex shrink-0 justify-start pt-2 lg:justify-end lg:pt-0">
          <Link
            href={CONTACT_HREF}
            aria-label="Apply now — contact us about joining the team"
            className="group inline-flex h-[54px] items-center gap-2 font-mono text-b2 leading-none tracking-wide text-(--color-about-joincta-label-fg) transition-all duration-400"
          >
            <span className="flex h-[54px] w-[141px] min-h-[54px] shrink-0 items-center justify-center rounded-sm bg-(--color-about-joincta-surface) transition-colors group-hover:opacity-90">
              APPLY NOW
            </span>
            <span className="flex h-[54px] w-[54px] min-h-[54px] min-w-[54px] shrink-0 items-center justify-center rounded-sm bg-(--color-about-joincta-surface) transition-all duration-400 group-hover:translate-x-1 group-hover:opacity-90">
              <ArrowRight
                className="size-5 shrink-0 text-(--color-about-joincta-label-fg)"
                strokeWidth={1.5}
                aria-hidden
              />
            </span>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
