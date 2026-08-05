import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-lg flex-col items-center px-6 py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-dim">
        error/
      </p>
      <h1 className="mt-3 font-mono text-2xl text-bone">
        segfault: page not found
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        This route doesn&apos;t exist in the source tree. It may have been
        moved, renamed, or never compiled.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg border border-border-strong bg-surface2 px-5 py-2.5 font-mono text-sm text-bone transition-colors hover:border-violet"
      >
        cd ~/
      </Link>
    </section>
  );
}
