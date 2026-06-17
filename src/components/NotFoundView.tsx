"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { ArrowIcon } from "./Icons";

export function NotFoundView() {
  const { lang } = useLang();
  const copy =
    lang === "es"
      ? {
          kicker: "Error 404",
          title: "Esta pieza no encaja aquí.",
          body: "La página que buscas no existe — pero sí tenemos tutoriales para armar tus muebles.",
          cta: "Ver tutoriales",
        }
      : {
          kicker: "Error 404",
          title: "This part doesn't fit here.",
          body: "The page you're looking for doesn't exist — but we do have tutorials to assemble your furniture.",
          cta: "Browse tutorials",
        };

  return (
    <div className="edge flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="kicker">{copy.kicker}</p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tightest text-ink sm:text-6xl">
        {copy.title}
      </h1>
      <p className="mt-4 max-w-md text-stone">{copy.body}</p>
      <Link href="/tutoriales" className="btn-primary mt-8">
        {copy.cta}
        <ArrowIcon className="h-4 w-4" />
      </Link>
    </div>
  );
}
