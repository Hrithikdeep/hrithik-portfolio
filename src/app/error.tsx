"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <main className="min-h-screen grid place-items-center px-6 bg-background text-foreground">
      <div className="glass-strong max-w-lg rounded-2xl p-8 text-center">
        <p className="text-sm uppercase tracking-widest text-accent mb-3">
          Something went wrong
        </p>
        <h1 className="text-3xl font-bold mb-3">This page could not load.</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Please try again. If it keeps happening, the page is still safe to
          refresh.
        </p>
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
