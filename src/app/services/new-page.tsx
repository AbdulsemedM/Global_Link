"use client"

import { motion } from 'framer-motion'
import { ParticleNetwork } from '@/components/effects/particle-network'
import { useTheme } from 'next-themes'
import {
  Stethoscope,
  HardHat,
  Fuel,
  Car,
  Coffee,
  Package,
  ArrowRight,
  CheckCircle,
  Globe,
  Truck,
  Shield,
  Star,
  Sparkles,
} from "lucide-react"

const services = [
  {
    id: "medical-supplies",
    title: "Medical Supplies",
    description:
      "Import and distribution of human medicines, medical supplies, and equipment, ensuring healthcare facilities have access to quality products.",
    icon: Stethoscope,
    features: [
      "Quality-certified medical equipment",
      "Pharmaceutical supplies",
      "Healthcare consumables",
      "Medical technology solutions",
    ],
    badge: "Healthcare",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    id: "construction-materials",
    title: "Construction Materials",
    description:
      "Comprehensive supply of construction materials, hardware, metals, and plumbing equipment for both retail and wholesale customers.",
    icon: HardHat,
    features: ["Building materials", "Hardware supplies", "Metal products", "Plumbing equipment"],
    badge: "Construction",
    gradient: "from-primary/15 to-primary/5",
  },
  {
    id: "petroleum-products",
    title: "Petroleum Products",
    description:
      "Import and distribution of petroleum products, natural gas, and related materials to meet industrial and commercial needs.",
    icon: Fuel,
    features: ["Natural gas supply", "Petroleum products", "Industrial lubricants", "Fuel solutions"],
    badge: "Energy",
    gradient: "from-primary/25 to-primary/5",
  },
  {
    id: "vehicle-import",
    title: "Vehicle Import",
    description:
      "Professional importation services for vehicles, ensuring smooth customs clearance and documentation processes.",
    icon: Car,
    features: ["Commercial vehicles", "Personal vehicles", "Spare parts", "Vehicle accessories"],
    badge: "Automotive",
    gradient: "from-primary/20 to-primary/10",
  },
  {
    id: "coffee-tea-export",
    title: "Coffee & Tea Export",
    description:
      "Export of premium Ethiopian coffee and tea to international markets, showcasing the finest products from local producers.",
    icon: Coffee,
    features: [
      "Premium coffee beans",
      "Specialty tea varieties",
      "Direct trade partnerships",
      "Quality certification",
    ],
    badge: "Export",
    gradient: "from-primary/30 to-primary/5",
  },
  {
    id: "wholesale-trade",
    title: "Wholesale Trade",
    description:
      "Large-scale distribution of agricultural products, construction materials, and grain products to businesses nationwide.",
    icon: Package,
    features: ["Bulk purchasing options", "Competitive pricing", "Regular supply chain", "Nationwide distribution"],
    badge: "Distribution",
    gradient: "from-primary/15 to-primary/10",
  },
]

export default function ServicesPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Quick Navigation */}
      <nav className="sticky top-20 z-40 bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50">
        <div className="container py-4">
          <ul className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <li key={service.id}>
                <a
                  href={`#${service.id}`}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        {/* Animated Background Elements */}
        <ParticleNetwork isDark={isDark} />
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
            <Globe className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive Business
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60 animate-pulse">
              {" "}
              Solutions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From medical supplies to vehicle imports, we provide end-to-end solutions for businesses across multiple
            industries with quality and reliability at our core.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2 group">
              <Shield className="w-4 h-4 text-primary group-hover:animate-pulse" />
              Quality Assured
            </div>
            <div className="flex items-center gap-2 group">
              <Truck className="w-4 h-4 text-primary group-hover:animate-pulse" />
              Nationwide Delivery
            </div>
            <div className="flex items-center gap-2 group">
              <Star className="w-4 h-4 text-primary group-hover:animate-pulse" />
              Trusted Partner
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={`group hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 hover:-translate-y-3 relative overflow-hidden bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-xl p-6`}
                  >
                    {/* Animated border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300 group-hover:animate-pulse">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-primary/10 text-primary border-primary/20 group-hover:bg-primary/20">
                          {service.badge}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          >
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground/80">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex w-full items-center justify-center bg-primary/10 hover:bg-primary hover:text-black border border-primary/30 hover:border-primary transition-all duration-300 group-hover:shadow-lg rounded-lg px-4 py-2 text-sm font-medium"
                      >
                        Inquire Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(174,234,0,0.1)_0%,transparent_50%)]"></div>
        <ParticleNetwork isDark={isDark} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Ready to Get Started?</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us Today</h2>
          <p className="text-xl text-muted-foreground mb-8 opacity-90">
            Get in touch today to discuss how we can support your business needs with our comprehensive services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 glow-effect rounded-lg px-8 py-3"
            >
              Get Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 bg-transparent rounded-lg px-8 py-3 border"
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  )
} 