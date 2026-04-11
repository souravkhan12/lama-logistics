import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/motion";

export default function ExploreServicesCta() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-(--color-surface-cream) pt-14 lg:h-[440px] lg:min-h-[400px] lg:flex-row lg:items-center lg:pt-0 lg:py-0">
      <div className="layout-container relative z-10 w-full">
        <ScrollReveal className="flex max-w-[580px] shrink-0 flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-h1 leading-[1.1] text-(--color-fg)">
              Ready to streamline your <br className="hidden md:block" />
              network transition?
            </h2>
            <p className="max-w-[480px] text-b1 text-(--color-text-body)">
              From site audits to sustainable asset recovery, let Lama Telecom
              Services handle the heavy lifting.
            </p>
          </div>
          <div className="mt-1 md:mt-4">
            <Link
              href="/services"
              className="group inline-flex h-[48px] w-[177px] items-center gap-1 font-mono text-o1 leading-none tracking-wide text-white transition-all duration-400 md:h-[54px] md:w-auto md:text-b2"
            >
              <span className="flex h-[48px] min-h-[48px] flex-1 items-center whitespace-nowrap rounded-sm bg-black px-2 transition-colors group-hover:bg-(--color-primary) md:h-[54px] md:min-h-[54px] md:flex-none md:shrink-0 md:px-(--space-btn-x)">
                EXPLORE SERVICES
              </span>
              <span className="flex h-[48px] w-[48px] min-h-[48px] min-w-[48px] shrink-0 items-center justify-center rounded-sm bg-black transition-all duration-400 group-hover:translate-x-1 group-hover:bg-(--color-primary) md:h-[54px] md:w-[54px] md:min-h-[54px] md:min-w-[54px]">
                <Image src="/arrow.svg" alt="" width={20} height={20} />
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Corrected Pattern Container */}
      <div className="pointer-events-none relative mt-10 h-[160px] w-full shrink-0 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-1/2 xl:w-[45%]">
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
