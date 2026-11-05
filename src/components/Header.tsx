"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import Clock from "./Clock";
import { GridIcon, HomeIcon, UserIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/about", label: "Tentang", Icon: UserIcon },
  { href: "/work", label: "Proyek", Icon: GridIcon },
];

function itemClass(active: boolean) {
  return `focus-ring inline-flex h-9 items-center gap-2 rounded-full px-3 text-sm transition-colors ${
    active ? "bg-hover text-foreground" : "text-muted hover:text-foreground"
  }`;
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="relative flex items-center justify-between px-5 pt-4 sm:px-6">
        <p className="pointer-events-auto hidden text-sm md:block">
          {site.timeZone}
        </p>

        <nav
          aria-label="Navigasi utama"
          className="pointer-events-auto mx-auto flex items-center gap-1 rounded-full border border-border bg-background/80 p-1 shadow-sm backdrop-blur-md md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          <Link
            href="/"
            aria-label="Beranda"
            aria-current={pathname === "/" ? "page" : undefined}
            className={itemClass(pathname === "/")}
          >
            <HomeIcon width={16} height={16} />
          </Link>

          <span className="mx-0.5 h-5 w-px bg-border" aria-hidden="true" />

          {links.map(({ href, label, Icon }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={itemClass(active)}
              >
                <Icon width={16} height={16} />
                <span>{label}</span>
              </Link>
            );
          })}

          <span className="mx-0.5 h-5 w-px bg-border" aria-hidden="true" />

          <ThemeToggle />
        </nav>

        <Clock className="pointer-events-auto hidden md:block" />
      </div>
    </header>
  );
}
