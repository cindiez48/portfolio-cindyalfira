import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Proyek",
  description: `Kumpulan proyek yang dikerjakan ${site.name} selama berkuliah di Universitas Airlangga.`,
};

export default function WorkPage() {
  const [featured, ...others] = projects;

  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-20 pt-28 sm:pt-32">
      <h1 className="text-center text-2xl font-semibold tracking-tight text-balance">
        {site.work.title}
      </h1>

      {featured && (
        <section className="mt-12">
          <ProjectCard project={featured} featured />
        </section>
      )}

      {others.length > 0 && (
        <section className="mt-20 grid gap-10 sm:grid-cols-2">
          {others.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      )}
    </div>
  );
}
