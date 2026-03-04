export interface ChecklistItem {
  id: string;
  label: string;
  description: string;
  helpUrl: string;
}

export interface Concept {
  term: string;
  fullName?: string;
  definition: string;
  analogy: string;
  icon: string;
}

export interface Track {
  id: string;
  number: number;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  href: string;
  accentClass: string;
  icon: string;
}

export type WorkshopStep = 0 | 1 | 2;
