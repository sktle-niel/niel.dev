import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import type { CardDef } from "@/lib/cards";
import { cn } from "@/lib/utils";

const TONES: Record<CardDef["tone"], string> = {
  ink: "border-ink bg-ink text-canvas",
  surface: "border-line bg-surface text-ink",
  soft: "border-line bg-brand-soft text-ink",
  canvas: "border-line bg-canvas text-ink",
  brand: "border-brand bg-brand text-ink",
};

/**
 * One card of the landing deck — a doorway to a page.
 *
 * Three layers, each owning one kind of motion so they never fight:
 *  1. the outer motion.div: entry animation + stacking (overlap margins, z-index)
 *  2. the "slot": resting tilt + cascade offset; straightens on hover
 *  3. the link: the slow float (CSS `transform`) + the hover lift (CSS `translate`/`scale`)
 */
export function Card({
  card,
  position,
  children,
}: {
  card: CardDef;
  position: number;
  children: ReactNode;
}) {
  const geometry = {
    "--rot": `${card.rotate}deg`,
    "--mx": `${card.mobileX}%`,
    "--dy": `${card.desktopY}px`,
  } as CSSProperties;
  const timing = {
    "--float-delay": `${card.floatDelay}s`,
    "--float-duration": `${card.floatDuration}s`,
  } as CSSProperties;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 + position * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative w-full max-w-sm hover:z-20 focus-within:z-20 lg:w-auto lg:max-w-none",
        position > 0 && "-mt-8 lg:mt-0 lg:-ml-16 2xl:-ml-20"
      )}
    >
      <div
        style={geometry}
        className="translate-x-[var(--mx)] rotate-[var(--rot)] transition-[rotate] duration-300 ease-out hover:rotate-0 focus-within:rotate-0 lg:translate-x-0 lg:translate-y-[var(--dy)]"
      >
        <Link
          to={card.to}
          aria-label={`${card.title} — ${card.blurb}`}
          style={timing}
          className={cn(
            "float group block aspect-[16/10] w-full rounded-2xl border p-4 outline-none sm:p-5",
            "shadow-[0_18px_40px_-24px_rgba(24,24,27,0.35)]",
            "transition-[translate,scale,box-shadow] duration-300 ease-out",
            "hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_40px_80px_-32px_rgba(24,24,27,0.45)]",
            "focus-visible:-translate-y-4 focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
            "active:scale-[0.99]",
            "lg:w-60 xl:w-72 2xl:w-80",
            TONES[card.tone]
          )}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] opacity-70">
              <span>{card.title}</span>
              <Arrow />
            </div>
            <div className="mt-auto">{children}</div>
          </div>
        </Link>
      </div>
    </motion.div>
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
