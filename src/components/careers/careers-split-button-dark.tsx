"use client";

import Image from "next/image";
import Link from "next/link";

type CareersSplitButtonDarkProps = {
  href: string;
  label: string;
  ariaLabel?: string;
};

export default function CareersSplitButtonDark({
  href,
  label,
  ariaLabel,
}: CareersSplitButtonDarkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel ?? label}
      className="group inline-flex h-[54px] w-fit items-center gap-(--space-gap-sm) font-mono text-b2 leading-none tracking-wide text-white transition-all duration-400"
    >
      <span className="flex h-[54px] min-h-[54px] shrink-0 items-center rounded-sm bg-black px-(--space-btn-x) transition-colors group-hover:bg-(--color-primary)">
        {label}
      </span>
      <span className="flex h-[54px] w-[54px] min-h-[54px] min-w-[54px] shrink-0 items-center justify-center rounded-sm bg-black transition-all duration-400 group-hover:translate-x-1 group-hover:bg-(--color-primary)">
        <Image src="/arrow.svg" alt="" width={20} height={20} />
      </span>
    </Link>
  );
}
