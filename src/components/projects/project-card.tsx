import { content } from "@/data/content";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="group grid gap-7 border-t border-line py-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-14">
      
<Link
  href={`/projects/${project.slug}`}
  aria-label={`Ver caso de estudio de ${project.title}`}
  className="group relative flex aspect-16/10 items-center justify-center overflow-hidden bg-[#F5F1FA]"
>
  <div className="relative h-full w-full">
    <Image
      src={project.image}
      alt={`Captura del sistema ${project.title}`}
      fill
      sizes="(max-width: 1024px) 100vw, 55vw"
      quality={90}
      className="object-contain transition-transform duration-500 group-hover:scale-[1.015]"
    />
  </div>
</Link>

      <div className="flex flex-col justify-between py-2">
        <div>
          <p className="eyebrow mb-6 text-primary">
            0{index + 1} / {project.category}
          </p>
          <h3 className="editorial text-6xl sm:text-7xl">{project.title}</h3>
          <p className="mt-6 max-w-md leading-8 text-muted">
            {project.summary}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="border border-line px-3 py-1.5 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-8 inline-flex w-fit items-center gap-2 border-b border-primary pb-2 text-sm font-semibold text-primary"
        >
          {content.actions.viewProject}{" "}
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
