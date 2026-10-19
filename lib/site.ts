// Datos generales del sitio. Llena los campos vacíos antes de publicar.
export const site = {
  nombre: "Andrés Pérez",
  marca: "A.PEREZ_DEV",
  ciudad: "Mérida, Yucatán, MX",
  coordenadas: "20.97°N 89.62°W",
  revision: "2026.10",
  totalHojas: 4,
  // Sin dominio propio todavía: usa la URL de producción que asigna Vercel.
  url: process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000",
  contacto: {
    correo: "aperezmdz21@icloud.com",
    github: "https://github.com/AndyPerezMdz",
    linkedin: "https://www.linkedin.com/in/itsmenadyp/",
    whatsapp: "https://wa.me/529995476398",
  },
};
