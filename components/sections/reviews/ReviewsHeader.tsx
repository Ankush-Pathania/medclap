"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, staggerContainer } from "./animations";

export default function ReviewsHeader() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-16 items-end"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
    >
      <div className="md:col-span-8">
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 bg-navy text-cream rounded-full pl-2 pr-3.5 py-1.5 mb-6"
        >
          <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
            <Star
              className="w-2.5 h-2.5 text-navy fill-navy"
              strokeWidth={2.75}
            />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
            Reviews
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="font-display font-extrabold text-navy tracking-tight leading-[0.95]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Success{" "}
          <span className="font-serif italic font-normal text-gold-deep">
            stories.
          </span>
        </motion.h2>
      </div>

      <motion.p
        variants={fadeUp}
        className="md:col-span-4 text-sm md:text-[15px] text-ink-soft leading-relaxed md:text-right"
      >
        Discover how our growth-focused approach helps ambitious brands scale
        smarter and faster than the competition.
      </motion.p>
    </motion.div>
  );
}
