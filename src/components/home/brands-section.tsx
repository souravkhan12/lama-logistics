import Image from "next/image";
import SectionBadge from "@/components/section-badge";

const brands = [
  {
    name: "Verizon",
    src: "/brands/verizon.svg",
    bg: "bg-[#1F1F1F]",
  },
  {
    name: "AT&T",
    src: "/brands/at&t.svg",
    bg: "bg-[#1DA1C2]",
  },
  {
    name: "Google Cloud",
    src: "/brands/google-cloud.svg",
    bg: "bg-[#EDEDED]",
  },
  {
    name: "AWS",
    src: "/brands/aws.svg",
    bg: "bg-[#232F3D]",
  },
  {
    name: "Lumen",
    src: "/brands/lumen.svg",
    bg: "bg-[#2B8DBF]",
  },
];

export default function BrandsSection() {
  return (
    <section className="py-(--space-section-padding)">
      <div className="layout-container-edge">
        <div className="flex flex-col gap-6">
          <div className="flex items-start justify-between">
            <SectionBadge label="WHY CHOOSE US" backgroundColor="#FFFAEB" />

            <h2 className="font-display text-h1 max-w-[786px] ">
              We’ve built long lasting partnerships with the most ambitious
              brands across the globe
            </h2>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className={`w-[259px] h-[259px] rounded-2xl flex items-center justify-center ${brand.bg}`}
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={100}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
