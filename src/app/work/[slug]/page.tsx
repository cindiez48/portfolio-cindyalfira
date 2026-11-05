import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeIcon, ExternalIcon } from "@/components/Icons";
import { getProject, projects } from "@/data/projects";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const sections = [
    { title: "Ringkasan", body: project.overview },
    { title: "Tantangan", body: project.challenge },
    { title: "Solusi", body: project.solution },
    { title: "Hasil", body: project.outcome },
  ];

  return (
    <article className="mx-auto w-full max-w-3xl px-6 pb-20 pt-28 sm:pt-32">
      <Link
        href="/work"
        className="focus-ring rounded-md text-sm text-muted transition-colors hover:text-foreground"
      >
        Kembali ke proyek
      </Link>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-muted text-pretty">{project.summary}</p>

      <div className="relative mt-10 aspect-video overflow-hidden rounded-3xl border border-border bg-surface">
        <Image
          src={project.images[0]}
          alt={`Tampilan ${project.title}`}
          fill
          priority
          sizes="(min-width: 768px) 48rem, 100vw"
          className="object-cover"
        />
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-surface/60 p-5 text-sm">
        <div>
          <dt className="text-subtle">Peran</dt>
          <dd className="mt-1">{project.role}</dd>
        </div>
        <div>
          <dt className="text-subtle">Konteks</dt>
          <dd className="mt-1">{project.context}</dd>
        </div>
        <div className="col-span-2">
          <dt className="text-subtle">Teknologi</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-sky-100 px-4 py-1.5 text-sm text-sky-700 transition-transform duration-200 motion-safe:hover:-translate-y-1 motion-safe:active:scale-95 dark:bg-sky-400/15 dark:text-sky-300"
              >
                {tag}
              </span>
            ))}
          </dd>
        </div>
      </dl>

      {(project.repoUrl || project.demoUrl) && (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex h-9 items-center gap-2 rounded-full border border-border px-4 text-sm transition-colors hover:bg-hover"
            >
              <CodeIcon width={16} height={16} />
              Lihat Kode
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex h-9 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              <ExternalIcon width={16} height={16} />
              {project.demoLabel ?? "Demo Live"}
            </a>
          )}
        </div>
      )}

      <div className="mt-14 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
            <p className="mt-3 leading-7 text-muted text-pretty">{section.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
