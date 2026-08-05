"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  Sprout,
  FolderGit2,
  UserRound,
  FlaskConical,
  Github,
  CornerDownLeft,
} from "lucide-react";
import { useCommandPalette } from "@/context/command-palette";

const commands = [
  { label: "Home", href: "/", icon: Home, external: false },
  { label: "Garden", href: "/garden", icon: Sprout, external: false },
  { label: "Projects", href: "/projects", icon: FolderGit2, external: false },
  { label: "About", href: "/about", icon: UserRound, external: false },
  { label: "Lab", href: "/lab", icon: FlaskConical, external: false },
  {
    label: "GitHub",
    href: "https://github.com/callmelovevsick",
    icon: Github,
    external: true,
  },
];

export function CommandPalette() {
  const { open, setOpen } = useCommandPalette();
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      const t = setTimeout(() => inputRef.current?.focus(), 10);
      return () => clearTimeout(t);
    }
  }, [open]);

  function select(index: number) {
    const item = filtered[index];
    if (!item) return;
    if (item.external) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.href);
    }
    setOpen(false);
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[14vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-void/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="relative w-full max-w-lg overflow-hidden rounded-xl border border-border-strong bg-surface shadow-2xl shadow-black/50"
          >
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="font-mono text-xs text-dim">/&gt;</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActiveIndex((i) => Math.max(i - 1, 0));
                  } else if (e.key === "Enter") {
                    e.preventDefault();
                    select(activeIndex);
                  }
                }}
                placeholder="jump to..."
                className="w-full bg-transparent font-mono text-sm text-bone placeholder:text-dim focus:outline-none"
                aria-label="Search commands"
              />
              <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-dim">
                esc
              </kbd>
            </div>

            <ul className="max-h-72 overflow-y-auto p-2" role="listbox">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center font-mono text-xs text-dim">
                  no matches.
                </li>
              )}
              {filtered.map((item, i) => {
                const Icon = item.icon;
                const active = i === activeIndex;
                return (
                  <li key={item.href} role="option" aria-selected={active}>
                    <button
                      onClick={() => select(i)}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left font-mono text-sm transition-colors ${
                        active
                          ? "bg-surface2 text-bone"
                          : "text-muted hover:bg-surface2/60"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={15} />
                        {item.label}
                      </span>
                      {active && <CornerDownLeft size={13} className="text-dim" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
