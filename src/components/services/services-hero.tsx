"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import Button from "@/components/button";
import { ScrollReveal } from "@/components/motion";
import SectionBadge from "@/components/section-badge";
import { siteDuration, siteEase } from "@/lib/motion-presets";

export default function ServicesHero() {
  const reduce = useReducedMotion();

  return (
    <section className="layout-container relative overflow-x-clip bg-(--color-bg) pb-16 pt-6 md:pt-8 md:pb-24 xl:overflow-x-visible xl:pb-0 xl:pt-(--space-section-padding)">
      {/* Mobile / tablet layout: image on top, text below */}
      <div className="flex flex-col gap-8 xl:hidden">
        <motion.div
          className="relative mx-auto h-[min(260px,52vw)] w-full max-w-[min(100%,560px)] sm:h-[min(280px,48vw)] sm:max-w-[min(100%,620px)] md:h-[300px] md:max-w-none lg:h-[320px]"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: siteDuration.heroAsideServices,
            ease: siteEase,
            delay: 0.1,
          }}
        >
          <Image
            src="/services/services-hero.png"
            alt="Operations professional working"
            fill
            className="object-contain"
            sizes="100vw"
            priority
            unoptimized
          />
        </motion.div>

        <ScrollReveal className="z-10 flex flex-col gap-6">
          <SectionBadge
            label="OUR SERVICES"
            backgroundColor="var(--color-surface-blush)"
            className="w-fit"
          />
          <h1 className="font-display text-h0 leading-tight text-(--color-fg)">
            Bringing Technology Full Circle.
          </h1>
          <p className="text-b1 leading-relaxed text-(--color-muted)">
            We help operators, OEMs, and service providers remove, recover, and
            repurpose infrastructure while maximizing asset value and ensuring
            environmental compliance.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Button variant="secondary">LET&apos;S TALK</Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Desktop: matches industries hero — half-width copy, square art zone, flush bottom-right */}
      <div className="relative isolate hidden xl:flex xl:flex-row xl:items-end">
        <ScrollReveal className="relative z-10 flex w-full flex-col gap-8 pb-24 xl:w-1/2">
          <SectionBadge
            label="OUR SERVICES"
            backgroundColor="var(--color-surface-blush)"
            className="w-fit"
          />
          <h1 className="font-display text-h0 leading-tight text-(--color-fg)">
            Bringing Technology Full Circle.
          </h1>
          <p className="max-w-[540px] text-b1 leading-relaxed text-(--color-muted)">
            We help operators, OEMs, and service providers remove, recover, and
            repurpose infrastructure while maximizing asset value and ensuring
            environmental compliance.
          </p>
          <div className="flex items-center gap-3 pt-4">
            <Button variant="secondary">LET&apos;S TALK</Button>
          </div>
        </ScrollReveal>

        <motion.div
          className="pointer-events-none relative z-20 flex w-full items-end justify-end xl:absolute xl:-right-6 xl:bottom-0 xl:w-[55%] 2xl:-right-12 2xl:w-[50%]"
          initial={reduce ? false : { opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: siteDuration.heroAsideServices,
            ease: siteEase,
            delay: 0.1,
          }}
        >
          <div className="relative aspect-square w-full">
            <Image
              src="/services/services-hero.png"
              alt="Operations professional working"
              fill
              className="object-contain object-bottom-right"
              sizes="50vw"
              priority
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
