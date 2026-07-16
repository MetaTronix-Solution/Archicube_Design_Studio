"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-cream px-6 text-center">
      <span className="font-body text-xs uppercase tracking-[0.28em] text-gold">
        404
      </span>

      <h1 className="mt-4 font-display text-4xl leading-[1.1] text-ink md:text-6xl">
        Page Not Found
      </h1>

      <p className="mt-6 max-w-md font-body text-[15px] leading-relaxed text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>

      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 border border-gold px-6 py-3 font-body text-[13px] font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:bg-gold hover:text-cream"
      >
        Back to Home
      </Link>
    </div>
  );
}
