"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Copy } from "lucide-react";

export interface TrackStep {
  title: string;
  description?: string;
  prompt?: string;
}

interface TrackStepsProps {
  trackNumber: number;
  trackTitle: string;
  trackDescription: string;
  accentClass: string;
  difficulty: string;
  estimatedTime: string;
  steps: TrackStep[];
  icon: React.ReactNode;
}

function PromptBlock({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-2 group relative rounded-lg border bg-[#2a2a2a] px-4 py-3">
      <p className="pr-10 font-mono text-sm text-white/90">{prompt}</p>
      <button
        type="button"
        onClick={handleCopy}
        className="absolute right-3 top-3 rounded-md p-1 text-white/40 transition-colors hover:bg-white/10 hover:text-white/80"
        aria-label="Copy prompt"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

export function TrackSteps({
  trackNumber,
  trackTitle,
  trackDescription,
  accentClass,
  difficulty,
  estimatedTime,
  steps,
  icon,
}: TrackStepsProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div
          className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: `color-mix(in oklch, var(--color-${accentClass}) 15%, transparent)`,
            color: `var(--color-${accentClass})`,
          }}
        >
          {icon}
        </div>
        <div className="mb-2 text-sm font-medium text-muted-foreground">
          Track {trackNumber}
        </div>
        <h1 className="mb-3 font-serif text-3xl font-bold tracking-tight text-foreground">
          {trackTitle}
        </h1>
        <p className="mx-auto mb-4 max-w-lg text-muted-foreground">
          {trackDescription}
        </p>
        <div className="inline-flex items-center gap-3 text-xs text-muted-foreground">
          <span
            className="rounded-full px-2.5 py-1 font-medium"
            style={{
              backgroundColor: `color-mix(in oklch, var(--color-${accentClass}) 12%, transparent)`,
              color: `var(--color-${accentClass})`,
            }}
          >
            {difficulty}
          </span>
          <span>{estimatedTime}</span>
        </div>
      </div>

      {/* Steps */}
      <div className="mx-auto max-w-2xl space-y-3">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex gap-4 rounded-lg border bg-card p-4"
          >
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{
                backgroundColor: `var(--color-${accentClass})`,
              }}
            >
              {i + 1}
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground">{step.title}</p>
              {step.description && (
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {step.description}
                </p>
              )}
              {step.prompt && <PromptBlock prompt={step.prompt} />}
            </div>
          </div>
        ))}
      </div>

      {/* Back button */}
      <div className="text-center">
        <Link href="/tracks">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Track Selection
          </Button>
        </Link>
      </div>
    </div>
  );
}
