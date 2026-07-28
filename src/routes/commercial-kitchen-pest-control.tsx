import { createFileRoute } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";

export const Route = createFileRoute("/commercial-kitchen-pest-control")({
  head: () => ({
    meta: [
      { title: "Commercial Kitchen Pest Control | Pestr" },
      {
        name: "description",
        content:
          "Protect commercial kitchens with Pestr’s pest control service focused on FSSAI readiness, documented inspections and year-round prevention.",
      },
      {
        name: "keywords",
        content:
          "commercial kitchen pest control, FSSAI pest control, kitchen pest control, commercial kitchen pest management",
      },
      { property: "og:title", content: "Commercial Kitchen Pest Control | Pestr" },
      {
        property: "og:description",
        content:
          "Commercial kitchen pest control built for busy food businesses that need reliable prevention and audit-ready records.",
      },
      { property: "og:url", content: "https://pestr.in/commercial-kitchen-pest-control" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://pestr.in/commercial-kitchen-pest-control" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Commercial Kitchen Pest Control",
          serviceType: "Commercial Kitchen Pest Control",
          provider: {
            "@type": "Organization",
            name: "Pestr",
            url: "https://pestr.in",
            telephone: "+91-9648116960",
          },
          areaServed: "IN",
          description:
            "Commercial kitchen pest control with documentation, transparent chemistry and preventive plans built for high-risk food-service environments.",
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
              name: "Why do commercial kitchens need dedicated pest control?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Food prep areas, storage zones and service corridors create constant pressure points. A dedicated plan helps reduce risk without interrupting production.",
              },
            },
            {
              "@type": "Question",
              name: "Do you support FSSAI-ready records?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We provide documentation that fits into compliance records, internal audits and food-safety workflows.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: CommercialKitchenPestControlPage,
});

function CommercialKitchenPestControlPage() {
  return (
    <ServicePageLayout
      heroTitle="Commercial kitchen pest control built for food safety teams"
      heroText="Pestr helps commercial kitchens stay ahead of cockroaches, rodents and stored-product pests with a practical plan that supports audits and daily operations."
      bullets={[
        "Preventive schedules designed for busy production environments",
        "Written service notes for your compliance file",
        "Prompt action when new pest activity is detected",
      ]}
      proofPoints={[
        {
          title: "Audit-friendly processes",
          text: "We document treatments, chemicals and follow-up actions so your operations team can keep records aligned with FSSAI and internal SOP expectations.",
        },
        {
          title: "High-risk area expertise",
          text: "From prep stations to dry storage, our approach targets entry points and recurring pest pressure without compromising food-safety routines.",
        },
      ]}
      serviceAreas={["Cloud kitchens", "Central kitchens", "Catering facilities", "Institutional kitchens"]}
      relatedLinks={[
        { to: "/restaurant-pest-control", label: "Restaurant pest control" },
        { to: "/hotel-pest-control", label: "Hotel pest control" },
      ]}
    />
  );
}
