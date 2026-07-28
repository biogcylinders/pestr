import { createFileRoute, Link } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import { cities } from "@/data/cities";

export const Route = createFileRoute("/pest-control/$city")({
  head: ({ params }) => {
    const city = cities.find((item) => item.slug === params.city);
    const title = city
      ? `Pest Control in ${city.name}, ${city.state} | Pestr`
      : "Pest Control Services | Pestr";
    const description = city
      ? `Book pest control services in ${city.name} for ${city.pests.join(", ")}.`
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
  component: PestControlCityPage,
});

function PestControlCityPage() {
  const { city } = Route.useParams();
  const cityData = cities.find((item) => item.slug === city);

  if (!cityData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="max-w-md rounded-xl border border-border bg-card p-8 text-center">
          <h1 className="text-2xl font-semibold text-foreground">City not found</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            We don’t have a page for this city yet. Try one of the featured locations below.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {cities.slice(0, 4).map((item) => (
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
      heroText={`Protect your property in ${cityData.name} with inspection-led treatment for ${cityData.pests.join(", ")} and other common local pests.`}
      bullets={[
        `Serving nearby areas like ${cityData.nearby.join(", ")}`,
        "Transparent reporting and follow-up support",
        "Built for hotels, restaurants and commercial properties",
      ]}
      proofPoints={[
        {
          title: "Local inspection approach",
          text: `We inspect entry points, storage zones and service corridors in ${cityData.name} so the plan targets the actual pressure areas rather than relying on blanket spraying.`,
        },
        {
          title: "Prevention support",
          text: `We help teams in ${cityData.name} reduce repeat issues through sanitation advice, monitoring and documented visits.`,
        },
      ]}
      serviceAreas={[cityData.name, cityData.state, ...cityData.nearby]}
      relatedLinks={[
        { to: "/services", label: "See services" },
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
            <h3 className="text-sm font-semibold text-foreground">Other cities</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {cities.map((item) => (
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
        </section>
      }
    />
  );
}
