"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { navLinks } from "./data";
import FooterNewsletter from "./FooterNewsletter";
import FooterColumn from "./FooterColumn";
import FooterSocial from "./FooterSocial";

export default function FooterMain() {
  return (
    <div className="relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 py-14 md:py-20"
        >
          <FooterNewsletter />

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
            <FooterColumn label="// Navigate //" links={navLinks} />
            <FooterSocial />
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
