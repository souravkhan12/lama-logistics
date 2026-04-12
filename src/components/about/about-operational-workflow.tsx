"use client";

import SectionBadge from "@/components/section-badge";
import { defaultViewport, siteDuration, siteEase } from "@/lib/motion-presets";
import Button from "@/components/button";
import { ServicesDecomissiongContent } from "@/components/services/services-decomissiong";
import { motion } from "motion/react";

export function AboutOperationalWorkflow() {
  return (
    <section className="bg-[#F8F9FB] py-20">
      <div className="layout-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            className="flex max-w-[480px] flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{
              duration: siteDuration.sectionReveal,
              ease: siteEase,
            }}
          >
            <SectionBadge
              label="Our process"
              backgroundColor="var(--color-surface-cream)"
              className="w-fit"
            />

            <span className="font-display text-h1  leading-tight">
              Operational Workflow
            </span>

            <div className="pt-2 mt-10">
              <Button variant="secondary">GET STARTED</Button>
            </div>
          </motion.div>
          <ServicesDecomissiongContent />
        </div>
      </div>
    </section>
  );
}
