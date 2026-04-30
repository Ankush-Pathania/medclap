"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { fadeUp, stagger } from "./animations";

export default function FoundersHeader() {
  return (
    <motion.div
      className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
    >
      <div>
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 bg-navy text-cream rounded-full pl-2 pr-3.5 py-1.5 mb-6"
        >
          <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
            <Users className="w-2.5 h-2.5 text-navy" strokeWidth={2.75} />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
            Founders
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="font-display font-extrabold text-navy tracking-tight leading-[0.95]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Meet the{" "}
          <span className="font-serif italic font-normal text-gold-deep">
            Founders.
          </span>
        </motion.h2>
      </div>

      <motion.p
        variants={fadeUp}
        className="text-base md:text-[17px] text-ink-soft leading-relaxed max-w-md md:text-right"
      >
        Two founders. One studio. A shared belief that great marketing comes
        from understanding the work — not just decorating it.
      </motion.p>
    </motion.div>
  );
}
