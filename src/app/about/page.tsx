"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lightbulb, Handshake, Award, Globe, Leaf, ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { ParticleNetwork } from "@/components/effects/particle-network"
import { useTheme } from "next-themes"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We conduct business with the highest ethical standards and transparency.",
    color: "from-[#AEEA00]/20 to-[#AEEA00]/5",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously seeking better ways to serve our clients and partners.",
    color: "from-[#AEEA00]/30 to-[#AEEA00]/10",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "Building lasting relationships with clients, suppliers, and communities.",
    color: "from-[#AEEA00]/25 to-[#AEEA00]/8",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering superior quality in every aspect of our operations.",
    color: "from-[#AEEA00]/35 to-[#AEEA00]/12",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connecting Ethiopian products with international markets.",
    color: "from-[#AEEA00]/28 to-[#AEEA00]/9",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Promoting responsible trade practices and environmental stewardship.",
    color: "from-[#AEEA00]/32 to-[#AEEA00]/11",
  },
]

export default function AboutPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <ParticleNetwork isDark={isDark} />
        
        {/* Animated Background Gradient */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #AEEA00 0%, transparent 50%)`,
          }}
        />

        <div className="relative container mx-auto px-6 text-center z-10">
          <div className="max-w-6xl mx-auto">
            {/* Animated Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 text-foreground flex items-center justify-center gap-4"
                style={{
                  transform: `translateY(${scrollY * -0.3}px)`,
                }}
              >
                <span className="relative inline-block">
                  About
                  <div className="absolute -top-4 -right-4">
                    <Sparkles className="w-6 h-6 text-[#AEEA00] animate-pulse" />
                  </div>
                </span>
                <span 
                  className="text-[#AEEA00] relative inline-block"
                  style={{
                    textShadow: isDark ? "0 0 30px #AEEA00" : "none",
                  }}
                >
                  Us
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#AEEA00]/20 to-transparent animate-pulse" />
                </span>
              </h1>
            </motion.div>

            {/* Creative Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
              style={{
                transform: `translateY(${scrollY * -0.1}px)`,
              }}
            >
              <p className="text-xl md:text-3xl leading-relaxed max-w-4xl mx-auto text-muted-foreground">
                A <span className="text-[#AEEA00] font-bold">leading force</span> in international trade,{" "}
                <span className="relative">
                  connecting
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-0 left-0 w-full h-1 bg-[#AEEA00]"
                  />
                </span>{" "}
                Ethiopian excellence with global markets through{" "}
                <span className="text-[#AEEA00] font-bold">innovative solutions</span> and trusted partnerships.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#AEEA00] rounded-full flex justify-center">
            <div className="w-1 h-3 rounded-full mt-2 animate-pulse bg-[#AEEA00]" />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 relative">
        <ParticleNetwork isDark={isDark} />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#AEEA00]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <Card className="relative transform hover:scale-105 hover:rotate-1 transition-all duration-700 bg-card border-[#AEEA00]/30 h-full">
                <CardContent className="p-10 flex flex-col h-full">
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mr-6 bg-[#AEEA00]/10 group-hover:scale-110 transition-all duration-500">
                      <Globe className="w-10 h-10 text-[#AEEA00]" />
                    </div>
                    <h2 className="text-4xl font-black text-foreground">
                      Our Mission
                    </h2>
                  </div>

                  <p className="text-lg leading-relaxed text-muted-foreground flex-grow">
                    To facilitate <span className="text-[#AEEA00] font-semibold">seamless international trade</span> by
                    providing comprehensive import, export, and wholesale solutions while maintaining the highest
                    standards of quality and service excellence.
                  </p>

                  <div className="mt-8 flex items-center text-[#AEEA00] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-4 bg-gradient-to-l from-[#AEEA00]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <Card className="relative transform hover:scale-105 hover:-rotate-1 transition-all duration-700 bg-card border-[#AEEA00]/30 h-full">
                <CardContent className="p-10 flex flex-col h-full">
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mr-6 bg-[#AEEA00]/10 group-hover:scale-110 transition-all duration-500">
                      <Award className="w-10 h-10 text-[#AEEA00]" />
                    </div>
                    <h2 className="text-4xl font-black text-foreground">
                      Our Vision
                    </h2>
                  </div>

                  <p className="text-lg leading-relaxed text-muted-foreground flex-grow">
                    To be the <span className="text-[#AEEA00] font-semibold">premier trading company</span> in Ethiopia,
                    recognized globally for our commitment to excellence, innovation, and sustainable business
                    practices.
                  </p>

                  <div className="mt-8 flex items-center text-[#AEEA00] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Discover More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 relative">
        <ParticleNetwork isDark={isDark} />
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-foreground">
              Our{" "}
              <span 
                className="text-[#AEEA00] relative"
                style={{
                  textShadow: isDark ? "0 0 40px #AEEA00" : "none",
                }}
              >
                Values
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#AEEA00] transform scale-x-0 animate-pulse" />
              </span>
            </h2>

            <p className="text-2xl text-muted-foreground">
              The principles that guide us in delivering <span className="text-[#AEEA00] font-bold">excellence</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-2 bg-gradient-to-r ${value.color} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100`} />
                  <Card className="relative h-full transform hover:scale-105 hover:rotate-2 transition-all duration-700 bg-card border-[#AEEA00]/20 hover:border-[#AEEA00]/50">
                    <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                      <div>
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-[#AEEA00]/10 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-10 h-10 text-[#AEEA00]" />
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-foreground">
                          {value.title}
                        </h3>

                        <p className="text-muted-foreground">
                          {value.description}
                        </p>
                      </div>

                      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#AEEA00] to-transparent" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative">
        <ParticleNetwork isDark={isDark} />
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="relative transform hover:scale-105 transition-all duration-700 bg-card border-[#AEEA00]/30">
              <CardContent className="p-16">
                <h2 className="text-4xl md:text-6xl font-black mb-8 text-foreground">
                  Ready to Connect with{" "}
                  <span 
                    className="text-[#AEEA00] relative"
                    style={{
                      textShadow: isDark ? "0 0 30px #AEEA00" : "none",
                    }}
                  >
                    Global Markets?
                    <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#AEEA00]/30 transform skew-x-12" />
                  </span>
                </h2>

                <p className="text-xl md:text-2xl mb-12 text-muted-foreground">
                  Join us in bridging Ethiopian excellence with international opportunities through{" "}
                  <span className="text-[#AEEA00] font-semibold">trusted partnerships</span> and{" "}
                  <span className="text-[#AEEA00] font-semibold">innovative solutions</span>.
                </p>

                <Button
                  size="lg"
                  className="px-12 py-6 text-xl font-bold bg-[#AEEA00] hover:bg-[#AEEA00]/90 text-black transform hover:scale-110 hover:rotate-1 transition-all duration-500"
                >
                  <span className="flex items-center">
                    Get in Touch
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 