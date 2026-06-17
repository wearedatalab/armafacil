// Genera PDFs de ejemplo válidos (sin dependencias) para los documentos técnicos.
// Uso: node scripts/gen-pdfs.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "docs");
mkdirSync(outDir, { recursive: true });

const DOCS = [
  ["closet-nordico-ficha.pdf", "Ficha tecnica - Closet Nordico 4 puertas"],
  ["closet-nordico-partes.pdf", "Lista de partes - Closet Nordico 4 puertas"],
  ["cama-tarima-ficha.pdf", "Ficha tecnica - Cama Tarima Queen"],
  ["cama-tarima-partes.pdf", "Lista de partes - Cama Tarima Queen"],
  ["escritorio-l-ficha.pdf", "Ficha tecnica - Escritorio en L"],
  ["escritorio-l-partes.pdf", "Lista de partes - Escritorio en L"],
  ["biblioteca-5-ficha.pdf", "Ficha tecnica - Biblioteca 5 niveles"],
  ["biblioteca-5-partes.pdf", "Lista de partes - Biblioteca 5 niveles"],
  ["mesa-comedor-ficha.pdf", "Ficha tecnica - Mesa de Comedor Roble"],
  ["mesa-comedor-partes.pdf", "Lista de partes - Mesa de Comedor Roble"],
  ["comoda-6-ficha.pdf", "Ficha tecnica - Comoda 6 cajones"],
  ["comoda-6-partes.pdf", "Lista de partes - Comoda 6 cajones"],
];

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

function buildPdf(title) {
  const lines = [
    ["/F1 22 Tf", "ArmaFacil", 22],
    ["/F1 15 Tf", title, 26],
    ["/F1 11 Tf", "Documento de ejemplo. Reemplazar por el PDF tecnico real.", 22],
    ["/F1 11 Tf", "Example document. Replace with the real technical PDF.", 30],
    ["/F1 10 Tf", "1. Verifica todas las piezas con la lista de partes.", 16],
    ["/F1 10 Tf", "2. Sigue el video paso a paso del tutorial.", 16],
    ["/F1 10 Tf", "3. Ancla los muebles altos a la pared por seguridad.", 16],
  ];

  let content = "BT\n60 780 Td\n";
  let first = true;
  for (const [font, text, lead] of lines) {
    content += `${font}\n`;
    if (!first) content += `0 -${lead} Td\n`;
    content += `(${esc(text)}) Tj\n`;
    first = false;
  }
  content += "ET";

  const objs = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${Buffer.byteLength(content, "latin1")} >>\nstream\n${content}\nendstream`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [];
  objs.forEach((body, i) => {
    offsets.push(Buffer.byteLength(pdf, "latin1"));
    pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
  });

  const xrefPos = Buffer.byteLength(pdf, "latin1");
  pdf += `xref\n0 ${objs.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  for (const off of offsets) {
    pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`;

  return Buffer.from(pdf, "latin1");
}

for (const [file, title] of DOCS) {
  writeFileSync(join(outDir, file), buildPdf(title));
  console.log("wrote", file);
}
console.log(`\nDone: ${DOCS.length} PDFs in public/docs`);
