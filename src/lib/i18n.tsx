"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { Lang, Loc } from "./content";

export type { Lang, Loc };

const LANG_KEY = "af_lang";

/* ------------------------------------------------------------------ */
/* Diccionario de interfaz                                             */
/* ------------------------------------------------------------------ */

export const UI = {
  es: {
    nav: {
      home: "Inicio",
      tutorials: "Tutoriales",
      faq: "Preguntas",
      help: "¿Necesitas ayuda?",
      skip: "Saltar al contenido",
    },
    home: {
      kicker: "Aprende a armar, a tu ritmo",
      title: "Arma tus muebles con confianza.",
      subtitle:
        "Tutoriales en video, documentos técnicos y respuestas claras para que montes cada mueble sin estrés. Paso a paso, en español e inglés.",
      ctaPrimary: "Ver tutoriales",
      ctaSecondary: "Preguntas frecuentes",
      statTutorials: "Muebles con guía",
      statVideos: "Videos paso a paso",
      statDocs: "Documentos técnicos",
      pillars: [
        {
          t: "Videos paso a paso",
          d: "Sigue el armado en pantalla, con el ritmo y los acercamientos que necesitas.",
        },
        {
          t: "Documentos técnicos",
          d: "Planos, fichas y listas de partes en PDF para descargar e imprimir.",
        },
        {
          t: "Respuestas claras",
          d: "Las dudas más comunes resueltas, sin tecnicismos y al grano.",
        },
      ],
      howKicker: "Cómo funciona",
      howTitle: "De la caja al mueble armado, en cuatro pasos.",
      how: [
        { t: "Elige tu mueble", d: "Busca tu modelo en el catálogo de tutoriales." },
        { t: "Revisa el plano", d: "Descarga la ficha técnica y verifica todas las piezas." },
        { t: "Sigue el video", d: "Arma a tu ritmo, pausando cuando lo necesites." },
        { t: "¿Dudas? Pregunta", d: "Consulta la sección de preguntas o escríbenos." },
      ],
      featuredKicker: "Empieza por aquí",
      featuredTitle: "Tutoriales destacados",
      featuredAll: "Ver todos los tutoriales",
      bandTitle: "¿Prefieres que lo armemos nosotros?",
      bandBody:
        "Si no quieres hacerlo tú, nuestro equipo arma tu mueble a domicilio. Coordinamos día, hora y presupuesto.",
      bandCta: "Escríbenos por WhatsApp",
    },
    tutorials: {
      kicker: "Catálogo de tutoriales",
      title: "Encuentra tu mueble y aprende a armarlo.",
      subtitle:
        "Cada guía incluye video, documentos técnicos y las preguntas más frecuentes de ese mueble.",
      searchPh: "Busca un mueble…",
      all: "Todos",
      empty: "No encontramos muebles con ese filtro.",
      resultsOne: "mueble",
      resultsMany: "muebles",
    },
    detail: {
      back: "Tutoriales",
      home: "Inicio",
      overview: "Resumen",
      time: "Tiempo",
      people: "Personas",
      parts: "Piezas",
      difficulty: "Dificultad",
      min: "min",
      person: "persona",
      peoplePlural: "personas",
      toolsTitle: "Herramientas que necesitas",
      stepsTitle: "Pasos principales",
      videosTitle: "Tutoriales en video",
      docsTitle: "Documentos técnicos",
      faqTitle: "Preguntas sobre este mueble",
      download: "Descargar",
      pdfPages: "págs.",
      watch: "Reproducir",
      helpTitle: "¿Te quedaste atascado?",
      helpBody: "Escríbenos y te ayudamos con tu armado, o pide el servicio a domicilio.",
      helpCta: "Pedir ayuda por WhatsApp",
      otherTitle: "Otros tutoriales",
    },
    faq: {
      kicker: "Centro de ayuda",
      title: "Preguntas frecuentes",
      subtitle:
        "Lo que más nos preguntan antes, durante y después del armado. ¿No encuentras tu respuesta? Escríbenos.",
      searchPh: "Busca tu pregunta…",
      empty: "No encontramos preguntas con esa búsqueda.",
      stillTitle: "¿No resolviste tu duda?",
      stillBody: "Escríbenos por WhatsApp con el nombre de tu mueble y te ayudamos enseguida.",
      stillCta: "Escríbenos por WhatsApp",
    },
    difficulty: { 1: "Fácil", 2: "Media", 3: "Avanzada" } as Record<number, string>,
    footer: {
      tagline: "Educamos para que armar tu mueble sea fácil.",
      nav: "Navega",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
      langLabel: "Idioma",
    },
    common: {
      videoNote: "Contenido de ejemplo — reemplaza con tus videos reales.",
      docNote: "PDF de ejemplo para demostrar la descarga.",
    },
  },
  en: {
    nav: {
      home: "Home",
      tutorials: "Tutorials",
      faq: "FAQ",
      help: "Need help?",
      skip: "Skip to content",
    },
    home: {
      kicker: "Learn to assemble, at your own pace",
      title: "Assemble your furniture with confidence.",
      subtitle:
        "Video tutorials, technical documents and clear answers so you can put together each piece stress-free. Step by step, in Spanish and English.",
      ctaPrimary: "Browse tutorials",
      ctaSecondary: "Frequent questions",
      statTutorials: "Furniture guides",
      statVideos: "Step-by-step videos",
      statDocs: "Technical documents",
      pillars: [
        {
          t: "Step-by-step videos",
          d: "Follow the build on screen, at the pace and close-ups you need.",
        },
        {
          t: "Technical documents",
          d: "Diagrams, spec sheets and parts lists as PDFs to download and print.",
        },
        {
          t: "Clear answers",
          d: "The most common questions solved, jargon-free and to the point.",
        },
      ],
      howKicker: "How it works",
      howTitle: "From the box to the finished piece, in four steps.",
      how: [
        { t: "Pick your furniture", d: "Find your model in the tutorials catalog." },
        { t: "Check the diagram", d: "Download the spec sheet and verify every part." },
        { t: "Follow the video", d: "Build at your own pace, pausing whenever you need." },
        { t: "Questions? Ask", d: "Check the FAQ section or message us." },
      ],
      featuredKicker: "Start here",
      featuredTitle: "Featured tutorials",
      featuredAll: "See all tutorials",
      bandTitle: "Rather we assemble it for you?",
      bandBody:
        "If you'd rather not do it yourself, our team assembles your furniture at home. We arrange the day, time and quote.",
      bandCta: "Message us on WhatsApp",
    },
    tutorials: {
      kicker: "Tutorials catalog",
      title: "Find your furniture and learn to assemble it.",
      subtitle:
        "Each guide includes a video, technical documents and that piece's most frequent questions.",
      searchPh: "Search for furniture…",
      all: "All",
      empty: "We couldn't find furniture with that filter.",
      resultsOne: "item",
      resultsMany: "items",
    },
    detail: {
      back: "Tutorials",
      home: "Home",
      overview: "Overview",
      time: "Time",
      people: "People",
      parts: "Parts",
      difficulty: "Difficulty",
      min: "min",
      person: "person",
      peoplePlural: "people",
      toolsTitle: "Tools you'll need",
      stepsTitle: "Main steps",
      videosTitle: "Video tutorials",
      docsTitle: "Technical documents",
      faqTitle: "Questions about this piece",
      download: "Download",
      pdfPages: "pages",
      watch: "Play",
      helpTitle: "Stuck somewhere?",
      helpBody: "Message us and we'll help with your build, or request in-home assembly.",
      helpCta: "Get help on WhatsApp",
      otherTitle: "Other tutorials",
    },
    faq: {
      kicker: "Help center",
      title: "Frequently asked questions",
      subtitle:
        "What we're asked most before, during and after assembly. Can't find your answer? Message us.",
      searchPh: "Search your question…",
      empty: "We couldn't find questions for that search.",
      stillTitle: "Didn't solve your doubt?",
      stillBody: "Message us on WhatsApp with the name of your furniture and we'll help right away.",
      stillCta: "Message us on WhatsApp",
    },
    difficulty: { 1: "Easy", 2: "Medium", 3: "Advanced" } as Record<number, string>,
    footer: {
      tagline: "We teach so assembling your furniture is easy.",
      nav: "Navigate",
      contact: "Contact",
      rights: "All rights reserved.",
      langLabel: "Language",
    },
    common: {
      videoNote: "Sample content — replace with your real videos.",
      docNote: "Sample PDF to demonstrate the download.",
    },
  },
} as const;

export type Dict = (typeof UI)["es"];

/* ------------------------------------------------------------------ */
/* Proveedor de idioma (cliente)                                       */
/* ------------------------------------------------------------------ */

interface LangValue {
  lang: Lang;
  dict: Dict;
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** Resuelve un campo bilingüe { es, en } al idioma actual. */
  t: (loc: Loc) => string;
}

const LangContext = createContext<LangValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  // Restaura el idioma guardado al montar.
  useEffect(() => {
    const saved =
      (typeof window !== "undefined" && window.localStorage.getItem(LANG_KEY)) || "";
    if (saved === "es" || saved === "en") setLangState(saved);
    else if (typeof navigator !== "undefined" && navigator.language.startsWith("en"))
      setLangState("en");
  }, []);

  // Mantiene <html lang> sincronizado.
  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem(LANG_KEY, l);
  }, []);

  const toggle = useCallback(() => setLang(lang === "es" ? "en" : "es"), [lang, setLang]);

  const t = useCallback((loc: Loc) => loc[lang], [lang]);

  const value: LangValue = { lang, dict: UI[lang] as Dict, setLang, toggle, t };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang debe usarse dentro de LanguageProvider");
  return ctx;
}
