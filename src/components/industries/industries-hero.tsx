"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import Button from "@/components/button";
import { ScrollReveal } from "@/components/motion";
import SectionBadge from "@/components/section-badge";
import { siteDuration, siteEase } from "@/lib/motion-presets";

const description =
  "From hyper-scale data centers to national telecom networks, we deliver the precision, security, and sustainability required to manage your most critical technology environments.";

export default function IndustriesHero() {
  const reduce = useReducedMotion();

  return (
    <section className="layout-container relative overflow-visible bg-(--color-bg) pb-0 pt-6 xl:pt-(--space-section-padding)">
      {/* ── Mobile / tablet: text first, image below ── */}
      <div className="flex flex-col xl:hidden">
        <ScrollReveal className="flex flex-col gap-6">
          <SectionBadge
            label="INDUSTRIES WE SERVE"
            backgroundColor="var(--color-surface-cream)"
            className="w-fit"
          />
          <h1 className="font-display text-h1 leading-[1.05] tracking-tight">
            <span className="block text-(--color-fg)">
              Tailored Solutions for
            </span>
            <span className="block text-(--color-muted)">
              Global Industry Leaders
            </span>
          </h1>
          <p className="text-b1 text-(--color-text-body)">{description}</p>
          <div className="pt-2">
            <Button variant="secondary">LET&apos;S TALK</Button>
          </div>
        </ScrollReveal>

        <motion.div
          className="pointer-events-none relative aspect-4/3 w-full"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: siteDuration.heroAsideIndustries,
            ease: siteEase,
          }}
        >
          <Image
            src="/industries/home.svg"
            alt=""
            fill
            className="object-contain object-bottom"
            sizes="100vw"
            priority
            unoptimized
          />
        </motion.div>
      </div>

      {/* ── Desktop: original side-by-side ── */}
      <div className="relative isolate hidden xl:flex xl:flex-row xl:items-end">
        <ScrollReveal className="relative z-10 flex w-full flex-col gap-8 pb-24 xl:w-1/2">
          <SectionBadge
            label="INDUSTRIES WE SERVE"
            backgroundColor="var(--color-surface-cream)"
            className="w-fit"
          />
          <h1 className="font-display text-h0 leading-[1.05] tracking-tight">
            <span className="block text-(--color-fg)">
              Tailored Solutions for
            </span>
            <span className="block text-(--color-muted)">
              Global Industry Leaders
            </span>
          </h1>
          <p className="max-w-[540px] text-b1 text-(--color-text-body)">
            {description}
          </p>
          <div className="pt-4">
            <Button variant="secondary">LET&apos;S TALK</Button>
          </div>
        </ScrollReveal>

        <motion.div
          className="pointer-events-none relative z-20 flex w-full items-end justify-end xl:absolute xl:-right-6 xl:bottom-0 xl:w-[55%] 2xl:-right-12 2xl:w-[50%]"
          initial={reduce ? false : { opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: siteDuration.heroAsideIndustries,
            ease: siteEase,
            delay: 0.1,
          }}
        >
          <div className="relative aspect-square w-full">
            <Image
              src="/industries/home.svg"
              alt=""
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
