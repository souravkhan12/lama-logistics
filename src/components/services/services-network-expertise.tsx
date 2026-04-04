"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import Button from "@/components/button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import SectionBadge from "@/components/section-badge";
import { siteDuration, siteEase } from "@/lib/motion-presets";

import {
  type NetworkExpertiseItem,
  networkExpertiseItems,
} from "./services-network-expertise-data";

const introBody = "max-w-[520px] text-b1 leading-relaxed text-(--color-muted)";

const rowArticle =
  "border-t border-(--color-border) py-12 md:py-16 last:border-b";

type ExpertiseRowProps = {
  item: NetworkExpertiseItem;
  reduceMotion: boolean | null;
};

function ExpertiseRow({ item, reduceMotion }: ExpertiseRowProps) {
  return (
    <article className={rowArticle}>
      <div className=" flex items-center justify-between gap-6 md:gap-10">
        {/* LEFT IMAGE */}
        <motion.div
          className="relative w-[160px] md:w-[220px] h-[120px] md:h-[140px] shrink-0 overflow-hidden rounded-md"
          transition={{ duration: siteDuration.hoverSubtle, ease: siteEase }}
          whileHover={reduceMotion ? undefined : { scale: 1.02 }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="flex items-start gap-6">
          {/* NUMBER */}
          <span className="shrink-0 text-h2 font-display">{item.id}</span>

          {/* TEXT CONTENT */}
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-h2">{item.title}</h3>

            <p className="text-b1 font-body max-w-[744px] text-(--color-muted)">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ServicesNetworkExpertise() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-(--color-bg) py-(--space-section-padding)">
      <div className="layout-container flex flex-col gap-14 md:gap-20">
        {/* HEADER */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* LEFT */}
          <div className="flex max-w-[720px] flex-col gap-(--space-gap-lg)">
            <SectionBadge
              backgroundColor="var(--color-surface-blush)"
              className="w-fit"
              label="SERVICE 02"
            />
            <h2 className="font-display text-h1 leading-tight text-(--color-fg)">
              End-to-End Network Deinstallation Expertise.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-(--space-gap-lg)">
            <p className={introBody}>
              Specialized removal services across the entire spectrum of telecom
              and IT environments.
            </p>
            <Button variant="secondary">GET STARTED</Button>
          </div>
        </ScrollReveal>

        {/* LIST */}
        <StaggerContainer stagger={0.1}>
          {networkExpertiseItems.map((item) => (
            <StaggerItem key={item.id}>
              <ExpertiseRow item={item} reduceMotion={reduce} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
