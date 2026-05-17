"use client";

import { motion } from "framer-motion";
import { Package, Globe, Truck, BarChart3, Shield, Clock, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "International Freight",
    desc: "Door-to-door air and sea freight via DHL, FedEx, and TNT networks across 220+ countries.",
    tag: "Global",
    spanClass: "md:col-span-2 md:row-span-1",
    featured: true,
  },
  {
    icon: Truck,
    title: "Domestic Courier",
    desc: "Same-day and next-day delivery across India via DTDC, Blue Dart, Ekart & Delhivery.",
    tag: "Domestic",
    spanClass: "",
    featured: false,
  },
  {
    icon: Package,
    title: "Custom Packaging",
    desc: "Professional packing for fragile, high-value, and commercial shipments.",
    tag: "Protection",
    spanClass: "",
    featured: false,
  },
  {
    icon: BarChart3,
    title: "Supply Chain",
    desc: "End-to-end logistics analysis and route optimization for businesses.",
    tag: "Enterprise",
    spanClass: "",
    featured: false,
  },
  {
    icon: Shield,
    title: "Cargo Insurance",
    desc: "Comprehensive transit insurance with rapid claim settlement.",
    tag: "Security",
    spanClass: "",
    featured: false,
  },
  {
    icon: Clock,
    title: "Real-Time Tracking",
    desc: "Live shipment visibility across all carrier networks from a single dashboard.",
    tag: "Technology",
    spanClass: "",
    featured: false,
  },
];

export default function ServicesSection() {

  return (
    <section id="services" className="w-full py-28 md:py-36" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="section-label mb-5">What We Do</div>
            <h2
              className="font-serif leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "var(--color-fg)",
              }}
            >
              A complete suite of<br />
              <em className="gradient-text not-italic">logistics solutions</em>
            </h2>
          </div>
          <p
            className="text-base max-w-sm leading-relaxed"
            style={{ color: "var(--color-muted)" }}
          >
            From a single envelope to full container loads — we have the network,
            expertise, and relationships to move it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, index) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                className={`card group relative p-7 md:p-8 flex flex-col justify-between gap-6 min-h-[200px] overflow-hidden ${s.spanClass}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 80% at 20% 20%, rgba(212,168,83,0.05), transparent)",
                  }}
                />

                <div className="relative z-10 flex items-start justify-between">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "rgba(212,168,83,0.08)",
                      border: "1px solid rgba(212,168,83,0.12)",
                    }}
                  >
                    <Icon size={20} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <span
                    className="text-[10px] font-semibold tracking-widest uppercase py-1 px-3 rounded-full font-mono"
                    style={{
                      color: "var(--color-muted)",
                      background: "var(--color-surface-2)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {s.tag}
                  </span>
                </div>

                <div className="relative z-10">
                  <h3
                    className="text-lg font-semibold mb-2.5 transition-colors duration-300"
                    style={{ color: "var(--color-fg)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                    {s.desc}
                  </p>
                </div>

                <motion.a
                  href="#"
                  className="relative z-10 flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 w-fit"
                  style={{ color: "var(--color-accent)" }}
                  onClick={(e) => e.preventDefault()}
                >
                  Learn more <ArrowUpRight size={12} />
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
