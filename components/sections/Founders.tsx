"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { owners, ROTATION_MS } from "./founders/data";
import FoundersHeader from "./founders/FoundersHeader";
import FounderPanel from "./founders/FounderPanel";
import FoundersControls from "./founders/FoundersControls";

export default function Founders() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const active = owners[activeIndex];

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    setProgress(0);
    const tickMs = 50;
    const step = 100 / (ROTATION_MS / tickMs);

    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setActiveIndex((i) => (i + 1) % owners.length);
          return 0;
        }
        return p + step;
      });
    }, tickMs);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, activeIndex]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const next = () => goTo((activeIndex + 1) % owners.length);
  const prev = () => goTo((activeIndex - 1 + owners.length) % owners.length);

  return (
    <section
      id="founders"
      className="relative py-20 md:py-28 bg-cream overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container>
        <FoundersHeader />

        <motion.div
          className="relative bg-cream-warm rounded-3xl border border-divider-soft overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <AnimatePresence mode="wait">
            <FounderPanel key={activeIndex} owner={active} index={activeIndex} />
          </AnimatePresence>

          <FoundersControls
            owners={owners}
            activeIndex={activeIndex}
            progress={progress}
            onSelect={goTo}
            onPrev={prev}
            onNext={next}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 md:mt-10 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-[12.5px] font-bold text-ink-soft hover:text-navy uppercase tracking-[0.15em] transition-colors"
          >
            <span className="text-gold">✦</span>
            Want to work with us?
            <span className="border-b border-ink-soft group-hover:border-navy transition-colors normal-case tracking-normal font-medium text-[13px] text-navy ml-1">
              Get in touch
            </span>
            <ArrowUpRight
              className="w-3.5 h-3.5 text-navy transition-transform duration-300 group-hover:rotate-[-12deg] group-hover:translate-x-0.5"
              strokeWidth={2.5}
            />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
