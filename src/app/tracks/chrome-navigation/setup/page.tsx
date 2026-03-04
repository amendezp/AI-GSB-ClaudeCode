"use client";

import { TrackSection } from "@/components/tracks/track-section";
import { ChromeExtensionIllustration, ClaudeSidebarIllustration } from "@/components/tracks/chrome-illustrations";
import { getSectionOffset } from "@/lib/chrome-navigation-sections";
import type { TrackStep } from "@/components/tracks/track-steps";

const steps: TrackStep[] = [
  {
    title: "Open Google Chrome",
    description:
      "Make sure you're using Google Chrome (not Safari, Firefox, or another browser).",
  },
  {
    title: "Find the Claude extension in your toolbar",
    description:
      'Look for the Claude icon in your Chrome toolbar (top-right area). If you don\'t see it, click the puzzle piece icon to find it in your extensions list.',
    illustration: <ChromeExtensionIllustration />,
  },
  {
    title: "Click the Claude extension icon",
    description:
      "Click the icon to open the extension popup. If this is your first time, you'll be prompted to log in.",
  },
  {
    title: "Log in with your Claude account",
    description:
      "Use the same account you use for Claude Pro/Max. This connects the Chrome extension to your Claude Code session.",
  },
  {
    title: "Verify the extension is ready",
    description:
      "You should see the Claude sidebar panel open in Chrome. It will look like this — with the model selector, chat input, and permission controls. This means the extension is connected and ready to use.",
    illustration: <ClaudeSidebarIllustration />,
  },
];

export default function SetupPage() {
  return (
    <TrackSection
      trackId="chrome-navigation"
      sectionIndex={1}
      accentClass="track-2"
      sectionTitle="Chrome Extension Setup"
      sectionDescription="Connect the Claude Chrome extension so Claude Code can control your browser."
      steps={steps}
      stepIndexOffset={getSectionOffset(1)}
      nextSectionHref="/tracks/chrome-navigation/cover-letter"
      nextSectionLabel="Continue to Cover Letter"
    />
  );
}
