"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isTouch || reduced) return;
    setEnabled(true);

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let targetX = ringX;
    let targetY = ringY;

    function onMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }
    }

    function onOver(e: MouseEvent) {
      const el = e.target as HTMLElement;
      const interactive = el.closest("a, button, [role='button'], input");
      ringRef.current?.classList.toggle("scale-150", !!interactive);
      ringRef.current?.classList.toggle("opacity-60", !!interactive);
    }

    let raf = 0;
    function tick() {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    document.documentElement.classList.add("no-cursor");

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("no-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[200]">
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-violet-strong"
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 h-8 w-8 rounded-full border border-violet/70 opacity-40 transition-[transform,opacity] duration-150 ease-out"
      />
    </div>
  );
}
