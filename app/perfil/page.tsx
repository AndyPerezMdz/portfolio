import type { Metadata } from "next";
import { Ruler } from "@/components/Ruler";
import { Nav } from "@/components/Nav";
import { SectionHead } from "@/components/SectionHead";
import { Contact } from "@/components/Contact";
import { TitleBlock } from "@/components/TitleBlock";

export const metadata: Metadata = {
  title: "Perfil",
  description: "Andrés Pérez — ingeniero de software full-stack en Mérida, Yucatán. Formación, stack y forma de trabajo.",
};

const formacion = [
  {
    periodo: "2025 — 2027",
    programa: "Ingeniería en Desarrollo y Gestión de Software",
    institucion: "Universidad Tecnológica Metropolitana",
    estado: "● EN CURSO — TITULACIÓN PREVISTA ENE 2027",
    tono: "accent",
  },
  {
    periodo: "2023 — 2025",
    programa: "Carrera Técnica en Desarrollo de Software Multiplataforma",
    institucion: "Universidad Tecnológica Metropolitana",
    estado: "● CONCLUIDA",
    tono: "ok",
  },
];

const stack = [
  { grupo: "A — INTERFAZ", items: ["Next.js (App Router)", "React", "HTML / CSS", "Diseño responsivo"] },
  { grupo: "B — DATOS Y BACKEND", items: ["Supabase", "PostgreSQL", "Row Level Security", "Auth y Storage"] },
  { grupo: "C — INFRAESTRUCTURA", items: ["Vercel", "Git / GitHub", "Web Push (VAPID)", "Correo transaccional"] },
  { grupo: "D — DESARROLLO CON IA", items: ["Programación en pareja con IA", "Prototipado rápido", "Revisión y depuración asistida", "Asistentes con IA en producción"] },
];

const pasos = [
  { t: "Entender el problema", d: "Antes de escribir código, entiendo qué hay que resolver, para quién y qué lo hace difícil hoy." },
  { t: "Proponer por fases", d: "Un documento claro con alcance, fases y prioridades. Primero lo que más duele." },
  { t: "Construir y desplegar pronto", d: "Una versión funcionando en línea desde la primera fase, para probarla con usuarios reales." },
  { t: "Dejar el control al cliente", d: "Paneles para que el cliente administre sus propios datos y manuales por rol. Sin depender de mí para cada cambio." },
];

export default function Perfil() {
  return (
    <div className="page">
      <Ruler />
      <Nav activo="perfil" />

      <header className="profile-head gridbg gutter">
        <span className="fig-tag">FIG. 02 — PERFIL</span>
        <div className="profile-copy">
          <div className="kicker">// PERFIL — INGENIERO DE SOFTWARE</div>
          <h1 className="display-xl">Andrés Pérez</h1>
          <p className="lead-lg">
            Construyo software completo, desde el modelo de datos y la seguridad hasta la última pantalla que usa el
            cliente: aplicaciones web, plataformas SaaS y herramientas internas.
          </p>
          <div className="meta-line">
            <span>MÉRIDA, YUC.</span>
            <span aria-hidden="true">—</span>
            <span>FULL-STACK · DESARROLLO CON IA</span>
            <span aria-hidden="true">—</span>
            <span className="ok">● DISPONIBLE</span>
          </div>
        </div>
      </header>

      <section className="block split gutter bordered-b">
        <SectionHead num="01" titulo="Sobre mí" />
        <div className="split-body prose">
          <p>
            Estoy por titularme como Ingeniero en Desarrollo y Gestión de Software. Antes cursé la Carrera Técnica en
            Desarrollo de Software Multiplataforma, así que llevo varios años del lado práctico del código.
          </p>
          <p>
            Hoy tengo dos sistemas en producción. El primero es la plataforma de un taller de tapicería automotriz en
            Mérida: cotizaciones, pedidos, citas, fidelización y un asistente con IA, donde me encargué del desarrollo
            full-stack. El segundo es un producto propio: una agenda por suscripción para estudiantes de odontología, que
            diseñé, construyo y vendo.
          </p>
          <p>
            No me limito a un giro: he construido plataformas de gestión y productos por suscripción, y me interesa
            cualquier problema que se pueda resolver con buen software.
          </p>
          <p>
            Programo en pareja con una IA. Yo defino el problema, la arquitectura y cada decisión; ella me ayuda a
            escribir, revisar y depurar más rápido. Así entrego sistemas completos en menos tiempo, sin soltar el
            control de la calidad.
          </p>
        </div>
      </section>

      <section className="block split gutter bordered-b">
        <SectionHead num="02" titulo="Formación" />
        <div className="split-body">
          <div className="table">
            <div className="table-row table-head">
              <span>PERIODO</span>
              <span>PROGRAMA</span>
              <span>ESTADO</span>
            </div>
            {formacion.map((f) => (
              <div key={f.programa} className="table-row">
                <span className="mono-muted">{f.periodo}</span>
                <div className="stack-6">
                  <span className="row-title">{f.programa}</span>
                  {f.institucion ? <span className="mono-muted">{f.institucion}</span> : null}
                </div>
                <span className={`mono-sm ${f.tono}`}>{f.estado}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block gutter bordered-b">
        <SectionHead num="03" titulo="Stack y herramientas" nota="USADO EN PRODUCCIÓN" />
        <div className="grid-cells cols-4">
          {stack.map((s) => (
            <div key={s.grupo} className="cell">
              <span className="mono-label accent">{s.grupo}</span>
              <ul className="plain-list">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="block gutter bordered-b">
        <SectionHead num="04" titulo="Cómo trabajo" />
        <ol className="steps">
          {pasos.map((p, i) => (
            <li key={p.t} className={i === 0 ? "step first" : "step"}>
              <span className="mono-label">PASO_{String(i + 1).padStart(2, "0")}</span>
              <span className="step-title">{p.t}</span>
              <p>{p.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="block split gutter">
        <SectionHead num="05" titulo="Fuera del código" />
        <div className="split-body prose">
          <p>
            También hago cine documental y proyectos creativos. Me dejó un hábito que aplico al software: entender
            primero a las personas, y después contar su historia con cuidado.
          </p>
        </div>
      </section>

      <Contact />
      <TitleBlock hoja={2} />
    </div>
  );
}
