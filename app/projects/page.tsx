import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "projects — lovevsick",
  description: "Repositories from lovevsick's digital garden.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-dim">
          projects/
        </p>
        <h1 className="mt-3 font-mono text-3xl text-bone sm:text-4xl">
          repositories
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
          Things I&apos;ve built and kept building. No fabricated stats here —
          just the repositories, straight from GitHub.
        </p>
      </Reveal>

      <div className="mt-10">
        <ProjectsGrid />
      </div>
    </section>
  );
}
