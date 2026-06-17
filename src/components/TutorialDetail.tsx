"use client";

import Link from "next/link";
import { FURNITURE, categoryLabel, type Furniture } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { SITE, whatsappLink } from "@/lib/site";
import { FurnitureArt } from "./FurnitureArt";
import { DifficultyBadge } from "./DifficultyBadge";
import { VideoPlayer } from "./VideoPlayer";
import { DocCard } from "./DocCard";
import { FaqItem } from "./FaqItem";
import { TutorialCard } from "./TutorialCard";
import {
  ClockIcon,
  PeopleIcon,
  PartsIcon,
  GaugeIcon,
  ToolIcon,
  CheckIcon,
  PlayIcon,
  DocIcon,
  WhatsAppIcon,
  ArrowIcon,
} from "./Icons";

export function TutorialDetail({ item }: { item: Furniture }) {
  const { dict, t } = useLang();
  const others = FURNITURE.filter((f) => f.slug !== item.slug).slice(0, 3);

  const peopleLabel =
    item.people === 1 ? dict.detail.person : dict.detail.peoplePlural;

  const specs = [
    { icon: ClockIcon, label: dict.detail.time, value: `${item.timeMin} ${dict.detail.min}` },
    { icon: PeopleIcon, label: dict.detail.people, value: `${item.people} ${peopleLabel}` },
    { icon: PartsIcon, label: dict.detail.parts, value: `${item.parts}` },
    {
      icon: GaugeIcon,
      label: dict.detail.difficulty,
      value: dict.difficulty[item.difficulty],
    },
  ];

  return (
    <article className="edge py-10 lg:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1.5 font-mono text-xs text-stone" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-ink">
          {dict.detail.home}
        </Link>
        <span>/</span>
        <Link href="/tutoriales" className="hover:text-ink">
          {dict.detail.back}
        </Link>
        <span>/</span>
        <span className="truncate text-ink">{t(item.title)}</span>
      </nav>

      {/* Encabezado */}
      <header className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <span className="chip">{t(categoryLabel(item.category))}</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-ink sm:text-5xl">
            {t(item.title)}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone">{t(item.summary)}</p>
          <div className="mt-5">
            <DifficultyBadge level={item.difficulty} />
          </div>
        </div>
        <div className="card overflow-hidden">
          <FurnitureArt slug={item.slug} accent={item.accent} className="aspect-[4/3] w-full" />
        </div>
      </header>

      {/* Specs */}
      <section className="mt-10" aria-label={dict.detail.overview}>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {specs.map((s) => (
            <div key={s.label} className="card flex items-center gap-3 p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-walnut/10 text-walnut">
                <s.icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-stone">
                  {s.label}
                </span>
                <span className="block font-display text-base font-semibold text-ink">
                  {s.value}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Herramientas + Pasos */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <section>
          <h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-ink">
            <ToolIcon className="h-6 w-6 text-walnut" />
            {dict.detail.toolsTitle}
          </h2>
          <ul className="mt-5 space-y-2.5">
            {item.tools.map((tool, i) => (
              <li key={i} className="flex items-center gap-3 rounded-xl border border-sand bg-paper px-4 py-3">
                <CheckIcon className="h-4 w-4 shrink-0 text-forest" />
                <span className="text-sm text-ink">{t(tool)}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">
            {dict.detail.stepsTitle}
          </h2>
          <ol className="mt-5 space-y-3">
            {item.steps.map((step, i) => (
              <li key={i} className="flex gap-4 rounded-xl border border-sand bg-paper p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-walnut font-mono text-sm font-bold text-cream">
                  {i + 1}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-ink">{t(step)}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {/* Videos */}
      <section className="mt-14">
        <h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
          <PlayIcon className="h-6 w-6 text-walnut" />
          {dict.detail.videosTitle}
        </h2>
        <p className="mt-1.5 text-sm text-stone">{dict.common.videoNote}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {item.videos.map((v, i) => (
            <VideoPlayer key={i} video={v} accent={item.accent} />
          ))}
        </div>
      </section>

      {/* Documentos */}
      <section className="mt-14">
        <h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
          <DocIcon className="h-6 w-6 text-walnut" />
          {dict.detail.docsTitle}
        </h2>
        <p className="mt-1.5 text-sm text-stone">{dict.common.docNote}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {item.docs.map((d, i) => (
            <DocCard key={i} doc={d} />
          ))}
        </div>
      </section>

      {/* FAQ del mueble */}
      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          {dict.detail.faqTitle}
        </h2>
        <div className="mt-6 space-y-3">
          {item.faqs.map((f, i) => (
            <FaqItem key={i} faq={f} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      {/* Ayuda */}
      <section className="mt-14">
        <div className="card flex flex-col items-start gap-5 bg-forest/[0.06] p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">{dict.detail.helpTitle}</h2>
            <p className="mt-1.5 max-w-lg text-sm text-stone">{dict.detail.helpBody}</p>
          </div>
          <a
            href={whatsappLink(`Hola ${SITE.brand}, necesito ayuda armando: ${t(item.title)}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-forest text-cream hover:bg-ink"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {dict.detail.helpCta}
          </a>
        </div>
      </section>

      {/* Otros tutoriales */}
      <section className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            {dict.detail.otherTitle}
          </h2>
          <Link
            href="/tutoriales"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-walnut hover:text-ink"
          >
            {dict.home.featuredAll}
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((f) => (
            <TutorialCard key={f.slug} item={f} />
          ))}
        </div>
      </section>
    </article>
  );
}
