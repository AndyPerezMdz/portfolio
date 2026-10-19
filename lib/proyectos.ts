export type Tono = "ok" | "accent" | "muted";

export type Bloque = { titulo: string; texto: string };

export type Fase = { etiqueta: string; tono: Tono; titulo: string; texto: string };

export type Proyecto = {
  slug: "novo" | "agendas";
  codigo: string;
  hoja: number;
  titulo: string;
  kicker?: string;
  resumen: string; // tarjeta en el inicio
  lead: string; // párrafo del encabezado de la ficha
  estado: { texto: string; tono: Tono };
  tarjeta: { stack: string; tipo: string; rol: string };
  ficha: [string, string][]; // tabla de especificaciones
  contexto: string[];
  notaDiagrama: string;
  modulos: Bloque[];
  tituloDecisiones: string;
  decisiones: Bloque[];
  estadoTexto?: string;
  fases?: Fase[];
};

export const proyectos: Proyecto[] = [
  {
    slug: "novo",
    codigo: "PROYECTO_01",
    hoja: 3,
    titulo: "Tapicería Automotriz by NOVO",
    resumen:
      "Plataforma de gestión completa para un taller de tapicería automotriz: cotizaciones en línea, seguimiento de pedidos, fidelización y un asistente con IA.",
    lead:
      "Plataforma de gestión completa para un taller de tapicería automotriz: del primer precio que pide un cliente hasta que recoge su vehículo — y lo que lo hace volver.",
    estado: { texto: "En producción", tono: "ok" },
    tarjeta: {
      stack: "Next.js / Supabase / IA",
      tipo: "Plataforma web completa",
      rol: "Desarrollo full-stack",
    },
    ficha: [
      ["CLIENTE", "Taller familiar — Mérida, Yuc."],
      ["TIPO", "Plataforma web completa"],
      ["ROL", "Desarrollo full-stack"],
      ["STACK", "Next.js / Supabase / IA"],
      ["USUARIOS", "Clientes · Personal · Administración"],
    ],
    contexto: [
      "Un taller de tapicería automotriz en Mérida necesitaba ordenar todo lo que pasa entre que un cliente pregunta un precio y recoge su vehículo: cotizaciones, pedidos, citas y seguimiento.",
      "El reto no era solo el sistema interno. También había que darle al cliente una forma de ver su pedido sin llamar, y motivos para regresar.",
    ],
    notaDiagrama: "Diagrama en lugar de capturas — el sistema maneja datos reales de clientes",
    modulos: [
      { titulo: "Cotizaciones en línea", texto: "Pedidos con varios servicios y precio por partida, con vista previa del descuento antes de enviar." },
      { titulo: "Seguimiento de pedidos", texto: "El cliente consulta el avance de su pedido desde su propio portal." },
      { titulo: "Citas", texto: "Agenda administrada por el personal: crear, editar y cancelar citas." },
      { titulo: "Puntos de lealtad", texto: "Puntos por cada pedido entregado, canjeables por cupones personales." },
      { titulo: "Cupones y referidos", texto: "Cupones gestionados por el personal y un programa de referidos para nuevos clientes." },
      { titulo: "Asistente con IA", texto: "“Novi” responde dudas y personaliza sus respuestas según quién inició sesión." },
      { titulo: "Notificaciones push", texto: "Avisos de pedidos, citas y promociones como alternativa gratuita al SMS." },
      { titulo: "Campañas de correo", texto: "Correos promocionales con vista previa en vivo para el personal." },
      { titulo: "Portales y manuales por rol", texto: "Cada rol tiene su portal, sus permisos y su propio manual en PDF." },
    ],
    tituloDecisiones: "Decisiones técnicas",
    decisiones: [
      { titulo: "Seguridad en la base de datos, no solo en la interfaz", texto: "Políticas RLS en PostgreSQL y funciones controladas para las operaciones sensibles. Cada rol ve solo lo que le toca." },
      { titulo: "Notificaciones sin costo por mensaje", texto: "Web Push en lugar de SMS: el taller avisa a sus clientes sin pagar por cada envío." },
      { titulo: "Un historial que no se pierde", texto: "Al dar de baja una cuenta del personal, los registros que creó se conservan para auditoría." },
      { titulo: "Contenido sanitizado", texto: "Todo lo que el personal escribe para correos promocionales se limpia antes de enviarse, para evitar inyección de código." },
    ],
    estadoTexto: "En producción y en uso por el personal y los clientes del taller.",
  },
  {
    slug: "agendas",
    codigo: "PROYECTO_02",
    hoja: 4,
    titulo: "Agendas",
    kicker: "// Producto propio",
    resumen:
      "Producto por suscripción: una agenda compartida para que estudiantes de odontología organicen a sus pacientes en clínica, más una agenda personal por invitación.",
    lead:
      "Empezó como una agenda compartida para dos estudiantes de odontología y hoy es un producto por suscripción, con una agenda personal aparte.",
    estado: { texto: "En producción", tono: "ok" },
    tarjeta: {
      stack: "Next.js / Supabase / Vercel",
      tipo: "SaaS por suscripción",
      rol: "Producto y desarrollo full-stack",
    },
    ficha: [
      ["MERCADO", "Estudiantes de odontología"],
      ["UNIVERSIDADES", "UPP · UADY"],
      ["TIPO", "SaaS por suscripción"],
      ["ROL", "Producto y desarrollo full-stack"],
      ["STACK", "Next.js / Supabase / Vercel"],
    ],
    contexto: [
      "En la carrera de odontología, los estudiantes atienden pacientes en clínica en parejas. Tienen que ponerse de acuerdo en qué días están libres y apartar cada cita: paciente, fecha, hora, número de clínica y materia.",
      "Las parejas cambian cada cuatrimestre y cada universidad organiza sus clínicas a su manera. Una agenda genérica no sirve: había que construir una que entendiera esas reglas.",
    ],
    notaDiagrama: "Diagrama en lugar de capturas — la agenda guarda datos de pacientes",
    modulos: [
      { titulo: "Citas de pacientes", texto: "Paciente, fecha, hora, clínica y materia. Las dos ven todo; solo quien creó la cita puede editarla." },
      { titulo: "Agenda en pareja", texto: "La dueña invita a su acompañante por correo o con un enlace. Cada cuatrimestre decide si sigue." },
      { titulo: "Registro verificado", texto: "Cada quien se registra sola y confirma su cuenta con un código de 6 dígitos que llega a su correo." },
      { titulo: "Interfaz por universidad", texto: "La universidad se elige al registrarse y define la agenda. La de la UADY maneja semestres, turnos y material." },
      { titulo: "Catálogos y personalización", texto: "Clínicas y materias editables, y un botón “Personalizar” para ajustar la agenda sin tocar código." },
      { titulo: "Planes y prueba gratis", texto: "Modelo Gratis / Pro con planes de mensual a anual: entre más largo el plan, más barato. Prueba de 15 días." },
      { titulo: "Códigos de creador", texto: "Códigos para creadoras de contenido de odontología que dan 15 días extra a quien los usa." },
      { titulo: "Panel de administración", texto: "Mi vista para seguir agendas, pagos por transferencia e invitaciones a la agenda personal." },
      { titulo: "Agenda personal", texto: "Solo por invitación: viajes, cursos, entregas y recordatorios. Con la misma cuenta se cambia entre las dos agendas." },
    ],
    tituloDecisiones: "Decisiones de producto y técnicas",
    decisiones: [
      { titulo: "Autoregistro en lugar de invitaciones", texto: "Que cada clienta se registre con un código por correo depende menos de que llegue un correo de invitación, y no me pone a mí en medio de cada alta." },
      { titulo: "La universidad no cambia", texto: "Queda fija desde el registro, así cada agenda mantiene sus reglas e interfaz de principio a fin. Cada universidad nueva se habilita cuando ya hay clientas ahí." },
      { titulo: "Una prueba gratis por persona", texto: "Evita encadenar pruebas entre amigas. Unirse a una agenda que ya está pagada no gasta la prueba de nadie." },
      { titulo: "Costos bajos para un precio accesible", texto: "Infraestructura en planes gratuitos y cobro por transferencia SPEI, sin comisiones de procesador. El cobro en línea queda para más adelante." },
      { titulo: "Dos agendas, una cuenta, datos separados", texto: "La agenda personal comparte infraestructura con la odontológica, pero sus datos no se mezclan." },
    ],
    fases: [
      { etiqueta: "● EN PRODUCCIÓN", tono: "ok", titulo: "Agenda odontológica · UPP", texto: "En uso por estudiantes." },
      { etiqueta: "● EN EXPANSIÓN", tono: "accent", titulo: "Variante UADY", texto: "Diseñada con estudiantes de esa universidad." },
      { etiqueta: "● POR INVITACIÓN", tono: "muted", titulo: "Agenda personal", texto: "Gratuita por ahora." },
    ],
  },
];

export function getProyecto(slug: string) {
  return proyectos.find((p) => p.slug === slug);
}
