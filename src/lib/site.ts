// Single source of truth for company facts. Every page, the footer, metadata
// and structured data read from here, so contact details can't drift apart.
export const site = {
  name: 'Angler Trading PLC',
  shortName: 'Angler Trading',
  url: 'https://anglertrading.com',
  tagline: 'Import · Export · Wholesale',
  description:
    'Angler Trading PLC is an Addis Ababa–based import, export and wholesale company connecting Ethiopian producers and businesses with global markets — medical supplies, construction materials, petroleum, vehicles, coffee and tea.',
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

export const stats = [
  { value: 8, suffix: '+', label: 'Countries served' },
  { value: 300, suffix: '+', label: 'Supplier & trade partners' },
  { value: 10000, suffix: '+', label: 'Clients supplied' },
  { value: 99, suffix: '%', label: 'On-time fulfilment' },
] as const

export type Sector = {
  id: string
  /** Three-letter reference used in indices and tables */
  code: string
  title: string
  short: string
  kind: 'Import' | 'Export' | 'Wholesale'
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
    id: 'medical-supplies',
    code: 'MED',
    title: 'Medical Supplies',
    short: 'Medicines, equipment and consumables for hospitals, clinics and pharmacies.',
    kind: 'Import',
    image: '/images/photos/medical.webp',
    imageAlt: 'Blister packs of tablets on a blue surface',
    description:
      'We import and distribute human medicines, medical equipment and healthcare consumables from certified manufacturers, so facilities across Ethiopia can rely on consistent, quality-assured supply.',
    capabilities: [
      'Sourcing from certified, audited manufacturers',
      'Regulatory documentation and import permits',
      'Cold-chain aware handling where required',
      'Scheduled and emergency replenishment',
    ],
    products: ['Pharmaceuticals', 'Diagnostic equipment', 'Surgical consumables', 'PPE', 'Lab supplies'],
    seoTitle: 'Medical Supplies Importer in Ethiopia',
    seoDescription:
      'Importer and distributor of medicines, medical equipment and healthcare consumables in Ethiopia, from certified manufacturers, for hospitals and clinics.',
    keywords: ['medical supplies import Ethiopia', 'medical equipment supplier Addis Ababa', 'pharmaceutical importer Ethiopia', 'hospital supplies Ethiopia', 'healthcare consumables distributor'],
    faqs: [
      { q: 'Can you import medicines and medical equipment into Ethiopia?', a: 'Yes. We source human medicines, diagnostic and medical equipment and healthcare consumables from certified manufacturers and handle import permits, regulatory documentation and customs clearance.' },
      { q: 'Who do you supply medical products to?', a: 'Hospitals, clinics, pharmacies, NGOs and healthcare distributors across Ethiopia, on scheduled or emergency replenishment.' },
      { q: 'Can you source a specific brand or product specification?', a: 'Yes. Share the product name, specification or tender document and we will source matching, certified products and quote landed cost.' },
    ],
  },
  {
    id: 'construction-materials',
    code: 'CON',
    title: 'Construction Materials',
    short: 'Building materials, hardware, metals and plumbing for builders and retailers.',
    kind: 'Import',
    image: '/images/photos/construction.webp',
    imageAlt: 'Construction workers placing steel reinforcement on a concrete deck',
    description:
      'From structural steel to finishing hardware, we supply contractors, developers and retailers with construction materials at wholesale and retail scale — on schedule and to specification.',
    capabilities: [
      'Project-based bulk procurement',
      'Specification matching and technical support',
      'Consolidated shipping to reduce landed cost',
      'Site and warehouse delivery',
    ],
    products: ['Steel & metals', 'Cement & aggregates', 'Hardware & fixings', 'Plumbing systems', 'Finishing materials'],
    seoTitle: 'Construction Materials in Ethiopia',
    seoDescription:
      'Steel, cement, hardware, plumbing and finishing materials supplied in bulk or retail across Ethiopia, with project procurement and site delivery.',
    keywords: ['construction materials supplier Ethiopia', 'steel importer Ethiopia', 'building materials Addis Ababa', 'hardware wholesale Ethiopia', 'plumbing supplies Ethiopia'],
    faqs: [
      { q: 'Do you supply construction projects in bulk?', a: 'Yes. We handle project-based procurement for contractors and developers, consolidating shipments to reduce landed cost and delivering to site or warehouse.' },
      { q: 'Which construction materials do you import?', a: 'Structural steel and metals, cement and aggregates, hardware and fixings, plumbing systems and finishing materials.' },
      { q: 'Do you also sell to retailers?', a: 'Yes. We supply hardware stores and building-material retailers at wholesale volume pricing.' },
    ],
  },
  {
    id: 'petroleum-products',
    code: 'PET',
    title: 'Petroleum & Energy',
    short: 'Petroleum products, natural gas and lubricants for industry and commerce.',
    kind: 'Import',
    image: '/images/photos/petroleum.webp',
    imageAlt: 'Refinery towers and stacks under an overcast sky',
    description:
      'We import and distribute petroleum products, natural gas and industrial lubricants, giving industrial and commercial clients a dependable energy supply backed by transparent pricing.',
    capabilities: [
      'Contracted and spot supply options',
      'Compliance with national energy regulations',
      'Safe storage and handling partners',
      'Industrial and fleet accounts',
    ],
    products: ['Fuels', 'Natural gas', 'Industrial lubricants', 'Bitumen', 'Specialty oils'],
    seoTitle: 'Petroleum & Lubricants in Ethiopia',
    seoDescription:
      'Petroleum products, natural gas and industrial lubricants imported and distributed in Ethiopia, with contracted and spot supply for industry and fleets.',
    keywords: ['petroleum products supplier Ethiopia', 'lubricants importer Ethiopia', 'industrial lubricants Addis Ababa', 'natural gas supply Ethiopia', 'fuel supplier Ethiopia'],
    faqs: [
      { q: 'What petroleum products do you supply?', a: 'Fuels, natural gas, industrial lubricants, bitumen and specialty oils for industrial, commercial and fleet clients.' },
      { q: 'Do you offer contracted supply?', a: 'Yes. We offer both contracted, scheduled supply and spot purchases, in compliance with national energy regulations.' },
    ],
  },
  {
    id: 'vehicle-import',
    code: 'VEH',
    title: 'Vehicle Import',
    short: 'Commercial and personal vehicles, spare parts and accessories — cleared and delivered.',
    kind: 'Import',
    image: '/images/photos/vehicles.webp',
    imageAlt: 'White truck on an open highway through dry savanna',
    description:
      'We handle vehicle importation end to end — sourcing, inspection, shipping, customs clearance and documentation — so you receive road-ready vehicles without the paperwork headache.',
    capabilities: [
      'Pre-shipment inspection',
      'Customs clearance and duty guidance',
      'Registration-ready documentation',
      'Spare parts and accessory sourcing',
    ],
    products: ['Commercial vehicles', 'Passenger vehicles', 'Machinery', 'Spare parts', 'Accessories'],
    seoTitle: 'Vehicle Import Services in Ethiopia',
    seoDescription:
      'End-to-end vehicle import into Ethiopia: sourcing, inspection, shipping via Djibouti, customs clearance and registration-ready documents.',
    keywords: ['vehicle import Ethiopia', 'car import service Addis Ababa', 'commercial vehicle importer Ethiopia', 'vehicle customs clearance Ethiopia', 'spare parts import Ethiopia'],
    faqs: [
      { q: 'Can you import a vehicle to Ethiopia for me?', a: 'Yes. We source the vehicle, arrange pre-shipment inspection and shipping via Djibouti, clear customs and provide registration-ready documentation.' },
      { q: 'Do you import commercial vehicles and machinery?', a: 'Yes — commercial trucks, passenger vehicles, machinery, spare parts and accessories.' },
      { q: 'Can you advise on import duties?', a: 'We provide duty guidance as part of every quote so you know the full landed cost before you commit.' },
    ],
  },
  {
    id: 'coffee-tea-export',
    code: 'COF',
    title: 'Coffee & Tea Export',
    short: 'Premium Ethiopian coffee and tea, traceable from farm to international buyer.',
    kind: 'Export',
    image: '/images/photos/coffee.webp',
    imageAlt: 'Roasted coffee beans on a dark surface',
    description:
      'Ethiopia is the birthplace of coffee. We bring its finest coffees and teas to international buyers through direct relationships with producers, rigorous quality control and fully managed export logistics.',
    capabilities: [
      'Direct trade with producers and cooperatives',
      'Grading, cupping and quality certification',
      'Export documentation and phytosanitary certificates',
      'FOB and CIF shipping to global ports',
    ],
    products: ['Specialty green coffee', 'Commercial-grade coffee', 'Black & green tea', 'Spices', 'Pulses & oilseeds'],
    seoTitle: 'Ethiopian Coffee & Tea Exporter',
    seoDescription:
      'Premium Ethiopian specialty and commercial green coffee, tea and spices exported worldwide — direct from producers, graded, documented, FOB or CIF.',
    keywords: ['Ethiopian coffee exporter', 'Ethiopian green coffee supplier', 'specialty coffee Ethiopia export', 'Ethiopian tea exporter', 'buy Ethiopian coffee wholesale'],
    faqs: [
      { q: 'Which Ethiopian coffees do you export?', a: 'Specialty and commercial-grade green coffee sourced directly from producers and cooperatives, graded and cupped before shipment. Ask us for current lots and samples.' },
      { q: 'Do you ship FOB or CIF?', a: 'Both. We quote FOB Djibouti or CIF to most major ports, with certificates of origin and phytosanitary certificates included.' },
      { q: 'Can I request samples?', a: 'Yes. Contact us with your target profile and volume and we will arrange samples of available lots.' },
    ],
  },
  {
    id: 'wholesale-trade',
    code: 'WHL',
    title: 'Wholesale Trade',
    short: 'Agricultural goods, grain and building supplies distributed nationwide.',
    kind: 'Wholesale',
    image: '/images/photos/wholesale.webp',
    imageAlt: 'Warehouse racking stacked with palletised cartons',
    description:
      'Our wholesale division supplies agricultural products, grain and construction materials to businesses across Ethiopia, with competitive bulk pricing and a dependable, scheduled supply chain.',
    capabilities: [
      'Bulk purchasing and volume pricing',
      'Recurring scheduled deliveries',
      'Nationwide distribution network',
      'Dedicated account management',
    ],
    products: ['Grains & cereals', 'Agricultural inputs', 'Edible oils', 'Building supplies', 'Packaged goods'],
    seoTitle: 'Wholesale Supplier in Ethiopia',
    seoDescription:
      'Wholesale grain, agricultural products, edible oils and building supplies across Ethiopia, with volume pricing and scheduled nationwide delivery.',
    keywords: ['wholesale supplier Ethiopia', 'grain wholesale Addis Ababa', 'agricultural products distributor Ethiopia', 'bulk supplier Ethiopia', 'edible oil wholesale Ethiopia'],
    faqs: [
      { q: 'What do you supply wholesale?', a: 'Grains and cereals, agricultural inputs, edible oils, building supplies and packaged goods.' },
      { q: 'Do you deliver outside Addis Ababa?', a: 'Yes. Our distribution network delivers to businesses nationwide on recurring schedules.' },
    ],
  },
]

export const process = [
  {
    title: 'Brief & sourcing',
    description: 'Tell us what you need. We match it to vetted suppliers or buyers and return a clear, itemised quote.',
  },
  {
    title: 'Verification',
    description: 'Samples, specifications and certifications are checked before anything ships — no surprises on arrival.',
  },
  {
    title: 'Shipping & clearance',
    description: 'We manage freight, insurance, documentation and customs so your goods move without delays.',
  },
  {
    title: 'Delivery & support',
    description: 'Goods arrive at your warehouse, site or port. Your account manager stays with you for the next order.',
  },
] as const

export const values = [
  { title: 'Integrity', description: 'Transparent pricing, honest timelines and ethical dealings with every partner.' },
  { title: 'Innovation', description: 'Always looking for faster, smarter and more cost-effective ways to move goods.' },
  { title: 'Partnership', description: 'Long-term relationships with clients, suppliers and the communities we work in.' },
  { title: 'Excellence', description: 'Quality checks at every step, from supplier selection to final delivery.' },
  { title: 'Global reach', description: 'A network that connects Ethiopian businesses with markets around the world.' },
  { title: 'Sustainability', description: 'Responsible sourcing and trade practices that respect people and the planet.' },
] as const

export const testimonials = [
  {
    quote:
      'Angler Trading has been instrumental in our medical supply chain. Their reliability and commitment to quality help us maintain the highest standards of care.',
    author: 'Dr. Sarah Ahmed',
    role: 'Medical Director',
    company: 'Central Hospital',
    image: '/images/people/sarah-ahmed.webp',
    logo: '/images/clients/central-hospital.webp',
  },
  {
    quote:
      'Their construction materials imports helped us deliver multiple projects on time and on budget. Material quality and technical support are exceptional.',
    author: 'Michael Tesfaye',
    role: 'Project Manager',
    company: 'BuildRight Construction',
    image: '/images/people/michael-tesfaye.webp',
    logo: '/images/clients/buildright.webp',
  },
  {
    quote:
      'The quality of their agricultural products and wholesale service exceeded our expectations. Deliveries are consistently on time.',
    author: 'Emma Bekele',
    role: 'Procurement Manager',
    company: 'AgriGrow Ltd',
    image: '/images/people/emma-bekele.webp',
    logo: '/images/clients/agrigrow.webp',
  },
  {
    quote:
      'Working with Angler transformed our coffee export operations. Their market knowledge and logistics expertise opened new international markets for us.',
    author: 'Daniel Haile',
    role: 'Export Director',
    company: 'Ethiopian Coffee Cooperative',
    image: '/images/people/daniel-haile.webp',
    logo: '/images/clients/coffee-cooperative.webp',
  },
] as const

export const partners = [1, 2, 3, 4, 5].map((i) => ({
  src: `/images/partners/partner-${i}.webp`,
  alt: `Partner organisation ${i}`,
}))

// Principal trade lanes, drawn on the map and listed in the lanes table
export const lanes = [
  { ref: 'L-01', route: 'hamburg', from: 'Addis Ababa', to: 'Hamburg', via: 'Djibouti · Suez', cargo: 'Specialty green coffee', mode: 'Rail + Sea' },
  { ref: 'L-02', route: 'jeddah', from: 'Addis Ababa', to: 'Jeddah', via: 'Djibouti', cargo: 'Coffee, tea & pulses', mode: 'Rail + Sea' },
  { ref: 'L-03', route: 'shanghai', from: 'Shanghai', to: 'Addis Ababa', via: 'Djibouti', cargo: 'Steel, machinery & vehicles', mode: 'Sea + Rail' },
  { ref: 'L-04', route: 'nhavaSheva', from: 'Nhava Sheva', to: 'Addis Ababa', via: 'Djibouti', cargo: 'Pharmaceuticals', mode: 'Sea + Rail' },
  { ref: 'L-05', route: 'jebelAli', from: 'Jebel Ali', to: 'Addis Ababa', via: 'Djibouti', cargo: 'Lubricants & re-exports', mode: 'Sea + Rail' },
] as const

export const faqs = [
  {
    q: 'What information do you need for a quote?',
    a: 'The product or category, approximate quantity, required specifications or certifications, delivery location and your target timeline. The more detail you share, the more precise our quote.',
  },
  {
    q: 'Do you handle customs clearance?',
    a: 'Yes. For imports we manage documentation, duties guidance and clearance. For exports we prepare certificates of origin, phytosanitary certificates and all shipping documents.',
  },
  {
    q: 'Is there a minimum order size?',
    a: 'It depends on the sector. Wholesale and export orders are typically in bulk, while some construction and medical supplies can be supplied in smaller quantities. Ask us — we will tell you straight away.',
  },
  {
    q: 'Which markets do you export to?',
    a: 'We work with buyers across the Middle East, Europe and Asia, shipping via the Djibouti corridor. We can quote FOB or CIF to most major ports.',
  },
  {
    q: 'How quickly will you respond?',
    a: 'We reply to every inquiry within one business day, usually much faster during working hours.',
  },
] as const
