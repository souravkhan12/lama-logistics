import Image from "next/image";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import StatCard from "@/components/stat-card";

export default function Stats() {
  return (
    <section className="w-full">
      <div className="relative flex flex-col overflow-hidden lg:h-[600px] lg:flex-row">
        {/* LEFT SECTION: Gradient + Ring */}
        <ScrollReveal className="relative flex items-center justify-end h-[min(280px,42vw)] w-full min-h-[220px] bg-[linear-gradient(180deg,#1D1D1D_19.13%,#5A6EFB_83.14%,#6D7EF8_128.37%,#94A0F1_153.76%,#ACAEE0_179.14%)] sm:h-[320px] lg:h-full lg:min-h-0 lg:flex-1">
          {/* REMOVED: layout-container 
             The wrapper below now takes up 100% of the gradient width
          */}
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/ring.png"
              alt="ring"
              fill
              // object-right anchors it to the far right edge of the blue section
              // scale and origin handle the "cropped" look
              className="object-contain object-right scale-[1.4] origin-right pointer-events-none"
              sizes="50vw"
              priority />
          </div>
        </ScrollReveal>

        {/* RIGHT SECTION: Stats */}
        <div className="flex w-full items-center bg-(--color-surface-cream) py-10 lg:h-full lg:w-1/2 lg:py-0">
          {/* Keep layout-container or padding here to align text with the rest of your site */}
          <StaggerContainer className="max-w-[725px] grid w-full grid-cols-2 gap-x-8 gap-y-10 px-6 sm:gap-x-12 sm:gap-y-12 sm:px-10 lg:gap-x-16 lg:px-16">
            <StaggerItem>
              <StatCard value="99%" content="On-Time Project Delivery" />
            </StaggerItem>
            <StaggerItem>
              <StatCard value="500+" content="Tonnes of IT & Network Assets" />
            </StaggerItem>
            <StaggerItem>
              <StatCard value="150+" content="Infrastructure Projects" />
            </StaggerItem>
            <StaggerItem>
              <StatCard value="3" content="Years in Business" />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
