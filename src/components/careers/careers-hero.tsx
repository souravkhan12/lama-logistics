"use client";

import Image from "next/image";

import { ScrollReveal } from "@/components/motion";

import CareersSplitButtonDark from "./careers-split-button-dark";

export default function CareersHero() {
  return (
    <section className="pb-14 pt-6 lg:pb-0 lg:pt-32">
      <div className="layout-container flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10 xl:gap-16">
        {/* Image — shown first on mobile, second on desktop; lg+ sits on bottom like services/industries heroes */}
        <div className="relative mx-auto flex w-full max-w-[640px] flex-1 flex-col justify-end lg:order-2 lg:mx-0 lg:max-w-none">
          <div className="relative h-[300px] w-full sm:h-[340px] lg:h-[clamp(280px,36vh,400px)] 2xl:h-[clamp(320px,38vh,440px)]">
            <Image
              src="/careers/home.svg"
              alt=""
              fill
              className="object-contain object-bottom object-center lg:object-bottom lg:object-right"
              sizes="(min-width: 1536px) 42vw, (min-width: 1024px) 44vw, 100vw"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Text content */}
        <ScrollReveal className="flex max-w-[600px] flex-col gap-6 lg:order-1 lg:max-w-[min(100%,600px)] lg:justify-center">
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
