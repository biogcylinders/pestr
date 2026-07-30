import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { services } from "@/data/services";
import { cities } from "@/data/cities";

const BASE_URL = "https://www.pestr.in";

interface SitemapEntry {
  path: string;
  lastmod?: string;
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
        const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

        const entries: SitemapEntry[] = [
          { path: "/", lastmod: currentDate, changefreq: "weekly", priority: "1.0" },
          { path: "/services", lastmod: currentDate, changefreq: "monthly", priority: "0.9" },
          { path: "/about", lastmod: currentDate, changefreq: "monthly", priority: "0.7" },
          { path: "/contact", lastmod: currentDate, changefreq: "monthly", priority: "0.6" },
          { path: "/pricing", lastmod: currentDate, changefreq: "monthly", priority: "0.6" },
          { path: "/faq", lastmod: currentDate, changefreq: "monthly", priority: "0.5" },
          { path: "/terms", lastmod: currentDate, changefreq: "yearly", priority: "0.2" },
          { path: "/privacy", lastmod: currentDate, changefreq: "yearly", priority: "0.3" },
        ];

        // Add service pages
        services.forEach((service) => {
          entries.push({
            path: `/${service.slug}`,
            lastmod: currentDate,
            changefreq: "monthly",
            priority: "0.85",
          });
        });

        // Add service + city pages
        services.forEach((service) => {
          cities.forEach((city) => {
            entries.push({
              path: `/${service.slug}/${city.slug}`,
              lastmod: currentDate,
              changefreq: "monthly",
              priority: "0.80",
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
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
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
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=86400, s-maxage=86400", // Cache for 24 hrs
            "X-Content-Type-Options": "nosniff",
          },
        });
      },
    },
  },
});