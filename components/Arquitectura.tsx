import type { ReactNode } from "react";
import { Arrow } from "./Arrow";

export type Caja = { titulo: string; sub?: string; punteada?: boolean };

function Cajas({ etiqueta, cajas }: { etiqueta: string; cajas: Caja[] }) {
  return (
    <div className="dg-col">
      <span className="dg-label">{etiqueta}</span>
      {cajas.map((c) => (
        <div key={c.titulo} className={c.punteada ? "dg-box dashed" : "dg-box"}>
          <span>{c.titulo}</span>
          {c.sub ? <span className="dg-sub">{c.sub}</span> : null}
        </div>
      ))}
    </div>
  );
}

export function Arquitectura({
  figura,
  usuarios,
  servicios,
  app,
}: {
  figura: string;
  usuarios: Caja[];
  servicios: Caja[];
  app: { titulo: string; etiqueta: string; contenido: ReactNode };
}) {
  return (
    <figure className="diagram gridbg">
      <div className="dg-flow">
        <Cajas etiqueta="USUARIOS" cajas={usuarios} />
        <Arrow />
        <div className="dg-core">
          <div className="dg-core-head">
            <span className="dg-core-title">{app.titulo}</span>
            <span className="dg-core-tag">{app.etiqueta}</span>
          </div>
          {app.contenido}
        </div>
        <Arrow />
        <Cajas etiqueta="SERVICIOS" cajas={servicios} />
      </div>
      <figcaption className="dg-caption">
        <span>{figura}</span>
        <span>LÍNEA CONTINUA: NÚCLEO · LÍNEA PUNTEADA: INTEGRACIÓN</span>
      </figcaption>
    </figure>
  );
}

export function Chips({ items }: { items: { t: string; punteada?: boolean }[] }) {
  return (
    <div className="chips">
      {items.map((i) => (
        <span key={i.t} className={i.punteada ? "chip dashed" : "chip"}>
          {i.t}
        </span>
      ))}
    </div>
  );
}
