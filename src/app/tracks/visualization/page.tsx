"use client";

import { PageContainer } from "@/components/layout/page-container";
import { TrackPlaceholder } from "@/components/tracks/track-placeholder";

export default function VisualizationTrackPage() {
  return (
    <PageContainer>
      <TrackPlaceholder
        trackNumber={1}
        trackTitle="Simple Visualization"
        accentClass="track-1"
      />
    </PageContainer>
  );
}
