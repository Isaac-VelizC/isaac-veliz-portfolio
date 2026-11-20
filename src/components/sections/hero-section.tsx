import { content } from "@/data/content";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
export function HeroSection() {
  return (
    <section className="overflow-hidden">
      <Container className="relative grid min-h-165 items-center gap-12 py-20 lg:grid-cols-[1.4fr_.6fr] lg:py-28">
        <div>
          <p className="eyebrow mb-10 flex items-center gap-3 text-primary">
            <span className="inline-block h-px w-8 bg-primary" />{" "}
            {content.hero.eyebrow}
          </p>
          <h1 className="editorial max-w-4xl text-[clamp(3.9rem,9vw,10.5rem)]">
            {content.hero.title}{" "}
            <em className="text-primary">{content.hero.emphasis}</em>
          </h1>
          <p className="mt-10 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Diseño y desarrollo sistemas empresariales, aplicaciones web y
            soluciones de software que simplifican procesos y resuelven
            problemas reales.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/#work">
              {content.hero.primary}{" "}
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/#contact" secondary>
              {content.hero.secondary}
            </Button>
          </div>
        </div>
        <div className="hidden self-end pb-10 lg:block">
          <div className="ml-auto flex aspect-square max-w-64 flex-col justify-between border border-line bg-surface p-7">
            <span className="eyebrow text-primary">
              {content.hero.practice}
            </span>
            <span className="editorial text-7xl text-primary">
              I<span className="text-ink">/</span>V
            </span>
            <span className="text-xs leading-5 text-muted">
              {content.hero.focus[0]}
              <br />
              {content.hero.focus[1]}
              <br />
              {content.hero.focus[2]}
            </span>
          </div>
          <p className="mt-4 text-right text-xs tracking-widest text-muted">
            01 — 04 / {content.hero.folio}
          </p>
        </div>
      </Container>
    </section>
  );
}
