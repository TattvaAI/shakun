"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

interface LenisScrollEvent {
  progress: number;
  velocity?: number;
  direction?: number;
  limit?: number;
  cursor?: boolean;
  scroll?: number;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    const handler = (e: LenisScrollEvent) => {
      window.dispatchEvent(new CustomEvent("lenis-scroll", { detail: { progress: e.progress } }));
    };
    lenis.on("scroll", handler);
    return () => lenis.off("scroll", handler);
  }, []);

  return <>{children}</>;
}