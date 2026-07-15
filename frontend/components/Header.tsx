"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-[0_1px_0_0_rgba(33,31,27,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-ink"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold">
            AC
          </span>
          ArchiCube
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-cream">
            <Phone className="h-4 w-4" strokeWidth={1.5} />
          </span>
          <div className="font-body leading-tight">
            <p className="text-[11px] uppercase tracking-wide text-ink-soft/70">
              Call us
            </p>
            <p className="text-sm font-medium text-ink">001 234 56789</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 text-ink lg:hidden"
        >
          <Menu className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-charcoal/50 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col bg-cream px-7 py-6 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-ink">
                  ArchiCube
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink"
                >
                  <X className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.35 }}
                    className="border-b border-ink/8 py-4 font-body text-lg text-ink-soft transition-colors hover:text-gold"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto flex items-center gap-3 border-t border-ink/8 pt-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-cream">
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <div className="font-body leading-tight">
                  <p className="text-[11px] uppercase tracking-wide text-ink-soft/70">
                    Call us
                  </p>
                  <p className="text-sm font-medium text-ink">001 234 56789</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
