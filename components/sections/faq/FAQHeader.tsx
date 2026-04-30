"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { fadeUp, stagger } from "./animations";

export default function FAQHeader() {
  return (
    <motion.div
      className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
    >
      <motion.div
        variants={fadeUp}
        className="inline-flex items-center gap-2 bg-navy text-cream rounded-full pl-2 pr-3.5 py-1.5 mb-6"
      >
        <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
          <HelpCircle className="w-2.5 h-2.5 text-navy" strokeWidth={2.75} />
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
          FAQs
        </span>
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className="font-display font-extrabold text-navy tracking-tight leading-[0.95]"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
      >
        Common{" "}
        <span className="font-serif italic font-normal text-gold-deep">
          questions.
        </span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mt-5 text-sm md:text-[15px] text-ink-soft leading-relaxed max-w-md mx-auto"
      >
        Things people ask before hiring us — answered honestly. If yours
        isn&apos;t here, just reach out.
      </motion.p>
    </motion.div>
  );
}
