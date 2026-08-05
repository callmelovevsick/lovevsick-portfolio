"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Github, Menu, X, Command } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCommandPalette } from "@/context/command-palette";

const links = [
  { href: "/garden", label: "garden" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
  { href: "/lab", label: "lab" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { toggle: onOpenPalette } = useCommandPalette();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
        <nav
          className="flex items-center justify-between rounded-xl border border-border bg-void/70 px-4 py-3 backdrop-blur-md"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-sm text-bone"
            onClick={() => setOpen(false)}
          >
            <span className="h-2 w-2 rounded-full bg-violet shadow-[0_0_10px_var(--violet)] transition-transform group-hover:scale-125" />
            <span className="tracking-tight">lovevsick</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3 py-1.5 font-mono text-sm transition-colors",
                    active ? "text-bone" : "text-muted hover:text-bone"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-[13px] h-px bg-violet transition-opacity",
                      active
                        ? "opacity-100 shadow-[0_0_8px_var(--violet)]"
                        : "opacity-0"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenPalette}
              className="hidden items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-bone sm:flex"
              aria-label="Open command palette"
            >
              <Command size={12} />
              <span>K</span>
            </button>
            <a
              href="https://github.com/callmelovevsick"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-md border border-border px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-bone md:flex"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
            <button
              className="flex items-center justify-center rounded-md border border-border p-2 text-muted md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 flex flex-col gap-1 rounded-xl border border-border bg-void/95 p-3 backdrop-blur-md md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 font-mono text-sm",
                  pathname === link.href
                    ? "bg-surface2 text-bone"
                    : "text-muted hover:bg-surface2 hover:text-bone"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/callmelovevsick"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-md px-3 py-2 font-mono text-sm text-muted hover:bg-surface2 hover:text-bone"
            >
              <Github size={14} />
              GitHub
            </a>
            <button
              onClick={() => {
                setOpen(false);
                onOpenPalette();
              }}
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-left font-mono text-sm text-muted hover:bg-surface2 hover:text-bone"
            >
              <Command size={14} />
              Command palette
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
