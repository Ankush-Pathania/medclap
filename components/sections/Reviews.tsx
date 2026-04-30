"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { testimonials } from "./reviews/data";
import { staggerCards } from "./reviews/animations";
import ReviewsHeader from "./reviews/ReviewsHeader";
import StatsCard from "./reviews/StatsCard";
import TestimonialCard from "./reviews/TestimonialCard";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative py-20 md:py-28 bg-cream overflow-hidden"
    >
      <Container>
        <ReviewsHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
          <StatsCard />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerCards}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
