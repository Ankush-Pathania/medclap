"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { fadeUp } from "./animations";
import type { FAQ } from "./data";

export default function FAQItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: FAQ;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={`group relative rounded-2xl border transition-colors duration-300 overflow-hidden ${
        isOpen
          ? "bg-cream-warm border-divider"
          : "bg-cream-warm/60 border-divider-soft hover:bg-cream-warm hover:border-divider"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full px-6 md:px-7 py-5 md:py-6 flex items-center justify-between gap-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-[15.5px] md:text-base font-bold text-navy leading-tight tracking-tight">
          {faq.q}
        </span>

        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            backgroundColor: isOpen ? "#F4B62E" : "#FAF6EE",
          }}
          transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          className="w-9 h-9 rounded-full border border-divider flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: isOpen ? "#F4B62E" : "#FAF6EE" }}
        >
          <Plus className="w-4 h-4 text-navy" strokeWidth={2.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] },
              opacity: { duration: 0.3, ease: "easeOut" },
            }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-7 pb-6 md:pb-7 -mt-1">
              <div className="border-t border-divider pt-4 md:pt-5">
                <p className="text-[14.5px] md:text-[15px] text-ink-soft leading-relaxed max-w-2xl">
                  {faq.a}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
