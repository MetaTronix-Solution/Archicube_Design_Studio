"use client";

import { motion } from "framer-motion";
import { ArrowDown, Star } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28 lg:pt-44"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-10">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-6"
        >
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Designing Spaces,
            <br />
            Elevating Lifestyles
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md font-body text-base leading-relaxed text-ink-soft"
          >
            Innovative architecture and interior design solutions tailored to
            inspire and transform your world.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-body text-sm font-medium text-charcoal shadow-[0_10px_30px_-12px_rgba(189,143,78,0.65)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-gold-light"
            >
              Book a Consultation
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-3">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-cream bg-gradient-to-br from-ink/20 to-gold/30"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-gold"
                    strokeWidth={0}
                  />
                ))}
                <span className="ml-1 font-body text-sm font-medium text-ink">
                  4.9
                </span>
              </div>
              <p className="font-body text-xs text-ink-soft">
                Trusted by 200+ happy clients
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={viewportOnce}
          className="relative lg:col-span-6"
        >
          <ImagePlaceholder
            label="Interior showcase"
            ratio="aspect-[5/4]"
            className="shadow-xl"
          />

          <div className="absolute -left-6 top-6 hidden h-24 w-24 items-center justify-center rounded-full border border-gold/30 bg-cream/90 text-center shadow-lg backdrop-blur sm:flex">
            <span className="font-display text-xs font-semibold leading-tight text-ink">
              14
              <br />
              <span className="font-body text-[9px] font-normal uppercase tracking-wide text-ink-soft">
                Years of Expertise
              </span>
            </span>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mx-auto mt-16 hidden w-fit items-center gap-2 font-body text-xs uppercase tracking-widest text-ink-soft/70 lg:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  );
}
