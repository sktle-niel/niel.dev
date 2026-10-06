import { useEffect, useMemo, useRef, useState } from "react";
import { useVisits } from "@/lib/use-visits";
import {
  DAY_LABELS,
  LEVELS,
  buildGrid,
  level,
  prettyDate,
  type Cell,
} from "@/lib/heatmap";

// A GitHub-style contribution graph, but every square is a website visitor.
// One count per unique visitor per day — the darker a cell, the more people
// stopped by.

const WEEKS = 53; // ~one year of columns

type Tip = { x: number; y: number; text: string };

export function ActivityGraph() {
  const data = useVisits();
  const [tip, setTip] = useState<Tip | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { weeks, months } = useMemo(
    () => buildGrid(data?.days ?? {}, WEEKS),
    [data]
  );
  const max = data?.max ?? 0;
  const total = data?.total ?? 0;

  // Start scrolled all the way to the newest week so today's square is visible
  // right away (the graph overflows to the right on small screens).
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, []);

  const showTip = (e: React.MouseEvent<HTMLSpanElement>, cell: Cell) => {
    const card = cardRef.current;
    if (!card) return;
    const r = e.currentTarget.getBoundingClientRect();
    const c = card.getBoundingClientRect();
    setTip({
      x: r.left - c.left + r.width / 2,
      y: r.top - c.top,
      text: `${cell.count} ${cell.count === 1 ? "visitor" : "visitors"} · ${prettyDate(cell.key)}`,
    });
  };

  return (
    <div
      ref={cardRef}
      className="relative rounded-2xl border border-line bg-surface p-5 md:p-7"
    >
      <div className="mb-5 flex items-baseline gap-2">
        <span className="font-display text-3xl text-ink">
          {total.toLocaleString("en-PH")}
        </span>
        <span className="text-sm text-muted">
          {total === 1 ? "visitor" : "visitors"} in the last year
        </span>
      </div>

      <div ref={scrollRef} className="overflow-x-auto pb-1">
        <div className="inline-flex gap-2">
          {/* day-of-week labels (aligned to the cell rows) */}
          <div className="flex flex-col gap-[3px] pt-[18px]">
            {DAY_LABELS.map((d, i) => (
              <span
                key={i}
                className="h-3 w-7 text-right text-[10px] leading-3 text-muted"
              >
                {d}
              </span>
            ))}
          </div>

          <div>
            {/* month labels (aligned to the week columns) */}
            <div className="mb-1 flex gap-[3px]">
              {months.map((m, i) => (
                <span
                  key={i}
                  className="w-3 whitespace-nowrap text-[10px] leading-[14px] text-muted"
                >
                  {m}
                </span>
              ))}
            </div>
            {/* week columns */}
            <div className="flex gap-[3px]">
              {weeks.map((col, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {col.map((cell) =>
                    cell.future ? (
                      <span key={cell.key} className="size-3" />
                    ) : (
                      <span
                        key={cell.key}
                        onMouseEnter={(e) => showTip(e, cell)}
                        onMouseLeave={() => setTip(null)}
                        className="size-3 rounded-[3px] ring-ink/50 transition-[box-shadow] hover:ring-2"
                        style={{
                          backgroundColor: LEVELS[level(cell.count, max)],
                        }}
                      />
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* legend */}
      <div className="mt-4 flex items-center justify-end gap-1.5 text-[11px] text-muted">
        <span className="mr-0.5">Less</span>
        {LEVELS.map((c, i) => (
          <span
            key={i}
            className="size-3 rounded-[3px]"
            style={{ backgroundColor: c }}
          />
        ))}
        <span className="ml-0.5">More</span>
      </div>

      {/* floating hover tooltip */}
      {tip && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-ink px-2.5 py-1.5 text-[12px] font-medium text-canvas shadow-[0_8px_24px_-8px_rgba(24,24,27,0.45)]"
          style={{ left: tip.x, top: tip.y - 8 }}
        >
          {tip.text}
          <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-ink" />
        </div>
      )}
    </div>
  );
}
