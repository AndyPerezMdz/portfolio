import { site } from "@/lib/site";

function enlace(valor: string, placeholder: string) {
  return valor ? { href: valor, texto: placeholder } : { href: "#", texto: placeholder };
}

export function Contact() {
  const { correo, github, linkedin, whatsapp } = site.contacto;
  const mail = correo ? `mailto:${correo}` : "#";
  const otros = [
    { ...enlace(github, "[ GITHUB ]") },
    { ...enlace(linkedin, "[ LINKEDIN ]") },
    { ...enlace(whatsapp, "[ WHATSAPP ]") },
  ];
  return (
    <section id="contacto" className="contact gutter">
      <div className="contact-copy">
        <div className="kicker">// CONTACTO</div>
        <h2>¿Tienes un proyecto en mente?</h2>
        <p className="mono-body">Cuéntame qué quieres construir y vemos cómo hacerlo realidad.</p>
      </div>
      <div className="contact-actions">
        <a href={mail} className="btn btn-primary">
          [ {correo || "TU-CORREO@DOMINIO.COM"} ]
        </a>
        <div className="contact-row">
          {otros.map((o) => (
            <a
              key={o.texto}
              href={o.href}
              className="btn btn-ghost btn-sm"
              target={o.href.startsWith("http") ? "_blank" : undefined}
              rel={o.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {o.texto}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
