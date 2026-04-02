"use client";

import Image from "next/image";
import { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
  isArrow?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  className,
  variant = "primary",
  isArrow = true,
  type = "button",
}: ButtonProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 180);
  };

  const isPrimary = variant === "primary";
  const isAccent = variant === "accent";

  const base =
    "inline-flex items-center h-[54px] gap-[var(--space-gap-sm)] font-mono text-b2 leading-none tracking-wide transition-all duration-300";

  const segment = isAccent
    ? "bg-[var(--color-footer-accent)] text-[var(--color-on-primary)] group-hover:opacity-90"
    : isPrimary
      ? "bg-[var(--color-primary)] text-[var(--color-on-primary)] group-hover:bg-black"
      : "bg-black text-white group-hover:bg-[var(--color-primary)]";

  const labelCell =
    "h-[54px] min-h-[54px] px-[var(--space-btn-x)] flex items-center shrink-0";
  const arrowCell =
    "h-[54px] w-[54px] min-h-[54px] min-w-[54px] flex items-center justify-center shrink-0";
  const borderRadius = "rounded-sm";

  if (isArrow) {
    return (
      <button
        onClick={handleClick}
        className={`group ${base} ${className ?? ""}`}
        type={type}
      >
        <span
          className={`${labelCell} ${borderRadius} ${segment} ${
            clicked ? "font-bold tracking-wide" : ""
          } transition-all duration-200`}
        >
          {children}
        </span>

        <span
          className={`${arrowCell} ${borderRadius} ${segment} transition-all duration-300 transform group-hover:translate-x-1`}
          aria-hidden
        >
          <Image src="/arrow.svg" alt="arrow" width={20} height={20} />
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`group ${base} ${className ?? ""}`}
      type={type}
    >
      <span
        className={`${labelCell} ${borderRadius} ${segment} ${
          clicked ? "font-bold tracking-wide" : ""
        } transition-all duration-200`}
      >
        {children}
      </span>
    </button>
  );
}
