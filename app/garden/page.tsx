import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { GardenEmptyState } from "@/components/garden/GardenEmptyState";

export const metadata: Metadata = {
  title: "garden — lovevsick",
  description:
    "Notes, experiments and technical rabbit holes — planted here eventually.",
};

export default function GardenPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-dim">
          garden/
        </p>
        <h1 className="mt-3 font-mono text-3xl text-bone sm:text-4xl">
          digital garden
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
          Notes, experiments, documentation, and random technical discoveries
          will live here.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <GardenEmptyState />
      </Reveal>
    </section>
  );
}
