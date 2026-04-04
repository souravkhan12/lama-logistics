"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

type CareersSplitButtonCreamProps = {
  href: string;
  label: string;
  ariaLabel?: string;
};

export default function CareersSplitButtonCream({
  href,
  label,
  ariaLabel,
}: CareersSplitButtonCreamProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel ?? label}
      className="group inline-flex h-[54px] w-fit items-center gap-(--space-gap-sm) font-mono text-b2 leading-none tracking-wide text-(--color-about-joincta-label-fg) transition-all duration-400"
    >
      <span className="flex h-[54px] min-h-[54px] shrink-0 items-center rounded-sm bg-(--color-about-joincta-surface) px-(--space-btn-x) transition-colors group-hover:opacity-90">
        {label}
      </span>
      <span className="flex h-[54px] w-[54px] min-h-[54px] min-w-[54px] shrink-0 items-center justify-center rounded-sm bg-(--color-about-joincta-surface) transition-all duration-400 group-hover:translate-x-1 group-hover:opacity-90">
        <ArrowRight
          className="size-5 shrink-0 text-(--color-about-joincta-label-fg)"
          strokeWidth={1.5}
          aria-hidden
        />
      </span>
    </Link>
  );
}
