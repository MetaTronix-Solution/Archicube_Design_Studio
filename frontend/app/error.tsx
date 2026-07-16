"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-cream px-6 text-center">
      <span className="font-body text-xs uppercase tracking-[0.28em] text-gold">
        Something Went Wrong
      </span>

      <h1 className="mt-4 font-display text-4xl leading-[1.1] text-ink md:text-6xl">
        Unexpected Error
      </h1>

      <p className="mt-6 max-w-md font-body text-[15px] leading-relaxed text-ink-soft">
        We encountered an issue while loading this page. Please try again or
        return to the homepage.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 border border-gold px-6 py-3 font-body text-[13px] font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:bg-gold hover:text-cream"
        >
          Try Again
        </button>

        <a
          href="/"
          className="inline-flex items-center gap-2 border border-ink/15 px-6 py-3 font-body text-[13px] font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:border-gold hover:text-gold"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
