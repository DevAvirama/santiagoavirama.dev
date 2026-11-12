import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Santiago Avirama — Portafolio",
    short_name: "santiagoavirama.dev",
    description:
      "Portafolio de ingeniería de software y casos de estudio técnicos de Santiago Avirama. Arquitecturas web, sistemas distribuidos, visión artificial y seguridad desde el diseño.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#020617",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
