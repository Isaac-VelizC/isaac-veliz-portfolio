import { content } from "@/data/content";
import Link from "next/link";
import { Container } from "@/components/ui/container";
export default function NotFound() {
  return (
    <Container className="py-40">
      <p className="eyebrow text-primary">
        {content.projectDetail.notFoundLabel}
      </p>
      <h1 className="editorial mt-5 text-[clamp(3.5rem,9vw,4.5rem)]">
        {content.projectDetail.notFoundTitle}
      </h1>
      <p className="mt-7 text-muted">
        {content.projectDetail.notFoundDescription}
      </p>
      <Link
        href="/"
        className="mt-8 inline-block border-b border-primary pb-2 text-primary"
      >
        {content.actions.backHome}
      </Link>
    </Container>
  );
}
