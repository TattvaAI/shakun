"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<{ progress: number }>;
      setProgress(customEvent.detail.progress * 100);
    };

    window.addEventListener("lenis-scroll", handler);
    return () => window.removeEventListener("lenis-scroll", handler);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px]"
      style={{ background: "rgba(46, 46, 53, 0.3)" }}
    >
      <div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, var(--color-accent-dim), var(--color-accent), var(--color-accent-bright))",
          transition: "width 0.1s ease-out",
        }}
      />
    </div>
  );
}