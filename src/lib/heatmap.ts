// Shared helpers for the visitor heatmap. The full-year graph on /activity and
// the compact preview on the landing card both build their grids from these.
// Weeks run left→right as columns; days run top→bottom (Sun..Sat).

export const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""]; // rows Sun..Sat

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// Warm charcoal → ink ramp (on-brand, not GitHub green): 0 = empty hairline,
// 1..4 deepen to the site's signature ink.
export const LEVELS = ["#eceae5", "#cbc9c2", "#928f88", "#4d4b47", "#18181b"];

export type Cell = { key: string; count: number; future: boolean };

export const toKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;

export const prettyDate = (key: string) => {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

/** Bucket a day's count into one of 5 intensity levels, relative to the busiest
 *  day so the graph stays readable whether the peak is 3 or 300. */
export function level(count: number, max: number): number {
  if (count <= 0) return 0;
  if (max <= 4) return Math.min(4, count);
  const q = count / max;
  if (q > 0.75) return 4;
  if (q > 0.5) return 3;
  if (q > 0.25) return 2;
  return 1;
}

/** Lay out the trailing `weeksCount` weeks as columns of 7 day cells, ending
 *  with the current week on the right. */
export function buildGrid(days: Record<string, number>, weeksCount: number) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // Sunday that opens the current (right-most) week column.
  const thisSunday = new Date(today);
  thisSunday.setDate(today.getDate() - today.getDay());
  // Sunday that opens the left-most column, weeksCount-1 weeks earlier.
  const first = new Date(thisSunday);
  first.setDate(thisSunday.getDate() - (weeksCount - 1) * 7);

  const weeks: Cell[][] = [];
  const months: string[] = [];
  let prevMonth = -1;
  for (let w = 0; w < weeksCount; w++) {
    const col: Cell[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(first);
      date.setDate(first.getDate() + w * 7 + d);
      const key = toKey(date);
      col.push({ key, count: days[key] ?? 0, future: date > today });
    }
    // Label a column when its first day lands in a new month.
    const m = new Date(first);
    m.setDate(first.getDate() + w * 7);
    if (m.getMonth() !== prevMonth) {
      months.push(MONTHS[m.getMonth()]);
      prevMonth = m.getMonth();
    } else {
      months.push("");
    }
    weeks.push(col);
  }
  return { weeks, months };
}
