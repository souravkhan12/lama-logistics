import Image from "next/image";
import Button from "@/components/button";
import SectionBadge from "@/components/section-badge";

export default function ServicesHero() {
  return (
    <section className="relative bg-(--color-bg) pb-16 pt-6 md:pb-24 md:pt-10 overflow-hidden">
      <div className="layout-container relative">
        <div className="flex  justify-between items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-1 flex-col justify-center gap-6 max-w-[700px] z-10 pl-(--space-container-padding)">
            <SectionBadge
              label="OUR SERVICES"
              backgroundColor="var(--color-surface-blush)"
              className="w-fit"
            />

            <h1 className="font-display text-h0 leading-tight text-(--color-fg)">
              Bringing Technology Full Circle.
            </h1>

            <p className="max-w-[560px] text-b1 leading-relaxed text-(--color-muted)">
              We help operators, OEMs, and service providers remove, recover,
              and repurpose infrastructure while maximizing asset value and
              ensuring environmental compliance.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <Button variant="secondary">LET&apos;S TALK</Button>      
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
          <div className="relative w-[650px] h-[460px]">
            <Image
              src="/services/landing.svg"
              alt="Operations professional working"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
