"use client";

import Image from "next/image";

import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import SectionBadge from "@/components/section-badge";
import { CAREERS_BRAND_TILES } from "@/data/careers-data";

export default function CareersPartnerships() {
  return (
    <section className="bg-[#DCE1F44D] py-(--space-section-padding)">
      <div className="layout-container-edge">
        <ScrollReveal className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <SectionBadge
              label="WHY CHOOSE US"
              backgroundColor="var(--color-surface-cream)"
            />
            <h2 className="max-w-[786px] font-display text-h1">
              We&apos;ve built long lasting partnerships with the most ambitious
              brands across the globe
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-14 flex flex-wrap justify-center gap-4">
          {CAREERS_BRAND_TILES.map((brand) => (
            <StaggerItem key={brand.name}>
              <div
                className={`flex h-[259px] w-[259px] items-center justify-center rounded-2xl ${brand.bg}`}
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
