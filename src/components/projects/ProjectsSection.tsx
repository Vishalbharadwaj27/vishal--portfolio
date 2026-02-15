import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="w-full px-4 py-20 sm:px-6 lg:px-8"
      aria-label="Projects"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            A selection of projects showcasing full-stack development, AI integration, and clean architecture.
          </p>
        </div>

        {/* Pyramid Layout — Desktop */}
        <div className="hidden lg:flex flex-col items-center gap-8">
          {/* Row 1: 1 centered card */}
          <div className="w-full max-w-md">
            <ProjectCard project={projects[0]} index={0} />
          </div>

          {/* Row 2: 2 cards */}
          <div className="grid grid-cols-2 gap-8 w-full max-w-3xl">
            <ProjectCard project={projects[1]} index={1} />
            <ProjectCard project={projects[2]} index={2} />
          </div>

          {/* Row 3: 2 cards */}
          <div className="grid grid-cols-2 gap-8 w-full max-w-3xl">
            <ProjectCard project={projects[3]} index={3} />
            <ProjectCard project={projects[4]} index={4} />
          </div>
        </div>

        {/* Tablet: 2-column grid */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Mobile: 1-column stack */}
        <div className="flex sm:hidden flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
