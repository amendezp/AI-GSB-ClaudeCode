"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ExternalLink } from "lucide-react";
import type { ChecklistItem as ChecklistItemType } from "@/types";

interface ChecklistItemProps {
  item: ChecklistItemType;
  checked: boolean;
  onToggle: () => void;
}

export function ChecklistItem({ item, checked, onToggle }: ChecklistItemProps) {
  return (
    <div
      className={`flex items-start gap-4 rounded-lg border p-4 transition-all ${
        checked
          ? "border-primary/20 bg-primary/5"
          : "border-border bg-card hover:border-border/80"
      }`}
    >
      <Checkbox
        id={item.id}
        checked={checked}
        onCheckedChange={onToggle}
        className="mt-0.5"
      />
      <div className="flex-1 space-y-1">
        <label
          htmlFor={item.id}
          className={`cursor-pointer text-sm font-medium leading-none ${
            checked ? "text-primary" : "text-foreground"
          }`}
        >
          {item.label}
        </label>
        <p className="text-xs text-muted-foreground">{item.description}</p>
      </div>
      <a
        href={item.helpUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        Setup guide
        <ExternalLink className="h-3 w-3" />
      </a>
    </div>
  );
}
