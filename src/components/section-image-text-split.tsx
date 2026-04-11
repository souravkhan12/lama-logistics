"use client";

import Image from "next/image";

import Button from "@/components/button";
import { ScrollReveal } from "@/components/motion";

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
  tone?: "muted" | "white";
  /** When false, image container has square corners (design reference). */
  imageRounded?: boolean;
  className?: string;
};

const defaultListHeading = "Typical support includes:";

const gridGap = "gap-8 lg:grid-cols-2 lg:gap-x-10 xl:gap-x-12";

function TextBody({
  paragraphs,
  listHeading,
  listItems,
  withLeadCta,
  ctaLabel,
  showMobileCta,
}: {
  paragraphs: readonly string[];
  listHeading: string;
  listItems: readonly string[];
  withLeadCta?: boolean;
  ctaLabel: string;
  showMobileCta?: boolean;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-6 lg:justify-start lg:gap-8">
      {withLeadCta ? (
        <div className="shrink-0">
          <Button variant="secondary">{ctaLabel}</Button>
        </div>
      ) : null}
      <div className="flex flex-col gap-4 text-b1">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-display text-h3 lg:font-body lg:text-b1">
          {listHeading}
        </p>

        {/* Desktop: bullet list */}
        <ul className="hidden list-disc space-y-2 pl-5 text-b1 lg:block">
          {listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* Mobile: numbered cards */}
        <div className="flex flex-col lg:hidden">
          {listItems.map((item, i) => (
            <div key={item}>
              <div className="flex items-center gap-4 py-4">
                <span className="flex h-10 w-12 shrink-0 items-center justify-center rounded-sm bg-[#DCE1F44D] font-mono text-b2">
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
          <Button variant="secondary">{ctaLabel}</Button>
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
  tone = "white",
  imageRounded = false,
  className,
}: SectionImageTextSplitProps) {
  const contentRowReverse = imagePosition === "right";
  const isSvg = imageSrc.endsWith(".svg");
  const radiusClass = imageRounded ? "rounded-md" : "rounded-none";

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
          unoptimized={isSvg}
        />
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
          showMobileCta
        />
      </div>
    );
    const mediaColumn = (
      <div className="flex h-full min-w-0 flex-col gap-6 lg:gap-8">
        <div className="hidden lg:block">
          <Button variant="secondary">{ctaLabel}</Button>
        </div>
        <ImageArea areaClassName="min-h-[280px] flex-1" />
      </div>
    );

    return (
      <section
        className={`py-(--space-section-padding) ${
          tone === "muted" ? "bg-[#DCE1F44D]" : "bg-(--color-bg)"
        } ${className ?? ""}`}
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

  const stretchImage = "min-h-[220px] lg:min-h-[280px]";

  const contentGrid = `grid w-full items-stretch ${gridGap}`;

  const sectionShell = `py-(--space-section-padding) ${
    tone === "muted" ? "bg-[#DCE1F44D]" : "bg-(--color-bg)"
  } ${className ?? ""}`;

  const headerRow = (
    <ScrollReveal className="w-full">
      <div className={`grid w-full ${gridGap} lg:items-end`}>
        <h2 className="font-display text-h1 lg:text-h0">{title}</h2>
        <div className="hidden lg:block">
          <Button variant="secondary">{ctaLabel}</Button>
        </div>
      </div>
    </ScrollReveal>
  );

  const contentRow = (
    <ScrollReveal className="w-full" delay={0.06}>
      <div
        className={`${contentGrid}${
          contentRowReverse
            ? " lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
            : ""
        }`}
      >
        <ImageArea areaClassName={stretchImage} />
        <TextBody
          paragraphs={paragraphs}
          listHeading={listHeading}
          listItems={listItems}
          ctaLabel={ctaLabel}
          showMobileCta
        />
      </div>
    </ScrollReveal>
  );

  return (
    <section className={sectionShell}>
      <div className="layout-container">
        <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-10 lg:gap-12">
          {headerRow}
          {contentRow}
        </div>
      </div>
    </section>
  );
}
