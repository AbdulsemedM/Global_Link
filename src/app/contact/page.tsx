"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Zap } from "lucide-react"
import { ParticleNetwork } from "@/components/effects/particle-network"

export default function ContactPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Particle Network Background */}
      <ParticleNetwork isDark={isDark} />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#AEEA00]/10 text-[#AEEA00] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Let&lsquo;s Connect
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6">
            Get In{" "}
            <span className="relative">
              Touch
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-[#AEEA00]/30 -skew-x-12"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to start something amazing together? We&lsquo;d love to hear from you. Drop us a line and let&lsquo;s make magic
            happen.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Let&lsquo;s Start a Conversation</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Whether you have a question, want to start a project, or just want to say hello, we&lsquo;re here and ready
                  to chat. Choose your preferred way to reach out.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid gap-6">
                <Card className="border-2 border-gray-100 dark:border-gray-800 hover:border-[#AEEA00]/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#AEEA00]/10 rounded-xl flex items-center justify-center group-hover:bg-[#AEEA00]/20 transition-colors">
                        <Mail className="w-6 h-6 text-[#AEEA00]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black dark:text-white mb-1">Email Us</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">Send us an email anytime</p>
                        <a href="mailto:hello@company.com" className="text-[#AEEA00] hover:underline font-medium">
                          hello@company.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-100 dark:border-gray-800 hover:border-[#AEEA00]/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#AEEA00]/10 rounded-xl flex items-center justify-center group-hover:bg-[#AEEA00]/20 transition-colors">
                        <Phone className="w-6 h-6 text-[#AEEA00]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black dark:text-white mb-1">Call Us</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">Mon-Fri from 8am to 5pm</p>
                        <a href="tel:+1234567890" className="text-[#AEEA00] hover:underline font-medium">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-100 dark:border-gray-800 hover:border-[#AEEA00]/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#AEEA00]/10 rounded-xl flex items-center justify-center group-hover:bg-[#AEEA00]/20 transition-colors">
                        <MapPin className="w-6 h-6 text-[#AEEA00]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black dark:text-white mb-1">Visit Us</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">Come say hello at our office</p>
                        <address className="text-[#AEEA00] not-italic">
                          123 Innovation Street
                          <br />
                          Tech District, CA 90210
                        </address>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-100 dark:border-gray-800 hover:border-[#AEEA00]/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#AEEA00]/10 rounded-xl flex items-center justify-center group-hover:bg-[#AEEA00]/20 transition-colors">
                        <Clock className="w-6 h-6 text-[#AEEA00]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black dark:text-white mb-1">Business Hours</h3>
                        <div className="text-gray-600 dark:text-gray-300 space-y-1">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#AEEA00]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="w-8 h-8 text-[#AEEA00]" />
                  </div>
                  <div className="text-2xl font-bold text-black dark:text-white">24h</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#AEEA00]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-[#AEEA00]" />
                  </div>
                  <div className="text-2xl font-bold text-black dark:text-white">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#AEEA00]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-8 h-8 text-[#AEEA00]" />
                  </div>
                  <div className="text-2xl font-bold text-black dark:text-white">99%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <Card className="relative border-2 border-gray-100 dark:border-gray-800 shadow-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-black dark:text-white">Send us a Message</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Fill out the form below and we&lsquo;ll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-black dark:text-white font-medium">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="border-2 border-gray-200 dark:border-gray-700 focus:border-[#AEEA00] dark:focus:border-[#AEEA00] transition-colors"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-black dark:text-white font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="border-2 border-gray-200 dark:border-gray-700 focus:border-[#AEEA00] dark:focus:border-[#AEEA00] transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-black dark:text-white font-medium">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="border-2 border-gray-200 dark:border-gray-700 focus:border-[#AEEA00] dark:focus:border-[#AEEA00] transition-colors"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-black dark:text-white font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your project or question..."
                        rows={6}
                        className="border-2 border-gray-200 dark:border-gray-700 focus:border-[#AEEA00] dark:focus:border-[#AEEA00] transition-colors resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#AEEA00] hover:bg-[#AEEA00]/90 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#AEEA00]/5 via-transparent to-[#AEEA00]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Don&lsquo;t wait any longer. Reach out today and let&lsquo;s discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#AEEA00] hover:bg-[#AEEA00]/90 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#AEEA00] text-[#AEEA00] hover:bg-[#AEEA00] hover:text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 