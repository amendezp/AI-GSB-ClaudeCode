"use client";

import { useEffect } from "react";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { SectionBlock } from "@/components/cheat-sheet/section-block";
import { ComparisonTable } from "@/components/cheat-sheet/comparison-table";
import { ConceptDirectory } from "@/components/cheat-sheet/concept-directory";
import { InterfaceGuide } from "@/components/cheat-sheet/interface-guide";
import { useWorkshopStore } from "@/store/workshop-store";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Printer, ExternalLink } from "lucide-react";

export default function CheatSheetPage() {
  const { setCurrentStep, isRegistered } = useWorkshopStore();

  useEffect(() => {
    setCurrentStep(1);
  }, [setCurrentStep]);

  if (!isRegistered) {
    return (
      <PageContainer>
        <div className="py-20 text-center">
          <p className="mb-4 text-muted-foreground">
            Please complete the setup checklist first.
          </p>
          <Link href="/">
            <Button variant="outline">Go to Setup</Button>
          </Link>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      {/* Page header */}
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
          <BookOpen className="h-4 w-4" />
          Cocktail Party Cheat Sheet
        </div>
        <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight text-foreground">
          Claude Code in 5 Minutes
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Everything you need to know to sound smart at dinner — and actually use
          it today.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => window.print()}
          >
            <Printer className="h-4 w-4" />
            Print / Save as PDF
          </Button>
          <a href="/handout.html" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Printable Handout
            </Button>
          </a>
        </div>
      </div>

      {/* What is Claude Code */}
      <SectionBlock title="What is Claude Code?">
        <div className="rounded-lg border bg-card p-5">
          <p className="leading-relaxed text-muted-foreground">
            Claude Code is a{" "}
            <strong className="text-foreground">
              highly agentic coding assistant
            </strong>{" "}
            built by Anthropic. It&apos;s not just a chatbot that talks about
            code — it can actually{" "}
            <strong className="text-foreground">
              read your files, write code, run commands, and build entire
              projects
            </strong>{" "}
            on your computer. You describe what you want in plain English, and
            Claude does the rest. Under the hood, Claude Code is fundamentally a{" "}
            <strong className="text-foreground">CLI (command line interface)</strong>
            , but for the sake of simplicity, today we&apos;ll use it through the{" "}
            <strong className="text-foreground">Claude Desktop app</strong>,
            which wraps it in a friendly visual interface.
          </p>
        </div>
      </SectionBlock>

      {/* What changed */}
      <SectionBlock
        title="Why Is Everyone Talking About It?"
        subtitle="The recent Opus model update changed everything"
      >
        <div className="rounded-lg border bg-card p-5">
          <p className="mb-3 leading-relaxed text-muted-foreground">
            With the{" "}
            <strong className="text-foreground">Claude Opus 4</strong> release
            in June 2025 — and the even more capable{" "}
            <strong className="text-foreground">Opus 4.5</strong> following in
            February 2026 — Claude Code went from &quot;interesting demo&quot;
            to &quot;genuinely useful tool.&quot; Here&apos;s what changed:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="mt-1 text-primary">&#x2022;</span>
              <span>
                <strong className="text-foreground">
                  Dramatically better at coding
                </strong>{" "}
                — it writes production-quality code, catches its own bugs, and
                iterates until things work.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 text-primary">&#x2022;</span>
              <span>
                <strong className="text-foreground">
                  True agentic behavior
                </strong>{" "}
                — it doesn&apos;t just suggest code snippets. It plans, executes,
                tests, and debugs autonomously.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 text-primary">&#x2022;</span>
              <span>
                <strong className="text-foreground">
                  Larger context window
                </strong>{" "}
                — Claude can work with entire codebases, not just single files.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 text-primary">&#x2022;</span>
              <span>
                <strong className="text-foreground">
                  Better tool integration
                </strong>{" "}
                — MCP support means Claude can interact with your browser, APIs,
                databases, and more.
              </span>
            </li>
          </ul>
        </div>
      </SectionBlock>

      {/* Know Your Interface */}
      <SectionBlock
        title="Know Your Interface"
        subtitle="Here's what the Claude Code chatbox looks like and where to find everything"
      >
        <InterfaceGuide />
      </SectionBlock>

      {/* Modes */}
      <SectionBlock
        title="Permission Modes"
        subtitle="Control how much freedom Claude has when making changes"
      >
        <div className="space-y-3">
          {[
            {
              name: "Ask permissions",
              badge: "Default",
              desc: "Claude asks for your approval before every action — editing files, running commands, etc. Best for learning and understanding what Claude does.",
              color: "bg-blue-100 text-blue-800",
            },
            {
              name: "Plan mode",
              badge: "Research first",
              desc: "Claude researches and creates a detailed plan before writing any code. You review and approve the plan, then Claude executes. Great for complex tasks.",
              color: "bg-purple-100 text-purple-800",
            },
            {
              name: "Accept all",
              badge: "Full auto",
              desc: "Claude acts autonomously — edits files, runs commands, and iterates without asking. Fast, but use with caution. Best once you're comfortable with Claude Code.",
              color: "bg-amber-100 text-amber-800",
            },
          ].map((mode) => (
            <div
              key={mode.name}
              className="flex gap-4 rounded-lg border bg-card p-4"
            >
              <div className="shrink-0">
                <span
                  className={`inline-block rounded-md px-2 py-1 text-[10px] font-semibold ${mode.color}`}
                >
                  {mode.badge}
                </span>
              </div>
              <div>
                <p className="font-medium text-foreground">{mode.name}</p>
                <p className="text-sm text-muted-foreground">{mode.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* Models */}
      <SectionBlock
        title="Models"
        subtitle="Choose the right brain for the job"
      >
        <div className="rounded-lg border bg-card p-5">
          <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
            You can switch between different Claude models using the{" "}
            <strong className="text-foreground">model selector</strong> in the
            chatbox. Each model has different strengths:
          </p>
          <div className="space-y-2">
            {[
              {
                model: "Opus 4.6",
                desc: "Most capable. Best for complex coding, architecture decisions, and multi-file changes.",
                tag: "We use this today",
              },
              {
                model: "Sonnet 4.6",
                desc: "Fast and capable. Great balance of speed and quality for everyday tasks.",
                tag: null,
              },
              {
                model: "Haiku 4.5",
                desc: "Fastest. Best for quick questions, simple edits, and when speed matters most.",
                tag: null,
              },
            ].map((m) => (
              <div key={m.model} className="flex items-start gap-3 text-sm">
                <span className="shrink-0 font-mono font-semibold text-foreground">
                  {m.model}
                </span>
                <span className="text-muted-foreground">— {m.desc}</span>
                {m.tag && (
                  <span className="shrink-0 rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    {m.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>

      {/* Environments & Worktrees */}
      <SectionBlock
        title="Environments & Worktrees"
        subtitle="Where your code runs and how to work safely"
      >
        <div className="space-y-3">
          <div className="rounded-lg border bg-card p-4">
            <p className="mb-1 font-medium text-foreground">Environments</p>
            <p className="text-sm text-muted-foreground">
              The{" "}
              <strong className="text-foreground">environment selector</strong>{" "}
              tells Claude where to run your code.{" "}
              <strong className="text-foreground">Local</strong> means Claude
              works directly on your computer&apos;s files. You&apos;ll also see
              options like SSH for remote servers — but for today, we&apos;ll
              stick with <strong className="text-foreground">Local</strong>.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="mb-1 font-medium text-foreground">Worktrees</p>
            <p className="text-sm text-muted-foreground">
              A <strong className="text-foreground">worktree</strong> creates an
              isolated copy of your project so Claude can experiment without
              affecting your main code. Think of it as a sandbox — if something
              goes wrong, your original project is untouched. Toggle it on with
              the{" "}
              <strong className="text-foreground">worktree checkbox</strong> in
              the chatbox when you want to try something risky.
            </p>
          </div>
        </div>
      </SectionBlock>

      {/* How to use it */}
      <SectionBlock
        title="How to Use It"
        subtitle="Today we're using the Desktop app — here's the flow"
      >
        <div className="rounded-lg border bg-card p-5">
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Open the Claude Desktop app",
                desc: "Launch it from your Applications folder or dock.",
              },
              {
                step: "2",
                title: "Select a project folder",
                desc: "Click the folder icon to point Claude at the directory you want to work in.",
              },
              {
                step: "3",
                title: "Describe what you want to build",
                desc: "Type in plain English. Be as specific or vague as you like — Claude will ask clarifying questions.",
              },
              {
                step: "4",
                title: "Review and approve changes",
                desc: "Claude will show you what it plans to do. You approve, reject, or ask for modifications.",
              },
              {
                step: "5",
                title: "Iterate together",
                desc: "Keep the conversation going. Ask Claude to add features, fix bugs, or explain its choices.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {item.step}
                </div>
                <div>
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>

      {/* Desktop vs CLI */}
      <SectionBlock
        title="Desktop App vs CLI"
        subtitle={'Same power, different interface. CLI stands for "Command Line Interface" — a text-only terminal window. We\'re using the Desktop app today.'}
      >
        <ComparisonTable />
      </SectionBlock>

      {/* Concept Directory */}
      <SectionBlock
        title="Key Concepts"
        subtitle="Your glossary of terms you'll encounter today"
      >
        <ConceptDirectory />
      </SectionBlock>

      {/* Learn More */}
      <SectionBlock
        title="Want to Learn More?"
        subtitle="Keep exploring Claude Code after today's session"
      >
        <div className="rounded-lg border bg-card p-5">
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                <a
                  href="https://www.deeplearning.ai/short-courses/claude-code-a-highly-agentic-coding-assistant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  DeepLearning.AI — Claude Code Short Course
                </a>{" "}
                — A free, hands-on course that walks you through building with
                Claude Code step by step.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                <a
                  href="https://docs.anthropic.com/en/docs/claude-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  Claude Code Documentation
                </a>{" "}
                — Official Anthropic docs covering setup, configuration, and
                advanced features.
              </span>
            </li>
          </ul>
        </div>
      </SectionBlock>

      {/* Continue button */}
      <div className="mt-12 text-center">
        <Link href="/lessons">
          <Button size="lg" className="gap-2">
            Continue
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </PageContainer>
  );
}
