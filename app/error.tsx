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
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-dim">
        error/
      </p>
      <h1 className="mt-3 font-mono text-2xl text-bone">
        uncaught exception
      </h1>
      <p className="mt-3 max-w-md break-words text-sm leading-relaxed text-muted">
        {error.message || "something threw during render."}
      </p>
      <button
        onClick={() => reset()}
        className="mt-8 rounded-lg border border-border-strong bg-surface2 px-5 py-2.5 font-mono text-sm text-bone transition-colors hover:border-violet"
      >
        try again
      </button>
    </div>
  );
}
