"use client";

import { useLang } from "@/lib/i18n";

export function DifficultyBadge({ level }: { level: 1 | 2 | 3 }) {
  const { dict } = useLang();
  const color =
    level === 1 ? "text-forest" : level === 2 ? "text-honey" : "text-clay";
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-stone">
      <span className="flex gap-0.5" aria-hidden="true">
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className={`h-3 w-1 rounded-full ${
              n <= level ? color.replace("text-", "bg-") : "bg-sand"
            }`}
          />
        ))}
      </span>
      <span className={color}>{dict.difficulty[level]}</span>
    </span>
  );
}
