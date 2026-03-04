"use client";

import { PageContainer } from "@/components/layout/page-container";
import { TrackPlaceholder } from "@/components/tracks/track-placeholder";

export default function MockInterviewTrackPage() {
  return (
    <PageContainer>
      <TrackPlaceholder
        trackNumber={3}
        trackTitle="AI Mock Interview Generator"
        accentClass="track-3"
      />
    </PageContainer>
  );
}
