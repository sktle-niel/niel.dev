import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/ui/reveal";
import { ActivityGraph } from "@/components/activity-graph";

export function ActivityPage() {
  return (
    <PageShell
      eyebrow="Live activity"
      title="Every square is a visitor."
      intro="A year of traffic to this site. Each cell is a day, counted once per visitor — the darker the square, the busier the day. No cookies, no tracking: a visitor is stored only as a salted hash that changes every day."
    >
      <Reveal>
        <ActivityGraph />
      </Reveal>
    </PageShell>
  );
}
