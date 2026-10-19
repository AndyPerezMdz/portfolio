import { Arquitectura, Chips } from "./Arquitectura";

export function DiagramaNovo() {
  return (
    <Arquitectura
      figura="FIG. 03 — ARQUITECTURA GENERAL (SIMPLIFICADA)"
      usuarios={[{ titulo: "Clientes" }, { titulo: "Personal del taller" }, { titulo: "Administración" }]}
      app={{
        titulo: "Aplicación web",
        etiqueta: "NEXT.JS · VERCEL",
        contenido: (
          <Chips
            items={[{ t: "Sitio público" }, { t: "Portales por rol" }, { t: "Cotizador" }, { t: "Asistente “Novi”" }]}
          />
        ),
      }}
      servicios={[
        { titulo: "Supabase", sub: "Auth · PostgreSQL + RLS · Storage" },
        { titulo: "Web Push (VAPID)", punteada: true },
        { titulo: "Modelo de IA", punteada: true },
        { titulo: "Correo", punteada: true },
      ]}
    />
  );
}

export function DiagramaAgendas() {
  return (
    <Arquitectura
      figura="FIG. 04 — ARQUITECTURA GENERAL (SIMPLIFICADA)"
      usuarios={[
        { titulo: "Dueña de la agenda", sub: "Se registra y paga" },
        { titulo: "Acompañante", sub: "Una por cuatrimestre" },
        { titulo: "Administración", sub: "Pagos, códigos, invitaciones" },
      ]}
      app={{
        titulo: "Aplicación web",
        etiqueta: "NEXT.JS · VERCEL",
        contenido: (
          <>
            <div className="dg-group">
              <span className="dg-label">AGENDA ODONTOLÓGICA</span>
              <Chips items={[{ t: "Variante UPP" }, { t: "Variante UADY" }]} />
            </div>
            <Chips items={[{ t: "Agenda personal", punteada: true }, { t: "Panel de administración" }]} />
          </>
        ),
      }}
      servicios={[
        { titulo: "Supabase", sub: "Auth · PostgreSQL + RLS" },
        { titulo: "Correo", sub: "Códigos e invitaciones", punteada: true },
        { titulo: "Transferencia SPEI", sub: "Cobro de planes", punteada: true },
      ]}
    />
  );
}
