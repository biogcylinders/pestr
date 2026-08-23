import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import { getWhatsAppLink } from "@/lib/constants";
import { serviceCatalog, getServicesByCategory, type ServiceCategory } from "@/data/serviceCatalog";
import { getFeaturedCities } from "@/data/cities";
import {
  Check,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  FileCheck2,
  MapPin,
  Sparkles,
  ClipboardCheck,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Pest Control For Hospitality | Pestr" },
      {
        name: "description",
        content:
          "Pest management for hotels, restaurants, commercial kitchens, and cloud kitchens. Food-safe, audit-ready, 30-day guarantee.",
      },
      { property: "og:title", content: "Services — Pest Control For Hospitality | Pestr" },
      { property: "og:description", content: "Pest management for hotels, restaurants, commercial kitchens, and cloud kitchens. Food-safe, audit-ready, 30-day guarantee." },
      { property: "og:url", content: "https://www.pestr.in/services" },
      { property: "og:image", content: "https://www.pestr.in/newlogo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Services — Pest Control For Hospitality | Pestr" },
      { name: "twitter:description", content: "Pest management for hotels, restaurants, commercial kitchens, and cloud kitchens. Food-safe, audit-ready, 30-day guarantee." },
      { name: "twitter:image", content: "https://www.pestr.in/newlogo.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.pestr.in/services" }],
  }),
  component: ServicesPage,
});

type FilterCategory = "all" | "hospitality" | "kitchen" | "pests";

const categoryMap: Record<FilterCategory, ServiceCategory | "all"> = {
  all: "all",
  hospitality: "hospitality",
  kitchen: "kitchen",
  pests: "pests",
};

function ServicesContent() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("all");
  const featuredCities = getFeaturedCities();

  const filteredServices =
    selectedCategory === "all"
      ? serviceCatalog
      : getServicesByCategory(categoryMap[selectedCategory] as ServiceCategory);

  return (
    <div className="space-y-12 pt-2">
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-4">
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all" as const, label: "All Services" },
              { id: "hospitality" as const, label: "Hotels & Dining" },
              { id: "kitchen" as const, label: "Commercial Kitchens" },
              { id: "pests" as const, label: "Pest Specific" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                type="button"
                className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === tab.id
                    ? "bg-foreground text-background shadow-xs"
                    : "border border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-medium hidden sm:inline">
            Showing {filteredServices.length} services
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-200 hover:border-foreground/30 hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-md border border-border/60 bg-muted/50 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.hubDescription}
                    </p>
                  </div>

                  <ul className="space-y-2 border-t border-border/60 pt-4">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-foreground/90">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 space-y-3">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-primary" /> Available in:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {featuredCities.slice(0, 6).map((city) => (
                        <Link
                          key={city.slug}
                          to="/$service/$city"
                          params={{ service: service.slug, city: city.slug }}
                          className="text-[11px] bg-muted/50 hover:bg-primary/10 hover:text-primary border border-border/60 rounded px-2 py-0.5 font-medium transition-colors"
                        >
                          {city.name}
                        </Link>
                      ))}
                      <span className="text-[11px] text-muted-foreground px-1 py-0.5">+ more</span>
                    </div>
                  </div>

                  <Link
                    to={`/${service.slug}` as string}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    View Service <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-border/60">
        <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
            <h2 className="text-sm font-bold tracking-tight text-foreground uppercase">
              Why Hospitality Teams Choose Pestr
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-background p-3.5">
              <Sparkles className="h-4 w-4 text-emerald-600 shrink-0" />
              <span className="font-medium text-foreground/90">Food-safe formulations & odor-free chemistry</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-background p-3.5">
              <Sparkles className="h-4 w-4 text-emerald-600 shrink-0" />
              <span className="font-medium text-foreground/90">Zero operational downtime during service</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-background p-3.5">
              <ClipboardCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span className="font-medium text-foreground/90">FSSAI & HACCP audit-ready documentation</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-background p-3.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span className="font-medium text-foreground/90">30-day written retreat guarantee</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-foreground font-bold text-sm">
              <FileCheck2 className="h-4.5 w-4.5 text-emerald-600" />
              <h3>Chemical Transparency</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Every active ingredient is disclosed prior to application, with digital Safety Data Sheets (SDS) submitted directly to your quality manager.
            </p>
          </div>
          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-foreground font-bold text-sm">
              <FileCheck2 className="h-4.5 w-4.5 text-emerald-600" />
              <h3>Audit-Ready Logs</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Signed digital visit reports delivered after every inspection — instantly downloadable for health and safety audits.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border/80 bg-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div>
            <h4 className="text-sm font-bold text-foreground">Need a custom multi-facility plan?</h4>
            <p className="text-xs text-muted-foreground mt-0.5">
              We design customized quarterly & annual pest prevention plans for commercial chains.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Hi Pestr! I'd like a custom service plan for my property.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 shrink-0 transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> Request Custom Plan
          </a>
        </div>
      </section>
    </div>
  );
}

function ServicesPage() {
  return (
    <ServicePageLayout
      heroTitle="Pest Management Built for Hospitality"
      heroText="Targeted treatment plans for hotels, restaurants, commercial kitchens, and cloud kitchens — engineered around food safety and audit compliance."
      bullets={[
        "Food-safe formulations",
        "Zero operational downtime",
        "FSSAI & HACCP ready docs",
        "30-day retreat guarantee",
      ]}
      breadcrumbs={[
        { name: "Home", url: "https://www.pestr.in/" },
        { name: "Services", url: "https://www.pestr.in/services" },
      ]}
      extraContent={<ServicesContent />}
    />
  );
}
