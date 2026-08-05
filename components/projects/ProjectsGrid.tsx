import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={i * 0.05}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
