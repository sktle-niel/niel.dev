import { cn } from "@/lib/utils";

/**
 * niel.dev wordmark for the light theme: charcoal letters with the
 * ".dev" TLD set in a small lime tile so the brand pops while staying
 * legible on white.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-1.5 font-sans text-lg font-extrabold tracking-tight text-ink",
        className
      )}
    >
      <span className="font-mono text-[0.7em] font-medium text-muted" aria-hidden>
        {"</>"}
      </span>
      <span className="inline-flex items-baseline">
        niel
        <span className="ml-[0.12em] inline-flex h-[0.95em] translate-y-[0.1em] items-center rounded-[3px] bg-brand px-[0.2em] text-ink">
          .dev
        </span>
      </span>
    </span>
  );
}
