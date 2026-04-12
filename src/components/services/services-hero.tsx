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
    <section className="relative w-full overflow-x-hidden bg-(--color-bg) pt-6 pb-16 md:pt-10 md:pb-24">
      <div className="layout-container relative xl:min-h-[min(360px,42vh)] 2xl:min-h-[min(400px,46vh)]">
        {/* Mobile / tablet layout: image on top, text below */}
        <div className="flex flex-col gap-8 xl:hidden">
          <motion.div
            className="relative h-[280px] w-full sm:h-[300px] md:h-[320px]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: siteDuration.heroAsideServices,
              ease: siteEase,
              delay: 0.1,
            }}
          >
            <Image
              src="/services/landing.svg"
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
              We help operators, OEMs, and service providers remove, recover,
              and repurpose infrastructure while maximizing asset value and
              ensuring environmental compliance.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Button variant="secondary">LET&apos;S TALK</Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Desktop: stretch row; copy centered vertically, art flush to bottom + right (full image, no right crop) */}
        <div className="hidden xl:flex xl:items-stretch xl:gap-x-10">
          <ScrollReveal className="relative z-10 flex min-w-0 max-w-[min(100%,700px)] shrink-0 flex-col justify-center gap-6 xl:basis-[min(100%,46%)]">
            <SectionBadge
              label="OUR SERVICES"
              backgroundColor="var(--color-surface-blush)"
              className="w-fit"
            />
            <h1 className="font-display text-h0 leading-tight text-(--color-fg)">
              Bringing Technology Full Circle.
            </h1>
            <p className="max-w-[560px] text-b1 leading-relaxed text-(--color-muted)">
              We help operators, OEMs, and service providers remove, recover,
              and repurpose infrastructure while maximizing asset value and
              ensuring environmental compliance.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Button variant="secondary">LET&apos;S TALK</Button>
            </div>
          </ScrollReveal>

          <motion.div
            className="pointer-events-none relative z-0 flex min-h-0 min-w-0 flex-1 flex-col justify-end"
            initial={reduce ? false : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: siteDuration.heroAsideServices,
              ease: siteEase,
              delay: 0.12,
            }}
          >
            <div className="relative h-[clamp(280px,34vh,380px)] w-full min-w-0 shrink-0 2xl:h-[clamp(320px,36vh,420px)]">
              <Image
                src="/services/landing.svg"
                alt="Operations professional working"
                fill
                className="object-contain object-bottom object-right"
                sizes="(min-width: 1536px) 42vw, (min-width: 1280px) 44vw, 100vw"
                priority
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
