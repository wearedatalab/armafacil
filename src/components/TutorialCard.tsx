"use client";

import Link from "next/link";
import type { Furniture } from "@/lib/content";
import { categoryLabel } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { FurnitureArt } from "./FurnitureArt";
import { DifficultyBadge } from "./DifficultyBadge";
import { ClockIcon, PlayIcon, DocIcon, ArrowIcon } from "./Icons";

export function TutorialCard({ item }: { item: Furniture }) {
  const { dict, t } = useLang();

  return (
    <Link
      href={`/tutoriales/${item.slug}`}
      className="group card flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:-translate-y-1"
    >
      <div className="relative">
        <FurnitureArt slug={item.slug} accent={item.accent} className="aspect-[16/10] w-full" />
        <span className="absolute left-3 top-3 chip bg-paper/95">
          {t(categoryLabel(item.category))}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between gap-2">
          <DifficultyBadge level={item.difficulty} />
          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-stone">
            <ClockIcon className="h-3.5 w-3.5" />
            {item.timeMin} {dict.detail.min}
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold leading-tight text-ink">
          {t(item.title)}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-stone">
          {t(item.summary)}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-sand pt-4 text-xs text-stone">
          <span className="inline-flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <PlayIcon className="h-3.5 w-3.5 text-walnut" />
              {item.videos.length}
            </span>
            <span className="inline-flex items-center gap-1">
              <DocIcon className="h-3.5 w-3.5 text-walnut" />
              {item.docs.length}
            </span>
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-walnut transition-transform group-hover:translate-x-0.5">
            {dict.detail.watch}
            <ArrowIcon className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
