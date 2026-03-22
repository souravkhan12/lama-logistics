import Container from "@/components/container";
import StatCard from "@/components/stat-card";
import Image from "next/image";

export default function Stats() {
  return (
    <section>
      <Container
        className="relative flex h-[520px] overflow-hidden"
        isPadding={false}
      >
        <div className="relative w-1/2 h-full">
          <Image
            src="/ring.svg"
            alt="ring"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="w-1/2 h-full bg-[#FFFAEB] flex items-center">
          <div className="grid grid-cols-2 gap-y-12 gap-x-16 px-16 w-full">
            <StatCard value="99%" content="On-Time Project Delivery" />
            <StatCard
              value="500+"
              content="Tonnes of IT & Network Assets Processed"
            />
            <StatCard
              value="150+"
              content="Infrastructure Projects Completed"
            />
            <StatCard value="XX" content="Numbers of Year in Business" />
          </div>
        </div>
      </Container>
    </section>
  );
}
