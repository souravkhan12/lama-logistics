"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { siteEase } from "@/lib/motion-presets";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section>
      <div className="layout-container">
        <div className="relative grid h-(--space-hero-height) overflow-hidden rounded-t-lg">
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.04, opacity: 0.92 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.15, ease: siteEase }}
          >
            <Image
              src="/home-banner.png"
              alt="hero"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 grid items-end p-6 sm:p-8 lg:p-10">
            <motion.h1
              className="max-w-4xl font-display text-h0 leading-tight text-white"
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: siteEase, delay: 0.2 }}
            >
              Powering a Smarter,
              <br />
              Circular Telecom Economy
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
}
