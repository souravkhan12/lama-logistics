import { ArrowUpRight } from "lucide-react";
import Button from "@/components/button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import SectionBadge from "@/components/section-badge";

const sectors = [
  { id: "01", title: "Telecom Operators" },
  { id: "02", title: "Data Centres & Hyperscalers" },
  { id: "03", title: "Govt Comms" },
  { id: "04", title: "Enterprise Networks" },
];

/** Fine dashed rules: longer dashes + wider gaps than CSS border-dashed */
const dashedLineV = {
  backgroundImage:
    "repeating-linear-gradient(to bottom, var(--color-border-dashed) 0 6px, transparent 6px 18px)",
} as const;
const dashedLineH = {
  backgroundImage:
    "repeating-linear-gradient(to right, var(--color-border-dashed) 0 6px, transparent 6px 18px)",
} as const;

export default function StrategicSectors() {
  return (
    <section className="bg-white py-(--space-section-padding)">
      <div className="layout-container flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 xl:gap-24">
        <ScrollReveal className="flex max-w-[420px] shrink-0 flex-col gap-8">
          <SectionBadge
            label="KEY INDUSTRIES"
            backgroundColor="var(--color-surface-cream-alt)"
            className="w-fit"
          />

          <h2 className="font-display text-h0 leading-tight">
            Strategic
            <br />
            Sector Focus
          </h2>

          <div className="pt-2">
            <Button variant="secondary">ALL INDUSTRIES</Button>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid h-[594px] min-h-0 w-full min-w-0 max-w-[min(100%,758px)] grid-cols-2">
          {sectors.map((item, index) => (
            <StaggerItem key={item.id}>
              <div className="relative flex h-full cursor-pointer flex-col justify-between bg-(--color-surface-cream-alt) px-8 py-4 transition-colors duration-200 ease-out hover:bg-(--color-surface-sector-hover)">
                {(index === 0 || index === 2) && (
                  <span
                    className="pointer-events-none absolute inset-y-0 right-0 w-px"
                    style={dashedLineV}
                    aria-hidden
                  />
                )}
                {(index === 0 || index === 1) && (
                  <span
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
                    style={dashedLineH}
                    aria-hidden
                  />
                )}
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-sm leading-none tracking-wide">
                    {item.id}
                  </span>
                  <button
                    type="button"
                    className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-(--color-neutral-icon) transition-colors hover:bg-(--color-neutral-icon-hover)"
                    aria-label={`More about ${item.title}`}
                  >
                    <ArrowUpRight className="size-6" strokeWidth={2} />
                  </button>
                </div>
                <div className="flex h-[76px]">
                  <span className="font-display text-h2">{item.title}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
