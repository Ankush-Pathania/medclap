"use client";

import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import MenuNav from "./MenuNav";
import MenuInfo from "./MenuInfo";

type Props = {
  isOpen: boolean;
  onNavClick: (href: string) => void;
};

export default function MenuOverlay({ isOpen, onNavClick }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-40 bg-navy text-cream overflow-y-auto"
        >
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.2) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

          <Container>
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-24 md:pt-28 pb-16 min-h-screen">
              <MenuNav onNavClick={onNavClick} />
              <MenuInfo />
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
