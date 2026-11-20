import { content } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";
export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="03"
          label={content.sections.expertise.label}
          title={content.sections.expertise.title}
          description={content.sections.expertise.description}
        />
        <div className="grid gap-x-14 md:grid-cols-2">
          {Object.entries(profile.expertise).map(([category, tools]) => (
            <div key={category} className="border-t border-line py-8">
              <h3 className="mb-5 text-lg font-semibold">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-surface px-3 py-2 text-sm text-muted"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
