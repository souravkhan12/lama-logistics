"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

import { ABOUT_MISSION_CAROUSEL_SLIDES } from "@/data/about-mission-carousel-data";
import { carouselCrossfade, siteEase } from "@/lib/motion-presets";

const SLIDE_COUNT = ABOUT_MISSION_CAROUSEL_SLIDES.length;

function carouselCardBackground(id: string): string {
  switch (id) {
    case "vision":
      return "var(--color-about-carousel-card-vision)";
    case "approach":
      return "var(--color-about-carousel-card-approach)";
    default:
      return "var(--color-about-carousel-card-mission)";
  }
}

/** Equal scroll segments — avoids flip-flopping at 0.25/0.75 with `Math.round`. */
function slideIndexFromProgress(p: number): number {
  const t = Math.min(1, Math.max(0, p));
  if (SLIDE_COUNT <= 1) return 0;
  return Math.min(
    SLIDE_COUNT - 1,
    Math.floor(t * SLIDE_COUNT + Number.EPSILON),
  );
}

export default function AboutMissionCarousel() {
  const reduce = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = slideIndexFromProgress(latest);
    setActive((prev) => (prev !== next ? next : prev));
  });

  const goTo = useCallback((index: number) => {
    const el = scrollRef.current;
    const clamped = Math.max(0, Math.min(SLIDE_COUNT - 1, index));
    if (!el) {
      setActive(clamped);
      return;
    }
    const scrollable = el.offsetHeight - window.innerHeight;
    if (scrollable <= 0) {
      setActive(clamped);
      return;
    }
    /** Middle of each segment — matches `slideIndexFromProgress` (floor over n slices). */
    const progress = SLIDE_COUNT <= 1 ? 0 : (clamped + 0.5) / SLIDE_COUNT;
    const elTop = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elTop + progress * scrollable,
      behavior: "smooth",
    });
  }, []);

  const slide = ABOUT_MISSION_CAROUSEL_SLIDES[active];
  const transition = reduce
    ? { duration: 0.18 }
    : { duration: carouselCrossfade, ease: siteEase };

  /** Previous block exits up; next enters from below */
  const titleMotion = reduce
    ? { initial: false, animate: { opacity: 1 }, exit: undefined }
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -28 },
      };

  const cardMotion = reduce
    ? { initial: false, animate: { opacity: 1 }, exit: undefined }
    : {
        initial: { opacity: 0, y: 48 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -40 },
      };

  return (
    <section
      className="bg-(--color-bg)"
      aria-label="Mission, vision, and approach"
    >
      <div
        ref={scrollRef}
        className="relative"
        style={{
          // Shorter than 220vh: less “empty” page scroll while sticky; scales with slide count.
          minHeight: `calc(100dvh + ${(SLIDE_COUNT - 1) * 42}vh)`,
        }}
      >
        <div className="sticky top-0 flex min-h-dvh w-full items-center py-10 lg:py-(--space-section-padding)">
          <div className="layout-container w-full">
            <section
              aria-roledescription="carousel"
              aria-label="Our mission, vision, and approach"
              aria-live="polite"
              className="relative mx-auto w-full max-w-(--space-container-max-width) overflow-hidden rounded-md"
            >
              {ABOUT_MISSION_CAROUSEL_SLIDES.map((s, i) => (
                <motion.div
                  key={s.id}
                  className="pointer-events-none absolute inset-0"
                  initial={false}
                  animate={{ opacity: i === active ? 1 : 0 }}
                  transition={transition}
                  aria-hidden={i !== active}
                >
                  <Image
                    src={s.imageSrc}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1440px) 100vw, 1440px"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-black/55" aria-hidden />
                </motion.div>
              ))}

              <div className="relative z-10 flex min-h-[min(72vh,640px)] w-full items-center justify-center px-5 py-12 sm:px-8 lg:min-h-[600px] lg:px-10 lg:py-14">
                {/* Full-width row: dots + large label (left) · card (right) — matches design reference */}
                <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8 xl:gap-12 2xl:gap-16">
                  <div className="flex min-w-0 flex-1 flex-row items-center justify-center gap-5 text-white sm:gap-6 lg:justify-start lg:gap-8 xl:gap-10">
                    <div
                      className="shrink-0 flex-col items-center gap-3 hidden lg:flex"
                      role="tablist"
                      aria-label="Choose slide"
                    >
                      {ABOUT_MISSION_CAROUSEL_SLIDES.map((s, i) => (
                        <button
                          key={s.id}
                          type="button"
                          role="tab"
                          aria-selected={i === active}
                          aria-controls={`about-carousel-panel-${s.id}`}
                          id={`about-carousel-tab-${s.id}`}
                          onClick={() => goTo(i)}
                          className={`size-2.5 shrink-0 rounded-full transition-colors duration-500 ease-out ${
                            i === active
                              ? "bg-white"
                              : "bg-white/45 hover:bg-white/70"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="min-w-0 flex-1 overflow-hidden text-center lg:text-left">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.h2
                          key={slide.id}
                          className="font-display text-h1 md:text-h0"
                          initial={titleMotion.initial}
                          animate={titleMotion.animate}
                          exit={titleMotion.exit}
                          transition={transition}
                        >
                          {slide.sectionTitle}
                        </motion.h2>
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="flex w-full shrink-0 justify-center lg:w-auto lg:max-w-[min(100%,540px)] lg:flex-none lg:justify-end">
                    <div className="relative w-full max-w-[520px] overflow-hidden rounded-md">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.article
                          key={slide.id}
                          id={`about-carousel-panel-${slide.id}`}
                          role="tabpanel"
                          aria-labelledby={`about-carousel-tab-${slide.id}`}
                          initial={cardMotion.initial}
                          animate={cardMotion.animate}
                          exit={cardMotion.exit}
                          transition={transition}
                          className="flex min-h-[300px] flex-col items-center justify-center gap-(--space-gap-lg) rounded-md px-8 py-10 text-center text-(--color-on-primary) sm:min-h-[320px] sm:px-10 sm:py-11 lg:min-h-[340px] lg:px-12 lg:py-12"
                          style={{
                            backgroundColor: carouselCardBackground(slide.id),
                          }}
                        >
                          <h3 className="font-display text-h1">
                            {slide.heading}
                          </h3>
                          <p className="font-body text-b2">{slide.body}</p>
                        </motion.article>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
