"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CHECKLIST_ITEMS } from "@/lib/constants";
import type { WorkshopStep } from "@/types";

interface WorkshopState {
  // Checklist
  completedItems: string[];
  toggleItem: (id: string) => void;
  isAllComplete: () => boolean;

  // Registration
  email: string | null;
  isRegistered: boolean;
  setRegistration: (email: string) => void;

  // Navigation / Progress
  currentStep: WorkshopStep;
  setCurrentStep: (step: WorkshopStep) => void;
  selectedTrack: string | null;
  setSelectedTrack: (id: string) => void;

  // Reset
  reset: () => void;
}

export const useWorkshopStore = create<WorkshopState>()(
  persist(
    (set, get) => ({
      completedItems: [],
      toggleItem: (id: string) =>
        set((state) => ({
          completedItems: state.completedItems.includes(id)
            ? state.completedItems.filter((item) => item !== id)
            : [...state.completedItems, id],
        })),
      isAllComplete: () => {
        const { completedItems } = get();
        return completedItems.length >= CHECKLIST_ITEMS.length;
      },

      email: null,
      isRegistered: false,
      setRegistration: (email: string) => set({ email, isRegistered: true }),

      currentStep: 0 as WorkshopStep,
      setCurrentStep: (step: WorkshopStep) => set({ currentStep: step }),
      selectedTrack: null,
      setSelectedTrack: (id: string) => set({ selectedTrack: id }),

      reset: () =>
        set({
          completedItems: [],
          email: null,
          isRegistered: false,
          currentStep: 0 as WorkshopStep,
          selectedTrack: null,
        }),
    }),
    {
      name: "ai-gsb-workshop",
    }
  )
);
