import { createFileRoute } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";

export const Route = createFileRoute("/rodent-control")({
  head: () => ({
    meta: [
      { title: "Rodent Control Services | Pestr" },
      {
        name: "description",
        content:
          "Protect your property from rats and mice with Pestr’s rodent control service for hotels, restaurants and commercial kitchens.",
      },
      {
        name: "keywords",
        content:
          "rodent control, rat control, mice control, pest control for rodents",
      },
      { property: "og:title", content: "Rodent Control Services | Pestr" },
      {
        property: "og:description",
        content:
          "Rodent control service with inspection, monitoring and documented follow-up for hospitality and food businesses.",
      },
      { property: "og:url", content: "https://pestr.lovable.app/rodent-control" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://pestr.lovable.app/rodent-control" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is included in rodent control service?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We inspect entry points, nesting areas and active signs, then recommend monitoring and exclusion steps alongside targeted treatment.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: RodentControlPage,
});

function RodentControlPage() {
  return (
    <ServicePageLayout
      heroTitle="Rodent control for safer premises and cleaner operations"
      heroText="Pestr helps businesses reduce rodent pressure through inspection, monitoring, exclusion advice and service records that support compliance."
      bullets={[
        "Targeted control around entry points, drains and waste zones",
        "Monitoring plans to reduce recurrence",
        "Clear service notes for your operations team",
      ]}
      proofPoints={[
        {
          title: "Entry-point focused treatment",
          text: "We focus on access routes, runways and nesting areas so your control plan is practical and sustainable rather than reactive only.",
        },
        {
          title: "Operational support",
          text: "Our recommendations help your team tighten waste handling, storage practices and maintenance responses between visits.",
        },
      ]}
      serviceAreas={["Hotels", "Restaurants", "Retail kitchens", "Facilities"]}
      relatedLinks={[
        { to: "/hotel-pest-control", label: "Hotel pest control" },
        { to: "/cockroach-control", label: "Cockroach control" },
      ]}
    />
  );
}
