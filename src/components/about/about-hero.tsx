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
        className="object-cover object-center grayscale contrast-105"
        priority
        sizes="100vw"
        unoptimized
      />
    </section>
  );
}
