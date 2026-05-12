"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rahul Mehra",
    role: "Import Manager, Ambala Steel Works",
    rating: 5,
    text: "Shakuns has been our freight partner for 7 years. Their handling of international shipments via DHL is impeccable \u2014 never a delay, never a damaged piece.",
    date: "Jan 2024",
  },
  {
    name: "Sunita Kapoor",
    role: "Owner, KapoorTextiles",
    rating: 5,
    text: "Pankaj ji personally oversees every consignment. The level of care and professionalism is unmatched in Ambala. Our Blue Dart shipments always arrive on time.",
    date: "Mar 2024",
  },
  {
    name: "Devendra Singh",
    role: "Logistics Head, HaryanaMart",
    rating: 5,
    text: "Switched to Shakuns from a larger aggregator and never looked back. Their DTDC integration saved us 40% on domestic shipping costs.",
    date: "Feb 2024",
  },
  {
    name: "Priya Sharma",
    role: "E-Commerce Seller",
    rating: 5,
    text: "I handle 200+ shipments a month and Shakuns manages all of it seamlessly across Ekart and Delhivery. Their staff is always reachable and solution-oriented.",
    date: "Apr 2024",
  },
  {
    name: "Anil Garg",
    role: "Director, Garg Pharmaceuticals",
    rating: 5,
    text: "Temperature-sensitive pharmaceutical exports need extreme care. Shakuns understands compliance and handles our FedEx exports with zero incidents.",
    date: "Jan 2024",
  },
  {
    name: "Meena Ahuja",
    role: "Handicraft Exporter",
    rating: 5,
    text: "My handicraft exports reach Europe safely every time. Shakuns handles customs documentation expertly \u2014 no hidden charges, full transparency.",
    date: "Mar 2024",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} style={{ color: "var(--color-accent)" }} fill="var(--color-accent)" />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  return (
    <motion.div
      className="card p-6 md:p-7 flex flex-col gap-5 relative group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="absolute top-6 right-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{ color: "var(--color-accent)" }}
      >
        <Quote size={60} />
      </div>

      <StarRow count={review.rating} />
      <p
        className="text-sm leading-relaxed flex-1 relative z-10"
        style={{ color: "var(--color-fg-dim)" }}
      >
        &ldquo;{review.text}&rdquo;
      </p>
      <div
        className="flex items-center justify-between pt-4"
        style={{ borderTop: "1px solid var(--color-border)" }}
      >
        <div>
          <div className="text-sm font-semibold" style={{ color: "var(--color-fg)" }}>
            {review.name}
          </div>
          <div className="text-xs" style={{ color: "var(--color-muted)" }}>
            {review.role}
          </div>
        </div>
        <span className="text-[10px] font-mono tracking-wider" style={{ color: "var(--color-muted)" }}>
          {review.date}
        </span>
      </div>
    </motion.div>
  );
}

export default function ReviewsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);
  const currentReviews = reviews.slice(currentPage * perPage, (currentPage + 1) * perPage);

  return (
    <section id="reviews" className="w-full py-28 md:py-36" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="section-label mb-5">Client Reviews</div>
            <h2
              className="font-serif leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--color-fg)",
              }}
            >
              What our clients say
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="font-serif text-4xl" style={{ color: "var(--color-fg)" }}>
                4.8<span style={{ color: "var(--color-accent)" }}>\u2605</span>
              </div>
              <div
                className="text-[10px] uppercase tracking-widest font-mono"
                style={{ color: "var(--color-muted)" }}
              >
                Justdial Rating
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                disabled={currentPage === 0}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-fg)",
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={currentPage === totalPages - 1}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-fg)",
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentReviews.map((r, i) => (
              <ReviewCard key={r.name} review={r} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className="w-8 h-1 rounded-full transition-all duration-300"
              style={{
                background: i === currentPage ? "var(--color-accent)" : "var(--color-border)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
