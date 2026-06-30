import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { ProjectVisual } from "./ProjectVisual";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <article className="project-card">
      <div className="project-topline">
        <span className="project-icon" aria-hidden="true">
          <Icon size={22} />
        </span>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name} on GitHub`}
          className="icon-link"
        >
          <ExternalLink size={18} />
        </a>
      </div>

      <ProjectVisual visual={project.visual} />

      <div className="project-body">
        <p className="project-meta">{project.meta}</p>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>

      <div className="metric-row" aria-label={`${project.name} metrics`}>
        {project.metrics.map((metric) => (
          <span key={metric}>{metric}</span>
        ))}
      </div>

      <div className="tag-row" aria-label={`${project.name} stack`}>
        {project.stack.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
