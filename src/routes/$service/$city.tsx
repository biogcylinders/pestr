import { createFileRoute, Link } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

export const Route = createFileRoute("/$service/$city")({
  head: ({ params }) => {
    const service = services.find((item) => item.slug === params.service);
    const city = cities.find((item) => item.slug === params.city);

    const title = service && city
      ? `${service.name} in ${city.name}, ${city.state} | Pestr`
      : "Pest Control Services | Pestr";

    const description = service && city
      ? `${service.name} for ${city.name} with inspection-led treatment for ${city.pests.join(", ")}.`
      : "Professional pest control services for hospitality and commercial properties.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
      ],
    };
  },
  component: ServiceCityPage,
});

function ServiceCityPage() {
  const { service, city } = Route.useParams();
  const serviceData = services.find((item) => item.slug === service);
  const cityData = cities.find((item) => item.slug === city);

  if (!serviceData || !cityData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="max-w-md rounded-xl border border-border bg-card p-8 text-center">
          <h1 className="text-2xl font-semibold text-foreground">Page not found</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            We couldn’t find that service and city combination yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <ServicePageLayout
      heroTitle={`${serviceData.name} in ${cityData.name}, ${cityData.state}`}
      heroText={`${serviceData.description} We support ${cityData.name} and nearby areas like ${cityData.nearby.join(", ")} with transparent inspection, treatment, and follow-up support.`}
      bullets={[
        `Serving nearby areas like ${cityData.nearby.join(", ")}`,
        "Clear reporting and documented follow-up",
        "Built for hotels, restaurants and commercial properties",
      ]}
      proofPoints={[
        {
          title: "Inspection-led treatment",
          text: `We tailor ${serviceData.name.toLowerCase()} for ${cityData.name} based on the actual pest pressure, access points and property conditions.`,
        },
        {
          title: "Prevention support",
          text: `We help teams in ${cityData.name} reduce repeat issues through monitoring, sanitation advice and documented visits.`,
        },
      ]}
      serviceAreas={[cityData.name, cityData.state, ...cityData.nearby]}
      relatedLinks={[
        { to: "/pest-control/$city", params: { city: cityData.slug }, label: `Pest control in ${cityData.name}` },
        { to: "/services", label: "View all services" },
        { to: "/contact", label: "Book a site inspection" },
      ]}
      extraContent={
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-base font-semibold text-foreground">Common pests in {cityData.name}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {cityData.pests.map((pest) => (
              <span key={pest} className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground">
                {pest}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-foreground">Other services</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {services.map((item) => (
                <Link
                  key={item.slug}
                  to="/$service/$city"
                  params={{ service: item.slug, city: cityData.slug }}
                  className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground hover:border-brass hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      }
    />
  );
}
