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
      <div className="max-w-2xl space-y-5 text-[17px] leading-relaxed text-ink-soft">
        {PROFILE.intro.map((p, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <p>{p}</p>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
