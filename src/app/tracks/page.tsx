"use client";

import { useEffect } from "react";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { TrackGrid } from "@/components/tracks/track-grid";
import { useWorkshopStore } from "@/store/workshop-store";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";

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
          Choose one of three hands-on tracks based on your interest and comfort
          level. Each track will guide you through building something real with
          Claude Code.
        </p>
      </div>
      <TrackGrid />
    </PageContainer>
  );
}
