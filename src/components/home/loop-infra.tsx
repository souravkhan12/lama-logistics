import Image from "next/image";
import Button from "@/components/button";

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
        <Image
          src="/loop-infra.png"
          alt="Loop Infrastructure"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1440px) 100vw, 1440px"
        />

        <div className="absolute inset-0 bg-black/40" aria-hidden />

        <div className="absolute text-white inset-0 z-10 flex flex-col justify-between px-(--space-container-padding) py-10 sm:py-12 lg:flex-row lg:items-start lg:justify-between ">
          <p className="font-display text-h0 leading-tight text-[#FFFAEB]">
            Closing the Loop on <br />
            Telecom Infrastructure
          </p>

          <div className="flex flex-col items-start h-full justify-between gap-8">
            <ul className="flex gap-6 p-4 items-start sm:gap-10">
              {features.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col items-start gap-3 text-center"
                >
                  <div
                    className={`flex size-12 items-center justify-center rounded-xl bg-white shadow-md ${iconClass}`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-b2 ">{item.label}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 flex max-w-xl flex-col gap-6">
              <p className="text-b1 ">
                We help organisations recover value from IT and telecom assets
                through secure decommissioning, asset recovery, and responsible
                recycling. Our services are built for speed, compliance, and
                sustainability—supporting smarter infrastructure decisions at
                every stage.
              </p>

              <div className="flex gap-3">
                <Button variant="primary">READ MORE</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
