import { site } from "@/data/site";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-10 text-sm text-muted">
      <p>
        &copy; {site.copyrightYear} <span className="text-subtle">|</span>{" "}
        <span className="text-foreground">{site.name}</span>
      </p>
      <SocialLinks variant="icons" />
    </footer>
  );
}
