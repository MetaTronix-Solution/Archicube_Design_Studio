"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Jane Smith",
    role: "Homeowner",
    quote:
      "ArchiCube completely transformed my home into a modern masterpiece. Their team listened to every idea and exceeded all expectations.",
  },
  {
    name: "John Doe",
    role: "Business Owner",
    quote:
      "ArchiCube took our office space to the next level. Both practical and stunning — the space now reflects our brand perfectly.",
  },
  {
    name: "Maria Lee",
    role: "Hotel Manager",
    quote:
      "ArchiCube took our office space to the next level, and it now boosted morale and client impressions considerably.",
  },
  {
    name: "Ravi Patel",
    role: "Restaurant Owner",
    quote:
      "From the first sketch to the final walkthrough, the team's attention to detail made the whole process enjoyable.",
  },
];

function useItemsPerView() {
  const [items, setItems] = useState(1);

  useEffect(() => {
    const compute = () => {
      if (window.innerWidth >= 1024) setItems(3);
      else if (window.innerWidth >= 640) setItems(2);
      else setItems(1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return items;
}

export default function Testimonials() {
  const itemsPerView = useItemsPerView();
  const maxIndex = Math.max(0, TESTIMONIALS.length - itemsPerView);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const goTo = (next: number) => {
    if (next < 0) setIndex(maxIndex);
    else if (next > maxIndex) setIndex(0);
    else setIndex(next);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Testimonial
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-lg font-body leading-relaxed text-ink-soft">
              Real feedback from those we&apos;ve had the pleasure of working
              with.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${index * (100 / itemsPerView)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="shrink-0 px-3"
                style={{ flexBasis: `${100 / itemsPerView}%` }}
              >
                <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-cream-dark/40 p-7">
                  <Quote className="h-6 w-6 text-gold/60" strokeWidth={1.5} />
                  <div className="mt-4 flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-gold"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-ink-soft">
                    {t.quote}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-gradient-to-br from-ink/20 to-gold/30" />
                    <div>
                      <p className="font-display text-sm font-semibold text-ink">
                        {t.name}
                      </p>
                      <p className="font-body text-xs text-ink-soft">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial group ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-gold" : "w-1.5 bg-ink/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
