"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ProjectError({
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
          Project page error
        </p>
        <h1 className="text-3xl font-bold mb-3">Could not load this project.</h1>
        <p className="text-sm text-muted-foreground mb-6">
          The rest of the portfolio is still available.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            Try again
          </button>
          <Link
            href="/#projects"
            className="rounded-full glass px-6 py-3 text-sm font-semibold hover:border-primary/50 transition"
          >
            Back to projects
          </Link>
        </div>
      </div>
    </main>
  );
}
