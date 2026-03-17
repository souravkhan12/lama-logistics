"use client";

import Image from "next/image";
import { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  isArrow?: boolean;
}

export default function Button({
  children,
  className,
  variant = "primary",
  isArrow = true,
}: ButtonProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 180);
  };

  const isPrimary = variant === "primary";

  const base =
    "inline-flex items-center h-[44px] gap-2.5 font-mono text-b2 tracking-wide transition-all duration-300";

  const segment = isPrimary
    ? "bg-primary text-white group-hover:bg-black"
    : "bg-black text-white group-hover:bg-primary";

  if (isArrow) {
    return (
      <button
        onClick={handleClick}
        className={`group ${base} ${className ?? ""}`}
        type="button"
      >
        <span
          className={`flex items-center px-5 py-[12px] rounded-sm ${segment} ${
            clicked ? "font-bold tracking-wide" : ""
          } transition-all duration-200`}
        >
          {children}
        </span>

        <span
          className={`flex items-center justify-center w-[44px] h-[44px] shrink-0 rounded-sm ${segment} transition-all duration-300 transform group-hover:translate-x-1`}
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
      type="button"
    >
      <span
        className={`flex items-center px-5 py-[12px] rounded-sm ${segment} ${
          clicked ? "font-bold tracking-wide" : ""
        } transition-all duration-200`}
      >
        {children}
      </span>
    </button>
  );
}
