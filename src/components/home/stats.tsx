import Image from "next/image";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import StatCard from "@/components/stat-card";

export default function Stats() {
  return (
    <section>
      <div className="layout-full-bleed relative flex flex-col overflow-hidden lg:h-[560px] xl:h-[620px] 2xl:h-[680px] lg:flex-row">
        <ScrollReveal className="relative h-[260px] w-full lg:h-full lg:w-1/2">
          <Image
            src="/ring.svg"
            alt="ring"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
          />
        </ScrollReveal>

        <div className="flex w-full items-center bg-(--color-surface-cream) py-10 lg:h-full lg:w-1/2 lg:py-0">
          <StaggerContainer className="grid w-full grid-cols-2 gap-x-8 gap-y-10 px-6 sm:gap-x-12 sm:gap-y-12 sm:px-10 lg:gap-x-16 lg:px-16">
            <StaggerItem>
              <StatCard value="99%" content="On-Time Project Delivery" />
            </StaggerItem>
            <StaggerItem>
              <StatCard
                value="500+"
                content="Tonnes of IT & Network Assets Processed"
              />
            </StaggerItem>
            <StaggerItem>
              <StatCard
                value="150+"
                content="Infrastructure Projects Completed"
              />
            </StaggerItem>
            <StaggerItem>
              <StatCard value="XX" content="Numbers of Year in Business" />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
