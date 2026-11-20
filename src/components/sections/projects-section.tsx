import { content } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";
export function ProjectsSection() {
  return (
    <section id="work" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="01"
          label={content.sections.projects.label}
          title={content.sections.projects.title}
          description={content.sections.projects.description}
        />
        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
