"use client";

import { TrackSection } from "@/components/tracks/track-section";
import { PlanModeDropdownIllustration } from "@/components/tracks/interview-illustrations";
import { getSectionOffset } from "@/lib/mock-interview-sections";
import { Lightbulb, ArrowRight, CheckCircle } from "lucide-react";
import type { TrackStep } from "@/components/tracks/track-steps";

function PlanModeIntro() {
  return (
    <div className="rounded-lg border bg-card p-5 space-y-4">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-100">
          <Lightbulb className="h-5 w-5 text-teal-700" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">
            What is Plan Mode?
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Plan Mode is a special Claude Code setting where Claude{" "}
            <strong>thinks before it builds</strong>. Instead of immediately
            writing code, Claude first explores your project, designs an
            architecture, and writes a detailed implementation plan for you to
            review. Only after you approve the plan does Claude start coding.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100">
          <ArrowRight className="h-5 w-5 text-blue-700" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">The Plan Mode cycle</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            You send a prompt &rarr; Claude explores your codebase &rarr; Claude
            writes a plan &rarr; You review &amp; suggest changes &rarr; You
            approve &rarr; Claude implements. Think of it as{" "}
            <strong>you&apos;re the architect, Claude is the builder</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

function PlanModeCycleCallout() {
  return (
    <div className="rounded-lg border border-teal-200 bg-teal-50 p-4">
      <div className="flex items-start gap-3">
        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
        <div className="text-sm leading-relaxed text-teal-900">
          <p className="font-medium">How the cycle works</p>
          <ol className="mt-2 space-y-1 text-teal-800 list-decimal list-inside">
            <li>You describe what you want to build</li>
            <li>Claude reads your project and writes a detailed plan</li>
            <li>You review the plan — suggest edits, ask questions</li>
            <li>You approve the plan</li>
            <li>Claude switches to implementation and starts coding</li>
          </ol>
          <p className="mt-2 text-teal-700 italic">
            This is how professional software teams work — plan first, then
            build. You&apos;re the architect, Claude is the builder.
          </p>
        </div>
      </div>
    </div>
  );
}

const steps: TrackStep[] = [
  {
    title: "Open Claude Code in your project folder",
    description:
      "Make sure you're in the same project folder from earlier (or create a new one). If you still have the CLAUDE.md file from Track 2, great — Claude will use it to personalize your interview tool.",
  },
  {
    title: 'Switch to "Plan mode"',
    description:
      'In the Claude Code chatbox, click the permissions dropdown (bottom-left, usually shows "Ask permissions") and select "Plan mode." This tells Claude to think before it builds.',
    illustration: <PlanModeDropdownIllustration />,
  },
  {
    title: "Understand how Plan Mode works",
    illustration: <PlanModeCycleCallout />,
  },
];

export default function PlanModePage() {
  return (
    <TrackSection
      trackId="mock-interview"
      sectionIndex={0}
      accentClass="track-3"
      sectionTitle="Plan Mode"
      sectionDescription="Learn how to use Plan Mode so Claude designs before it builds."
      steps={steps}
      stepIndexOffset={getSectionOffset(0)}
      nextSectionHref="/tracks/mock-interview/build"
      nextSectionLabel="Continue to Build"
      introContent={<PlanModeIntro />}
    />
  );
}
