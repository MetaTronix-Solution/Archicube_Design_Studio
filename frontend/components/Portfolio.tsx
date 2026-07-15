"use client";

import { motion } from "framer-motion";
import ImagePlaceholder from "./ui/ImagePlaceholder";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const PROJECTS = [
  {
    title: "Modern Living Space",
    tag: "Interior Design",
    ratio: "aspect-[4/3]",
  },
  { title: "Luxury Office Design", tag: "Commercial", ratio: "aspect-[4/3]" },
  { title: "Urban Residence", tag: "Architecture", ratio: "aspect-[5/4]" },
  {
    title: "Boutique Hotel Interior",
    tag: "Hospitality",
    ratio: "aspect-[5/4]",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Portfolio
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Our Creations Speak for Themselves
            </h2>
            <p className="mt-4 max-w-lg font-body leading-relaxed text-ink-soft">
              Explore our diverse range of projects showcasing innovation,
              elegance, and functionality.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 px-7 py-3 font-body text-sm font-medium text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            View All Projects
          </a>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl"
            >
              <ImagePlaceholder
                label={project.tag}
                ratio={project.ratio}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/70 via-charcoal/0 to-transparent p-6 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <p className="font-body text-xs uppercase tracking-wide text-gold-light">
                  {project.tag}
                </p>
                <p className="font-display text-lg font-semibold text-cream">
                  {project.title}
                </p>
              </div>
              <p className="mt-3 font-display text-base font-semibold text-ink group-hover:opacity-0 sm:hidden">
                {project.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
