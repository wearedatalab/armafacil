"use client";

import { useLang } from "@/lib/i18n";

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`inline-flex items-center rounded-full border border-sand bg-cream p-0.5 ${className}`}
      role="group"
      aria-label="Language / Idioma"
    >
      {(["es", "en"] as const).map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider transition-colors ${
              active ? "bg-walnut text-cream" : "text-stone hover:text-ink"
            }`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
