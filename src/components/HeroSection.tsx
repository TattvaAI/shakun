"use client";

import dynamic from "next/dynamic";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown, MapPin, Phone } from "lucide-react";
import { SplitText } from "@/components/TextReveal";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      <HeroScene />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,168,83,0.06) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-[40vh] pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--color-bg) 0%, transparent 100%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full pb-20 md:pb-28"
        style={{ opacity, y, scale }}
      >
        <motion.div
          className="section-label mb-10"
          initial={{ opacity: 0, x: -20 }}
          animate={mounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono">Est. Ambala 2002</span>
        </motion.div>

        <div className="mb-6 md:mb-8">
          <SplitText
            text="Moving the"
            className="font-serif leading-[0.9]"
            charClass="font-serif"
          />
          <div className="overflow-hidden">
            <motion.em
              className="gradient-text not-italic block font-serif leading-[0.9]"
              style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)", letterSpacing: "-0.02em" }}
              initial={{ y: "110%" }}
              animate={mounted ? { y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              World
            </motion.em>
          </div>
          <SplitText
            text="One Shipment at a Time."
            className="leading-[0.9]"
            charClass="font-serif"
          />
        </div>

        <motion.div
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-base md:text-lg max-w-md leading-relaxed"
            style={{ color: "var(--color-muted)" }}
          >
            India&apos;s premier freight forwarding partner — operating with
            surgical precision across domestic and international corridors.
          </p>

          <div className="flex items-center gap-4">
            <a href="#services" className="btn-primary">
              Our Services
              <ArrowRight size={16} />
            </a>
            <a href="#about" className="btn-outline hidden sm:inline-flex">
              Meet the Team
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 pt-8 flex flex-wrap gap-6 md:gap-12"
          style={{ borderTop: "1px solid var(--color-border)" }}
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-muted)" }}>
            <MapPin size={14} style={{ color: "var(--color-accent)" }} />
            Manav Chowk, Ambala City
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-muted)" }}>
            <Phone size={14} style={{ color: "var(--color-accent)" }} />
            +91 99990 00171
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-muted)" }}>
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e" }}
            />
            Available 6 Days / Week
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: "var(--color-muted)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} style={{ color: "var(--color-accent)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
