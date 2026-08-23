import { createFileRoute } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";

export const Route = createFileRoute("/mosquito-control")({
  head: () => ({
    meta: [
      { title: "Mosquito Control Services | Pestr" },
      {
        name: "description",
        content:
          "Reduce mosquito populations in outdoor dining, hotel patios, and event spaces with targeted larvicide and adulticide treatments from Pestr.",
      },
      { property: "og:title", content: "Mosquito Control Services | Pestr" },
      { property: "og:description", content: "Professional mosquito control for hospitality outdoor spaces across India." },
      { property: "og:url", content: "https://www.pestr.in/mosquito-control" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.pestr.in/newlogo.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.pestr.in/mosquito-control" }],
  }),
  component: MosquitoControlPage,
});

function MosquitoControlPage() {
  return (
    <ServicePageLayout
      heroTitle="Mosquito control for comfortable outdoor dining"
      heroText="Pestr reduces mosquito populations across outdoor dining spaces, hotel patios, and event lawns with targeted larvicide and adulticide treatments."
      bullets={[
        "Larvicide treatments for breeding sites",
        "Adulticide for active mosquito populations",
        "Seasonal maintenance plans available",
      ]}
      proofPoints={[
        {
          title: "Breeding site targeting",
          text: "We identify and treat standing water, drainage areas, and landscaping zones where mosquitoes breed — reducing populations at the source.",
        },
        {
          title: "Guest comfort focus",
          text: "Treatments are timed around service hours so outdoor dining and event spaces stay comfortable without disrupting operations.",
        },
      ]}
      serviceAreas={["Hotels", "Restaurants", "Event venues", "Resorts"]}
      serviceSlug="mosquito-control"
      breadcrumbs={[
        { name: "Home", url: "https://www.pestr.in/" },
        { name: "Services", url: "https://www.pestr.in/services" },
        { name: "Mosquito Control", url: "https://www.pestr.in/mosquito-control" },
      ]}
    />
  );
}
