import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/ui/reveal";
import { BUILDS, SKILLS } from "@/lib/site";

export function Skills() {
  return (
    <PageShell
      eyebrow="Skills"
      title="The stack I build with."
      intro="Front end to database to deployment — the tools I reach for, and the kinds of things I build with them."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {SKILLS.map((group, i) => (
          <Reveal key={group.title} delay={(i % 2) * 0.06}>
            <section className="h-full rounded-2xl border border-line bg-surface p-7">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {group.title}
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-canvas px-3 py-1.5 text-sm font-medium text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>

      <section className="mt-20">
        <Reveal>
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            What I build
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {BUILDS.map((b, i) => (
            <Reveal key={b} delay={(i % 3) * 0.05}>
              <div className="flex h-full items-center gap-4 bg-surface px-6 py-5">
                <span className="font-mono text-xs text-muted/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] font-semibold tracking-tight text-ink">
                  {b}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
