"use client";

import { PageContainer } from "@/components/layout/page-container";
import { TrackPlaceholder } from "@/components/tracks/track-placeholder";

export default function ChromeNavigationTrackPage() {
  return (
    <PageContainer>
      <TrackPlaceholder
        trackNumber={2}
        trackTitle="Chrome Navigation"
        accentClass="track-2"
      />
    </PageContainer>
  );
}
