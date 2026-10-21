// Single source of truth for company facts. Every page, the footer, metadata
// and structured data read from here, so contact details can't drift apart.
//
// Trade facts (products, markets, routes, figures) reflect Angler Trading PLC's public customs
// records as summarised by trade-data services (52wmb, Eximpedia, Tendata) up to March 2026.
export const site = {
  name: 'Angler Trading PLC',
  shortName: 'Angler Trading',
  url: 'https://anglertrading.com',
  tagline: 'Fresh produce · Pulses · Agri-inputs',
  description:
    'Angler Trading PLC is an Addis Ababa–based trading company exporting Ethiopian fresh vegetables, fruit and pulses to Djibouti, Somalia, Kenya and Pakistan, and importing agricultural inputs and commercial trucks.',
  email: 'info@anglertrading.com',
  phone: '+251 116 123 456',
  phoneHref: 'tel:+251116123456',
  address: {
    street: 'Bole Road',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    countryCode: 'ET',
    postalCode: '1000',
    geo: { lat: 8.9806, lng: 38.7578 },
  },
  mapUrl: 'https://www.google.com/maps?q=Angler+Trading+PLC+Bole+Road+Addis+Ababa',
  mapEmbed: 'https://www.google.com/maps?q=Bole+Road,+Addis+Ababa,+Ethiopia&z=14&output=embed',
  hours: [
    { days: 'Monday – Friday', time: '09:00 – 18:00' },
    { days: 'Saturday', time: '09:00 – 13:00' },
    { days: 'Sunday', time: 'Closed' },
  ],
  social: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/angler-trading-plc' },
    { name: 'X (Twitter)', href: 'https://twitter.com/anglertrading' },
    { name: 'Facebook', href: 'https://facebook.com/anglertrading' },
  ],
} as const

export const nav = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const

// From public customs records, to March 2026
export const stats = [
  { value: 238, suffix: '+', label: 'International shipments' },
  { value: 24, suffix: '', label: 'Trading partners' },
  { value: 50, suffix: '+', label: 'Products traded' },
  { value: 7, suffix: '', label: 'Trading countries' },
] as const

export type Sector = {
  id: string
  /** Three-letter reference used in indices and tables */
  code: string
  title: string
  short: string
  kind: 'Import' | 'Export'
  /** Where the goods go (exports) or are delivered (imports), and how they get there */
  markets: string
  route: string
  image: string
  imageAlt: string
  description: string
  capabilities: string[]
  products: string[]
  // SEO: each sector has its own landing page at /services/[id]
  seoTitle: string
  seoDescription: string
  keywords: string[]
  faqs: { q: string; a: string }[]
}

export const sectors: Sector[] = [
  {
    id: 'fresh-vegetables',
    code: 'VEG',
    title: 'Fresh Vegetables',
    short: 'Cabbage, lettuce, potatoes, tomatoes, onions, garlic and herbs, exported fresh to regional buyers.',
    kind: 'Export',
    markets: 'Djibouti, Somalia',
    route: 'Road via Dire Dawa or Jijiga customs',
    image: '/images/photos/vegetables.webp',
    imageAlt: 'Market baskets of fresh carrots, cucumbers, green beans and red chillies',
    description:
      'Our largest line. We buy fresh vegetables from Ethiopian growers, grade and pack them, and move them overland to buyers in Djibouti and Somalia within days of harvest — with export documentation and customs handled at Dire Dawa and Jijiga.',
    capabilities: [
      'Sourcing direct from Ethiopian growers',
      'Grading, sorting and packing for export',
      'Export permits and phytosanitary certificates',
      'Fast overland delivery to keep produce fresh',
    ],
    products: [
      'Cabbage & lettuce',
      'Potatoes',
      'Tomatoes',
      'White & red onions',
      'Garlic',
      'Root vegetables',
      'Coriander & fresh herbs',
      'Khat (chat), for licensed regional buyers',
    ],
    seoTitle: 'Fresh Vegetable Exporter in Ethiopia',
    seoDescription:
      'Ethiopian fresh vegetables — cabbage, lettuce, potatoes, tomatoes, onions and garlic — graded, documented and delivered overland to Djibouti and Somalia.',
    keywords: ['Ethiopian vegetable exporter', 'fresh produce export Ethiopia', 'vegetables to Djibouti', 'potato exporter Ethiopia', 'onion exporter Ethiopia'],
    faqs: [
      { q: 'Which vegetables do you export?', a: 'Mainly cabbage, lettuce, potatoes, tomatoes, onions, garlic, root vegetables and fresh herbs such as coriander. Availability follows the Ethiopian growing seasons — ask us for what is in season now.' },
      { q: 'How do you keep produce fresh in transit?', a: 'We pack close to harvest and move goods overland, so produce reaches buyers in Djibouti and Somalia within days. Export paperwork is prepared in advance to avoid waiting at the border.' },
      { q: 'Can you supply on a regular schedule?', a: 'Yes. Most of our buyers take recurring shipments; we agree volumes and frequency up front and plan sourcing around them.' },
    ],
  },
  {
    id: 'fresh-fruit',
    code: 'FRU',
    title: 'Fresh Fruit',
    short: 'Bananas, oranges and avocados from Ethiopian farms, for wholesale buyers across the region.',
    kind: 'Export',
    markets: 'Djibouti, Somalia',
    route: 'Road via Dire Dawa or Jijiga customs',
    image: '/images/photos/fruit.webp',
    imageAlt: 'Bunches of ripe yellow bananas stacked together',
    description:
      'Ethiopian bananas, citrus and avocados, sourced from producing regions and delivered to wholesale buyers in neighbouring markets. We handle grading, packing and export documentation so fruit arrives in saleable condition.',
    capabilities: [
      'Sourcing from producing regions across Ethiopia',
      'Ripeness grading and careful packing',
      'Export documentation and certificates',
      'Consolidated loads for wholesale buyers',
    ],
    products: ['Bananas', 'Oranges', 'Avocados', 'Seasonal fruit on request'],
    seoTitle: 'Ethiopian Fresh Fruit Exporter',
    seoDescription:
      'Ethiopian bananas, oranges and avocados graded, packed and exported to wholesale buyers in Djibouti, Somalia and the wider region.',
    keywords: ['Ethiopian fruit exporter', 'banana exporter Ethiopia', 'avocado exporter Ethiopia', 'fresh fruit Djibouti', 'orange supplier Ethiopia'],
    faqs: [
      { q: 'Which fruit can you supply?', a: 'Bananas, oranges and avocados are our main lines, with other seasonal fruit available on request.' },
      { q: 'Do you supply wholesale quantities?', a: 'Yes. We work with wholesale and distribution buyers and consolidate loads to keep the landed cost down.' },
    ],
  },
  {
    id: 'pulses-grains',
    code: 'PUL',
    title: 'Pulses & Grains',
    short: 'Pinto beans and other Ethiopian pulses, cleaned and bagged for buyers in Kenya, Pakistan and beyond.',
    kind: 'Export',
    markets: 'Kenya, Pakistan',
    route: 'Road via Moyale; sea via Djibouti',
    image: '/images/photos/pulses.webp',
    imageAlt: 'Bowls of dried beans and lentils on a dark surface',
    description:
      'Ethiopia is one of Africa’s largest pulse producers. We source pinto beans and other pulses, have them cleaned and bagged to buyer specification, and ship by road to Kenya or by sea through Djibouti to markets such as Pakistan.',
    capabilities: [
      'Sourcing from Ethiopian pulse-growing regions',
      'Cleaning, grading and bagging to specification',
      'Export documentation and certificates of origin',
      'Road delivery to Kenya, sea freight via Djibouti',
    ],
    products: ['Pinto beans', 'Other dried beans', 'Lentils', 'Chickpeas', 'Grains on request'],
    seoTitle: 'Ethiopian Pulses Exporter — Pinto Beans',
    seoDescription:
      'Ethiopian pinto beans and pulses, cleaned and bagged to specification, exported by road to Kenya and by sea via Djibouti to Pakistan and other markets.',
    keywords: ['Ethiopian pulses exporter', 'pinto beans exporter Ethiopia', 'beans supplier Ethiopia', 'pulses to Kenya', 'Ethiopian beans Pakistan'],
    faqs: [
      { q: 'What volumes do you ship?', a: 'Typical orders run from a single truckload to full container loads. Recent shipments to Kenya have been around 125 tonnes; tell us your requirement and we will quote.' },
      { q: 'Can you meet a specific grade or bag size?', a: 'Yes. Send your specification — grade, moisture, admixture and bag size — and we will clean and pack to it.' },
    ],
  },
  {
    id: 'agricultural-inputs',
    code: 'AGR',
    title: 'Agricultural Inputs',
    short: 'Crop-protection products imported for Ethiopian farms, cooperatives and agro-dealers.',
    kind: 'Import',
    markets: 'Nationwide, Ethiopia',
    route: 'Sea via Djibouti, then road',
    image: '/images/photos/agri-inputs.webp',
    imageAlt: 'Rows of green crops on a hillside farm',
    description:
      'Healthy harvests start with the right inputs. We import crop-protection products — insecticides, fungicides and herbicides — from established international manufacturers and handle registration paperwork, customs clearance and delivery.',
    capabilities: [
      'Sourcing from established manufacturers',
      'Import permits and regulatory documentation',
      'Customs clearance through Djibouti',
      'Delivery to cooperatives and agro-dealers',
    ],
    products: ['Insecticides', 'Fungicides', 'Herbicides', 'Other crop-protection products'],
    seoTitle: 'Agricultural Inputs Importer in Ethiopia',
    seoDescription:
      'Crop-protection products — insecticides, fungicides and herbicides — imported from established manufacturers for Ethiopian farms, cooperatives and agro-dealers.',
    keywords: ['agrochemical importer Ethiopia', 'crop protection Ethiopia', 'pesticide supplier Addis Ababa', 'agricultural inputs Ethiopia', 'herbicide importer Ethiopia'],
    faqs: [
      { q: 'Which products do you import?', a: 'Crop-protection products including insecticides, fungicides and herbicides, sourced from established international manufacturers.' },
      { q: 'Do you handle the import paperwork?', a: 'Yes — import permits, regulatory documentation and customs clearance are part of the service.' },
    ],
  },
  {
    id: 'commercial-vehicles',
    code: 'TRK',
    title: 'Commercial Vehicles',
    short: 'Goods-transport trucks imported from China, cleared and delivered in Ethiopia.',
    kind: 'Import',
    markets: 'Nationwide, Ethiopia',
    route: 'Sea via Djibouti, then road',
    image: '/images/photos/vehicles.webp',
    imageAlt: 'White truck on an open highway through dry savanna',
    description:
      'Moving produce takes reliable trucks. We import new goods-transport vehicles from Chinese manufacturers and handle shipping through Djibouti, customs clearance and registration-ready documentation.',
    capabilities: [
      'Sourcing new trucks from Chinese manufacturers',
      'Shipping via the Port of Djibouti',
      'Customs clearance and duty guidance',
      'Registration-ready documentation',
    ],
    products: ['Cargo trucks', 'Light commercial vehicles', 'Spare parts on request'],
    seoTitle: 'Commercial Truck Importer in Ethiopia',
    seoDescription:
      'New goods-transport trucks imported from China, shipped via Djibouti, cleared through customs and delivered registration-ready in Ethiopia.',
    keywords: ['truck importer Ethiopia', 'commercial vehicle import Ethiopia', 'Chinese trucks Ethiopia', 'cargo truck supplier Addis Ababa'],
    faqs: [
      { q: 'Can you import a specific truck model?', a: 'Yes. Tell us the model, configuration and quantity and we will source it and quote the full landed cost, including duties.' },
      { q: 'Do you handle registration documents?', a: 'We provide registration-ready documentation along with customs clearance.' },
    ],
  },
]

export const process = [
  {
    title: 'Sourcing',
    description: 'We buy direct from Ethiopian growers — or, for imports, from established manufacturers — to your volume and specification.',
  },
  {
    title: 'Grading & packing',
    description: 'Produce is sorted, graded and packed for the journey; imports are inspected before they ship.',
  },
  {
    title: 'Documents & customs',
    description: 'Export permits, phytosanitary certificates and clearance at Dire Dawa, Jijiga or Djibouti, prepared in advance.',
  },
  {
    title: 'Delivery',
    description: 'Fast overland delivery to Djibouti, Somalia and Kenya, or by sea through Djibouti. One contact from order to arrival.',
  },
] as const

export const values = [
  { title: 'Freshness', description: 'Short supply chains from farm to buyer, so produce arrives in saleable condition.' },
  { title: 'Integrity', description: 'Honest grading, transparent pricing and paperwork done properly.' },
  { title: 'Reliability', description: 'Recurring shipments on the schedule we agree, season after season.' },
  { title: 'Partnership', description: 'Long-term relationships with growers, buyers and suppliers across the region.' },
  { title: 'Know-how', description: 'Practical experience of Ethiopian export rules, border crossings and regional markets.' },
  { title: 'Responsibility', description: 'Fair dealing with farmers and respect for the communities we source from.' },
] as const

// Principal trade lanes, drawn on the map and listed in the lanes table
export const lanes = [
  { ref: 'L-01', route: 'djibouti', from: 'Ethiopia', to: 'Djibouti', via: 'Dire Dawa customs', cargo: 'Vegetables & fruit', mode: 'Road' },
  { ref: 'L-02', route: 'somalia', from: 'Ethiopia', to: 'Somalia', via: 'Jijiga customs', cargo: 'Vegetables & herbs', mode: 'Road' },
  { ref: 'L-03', route: 'kenya', from: 'Ethiopia', to: 'Kenya', via: 'Moyale', cargo: 'Pinto beans', mode: 'Road' },
  { ref: 'L-04', route: 'karachi', from: 'Ethiopia', to: 'Pakistan', via: 'Djibouti', cargo: 'Pulses', mode: 'Road + Sea' },
  { ref: 'L-05', route: 'shanghai', from: 'China', to: 'Ethiopia', via: 'Djibouti', cargo: 'Trucks & crop-protection products', mode: 'Sea + Road' },
  { ref: 'L-06', route: 'jebelAli', from: 'UAE', to: 'Ethiopia', via: 'Djibouti', cargo: 'Agricultural commodities', mode: 'Sea + Road' },
] as const

export const faqs = [
  {
    q: 'What information do you need for a quote?',
    a: 'The product, quantity, grade or specification, destination and timing. For imports, the product or model and your delivery location. We reply within one business day.',
  },
  {
    q: 'Which markets do you export to?',
    a: 'Mainly Djibouti and Somalia by road, Kenya by road via Moyale, and Pakistan by sea through Djibouti. We can quote for other destinations on request.',
  },
  {
    q: 'Do you handle export documentation and customs?',
    a: 'Yes. We prepare export permits, phytosanitary certificates and certificates of origin, and clear goods through Dire Dawa, Jijiga or Djibouti.',
  },
  {
    q: 'Is there a minimum order?',
    a: 'Fresh produce usually moves by the truckload; pulses from one truckload up to container loads. Tell us what you need and we will tell you what is practical.',
  },
  {
    q: 'Can you supply all year round?',
    a: 'Many lines are available year-round thanks to Ethiopia’s varied growing regions; others are seasonal. Ask us what is in season for your delivery window.',
  },
] as const
