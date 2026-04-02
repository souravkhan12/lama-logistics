import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/motion";

export default function ExploreServicesCta() {
  return (
    <section className="relative flex min-h-[400px] flex-col overflow-hidden bg-(--color-surface-cream) py-12 lg:h-[440px] lg:min-h-0 lg:flex-row lg:items-center lg:py-0">
      <div className="layout-container relative z-10 w-full">
        <ScrollReveal className="flex max-w-[580px] shrink-0 flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-h2 leading-[1.1] text-(--color-fg) md:text-h1">
              Ready to streamline your <br className="hidden md:block" />
              network transition?
            </h2>
            <p className="max-w-[480px] text-b1 text-(--color-text-body)">
              From site audits to sustainable asset recovery, let Lama Telecom
              Services handle the heavy lifting.
            </p>
          </div>
          <div className="mt-4">
            <Link
              href="/services"
              className="group inline-flex h-[54px] items-center gap-(--space-gap-sm) font-mono text-b2 leading-none tracking-wide text-white transition-all duration-300"
            >
              <span className="flex h-[54px] min-h-[54px] shrink-0 items-center rounded-sm bg-black px-(--space-btn-x) transition-colors group-hover:bg-(--color-primary)">
                EXPLORE SERVICES
              </span>
              <span className="flex h-[54px] w-[54px] min-h-[54px] min-w-[54px] shrink-0 items-center justify-center rounded-sm bg-black transition-all duration-300 group-hover:translate-x-1 group-hover:bg-(--color-primary)">
                <Image src="/arrow.svg" alt="" width={20} height={20} />
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Corrected Pattern Container */}
      <div className="pointer-events-none relative h-[300px] w-full shrink-0 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2 xl:w-[45%]">
        <Image
          src="/industries/explore.svg"
          alt=""
          fill
          // object-cover ensures it fills the entire vertical space from top to bottom
          // object-right anchors the pattern to the right edge as seen in your screenshot
          className="object-cover object-right"
          sizes="(max-width: 1024px) 100vw, 50vw"
          unoptimized
        />
      </div>
    </section>
  );
}
