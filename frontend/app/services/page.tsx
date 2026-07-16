"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import type { Service } from "@/types";
import { services } from "@/data/services";

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-cream pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6">
        <span className="animate-fade-up block font-body text-xs uppercase tracking-[0.28em] text-gold">
          What We Do
        </span>

        <h1 className="animate-fade-up mt-4 max-w-2xl font-display text-4xl leading-[1.1] text-ink [animation-delay:0.1s] md:text-6xl">
          Design, build, and everything in between.
        </h1>

        <p className="animate-fade-up mt-6 max-w-lg font-body text-[15px] leading-relaxed text-ink/70 [animation-delay:0.2s]">
          From the first sketch to the final walkthrough, ArchiCube carries each
          project across four disciplines — so nothing gets lost in translation
          between the drawing and the site.
        </p>
      </section>

      {/* Accordion list */}
      <section className="mx-auto mt-16 max-w-5xl px-6">
        <div className="animate-fade-up divide-y divide-ink/10 border-t border-b border-ink/10 [animation-delay:0.3s]">
          {services.map((service: Service, i: number) => {
            const isOpen = openIndex === i;
            return (
              <div key={service.title}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-6 py-8 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold md:gap-10"
                >
                  <span className="font-body text-xs tracking-[0.18em] text-ink/40">
                    0{i + 1}
                  </span>

                  <span
                    className={`flex-1 font-display text-2xl transition-colors md:text-3xl ${
                      isOpen ? "text-gold" : "text-ink"
                    }`}
                  >
                    {service.title}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-gold text-gold"
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-10 pl-[3.25rem] md:grid-cols-2 md:pl-[5.5rem]">
                        <p className="font-body text-[15px] leading-relaxed text-ink/70">
                          {service.summary}
                        </p>

                        <ul className="space-y-3">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 font-body text-sm text-ink/70"
                            >
                              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto mt-20 max-w-5xl px-6">
        <div className="animate-fade-up flex flex-col items-start justify-between gap-6 border border-ink/10 bg-cream p-8 [animation-delay:0.4s] md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="font-display text-2xl text-ink md:text-3xl">
              Have a project in mind?
            </h2>
            <p className="mt-2 font-body text-sm text-ink/60">
              Tell us where you are in the process — we&rsquo;ll take it from
              there.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border border-gold px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:bg-gold hover:text-cream"
          >
            Get a Quote
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
