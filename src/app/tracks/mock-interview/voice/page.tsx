"use client";

import { TrackSection } from "@/components/tracks/track-section";
import { getSectionOffset } from "@/lib/mock-interview-sections";
import type { TrackStep } from "@/components/tracks/track-steps";

const steps: TrackStep[] = [
  {
    title: "Make sure Auto Accept is enabled",
    description:
      "This feature involves multiple file changes across your codebase — auto-accept mode will let Claude work through them without stopping at every step.",
  },
  {
    title: "Send this prompt to Claude",
    prompt: `Add a voice input feature to my interview simulator as an alternative to typing text answers. Here's exactly what I need:

RECORDING INTERFACE:
- Add a microphone button next to the existing text answer box for each question
- When the user clicks the mic button, start recording audio using the browser's MediaRecorder API (navigator.mediaDevices.getUserMedia)
- Show a clear visual recording state: a pulsing red indicator, a live timer showing recording duration, and a stop button
- When the user stops recording, show a playback preview so they can listen to their answer before submitting
- Include a "Re-record" button to discard and try again, and a "Use this recording" button to confirm
- Handle browser permission prompts gracefully — if the user denies microphone access, show a helpful message explaining how to enable it

TRANSCRIPTION:
- Send the recorded audio to a server-side API route for transcription
- Use the Anthropic API to transcribe the audio — send the audio file to Claude and ask it to provide an accurate word-for-word transcription
- Once transcribed, display the text in the answer box so the user can review and edit it before submitting
- Show a loading state during transcription (e.g., "Transcribing your answer...")

TECHNICAL REQUIREMENTS:
- Record audio in webm/opus format for best browser compatibility
- Keep the audio files client-side until submission (don't persist them)
- Add a new API route at /api/transcribe to handle the server-side transcription
- Make sure the existing text input still works — voice is an alternative, not a replacement
- The submit and AI feedback flow should work identically whether the user typed or spoke their answer

UI/UX:
- The mic button should be visually consistent with the existing design system
- On mobile, make the recording controls touch-friendly with larger tap targets
- Add a small label or tooltip on first use: "You can also answer by voice"

Make sure to handle edge cases: what if the user navigates away while recording? What if the recording is too short (under 1 second)? What if the browser doesn't support MediaRecorder (show a fallback message)?`,
  },
  {
    title: "Let Claude build the feature",
    description:
      "Claude will add the voice recording UI, create the transcription API route, and wire everything together. This touches multiple files — watch as it modifies your existing question interface and adds new components.",
  },
  {
    title: "Test it out",
    description:
      "Once Claude finishes, run your app locally and try answering a question by voice. Click the mic, speak your answer, review the transcription, edit if needed, and submit. The AI feedback should work the same as with typed answers.",
  },
  {
    title: "Redeploy to Vercel",
    description:
      "Push your changes to GitHub and Vercel will automatically redeploy. Test the voice feature on your live URL — it works on mobile too!",
  },
];

export default function VoicePage() {
  return (
    <TrackSection
      trackId="mock-interview"
      sectionIndex={4}
      accentClass="track-3"
      sectionTitle="Voice Input"
      sectionDescription="Add voice recording as an alternative way to answer interview questions."
      steps={steps}
      stepIndexOffset={getSectionOffset(4)}
      isLastSection
      isStretchGoal
    />
  );
}
