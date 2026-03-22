import Container from "@/components/container";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <Container>
        <div className="grid rounded-t-lg overflow-hidden relative h-(--space-hero-height)">
          <Image
            src="/home-banner.png"
            alt="hero"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 grid items-end p-6 sm:p-8 lg:p-10">
            <h1 className="text-white text-h0 font-display leading-tight max-w-4xl">
              Powering a Smarter,
              <br />
              Circular Telecom Economy
            </h1>
          </div>
        </div>
      </Container>
    </section>
  );
}
