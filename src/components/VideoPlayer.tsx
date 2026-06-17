"use client";

import { useState } from "react";
import type { VideoTut, Accent } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { PlayIcon, ClockIcon } from "./Icons";

const ACCENT_BG: Record<Accent, string> = {
  walnut: "from-walnut/90 to-walnut/60",
  honey: "from-honey/90 to-honey/60",
  forest: "from-forest/90 to-forest/60",
  clay: "from-clay/90 to-clay/60",
};

function fmt(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function VideoPlayer({ video, accent }: { video: VideoTut; accent: Accent }) {
  const { dict, t } = useLang();
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="card overflow-hidden">
      <div className="relative aspect-video w-full bg-ink">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={t(video.title)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className={`group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${ACCENT_BG[accent]} text-cream`}
            aria-label={`${dict.detail.watch}: ${t(video.title)}`}
          >
            {/* textura de plano */}
            <span
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <span className="grid h-16 w-16 place-items-center rounded-full bg-cream/95 text-ink shadow-lift transition-transform group-hover:scale-110">
              <PlayIcon className="ml-0.5 h-7 w-7" />
            </span>
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-ink/30 px-3 py-1 font-mono text-xs">
              <ClockIcon className="h-3.5 w-3.5" /> {fmt(video.durationSec)}
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex items-center justify-between gap-3 p-4">
        <h3 className="font-display text-base font-semibold text-ink">{t(video.title)}</h3>
        <span className="shrink-0 font-mono text-xs text-stone">{fmt(video.durationSec)}</span>
      </figcaption>
    </figure>
  );
}
