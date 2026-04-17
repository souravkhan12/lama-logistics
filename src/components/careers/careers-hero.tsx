"use client";

import Image from "next/image";

import { ScrollReveal } from "@/components/motion";

import CareersSplitButtonDark from "./careers-split-button-dark";

export default function CareersHero() {
  return (
    <section className="pb-14 pt-6 lg:pb-20 lg:pt-32">
      <div className="layout-container flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10 xl:gap-16">
        {/* Image — shown first on mobile, second on desktop */}
        <div className="relative mx-auto min-h-[360px] w-full max-w-[640px] flex-1 lg:order-2 lg:mx-0 lg:max-w-none lg:min-h-[min(52vh,520px)]">
          <Image
            src="/careers/career-landing.png"
            alt=""
            fill
            className="object-contain object-center lg:object-right"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            unoptimized
          />
        </div>

        {/* Text content */}
        <ScrollReveal className="flex max-w-[600px] flex-col gap-6 lg:order-1 lg:max-w-[min(100%,600px)]">
          <h1 className="font-display text-h1 lg:text-h0">
            Build the <span className="text-(--color-muted)">future</span> by
            mastering the past
          </h1>
          <p className="font-body text-b1">
            We don&apos;t just clear out the old; we make room for what&apos;s
            next. Join a team that treats every retirement as a new opportunity
            for a sustainable future.
          </p>
          <div className="pt-2">
            <CareersSplitButtonDark
              href="#openings"
              label="VIEW CURRENT OPENINGS"
              aria-label="View current openings"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
