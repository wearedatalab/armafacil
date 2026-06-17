"use client";

import type { DocTut } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { DocIcon, DownloadIcon } from "./Icons";

export function DocCard({ doc }: { doc: DocTut }) {
  const { dict, t } = useLang();
  return (
    <a
      href={doc.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group card flex items-center gap-4 p-4 transition-all hover:-translate-y-0.5 hover:shadow-lift"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-clay/10 text-clay">
        <DocIcon className="h-6 w-6" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-base font-semibold text-ink">
          {t(doc.title)}
        </span>
        <span className="mt-0.5 block font-mono text-xs uppercase tracking-wider text-stone">
          PDF · {doc.pages} {dict.detail.pdfPages} · {doc.sizeKB} KB
        </span>
      </span>
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-cream px-3 py-2 text-xs font-semibold text-walnut transition-colors group-hover:bg-walnut group-hover:text-cream">
        <DownloadIcon className="h-4 w-4" />
        <span className="hidden sm:inline">{dict.detail.download}</span>
      </span>
    </a>
  );
}
