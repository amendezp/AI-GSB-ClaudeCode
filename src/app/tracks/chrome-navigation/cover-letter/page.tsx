"use client";

import { TrackSection } from "@/components/tracks/track-section";
import { PermissionsDropdownIllustration } from "@/components/tracks/chrome-illustrations";
import { getSectionOffset } from "@/lib/chrome-navigation-sections";
import { AlertTriangle, Sparkles, Eye } from "lucide-react";
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

function WowMomentCallout() {
  return (
    <div className="mt-2 rounded-lg border border-purple-200 bg-gradient-to-r from-purple-50 to-fuchsia-50 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100">
          <Eye className="h-4 w-4 text-purple-600" />
        </div>
        <div className="text-sm leading-relaxed text-purple-900">
          <p className="font-semibold flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-purple-500" />
            This is the WOW moment
          </p>
          <p className="mt-1 text-purple-800">
            You are watching an AI autonomously control your web browser to create a
            professional document tailored to your unique career. A year ago, this was
            science fiction. Take a second to appreciate what just happened.
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
      "Help me draft a cover letter for why I want to work at Anthropic. Open Chrome, create a new Google Doc, and write a draft using specific examples from my career background in the CLAUDE.md file.",
  },
  {
    title: "Sit back and watch the magic happen",
    description:
      "This is the moment. Claude is about to take over your browser — opening Chrome, navigating to Google Docs, creating a brand new document, and writing a fully personalized cover letter, all by itself. You'll see your cursor moving, tabs opening, and text appearing in real time. It's like watching a ghost type your dream application. Don't touch anything — just enjoy the show!",
    illustration: <WowMomentCallout />,
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
