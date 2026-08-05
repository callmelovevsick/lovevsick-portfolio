import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group card-scan relative block overflow-hidden rounded-xl border border-border bg-surface/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_0_0_1px_var(--border-strong),0_20px_40px_-20px_var(--violet-glow)]"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-2 font-mono text-sm text-bone">
          <Github
            size={15}
            className="text-dim transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-violet"
          />
          <span>{project.name}</span>
        </div>
        <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted">
          {project.type}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-surface2/70 px-2 py-1 font-mono text-[10px] text-dim"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-1 font-mono text-xs text-violet opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        View repository
        <ArrowUpRight
          size={13}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </a>
  );
}
