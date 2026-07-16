"use client";

import { motion } from "framer-motion";
import { Box, Compass, Layers, PenTool } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const SERVICES = [
  {
    icon: Compass,
    title: "Architectural Design",
    body: "Innovative and functional architectural solutions tailored to your vision.",
  },
  {
    icon: PenTool,
    title: "Interior Design",
    body: "Transforming spaces into timeless environments with aesthetics and comfort.",
  },
  {
    icon: Layers,
    title: "Space Planning",
    body: "Maximizing your space with smart layouts and efficient designs.",
  },
  {
    icon: Box,
    title: "3D Visualization",
    body: "Bring your ideas to life with realistic 3D renders and walkthroughs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-charcoal py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-4"
          >
            <motion.p
              variants={fadeUp}
              className="font-body text-xs font-medium uppercase tracking-[0.2em] text-gold"
            >
              Our Services
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl"
            >
              Our Expertise, Your Vision
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-sm font-body leading-relaxed text-cream/65"
            >
              At ArchiCube, we turn visions into reality with tailored
              architectural and interior design services. From innovative spaces
              to custom furniture, we ensure every detail reflects your unique
              style.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="#portfolio"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-cream/20 px-7 py-3 font-body text-sm font-medium text-cream transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              View All Services
            </motion.a>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-5 sm:grid-cols-2 lg:col-span-8"
          >
            {SERVICES.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group rounded-2xl border border-cream/10 p-7 transition-colors duration-300 hover:border-gold/40 hover:bg-cream/[0.04]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/12 text-gold transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <p className="mt-6 font-display text-lg font-semibold">
                  {title}
                </p>
                <p className="mt-2 font-body text-sm leading-relaxed text-cream/60">
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
