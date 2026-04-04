"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { siteDuration, siteEase } from "@/lib/motion-presets";

const SCROLL_TOP_THRESHOLD = 48;
const MIN_DELTA = 8;

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const reduce = useReducedMotion();
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const prev = lastScrollY.current;
        const delta = y - prev;

        if (y < SCROLL_TOP_THRESHOLD) {
          setHidden(false);
        } else if (delta > MIN_DELTA) {
          setHidden(true);
        } else if (delta < -MIN_DELTA) {
          setHidden(false);
        }

        lastScrollY.current = y;
        ticking.current = false;
      });
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm transition-transform duration-500 ease-out will-change-transform ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <motion.div
          className="layout-container"
          initial={reduce ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: siteDuration.navbar, ease: siteEase }}
        >
          <div className="flex h-(--space-navbar-height) items-center justify-between">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="flex cursor-pointer items-center gap-3 border-0 bg-transparent p-0 text-left"
              aria-label="Go to home"
            >
              <Image src="/favicon.svg" alt="" width={65} height={35} />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-medium text-h3">Lama</span>
                <span className="font-display font-medium text-h3">
                  Telecom
                </span>
              </div>
            </button>

            <div className="flex items-center gap-(--space-gap-md)">
              <nav className="hidden items-center gap-(--space-gap-md) md:flex">
                <Link
                  href="/about"
                  className={`font-display text-b2 font-medium uppercase transition-colors hover:text-primary ${
                    pathname === "/about" ? "text-primary" : ""
                  }`}
                >
                  ABOUT
                </Link>
                <Link
                  href="/services"
                  className={`font-display text-b2 font-medium uppercase transition-colors hover:text-primary ${
                    pathname === "/services" ? "text-primary" : ""
                  }`}
                >
                  SERVICES
                </Link>
                <Link
                  href="/industries"
                  className={`font-display text-b2 font-medium uppercase transition-colors hover:text-primary ${
                    pathname === "/industries" ? "text-primary" : ""
                  }`}
                >
                  INDUSTRIES
                </Link>
                <Link
                  href="/careers"
                  className={`font-display text-b2 font-medium uppercase transition-colors hover:text-primary ${
                    pathname === "/careers" ? "text-primary" : ""
                  }`}
                >
                  CAREERS
                </Link>
                <Link
                  href="/contact"
                  className={`font-display text-b2 font-medium uppercase transition-colors hover:text-primary ${
                    pathname === "/contact" ? "text-primary" : ""
                  }`}
                >
                  CONTACT US
                </Link>
              </nav>

              <button
                type="button"
                className="rounded-md p-2 transition-colors hover:bg-gray-100 md:hidden"
                aria-label="Open menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <title>Menu</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </header>
      <div className="h-(--space-navbar-height) shrink-0" aria-hidden />
    </>
  );
}
