"use client";

import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import SectionBadge from "@/components/section-badge";
import { ABOUT_OPERATIONAL_WORKFLOW_STEPS } from "@/data/about-operational-workflow-data";

export default function AboutOperationalWorkflow() {
  return (
    <section
      className="bg-(--color-bg) py-(--space-section-padding) text-(--color-fg)"
      aria-labelledby="about-operational-workflow-heading"
    >
      <div className="layout-container flex flex-col gap-12 lg:gap-16 xl:gap-20">
        <ScrollReveal className="flex max-w-[920px] flex-col gap-6">
          <SectionBadge label="Our process" backgroundColor="#FFFAEB" />
          <div className="text-(--color-footer-bg)">
            <h2
              id="about-operational-workflow-heading"
              className="font-display text-h1 lg:text-h0"
            >
              Operational Workflow
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="flex flex-col gap-14 lg:gap-16 xl:gap-20">
          {ABOUT_OPERATIONAL_WORKFLOW_STEPS.map((step) => (
            <StaggerItem key={step.id}>
              <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-x-12 xl:gap-x-20 2xl:gap-x-24">
                <div className="text-(--color-about-workflow-step-title)">
                  <h3 className="font-display text-h1 lg:text-h0">
                    {step.title}
                  </h3>
                </div>
                <div className="flex min-w-0 flex-col gap-4">
                  <p className="font-mono text-o1 text-(--color-neutral-icon)">
                    {step.index}
                  </p>
                  <div className=" flex flex-col gap-4">
                    <p className="font-body text-b1">{step.paragraphs[0]}</p>
                    <p className="font-body text-b1">{step.paragraphs[1]}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
