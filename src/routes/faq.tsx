import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import { getWhatsAppLink, TEL_LINK, WA_FORMATTED } from "@/lib/constants";
import { Search, ChevronDown, MessageCircle, Phone, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Frequently Asked Questions | Pestr" },
      { name: "description", content: "Answers to common questions about Pestr hospitality pest control, food-safe chemistry, FSSAI compliance, and the 30-day guarantee." },
    ],
    links: [{ rel: "canonical", href: "https://www.pestr.in/faq" }],
  }),
  component: FAQPage,
});

const faqDatabase = [
  {
    category: "Safety & Chemistry",
    question: "Are your pest control treatments food-safe for commercial kitchens?",
    answer: "Yes. We use WHO-approved, odorless, food-safe chemistry for F&B operations. In food prep zones we rely on targeted gel matrices and non-airborne bait that pose zero contamination risk.",
  },
  {
    category: "Safety & Chemistry",
    question: "Do you disclose every active ingredient used during visits?",
    answer: "Absolutely. Before treatment begins, a signed Safety Data Sheet (SDS) is handed to your duty manager. Every visit report documents chemical name, concentration, and application zone.",
  },
  {
    category: "Audits & FSSAI",
    question: "How does Pestr support FSSAI & HACCP health inspections?",
    answer: "Every property receives a digital audit binder with visit logs, technician credentials, SDS sheets, and bait station mapping — all formatted for FSSAI and hygiene audit requirements.",
  },
  {
    category: "Audits & FSSAI",
    question: "Are your technicians certified in food safety protocols?",
    answer: "Yes. Technicians undergo annual hospitality food safety training. Certificates and ID badges are shared with your compliance team on request.",
  },
  {
    category: "Guarantee & Pricing",
    question: "How does the written 30-day retreat guarantee work?",
    answer: "If pest activity is spotted within 30 days of a scheduled visit, notify us on WhatsApp. A lead technician will re-treat the affected zone within 24 hours at ₹0 extra cost.",
  },
  {
    category: "Guarantee & Pricing",
    question: "Are there hidden callout fees or lock-in surprises?",
    answer: "No. All prices are locked in after the initial site walk. We provide transparent line-item pricing so you know exactly what each visit costs.",
  },
  {
    category: "Operations",
    question: "Can treatments be scheduled outside kitchen operational hours?",
    answer: "Yes. We offer early mornings, late nights, or off-peak gaps between service hours to ensure zero disruption to guests or staff.",
  },
  {
    category: "Operations",
    question: "What is the minimum contract period?",
    answer: "Our standard contract is 12 months. Long-term monitoring provides the baseline data needed to guarantee total pest elimination.",
  },
];

function FAQContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ["All", "Safety & Chemistry", "Audits & FSSAI", "Guarantee & Pricing", "Operations"];

  const filteredFaqs = faqDatabase.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search questions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-xl border border-border bg-card pl-11 pr-4 py-3 text-sm text-foreground focus:border-brass focus:outline-none"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-muted-foreground hover:border-brass hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordions */}
      <div className="space-y-2">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-10 border border-dashed border-border rounded-xl">
            <HelpCircle className="mx-auto h-7 w-7 text-muted-foreground" />
            <p className="mt-2 text-sm text-muted-foreground">No questions match your search.</p>
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question} className="rounded-xl border border-border bg-card overflow-hidden">
                <button
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-muted/30 transition-colors"
                >
                  <span className="text-sm font-semibold text-foreground">{faq.question}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180 text-brass" : ""}`} />
                </button>
                {isOpen && (
                  <div className="border-t border-border/50 px-5 py-4 bg-muted/20">
                    <span className="inline-block mb-2 rounded-full bg-brass/10 px-2.5 py-0.5 text-[10px] font-bold text-brass uppercase">
                      {faq.category}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Contact card — at the bottom */}
      <div className="rounded-xl border border-border bg-card p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-foreground">Still have questions?</p>
          <p className="mt-0.5 text-xs text-muted-foreground">Our team responds on WhatsApp within a few hours.</p>
        </div>
        <div className="flex flex-wrap gap-2 shrink-0">
          <a
            href={getWhatsAppLink("Hi! I have a question about Pestr's services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Ask on WhatsApp
          </a>
          <a
            href={TEL_LINK}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-xs font-semibold text-foreground hover:border-brass"
          >
            <Phone className="h-3.5 w-3.5 text-brass" /> Call Us
          </a>
        </div>
      </div>
    </div>
  );
}

function FAQPage() {
  return (
    <ServicePageLayout
      heroTitle="Frequently Asked Questions"
      heroText="Answers to the most common questions from hotel managers, chefs, and facility teams about our treatments, documentation, and guarantees."
      bullets={["Food-safe chemistry", "Audit-ready reporting", "24-hr response guarantee", "Flexible scheduling"]}
      proofPoints={[
        { title: "WHO & FSSAI Compliant", text: "All products used conform to food safety guidelines for commercial kitchens." },
        { title: "No Operational Disruption", text: "Treatments are scheduled around shifts so guests and staff are never impacted." },
      ]}
      serviceAreas={["Hotels", "Restaurants", "Cloud Kitchens", "Banquets"]}
      relatedLinks={[
        { to: "/services", label: "Services" },
        { to: "/pricing", label: "Pricing" },
        { to: "/contact", label: "Contact Us" },
      ]}
      extraContent={<FAQContent />}
    />
  );
}
