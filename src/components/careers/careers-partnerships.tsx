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

        {/* Mobile grid */}
        <div className="mt-10 lg:hidden">
          <div className="grid grid-cols-3 gap-2">
            {CAREERS_BRAND_TILES.slice(0, 3).map((brand) => (
              <div
                key={brand.name}
                className={`flex h-[110px] items-center justify-center ${brand.bg}`}
                style={{ borderRadius: "9.89px" }}
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={80}
                  height={32}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          {CAREERS_BRAND_TILES.length > 3 && (
            <div className="mt-2 flex justify-center gap-2">
              {CAREERS_BRAND_TILES.slice(3).map((brand) => (
                <div
                  key={brand.name}
                  className={`flex h-[110px] w-[calc(33.333%-4px)] items-center justify-center ${brand.bg}`}
                  style={{ borderRadius: "9.89px" }}
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={80}
                    height={32}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop grid */}
        <StaggerContainer className="mt-14 hidden flex-wrap justify-center gap-4 lg:flex">
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
