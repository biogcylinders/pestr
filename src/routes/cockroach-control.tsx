import { createFileRoute } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";

export const Route = createFileRoute("/cockroach-control")({
  head: () => ({
    meta: [
      { title: "Cockroach Control Services | Pestr" },
      {
        name: "description",
        content:
          "Eliminate cockroach infestations in hotels, restaurants and commercial kitchens with Pestr’s targeted cockroach control and prevention plans.",
      },
      {
        name: "keywords",
        content:
          "cockroach control, cockroach pest control, cockroach management, cockroach control services",
      },
      { property: "og:title", content: "Cockroach Control Services | Pestr" },
      {
        property: "og:description",
        content:
          "Cockroach control service for hospitality businesses with transparent treatment plans, documentation and quick follow-up.",
      },
      { property: "og:url", content: "https://pestr.in/cockroach-control" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://pestr.in/cockroach-control" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How do you treat cockroaches in restaurants and kitchens?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We inspect harborage zones, entry points and food access routes first, then build a treatment plan around those pressure areas rather than relying on blanket spraying.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: CockroachControlPage,
});

function CockroachControlPage() {
  return (
    <ServicePageLayout
      heroTitle="Cockroach control that stops infestations at the source"
      heroText="Pestr helps food businesses control cockroach pressure through inspection-led treatment, sanitation advice and documented follow-up."
      bullets={[
        "Treatment targeted to breeding zones and entry points",
        "Clear reporting for your team and auditors",
        "Fast response when activity returns between visits",
      ]}
      proofPoints={[
        {
          title: "Inspection-led treatment",
          text: "We identify harbourage areas, moisture points and food access routes before applying treatment so the program is more effective and less disruptive.",
        },
        {
          title: "Prevention support",
          text: "Our team advises on cleaning routines, storage discipline and structural fixes that reduce re-infestation risk.",
        },
      ]}
      serviceAreas={["Hotels", "Restaurants", "Cloud kitchens", "Warehouses"]}
      relatedLinks={[
        { to: "/restaurant-pest-control", label: "Restaurant pest control" },
        { to: "/commercial-kitchen-pest-control", label: "Commercial kitchen pest control" },
      ]}
    />
  );
}
