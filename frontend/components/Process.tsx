"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const STEPS = [
  {
    step: "Step 01",
    title: "Consultation",
    body: "We understand your needs and vision.",
  },
  {
    step: "Step 02",
    title: "Design & Visualization",
    body: "We craft and visualize tailored design concepts.",
  },
  {
    step: "Step 03",
    title: "Execution & Delivery",
    body: "We bring your vision to life with flawless execution.",
  },
];

export default function Process() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
        <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-gold">
          How It Works
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          How We Bring Your Vision to Life
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-body leading-relaxed text-ink-soft">
          A simple, seamless process to create stunning architectural and
          interior designs.
        </p>

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-16 grid gap-12 sm:grid-cols-3 sm:gap-8"
        >
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-ink/10 sm:block"
            aria-hidden
          />
          {STEPS.map(({ step, title, body }) => (
            <motion.div
              key={step}
              variants={fadeUp}
              className="relative flex flex-col items-center"
            >
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-cream font-display text-sm font-semibold text-gold">
                {step.slice(-2)}
              </span>
              <p className="mt-5 font-body text-xs font-medium uppercase tracking-wide text-gold">
                {step}
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-ink">
                {title}
              </p>
              <p className="mt-2 max-w-xs font-body text-sm leading-relaxed text-ink-soft">
                {body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
