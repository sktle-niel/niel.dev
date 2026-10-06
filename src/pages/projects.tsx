import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/ui/reveal";
import { PROJECTS, type Project } from "@/lib/site";

export function Projects() {
  const featured = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];
  const rest = PROJECTS.filter((p) => p !== featured);

  return (
    <PageShell
      eyebrow="Projects"
      title="Real businesses, live on the web."
      intro="Websites and systems I've built and shipped for real clients. Click any project to visit the live site."
    >
      {/* featured project */}
      <Reveal>
        <a
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group grid overflow-hidden rounded-2xl border border-line bg-surface transition-all hover:shadow-[0_24px_60px_-32px_rgba(24,24,27,0.28)] lg:grid-cols-2"
        >
          <div className="order-2 flex flex-col justify-center p-8 md:p-12 lg:order-1">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-ink">
              <span className="size-1.5 rounded-full bg-brand-ink" />
              Featured · Live
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink">
              {featured.name}
            </h2>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {featured.category}
            </p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
              {featured.description}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
              {featured.domain}
              <Arrow />
            </span>
          </div>
          <div className="order-1 overflow-hidden border-b border-line lg:order-2 lg:border-b-0 lg:border-l">
            <div className="aspect-[16/10] h-full w-full">
              <img
                src={featured.image}
                alt={`${featured.name} website`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </a>
      </Reveal>

      {/* other projects */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full overflow-hidden rounded-2xl border border-line bg-surface transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(24,24,27,0.25)]"
    >
      <div className="aspect-[16/10] overflow-hidden border-b border-line">
        <img
          src={project.image}
          alt={`${project.name} website`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {project.category}
        </span>
        <h3 className="mt-3 text-lg font-bold tracking-tight text-ink">
          {project.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
          {project.domain}
          <Arrow />
        </span>
      </div>
    </a>
  );
}

function Arrow() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden
    >
      <path
        d="M5 11L11 5M11 5H6M11 5V10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
