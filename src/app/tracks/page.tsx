"use client";

import { useEffect } from "react";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { TrackGrid } from "@/components/tracks/track-grid";
import { useWorkshopStore } from "@/store/workshop-store";
import { Button } from "@/components/ui/button";
import { Compass, MessageSquareHeart } from "lucide-react";

export default function TracksPage() {
  const { setCurrentStep, isRegistered } = useWorkshopStore();

  useEffect(() => {
    setCurrentStep(2);
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
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
          <Compass className="h-4 w-4" />
          Choose Your Path
        </div>
        <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight text-foreground">
          Pick a Track
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Start with any track and work your way through all three by the end of
          the workshop. Each is a self-contained mini-project that builds
          something real with Claude Code.
        </p>
      </div>
      <TrackGrid />

      {/* Feedback */}
      <div className="mt-16 text-center">
        <div className="mx-auto max-w-md rounded-xl border bg-gradient-to-r from-primary/5 to-primary/10 p-8">
          <MessageSquareHeart className="mx-auto mb-3 h-8 w-8 text-primary" />
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Feedback is a gift
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            As we learned at the GSB — help us make this workshop better.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScgaRPTnBxHVMfDJK6_Mb4XsRK5X-YGB5wePBd8bbo42dBKgQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-4 gap-2">
              <MessageSquareHeart className="h-4 w-4" />
              Share Your Feedback
            </Button>
          </a>
        </div>
      </div>
    </PageContainer>
  );
}
