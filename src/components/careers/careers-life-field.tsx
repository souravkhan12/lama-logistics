"use client";

import Image from "next/image";
import { Fragment } from "react";

import { ScrollReveal } from "@/components/motion";
import SectionBadge from "@/components/section-badge";
import { CAREERS_FIELD_ROWS } from "@/data/careers-data";

/** Matches `public/careers/life in field/content.png`: 296×200, radius 10px (`rounded-md`). */
const LIFE_FIELD_IMG_W = 296;
const LIFE_FIELD_IMG_H = 200;

export default function CareersLifeField() {
  return (
    <section className="bg-(--color-bg) py-(--space-section-padding)">
      <div className="layout-container">
        <ScrollReveal>
          <div className="flex flex-col gap-12 lg:gap-16">
            {/* Top: title column lines up with image column; intro lines up with role copy column */}
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
              <div className="flex w-full max-w-[494px] flex-col gap-4">
                <SectionBadge
                  label="Our structure"
                  backgroundColor="var(--color-surface-cream)"
                />
                <h2 className="font-display text-h1 font-light md:text-h0">
                  Life in the Field
                </h2>
              </div>
              <div className="min-w-0 lg:max-w-[min(100%,670px)]">
                <p className="font-body text-b1">
                  To keep our decommissioning safe and secure across the US,
                  we’ve organized our field operations into three specialized
                  roles. When you join us, you aren’t just moving
                  equipment—you’re part of a disciplined system built for total
                  transparency.
                </p>
              </div>
            </div>

            {/* Rows: fixed-size images (left) + copy (right), vertically centered per row */}
            <div className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-14 xl:gap-x-16">
              {CAREERS_FIELD_ROWS.map((row) => (
                <Fragment key={row.id}>
                  <div className="relative h-[200px] w-full max-w-[296px] shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={row.imageSrc}
                      alt=""
                      width={LIFE_FIELD_IMG_W}
                      height={LIFE_FIELD_IMG_H}
                      className="h-full w-full object-cover"
                      sizes="296px"
                    />
                  </div>
                  <div className="flex min-w-0 flex-col gap-4 lg:max-w-[min(100%,670px)]">
                    <div className="text-(--color-muted)">
                      <p className="font-display text-h3">{row.titleMuted}</p>
                    </div>
                    <div className="text-(--color-fg)">
                      <p className="font-display text-h2">{row.titleLead}</p>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
