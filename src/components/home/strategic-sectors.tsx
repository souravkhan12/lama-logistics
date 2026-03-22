import SectionBadge from "@/components/section-badge";
import Button from "@/components/button";
import { ArrowUpRight } from "lucide-react";

const sectors = [
  { id: "01", title: "Telecom Operators" },
  { id: "02", title: "Data Centres & Hyperscalers" },
  { id: "03", title: "Govt Comms" },
  { id: "04", title: "Enterprise Networks" },
];

function cellDividers(index: number) {
  const line = "border-dashed border-[#CCCCCC]";
  if (index === 0) return `border-r border-b ${line}`;
  if (index === 1) return `border-b ${line}`;
  if (index === 2) return `border-r ${line}`;
  return "";
}

export default function StrategicSectors() {
  return (
    <section className="bg-white py-(--space-section-padding)">
      <div className="layout-container flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 xl:gap-24">
        <div className="flex max-w-[420px] shrink-0 flex-col gap-8">
          <SectionBadge
            label="KEY INDUSTRIES"
            backgroundColor="#FFFBEB"
            className="w-fit"
          />

          <h2 className="font-display text-h0 leading-tight ">
            Strategic
            <br />
            Sector Focus
          </h2>

          <div className="pt-2">
            <Button variant="secondary">ALL INDUSTRIES</Button>
          </div>
        </div>

        <div className="grid min-h-0 w-full min-w-0 grid-cols-2  max-w-[min(100%,758px)]  h-[594px]">
          {sectors.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex flex-col justify-between bg-[#FFFBEB] px-8 py-4 ${cellDividers(index)}`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-sm leading-none tracking-wide">
                  {item.id}
                </span>
                <button
                  type="button"
                  className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-[#D9D9D9] transition-colors hover:bg-[#D1D5DB]"
                  aria-label={`More about ${item.title}`}
                >
                  <ArrowUpRight className="size-4" strokeWidth={2} />
                </button>
              </div>
              <div className="flex h-[76px]">
                <span className="font-display text-h2">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
