"use client";

import Image from "next/image";

const HERO_IMAGE = "/about/img/hero.svg";

export default function AboutHero() {
  return (
    <section className="layout-container-edge relative min-h-[min(72vh,820px)] w-full overflow-hidden bg-black">
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
        unoptimized
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-black/80 via-black/45 to-black/10"
        aria-hidden
      />
    </section>
  );
}
