import { site } from "@/lib/site";

export function TitleBlock({ hoja }: { hoja: number }) {
  const celdas: [string, string, boolean?][] = [
    ["PROYECTO", "Portafolio profesional"],
    ["AUTOR", site.nombre],
    ["DISCIPLINA", "Ing. de Software"],
    ["ESCALA", "1:1"],
    ["HOJA", `${String(hoja).padStart(2, "0")} / ${String(site.totalHojas).padStart(2, "0")}`],
    ["REV.", site.revision, true],
  ];
  return (
    <footer className="footer gutter">
      <div className="titleblock">
        {celdas.map(([k, v, acento]) => (
          <div key={k} className="tb-cell">
            <span className="tb-label">{k}</span>
            <span className={acento ? "tb-value accent" : "tb-value"}>{v}</span>
          </div>
        ))}
      </div>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} {site.nombre}</span>
        <span>MÉRIDA, YUCATÁN — {site.coordenadas}</span>
      </div>
    </footer>
  );
}
