"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";
import Avatar from "./Avatar";
import { ChevronRightIcon } from "./Icons";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = project.images.length;
  const href = `/work/${project.slug}`;

  useEffect(() => {
    if (count < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((current) => (current + 1) % count), 6000);
    return () => clearInterval(id);
  }, [count, paused]);

  return (
    <article
      className="flex flex-col gap-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-video overflow-hidden rounded-3xl border border-border bg-surface">
        {project.images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`Tampilan ${project.title} ${i + 1}`}
            fill
            sizes={featured ? "(min-width: 1024px) 64rem, 100vw" : "(min-width: 768px) 24rem, 100vw"}
            priority={featured && i === 0}
            className={`object-cover transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <Link
          href={href}
          aria-label={`Buka studi kasus ${project.title}`}
          className="focus-ring absolute inset-0 z-10"
        />

        {count > 1 && (
          <button
            type="button"
            onClick={() => setIndex((current) => (current + 1) % count)}
            aria-label="Gambar berikutnya"
            className="focus-ring absolute right-4 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
          >
            <ChevronRightIcon width={18} height={18} />
          </button>
        )}
      </div>

      {count > 1 && (
        <div className="flex gap-2 px-1">
          {project.images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Tampilkan gambar ${i + 1}`}
              aria-current={i === index}
              className="focus-ring group flex-1 py-1.5"
            >
              <span
                className={`block h-0.5 rounded-full transition-colors ${
                  i === index ? "bg-foreground" : "bg-border group-hover:bg-subtle"
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {featured ? (
        <div className="grid gap-4 px-1 md:grid-cols-2 md:gap-10">
          <h2 className="text-2xl font-semibold tracking-tight text-balance">
            <Link href={href} className="focus-ring rounded-sm hover:underline hover:underline-offset-4">
              {project.title}
            </Link>
          </h2>
          <div className="flex flex-col gap-3">
            <Avatar size={32} />
            <p className="text-sm leading-6 text-muted text-pretty">{project.summary}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 px-1">
          <h3 className="text-xl font-semibold tracking-tight text-balance">
            <Link href={href} className="focus-ring rounded-sm hover:underline hover:underline-offset-4">
              {project.title}
            </Link>
          </h3>
          <p className="text-sm leading-6 text-muted text-pretty">{project.summary}</p>
          <ul className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-sky-100 px-4 py-1.5 text-sm text-sky-700 transition-transform duration-200 motion-safe:hover:-translate-y-1 motion-safe:active:scale-95 dark:bg-sky-400/15 dark:text-sky-300"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
