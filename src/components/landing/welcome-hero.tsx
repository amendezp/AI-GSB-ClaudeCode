import { Sparkles } from "lucide-react";

export function WelcomeHero() {
  return (
    <div className="mb-10 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
        <Sparkles className="h-4 w-4" />
        Hands-on Workshop
      </div>
      <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Welcome to the{" "}
        <span className="text-primary">Claude Code</span>{" "}
        Workshop
      </h1>
      <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Today you&apos;ll learn to use Claude Code — your AI coding partner — to
        build real projects from scratch. No prior coding experience needed.
        Let&apos;s make sure you&apos;re all set up before we begin.
      </p>
    </div>
  );
}
