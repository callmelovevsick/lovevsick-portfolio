"use client";

import { useEffect, useMemo, useState } from "react";

type Token = { text: string; cls?: string };

const KEYWORD = "text-violet-strong";
const TYPE = "text-lilac";
const STRING = "text-[#e7c8ff]";
const PUNCT = "text-dim";
const PLAIN = "text-bone";

const lines: Token[][] = [
  [
    { text: "#include", cls: KEYWORD },
    { text: " " },
    { text: "<iostream>", cls: TYPE },
  ],
  [],
  [
    { text: "int", cls: KEYWORD },
    { text: " main() ", cls: PLAIN },
    { text: "{", cls: PUNCT },
  ],
  [
    { text: "    std", cls: TYPE },
    { text: "::", cls: PUNCT },
    { text: "cout ", cls: PLAIN },
    { text: "<<", cls: PUNCT },
    { text: ' "lovevsick" ', cls: STRING },
    { text: "<<", cls: PUNCT },
    { text: " std", cls: TYPE },
    { text: "::", cls: PUNCT },
    { text: "endl;", cls: PLAIN },
  ],
  [],
  [
    { text: "    return", cls: KEYWORD },
    { text: " 0;", cls: PLAIN },
  ],
  [{ text: "}", cls: PUNCT }],
];

function lineLength(tokens: Token[]) {
  return tokens.reduce((n, t) => n + t.text.length, 0);
}

function sliceLine(tokens: Token[], n: number): Token[] {
  if (n <= 0) return [];
  const out: Token[] = [];
  let remaining = n;
  for (const t of tokens) {
    if (remaining <= 0) break;
    if (t.text.length <= remaining) {
      out.push(t);
      remaining -= t.text.length;
    } else {
      out.push({ text: t.text.slice(0, remaining), cls: t.cls });
      remaining = 0;
    }
  }
  return out;
}

export function CodeEditorHero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    if (reducedMotion) {
      setLineIndex(lines.length);
      setDone(true);
      return;
    }
    if (lineIndex >= lines.length) {
      setDone(true);
      return;
    }
    const target = lineLength(lines[lineIndex]);
    if (charIndex < target) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 22 + Math.random() * 26);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 130);
    return () => clearTimeout(t);
  }, [lineIndex, charIndex, reducedMotion]);

  return (
    <div className="relative w-full max-w-xl overflow-hidden rounded-xl border border-border-strong bg-surface/90 shadow-2xl shadow-violet-soft/10 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border bg-surface2/60 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
        </div>
        <span className="ml-3 font-mono text-xs text-dim">main.cpp</span>
      </div>

      <div className="flex px-2 py-5 font-mono text-[13px] leading-6 sm:text-sm">
        <div
          aria-hidden="true"
          className="select-none pr-4 text-right text-dim/70"
        >
          {lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <div className="min-w-0 flex-1">
          {lines.map((tokens, i) => {
            const revealed =
              i < lineIndex
                ? tokens
                : i === lineIndex
                ? sliceLine(tokens, charIndex)
                : [];
            const isCurrent = i === lineIndex && !done;
            return (
              <div key={i} className="whitespace-pre">
                {revealed.map((t, j) => (
                  <span key={j} className={t.cls ?? PLAIN}>
                    {t.text}
                  </span>
                ))}
                {isCurrent && (
                  <span className="ml-px inline-block h-4 w-[7px] translate-y-[2px] animate-blink bg-violet align-middle" />
                )}
                {tokens.length === 0 ? "\u00A0" : null}
              </div>
            );
          })}
          {done && (
            <span className="ml-px inline-block h-4 w-[7px] translate-y-[2px] animate-blink bg-violet align-middle" />
          )}
        </div>
      </div>
    </div>
  );
}
