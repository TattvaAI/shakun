"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight, ArrowUp, Clock } from "lucide-react";

const currentYear = new Date().getFullYear();

const footerLinks = {
  services: [
    "International Freight",
    "Domestic Courier",
    "Cargo Insurance",
    "Custom Packaging",
    "Supply Chain",
    "Tracking",
  ],
  partners: ["DTDC", "DHL", "FedEx", "Delhivery", "Blue Dart", "Ekart", "TNT"],
};

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(212,168,83,0.03) 0%, var(--color-bg) 50%, rgba(212,168,83,0.02) 100%)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,168,83,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="section-label mb-4">Ready to Ship?</div>
              <h2
                className="font-serif leading-tight"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "var(--color-fg)",
                }}
              >
                Let&apos;s move your<br />
                <span className="gradient-text">business forward.</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919999000171" className="btn-primary">
                Call Now
                <ArrowUpRight size={16} />
              </a>
              <a href="mailto:shakunsfreight@gmail.com" className="btn-outline">
                Send an Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #D4A853, #E8C068)",
                  boxShadow: "0 4px 20px rgba(212, 168, 83, 0.3)",
                }}
              >
                <span className="text-xs font-bold tracking-tight" style={{ color: "#09090B" }}>
                  SF
                </span>
              </div>
              <div>
                <span
                  className="text-sm font-semibold tracking-wider uppercase block leading-none"
                  style={{ color: "var(--color-fg)" }}
                >
                  Shakuns Freight Forwarders
                </span>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-6 max-w-sm"
              style={{ color: "var(--color-muted)" }}
            >
              Premium freight forwarding and courier services since 2002.
              Authorised partner for DTDC, DHL, FedEx, Delhivery, Blue Dart, and Ekart.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919999000171"
                className="flex items-center gap-2.5 text-sm transition-colors group hover:text-[var(--color-accent)]"
                style={{ color: "var(--color-muted)" }}
              >
                <Phone size={14} style={{ color: "var(--color-accent)" }} />
                +91 99990 00171
              </a>
              <a
                href="mailto:shakunsfreight@gmail.com"
                className="flex items-center gap-2.5 text-sm transition-colors group hover:text-[var(--color-accent)]"
                style={{ color: "var(--color-muted)" }}
              >
                <Mail size={14} style={{ color: "var(--color-accent)" }} />
                shakunsfreight@gmail.com
              </a>
              <div className="flex items-center gap-2.5 text-sm" style={{ color: "var(--color-muted)" }}>
                <MapPin size={14} style={{ color: "var(--color-accent)" }} />
                Manav Chowk, Ambala City, Haryana
              </div>
              <div className="flex items-center gap-2.5 text-sm" style={{ color: "var(--color-muted)" }}>
                <Clock size={14} style={{ color: "var(--color-accent)" }} />
                Mon\u2013Sat &middot; 9:00 AM \u2013 7:00 PM
              </div>
            </div>
          </div>

          <div>
            <h4
              className="text-[10px] font-semibold uppercase tracking-widest mb-5 font-mono"
              style={{ color: "var(--color-fg)" }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm transition-colors hover:text-[var(--color-accent)]"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-[10px] font-semibold uppercase tracking-widest mb-5 font-mono"
              style={{ color: "var(--color-fg)" }}
            >
              Our Partners
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.partners.map((p) => (
                <li key={p} className="text-sm" style={{ color: "var(--color-muted)" }}>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-muted)" }}>
            &copy; {currentYear} Shakuns Freight Forwarders. All rights reserved.
          </p>
          <p className="text-[10px] font-mono tracking-wider" style={{ color: "var(--color-border-light)" }}>
            Manav Chowk, Ambala City &mdash; 134003
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl flex items-center justify-center shadow-2xl"
            style={{
              background: "var(--color-accent)",
              color: "var(--color-bg)",
              boxShadow: "0 8px 30px rgba(212, 168, 83, 0.3)",
            }}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
