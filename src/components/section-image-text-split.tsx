"use client";
import Image from "next/image";

import Button from "@/components/button";
import { ScrollReveal } from "@/components/motion";
import { FOOTER_CONTACT_HREF } from "@/lib/site-routes";

export type SectionImageTextLayout = "split" | "title-wide" | "aside-media";

export type SectionImageTextSplitProps = {
  title: string;
  paragraphs: readonly string[];
  listItems: readonly string[];
  imageSrc: string;
  imageAlt: string;
  /** Image column side (`split` / `title-wide`) or media column side (`aside-media`). */
  imagePosition: "left" | "right";
  layout?: SectionImageTextLayout;
  listHeading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  tone?: "muted" | "white";
  /** When false, image container has square corners (design reference). */
  imageRounded?: boolean;
  className?: string;
  /** Sets `<section id>` for in-page anchors (e.g. `/industries#slug`). */
  sectionId?: string;
};

const defaultListHeading = "Typical support includes:";

const gridGap = "gap-8 lg:grid-cols-2 lg:gap-x-6 xl:gap-x-10 2xl:gap-x-12";

function TextBody({
  paragraphs,
  listHeading,
  listItems,
  withLeadCta,
  ctaLabel,
  ctaHref,
  showMobileCta,
}: {
  paragraphs: readonly string[];
  listHeading: string;
  listItems: readonly string[];
  withLeadCta?: boolean;
  ctaLabel: string;
  ctaHref: string;
  showMobileCta?: boolean;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-6 lg:justify-start lg:gap-8">
      {withLeadCta ? (
        <div className="shrink-0">
          <Button variant="secondary" href={ctaHref}>
            {ctaLabel}
          </Button>
        </div>
      ) : null}
      <div className="flex flex-col gap-4 text-b2">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-display text-h3 lg:font-body lg:text-b1">
          {listHeading}
        </p>

        {/* Numbered rows on all breakpoints */}
        <div className="flex flex-col">
          {listItems.map((item, i) => (
            <div key={item}>
              <div className="flex items-center gap-4 py-4">
                <span className="flex h-10 w-12 shrink-0 items-center justify-center rounded-sm font-mono text-b2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-b1">{item}</span>
              </div>
              {i < listItems.length - 1 && <div className="h-px bg-black/10" />}
            </div>
          ))}
        </div>
      </div>
      {showMobileCta ? (
        <div className="lg:hidden">
          <Button variant="secondary" href={ctaHref}>
            {ctaLabel}
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default function SectionImageTextSplit({
  title,
  paragraphs,
  listItems,
  imageSrc,
  imageAlt,
  imagePosition,
  layout = "split",
  listHeading = defaultListHeading,
  ctaLabel = "GET STARTED",
  ctaHref = FOOTER_CONTACT_HREF,
  tone = "white",
  imageRounded = false,
  className,
  sectionId,
}: SectionImageTextSplitProps) {
  const contentRowReverse = imagePosition === "right";
  const anchorScroll = sectionId ? "scroll-mt-28" : "";
  const isSvg = imageSrc.endsWith(".svg");
  const radiusClass = "rounded-md";

  function ImageArea({ areaClassName }: { areaClassName: string }) {
    return (
      <div
        className={`relative w-full overflow-hidden ${radiusClass} ${areaClassName}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
          unoptimized={isSvg} />
      </div>
    );
  }

  if (layout === "aside-media") {
    const mediaOnRight = imagePosition === "right";
    const textColumn = (
      <div className="flex min-w-0 flex-col gap-6 lg:gap-8">
        <h2 className="font-display text-h1 lg:text-h0">{title}</h2>
        <TextBody
          paragraphs={paragraphs}
          listHeading={listHeading}
          listItems={listItems}
          ctaLabel={ctaLabel}
          ctaHref={ctaHref}
          showMobileCta />
      </div>
    );
    const mediaColumn = (
      <div className="flex h-full min-w-0 flex-col gap-6 lg:gap-8">
        <div className="hidden lg:block">
          <Button variant="secondary" href={ctaHref}>
            {ctaLabel}
          </Button>
        </div>
        <ImageArea areaClassName="aspect-[4/3] min-h-[240px] max-h-[480px] w-full sm:max-h-[520px]" />
      </div>
    );

    return (
      <section
        id={sectionId}
        className={`py-(--space-section-padding) ${
          tone === "muted" ? "bg-[#DCE1F4]" : "bg-(--color-bg)"
        } ${anchorScroll} ${className ?? ""}`}
      >
        <div className="layout-container">
          <div className="mx-auto w-full max-w-[1360px]">
            <ScrollReveal className="w-full">
              <div className={`grid w-full items-stretch ${gridGap}`}>
                {mediaOnRight ? (
                  <>
                    {textColumn}
                    {mediaColumn}
                  </>
                ) : (
                  <>
                    {mediaColumn}
                    {textColumn}
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    );
  }

  if (layout === "title-wide") {
    const stretchImageTitleWide =
      "aspect-[4/3] min-h-[220px] max-h-[520px] w-full lg:aspect-[5/4] lg:min-h-[460px] lg:max-h-[620px]";

    return (
      <section
        id={sectionId}
        className={`py-(--space-section-padding) ${
          tone === "muted" ? "bg-[#DCE1F4]" : "bg-(--color-bg)"
        } ${anchorScroll} ${className ?? ""}`}
      >
        <div className="layout-container">
          <div className="mx-auto w-full max-w-[1360px]">
            <ScrollReveal className="w-full">
              <div className={`grid w-full items-stretch ${gridGap}`}>
                <ImageArea areaClassName={stretchImageTitleWide} />
                <div className="flex min-w-0 flex-col">
                  <TextBody
                    paragraphs={paragraphs}
                    listHeading={listHeading}
                    listItems={listItems}
                    ctaLabel={ctaLabel}
                    ctaHref={ctaHref} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    );
  }

  const sectionShell = `py-(--space-section-padding) ${
    tone === "muted" ? "bg-[#DCE1F4]" : "bg-(--color-bg)"
  } ${anchorScroll} ${className ?? ""}`;
  const stretchImage =
    "aspect-[4/3] min-h-[220px] max-h-[520px] w-full lg:aspect-[5/4] lg:min-h-[460px] lg:max-h-[620px]";

  return (
    <section id={sectionId} className={sectionShell}>
      <div className="layout-container">
        <div className="mx-auto w-full max-w-[1360px]">
          <ScrollReveal className="w-full">
            <div
              className={`grid w-full items-stretch ${gridGap}${
                contentRowReverse
                  ? " lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                  : ""
              }`}
            >
              <ImageArea areaClassName={stretchImage} />
              <div className="flex min-w-0 flex-col">
                <TextBody
                  paragraphs={paragraphs}
                  listHeading={listHeading}
                  listItems={listItems}
                  ctaLabel={ctaLabel}
                  ctaHref={ctaHref} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
