import { content } from "@/data/content";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";
import { getProject } from "@/lib/projects";
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: content.projectDetail.missingProject };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/projects/${slug}`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const others = projects.filter((p) => p.slug !== slug);
  return (
    <article>
      <Container className="pb-24 pt-14 sm:pt-24">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          <ArrowLeft size={16} aria-hidden="true" />{" "}
          {content.actions.backToProjects}
        </Link>
        <p className="eyebrow mt-20 text-primary">
          {content.projectDetail.caseStudy} / {project.category}
        </p>
        <h1 className="editorial mt-5 text-[clamp(4.5rem,10vw,9rem)]">
          {project.title}
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-9 text-muted">
          {project.summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="border border-line px-3 py-2 text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="relative mt-16 aspect-video overflow-hidden bg-surface">
          <Image
            src={project.image}
            alt={`${content.projectDetail.placeholderAlt}: ${project.title}; sustituir por captura real`}
            fill
            priority
            sizes="(max-width: 1240px) 100vw, 1100px"
            className="object-cover"
          />
        </div>
        <p className="mt-3 text-xs text-muted">
          {content.projectDetail.placeholder}
        </p>
        <div className="mt-20 grid gap-12 border-t border-line pt-12 md:grid-cols-[1fr_2fr]">
          <h2 className="eyebrow text-primary">
            01 / {content.projectDetail.overview}
          </h2>
          <div className="space-y-10">
            <div>
              <h3 className="mb-3 text-xl font-semibold">
                {content.projectDetail.context}
              </h3>
              <p className="leading-8 text-muted">{project.context}</p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold">
                {content.projectDetail.problem}
              </h3>
              <p className="leading-8 text-muted">{project.problem}</p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold">
                {content.projectDetail.solution}
              </h3>
              <p className="leading-8 text-muted">{project.solution}</p>
            </div>
          </div>
        </div>
        <div className="mt-16 grid gap-12 border-t border-line pt-12 md:grid-cols-[1fr_2fr]">
          <h2 className="eyebrow text-primary">
            02 / {content.projectDetail.implementation}
          </h2>
          <div>
            <h3 className="mb-5 text-xl font-semibold">
              {content.projectDetail.features}
            </h3>
            <ul className="space-y-4">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="border-b border-line pb-3 text-muted"
                >
                  {feature}
                </li>
              ))}
            </ul>
            {project.decisions && (
              <>
                <h3 className="mb-5 mt-12 text-xl font-semibold">
                  {content.projectDetail.decisions}
                </h3>
                <ul className="space-y-4">
                  {project.decisions.map((decision) => (
                    <li
                      key={decision}
                      className="border-b border-line pb-3 text-muted"
                    >
                      {decision}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <div className="mt-10 flex gap-5">
              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  {content.actions.repository} ↗
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  {content.actions.demo} ↗
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="mt-24 border-t border-line pt-12">
          <h2 className="editorial mb-8 text-5xl">
            {content.actions.moreProjects}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/projects/${other.slug}`}
                className="group flex items-center justify-between border border-line p-6 transition-colors hover:bg-surface"
              >
                <span className="text-xl font-semibold">{other.title}</span>
                <ArrowUpRight className="text-primary" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}
