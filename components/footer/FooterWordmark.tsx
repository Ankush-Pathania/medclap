"use client";

import { motion } from "framer-motion";

export default function FooterWordmark() {
  return (
    <div className="relative overflow-hidden">
      <div className="border-t border-cream/10" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative pt-10 md:pt-14 pb-2 md:pb-4 select-none px-4"
        aria-hidden="true"
      >
        <div className="text-center leading-[0.85]">
          <div
            className="font-display font-extrabold tracking-tighter text-cream"
            style={{ fontSize: "clamp(5rem, 22vw, 22rem)" }}
          >
            MED
            <span className="font-serif italic font-normal text-gold">
              clap
            </span>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
}
