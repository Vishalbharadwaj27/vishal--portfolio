import { ExternalLink, Github } from "lucide-react";
import type { Project } from "./projectsData";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <article
      className="group flex flex-col rounded-xl border border-project-border bg-project-card overflow-hidden transition-all duration-300 hover:border-project-hover-border hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.15)]"
      style={{ animationDelay: `${index * 100}ms` }}
      data-testid={`project-card-${project.id}`}
      vocab="https://schema.org/"
      typeof="SoftwareApplication"
    >
      {/* Top — Image (fixed height for consistent sizing) */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title} project`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          property="image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-project-card/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span 
            className="rounded-full bg-primary/95 text-primary-foreground px-2.5 py-1 text-xs font-semibold shadow-md backdrop-blur-sm"
            aria-label={`Project category: ${project.category}`}
          >
            {project.category}
          </span>
        </div>

        {/* Deployment Status */}
        <div className="absolute top-3 right-3 z-10">
          {project.liveDemo ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 text-white px-2.5 py-1 text-xs font-semibold shadow-md backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Live Demo
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary/90 text-muted-foreground px-2.5 py-1 text-xs font-semibold shadow-md backdrop-blur-sm border border-border">
              Completed
            </span>
          )}
        </div>
      </div>

      {/* Bottom 60% — Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Title & Role */}
        <div>
          <h3 className="text-lg font-bold text-foreground" property="name">{project.title}</h3>
          <p className="text-xs font-medium text-primary mt-0.5">{project.role}</p>
        </div>

        {/* Problem & Solution */}
        <div className="space-y-1.5 text-sm">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground/80">Problem: </span>
            {project.problem}
          </p>
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground/80">Solution: </span>
            {project.solution}
          </p>
        </div>

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="text-xs text-muted-foreground space-y-1">
            <p className="font-semibold text-foreground/70 text-[11px] uppercase tracking-wider">Key Features</p>
            <div className="flex flex-wrap gap-1.5">
              {project.keyFeatures.map((feat) => (
                <span 
                  key={feat} 
                  className="inline-flex items-center gap-1 text-foreground/90 bg-secondary/50 border border-border/40 px-2 py-0.5 rounded text-[11px]"
                >
                  ✓ {feat}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-project-tag-bg px-2.5 py-0.5 text-xs font-medium text-project-tag-text"
              property="softwareRequirements"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Impact */}
        <div className="rounded-lg bg-project-impact-bg px-3 py-2">
          <p className="text-xs font-medium text-project-impact-text">
            📈 {project.impact}
          </p>
        </div>

        {/* Quick Test */}
        <div className="text-xs text-muted-foreground space-y-1">
          <p className="font-semibold text-foreground/70 text-[11px] uppercase tracking-wider">Quick Test</p>
          <ul className="list-disc list-inside space-y-0.5">
            {project.quickTest.map((test, i) => (
              <li key={i}>{test}</li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="mt-auto flex gap-2 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            aria-label={`View code for ${project.title} on GitHub`}
            data-testid={`github-link-${project.id}`}
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
          
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-xs font-semibold transition-all hover:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              aria-label={`View live demo of ${project.title}`}
              data-testid={`live-demo-link-${project.id}`}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
