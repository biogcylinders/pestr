import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { services } from "@/data/services";
import { cities } from "@/data/cities";

const BASE_URL = "https://www.pestr.in";

interface SitemapEntry {
  path: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },

          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.6" },
          { path: "/pricing", changefreq: "monthly", priority: "0.6" },
          { path: "/faq", changefreq: "monthly", priority: "0.5" },
          { path: "/terms", changefreq: "yearly", priority: "0.2" },
          { path: "/privacy", changefreq: "yearly", priority: "0.3" },
        ];

        // Add service pages
        services.forEach((service) => {
          entries.push({
            path: `/${service.slug}`,
            changefreq: "monthly",
            priority: "0.85",
          });
        });

        // Add service + city pages
        services.forEach((service) => {
          cities.forEach((city) => {
            entries.push({
              path: `/${service.slug}/${city.slug}`,
              changefreq: "monthly",
              priority: "0.8",
            });
          });
        });

        // Remove duplicate paths
        const uniqueEntries = Array.from(
          new Map(entries.map((e) => [e.path, e])).values()
        );

        const urls = uniqueEntries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq
              ? `    <changefreq>${e.changefreq}</changefreq>`
              : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n")
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});