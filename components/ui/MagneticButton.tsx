"use client";

import { useRef } from "react";
import type { ReactNode, MouseEvent as ReactMouseEvent } from "react";
import { cn } from "@/lib/utils";

export function MagneticButton({
  children,
  className,
  strength = 14,
  ...props
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
} & React.ComponentPropsWithoutRef<"a">) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMove(e: ReactMouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${(x / rect.width) * strength}px, ${
      (y / rect.height) * strength
    }px)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }

  return (
    <a
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("transition-transform duration-200 ease-out", className)}
      {...props}
    >
      {children}
    </a>
  );
}
