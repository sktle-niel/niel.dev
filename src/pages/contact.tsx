import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/ui/reveal";
import { CONTACT } from "@/lib/site";

export function Contact() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Let's build something great together."
      intro={`Tell me about your website, system, app, or capstone project. ${CONTACT.availability}`}
    >
      <div className="grid gap-5 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <a
            href={`mailto:${CONTACT.email}`}
            className="ambient group flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-7 transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(24,24,27,0.25)] md:p-10"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Email
            </span>
            <span className="mt-10 block break-all font-display text-3xl text-ink md:text-5xl">
              {CONTACT.email}
            </span>
            <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
              Write to me
              <span className="transition-transform group-hover:translate-x-0.5">
                &rarr;
              </span>
            </span>
          </a>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={0.05}>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-line bg-surface p-7 transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(24,24,27,0.25)]"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                GitHub
              </span>
              <span className="mt-4 block text-lg font-bold tracking-tight text-ink">
                {CONTACT.githubLabel}
              </span>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                See the code
                <span className="transition-transform group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-brand-soft p-7">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-ink">
                Based in
              </span>
              <span className="mt-4 block text-lg font-bold tracking-tight text-ink">
                {CONTACT.location}
              </span>
              <span className="mt-1 block text-sm text-muted">
                Working with clients anywhere.
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </PageShell>
  );
}
