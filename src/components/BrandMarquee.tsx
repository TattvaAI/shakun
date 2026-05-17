"use client";

import { useState } from "react";

const brands = [
  { name: "DTDC", color: "#FF6B00", bgText: "#FFF5EB" },
  { name: "DHL", color: "#FFCC00", bgText: "#1A1A1A" },
  { name: "FedEx", color: "#4D148C", bgText: "#FF6600" },
  { name: "Delhivery", color: "#A020F0", bgText: "#F5E6FF" },
  { name: "Blue Dart", color: "#003087", bgText: "#E6EDF5" },
  { name: "Ekart", color: "#F7C948", bgText: "#1A1A1A" },
  { name: "TNT", color: "#FF6600", bgText: "#FFF2E6" },
];

function BrandBadge({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center w-40 h-16 rounded-xl mx-3 transition-all duration-300 hover:scale-105 cursor-default"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "0 1px 0 0 rgba(255,255,255,0.03) inset",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.boxShadow = `0 0 20px ${color}15, 0 1px 0 0 rgba(255,255,255,0.05) inset`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.boxShadow = "0 1px 0 0 rgba(255,255,255,0.03) inset";
      }}
    >
      <span
        className="font-bold text-sm tracking-wider"
        style={{ color }}
      >
        {name}
      </span>
    </div>
  );
}

export default function BrandMarquee() {
  const [paused, setPaused] = useState(false);
  const track = [...brands, ...brands, ...brands, ...brands];

  return (
    <section id="partners" className="w-full py-20 md:py-28" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-12">
        <div className="section-label mb-4">Carrier Network</div>
        <h2
          className="font-serif leading-tight"
          style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            color: "var(--color-fg)",
          }}
        >
          Trusted by <em className="gradient-text not-italic">global logistics leaders</em>
        </h2>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="absolute inset-y-0 left-0 z-10 w-16 md:w-32 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--color-bg), transparent)" }}
        />
        <div
          className="absolute inset-y-0 right-0 z-10 w-16 md:w-32 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--color-bg), transparent)" }}
        />

        <div
          className="flex w-max transition-[animation-play-state] duration-300"
          style={{
            animation: "marquee 40s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {track.map((brand, i) => (
            <BrandBadge key={`${brand.name}-${i}`} name={brand.name} color={brand.color} />
          ))}
        </div>
      </div>
    </section>
  );
}
