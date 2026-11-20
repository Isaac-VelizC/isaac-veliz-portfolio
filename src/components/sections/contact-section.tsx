import { content } from "@/data/content";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";
export function ContactSection() {
  return (
    <section id="contact" className="bg-surface py-24 sm:py-32">
      <Container>
        <p className="eyebrow mb-10 text-primary">
          04 / {content.sections.contact.label}
        </p>
        <h2 className="editorial max-w-4xl text-[clamp(3.3rem,7.5vw,8rem)]">
          {content.sections.contact.title}{" "}
          <em className="text-primary">{content.sections.contact.emphasis}</em>
        </h2>
        <p className="mt-8 max-w-xl leading-8 text-muted">
          {content.sections.contact.description}
        </p>
        <a
          className="mt-10 inline-flex items-center gap-3 break-all border-b border-primary pb-2 text-lg font-semibold text-primary sm:text-2xl"
          href={`mailto:${profile.email}`}
        >
          {profile.email}
          <ArrowUpRight aria-hidden="true" />
        </a>
        <div className="mt-10 flex flex-wrap gap-7 text-sm font-semibold">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            LinkedIn ↗
          </a>
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              GitHub ↗
            </a>
          )}
          {profile.studio && (
            <a
              href={profile.studio}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              aisak.labs ↗
            </a>
          )}
        </div>
      </Container>
    </section>
  );
}
