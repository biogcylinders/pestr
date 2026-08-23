import { createFileRoute } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";

export const Route = createFileRoute("/termite-treatment")({
  head: () => ({
    meta: [
      { title: "Termite Control Services | Pestr" },
      {
        name: "description",
        content:
          "Protect your property from structural termite damage with soil treatment, baiting systems, and annual inspection plans from Pestr.",
      },
      { property: "og:title", content: "Termite Control Services | Pestr" },
      { property: "og:description", content: "Professional termite treatment for hotels, restaurants, and commercial properties across India." },
      { property: "og:url", content: "https://www.pestr.in/termite-treatment" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.pestr.in/newlogo.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.pestr.in/termite-treatment" }],
  }),
  component: TermiteTreatmentPage,
});

function TermiteTreatmentPage() {
  return (
    <ServicePageLayout
      heroTitle="Termite control that protects your property's structure"
      heroText="Pestr provides subterranean termite soil treatment, baiting systems, and pre-construction barriers — with annual inspection plans for long-term protection."
      bullets={[
        "Subterranean termite soil treatment",
        "Baiting systems with monitoring stations",
        "Pre-construction barrier options",
      ]}
      proofPoints={[
        {
          title: "Structural protection focus",
          text: "We identify active termite colonies and treat soil perimeters, foundation voids, and wooden structures to stop damage before it spreads.",
        },
        {
          title: "Long-term monitoring",
          text: "Annual inspection and maintenance plans keep your property protected year-round with documented visit reports.",
        },
      ]}
      serviceAreas={["Hotels", "Restaurants", "Commercial buildings", "Warehouses"]}
      serviceSlug="termite-treatment"
      breadcrumbs={[
        { name: "Home", url: "https://www.pestr.in/" },
        { name: "Services", url: "https://www.pestr.in/services" },
        { name: "Termite Control", url: "https://www.pestr.in/termite-treatment" },
      ]}
    />
  );
}
