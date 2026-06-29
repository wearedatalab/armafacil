"use client";

import Link from "next/link";
import { FURNITURE } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { SITE, whatsappLink } from "@/lib/site";
import { TutorialCard } from "./TutorialCard";
import { FurnitureArt } from "./FurnitureArt";
import {
  PlayIcon,
  DocIcon,
  CheckIcon,
  ArrowIcon,
  WhatsAppIcon,
  ClockIcon,
} from "./Icons";

const PILLAR_ICONS = [PlayIcon, DocIcon, CheckIcon];

export function HomeView() {
  const { dict } = useLang();

  const totalVideos = FURNITURE.reduce((n, f) => n + f.videos.length, 0);
  const totalDocs = FURNITURE.reduce((n, f) => n + f.docs.length, 0);
  const featured = FURNITURE.slice(0, 3);

  const stats = [
    { n: FURNITURE.length, label: dict.home.statTutorials },
    { n: totalVideos, label: dict.home.statVideos },
    { n: totalDocs, label: dict.home.statDocs },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="edge grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <p className="kicker">{dict.home.kicker}</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.04] tracking-tightest text-ink sm:text-5xl lg:text-6xl">
              {dict.home.title}
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-stone">
              {dict.home.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/tutoriales" className="btn-primary">
                {dict.home.ctaPrimary}
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link href="/preguntas" className="btn-ghost">
                {dict.home.ctaSecondary}
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-sand pt-7">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-semibold text-walnut">{s.n}</dt>
                  <dd className="mt-1 text-xs leading-tight text-stone">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Collage de planos */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="card overflow-hidden">
              <FurnitureArt
                slug={featured[0].slug}
                accent={featured[0].accent}
                className="aspect-[4/3] w-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden w-40 rotate-[-4deg] sm:block">
              <div className="card overflow-hidden">
                <FurnitureArt
                  slug={featured[2].slug}
                  accent={featured[2].accent}
                  className="aspect-square w-full"
                />
              </div>
            </div>
            <div className="absolute -right-3 -top-5 hidden rotate-[5deg] sm:block">
              <div className="card flex items-center gap-2 px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-forest/10 text-forest">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <span className="text-xs leading-tight text-stone">
                  40–120 <span className="font-mono">min</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="edge py-8">
        <div className="grid gap-5 md:grid-cols-3">
          {dict.home.pillars.map((p, i) => {
            const Icon = PILLAR_ICONS[i];
            return (
              <div key={p.t} className="card p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-walnut/10 text-walnut">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 font-display text-xl font-semibold text-ink">{p.t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-stone">{p.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="edge py-16">
        <p className="kicker">{dict.home.howKicker}</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tightest text-ink sm:text-4xl">
          {dict.home.howTitle}
        </h2>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.home.how.map((step, i) => (
            <li key={step.t} className="relative rounded-2xl border border-sand bg-paper p-6">
              <span className="font-display text-4xl font-semibold text-sand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{step.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-stone">{step.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* DESTACADOS */}
      <section className="edge py-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="kicker">{dict.home.featuredKicker}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tightest text-ink sm:text-4xl">
              {dict.home.featuredTitle}
            </h2>
          </div>
          <Link
            href="/tutoriales"
            className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-walnut hover:text-ink sm:inline-flex"
          >
            {dict.home.featuredAll}
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((f) => (
            <TutorialCard key={f.slug} item={f} />
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <Link href="/tutoriales" className="btn-ghost w-full">
            {dict.home.featuredAll}
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* BANDA DE AYUDA */}
      <section className="edge py-16">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-7 py-12 text-cream sm:px-12">
          <span
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tightest sm:text-4xl">
                {dict.home.bandTitle}
              </h2>
              <p className="mt-3 max-w-xl text-cream/70">{dict.home.bandBody}</p>
            </div>
            <div className="lg:justify-self-end">
              <a
                href={whatsappLink(`Hola ${SITE.brand}, quiero el servicio de armado a domicilio.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-walnut text-cream hover:bg-paper hover:text-ink"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {dict.home.bandCta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
