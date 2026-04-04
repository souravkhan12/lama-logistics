"use client";

import Image from "next/image";

import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import SectionBadge from "@/components/section-badge";
import { CAREERS_LTS_PILLARS } from "@/data/careers-data";

export default function CareersLtsWay() {
  return (
    <section className="bg-(--color-careers-panel-bg) py-(--space-section-padding)">
      <div className="layout-container flex flex-col gap-12 lg:gap-16">
        <ScrollReveal className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="flex max-w-xl flex-col gap-4">
            <SectionBadge
              label="Our core values"
              backgroundColor="var(--color-surface-cream)"
            />
            <h2 className="font-display text-h1 font-light md:text-h0">
              The LTS Way
            </h2>
          </div>
          <p className="max-w-xl font-body text-b1 lg:max-w-[520px] lg:pt-10">
            Our culture is built on three pillars that guide every decision we
            make—from the first site walk-through to the final asset report.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {CAREERS_LTS_PILLARS.map((pillar) => (
            <StaggerItem key={pillar.id}>
              <article className="flex h-[335px] w-[448px] max-w-full flex-col gap-4 overflow-hidden rounded-lg bg-(--color-surface-cream) p-8 shadow-sm">
                <div className="relative h-[100px] w-[100px] shrink-0">
                  <Image
                    src={pillar.illustrationSrc}
                    alt=""
                    fill
                    className="object-contain object-left"
                    sizes="100px"
                    unoptimized
                  />
                </div>
                <h3 className="shrink-0 font-display text-h3">
                  {pillar.title}
                </h3>
                <p className="min-h-0 flex-1 overflow-y-auto font-body text-b2 text-(--color-text-body)">
                  {pillar.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
