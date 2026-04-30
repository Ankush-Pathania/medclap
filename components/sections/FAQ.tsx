"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { faqs } from "./faq/data";
import { stagger } from "./faq/animations";
import FAQHeader from "./faq/FAQHeader";
import FAQItem from "./faq/FAQItem";
import FAQCallout from "./faq/FAQCallout";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-20 md:py-28 bg-cream overflow-hidden"
    >
      <Container>
        <FAQHeader />

        <motion.div
          className="max-w-3xl mx-auto space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        <FAQCallout />
      </Container>
    </section>
  );
}
