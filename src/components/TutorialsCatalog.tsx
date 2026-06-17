"use client";

import { useMemo, useState } from "react";
import { FURNITURE, CATEGORIES, categoryLabel, type CategoryKey } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { TutorialCard } from "./TutorialCard";
import { SearchIcon } from "./Icons";

export function TutorialsCatalog() {
  const { dict, t, lang } = useLang();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<CategoryKey | "all">("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FURNITURE.filter((f) => {
      if (cat !== "all" && f.category !== cat) return false;
      if (!q) return true;
      return (
        t(f.title).toLowerCase().includes(q) ||
        t(f.summary).toLowerCase().includes(q) ||
        t(categoryLabel(f.category)).toLowerCase().includes(q)
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, cat, lang]);

  const chips: { key: CategoryKey | "all"; label: string }[] = [
    { key: "all", label: dict.tutorials.all },
    ...CATEGORIES.map((c) => ({ key: c.key, label: t(c.label) })),
  ];

  return (
    <div className="edge py-12 lg:py-16">
      <header className="max-w-2xl">
        <p className="kicker">{dict.tutorials.kicker}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.06] tracking-tightest text-ink sm:text-5xl">
          {dict.tutorials.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-stone">{dict.tutorials.subtitle}</p>
      </header>

      {/* Controles */}
      <div className="mt-9 flex flex-col gap-4">
        <div className="relative max-w-md">
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={dict.tutorials.searchPh}
            aria-label={dict.tutorials.searchPh}
            className="w-full rounded-full border border-sand bg-paper py-3 pl-12 pr-4 text-sm text-ink placeholder:text-stone focus:border-walnut"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {chips.map((c) => {
            const active = cat === c.key;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => setCat(c.key)}
                aria-pressed={active}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-walnut text-cream"
                    : "border border-sand bg-paper text-stone hover:border-walnut hover:text-ink"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        <p className="font-mono text-xs uppercase tracking-wider text-stone">
          {results.length}{" "}
          {results.length === 1 ? dict.tutorials.resultsOne : dict.tutorials.resultsMany}
        </p>
      </div>

      {/* Resultados */}
      {results.length === 0 ? (
        <p className="mt-16 text-center text-stone">{dict.tutorials.empty}</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((f) => (
            <TutorialCard key={f.slug} item={f} />
          ))}
        </div>
      )}
    </div>
  );
}
