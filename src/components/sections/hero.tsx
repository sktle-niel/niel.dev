import { Reveal } from "@/components/ui/reveal";
import { SectionTag } from "@/components/ui/section-tag";
import { Deck } from "@/components/deck/deck";
import { PROFILE } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="ambient relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 md:px-8 md:pt-24 lg:pb-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionTag className="justify-center">Portfolio</SectionTag>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display mt-6 text-5xl text-ink md:text-7xl">
              Hi, I&apos;m{" "}
              <span className="relative inline-block">
                <span className="relative z-10">{PROFILE.firstName}</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-[0.12em] z-0 h-[0.28em] bg-brand"
                />
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted">
              {PROFILE.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Pick a card to explore
            </p>
          </Reveal>
        </div>

        <Deck />
      </div>
    </section>
  );
}
