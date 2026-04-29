"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

type Props = {
  firstName: string;
  onReset: () => void;
};

export default function SuccessState({ firstName, onReset }: Props) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="relative py-12 md:py-16 text-center"
    >
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 18,
          delay: 0.1,
        }}
        className="w-20 h-20 rounded-full bg-gold mx-auto flex items-center justify-center mb-6"
      >
        <CheckCircle2 className="w-10 h-10 text-navy" strokeWidth={2.25} />
      </motion.div>
      <h3
        className="font-display font-extrabold text-cream tracking-tight mb-3"
        style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
      >
        Message{" "}
        <span className="font-serif italic font-normal text-gold">sent.</span>
      </h3>
      <p className="text-cream/70 text-sm md:text-base max-w-md mx-auto leading-relaxed mb-8">
        Thanks {firstName || "for reaching out"}! Ankush will personally reply
        within 24 hours — usually much sooner.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-2 text-gold font-bold text-sm hover:gap-3 transition-all"
      >
        Send another message
        <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
      </button>
    </motion.div>
  );
}
