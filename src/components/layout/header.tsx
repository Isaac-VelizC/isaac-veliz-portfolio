import { content } from "@/data/content";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-md">
      <Container className="relative flex h-20 items-center justify-between gap-5">
        <Link href="/" className="text-base font-extrabold tracking-[-.06em]">
          {profile.shortName}
        </Link>
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {profile.cv && (
            <a
              href={profile.cv}
              download
              className="hidden border-b border-primary pb-1 text-xs font-semibold text-primary sm:block"
            >
              {content.actions.downloadCv}
            </a>
          )}
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
