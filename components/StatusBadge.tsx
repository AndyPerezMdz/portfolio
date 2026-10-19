import type { Tono } from "@/lib/proyectos";

export function StatusBadge({ texto, tono }: { texto: string; tono: Tono }) {
  return <span className={`badge badge-${tono}`}>● {texto.toUpperCase()}</span>;
}
