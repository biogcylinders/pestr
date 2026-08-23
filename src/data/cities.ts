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

function makeCityDefaults(name: string, state: string): Omit<CityConfig, "slug" | "name" | "state"> {
  return {
    localPestChallenges: [
      `German cockroach pressure in high-density ${name} commercial kitchens`,
      `Rodent intrusion through service corridors and waste handling zones`,
      `Seasonal mosquito and fly spikes in outdoor dining areas`,
    ],
    keyCommercialHubs: [
      `${name} Central Business District`,
      `Major hospitality & dining corridors`,
      `Commercial kitchen & cloud kitchen clusters`,
    ],
    propertiesWeServe: [
      "Hotels & Resorts",
      "Restaurants & Cafes",
      "Commercial & Cloud Kitchens",
      "Banquet Halls & Event Venues",
    ],
    responseGuarantee: "Same-day dispatch available",
    localNotes: `Pestr provides FSSAI-compliant, odorless pest control tailored for ${name}'s hospitality and food-service properties — with documented visit reports after every service.`,
  };
}

export const cities: CityConfig[] = [
  {
    slug: "delhi-ncr",
    name: "Delhi",
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
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    ...makeCityDefaults("Mumbai", "Maharashtra"),
    keyCommercialHubs: [
      "Bandra & Juhu Hospitality Belt",
      "Lower Parel & BKC Dining Corridors",
      "Andheri Cloud Kitchen Hubs",
    ],
    responseGuarantee: "4-hour emergency dispatch",
    localNotes:
      "Mumbai's high-humidity coastal climate drives persistent cockroach and rodent pressure in dense kitchen environments — our gel-bait protocols eliminate infestations without kitchen shutdowns.",
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    ...makeCityDefaults("Bangalore", "Karnataka"),
    keyCommercialHubs: [
      "MG Road & Indiranagar Dining",
      "Whitefield & Electronic City Food Hubs",
      "Koramangala Cloud Kitchen Belt",
    ],
    responseGuarantee: "Same-day service across Bengaluru",
    localNotes:
      "Engineered for Bangalore's tech-corridor hospitality scene — microbreweries, rooftop bars, and high-volume cloud kitchens with strict audit requirements.",
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    ...makeCityDefaults("Hyderabad", "Telangana"),
    keyCommercialHubs: [
      "Banjara Hills & Jubilee Hills Dining",
      "HITEC City Hospitality Belt",
      "Gachibowli Cloud Kitchen Clusters",
    ],
    responseGuarantee: "3-hour rapid dispatch",
  },
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    ...makeCityDefaults("Pune", "Maharashtra"),
    keyCommercialHubs: [
      "Koregaon Park & Camp Dining",
      "Hinjewadi IT Corridor Food Hubs",
      "Kothrud & Aundh Restaurant Clusters",
    ],
    responseGuarantee: "Same-day dispatch in Pune",
  },
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    ...makeCityDefaults("Chennai", "Tamil Nadu"),
    keyCommercialHubs: [
      "T Nagar & Anna Nagar Dining",
      "OMR & IT Corridor Hospitality",
      "Velachery Cloud Kitchen Hubs",
    ],
    responseGuarantee: "4-hour emergency response",
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    ...makeCityDefaults("Kolkata", "West Bengal"),
    keyCommercialHubs: [
      "Park Street & New Market Dining",
      "Salt Lake & Rajarhat Food Hubs",
      "Ballygunge Restaurant Belt",
    ],
    responseGuarantee: "Same-day service in Kolkata",
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    ...makeCityDefaults("Ahmedabad", "Gujarat"),
    keyCommercialHubs: [
      "SG Highway & Prahlad Nagar Dining",
      "Satellite & Vastrapur Food Hubs",
      "Maninagar Commercial Kitchen Belt",
    ],
    responseGuarantee: "3-hour dispatch across Ahmedabad",
  },
  {
    slug: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    ...makeCityDefaults("Noida", "Uttar Pradesh"),
    keyCommercialHubs: [
      "Sector 18 & 62 Dining Corridors",
      "Noida Electronic City Food Hubs",
      "Greater Noida Hospitality Belt",
    ],
    responseGuarantee: "2-hour dispatch in Noida",
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    state: "Haryana",
    ...makeCityDefaults("Gurgaon", "Haryana"),
    keyCommercialHubs: [
      "Cyber Hub & DLF Phase Dining",
      "Golf Course Road Hospitality",
      "Udyog Vihar Cloud Kitchen Hubs",
    ],
    responseGuarantee: "2-hour dispatch in Gurgaon",
  },
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
];

/** Cities shown on service pages for internal linking */
export const featuredCitySlugs = [
  "delhi-ncr",
  "mumbai",
  "bangalore",
  "hyderabad",
  "pune",
  "chennai",
  "kolkata",
  "ahmedabad",
  "noida",
  "gurgaon",
  "varanasi",
];

export function getCityBySlug(slug: string): CityConfig | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getFeaturedCities(): CityConfig[] {
  return featuredCitySlugs
    .map((slug) => getCityBySlug(slug))
    .filter((c): c is CityConfig => c !== undefined);
}
