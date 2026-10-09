import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/ui/reveal";
import { PROFILE } from "@/lib/site";

export function Profile() {
  return (
    <PageShell
      eyebrow="Profile"
      title={PROFILE.name}
      intro={`${PROFILE.role} · ${PROFILE.org} · ${PROFILE.city}`}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-5 text-[17px] leading-relaxed text-ink-soft lg:col-span-7">
          {PROFILE.intro.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>

        <aside className="lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="flex items-end overflow-hidden rounded-2xl border border-line bg-brand-soft">
              <img
                src="/niel.webp"
                alt="Niel Patrick Ladica in his graduation toga"
                width={900}
                height={940}
                loading="lazy"
                className="block w-full"
              />
            </div>
          </Reveal>
        </aside>
      </div>
    </PageShell>
  );
}
