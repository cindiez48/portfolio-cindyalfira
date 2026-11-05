import type { Metadata } from "next";
import Avatar from "@/components/Avatar";
import { GlobeIcon } from "@/components/Icons";
import SocialLinks from "@/components/SocialLinks";
import TableOfContents from "@/components/TableOfContents";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Tentang",
  description: `Kenali ${site.name}, ${site.role} dari ${site.location}.`,
};

const tocItems = [
  { id: "pengantar", label: "Pengantar" },
  { id: "pengalaman-kerja", label: site.about.work.title },
  { id: "pendidikan", label: site.about.studies.title },
  { id: "keahlian", label: site.about.skills.title },
];

function ChipGroup({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div className="mt-10">
      <h3 className="text-lg font-semibold text-brand">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-sky-100 px-4 py-1.5 text-sm text-sky-700 transition-transform duration-200 motion-safe:hover:-translate-y-1 motion-safe:active:scale-95 dark:bg-sky-400/15 dark:text-sky-300"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutPage() {
  const { intro, academic, interests, reflections, work, studies, skills } = site.about;

  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-20 pt-28 sm:pt-32">
      <TableOfContents items={tocItems} />

      <div className="grid gap-10 lg:grid-cols-[14rem_1fr] lg:gap-14">
        <aside className="flex flex-col items-center gap-4 lg:sticky lg:top-28 lg:self-start">
          <Avatar size={176} className="border border-border" />
          <p className="inline-flex items-center gap-2 text-sm">
            <GlobeIcon width={16} height={16} className="text-brand" />
            {site.location}
          </p>
          <ul className="flex flex-wrap justify-center gap-2">
            {site.languages.map((language) => (
              <li
                key={language}
                className="rounded-md border border-border px-2.5 py-0.5 text-xs text-muted transition-transform duration-200 motion-safe:hover:-translate-y-1 motion-safe:active:scale-95"
              >
                {language}
              </li>
            ))}
          </ul>
        </aside>

        <div className="min-w-0">
          <section id="pengantar" className="scroll-mt-28">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              {site.name}
            </h1>
            <p className="mt-2 text-xl font-light text-muted sm:text-2xl">{site.role}</p>

            <div className="mt-5">
              <SocialLinks variant="chips" />
            </div>

            <div className="mt-8 max-w-xl space-y-5 leading-relaxed text-pretty">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ChipGroup title={academic.title} tags={academic.tags} />
            <ChipGroup title={interests.title} tags={interests.tags} />
            <ChipGroup title={reflections.title} tags={reflections.tags} />
            <p className="mt-4 max-w-xl italic leading-relaxed text-muted text-pretty">
              {reflections.note}
            </p>
          </section>

          <section id="pengalaman-kerja" className="mt-24 scroll-mt-28">
            <h2 className="text-4xl font-semibold tracking-tight">{work.title}</h2>
            <div className="mt-8 space-y-12">
              {work.items.map((item) => (
                <div key={item.company}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="text-xl font-semibold tracking-tight">{item.company}</h3>
                    <p className="text-sm text-muted">{item.timeframe}</p>
                  </div>
                  <p className="mt-1 text-sm text-brand">{item.role}</p>
                  <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-6 marker:text-subtle">
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="pendidikan" className="mt-24 scroll-mt-28">
            <h2 className="text-4xl font-semibold tracking-tight">{studies.title}</h2>
            <div className="mt-8 space-y-6">
              {studies.items.map((item) => (
                <div key={item.name}>
                  <h3 className="text-xl font-semibold tracking-tight">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="keahlian" className="mt-24 scroll-mt-28">
            <h2 className="text-4xl font-semibold tracking-tight">{skills.title}</h2>
            <div className="mt-8 space-y-10">
              {skills.items.map((skill) => (
                <div key={skill.title}>
                  <h3 className="text-xl font-semibold tracking-tight">{skill.title}</h3>
                  <p className="mt-1 text-sm text-muted">{skill.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-sky-100 px-4 py-1.5 text-sm text-sky-700 transition-transform duration-200 motion-safe:hover:-translate-y-1 motion-safe:active:scale-95 dark:bg-sky-400/15 dark:text-sky-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
