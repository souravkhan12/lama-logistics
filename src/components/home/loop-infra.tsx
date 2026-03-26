import Image from "next/image";
import Button from "@/components/button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import { VideoBackground } from "@/components/video-background";

const iconClass = "text-[var(--color-primary)] [&_svg]:size-6 [&_svg]:shrink-0";

const features = [
  {
    label: "Zero Waste",
    icon: (
      <Image src="/infra/waste.svg" alt="Zero Waste" width={24} height={24} />
    ),
  },
  {
    label: "ISO-Certified",
    icon: (
      <Image src="/infra/iso.svg" alt="ISO-Certified" width={24} height={24} />
    ),
  },
  {
    label: "R2v3 Processes",
    icon: (
      <Image src="/infra/r3v.svg" alt="R2v3 Processes" width={24} height={24} />
    ),
  },
];

export default function LoopInfra() {
  return (
    <section className="py-(--space-section-padding)">
      <div className="layout-container-edge relative h-[480px] overflow-hidden lg:h-[807px]">
        <VideoBackground
          videoSrc="/videos/second.mp4"
          imageSrc="/loop-infra.png"
        />

        <div className="absolute inset-0 bg-black/40" aria-hidden />

        <div className="absolute inset-0 z-10 flex flex-col justify-between px-(--space-container-padding) py-10 text-white sm:py-12 lg:flex-row lg:items-start lg:justify-between">
          <ScrollReveal className="max-w-[min(100%,920px)]">
            <p className="font-display text-h0 leading-tight text-(--color-surface-cream)">
              Closing the Loop on <br />
              Telecom Infrastructure
            </p>
          </ScrollReveal>

          <div className="flex h-full flex-col items-start justify-between gap-8">
            <StaggerContainer className="flex flex-wrap gap-6 p-4 sm:gap-10">
              {features.map((item) => (
                <StaggerItem key={item.label}>
                  <div className="flex flex-col items-start gap-3 text-center">
                    <div
                      className={`flex size-12 items-center justify-center rounded-xl bg-white shadow-md ${iconClass}`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-b2">{item.label}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <ScrollReveal
              className="flex max-w-xl flex-col gap-6 p-4"
              delay={0.08}
            >
              <p className="text-b1">
                We help organisations recover value from IT and telecom assets
                through secure decommissioning, asset recovery, and responsible
                recycling. Our services are built for speed, compliance, and
                sustainability—supporting smarter infrastructure decisions at
                every stage.
              </p>

              <div className="flex gap-3">
                <Button variant="primary">READ MORE</Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
