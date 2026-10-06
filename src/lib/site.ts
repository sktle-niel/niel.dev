// Portfolio content. Everything the landing cards and the pages render comes
// from this file, so updating the portfolio is a matter of editing it.

export type NavItem = { label: string; to: string };

export const NAV: NavItem[] = [
  { label: "Profile", to: "/profile" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Activity", to: "/activity" },
  { label: "Contact", to: "/contact" },
];

export const PROFILE = {
  name: "Niel Ladica",
  firstName: "Niel",
  role: "Full-stack developer",
  org: "niel.dev",
  location: "Philippines",
  city: "Puerto Princesa City, Palawan",
  tagline:
    "I design, build, and ship websites, web systems, and apps — from idea to deployment.",
  intro: [
    "I'm Niel Patrick Ladica, a full-stack developer from Puerto Princesa City, Palawan. I studied BS Information Technology at Palawan Technological College (2022–2026), where I received the Programmer of the Year award.",
    "Since January 2025 I've been a Junior Software Engineer at Two Wheels Zone — I developed and deployed a full-stack application integrated with Loyverse POS, built the company's responsive website with email-based franchise inquiries, and shipped a PWA that audits cash-on-hand sales and validates BDO and BPI receipts.",
    "Outside work I've shipped a school event tabulation system for pageants, game scoreboards, and Battle of the Bands; a web-based POS and inventory system for a local clothing and apparel business; and the Travel Wise Palawan travel site. As project manager of the Information Communication Club (IC2), I maintained voting and tabulation systems used in school and barangay pageant events.",
    "Day to day I work with JavaScript/TypeScript, React, Node.js, PHP (Laravel), and MySQL — plus Git, REST APIs, and AWS.",
  ],
} as const;

export type Project = {
  slug: string;
  name: string;
  url: string;
  domain: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "ac-crest-ventures",
    name: "AC Crest Ventures",
    url: "https://falconcrest.com",
    domain: "falconcrest.com",
    category: "Website + cross-platform app with API",
    description:
      "A unified cross-platform ecosystem: a web admin dashboard and a mobile app powered by real-time API integration — referral tracking, sales analytics, user points and rewards, and instant cash-out management in one system.",
    image: "/works/accrestventures.webp",
    featured: true,
  },
  {
    slug: "four-wheels-zone",
    name: "Four Wheels Zone",
    url: "https://fourwheelszone.com/",
    domain: "fourwheelszone.com",
    category: "Landing page + online booking",
    description:
      "Auto repair and full mechanical care shop in Tagburos, Puerto Princesa — services, vehicles, and online booking in one site.",
    image: "/works/fourwheelszone.webp",
  },
  {
    slug: "two-wheels-zone",
    name: "Two Wheels Zone",
    url: "https://twowheelszone.com",
    domain: "twowheelszone.com",
    category: "Landing page + franchise inquiries",
    description:
      "Motorcycle parts, servicing, branch locator, and an online shop with franchise information and email inquiries.",
    image: "/works/twowheelszone.webp",
  },
  {
    slug: "travel-wise-palawan",
    name: "Travel Wise Palawan",
    url: "https://travelwisepalawan.com/",
    domain: "travelwisepalawan.com",
    category: "Travel and tours website",
    description:
      "Tour packages and travel services for Palawan, with curated trips and easy inquiries for travelers.",
    image: "/works/travelwisepalawan.webp",
  },
];

export type SkillGroup = { title: string; items: string[] };

export const SKILLS: SkillGroup[] = [
  {
    title: "Front end",
    items: ["React", "TypeScript", "Tailwind CSS", "Vite", "Motion", "React Router"],
  },
  {
    title: "Back end & data",
    items: ["PHP", "Laravel", "Node.js", "Python", "MySQL", "REST APIs"],
  },
  {
    title: "Mobile & desktop",
    items: ["Flutter", "C# / .NET"],
  },
  {
    title: "Ship & run",
    items: [
      "Git",
      "Apache / .htaccess",
      "Hostinger shared hosting",
      "Laragon / XAMPP",
      "PHPMailer",
      "phpMyAdmin",
    ],
  },
];

/** Short list for the landing card. */
export const SKILL_CHIPS = ["React", "TypeScript", "PHP", "MySQL", "Flutter", ".NET", "Tailwind"];

/** What I build — the kinds of projects I take on. */
export const BUILDS = [
  "Business websites",
  "Landing pages",
  "Web systems & portals",
  "Booking & travel platforms",
  "Inventory systems",
  "Library systems",
  "Capstone / thesis systems",
  "Desktop apps",
  "Mobile apps",
];

export const CONTACT = {
  email: "niel.ladica07@gmail.com",
  github: "https://github.com/sktle-niel",
  githubLabel: "github.com/sktle-niel",
  location: "Philippines",
  availability: "I reply within one business day.",
} as const;
