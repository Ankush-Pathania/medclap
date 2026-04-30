"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "./animations";

export default function FAQCallout() {
  return (
    <motion.div
      className="max-w-3xl mx-auto mt-8 md:mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp}
    >
      <a
        href="#contact"
        className="group flex items-center justify-between gap-4 rounded-2xl bg-navy text-cream px-6 md:px-7 py-5 md:py-6 hover:bg-ink transition-colors duration-300"
      >
        <div>
          <div className="font-display text-[15.5px] md:text-base font-bold tracking-tight">
            Still have questions?
          </div>
          <div className="text-[12.5px] text-cream/65 mt-0.5">
            Book a free 30-minute call — no pitch, just answers.
          </div>
        </div>
        <span className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-[-12deg]">
          <ArrowUpRight className="w-4 h-4 text-navy" strokeWidth={2.5} />
        </span>
      </a>
    </motion.div>
  );
}
