import ProjectCard, { type ProjectItem } from "@/components/home/project-card";
import SectionHeading from "@/components/home/section-heading";

type ProjectsSectionProps = {
  projects: ProjectItem[];
  viewAllText: string;
};

export default function ProjectsSection({ projects, viewAllText }: ProjectsSectionProps) {
  return (
    <section id="works" className="mt-24 space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <SectionHeading label="#projects" lineClassName="w-32 sm:w-64 flex-none" />
        <button className="text-xs uppercase tracking-[0.2em] text-white/60">
          {viewAllText}
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            delay={index * 0.12}
          />
        ))}
      </div>
    </section>
  );
}
