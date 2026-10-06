import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/ui/reveal";
import { SectionTag } from "@/components/ui/section-tag";

/** Shared frame for the card pages: header, back link, title block, footer. */
export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header />
      <main className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          <span aria-hidden>&larr;</span> All cards
        </Link>

        <div className="mt-10 max-w-2xl">
          <Reveal>
            <SectionTag>{eyebrow}</SectionTag>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display mt-5 text-4xl text-ink md:text-6xl">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>
            </Reveal>
          )}
        </div>

        <div className="mt-12 md:mt-16">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
