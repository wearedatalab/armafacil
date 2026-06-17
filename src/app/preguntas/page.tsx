import type { Metadata } from "next";
import { FaqCenter } from "@/components/FaqCenter";

export const metadata: Metadata = {
  title: "Preguntas frecuentes · FAQ",
  description:
    "Respuestas a las preguntas más comunes antes, durante y después de armar tus muebles.",
};

export default function Page() {
  return <FaqCenter />;
}
