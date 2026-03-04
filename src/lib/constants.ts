import { ChecklistItem, Concept, Track } from "@/types";

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "claude-pro",
    label: "Claude Pro or Max subscription",
    description: "Required for Claude Code access",
    helpUrl: "https://claude.ai/settings/billing",
  },
  {
    id: "claude-desktop",
    label: "Claude Desktop app installed",
    description: "The primary way we'll use Claude Code today",
    helpUrl: "https://claude.ai/download",
  },
  {
    id: "chrome-extension",
    label: "Claude Chrome Extension installed",
    description: "Enables Claude to interact with your browser",
    helpUrl: "https://chromewebstore.google.com/detail/claude/danfohhogdiklbofbgndkackimchjmgb",
  },
  {
    id: "git",
    label: "Git installed on your computer",
    description: "For version control and deployment",
    helpUrl: "https://git-scm.com/downloads",
  },
  {
    id: "github-account",
    label: "GitHub account created",
    description: "Free account for code hosting",
    helpUrl: "https://github.com/signup",
  },
];

export const CONCEPTS: Concept[] = [
  {
    term: "Claude Code",
    definition:
      "A feature inside the Claude Desktop app that lets Claude write, edit, and run code on your computer. You describe what you want in plain English, and Claude builds it for you.",
    analogy:
      "Think of it as having a software engineer sitting next to you who can actually touch your keyboard.",
    icon: "Terminal",
  },
  {
    term: "MCP",
    fullName: "Model Context Protocol",
    definition:
      "A standard that lets Claude connect to external tools and data sources — like your browser, files, databases, or APIs. It's how Claude reaches beyond the chat window.",
    analogy:
      "Think of it as USB ports for AI — plug in different tools and Claude can use them.",
    icon: "Plug",
  },
  {
    term: "Agent",
    definition:
      "When Claude works autonomously — making decisions, taking actions, and iterating on results without you having to guide every single step. It can read files, write code, run tests, and fix errors on its own.",
    analogy:
      "Like a capable intern who can research, draft, revise, and deliver — not just answer questions.",
    icon: "Bot",
  },
  {
    term: "Tools",
    definition:
      "Specific capabilities Claude can use during a conversation — like reading files, running terminal commands, searching the web, or editing code. Tools are the actions Claude takes.",
    analogy: "If Claude is the chef, tools are the kitchen utensils it picks up to cook.",
    icon: "Wrench",
  },
  {
    term: "Skills",
    definition:
      "Pre-built workflows that Claude can execute with a simple slash command. For example, /commit creates a git commit, /review-pr reviews a pull request. They bundle multiple actions into one shortcut.",
    analogy: "Like keyboard shortcuts — one command triggers a whole sequence of actions.",
    icon: "Zap",
  },
  {
    term: "CLAUDE.md",
    definition:
      "A special file you put in your project that gives Claude persistent instructions — your preferences, project conventions, important context. Claude reads it automatically at the start of every session.",
    analogy:
      "Like a briefing document you'd give a new team member on their first day.",
    icon: "FileText",
  },
  {
    term: "Context Window",
    definition:
      "The amount of information Claude can 'see' and work with at once during a conversation. It includes your messages, code files, and Claude's responses. Larger context = Claude can handle bigger projects.",
    analogy:
      "Think of it as Claude's desk space — the bigger it is, the more documents it can spread out and work with simultaneously.",
    icon: "Layers",
  },
  {
    term: "Memory",
    definition:
      "Claude can save notes and learnings across conversations in memory files. This means it remembers your preferences, past decisions, and project details — even in new sessions.",
    analogy:
      "Like a notebook Claude keeps between meetings so it doesn't ask the same questions twice.",
    icon: "Brain",
  },
];

export const TRACKS: Track[] = [
  {
    id: "visualization",
    number: 1,
    title: "Simple Visualization",
    description:
      "Use Claude Code to create a beautiful, interactive data visualization from scratch. Perfect for seeing the magic of AI-assisted coding for the first time.",
    difficulty: "Beginner",
    estimatedTime: "~30 min",
    href: "/tracks/visualization",
    accentClass: "track-1",
    icon: "BarChart3",
  },
  {
    id: "chrome-navigation",
    number: 2,
    title: "Chrome Navigation",
    description:
      "Let Claude browse the web for you — interact with Chrome, extract data, and create spreadsheets. Experience AI as your browser co-pilot.",
    difficulty: "Intermediate",
    estimatedTime: "~30 min",
    href: "/tracks/chrome-navigation",
    accentClass: "track-2",
    icon: "Globe",
  },
  {
    id: "mock-interview",
    number: 3,
    title: "AI Mock Interview Generator",
    description:
      "Build and deploy a full AI-powered interview prep tool using Claude, GitHub, and Vercel. Go from zero to a live web app.",
    difficulty: "Advanced",
    estimatedTime: "~45 min",
    href: "/tracks/mock-interview",
    accentClass: "track-3",
    icon: "Rocket",
  },
];

export const STEPS = [
  { label: "Setup", href: "/" },
  { label: "Learn", href: "/cheat-sheet" },
  { label: "Build", href: "/tracks" },
] as const;
