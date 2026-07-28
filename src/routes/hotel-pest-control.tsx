import { createFileRoute } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";

export const Route = createFileRoute("/hotel-pest-control")({
  head: () => ({
    meta: [
      { title: "Hotel Pest Control in India | Pestr" },
      {
        name: "description",
        content:
          "Protect guest rooms, kitchens and back-of-house areas with Pestr’s hotel pest control service for hygiene, compliance and zero guest disruption.",
      },
      {
        name: "keywords",
        content:
          "hotel pest control, pest control for hotels, hotel pest management, hotel pest control India",
      },
      { property: "og:title", content: "Hotel Pest Control in India | Pestr" },
      {
        property: "og:description",
        content:
          "Hospitality-focused hotel pest control with transparent treatment notes, chemical disclosure and a written 30-day guarantee.",
      },
      { property: "og:url", content: "https://pestr.lovable.app/hotel-pest-control" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://pestr.lovable.app/hotel-pest-control" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Hotel Pest Control",
          serviceType: "Hotel Pest Control",
          provider: {
            "@type": "Organization",
            name: "Pestr",
            url: "https://pestr.lovable.app",
            telephone: "+91-9648116960",
          },
          areaServed: "IN",
          description:
            "Hotel pest control for guest rooms, kitchens and service corridors with full chemical disclosure and documented compliance support.",
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
              name: "How often should hotels schedule pest control?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most hotels benefit from a monthly or quarterly plan depending on guest volume, food setup and historical activity. We tailor it to your property and risk areas.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide reports for hotel audits?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Every visit includes a documented report that can be shared with maintenance teams, auditors or food-safety stakeholders.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: HotelPestControlPage,
});

function HotelPestControlPage() {
  return (
    <ServicePageLayout
      heroTitle="Hotel pest control that protects guest trust"
      heroText="From guest rooms to banquet kitchens, Pestr helps hotels stay clean, compliant and ready for inspection without disrupting the experience."
      bullets={[
        "Chemicals disclosed before each visit",
        "Service reports shared for your maintenance and audit team",
        "Fast response for recurring activity between scheduled visits",
      ]}
      proofPoints={[
        {
          title: "Guest-room focused treatment",
          text: "We protect bedrooms, suites, linen rooms and service areas with discreet treatment plans that reduce disruption to guests and staff.",
        },
        {
          title: "Compliance-ready documentation",
          text: "Every visit gets a written report and chemical log so your operations team can hand it over to auditors or internal teams quickly.",
        },
      ]}
      serviceAreas={["Hotels", "Resorts", "Homestays", "Banquet spaces"]}
      relatedLinks={[
        { to: "/restaurant-pest-control", label: "Restaurant pest control" },
        { to: "/commercial-kitchen-pest-control", label: "Commercial kitchen pest control" },
      ]}
    />
  );
}
