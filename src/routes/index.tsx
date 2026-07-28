import { createFileRoute } from "@tanstack/react-router";
import Landing from "@/components/landing/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pestr — Reliable Pest Control for Hotels & Restaurants" },
      {
        name: "description",
        content:
          "Pestr provides simple, honest pest management for kitchens, hotels and restaurants — every chemical disclosed, every visit documented, with a written 30-day guarantee.",
      },
      { property: "og:title", content: "Pestr — Reliable Pest Control for Hotels & Restaurants" },
      {
        property: "og:description",
        content:
          "Simple, honest pest management for hospitality — full chemical disclosure, FSSAI-ready documentation, and a written 30-day guarantee.",
      },
      { property: "og:url", content: "https://pestr.lovable.app/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://pestr.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Pest Control",
          provider: {
            "@type": "Organization",
            name: "Pestr",
            url: "https://pestr.lovable.app",
            telephone: "+91-9648116960",
          },
          areaServed: "IN",
          audience: {
            "@type": "BusinessAudience",
            audienceType: "Hotels, restaurants and commercial kitchens",
          },
          description:
            "Hospitality-focused pest management with full chemical disclosure, FSSAI/HACCP-ready documentation and a written 30-day guarantee.",
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
              name: "How is Pestr different from a national pest-control brand?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We only serve hospitality — kitchens, F&B outlets and audit cycles. Everything is designed for that, not for warehouses or offices.",
              },
            },
            {
              "@type": "Question",
              name: "Do you disclose every chemical?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. A signed Safety Data Sheet is handed to your duty manager before any treatment. The full library is in our chemicals section.",
              },
            },
            {
              "@type": "Question",
              name: "What if we see a pest between visits?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Message us on WhatsApp. A lead technician is on-site within 24 hours — at no cost, as part of the 30-day guarantee.",
              },
            },
            {
              "@type": "Question",
              name: "Will you fit into our FSSAI documentation?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "That's the default. Every property gets a quarterly dossier formatted for FSSAI, HACCP and internal audits.",
              },
            },
            {
              "@type": "Question",
              name: "Are your technicians food-safety trained?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, with annual refresher certification. We share certificates with your compliance team on request.",
              },
            },
            {
              "@type": "Question",
              name: "What's the minimum contract length?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "12 months. Shorter engagements don't give us enough baseline data to stand behind the guarantee.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <Landing />;
}
