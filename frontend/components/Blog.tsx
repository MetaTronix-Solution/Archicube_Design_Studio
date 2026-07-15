"use client";

import { motion } from "framer-motion";
import ImagePlaceholder from "./ui/ImagePlaceholder";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const POSTS = [
  {
    title: "How to Transform Small Spaces Into Big Inspirations",
    excerpt: "Maximize every inch of your space with these creative ideas.",
  },
  {
    title: "5 Architectural Trends to Watch in 2026",
    excerpt:
      "The world of architecture is always evolving — stay ahead of the curve.",
  },
  {
    title: "The Importance of Lighting in Interior Design",
    excerpt:
      "Lighting can make or break a space — learn how to choose the right one.",
  },
];

export default function Blog() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
        <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-gold">
          Blog
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          Insights and Inspiration
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-body leading-relaxed text-ink-soft">
          Stay up to date with the latest trends, design tips, and inspiration
          from the world of architecture and interiors.
        </p>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 text-left sm:grid-cols-3"
        >
          {POSTS.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeUp}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl">
                <ImagePlaceholder
                  label="Article cover"
                  ratio="aspect-[4/3]"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-ink">
                {post.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
                {post.excerpt}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-2.5 font-body text-xs font-medium text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                Read More
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
