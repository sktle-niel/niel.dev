import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/ui/reveal";
import { SKILLS } from "@/lib/site";

export function Skills() {
  return (
    <PageShell
      eyebrow="Skills"
      title="The stack I build with."
      intro="Front end to database to deployment — the tools I reach for."
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
    </PageShell>
  );
}
