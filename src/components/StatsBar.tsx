"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 22, suffix: "+", label: "Years of Excellence" },
  { value: 50000, suffix: "+", label: "Shipments Delivered" },
  { value: 150, suffix: "+", label: "Cities Connected" },
  { value: 6, suffix: "", label: "Carrier Partners" },
];

function useCountUp(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const easeOutQt = (t: number) => 1 - Math.pow(1 - t, 4);
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(easeOutQt(progress) * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, 2200, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const display =
    value >= 1000 ? count.toLocaleString("en-IN") : count.toString();

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-3 group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className="absolute -top-4 -left-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "var(--color-accent)", boxShadow: "0 0 12px var(--color-accent)" }}
      />
      <div
        className="font-serif leading-none tracking-tight"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          color: "var(--color-fg)",
        }}
      >
        {display}
        <span style={{ color: "var(--color-accent)" }}>{suffix}</span>
      </div>
      <div
        className="text-sm font-medium tracking-wide uppercase"
        style={{ color: "var(--color-muted)" }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        background: "var(--color-surface)",
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
          opacity: 0.5,
        }}
      />
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
        {stats.map((s, i) => (
          <StatItem key={s.label} index={i} {...s} />
        ))}
      </div>
    </section>
  );
}
