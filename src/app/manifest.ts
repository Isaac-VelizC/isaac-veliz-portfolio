import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Isaac Veliz Canaza — Portafolio",
    short_name: "Isaac Veliz",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#694e99",
  };
}
