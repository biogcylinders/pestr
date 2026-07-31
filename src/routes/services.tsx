import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import { getWhatsAppLink } from "@/lib/constants";
import { services as serviceData } from "@/data/services";
import { cities } from "@/data/cities";
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
import { Hotel, ChefHat, Building2, Bug, Rat } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Pest Control For Hospitality | Pestr" },
      {
        name: "description",
        content:
          "Pest management for hotels, restaurants, commercial kitchens, and cloud kitchens. Food-safe, audit-ready, 30-day guarantee.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.pestr.in/services" }],
  }),
  component: ServicesPage,
});

const serviceList = serviceData.map((service) => {
  const config = {
    "hotel-pest-control": {
      id: "hotel-pest-control",
      slug: service.slug,
      title: "Hotel & Resort Pest Control",
      icon: Hotel,
      badge: "Hospitality",
      description:
        "Discrete, zero-disruption pest management engineered specifically for guest rooms, dining halls, and back-of-house storage.",
      features: [
        "Off-peak night & early morning treatments",
        "Odorless, food-safe gel applications",
        "Guest-facing area protection protocol",
        "Quarterly FSSAI audit file preparation",
      ],
    },
    "restaurant-pest-control": {
      id: "restaurant-pest-control",
      slug: service.slug,
      title: "Restaurant & Cafe Protection",
      icon: ChefHat,
      badge: "Dining & Bars",
      description:
        "Targeted pest barrier protection for active dining rooms, bars, and food prep areas.",
      features: [
        "Zero airborne chemical exposure in kitchen",
        "Fly control & drain treatment protocols",
        "Signed visit report for hygiene inspections",
        "24-hour emergency outbreak response",
      ],
    },
    "commercial-kitchen-pest-control": {
      id: "commercial-kitchen-pest-control",
      slug: service.slug,
      title: "Commercial Kitchen Control",
      icon: Building2,
      badge: "Food Prep",
      description:
        "Specialized grease-trap, drain, and equipment void pest control for high-output kitchens.",
      features: [
        "HACCP & FSSAI compliant formulations",
        "Bait station mapping & void sealing",
        "Full Safety Data Sheet (SDS) dossier",
        "Monthly inspection with photo documentation",
      ],
    },
    "cockroach-control": {
      id: "cockroach-control",
      slug: service.slug,
      title: "Cockroach Eradication",
      icon: Bug,
      badge: "Targeted Vector",
      description:
        "Gel baiting and growth regulator treatments that eliminate nests without kitchen shutdowns.",
      features: [
        "Imidacloprid 2.15% targeted gel matrix",
        "Zero downtime — kitchen stays operational",
        "Eliminates German & American cockroaches",
        "30-day written retreat guarantee",
      ],
    },
    "rodent-control": {
      id: "rodent-control",
      slug: service.slug,
      title: "Rodent Prevention",
      icon: Rat,
      badge: "Perimeter Barrier",
      description:
        "Tamper-resistant bait stations, tracking, and perimeter sealing to keep rodents out permanently.",
      features: [
        "Tamper-proof lockable bait stations",
        "Entry point identification & gap sealing",
        "Non-toxic trapping for food zones",
        "Weekly monitoring during high activity",
      ],
    },
    "termite-treatment": {
      id: "termite-treatment",
      slug: service.slug,
      title: "Termite Treatment",
      icon: Bug,
      badge: "Structural",
      description:
        "Soil treatment and baiting systems protecting structural integrity against subterranean termites.",
      features: [
        "Subterranean termite soil treatment",
        "Baiting system with monitoring stations",
        "Pre-construction termite barrier options",
        "Annual inspection & maintenance plan",
      ],
    },
    "mosquito-control": {
      id: "mosquito-control",
      slug: service.slug,
      title: "Mosquito Control",
      icon: Bug,
      badge: "Outdoor & Dining",
      description:
        "Targeted larvicide and adulticide treatments reducing pest populations across outdoor dining spaces.",
      features: [
        "Larvicide treatments for breeding sites",
        "Adulticide treatments for mosquito populations",
        "Pre-construction mosquito barrier options",
        "Annual inspection & maintenance plan",
      ],
    },
  }[service.slug as keyof typeof config];

  return {
    ...config,
    defaultCity: service.defaultCity,
  };
});

function ServicesContent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const defaultCity = cities[0]?.slug || "varanasi";

  const filteredServices = serviceList.filter((s) => {
    if (!s) return false;
    if (selectedCategory === "all") return true;
    if (selectedCategory === "hospitality")
      return s.id === "hotel-pest-control" || s.id === "restaurant-pest-control";
    if (selectedCategory === "kitchen")
      return s.id === "commercial-kitchen-pest-control";
    if (selectedCategory === "pests")
      return (
        s.id === "cockroach-control" ||
        s.id === "rodent-control" ||
        s.id === "termite-treatment" ||
        s.id === "mosquito-control"
      );
    return true;
  });

  return (
    <div className="space-y-12 pt-2">
      {/* 1. SERVICE CARDS SECTION */}
      <section className="space-y-6">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-4">
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Services" },
              { id: "hospitality", label: "Hotels & Dining" },
              { id: "kitchen", label: "Commercial Kitchens" },
              { id: "pests", label: "Pest Specific" },
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
            Showing {filteredServices.length} protocols
          </span>
        </div>

        {/* Service Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => {
            if (!service) return null;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-200 hover:border-foreground/30 hover:shadow-md"
              >
                <div className="space-y-4">
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-md border border-border/60 bg-muted/50 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 border-t border-border/60 pt-4">
                    {service.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2.5 text-xs text-foreground/90"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 pt-4 border-t border-border/60 space-y-3">
                  {/* SEO-Friendly City Crawl Links instead of <select> */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-primary" /> Popular Cities:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cities.map((c) => (
                        <Link
                          key={c.slug}
                          to={`/${service.slug}/${c.slug}` as any}
                          className="text-[11px] bg-muted/50 hover:bg-primary/10 hover:text-primary border border-border/60 rounded px-2 py-0.5 font-medium transition-colors"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/$service/$city"
                    params={{
                      service: service.slug,
                      city: service.defaultCity || defaultCity,
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    View Full Protocol <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. RE-DESIGNED BOTTOM CONTEXT CARDS */}
      <section className="space-y-6 pt-8 border-t border-border/60">
        {/* Why Hospitality Choose Us Box */}
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
              <span className="font-medium text-foreground/90">
                Food-safe formulations & odor-free chemistry
              </span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-background p-3.5">
              <Sparkles className="h-4 w-4 text-emerald-600 shrink-0" />
              <span className="font-medium text-foreground/90">
                Zero operational downtime during service
              </span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-background p-3.5">
              <ClipboardCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span className="font-medium text-foreground/90">
                FSSAI & HACCP audit-ready documentation
              </span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-background p-3.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span className="font-medium text-foreground/90">
                30-day written retreat guarantee
              </span>
            </div>
          </div>
        </div>

        {/* Chemical Transparency & Audit Logs Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-foreground font-bold text-sm">
              <FileCheck2 className="h-4.5 w-4.5 text-emerald-600" />
              <h3>Chemical Transparency</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Every active ingredient is disclosed prior to application, with
              digital Safety Data Sheets (SDS) submitted directly to your quality
              manager.
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-foreground font-bold text-sm">
              <FileCheck2 className="h-4.5 w-4.5 text-emerald-600" />
              <h3>Audit-Ready Logs</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Signed digital visit reports delivered after every inspection —
              instantly downloadable for health and safety audits.
            </p>
          </div>
        </div>

        {/* Custom Plan WhatsApp Callout */}
        <div className="rounded-2xl border border-border/80 bg-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div>
            <h4 className="text-sm font-bold text-foreground">
              Need a custom multi-facility plan?
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">
              We design customized quarterly & annual pest prevention plans for
              commercial chains.
            </p>
          </div>
          <a
            href={getWhatsAppLink(
              "Hi Pestr! I'd like a custom service plan for my property."
            )}
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
      proofPoints={[
        {
          title: "Chemical Transparency",
          text: "Every active ingredient is disclosed before application, with Safety Data Sheets handed to your duty manager.",
        },
        {
          title: "Audit-Ready Logs",
          text: "Signed digital visit reports delivered after every visit — ready for health inspections.",
        },
      ]}
      serviceAreas={[
        "Hotels & Resorts",
        "Fine Dining & Cafes",
        "Commercial Kitchens",
        "Cloud Kitchens",
        "Banquets",
      ]}
      relatedLinks={[
        { to: "/hotel-pest-control", label: "Hotel Pest Control" },
        { to: "/restaurant-pest-control", label: "Restaurant Pest Control" },
        { to: "/pricing", label: "Pricing" },
        { to: "/contact", label: "Book Inspection" },
      ]}
      extraContent={<ServicesContent />}
    />
  );
}