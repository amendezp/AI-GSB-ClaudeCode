"use client";

import { TrackSection } from "@/components/tracks/track-section";
import { GitHubNewRepoIllustration } from "@/components/tracks/interview-illustrations";
import { getSectionOffset } from "@/lib/mock-interview-sections";
import { GitBranch } from "lucide-react";
import type { TrackStep } from "@/components/tracks/track-steps";

function GitHubIntro() {
  return (
    <div className="rounded-lg border bg-card p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100">
          <GitBranch className="h-5 w-5 text-gray-700" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">
            Ship it to the cloud
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Your interview simulator is running locally — now let&apos;s put
            it on GitHub so it lives in the cloud and you can deploy it.
            GitHub is where developers store and share code, and it connects
            directly to deployment platforms like Vercel.
          </p>
        </div>
      </div>
    </div>
  );
}

const steps: TrackStep[] = [
  {
    title: "Create a new GitHub repository",
    description:
      'Go to github.com/new (or click the "+" in the top-right corner of GitHub) and create a new repository. Name it something like "interview-simulator". Keep it Public and do NOT initialize with a README — Claude already created one for you.',
    illustration: <GitHubNewRepoIllustration />,
  },
  {
    title: "Send this prompt to Claude",
    prompt:
      "Initialize a git repository in this project, commit all the files, and push everything to my new GitHub repo. My repository URL is: [PASTE YOUR GITHUB REPO URL HERE]",
  },
  {
    title: "Authenticate if needed",
    description:
      "Claude may ask you to authenticate with GitHub. Follow the prompts — this usually involves a browser-based OAuth flow or using a personal access token. If you've used Git on this machine before, it may work automatically.",
  },
  {
    title: "Verify on GitHub",
    description:
      "Open your repository URL in the browser and confirm all your project files are there. You should see the full project structure, README, and all the source code. Congrats — your code is in the cloud!",
  },
];

export default function GitHubPage() {
  return (
    <TrackSection
      trackId="mock-interview"
      sectionIndex={2}
      accentClass="track-3"
      sectionTitle="Ship to GitHub"
      sectionDescription="Create a repository and push your project to GitHub."
      steps={steps}
      stepIndexOffset={getSectionOffset(2)}
      nextSectionHref="/tracks/mock-interview/deploy"
      nextSectionLabel="Continue to Deploy"
      introContent={<GitHubIntro />}
    />
  );
}
