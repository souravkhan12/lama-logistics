import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full px-[20px]">
      <div className="mx-auto">
        <div className="grid rounded-t-lg overflow-hidden relative h-[646px]">
          <Image
            src="/home-banner.png"
            alt="hero"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 grid items-end p-10">
            <h1 className="text-white text-h0 font-display leading-tight">
              Powering a Smarter,
              <br />
              Circular Telecom Economy
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
