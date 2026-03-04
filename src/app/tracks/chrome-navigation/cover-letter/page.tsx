"use client";

import { TrackSection } from "@/components/tracks/track-section";
import { PermissionsDropdownIllustration } from "@/components/tracks/chrome-illustrations";
import { getSectionOffset } from "@/lib/chrome-navigation-sections";
import { AlertTriangle } from "lucide-react";
import type { TrackStep } from "@/components/tracks/track-steps";

function AutoAcceptCallout() {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
        <div className="text-sm leading-relaxed text-amber-900">
          <p className="font-medium">What does Auto Accept mean?</p>
          <p className="mt-1 text-amber-800">
            With &quot;Auto accept edits&quot; enabled, Claude will execute file
            changes and browser actions without asking for permission at each
            step. This is faster for complex tasks but means you&apos;re trusting
            Claude to make decisions autonomously. You can always switch back to
            &quot;Ask permissions&quot; if you want more control.
          </p>
        </div>
      </div>
    </div>
  );
}

const steps: TrackStep[] = [
  {
    title: 'Switch to "Auto accept edits" mode',
    description:
      'In the Claude Code chatbox, click the permissions dropdown (bottom-left, usually shows "Ask permissions") and select "Auto accept edits." This lets Claude work without prompting you at every step.',
    illustration: <PermissionsDropdownIllustration />,
  },
  {
    title: "Understand what Auto Accept means",
    illustration: <AutoAcceptCallout />,
  },
  {
    title: "Send this prompt to Claude",
    prompt:
      "Use my Chrome browser to create a new Google Doc writing a cover letter for why I want to work at Anthropic. Use specific examples from my career background in the CLAUDE.md file.",
  },
  {
    title: "Watch Claude work in Chrome",
    description:
      "Claude will open Chrome, navigate to Google Docs, create a new document, and write your cover letter. Watch it happen in real time — you'll see your browser being controlled automatically.",
  },
  {
    title: "Review your cover letter",
    description:
      "Once Claude finishes, switch to Chrome and read through the cover letter. It should reference specific experiences from your CV. Feel free to ask Claude to make edits or adjustments!",
  },
];

export default function CoverLetterPage() {
  return (
    <TrackSection
      trackId="chrome-navigation"
      sectionIndex={2}
      accentClass="track-2"
      sectionTitle="Cover Letter via Chrome"
      sectionDescription="Watch Claude use your browser to create a personalized cover letter in Google Docs."
      steps={steps}
      stepIndexOffset={getSectionOffset(2)}
      nextSectionHref="/tracks/chrome-navigation/research"
      nextSectionLabel="Continue to Stretch Goal"
    />
  );
}
