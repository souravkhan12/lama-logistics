"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef } from "react";

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
      smoothWheel: true,
      anchors: true,
      stopInertiaOnNavigate: true,
    });
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    // Re-run when `pathname` changes (client navigation); value drives the dependency only.
    void pathname;
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return children;
}
