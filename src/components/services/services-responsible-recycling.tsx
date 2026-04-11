"use client";

import {
  type MotionValue,
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { StaggerContainer, StaggerItem } from "@/components/motion";
import SectionBadge from "@/components/section-badge";

import {
  type ResponsibleRecyclingStep,
  responsibleRecyclingSteps,
} from "./services-responsible-recycling-data";

const SECTION_BG = "/services/background.svg";
const STEP_COUNT = responsibleRecyclingSteps.length;

const NODE_PATH =
  "M38 14.2606V8.53989C38 8.02165 37.5793 7.59976 37.0599 7.59976H31.3404C30.8209 7.59976 30.4002 7.17906 30.4002 6.65964V0.940129C30.4002 0.420707 29.9795 0 29.4601 0H8.54107C8.02165 0 7.60094 0.420707 7.60094 0.940129V6.65964C7.60094 7.17906 7.17906 7.59976 6.66081 7.59976H0.940129C0.421883 7.59976 0 8.02165 0 8.53989V29.4601C0 29.9795 0.421883 30.4002 0.940129 30.4002H6.66081C7.17906 30.4002 7.60094 30.8209 7.60094 31.3404V37.0599C7.60094 37.5793 8.02165 38 8.54107 38H29.4601C29.9795 38 30.4002 37.5793 30.4002 37.0599V31.3404C30.4002 30.8209 30.8209 30.4002 31.3404 30.4002H37.0599C37.5793 30.4002 38 29.9795 38 29.4601V14.2606ZM30.4002 23.7406V29.4601C30.4002 29.9795 29.9795 30.4002 29.4601 30.4002H8.54107C8.02165 30.4002 7.60094 29.9795 7.60094 29.4601V8.53989C7.60094 8.02165 8.02165 7.59976 8.54107 7.59976H29.4601C29.9795 7.59976 30.4002 8.02165 30.4002 8.53989V23.7406Z";

const NODE_DARK = "#1F0280";

const headerIcons = [
  { label: "Zero Waste", src: "/services/zero-waste.svg", alt: "Zero Waste" },
  {
    label: "ISO-Certified",
    src: "/services/iso-certified.svg",
    alt: "ISO-Certified",
  },
  {
    label: "R2v3 Processes",
    src: "/services/r2v3.svg",
    alt: "R2v3 Processes",
  },
];

function TimelineStep({
  step,
  index,
  scrollProgress,
}: {
  step: ResponsibleRecyclingStep;
  index: number;
  scrollProgress: MotionValue<number>;
}) {
  // Only the currently-focused step is white; others stay dark
  const focus = useTransform(scrollProgress, (p) => {
    const active = Math.max(0, Math.min(1, p)) * (STEP_COUNT - 1);
    const dist = Math.abs(active - index);
    if (dist > 0.55) return 0;
    if (dist < 0.25) return 1;
    return 1 - (dist - 0.25) / 0.3;
  });

  // Dashed line lights up as the scroll crosses this segment
  const dashBrightness = useTransform(scrollProgress, (p) => {
    const active = Math.max(0, Math.min(1, p)) * (STEP_COUNT - 1);
    const midpoint = index + 0.5;
    if (active < midpoint - 0.3) return 0;
    if (active > midpoint + 0.3) return 1;
    return (active - midpoint + 0.3) / 0.6;
  });

  const titleOpacity = useTransform(focus, (f) => 0.3 + 0.7 * f);
  const bodyOpacity = useTransform(focus, (f) => 0.2 + 0.7 * f);

  return (
    <div className="relative flex flex-col">
      <div className="relative mb-8 flex h-[38px] items-center">
        {/* Dark node (always visible) */}
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          className="shrink-0"
          role="presentation"
        >
          <path d={NODE_PATH} fill={NODE_DARK} />
        </svg>

        {/* White node — only visible when this step is focused */}
        <motion.svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          className="absolute left-0 top-0 shrink-0"
          style={{ opacity: focus }}
          role="presentation"
        >
          <path d={NODE_PATH} fill="#FFFFFF" />
        </motion.svg>

        {/* Dashed connector to next node (desktop only) */}
        {index < STEP_COUNT - 1 && (
          <>
            <div className="ml-3 hidden h-0 flex-1 border-t-2 border-dashed border-white/15 lg:block" />
            <motion.div
              className="absolute top-1/2 right-0 left-[50px] hidden h-0 -translate-y-1/2 border-t-2 border-dashed border-white/70 lg:block"
              style={{ opacity: dashBrightness }}
            />
          </>
        )}
      </div>

      <motion.h3
        className="font-display text-b1 text-white"
        style={{ opacity: titleOpacity }}
      >
        {step.title}
      </motion.h3>
      <motion.p
        className="mt-1 font-body text-b2 text-white"
        style={{ opacity: bodyOpacity }}
      >
        {step.body}
      </motion.p>
    </div>
  );
}

function MobileLayout() {
  return (
    <div className="relative lg:hidden">
      <div className="pointer-events-none absolute inset-0" role="presentation">
        <Image
          src={SECTION_BG}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          unoptimized
        />
      </div>

      <div className="layout-container relative z-10 flex flex-col gap-10 py-(--space-section-padding) text-white">
        {/* Header */}
        <div className="flex flex-col gap-(--space-gap-md)">
          <SectionBadge
            label="SERVICE 03"
            backgroundColor="var(--color-surface-cream)"
            className="w-fit text-black"
          />
          <h2 className="font-display text-h1 text-white">
            Responsible Recycling
            <br />
            &amp; Value Recovery
          </h2>
          <p className="font-body text-b2 leading-relaxed text-white/80">
            Turning retired infrastructure into renewed capital through
            sustainable asset management.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {headerIcons.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className="flex size-6 items-center justify-center">
                  <Image src={item.src} alt={item.alt} width={18} height={18} />
                </div>
                <span className="font-body text-b2 leading-none text-white/90">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="group mt-2 inline-flex h-[48px] w-fit items-center gap-1 font-mono text-b2 leading-none tracking-wide text-(--color-fg) transition-opacity hover:opacity-95"
          >
            <span className="flex h-[48px] items-center rounded-sm bg-(--color-surface-cream) px-(--space-btn-x)">
              GET STARTED
            </span>
            <span className="flex h-[48px] w-[48px] items-center justify-center rounded-sm bg-(--color-surface-cream) transition-transform duration-400 group-hover:translate-x-1">
              <Image
                src="/arrow.svg"
                alt=""
                width={20}
                height={20}
                className="brightness-0"
              />
            </span>
          </Link>
        </div>

        {/* Steps — stacked vertically */}
        <div className="flex flex-col gap-8">
          {responsibleRecyclingSteps.map((step) => (
            <div key={step.id} className="flex items-start gap-4">
              <div className="mt-0.5 size-[32px] shrink-0">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 38 38"
                  fill="none"
                  role="presentation"
                >
                  <path d={NODE_PATH} fill="#FFFFFF" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-h3 text-white">
                  {step.title}
                </h3>
                <p className="font-body text-b2 leading-relaxed text-white/70">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DesktopLayout() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const timelineProgress = useTransform(scrollYProgress, [0.08, 0.88], [0, 1]);

  return (
    <div ref={scrollRef} className="relative hidden min-h-[300vh] lg:block">
      <div className="sticky top-0 flex h-dvh flex-col justify-center overflow-hidden text-white">
        <div
          className="pointer-events-none absolute inset-0"
          role="presentation"
        >
          <Image
            src={SECTION_BG}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            unoptimized
          />
        </div>

        <div className="layout-container relative z-10 flex flex-col gap-24">
          <div className="grid grid-cols-2 items-start gap-x-16 xl:gap-x-20">
            <div className="flex max-w-[min(100%,680px)] flex-col gap-(--space-gap-md)">
              <SectionBadge
                label="SERVICE 03"
                backgroundColor="var(--color-surface-cream)"
                className="w-fit text-black"
              />
              <h2 className="font-display text-h1 text-white">
                <span className="whitespace-nowrap">Responsible Recycling</span>
                <br />
                &amp; Value Recovery
              </h2>
            </div>

            <div className="ml-auto flex max-w-[min(100%,520px)] flex-col gap-(--space-gap-lg)">
              <StaggerContainer
                className="flex flex-wrap items-center gap-x-10 gap-y-(--space-gap-md)"
                stagger={0.05}
              >
                {headerIcons.map((item) => (
                  <StaggerItem key={item.label}>
                    <div className="flex items-center gap-3">
                      <div className="flex size-7 items-center justify-center">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={20}
                          height={20}
                        />
                      </div>
                      <span className="font-body text-b2 leading-none text-white">
                        {item.label}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <p className="max-w-xl font-body text-b2 leading-relaxed text-white">
                Turning retired infrastructure into renewed capital through
                sustainable asset management.
              </p>

              <Link
                href="/contact"
                className="group inline-flex h-[54px] w-fit items-center gap-(--space-gap-sm) font-mono text-b2 leading-none tracking-wide text-(--color-fg) transition-opacity hover:opacity-95"
              >
                <span className="flex h-[54px] items-center rounded-sm bg-(--color-surface-cream) px-(--space-btn-x)">
                  GET STARTED
                </span>
                <span className="flex h-[54px] w-[54px] items-center justify-center rounded-sm bg-(--color-surface-cream) transition-transform duration-400 group-hover:translate-x-1">
                  <Image
                    src="/arrow.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="brightness-0"
                  />
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-x-6">
            {responsibleRecyclingSteps.map((step, index) => (
              <TimelineStep
                key={step.id}
                step={step}
                index={index}
                scrollProgress={timelineProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesResponsibleRecycling() {
  return (
    <>
      <MobileLayout />
      <DesktopLayout />
    </>
  );
}
