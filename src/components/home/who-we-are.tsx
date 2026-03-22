import Image from "next/image";
import Button from "@/components/button";
import Container from "@/components/container";
import SectionBadge from "@/components/section-badge";

export default function AboutSection() {
  return (
    <Container>
      <section className="relative py-(--space-section-padding) overflow-hidden h-[665px]">
        <div className="absolute left-10 top-0 bottom-0 z-0 opacity-60 w-full max-w-[660px] h-full">
          <Image
            src="/grid-home.svg"
            alt="background"
            fill
            className="object-contain object-left"
          />
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col gap-(--space-gap-lg) lg:flex-row lg:justify-between lg:gap-12">
            <div className="shrink-0  mt-10">
              <SectionBadge label="WHO WE ARE" backgroundColor="#FFFAEB" />
            </div>

            <div className="flex flex-col min-w-0">
              <h2 className="font-display text-h1 leading-tight text-(--color-fg) max-w-[879px]">
                We help organizations unlock lasting value from their network
                and IT <br />
                infrastructure—without compromising
                <br />
                <span className="text-(--color-muted)">
                  security, performance, or sustainability.
                </span>
              </h2>

              <p className="mt-6 text-b2 text-(--color-muted) max-w-[600px] leading-relaxed">
                Our decommissioning and asset lifecycle management services
                ensure legacy infrastructure is removed efficiently, risk is
                minimized in live environments, and materials and equipment are
                returned to the circular economy wherever possible. By aligning
                infrastructure retirement with environmental and financial
                outcomes, we support the transition to modern, more sustainable
                networks.
              </p>

              <div className="mt-8 flex items-center gap-(--space-gap-sm)">
                <Button variant="secondary">ABOUT US</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Container>
  );
}
