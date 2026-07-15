"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

type Service = {
  title: string;
  summary: string;
  deliverables: string[];
};

const services: Service[] = [
  {
    title: "Architectural Design",
    summary:
      "Concept through construction drawings for residential and commercial buildings, shaped around how the site and the client actually intend to use it.",
    deliverables: [
      "Site analysis & feasibility",
      "Concept design & massing studies",
      "Planning & permit drawings",
      "Construction documentation",
    ],
  },
  {
    title: "Interior Design & Fit-Out",
    summary:
      "Spatial planning, material selection, and fit-out coordination that carries the architectural intent all the way to the finished room.",
    deliverables: [
      "Space planning & layouts",
      "Material & finish selection",
      "Custom joinery & fixtures",
      "Fit-out contractor coordination",
    ],
  },
  {
    title: "Construction & Project Management",
    summary:
      "On-site oversight from groundbreaking to handover, keeping budget, schedule, and design intent aligned across every trade.",
    deliverables: [
      "Contractor tendering & selection",
      "Budget & schedule management",
      "Site supervision",
      "Snagging & handover",
    ],
  },
  {
    title: "Renovation & Extension",
    summary:
      "Reworking existing structures — additions, conversions, and adaptive reuse — with the same rigor as a ground-up build.",
    deliverables: [
      "Structural surveys",
      "Extension & conversion design",
      "Heritage & compliance review",
      "Phased works planning",
    ],
  },
];

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="bg-[var(--color-cream)] pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6">
        <span className="font-body text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
          What We Do
        </span>

        <h1 className="mt-4 max-w-2xl font-display text-4xl leading-[1.1] text-[var(--color-ink)] md:text-6xl">
          Design, build, and everything in between.
        </h1>

        <p className="mt-6 max-w-lg font-body text-[15px] leading-relaxed text-[var(--color-ink)]/70">
          From the first sketch to the final walkthrough, ArchiCube carries
          each project across four disciplines — so nothing gets lost in
          translation between the drawing and the site.
        </p>
      </section>

      {/* Accordion list */}
      <section className="mx-auto mt-16 max-w-5xl px-6">
        <div className="divide-y divide-[var(--color-ink)]/10 border-t border-b border-[var(--color-ink)]/10">
          {services.map((service, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={service.title}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-6 py-8 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-gold)] md:gap-10"
                >
                  <span className="font-body text-xs tracking-[0.18em] text-[var(--color-ink)]/40">
                    0{i + 1}
                  </span>

                  <span
                    className={`flex-1 font-display text-2xl transition-colors md:text-3xl ${
                      isOpen
                        ? "text-[var(--color-gold)]"
                        : "text-[var(--color-ink)]"
                    }`}
                  >
                    {service.title}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-[var(--color-gold)] text-[var(--color-gold)]"
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
                        <p className="font-body text-[15px] leading-relaxed text-[var(--color-ink)]/70">
                          {service.summary}
                        </p>

                        <ul className="space-y-3">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 font-body text-sm text-[var(--color-ink)]/70"
                            >
                              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--color-gold)]" />
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
        <div className="flex flex-col items-start justify-between gap-6 border border-[var(--color-ink)]/10 bg-[var(--color-cream)] p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="font-display text-2xl text-[var(--color-ink)] md:text-3xl">
              Have a project in mind?
            </h2>
            <p className="mt-2 font-body text-sm text-[var(--color-ink)]/60">
              Tell us where you are in the process — we&rsquo;ll take it from
              there.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border border-[var(--color-gold)] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold)] hover:text-[var(--color-cream)]"
          >
            Get a Quote
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}