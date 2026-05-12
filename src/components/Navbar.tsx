"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Partners", href: "#partners" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
];

function MagneticLink({ children, href }: { children: React.ReactNode; href: string }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <a
      href={href}
      className="magnetic inline-block"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: (e.clientX - rect.left - rect.width / 2) * 0.25,
          y: (e.clientY - rect.top - rect.height / 2) * 0.25,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          background: scrolled ? "rgba(9,9,11,0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(1.8)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(1.8)" : "none",
          borderBottom: scrolled ? "1px solid rgba(46,46,53,0.5)" : "1px solid transparent",
        }}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-8 h-18 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #D4A853, #E8C068)",
                boxShadow: "0 4px 20px rgba(212, 168, 83, 0.3)",
              }}
            >
              <span className="text-xs font-bold tracking-tight" style={{ color: "#09090B" }}>
                SF
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className="text-sm font-semibold tracking-wider uppercase leading-none"
                style={{ color: "#FAFAF9" }}
              >
                Shakuns
              </span>
              <span
                className="text-[9px] font-medium tracking-[0.25em] uppercase leading-none mt-1"
                style={{ color: "#71717A" }}
              >
                Freight Forwarders
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <MagneticLink key={l.label} href={l.href}>
                <span
                  className="relative text-sm font-medium px-4 py-2 transition-colors duration-300 block"
                  style={{ color: "#71717A" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FAFAF9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#71717A";
                  }}
                >
                  <span className="relative z-10">{l.label}</span>
                  <motion.span
                    className="absolute bottom-0 left-4 right-4 h-[1px] origin-left"
                    style={{ background: "#D4A853" }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </span>
              </MagneticLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919999000171"
              className="btn-ghost text-xs"
            >
              <Phone size={14} />
              +91 99990 00171
            </a>
            <a
              href="tel:+919999000171"
              className="btn-primary text-xs py-2.5 px-5"
            >
              Get a Quote
              <ArrowUpRight size={14} />
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg transition-colors"
            style={{ color: mobileOpen ? "#FAFAF9" : "#71717A" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div
              className="absolute inset-0"
              style={{ background: "rgba(9,9,11,0.95)", backdropFilter: "blur(40px)" }}
            />
            <motion.div
              className="relative z-10 flex flex-col items-start justify-center h-full px-8"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
              }}
            >
              {navLinks.map((l) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-4xl font-normal py-3 block transition-colors"
                  style={{ color: "#71717A" }}
                  variants={{
                    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                    closed: { opacity: 0, x: -40, transition: { duration: 0.3 } },
                  }}
                  whileTap={{ scale: 0.97 }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#FAFAF9"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#71717A"; }}
                >
                  {l.label}
                </motion.a>
              ))}

              <motion.div
                className="mt-12 flex flex-col gap-4 w-full"
                variants={{
                  open: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
                  closed: { opacity: 0, y: 20 },
                }}
              >
                <a
                  href="tel:+919999000171"
                  className="btn-primary w-full justify-center text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone size={16} />
                  Call Now
                </a>
                <a
                  href="mailto:shakunsfreight@gmail.com"
                  className="btn-outline w-full justify-center text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Send Inquiry
                </a>
              </motion.div>

              <motion.div
                className="mt-8 flex items-center gap-3 text-xs"
                style={{ color: "#71717A" }}
                variants={{
                  open: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
                  closed: { opacity: 0 },
                }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
                Available 6 Days / Week
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
