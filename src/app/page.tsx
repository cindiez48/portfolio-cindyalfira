import Link from "next/link";
import Avatar from "@/components/Avatar";
import { ChevronRightIcon } from "@/components/Icons";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function HomePage() {
  const [featured, ...others] = projects;

  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-20 pt-32 sm:pt-40">
      <section className="flex flex-col items-center text-center">
        <h1 className="w-[13ch] max-w-full text-5xl font-mono font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl">
          <span className="home-typewriter">{site.home.headline}</span>
        </h1>
        <p className="home-enter home-enter-delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty md:text-xl">
          {site.home.subline}
        </p>
        <Link
          href="/about"
          className="home-enter home-enter-delay-2 focus-ring group mt-10 inline-flex items-center gap-3 rounded-full border border-border bg-background/60 py-1 pl-1 pr-4 text-sm backdrop-blur-sm transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-hover active:scale-[0.98]"
        >
          <Avatar
            size={32}
            className="transition-transform duration-300 group-hover:rotate-6"
          />
          <span>Tentang {site.name}</span>
          <ChevronRightIcon
            width={14}
            height={14}
            className="text-muted transition-transform group-hover:translate-x-1"
          />
        </Link>
      </section>

      {featured && (
        <section className="home-enter home-enter-delay-3 mt-20 sm:mt-28">
          <ProjectCard project={featured} featured />
        </section>
      )}

      {others.length > 0 && (
        <section className="home-enter home-enter-delay-3 mt-24 grid gap-10 border-t border-border pt-16 md:grid-cols-[1fr_2.2fr]">
          <h2 className="text-3xl font-semibold tracking-tight text-balance">
            Proyek lainnya
          </h2>
          <div className="grid gap-10 sm:grid-cols-2">
            {others.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
