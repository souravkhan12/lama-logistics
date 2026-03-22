import Image from "next/image";
import Button from "@/components/button";
import Container from "@/components/container";

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
      <Container
        className="relative h-[480px] lg:h-[807px] overflow-hidden"
        isPadding={false}
      >
        <Image
          src="/loop-infra.png"
          alt="Loop Infrastructure"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 z-10 p-20 text-white flex flex-row justify-between">
          <p className="font-display text-[#FFFAEB] text-h0 leading-tight ">
            Closing the Loop on <br />
            Telecom Infrastructure
          </p>

          <div className="flex flex-col items-start p-8 justify-between gap-8">
            <ul className="flex gap-6 items-start sm:gap-10">
              {features.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div
                    className={`flex size-12 items-center justify-center rounded-xl bg-white shadow-md ${iconClass}`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-b2 max-w-24 leading-snug">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
            <div className="max-w-md flex flex-col gap-6">
              <p className="text-b2 leading-relaxed">
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
      </Container>
    </section>
  );
}
