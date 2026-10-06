import { useEffect, useState } from "react";
import { fetchVisits, type VisitData } from "@/lib/visits";

const REFRESH_MS = 60_000; // keep the graph live-ish for new visitors

/** Visitor counts for the heatmap. Loads now, refreshes shortly after mount
 *  (to reflect the visit we just counted), then polls so new visitors appear
 *  without a page reload. Returns null until the first response. */
export function useVisits(): VisitData | null {
  const [data, setData] = useState<VisitData | null>(null);

  useEffect(() => {
    let active = true;
    const load = () =>
      fetchVisits()
        .then((d) => active && setData(d))
        .catch(() => {});
    load();
    const soon = setTimeout(load, 2500);
    const iv = setInterval(load, REFRESH_MS);
    return () => {
      active = false;
      clearTimeout(soon);
      clearInterval(iv);
    };
  }, []);

  return data;
}
