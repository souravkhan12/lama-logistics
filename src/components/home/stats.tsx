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
      <div className="layout-container-edge relative flex h-[520px] overflow-hidden">
        <ScrollReveal className="relative h-full w-1/2">
          <Image
            src="/ring.svg"
            alt="ring"
            fill
            className="object-cover"
            priority
          />
        </ScrollReveal>

        <div className="flex h-full w-1/2 items-center bg-(--color-surface-cream)">
          <StaggerContainer className="grid w-full grid-cols-2 gap-x-16 gap-y-12 px-16">
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
