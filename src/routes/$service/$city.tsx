import { createFileRoute, Link } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { getWhatsAppLink, TEL_LINK, WA_FORMATTED, SITE_URL } from "@/lib/constants";
import {
  ShieldCheck,
  MapPin,
  Clock,
  AlertTriangle,
  Building2,
  CheckCircle2,
  MessageCircle,
  Phone,
  Zap,
  FileCheck2,
  Sparkles,
  ArrowRight,
  Search,
  Droplets,
  Award,
  Navigation,
} from "lucide-react";

// Helper to safely format slug to Title Case
function formatSlugToTitle(slug?: string): string {
  if (!slug) return "Commercial Pest Control";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export const Route = createFileRoute("/$service/$city")({
  head: ({ params }) => {
    const rawServiceSlug = params?.service || "";
    const rawCitySlug = params?.city || "";

    const currentService = (services || []).find(
      (s) => s?.slug && typeof s.slug === "string" && s.slug.toLowerCase() === rawServiceSlug.toLowerCase()
    );
    const currentCity = (cities || []).find(
      (c) => c?.slug && typeof c.slug === "string" && c.slug.toLowerCase() === rawCitySlug.toLowerCase()
    );

    const serviceTitle = currentService?.title || formatSlugToTitle(rawServiceSlug);
    const cityName = currentCity?.name || "Varanasi";
    const cityState = currentCity?.state || "Uttar Pradesh";

    const title = `${serviceTitle} in ${cityName}, ${cityState} | FSSAI Audit Ready | Pestr`;
    const description = `Professional ${serviceTitle.toLowerCase()} services in ${cityName}. FSSAI & HACCP compliant, zero downtime, odorless gel treatments with a 30-day guarantee.`;
    const canonical = `${SITE_URL}/${rawServiceSlug}/${rawCitySlug}`;

    return {
      meta: [
        { title },
        { name: "description", content: description.slice(0, 160) },
        { property: "og:title", content: title },
        { property: "og:description", content: description.slice(0, 160) },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: ServiceCityPage,
});

function ServiceCityPage() {
  const params = Route.useParams() || {};
  const rawServiceSlug = params?.service || "";
  const rawCitySlug = params?.city || "";

  // 1. Safe Lookup for Services
  const foundService = (services || []).find(
    (s) => s?.slug && typeof s.slug === "string" && s.slug.toLowerCase() === rawServiceSlug.toLowerCase()
  );

  const currentService = foundService || {
    slug: rawServiceSlug || "pest-control",
    title: formatSlugToTitle(rawServiceSlug),
  };

  // 2. Safe Lookup for City Data
  const currentCity =
    (cities || []).find(
      (c) => c?.slug && typeof c.slug === "string" && c.slug.toLowerCase() === rawCitySlug.toLowerCase()
    ) ||
    cities[0] || {
      slug: "varanasi",
      name: "Varanasi",
      state: "Uttar Pradesh",
      localPestChallenges: [
        "High humidity along riverbanks driving German cockroach breeding in kitchens",
        "Drain fly & sewer fly infestations in historical plumbing networks",
        "Rodent pressure in heritage food corridors and storage areas",
      ],
      keyCommercialHubs: [
        "Cantonment Luxury Hotel & Dining Belt",
        "Godowlia & Dashashwamedh Heritage Food Outlets",
        "Lanka & BHU Commercial Retail Hub",
        "Shivpur & Highway Cloud Kitchen Hubs",
      ],
      propertiesWeServe: [
        "Heritage Hotels & Boutique Staycays",
        "Fine Dining Restaurants & Cafes",
        "Cloud Kitchens & Bakery Units",
        "Food Outlets & Sweet Shops",
      ],
      responseGuarantee: "2-Hour Rapid Dispatch for Cantonment & Old City Hubs",
      localNotes:
        "Varanasi's dense heritage food clusters require strict, non-spray gel matrices that eliminate pests without interrupting continuous kitchen operations or violating FSSAI guidelines.",
    };

  const serviceTitle = currentService.title || formatSlugToTitle(rawServiceSlug);
  const serviceTitleLower = serviceTitle.toLowerCase();
  const cityName = currentCity.name || "Varanasi";
  const cityState = currentCity.state || "Uttar Pradesh";
  const citySlug = currentCity.slug || "varanasi";

  const whatsappMessage = `Hi Pestr! I'd like to book a site inspection for ${serviceTitle} in ${cityName}.`;

  return (
    <ServicePageLayout
      heroTitle={`${serviceTitle} in ${cityName}`}
      heroText={`FSSAI & HACCP audit-ready ${serviceTitleLower} tailored specifically for hospitality, restaurants, and commercial kitchens across ${cityName}, ${cityState}.`}
      extraContent={
        <div className="space-y-8 text-foreground">
          
          {/* TOP CARDS & EXPRESS BOOKING */}
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Feature Card 1 */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="h-11 w-11 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <FileCheck2 className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-foreground">
                  Audit-Ready SDS Dossier
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Digital inspection logs, chemical SDS data sheets, and compliance certificates delivered right after every service visit.
                </p>
              </div>
              <div className="pt-2 border-t border-border/50 text-sm font-semibold text-emerald-600 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                <span>100% FSSAI & HACCP Compliant</span>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="h-11 w-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-foreground">
                  Zero Operational Downtime
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Targeted non-spray micro-gels and off-peak night treatment windows so your kitchen never has to close standard service hours.
                </p>
              </div>
              <div className="pt-2 border-t border-border/50 text-sm font-semibold text-amber-600 flex items-center gap-1.5">
                <Sparkles className="h-4 w-4" />
                <span>Odorless & Food-Safe Chemistry</span>
              </div>
            </div>

            {/* CTA Widget Card */}
            <div className="rounded-2xl border-2 border-primary/30 bg-card p-6 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 text-xs font-bold text-emerald-700">
                  <Clock className="h-4 w-4 shrink-0" />
                  <span>{currentCity.responseGuarantee}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Request Site Inspection
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Get custom treatment mapping & audit readiness report for your commercial space in {cityName}.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={getWhatsAppLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3.5 px-4 shadow-sm transition-all"
                >
                  <MessageCircle className="h-5 w-5" /> Book Team on WhatsApp
                </a>

                <a
                  href={TEL_LINK}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background hover:bg-muted text-foreground font-semibold text-sm py-3 px-4 transition-all"
                >
                  <Phone className="h-4 w-4 text-primary" /> Call {WA_FORMATTED}
                </a>
              </div>

              <div className="border-t border-border/60 pt-3 flex items-center justify-between text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  30-Day Guarantee
                </span>
                <span className="font-semibold text-foreground">Free Site Inspection</span>
              </div>
            </div>

          </div>

          {/* DEEP LOCALIZED CITY INTEL */}
          <section className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border/60 pb-4 gap-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-6 w-6 text-primary shrink-0" />
                <h2 className="text-lg md:text-xl font-bold text-foreground">
                  Localized Pest Intelligence — {cityName}, {cityState}
                </h2>
              </div>
              <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">
                Active Local Teams
              </span>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground font-normal">
              {currentCity.localNotes}
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              {/* Local Threats */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 space-y-3">
                <div className="flex items-center gap-2 text-amber-700 font-bold text-sm uppercase tracking-wider">
                  <AlertTriangle className="h-5 w-5 shrink-0" />
                  <span>High-Risk Pests in {cityName}</span>
                </div>
                <ul className="space-y-2.5 text-sm text-foreground">
                  {(currentCity.localPestChallenges || []).map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2.5">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mt-2 shrink-0" />
                      <span className="leading-snug">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coverage Hubs */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                  <Navigation className="h-5 w-5 shrink-0" />
                  <span>Key Service Zones ({cityName})</span>
                </div>
                <ul className="space-y-2.5 text-sm text-foreground">
                  {(currentCity.keyCommercialHubs || []).map((hub) => (
                    <li key={hub} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="leading-snug">{hub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* STEP-BY-STEP SERVICE PROTOCOL */}
          <section className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Standard Operating Procedure</span>
                <h2 className="text-lg md:text-xl font-bold text-foreground">4-Step Commercial Elimination Process</h2>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-background p-5 space-y-3 relative">
                <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                  01
                </div>
                <h4 className="text-sm font-bold text-foreground flex items-center gap-1.5">
                  <Search className="h-4 w-4 text-primary" /> Void Inspection
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Deep scanning of hidden moisture pockets, drainage pipes, and kitchen machinery cracks.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-5 space-y-3 relative">
                <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                  02
                </div>
                <h4 className="text-sm font-bold text-foreground flex items-center gap-1.5">
                  <Droplets className="h-4 w-4 text-primary" /> Micro-Gel Baiting
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Odorless active bait matrix target applied without toxic airborne chemical spraying.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-5 space-y-3 relative">
                <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                  03
                </div>
                <h4 className="text-sm font-bold text-foreground flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-primary" /> Perimeter Defense
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Physical entry point sealings and organic repellent barriers around loading bays & doors.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-5 space-y-3 relative">
                <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                  04
                </div>
                <h4 className="text-sm font-bold text-foreground flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-primary" /> Audit Certificate
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Instant issuance of compliance audit certificates for government & municipal inspectors.
                </p>
              </div>
            </div>
          </section>

          {/* PROPERTY TYPES WE SERVE */}
          <section className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Commercial Properties Covered in {cityName}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {(currentCity.propertiesWeServe || []).map((property) => (
                <div
                  key={property}
                  className="rounded-xl border border-border bg-card p-4 flex items-center gap-3 text-sm font-bold text-foreground shadow-2xs hover:border-primary/50 transition-all"
                >
                  <Building2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{property}</span>
                </div>
              ))}
            </div>
          </section>

          {/* RELATED SERVICES LINKS */}
          <section className="space-y-4 pt-4 border-t border-border">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Explore Other Services in {cityName}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {(services || [])
                .filter((s) => s?.slug && typeof s.slug === "string" && s.slug !== currentService.slug)
                .slice(0, 4)
                .map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}/${citySlug}` as any}
                    className="rounded-xl border border-border bg-card p-4 flex items-center justify-between text-sm font-medium text-foreground hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <span className="truncate pr-2">{s.title || formatSlugToTitle(s.slug)}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
            </div>
          </section>

        </div>
      }
    />
  );
}