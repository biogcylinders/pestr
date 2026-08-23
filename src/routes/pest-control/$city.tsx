import { createFileRoute, Link } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import { cities- getCityBySlug } from "@/data/cities";
import { serviceCatalog } from "@/data/serviceCatalog";
import { ArrowRight, MapPin } from "lucide-react";

export const Route = createFileRoute("/pest-control/$city")({
  head: ({ params }) => {
    const city = getCityBySlug(params.city);
    const title = city
      ? `Pest Control in ${city.name}, ${city.state} | Pestr`
      : "Pest Control Services | Pestr";
    const description = city
      ? `Professional pest control services in ${city.name} for hotels, restaurants, and commercial kitchens. FSSAI-compliant, audit-ready.`
      : "Professional pest control services for hospitality and commercial properties.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `https://www.pestr.in/pest-control/${params.city}` },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "https://www.pestr.in/newlogo.png" },
      ],
      links: [{ rel: "canonical", href: `https://www.pestr.in/pest-control/${params.city}` }],
    };
  },
  component: PestControlCityPage,
});

function PestControlCityPage() {
  const { city: citySlug } = Route.useParams();
  const cityData = getCityBySlug(citySlug);

  if (!cityData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="max-w-md rounded-xl border border-border bg-card p-8 text-center">
          <h1 className="text-2xl font-semibold text-foreground">City not found</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            We don't have a page for this city yet. Try one of the featured locations below.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {cities.slice(0, 6).map((item) => (
              <Link
                key={item.slug}
                to="/pest-control/$city"
                params={{ city: item.slug }}
                className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground hover:border-brass hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <ServicePageLayout
      heroTitle={`Pest control in ${cityData.name}, ${cityData.state}`}
      heroText={`Professional pest management for hotels, restaurants, and commercial kitchens in ${cityData.name}. FSSAI-compliant treatments with documented visit reports.`}
      bullets={[
        "Food-safe, odorless treatment protocols",
        "FSSAI & HACCP audit-ready documentation",
        "30-day written retreat guarantee",
      ]}
      proofPoints={[
        {
          title: "Local expertise",
          text: cityData.localNotes,
        },
        {
          title: "Rapid response",
          text: `${cityData.responseGuarantee} for commercial properties across ${cityData.name}.`,
        },
      ]}
      breadcrumbs={[
        { name: "Home", url: "https://www.pestr.in/" },
        { name: "Services", url: "https://www.pestr.in/services" },
        { name: cityData.name, url: `https://www.pestr.in/pest-control/${cityData.slug}` },
      ]}
      extraContent={
        <div className="space-y-8">
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <h2 className="text-lg font-bold text-foreground">
                Our Services in {cityData.name}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {serviceCatalog.map((service) => (
                <Link
                  key={service.slug}
                  to="/$service/$city"
                  params={{ service: service.slug, city: cityData.slug }}
                  className="group rounded-xl border border-border bg-card p-5 flex items-center justify-between hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <div>
                    <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                      {service.shortDescription}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0 ml-3 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Other Cities
            </h3>
            <div className="flex flex-wrap gap-2">
              {cities
                .filter((c) => c.slug !== cityData.slug)
                .map((item) => (
                  <Link
                    key={item.slug}
                    to="/pest-control/$city"
                    params={{ city: item.slug }}
                    className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          </section>
        </div>
      }
    />
  );
}
