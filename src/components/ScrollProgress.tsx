"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const progressRef = useRef(0);
  const directionRef = useRef(1);

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      progressRef.current += 0.15 * directionRef.current;

      if (progressRef.current >= 100) {
        progressRef.current = 100;
        directionRef.current = -1;
      } else if (progressRef.current <= 0) {
        progressRef.current = 0;
        directionRef.current = 1;
      }

      const bar = document.getElementById("scroll-progress-bar");
      if (bar) {
        bar.style.width = `${progressRef.current}%`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px]"
      style={{ background: "rgba(46, 46, 53, 0.3)" }}
    >
      <div
        id="scroll-progress-bar"
        className="h-full"
        style={{
          width: "0%",
          background: "linear-gradient(90deg, var(--color-accent-dim), var(--color-accent), var(--color-accent-bright))",
        }}
      />
    </div>
  );
}