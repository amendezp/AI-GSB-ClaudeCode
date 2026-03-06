import { TRACKS } from "@/lib/constants";
import { TrackCard } from "./track-card";
import { Zap, Star, Gift } from "lucide-react";

export function TrackGrid() {
  const warmup = TRACKS.find((t) => t.tag === "Warm-up");
  const main = TRACKS.find((t) => t.featured);
  const bonus = TRACKS.find((t) => t.tag === "Bonus");

  return (
    <div className="space-y-10">
      {/* Start Here */}
      {warmup && (
        <section>
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            <Zap className="h-4 w-4" />
            Start Here
          </div>
          <div className="mx-auto max-w-xl">
            <TrackCard track={warmup} />
          </div>
        </section>
      )}

      {/* Main Workshop */}
      {main && (
        <section>
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-700">
            <Star className="h-4 w-4" />
            Main Workshop
          </div>
          <div className="mx-auto max-w-2xl">
            <TrackCard track={main} />
          </div>
        </section>
      )}

      {/* Bonus */}
      {bonus && (
        <section>
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-600">
            <Gift className="h-4 w-4" />
            Bonus — If You Have Extra Time
          </div>
          <div className="mx-auto max-w-xl">
            <TrackCard track={bonus} />
          </div>
        </section>
      )}
    </div>
  );
}
