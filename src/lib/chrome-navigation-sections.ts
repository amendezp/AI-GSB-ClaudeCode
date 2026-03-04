export interface Section {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  href: string;
  estimatedTime: string;
  stepCount: number;
}

export const CHROME_NAVIGATION_SECTIONS: Section[] = [
  {
    id: "memory",
    number: 1,
    title: "Memory & CLAUDE.md",
    shortTitle: "Memory",
    href: "/tracks/chrome-navigation/memory",
    estimatedTime: "~2 min",
    stepCount: 4,
  },
  {
    id: "setup",
    number: 2,
    title: "Chrome Extension Setup",
    shortTitle: "Setup",
    href: "/tracks/chrome-navigation/setup",
    estimatedTime: "~1 min",
    stepCount: 5,
  },
  {
    id: "cover-letter",
    number: 3,
    title: "Cover Letter via Chrome",
    shortTitle: "Cover Letter",
    href: "/tracks/chrome-navigation/cover-letter",
    estimatedTime: "~2 min",
    stepCount: 5,
  },
  {
    id: "research",
    number: 4,
    title: "Job Research Spreadsheet",
    shortTitle: "Research",
    href: "/tracks/chrome-navigation/research",
    estimatedTime: "Stretch",
    stepCount: 4,
  },
];

/** Compute the global step index offset for a given section */
export function getSectionOffset(sectionIndex: number): number {
  return CHROME_NAVIGATION_SECTIONS.slice(0, sectionIndex).reduce(
    (sum, s) => sum + s.stepCount,
    0
  );
}
