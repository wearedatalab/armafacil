import type { Metadata } from "next";
import { TutorialsCatalog } from "@/components/TutorialsCatalog";

export const metadata: Metadata = {
  title: "Tutoriales · Tutorials",
  description:
    "Catálogo de tutoriales para armar tus muebles: videos paso a paso, documentos técnicos y preguntas frecuentes.",
};

export default function Page() {
  return <TutorialsCatalog />;
}
