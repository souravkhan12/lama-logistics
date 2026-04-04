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
    // Changed overflow to visible so the SVG can bleed slightly if needed
    // Removed pt-8 and used pt-16/24 for a more premium header gap
    <section className="layout-container relative overflow-visible bg-(--color-bg) pb-0 pt-(--space-section-padding)">
      <div className="relative isolate flex flex-col lg:flex-row lg:items-end">
        {/* Text Content - Added pb-20 to match the "bottom-heavy" look of the design */}
        <ScrollReveal className="relative z-10 flex w-full flex-col gap-6 pb-16 lg:w-1/2 lg:gap-8 lg:pb-24">
          <SectionBadge
            label="INDUSTRIES WE SERVE"
            backgroundColor="var(--color-surface-cream)"
            className="w-fit"
          />
          <h1 className="font-display text-h1 md:text-h0 leading-[1.05] tracking-tight">
            <span className="text-(--color-fg) block">
              Tailored Solutions for
            </span>
            <span className="text-(--color-muted) block">
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

        {/* SVG Illustration */}
        <motion.div
          className="pointer-events-none relative z-20 flex w-full items-end justify-end lg:absolute lg:-right-6 lg:bottom-0 lg:w-[55%] xl:-right-12 xl:w-[50%]"
          initial={reduce ? false : { opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: siteDuration.heroAsideIndustries,
            ease: siteEase,
            delay: 0.1,
          }}
        >
          <div className="relative aspect-4/3 w-full lg:aspect-square">
            <Image
              src="/industries/home.svg"
              alt=""
              fill
              className="object-contain object-bottom lg:object-bottom-right"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
