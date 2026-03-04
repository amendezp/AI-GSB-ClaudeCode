"use client";

import { useEffect } from "react";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { SectionBlock } from "@/components/cheat-sheet/section-block";
import { ComparisonTable } from "@/components/cheat-sheet/comparison-table";
import { ConceptDirectory } from "@/components/cheat-sheet/concept-directory";
import { useWorkshopStore } from "@/store/workshop-store";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export default function CheatSheetPage() {
  const { setCurrentStep, isRegistered } = useWorkshopStore();

  useEffect(() => {
    setCurrentStep(1);
  }, [setCurrentStep]);

  // Gate: redirect if not registered
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
      </div>

      {/* What is Claude Code */}
      <SectionBlock title="What is Claude Code?">
        <div className="rounded-lg border bg-card p-5">
          <p className="leading-relaxed text-muted-foreground">
            Claude Code is a feature inside the{" "}
            <strong className="text-foreground">Claude Desktop app</strong> that
            turns Claude into a hands-on coding partner. Instead of just chatting
            about code, Claude can actually{" "}
            <strong className="text-foreground">
              read your files, write code, run commands, and build entire
              projects
            </strong>{" "}
            on your computer. You describe what you want in plain English, and
            Claude does the rest.
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
            With the latest{" "}
            <strong className="text-foreground">Claude Opus</strong> update,
            Claude Code went from &quot;interesting demo&quot; to &quot;genuinely
            useful tool.&quot; Here&apos;s what changed:
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
                <strong className="text-foreground">True agentic behavior</strong>{" "}
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
                title: 'Select a project folder',
                desc: 'Click the folder icon to point Claude at the directory you want to work in.',
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
        subtitle="Same power, different interface. We're using the Desktop app today."
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

      {/* Continue button */}
      <div className="mt-12 text-center">
        <Link href="/tracks">
          <Button size="lg" className="gap-2">
            Choose Your Track
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </PageContainer>
  );
}
