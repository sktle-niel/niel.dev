import type { ComponentType } from "react";
import { CARDS, type CardId } from "@/lib/cards";
import { Card } from "@/components/deck/card";
import {
  ActivityPreview,
  ContactPreview,
  ProfilePreview,
  ProjectsPreview,
  SkillsPreview,
} from "@/components/deck/previews";

/**
 * The landing deck. On phones the cards cascade down the screen, each one
 * tilted and overlapping the last; from `lg` up the same cascade runs
 * sideways across the page. Every card floats, lifts on hover, and opens its
 * page when clicked.
 */
export function Deck() {
  const previews: Record<CardId, ComponentType> = {
    profile: ProfilePreview,
    projects: ProjectsPreview,
    skills: SkillsPreview,
    activity: ActivityPreview,
    contact: ContactPreview,
  };

  return (
    <div className="mx-auto mt-16 flex max-w-sm flex-col items-center pb-6 lg:mt-24 lg:max-w-none lg:flex-row lg:items-center lg:justify-center lg:px-6">
      {CARDS.map((card, i) => {
        const Preview = previews[card.id];
        return (
          <Card key={card.id} card={card} position={i}>
            <Preview />
          </Card>
        );
      })}
    </div>
  );
}
