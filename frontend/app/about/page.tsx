"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { Compass, Sofa, Leaf, ClipboardCheck } from "lucide-react";

const PILLARS = [
  {
    icon: Compass,
    title: "Architectural Rigor",
    description:
      "We combine meticulous structural calculations with fluid spatial layouts to ensure safety, durability, and high functional utility.",
  },
  {
    icon: Sofa,
    title: "Bespoke Interior Styling",
    description:
      "Every interior environment we engineer is custom-tailored to the occupant's workflow, leveraging premium finishes, ergonomic design, and intelligent lighting systems.",
  },
  {
    icon: Leaf,
    title: "Vastu & Environmental Harmony",
    description:
      "We expertly integrate traditional spatial sciences (Vastu Shastra) and sustainable biophilic principles to optimize natural light, cross-ventilation, and spatial energy.",
  },
  {
    icon: ClipboardCheck,
    title: "Turnkey Project Delivery",
    description:
      "From the very first structural blueprint to the final material installation, our end-to-end project oversight ensures seamless execution on time and within scope.",
  },
];

// Split each stat into a numeric target + prefix/suffix, so the number itself
// can be animated while the surrounding characters ("+", "/5") stay static.
const STATS = [
  {
    value: 180,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Projects Executed Successfully",
  },
  {
    value: 14,
    prefix: "",
    suffix: "",
    decimals: 0,
    label: "Years of Structural Expertise",
  },
  {
    value: 500,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Blueprint Specifications Delivered",
  },
  {
    value: 4.9,
    prefix: "",
    suffix: "/5",
    decimals: 1,
    label: "Client Satisfaction Rating",
  },
];

function CountUpStat({
  value,
  prefix,
  suffix,
  decimals,
}: {
  value: number;
  prefix: string;
  suffix: string;
  decimals: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(latest.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <p
      ref={ref}
      className="font-display text-3xl sm:text-4xl text-gold-light tabular-nums"
    >
      {prefix}
      {display}
      {suffix}
    </p>
  );
}

export default function About() {
  return (
    <section className="bg-cream text-ink">
      {/* Hero */}
      <div className="mx-auto max-w-5xl px-6 pt-28 pb-20 text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] animate-fade-up">
          Engineering Precision.
          <br />
          Designing Innovations.
        </h1>
        <p className="font-body text-ink-soft text-base sm:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
          Archicube Design Studio is a premier, multidisciplinary architecture
          and interior design firm specializing in turnkey spatial solutions,
          structural integrity, and contemporary aesthetic engineering.
        </p>
      </div>

      {/* Biography */}
      <div className="mx-auto max-w-5xl px-6 pb-24 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <h2 className="font-display text-3xl sm:text-4xl leading-snug md:sticky md:top-28">
          Shaper of Environments, Builder of Legacies
        </h2>
        <div className="space-y-6">
          <p className="font-body text-ink-soft text-base leading-relaxed">
            At Archicube Design Studio, we believe that exceptional architecture
            seamlessly reconciles human behavior with the built environment.
            Founded on the principles of structural precision, geometric
            harmony, and forward-thinking functionality, our studio transforms
            abstract visions into high-performance physical spaces. We cater to
            a diverse clientele, managing projects ranging from high-end
            residential villas and luxury commercial hubs to complex structural
            renovations.
          </p>
          <p className="font-body text-ink-soft text-base leading-relaxed">
            Our comprehensive, turnkey methodology covers every phase of the
            project lifecycle. From initial conceptual drafting and rigorous
            Vastu-compliant spatial planning to advanced 3D visual rendering and
            final execution oversight, we ensure unparalleled detail at every
            node. By synthesizing traditional engineering standards with
            cutting-edge sustainable materials, we deliver spaces that are not
            only visually arresting but structurally sound and timeless.
          </p>
        </div>
      </div>

      {/* Pillars */}
      <div className="bg-cream-dark">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-display text-3xl sm:text-4xl text-center mb-14">
            Pillars of Excellence
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink/10 rounded-2xl overflow-hidden">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="bg-cream-dark p-8 sm:p-10">
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  <h3 className="font-display text-xl mt-5">{pillar.title}</h3>
                  <p className="font-body text-ink-soft text-sm mt-3 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mx-auto max-w-6xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        <blockquote className="border-l-2 border-gold pl-6 sm:pl-8">
          <p className="font-body text-[11px] uppercase tracking-widest text-gold mb-3">
            Our Mission
          </p>
          <p className="font-display text-xl sm:text-2xl leading-snug">
            To provide sophisticated, structurally sound, and meticulously
            detailed architectural and design consulting services that elevate
            human experiences, streamline commercial productivity, and enhance
            residential living.
          </p>
        </blockquote>
        <blockquote className="border-l-2 border-gold pl-6 sm:pl-8">
          <p className="font-body text-[11px] uppercase tracking-widest text-gold mb-3">
            Our Vision
          </p>
          <p className="font-display text-xl sm:text-2xl leading-snug">
            To set the industry standard for contemporary architectural
            innovation, bridging the gap between sophisticated aesthetics and
            structural engineering excellence globally.
          </p>
        </blockquote>
      </div>

      {/* Stats */}
      <div className="bg-charcoal text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <CountUpStat
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
              <p className="font-body text-cream/70 text-xs sm:text-sm mt-2 leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
