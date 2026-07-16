"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import type { Category } from "@/types";
import { FILTERS, PROJECTS } from "@/data/projects";

export default function Portfolio() {
  const [active, setActive] = useState<Category>("All Projects");

  const visible = useMemo(
    () =>
      active === "All Projects"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === active),
    [active],
  );

  return (
    <section className="bg-cream text-ink">
      {/* Intro */}
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-14 text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] animate-fade-up">
          Our Legacy in Shapes &amp; Spaces
        </h1>
        <p className="font-body text-ink-soft text-base sm:text-lg mt-6 max-w-2xl mx-auto">
          A curated showcase of architectural precision, functional interior
          designs, and structural engineering marvels built to inspire.
        </p>

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {FILTERS.map((filter) => {
            const isActive = filter === active;
            return (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className="relative pb-2 font-body text-sm tracking-wide uppercase text-ink-soft transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded-sm"
                aria-pressed={isActive}
              >
                <span className={isActive ? "text-ink" : ""}>{filter}</span>
                {isActive && (
                  <motion.span
                    layoutId="portfolio-filter-underline"
                    className="absolute left-0 right-0 -bottom-px h-[2px] bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visible.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl bg-cream-dark p-3"
              >
                {/* Corner-frame signature: appears on hover, echoes the ArchiCube square mark */}
                <span className="pointer-events-none absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold opacity-0 -translate-x-1 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 rounded-tl-md" />
                <span className="pointer-events-none absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold opacity-0 translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 rounded-br-md" />

                {/* Image placeholder */}
                <div className="relative aspect-[16/10] rounded-xl bg-cream flex flex-col items-center justify-center gap-2 overflow-hidden">
                  <ImageIcon className="w-6 h-6 text-ink-soft/50" />
                  <span className="font-body text-xs text-ink-soft/60 tracking-wide">
                    {project.categoryTag}
                  </span>
                </div>

                <div className="p-5">
                  <span className="inline-block font-body text-[11px] uppercase tracking-widest text-gold border border-gold/40 rounded-full px-3 py-1">
                    {project.categoryTag}
                  </span>

                  <h3 className="font-display text-2xl mt-4 leading-snug">
                    {project.title}
                  </h3>

                  <p className="font-body text-ink-soft text-sm mt-3 leading-relaxed">
                    {project.summary}
                  </p>

                  <p className="font-body text-ink-soft/90 text-sm mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-body text-[11px] uppercase tracking-widest text-ink-soft/70 mb-2">
                        Scope
                      </p>
                      <ul className="space-y-1">
                        {project.scope.map((item) => (
                          <li
                            key={item}
                            className="font-body text-sm text-ink flex gap-2"
                          >
                            <span className="text-gold">—</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-body text-[11px] uppercase tracking-widest text-ink-soft/70 mb-2">
                        Vibe
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.vibe.map((tag) => (
                          <span
                            key={tag}
                            className="font-body text-xs text-ink-soft bg-cream rounded-full px-3 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {visible.length === 0 && (
          <p className="font-body text-ink-soft text-center py-16">
            No projects in this category yet.
          </p>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="bg-charcoal text-cream">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="font-display text-3xl sm:text-4xl">
            Have a Vision in Mind?
          </h2>
          <p className="font-body text-cream/70 text-base sm:text-lg mt-5 leading-relaxed">
            Whether it&rsquo;s a blank plot of land needing a custom Vastu
            blueprint, a commercial headquarters expansion, or an interior
            refresh, we possess the engineering precision and design eye to
            build it right. Let&rsquo;s create something timeless together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 mt-9 bg-gold hover:bg-gold-light transition-colors text-charcoal font-body text-sm tracking-wide rounded-full px-7 py-3.5"
          >
            Initiate Your Project Blueprint
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
