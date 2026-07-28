import { createFileRoute } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";

export const Route = createFileRoute("/restaurant-pest-control")({
  head: () => ({
    meta: [
      { title: "Restaurant Pest Control in India | Pestr" },
      {
        name: "description",
        content:
          "Keep dining rooms, storage areas and kitchens pest-free with Pestr’s restaurant pest control service designed for food businesses.",
      },
      {
        name: "keywords",
        content:
          "restaurant pest control, pest control for restaurants, restaurant pest management, restaurant pest control India",
      },
      { property: "og:title", content: "Restaurant Pest Control in India | Pestr" },
      {
        property: "og:description",
        content:
          "Restaurant pest control with documented inspection, clear chemistry and faster response for high-risk food-service environments.",
      },
      { property: "og:url", content: "https://pestr.lovable.app/restaurant-pest-control" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://pestr.lovable.app/restaurant-pest-control" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Restaurant Pest Control",
          serviceType: "Restaurant Pest Control",
          provider: {
            "@type": "Organization",
            name: "Pestr",
            url: "https://pestr.lovable.app",
            telephone: "+91-9648116960",
          },
          areaServed: "IN",
          description:
            "Pest control for restaurants, dining floors and food-storage areas with transparent reporting and rapid follow-up.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What pest issues are common in restaurants?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Cockroaches, rodents and stored-product pests are common in food businesses. We focus on entry routes, storage areas and sanitation gaps that contribute to recurring activity.",
              },
            },
            {
              "@type": "Question",
              name: "Can you work around service hours?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We arrange treatment around your operating hours so your team can continue service without disruption.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: RestaurantPestControlPage,
});

function RestaurantPestControlPage() {
  return (
    <ServicePageLayout
      heroTitle="Restaurant pest control for cleaner service and safer kitchens"
      heroText="From dining halls to delivery prep zones, Pestr helps restaurants protect food safety standards while keeping customer experience smooth."
      bullets={[
        "Treatment plans designed around kitchen workflow",
        "Clear documentation for internal audits and inspections",
        "Responsive support when activity appears between visits",
      ]}
      proofPoints={[
        {
          title: "Food-service ready service",
          text: "We work around operating hours and focus on source points, entry routes and high-risk storage environments so treatment remains effective without disrupting service.",
        },
        {
          title: "FSSAI-friendly reporting",
          text: "Our reports fit neatly into your food-safety records and can be shared with your head chef, operations lead or compliance partner.",
        },
      ]}
      serviceAreas={["Restaurants", "Cafes", "QSRs", "Bars and pubs"]}
      relatedLinks={[
        { to: "/hotel-pest-control", label: "Hotel pest control" },
        { to: "/commercial-kitchen-pest-control", label: "Commercial kitchen pest control" },
      ]}
    />
  );
}
