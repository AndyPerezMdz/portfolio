import Link from "next/link";
import { site } from "@/lib/site";

type Activo = "trabajo" | "perfil" | null;

export function Nav({ activo = null }: { activo?: Activo }) {
  return (
    <nav className="nav gutter" aria-label="Principal">
      <Link href="/" className="brand">
        <span className="brand-mark" aria-hidden="true" />
        {site.marca}
      </Link>
      <div className="nav-links">
        <Link
          href="/#trabajo"
          className={activo === "trabajo" ? "navlink is-active" : "navlink"}
          aria-current={activo === "trabajo" ? "page" : undefined}
        >
          [ TRABAJO ]
        </Link>
        <Link
          href="/perfil"
          className={activo === "perfil" ? "navlink is-active" : "navlink"}
          aria-current={activo === "perfil" ? "page" : undefined}
        >
          [ PERFIL ]
        </Link>
        <a href="#contacto" className="nav-contact">
          [ CONTACTO ]
        </a>
      </div>
    </nav>
  );
}
