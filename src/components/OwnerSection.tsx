"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Star, TrendingUp, Users, Quote } from "lucide-react";

const achievements = [
  { icon: Award, label: "ISO Certified Partner", desc: "Quality assured operations" },
  { icon: TrendingUp, label: "20+ Years Track Record", desc: "Since 2002 in Ambala" },
  { icon: Users, label: "500+ Business Clients", desc: "Across Haryana & beyond" },
  { icon: Star, label: "4.8\u2605 Average Rating", desc: "Justdial verified" },
];

const timeline = [
  { year: "2002", event: "Founded at Manav Chowk, Ambala" },
  { year: "2008", event: "Partnered with DTDC & Blue Dart" },
  { year: "2014", event: "International freight via DHL & FedEx" },
  { year: "2020", event: "E-commerce logistics with Delhivery & Ekart" },
  { year: "2024", event: "500+ clients, 6 carrier partners" },
];

export default function OwnerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  return (
    <section id="about" ref={sectionRef} className="w-full" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="divider" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-28 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 relative">
            <motion.div
              className="relative aspect-[3/4] rounded-2xl overflow-hidden"
              style={{
                border: "1px solid var(--color-border)",
                y: imageY,
                scale: imageScale,
              }}
            >
              <Image
                src="/assets/pankaj-sharma.jpeg"
                alt="Pankaj Sharma \u2014 Founder, Shakuns Freight"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, var(--color-bg) 0%, transparent 40%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="section-label mb-2">Founder & Director</div>
                <h3
                  className="font-serif text-2xl md:text-3xl"
                  style={{ color: "var(--color-fg)" }}
                >
                  Pankaj Sharma
                </h3>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-2 md:-right-6 top-12 glass rounded-xl p-4 flex items-center gap-3 shadow-2xl hidden lg:flex"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(212,168,83,0.12)" }}
              >
                <Quote size={16} style={{ color: "var(--color-accent)" }} />
              </div>
              <div>
                <div className="text-xs font-semibold" style={{ color: "var(--color-fg)" }}>
                  &ldquo;Deliver with integrity&rdquo;
                </div>
                <div className="text-[10px] font-mono" style={{ color: "var(--color-muted)" }}>
                  Our founding principle
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -left-2 md:-left-6 bottom-20 glass rounded-xl p-4 flex items-center gap-3 shadow-2xl hidden lg:flex"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(212,168,83,0.12)" }}
              >
                <Star size={16} style={{ color: "var(--color-accent)" }} fill="var(--color-accent)" />
              </div>
              <div>
                <div className="text-xs font-semibold" style={{ color: "var(--color-fg)" }}>
                  4.8 / 5.0
                </div>
                <div className="text-[10px] font-mono" style={{ color: "var(--color-muted)" }}>
                  Justdial Rating
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-10">
            <div>
              <div className="section-label mb-5">The Story</div>
              <h2
                className="font-serif leading-tight mb-6"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "var(--color-fg)",
                }}
              >
                Built on two decades of<br />
                <em className="gradient-text not-italic">unbroken trust</em>
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--color-muted)" }}
              >
                Mr. Pankaj Sharma founded Shakuns Freight Forwarders at Manav Chowk, Ambala
                with a singular mission &mdash; to make logistics effortless for every business,
                big or small. From a single courier desk, he built an empire of reliability.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
                Today, Shakuns is the most trusted freight partner in Haryana, with
                deep integrations across India&apos;s top six logistics carriers and a track
                record of zero-compromise delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievements.map((a, i) => {
                const Icon = a.icon;
                return (
                  <motion.div
                    key={a.label}
                    className="card p-5 flex items-start gap-4 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "rgba(212,168,83,0.08)", border: "1px solid rgba(212,168,83,0.12)" }}
                    >
                      <Icon size={16} style={{ color: "var(--color-accent)" }} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold block" style={{ color: "var(--color-fg)" }}>
                        {a.label}
                      </span>
                      <span className="text-xs" style={{ color: "var(--color-muted)" }}>
                        {a.desc}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-6 font-mono" style={{ color: "var(--color-accent)" }}>
                Timeline
              </h3>
              <div className="relative pl-6" style={{ borderLeft: "1px solid var(--color-border)" }}>
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    className="relative pb-6 last:pb-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div
                      className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full"
                      style={{
                        background: i === timeline.length - 1 ? "var(--color-accent)" : "var(--color-border)",
                        boxShadow: i === timeline.length - 1 ? "0 0 10px var(--color-accent)" : "none",
                      }}
                    />
                    <span className="font-mono text-xs tracking-wider block mb-1" style={{ color: "var(--color-accent)" }}>
                      {item.year}
                    </span>
                    <span className="text-sm" style={{ color: "var(--color-fg-dim)" }}>
                      {item.event}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
