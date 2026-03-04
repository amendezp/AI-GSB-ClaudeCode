"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Globe, Rocket, Clock, CircleCheck } from "lucide-react";
import { useWorkshopStore } from "@/store/workshop-store";
import type { Track } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  Globe,
  Rocket,
};

interface TrackCardProps {
  track: Track;
}

export function TrackCard({ track }: TrackCardProps) {
  const Icon = iconMap[track.icon] || BarChart3;
  const { completedTracks } = useWorkshopStore();
  const isComplete = completedTracks.includes(track.id);

  const difficultyColor = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-amber-100 text-amber-800",
    Advanced: "bg-red-100 text-red-800",
  }[track.difficulty];

  return (
    <Card
      className={`group flex flex-col transition-all hover:shadow-lg ${
        isComplete ? "border-green-200 bg-green-50/30" : ""
      }`}
    >
      <CardContent className="flex flex-1 flex-col p-6">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl ${
              isComplete ? "bg-green-100" : ""
            }`}
            style={
              !isComplete
                ? {
                    backgroundColor: `color-mix(in oklch, var(--color-${track.accentClass}) 15%, transparent)`,
                  }
                : undefined
            }
          >
            {isComplete ? (
              <CircleCheck className="h-6 w-6 text-green-600" />
            ) : (
              <Icon
                className="h-6 w-6"
                style={{ color: `var(--color-${track.accentClass})` }}
              />
            )}
          </div>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">
            {track.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
          {track.title}
        </h3>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {track.description}
        </p>

        {/* Badges */}
        <div className="mb-4 flex items-center gap-2">
          <Badge variant="secondary" className={difficultyColor}>
            {track.difficulty}
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            {track.estimatedTime}
          </Badge>
        </div>

        {/* CTA */}
        <Link href={track.href} className="block">
          {isComplete ? (
            <Button
              variant="outline"
              className="w-full gap-2 border-green-200 text-green-700 hover:bg-green-50"
            >
              <CircleCheck className="h-4 w-4" />
              Completed
            </Button>
          ) : (
            <Button className="w-full gap-2 group-hover:gap-3 transition-all">
              Start Track
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </Link>
      </CardContent>
    </Card>
  );
}
