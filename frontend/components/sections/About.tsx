"use client";

import { motion } from "framer-motion";
import { Award, Building2 } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const STATS = [
  {
    icon: Building2,
    title: "Projects Completed",
    body: "Over 200 projects delivered globally.",
  },
  {
    icon: Award,
    title: "Awards & Recognition",
    body: "Awarded for excellence in interior and architectural design.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-5"
        >
          <ImagePlaceholder label="Studio at work" ratio="aspect-[3/4]" />
          <div className="absolute -bottom-8 -right-6 w-2/3 sm:-right-10">
            <ImagePlaceholder
              label="Living room detail"
              ratio="aspect-[4/3]"
              className="border-4 border-cream shadow-lg"
            />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-7 lg:pl-6"
        >
          <motion.p
            variants={fadeUp}
            className="font-body text-xs font-medium uppercase tracking-[0.2em] text-gold"
          >
            About Us
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"
          >
            Crafting Timeless Designs, Inspiring Vibrant Spaces
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl font-body leading-relaxed text-ink-soft"
          >
            At ArchiCube, we blend creativity and functionality to redefine the
            way you experience spaces.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl font-body leading-relaxed text-ink-soft"
          >
            Founded with a passion for innovation and excellence, ArchiCube
            specializes in creating bespoke architecture and interior design
            solutions. From conceptual design to project execution, we bring
            your vision to life with unmatched attention to detail and artistry.
          </motion.p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {STATS.map(({ icon: Icon, title, body }) => (
              <motion.div key={title} variants={fadeUp} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/12 text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-display text-base font-semibold text-ink">
                    {title}
                  </p>
                  <p className="mt-1 font-body text-sm leading-relaxed text-ink-soft">
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a
            variants={fadeUp}
            href="#portfolio"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3 font-body text-sm font-medium text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            View Our Portfolio
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
