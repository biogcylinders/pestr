import { createFileRoute } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Pestr" },
      { name: "description", content: "Join Pestr — career opportunities in field operations, hospitality-focused pest control and customer success." },
      { property: "og:title", content: "Careers at Pestr" },
      { property: "og:description", content: "Join Pestr — career opportunities in field operations, hospitality-focused pest control and customer success." },
      { property: "og:url", content: "https://www.pestr.in/careers" },
      { property: "og:image", content: "https://www.pestr.in/newlogo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Careers at Pestr" },
      { name: "twitter:description", content: "Join Pestr — career opportunities in field operations, hospitality-focused pest control and customer success." },
      { name: "twitter:image", content: "https://www.pestr.in/newlogo.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.pestr.in/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <ServicePageLayout
      heroTitle="Careers — join Pestr"
      heroText="We hire technicians and operations staff who care about delivering reliable, documented pest-control services for hospitality teams." 
      bullets={["Field technician roles", "Quality & compliance roles", "Competitive pay"]}
      proofPoints={[{ title: "Grow with us", text: "Training and clear career paths for field and operations staff." }]}
      serviceAreas={["Nationwide"]}
      relatedLinks={[{ to: "/contact", label: "Contact" }]}
    />
  );
}
