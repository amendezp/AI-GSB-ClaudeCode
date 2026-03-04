"use client";

import { BarChart3 } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { TrackSteps } from "@/components/tracks/track-steps";

const steps = [
  {
    title: "Create a new folder on your desktop",
    description:
      "Or wherever works best for you. This will be the project folder Claude works in.",
  },
  {
    title: "Open the Claude Desktop app",
    description: "Launch it from your Applications folder or dock.",
  },
  {
    title: 'Go to the "Code" tab',
    description:
      "You'll see it in the top navigation of the Claude Desktop app.",
  },
  {
    title: "Start a New Session",
    description: "Click the new session button to begin a fresh conversation.",
  },
  {
    title: "Select the folder you created",
    description:
      "Point Claude at your new folder so it knows where to create files.",
  },
  {
    title: "Type this prompt and hit send",
    prompt: "Make a cool visualization for me, I'm just getting started",
  },
  {
    title: "Accept the permissions Claude asks for",
    description:
      "Claude will request permission to create files and run commands. Approve them to let it work its magic.",
  },
  {
    title: "Voila! Your visualization is ready",
    description:
      "Claude will build and open an interactive visualization for you. Explore it, then try asking Claude to modify or enhance it!",
  },
];

export default function VisualizationTrackPage() {
  return (
    <PageContainer>
      <TrackSteps
        trackNumber={1}
        trackTitle="Simple Visualization"
        trackDescription="Use Claude Code to create a beautiful, interactive data visualization from scratch. See the magic of AI-assisted coding for the first time."
        accentClass="track-1"
        difficulty="Beginner"
        estimatedTime="~30 min"
        steps={steps}
        icon={<BarChart3 className="h-7 w-7" />}
      />
    </PageContainer>
  );
}
