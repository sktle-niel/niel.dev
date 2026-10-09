import { useMemo, type ReactNode } from "react";
import { CONTACT, PROFILE, PROJECTS, SKILL_CHIPS } from "@/lib/site";
import { useVisits } from "@/lib/use-visits";
import { LEVELS, buildGrid, level } from "@/lib/heatmap";

// Each landing card shows a glimpse of its page, so the deck reads as content
// rather than as five buttons. The deck maps card ids to these.

function CardTitle({ children, sub }: { children: ReactNode; sub?: string }) {
  return (
    <div>
      <h3 className="font-display text-2xl leading-none lg:text-xl xl:text-2xl">
        {children}
      </h3>
      {sub && <p className="mt-1.5 text-[12px] leading-snug opacity-70">{sub}</p>}
    </div>
  );
}

export function ProfilePreview() {
  return (
    <div className="flex items-end gap-3">
      {/* Notion-style block: lime faces, ink outline, serif initial. */}
      <svg aria-hidden viewBox="0 0 48 48" className="size-10 shrink-0">
        <g
          transform="rotate(-2 24 24)"
          stroke="var(--color-ink)"
          strokeWidth="2.6"
          strokeLinejoin="round"
        >
          <path d="M10.2 14.6 L15.6 5.8 L43 4.8 L39.8 12.9 Z" fill="var(--color-brand)" />
          <rect x="9.5" y="13" width="30.5" height="29" rx="4.5" fill="var(--color-brand)" />
        </g>
        <text
          x="25.2"
          y="35.8"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight="700"
          fontSize="21"
          fill="var(--color-ink)"
          transform="rotate(-2 24 24)"
        >
          {PROFILE.firstName[0]}
        </text>
      </svg>
      <div className="min-w-0">
        <h3 className="truncate font-display text-2xl leading-none lg:text-xl xl:text-2xl">
          {PROFILE.name}
        </h3>
        <p className="mt-1.5 truncate text-[12px] leading-snug opacity-70">
          {PROFILE.role} · {PROFILE.org}
        </p>
      </div>
    </div>
  );
}

export function ProjectsPreview() {
  return (
    <div>
      <div className="mb-3 grid grid-cols-4 gap-1.5">
        {PROJECTS.map((p) => (
          <img
            key={p.slug}
            src={p.image}
            alt=""
            loading="lazy"
            className="aspect-[16/10] w-full rounded-md border border-line object-cover object-top"
          />
        ))}
      </div>
      <CardTitle sub={`${PROJECTS.length} live sites and systems`}>Projects</CardTitle>
    </div>
  );
}

export function SkillsPreview() {
  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {SKILL_CHIPS.map((s) => (
          <span
            key={s}
            className="rounded-md border border-brand-ink/15 bg-surface/70 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-brand-ink"
          >
            {s}
          </span>
        ))}
      </div>
      <CardTitle sub="The stack I build with">Skills</CardTitle>
    </div>
  );
}

const PREVIEW_WEEKS = 20; // ~five months of columns fits the smallest card

export function ActivityPreview() {
  const data = useVisits();
  const { weeks } = useMemo(
    () => buildGrid(data?.days ?? {}, PREVIEW_WEEKS),
    [data]
  );
  const max = data?.max ?? 0;
  const total = data?.total ?? 0;
  return (
    <div>
      <div className="mb-3 flex gap-[2px]" aria-hidden>
        {weeks.map((col, wi) => (
          <div key={wi} className="flex flex-col gap-[2px]">
            {col.map((cell) => (
              <span
                key={cell.key}
                className="size-[7px] rounded-[2px]"
                style={{
                  backgroundColor: cell.future
                    ? "transparent"
                    : LEVELS[level(cell.count, max)],
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <CardTitle
        sub={`${total.toLocaleString("en-PH")} ${total === 1 ? "visitor" : "visitors"} in the last year`}
      >
        Activity
      </CardTitle>
    </div>
  );
}

export function ContactPreview() {
  return (
    <div>
      <p className="mb-3 truncate font-mono text-[11px] text-ink/70">{CONTACT.email}</p>
      <CardTitle sub="Let's build something together">Contact</CardTitle>
    </div>
  );
}
