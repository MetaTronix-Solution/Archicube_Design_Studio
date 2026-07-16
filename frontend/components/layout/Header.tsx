"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile drawer on route change or Escape key
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled || open
            ? "h-[72px] border-b border-[var(--color-ink)]/8 bg-[var(--color-cream)]/90 backdrop-blur-md"
            : "h-24 bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-display text-xl tracking-tight"
          >
            <span className="relative flex h-8 w-8 items-center justify-center border border-[var(--color-gold)]">
              <span className="absolute inset-1 border border-[var(--color-gold)]/40 transition-transform duration-500 group-hover:rotate-45" />
            </span>
            <span>
              <span className="text-[var(--color-ink)]">Archi</span>
              <span className="text-[var(--color-gold)]">Cube</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            onMouseLeave={() => setHovered(null)}
            className="hidden items-center gap-1 lg:flex"
          >
            {links.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHovered(item.href)}
                  className={`relative px-4 py-2 text-[13px] font-medium uppercase tracking-[0.18em] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-gold)] ${
                    active
                      ? "text-[var(--color-ink)]"
                      : "text-[var(--color-ink)]/60 hover:text-[var(--color-ink)]"
                  }`}
                >
                  {item.name}

                  {(hovered === item.href || (hovered === null && active)) && (
                    <motion.span
                      layoutId="nav-underline"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                      className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-[var(--color-gold)]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="group hidden items-center gap-2 border border-[var(--color-gold)] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold)] hover:text-[var(--color-cream)] lg:inline-flex"
          >
            Get a Quote
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="p-2 text-[var(--color-ink)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-gold)] lg:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-[var(--color-cream)] lg:hidden"
          >
            <div className="flex h-[72px] items-center justify-end px-6">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 text-[var(--color-ink)]"
              >
                <X size={26} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 px-8">
              {links.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i + 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-baseline justify-between border-b border-[var(--color-ink)]/10 py-5 font-display text-3xl transition-colors ${
                        active
                          ? "text-[var(--color-gold)]"
                          : "text-[var(--color-ink)]"
                      }`}
                    >
                      {item.name}
                      <span className="font-body text-xs tracking-[0.18em] text-[var(--color-ink)]/40">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * links.length + 0.1, duration: 0.4 }}
              className="px-8 pb-10"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[var(--color-gold)] px-6 py-4 text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-cream)] transition hover:opacity-90"
              >
                Get a Quote
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
