import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { LabDirectory } from "@/components/lab/LabDirectory";

export const metadata: Metadata = {
  title: "lab — lovevsick",
  description: "Experimental modules under construction.",
};

export default function LabPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-dim">
          lab/
        </p>
        <h1 className="mt-3 font-mono text-3xl text-bone sm:text-4xl">
          the lab
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
          A placeholder for future tools, API endpoints, and documentation.
          Nothing live yet — the structure is just waiting to be filled in.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <LabDirectory />
      </Reveal>
    </section>
  );
}
