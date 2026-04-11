"use client";

import type { DotLottie } from "@lottiefiles/dotlottie-web";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { siteDuration, siteEase } from "@/lib/motion-presets";

const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((m) => ({
      default: m.DotLottieReact,
    })),
  { ssr: false },
);

const SCROLL_TOP_THRESHOLD = 48;
const MIN_DELTA = 8;

const NAV_LINKS = [
  { href: "/about", label: "ABOUT" },
  { href: "/services", label: "SERVICES" },
  { href: "/industries", label: "INDUSTRIES" },
  { href: "/careers", label: "CAREERS" },
  { href: "/contact", label: "CONTACT US" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const reduce = useReducedMotion();

  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const lottieRef = useRef<DotLottie | null>(null);

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

  const resetLottie = useCallback(() => {
    const inst = lottieRef.current;
    if (inst) {
      inst.setMode("forward");
      inst.stop();
    }
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the intentional trigger
  useEffect(() => {
    resetLottie();
    setMenuOpen(false);
  }, [pathname, resetLottie]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      const next = !prev;
      const inst = lottieRef.current;
      if (inst) {
        inst.setMode(next ? "forward" : "reverse");
        inst.play();
      }
      return next;
    });
  }, []);

  const closeMenu = useCallback(() => {
    const inst = lottieRef.current;
    if (inst) {
      inst.setMode("reverse");
      inst.play();
    }
    setMenuOpen(false);
  }, []);

  const dotLottieRefCallback = useCallback((instance: DotLottie | null) => {
    lottieRef.current = instance;
    if (instance) {
      instance.setSpeed(1.6);
    }
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm transition-transform duration-500 ease-out will-change-transform ${
          hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <motion.div
          className="layout-container"
          initial={reduce ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: siteDuration.navbar, ease: siteEase }}
        >
          <div className="flex h-16 items-center justify-between md:h-(--space-navbar-height)">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="flex cursor-pointer items-center gap-3 border-0 bg-transparent p-0 text-left"
              aria-label="Go to home"
            >
              <Image
                src="/favicon.svg"
                alt=""
                width={65}
                height={35}
                className="h-8 w-auto md:h-auto md:w-auto"
              />
              <div className="hidden flex-col leading-tight md:flex">
                <span className="font-display text-h3 font-medium">Lama</span>
                <span className="font-display text-h3 font-medium">
                  Telecom
                </span>
              </div>
            </button>

            <div className="flex items-center gap-(--space-gap-md)">
              <nav className="hidden items-center gap-(--space-gap-md) md:flex">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-display text-b2 font-medium uppercase transition-colors hover:text-primary ${
                      pathname === link.href ? "text-primary" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <button
                type="button"
                className="flex size-10 items-center justify-center md:hidden"
                onClick={toggleMenu}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <DotLottieReact
                  src="/lottie/burger-menu.json"
                  dotLottieRefCallback={dotLottieRefCallback}
                  autoplay={false}
                  loop={false}
                  className="size-8"
                />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: siteEase }}
                className="overflow-hidden md:hidden"
                aria-label="Mobile navigation"
              >
                <div className="flex flex-col gap-1 border-t border-black/8 px-2 py-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`rounded-sm px-4 py-3 font-display text-b2 font-medium uppercase transition-colors ${
                        pathname === link.href
                          ? "bg-black/5 text-primary"
                          : "text-black/60 hover:bg-black/3 hover:text-black"
                      }`}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.div>
      </header>

      <div className="h-16 shrink-0 md:h-(--space-navbar-height)" aria-hidden />
    </>
  );
}
