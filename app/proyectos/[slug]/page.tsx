import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Ruler } from "@/components/Ruler";
import { Nav } from "@/components/Nav";
import { SectionHead } from "@/components/SectionHead";
import { Contact } from "@/components/Contact";
import { TitleBlock } from "@/components/TitleBlock";
import { StatusBadge } from "@/components/StatusBadge";
import { DiagramaAgendas, DiagramaNovo } from "@/components/Diagramas";
import { getProyecto, proyectos } from "@/lib/proyectos";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProyecto(slug);
  if (!p) return {};
  return { title: p.titulo, description: p.lead };
}

const diagramas = { novo: DiagramaNovo, agendas: DiagramaAgendas };

export default async function Ficha({ params }: Props) {
  const { slug } = await params;
  const p = getProyecto(slug);
  if (!p) notFound();

  const i = proyectos.findIndex((x) => x.slug === p.slug);
  const anterior = proyectos[i - 1];
  const siguiente = proyectos[i + 1];
  const Diagrama = diagramas[p.slug];
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="page">
      <Ruler />
      <Nav activo="trabajo" />

      <header className="case-head gutter">
        <div className="crumbs">
          <Link href="/#trabajo" className="navlink">TRABAJO</Link>
          <span aria-hidden="true">/</span>
          <span className="ink">{p.codigo}</span>
        </div>
        <div className="case-grid">
          <div className="case-copy">
            {p.kicker ? <div className="kicker">{p.kicker.toUpperCase()}</div> : null}
            <h1>{p.titulo}</h1>
            <p className="lead-lg">{p.lead}</p>
          </div>
          <dl className="spec-table">
            <div className="spec-row">
              <dt>ESTADO</dt>
              <dd className={p.estado.tono}>● {p.estado.texto}</dd>
            </div>
            {p.ficha.map(([k, v]) => (
              <div key={k} className="spec-row">
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section className="block split gutter bordered-b">
        <SectionHead num="01" titulo="Contexto" />
        <div className="split-body prose">
          {p.contexto.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </section>

      <section className="block gutter bordered-b">
        <SectionHead num="02" titulo="Arquitectura" nota={p.notaDiagrama.toUpperCase()} />
        <Diagrama />
      </section>

      <section className="block gutter bordered-b">
        <SectionHead num="03" titulo="Módulos" nota={`${pad(p.modulos.length)} MÓDULOS`} />
        <div className="grid-cells cols-3">
          {p.modulos.map((m, n) => (
            <div key={m.titulo} className="cell">
              <span className="mono-label accent">M-{pad(n + 1)}</span>
              <h3 className="cell-title">{m.titulo}</h3>
              <p className="cell-text">{m.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="block split gutter bordered-b">
        <SectionHead num="04" titulo={p.tituloDecisiones} />
        <div className="split-body">
          <ol className="decisions">
            {p.decisiones.map((d, n) => (
              <li key={d.titulo} className="decision">
                <span className="mono-label accent">D-{pad(n + 1)}</span>
                <div className="stack-6">
                  <h3 className="row-title">{d.titulo}</h3>
                  <p className="cell-text">{d.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block split gutter">
        <SectionHead num="05" titulo="Estado" />
        <div className="split-body">
          {p.fases ? (
            <div className="grid-cells cols-3 phases">
              {p.fases.map((f) => (
                <div key={f.titulo} className={`cell phase phase-${f.tono}`}>
                  <span className={`mono-label ${f.tono}`}>{f.etiqueta}</span>
                  <span className="row-title">{f.titulo}</span>
                  <span className="mono-sm muted-body">{f.texto}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="prose">
              <p>{p.estadoTexto}</p>
              <StatusBadge {...p.estado} />
            </div>
          )}
        </div>
      </section>

      <nav className="pager gutter" aria-label="Proyectos">
        <div className="pager-grid">
          {anterior ? (
            <Link href={`/proyectos/${anterior.slug}`} className="pager-link">
              <span className="mono-label">← ANTERIOR · {anterior.codigo}</span>
              <span>{anterior.titulo}</span>
            </Link>
          ) : (
            <Link href="/#trabajo" className="pager-link">
              <span className="mono-label">← VOLVER</span>
              <span>Todos los proyectos</span>
            </Link>
          )}
          {siguiente ? (
            <Link href={`/proyectos/${siguiente.slug}`} className="pager-link end">
              <span className="mono-label">SIGUIENTE → {siguiente.codigo}</span>
              <span>{siguiente.titulo}</span>
            </Link>
          ) : (
            <Link href="/#trabajo" className="pager-link end">
              <span className="mono-label">VOLVER →</span>
              <span>Todos los proyectos</span>
            </Link>
          )}
        </div>
      </nav>

      <Contact />
      <TitleBlock hoja={p.hoja} />
    </div>
  );
}
