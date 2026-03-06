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
    helpUrl: "https://chromewebstore.google.com/publisher/anthropic/u308d63ea0533efcf7ba778ad42da7390",
  },
  {
    id: "git",
    label: "Git installed on your computer",
    description: "Windows users only — Git comes pre-installed on Mac",
    helpUrl: "https://git-scm.com/install/windows",
    expandableHelp: {
      title: "How to install Git on Windows",
      steps: [
        "Go to git-scm.com/install/windows and download the installer.",
        "Run the installer. Click Next on each screen to accept the defaults — the installer has many screens, but you don't need to change anything.",
        "If it asks you to choose an editor, keep the default and click Next.",
        'When you see "Adjusting your PATH environment," keep the recommended option selected.',
      ],
      note: "Already have Git? You can skip this step. If you're not sure, install it anyway — reinstalling won't cause problems.",
    },
  },
  {
    id: "github-account",
    label: "GitHub account created",
    description: "Free account for code hosting",
    helpUrl: "https://github.com/signup",
  },
  {
    id: "vercel-account",
    label: "Vercel account created",
    description: "Free account for deploying your project to the web",
    helpUrl: "https://vercel.com/signup",
  },
];

export const CONCEPTS: Concept[] = [
  {
    term: "Claude Code",
    definition:
      "A highly agentic coding assistant by Anthropic. It can read your files, write code, run commands, and build entire projects on your computer. You describe what you want in plain English, and Claude builds it for you.",
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
      "A quick 1-minute test to make sure Claude Code is working on your machine. Create a simple visualization and confirm your setup is ready.",
    difficulty: "Beginner",
    estimatedTime: "~1 min",
    href: "/tracks/visualization",
    accentClass: "track-1",
    icon: "BarChart3",
    tag: "Warm-up",
  },
  {
    id: "mock-interview",
    number: 2,
    title: "AI Mock Interview Generator",
    description:
      "The main event — build and deploy a full AI-powered interview prep tool using Claude, GitHub, and Vercel. Go from zero to a live web app.",
    difficulty: "Advanced",
    estimatedTime: "~20 min",
    href: "/tracks/mock-interview",
    accentClass: "track-2",
    icon: "Rocket",
    tag: "Core Workshop",
    featured: true,
  },
  {
    id: "chrome-navigation",
    number: 3,
    title: "Chrome Navigation",
    description:
      "Extra credit! Let Claude browse Chrome for you — create documents, research jobs, and build spreadsheets. Try this after finishing the main track.",
    difficulty: "Intermediate",
    estimatedTime: "~10 min",
    href: "/tracks/chrome-navigation",
    accentClass: "track-3",
    icon: "Globe",
    tag: "Bonus",
  },
];

export const STEPS = [
  { label: "Setup", href: "/" },
  { label: "Learn", href: "/cheat-sheet" },
  { label: "Build", href: "/tracks" },
] as const;
