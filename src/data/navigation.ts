import { content } from "@/data/content";
export const navigation = [
  { label: content.nav.work, href: "/#work" },
  { label: content.nav.about, href: "/#about" },
  { label: content.nav.expertise, href: "/#expertise" },
  { label: content.nav.contact, href: "/#contact" },
] as const;
