import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FURNITURE, getFurniture } from "@/lib/content";
import { TutorialDetail } from "@/components/TutorialDetail";

export function generateStaticParams() {
  return FURNITURE.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getFurniture(slug);
  if (!item) return {};
  return {
    title: `${item.title.es} · ${item.title.en}`,
    description: item.summary.es,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getFurniture(slug);
  if (!item) notFound();
  return <TutorialDetail item={item} />;
}
