import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-sm text-bone">lovevsick</p>
            <p className="mt-2 max-w-xs font-mono text-xs leading-relaxed text-dim">
              built with C++ energy and too much caffeine.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex gap-6 font-mono text-xs text-muted"
          >
            <a
              href="https://github.com/callmelovevsick"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-bone"
            >
              <Github size={13} />
              GitHub
            </a>
            <Link href="/garden" className="transition-colors hover:text-bone">
              Garden
            </Link>
            <Link href="/projects" className="transition-colors hover:text-bone">
              Projects
            </Link>
          </nav>
        </div>

        <p className="mt-10 font-mono text-[11px] text-dim">
          © 2026 lovevsick
        </p>
      </div>
    </footer>
  );
}
