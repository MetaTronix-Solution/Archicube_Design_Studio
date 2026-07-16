"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function CTA() {
  return (
    <section id="contact" className="bg-charcoal py-16 text-cream sm:py-20">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 md:flex-row md:items-center lg:px-10"
      >
        <div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-semibold leading-tight sm:text-4xl"
          >
            Ready to Bring Your Vision to Life?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-md font-body leading-relaxed text-cream/65"
          >
            Get in touch with us today and let&apos;s create something
            extraordinary together.
          </motion.p>
        </div>

        <motion.a
          variants={fadeUp}
          whileHover={{ scale: 1.06, rotate: 4 }}
          href="mailto:archi20cube@gmail.com"
          aria-label="Email ArchiCube Design Studio"
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold text-charcoal transition-colors duration-300 hover:bg-gold-light"
        >
          <ArrowUpRight className="h-6 w-6" strokeWidth={1.75} />
        </motion.a>
      </motion.div>
    </section>
  );
}
