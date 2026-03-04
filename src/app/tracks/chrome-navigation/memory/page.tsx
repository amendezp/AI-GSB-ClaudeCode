"use client";

import { TrackSection } from "@/components/tracks/track-section";
import { CVAttachmentIllustration } from "@/components/tracks/chrome-illustrations";
import { getSectionOffset } from "@/lib/chrome-navigation-sections";
import { FileText, Brain } from "lucide-react";
import type { TrackStep } from "@/components/tracks/track-steps";

const steps: TrackStep[] = [
  {
    title: "Open Claude Desktop and start a Code session",
    description:
      "Make sure you're in the Code tab with your project folder selected (the same one from Track 1, or create a new one).",
  },
  {
    title: "Attach your CV / resume to the chat",
    description:
      'Drag and drop your resume file (PDF, DOCX, or plain text) into the Claude Code chatbox. You can also click the "+" button to attach a file.',
    illustration: <CVAttachmentIllustration />,
  },
  {
    title: "Send this prompt to Claude",
    prompt:
      "Read my attached CV and create a CLAUDE.md memory file that summarizes my career background, key skills, work experience, and education. This will be your reference for future tasks.",
  },
  {
    title: "Verify the CLAUDE.md file was created",
    description:
      "Claude will create a CLAUDE.md file in your project folder. You can open it to review the summary and make sure it captured your information correctly.",
  },
];

function MemoryIntro() {
  return (
    <div className="rounded-lg border bg-card p-5 space-y-4">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100">
          <Brain className="h-5 w-5 text-amber-700" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">
            How Claude Code manages memory
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Claude Code has a memory system powered by special files called{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
              CLAUDE.md
            </code>
            . These files store persistent context about you and your projects
            — your preferences, background, and important details. Claude reads
            them automatically at the start of every session.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100">
          <FileText className="h-5 w-5 text-blue-700" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">What is CLAUDE.md?</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Think of it as a briefing document you give a new team member on
            their first day. Once created, Claude references it across all your
            conversations — so it never asks the same questions twice. In this
            section, you&apos;ll feed Claude your career data so it can use it
            throughout the rest of this track.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MemoryPage() {
  return (
    <TrackSection
      trackId="chrome-navigation"
      sectionIndex={0}
      accentClass="track-2"
      sectionTitle="Memory & CLAUDE.md"
      sectionDescription="Teach Claude about your career so it can personalize everything that follows."
      steps={steps}
      stepIndexOffset={getSectionOffset(0)}
      nextSectionHref="/tracks/chrome-navigation/setup"
      nextSectionLabel="Continue to Chrome Setup"
      introContent={<MemoryIntro />}
    />
  );
}
