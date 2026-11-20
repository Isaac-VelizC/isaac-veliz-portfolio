import { content } from "@/data/content";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";
import { navigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <nav aria-label="Navegación del pie" className="flex flex-wrap gap-5">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <span>{content.footer.closing}</span>
      </Container>
    </footer>
  );
}
