// The landing deck: one card per page. Each card carries its own bit of deck
// geometry (tilt, offset, float timing) so the cascade reads as a loose stack
// rather than a grid.

export type CardId = "profile" | "projects" | "skills" | "activity" | "contact";

export type CardDef = {
  id: CardId;
  index: string;
  title: string;
  blurb: string;
  to: string;
  /** Card surface. */
  tone: "ink" | "surface" | "soft" | "canvas" | "brand";
  /** Resting tilt in degrees (straightens on hover). */
  rotate: number;
  /** Mobile (vertical cascade): sideways nudge, as a % of the card width. */
  mobileX: number;
  /** Desktop (horizontal cascade): vertical nudge, in px. */
  desktopY: number;
  /** Float animation timing, so the cards bob out of phase. */
  floatDelay: number;
  floatDuration: number;
};

export const CARDS: CardDef[] = [
  {
    id: "profile",
    index: "01",
    title: "Profile",
    blurb: "Who I am and how I work.",
    to: "/profile",
    tone: "ink",
    rotate: -6,
    mobileX: -6,
    desktopY: 14,
    floatDelay: 0,
    floatDuration: 6,
  },
  {
    id: "projects",
    index: "02",
    title: "Projects",
    blurb: "Live sites and systems I've shipped.",
    to: "/projects",
    tone: "surface",
    rotate: 4,
    mobileX: 5,
    desktopY: -10,
    floatDelay: 0.8,
    floatDuration: 6.6,
  },
  {
    id: "skills",
    index: "03",
    title: "Skills",
    blurb: "The stack I build with.",
    to: "/skills",
    tone: "soft",
    rotate: -3,
    mobileX: -4,
    desktopY: 8,
    floatDelay: 1.6,
    floatDuration: 5.8,
  },
  {
    id: "activity",
    index: "04",
    title: "Activity",
    blurb: "Every square is a visitor.",
    to: "/activity",
    tone: "canvas",
    rotate: 5,
    mobileX: 5,
    desktopY: -14,
    floatDelay: 2.4,
    floatDuration: 6.3,
  },
  {
    id: "contact",
    index: "05",
    title: "Contact",
    blurb: "Let's build something.",
    to: "/contact",
    tone: "brand",
    rotate: -4,
    mobileX: -5,
    desktopY: 10,
    floatDelay: 3.2,
    floatDuration: 6.9,
  },
];
