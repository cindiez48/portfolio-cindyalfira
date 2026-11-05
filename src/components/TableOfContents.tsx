"use client";

import { useEffect, useState } from "react";

type TocItem = { id: string; label: string };

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Daftar isi"
      className="fixed left-6 top-1/2 z-10 hidden -translate-y-1/2 2xl:block"
    >
      <ul className="space-y-3">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`focus-ring flex items-center gap-3 text-sm transition-colors ${
                  isActive ? "text-foreground" : "text-subtle hover:text-foreground"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-px transition-all ${
                    isActive ? "w-6 bg-foreground" : "w-3 bg-border"
                  }`}
                />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
