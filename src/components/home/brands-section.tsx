import Image from "next/image";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import SectionBadge from "@/components/section-badge";

const brands = [
  {
    name: "Verizon",
    src: "/brands/verizon.svg",
    bg: "bg-(--color-brand-tile-1)",
  },
  {
    name: "AT&T",
    src: "/brands/at&t.svg",
    bg: "bg-(--color-brand-tile-2)",
  },
  {
    name: "Google Cloud",
    src: "/brands/google-cloud.svg",
    bg: "bg-(--color-brand-tile-3)",
  },
  {
    name: "AWS",
    src: "/brands/aws.svg",
    bg: "bg-(--color-brand-tile-4)",
  },
  {
    name: "Lumen",
    src: "/brands/lumen.svg",
    bg: "bg-(--color-brand-tile-5)",
  },
];

export default function BrandsSection() {
  return (
    <section className="py-(--space-section-padding)">
      <div className="layout-container-edge">
        <ScrollReveal className="flex flex-col gap-6">
          <div className="flex items-start justify-between">
            <SectionBadge
              label="WHY CHOOSE US"
              backgroundColor="var(--color-surface-cream)"
            />

            <h2 className="max-w-[786px] font-display text-h1">
              We’ve built long lasting partnerships with the most ambitious
              brands across the globe
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-14 flex flex-wrap justify-center gap-4">
          {brands.map((brand) => (
            <StaggerItem key={brand.name}>
              <div
                className={`flex h-[259px] w-[259px] items-center justify-center rounded-2xl ${brand.bg}`}
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
