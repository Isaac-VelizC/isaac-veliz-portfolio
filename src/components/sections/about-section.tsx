import { content } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";
export function AboutSection() {
  return (
    <section id="about" className="bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="02"
          label={content.sections.about.label}
          title={content.sections.about.title}
        />
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-primary">
            Potosí, Bolivia
            <br />
            {content.sections.about.eyebrow}
          </p>
          <div>
            <p className="max-w-3xl text-2xl leading-relaxed tracking-tight sm:text-3xl">
              {profile.bio}
            </p>
            <p className="mt-8 max-w-2xl leading-8 text-muted">
              Trabajo con Laravel, React y bases de datos relacionales en
              sistemas empresariales y proyectos independientes, con experiencia
              profesional en entornos institucionales.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
