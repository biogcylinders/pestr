export interface CityConfig {
  slug: string;
  name: string;
  state: string;
  localPestChallenges: string[];
  keyCommercialHubs: string[];
  propertiesWeServe: string[];
  responseGuarantee: string;
  localNotes: string;
}

export const cities: CityConfig[] = [
  {
    slug: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    localPestChallenges: [
      "German cockroach resistance in dense heritage market kitchens",
      "High rodent pressure near Ghat commercial stretches & old alleys",
      "Humidity-induced outdoor mosquito vector outbreaks",
    ],
    keyCommercialHubs: [
      "Godowlia & Dashashwamedh Dining Corridor",
      "Cantonment Hotel Belt",
      "BHU / Lanka Food Outlets",
      "Shivpur & Nadesar Cloud Kitchen Hubs",
    ],
    propertiesWeServe: [
      "Heritage Hotels & Boutique Homestays",
      "Fine Dining Restos & Ghat-Side Cafes",
      "High-Volume Commercial & Cloud Kitchens",
      "Banquet Halls & Wedding Lawns",
      "Food Processing & Cold Storage Facilities",
    ],
    responseGuarantee: "2-hour rapid dispatch",
    localNotes:
      "Varanasi's dense heritage structures demand non-invasive gel baiting and silent night-shift treatments so guest experience remains completely undisturbed.",
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    localPestChallenges: [
      "Heavy commercial kitchen grease trap infestations",
      "Subterranean termite threats in wooden heritage dining spaces",
      "Seasonal fly & mosquito spikes along Gomti Nagar food hubs",
    ],
    keyCommercialHubs: [
      "Hazratganj Retail & Dining",
      "Gomti Nagar Commercial Complex",
      "Aliganj & Indira Nagar Kitchen Chains",
    ],
    propertiesWeServe: [
      "Star Hotels & Luxury Resorts",
      "Mughlai Dining Outlets & Bakeries",
      "Corporate Canteens & Cloud Kitchens",
      "Event Venues & Convention Centers",
    ],
    responseGuarantee: "3-hour emergency outbreak guarantee",
    localNotes:
      "Engineered for high-volume Awadhi culinary establishments requiring 100% odorless, FSSAI-compliant gel matrices.",
  },
  {
    slug: "delhi-ncr",
    name: "Delhi NCR",
    state: "Delhi NCR",
    localPestChallenges: [
      "Drain fly & cockroach infestation in high-output cloud kitchens",
      "Rodent intrusion through underground cable voids",
      "Monsoon vector outbreaks in outdoor patio seating",
    ],
    keyCommercialHubs: [
      "Connaught Place & Aerocity Hospitality",
      "Cyber Hub & Sector 29 Gurugram",
      "Noida Electronic City Food Hubs",
    ],
    propertiesWeServe: [
      "5-Star Hotels & Executive Suites",
      "Microbreweries & Rooftop Bars",
      "Industrial Food Prep & Packaging Plants",
      "Dark Kitchens & Quick Service Restaurants (QSR)",
    ],
    responseGuarantee: "Dedicated 24/7 across NCR",
    localNotes:
      "Full digital SDS dossier and automated visit logs tailored for strict multinational food safety audits.",
  },
];