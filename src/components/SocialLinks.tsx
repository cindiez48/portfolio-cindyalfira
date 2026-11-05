import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const items = [
  { label: "GitHub", href: site.socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon },
  { label: "Email", href: `mailto:${site.email}`, Icon: MailIcon },
];

type SocialLinksProps = {
  variant: "icons" | "chips";
};

export default function SocialLinks({ variant }: SocialLinksProps) {
  return (
    <ul className={`flex flex-wrap items-center ${variant === "icons" ? "gap-1" : "gap-2"}`}>
      {items.map(({ label, href, Icon }) => {
        const external = href.startsWith("http");
        return (
          <li key={label}>
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={variant === "icons" ? label : undefined}
              className={
                variant === "icons"
                  ? "focus-ring group inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-hover hover:text-foreground"
                  : "focus-ring group inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-sm transition-colors hover:bg-hover"
              }
            >
              <Icon
                width={variant === "icons" ? 18 : 14}
                height={variant === "icons" ? 18 : 14}
                className="transition-transform duration-200 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-active:scale-90"
              />
              {variant === "chips" && label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
