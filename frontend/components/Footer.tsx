"use client";

import { Mail, MapPin, Phone } from "lucide-react";

// lucide-react no longer ships brand/social icons, so these are small inline SVGs.
const SOCIAL_ICONS = [
  {
    label: "Facebook",
    path: "M13 22v-8h2.7l.4-3.3H13V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2C16 4.1 15 4 13.9 4 11.4 4 9.7 5.5 9.7 8.4v2.3H7V14h2.7v8H13Z",
  },
  {
    label: "Instagram",
    path: "M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.4.5.6.3 1.1.6 1.6 1.1.5.5.8 1 1.1 1.6.3.6.5 1.3.5 2.4.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.5 2.4-.3.6-.6 1.1-1.1 1.6-.5.5-1 .8-1.6 1.1-.6.3-1.3.5-2.4.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.4-.5-.6-.3-1.1-.6-1.6-1.1-.5-.5-.8-1-1.1-1.6-.3-.6-.5-1.3-.5-2.4C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.5-2.4.3-.6.6-1.1 1.1-1.6.5-.5 1-.8 1.6-1.1.6-.3 1.3-.5 2.4-.5C8.9 2 9.3 2 12 2Zm0 3.6A6.4 6.4 0 1 0 12 18.4 6.4 6.4 0 0 0 12 5.6Zm0 10.6A4.2 4.2 0 1 1 12 7.8a4.2 4.2 0 0 1 0 8.4Zm6.6-10.9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
  },
  {
    label: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.39-2.05 2.82V21h-4V9Z",
  },
];

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-soft text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 font-display text-lg font-semibold"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold">
                AC
              </span>
              ArchiCube
            </a>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-cream/60">
              ArchiCube creates stunning architectural and interior designs,
              transforming spaces into inspiring environments.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_ICONS.map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-cream/80">
              Quick Links
            </p>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-cream/80">
              Contact Info
            </p>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 font-body text-sm text-cream/60">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  strokeWidth={1.5}
                />
                123 Main St, City, Country
              </li>
              <li className="flex items-start gap-3 font-body text-sm text-cream/60">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  strokeWidth={1.5}
                />
                001 234 5678
              </li>
              <li className="flex items-start gap-3 font-body text-sm text-cream/60">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  strokeWidth={1.5}
                />
                hello@archicube.studio
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-cream/80">
              Newsletter
            </p>
            <p className="mt-5 font-body text-sm leading-relaxed text-cream/60">
              Subscribe for design tips and studio news.
            </p>
            <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Your email"
                aria-label="Email address"
                className="w-full rounded-l-full border border-cream/15 bg-transparent px-4 py-2.5 font-body text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-r-full bg-gold px-5 font-body text-sm font-medium text-charcoal transition-colors hover:bg-gold-light"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-6 text-center font-body text-xs text-cream/40">
          © {new Date().getFullYear()} ArchiCube Design Studio. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
