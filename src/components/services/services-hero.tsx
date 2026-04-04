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
    <section className="relative overflow-hidden bg-(--color-bg) pt-6 pb-16 md:pt-10 md:pb-24">
      <div className="layout-container relative">
        <div className="flex items-center justify-between">
          <ScrollReveal className="z-10 flex max-w-[700px] flex-1 flex-col justify-center gap-6 pl-(--space-container-padding)">
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
        </div>

        <motion.div
          className="absolute top-1/2 right-0 hidden -translate-y-1/2 lg:block"
          initial={reduce ? false : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: siteDuration.heroAsideServices,
            ease: siteEase,
            delay: 0.12,
          }}
        >
          <div className="relative h-[460px] w-[650px]">
            <Image
              src="/services/landing.svg"
              alt="Operations professional working"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
