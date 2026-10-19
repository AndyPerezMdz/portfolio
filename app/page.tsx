import Link from "next/link";
import { Ruler } from "@/components/Ruler";
import { Nav } from "@/components/Nav";
import { SectionHead } from "@/components/SectionHead";
import { Contact } from "@/components/Contact";
import { TitleBlock } from "@/components/TitleBlock";
import { StatusBadge } from "@/components/StatusBadge";
import { proyectos } from "@/lib/proyectos";

const datos: [string, React.ReactNode][] = [
  ["BASE", "Mérida, Yucatán, MX"],
  ["FORMACIÓN", "Ing. en Desarrollo y Gestión de Software"],
  ["MÉTODO", "Desarrollo en pareja con IA"],
  [
    "ESTADO",
    <span key="e" className="live">
      <span className="dot" aria-hidden="true" />
      Disponible para proyectos
    </span>,
  ],
];

export default function Inicio() {
  return (
    <div className="page">
      <Ruler />
      <Nav />
      <header className="hero gridbg">
        <span className="fig-tag">FIG. 00 — PORTADA</span>
        <div className="hero-inner gutter">
          <div className="kicker">// INGENIERO DE SOFTWARE — MÉRIDA, MX</div>
          <h1>Software a la medida, de la base de datos a la interfaz.</h1>
          <p className="mono-body hero-lead">
            Diseño y construyo aplicaciones web y plataformas SaaS, de la idea al despliegue — con una IA como compañera
            de programación.
          </p>
          <div className="btn-row">
            <a href="#trabajo" className="btn btn-primary">
              [ VER PROYECTOS ]
            </a>
            <Link href="/perfil" className="btn btn-ghost">
              [ SOBRE MÍ ]
            </Link>
          </div>
        </div>
        <div className="strip-wrap gutter">
          <dl className="strip">
            {datos.map(([k, v]) => (
              <div key={k} className="strip-cell">
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section id="trabajo" className="block gutter">
        <SectionHead num="01" titulo="Proyectos" nota={`${String(proyectos.length).padStart(2, "0")} REGISTROS — SIN CÓDIGO NI CAPTURAS DE CLIENTES`} />
        <div className="cards">
          {proyectos.map((p) => (
            <Link key={p.slug} href={`/proyectos/${p.slug}`} className="card">
              <div className="card-top">
                <span className="mono-label">{p.codigo}</span>
                <StatusBadge {...p.estado} />
              </div>
              <h3 className="card-title">{p.titulo}</h3>
              <p className="card-text">{p.resumen}</p>
              <dl className="card-spec">
                <div><dt>STACK:</dt> <dd>{p.tarjeta.stack}</dd></div>
                <div><dt>TIPO:</dt> <dd>{p.tarjeta.tipo}</dd></div>
                <div><dt>ROL:</dt> <dd>{p.tarjeta.rol}</dd></div>
              </dl>
              <span className="card-open">ABRIR FICHA →</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="sobre-mi" className="block split gutter bordered">
        <SectionHead num="02" titulo="Perfil" />
        <div className="split-body">
          <p className="lead">
            Soy Andrés Pérez, ingeniero de software full-stack. Construyo software de principio a fin — base de datos,
            backend e interfaz — sin importar el giro ni el tamaño del proyecto, programando en pareja con una IA.
          </p>
          <Link href="/perfil" className="textlink">
            [ LEER PERFIL COMPLETO → ]
          </Link>
        </div>
      </section>

      <Contact />
      <TitleBlock hoja={1} />
    </div>
  );
}
