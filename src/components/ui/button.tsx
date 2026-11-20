import Link from "next/link";
import type { ReactNode } from "react";
export function Button({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) { return <Link href={href} className={`inline-flex min-h-12 items-center justify-center rounded-sm border px-6 text-sm font-semibold transition-colors ${secondary ? "border-line text-ink hover:bg-surface" : "border-primary bg-primary text-white hover:bg-[var(--primary-hover)]"}`}>{children}</Link>; }
