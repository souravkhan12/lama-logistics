import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/motion";

export default function ExploreServicesCta() {
  return (
    <section className="relative overflow-hidden bg-(--color-surface-cream) pt-20 pb-16 sm:pt-16 sm:pb-14 lg:py-12">
      <div className="layout-container relative z-10 flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 xl:gap-14">
        <ScrollReveal className="flex max-w-[min(100%,580px)] shrink-0 flex-col gap-6">
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

        <div className="pointer-events-none relative mx-auto aspect-634/434 w-full min-w-0 max-w-[min(100%,280px)] shrink-0 min-[400px]:max-w-[min(100%,340px)] min-[640px]:max-w-[min(100%,400px)] lg:mx-0 lg:aspect-auto lg:h-[min(360px,42vw)] lg:max-w-[min(100%,480px)] xl:max-w-[520px]">
          <Image
            src="/industries/explore.svg"
            alt=""
            fill
            className="object-contain object-[center_bottom] lg:object-cover lg:object-[right_bottom]"
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 400px, 480px"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
