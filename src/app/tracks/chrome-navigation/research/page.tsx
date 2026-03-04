"use client";

import { TrackSection } from "@/components/tracks/track-section";
import { getSectionOffset } from "@/lib/chrome-navigation-sections";
import type { TrackStep } from "@/components/tracks/track-steps";

const steps: TrackStep[] = [
  {
    title: "Make sure Auto Accept is still enabled",
    description:
      "This task involves extensive browser navigation, so auto-accept mode will keep things flowing smoothly.",
  },
  {
    title: "Send this prompt to Claude",
    prompt:
      "Research Anthropic's currently open roles on their careers page. Pick the top 10 positions that best match my background based on the CLAUDE.md file. Create a new Google Spreadsheet with columns: Role Title, Estimated Salary Range, Job Description (brief summary), Link to Posting, and Relevance Score (1-10). Sort by relevance score in descending order, starting with the best fits for my profile.",
  },
  {
    title: "Let Claude research and build",
    description:
      "This task is more complex — Claude will browse Anthropic's careers page, analyze each role against your background, and create a structured spreadsheet. It may take a few minutes. Sit back and watch the magic happen.",
  },
  {
    title: "Review your spreadsheet",
    description:
      "Open the Google Spreadsheet Claude created and review the roles. Check if the relevance scores make sense given your background. This is a great starting point for your actual job search!",
  },
];

export default function ResearchPage() {
  return (
    <TrackSection
      trackId="chrome-navigation"
      sectionIndex={3}
      accentClass="track-2"
      sectionTitle="Job Research Spreadsheet"
      steps={steps}
      stepIndexOffset={getSectionOffset(3)}
      isLastSection
      isStretchGoal
    />
  );
}
