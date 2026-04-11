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
      {/* Video panel */}
      <div className="layout-container-edge relative h-[480px] overflow-hidden lg:h-[807px]">
        <VideoBackground
          videoSrc="/videos/second.mp4"
          imageSrc="/loop-infra.png"
        />

        <div className="absolute inset-0 bg-black/40" aria-hidden />

        <div className="absolute inset-0 z-10 flex flex-col justify-between px-(--space-container-padding) py-10 text-white sm:py-12 lg:flex-row lg:items-start lg:justify-between">
          <ScrollReveal className="max-w-[min(100%,920px)]">
            <p className="font-display text-h1 leading-tight text-(--color-surface-cream) lg:text-h0">
              Closing the Loop on <br />
              Telecom Infrastructure
            </p>
          </ScrollReveal>

          {/* Features: vertical column on mobile, side panel on desktop */}
          <div className="flex h-full flex-col items-start justify-between gap-8 mt-10 lg:mt-0">
            <StaggerContainer className="flex flex-col gap-5 p-4 lg:flex-wrap lg:flex-row lg:gap-10">
              {features.map((item) => (
                <StaggerItem key={item.label}>
                  <div className="flex flex-col items-start gap-3">
                    <div
                      className={`flex size-12 shrink-0 items-center justify-center rounded-sm bg-white shadow-md ${iconClass}`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-b2">{item.label}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Text + button: hidden on mobile (shown below), visible on desktop */}
            <ScrollReveal
              className="hidden max-w-xl flex-col gap-6 p-4 lg:flex"
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

      {/* Text + button below video on mobile only */}
      <div className="layout-container mt-8 flex flex-col gap-6 lg:hidden">
        <ScrollReveal delay={0.08}>
          <p className="text-b1 text-(--color-fg)">
            We help organisations recover value from IT and telecom assets
            through secure decommissioning, asset recovery, and responsible
            recycling. Our services are built for speed, compliance, and
            sustainability—supporting smarter infrastructure decisions at every
            stage.
          </p>
        </ScrollReveal>
        <div className="flex gap-3">
          <Button variant="secondary">READ MORE</Button>
        </div>
      </div>
    </section>
  );
}
