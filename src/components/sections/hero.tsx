"use client"

import { useState, useEffect } from "react"
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Globe, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [animationPhase, setAnimationPhase] = useState(0)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Animated Background Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {/* Slide 1 - Oil Trading */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${animationPhase === 0 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative w-full h-full">
              <Image
                src="/images/hero/oil-trading.jpeg"
                alt="Oil Trading with Global Market Data"
                fill
                className="object-cover opacity-25"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/50"></div>
              {/* Animated Trade Elements for Oil */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-8 h-12 bg-gradient-to-b from-orange-600 to-orange-800 rounded animate-float opacity-60"></div>
                <div className="absolute top-1/3 right-1/3 w-6 h-10 bg-gradient-to-b from-orange-500 to-orange-700 rounded animate-float-delayed opacity-60"></div>
                <div className="absolute top-1/5 left-1/4 text-lime-400 text-sm font-bold animate-pulse">$78.50</div>
                <div className="absolute top-1/3 left-1/3 text-lime-400 text-sm font-bold animate-pulse delay-500">+2.3%</div>
              </div>
            </div>
          </div>

          {/* Slide 2 - Medical Supplies */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${animationPhase === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative w-full h-full">
              <Image
                src="/images/hero/medical-supplies.jpg"
                alt="Medical Supplies and Equipment"
                fill
                className="object-cover opacity-25"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/50"></div>
              {/* Animated Medical Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/3 w-6 h-6 opacity-60">
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-lime-400 transform -translate-y-1/2 animate-pulse"></div>
                  <div className="absolute left-1/2 top-0 w-1 h-full bg-lime-400 transform -translate-x-1/2 animate-pulse"></div>
                </div>
                <div className="absolute bottom-1/3 left-1/4 w-3 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full animate-float opacity-60"></div>
                <div className="absolute bottom-1/4 left-1/3 w-2 h-4 bg-gradient-to-b from-white to-gray-200 rounded-full animate-float-delayed opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Slide 3 - Global Trade */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${animationPhase === 2 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative w-full h-full">
              <Image
                src="/images/hero/global-trade.jpg"
                alt="Global Trade Network"
                fill
                className="object-cover opacity-25"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/50"></div>
              {/* Animated Trade Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-16 h-1 bg-lime-400 rounded animate-pulse opacity-60"></div>
                <div className="absolute top-1/3 left-1/4 w-12 h-1 bg-lime-400 rounded animate-pulse opacity-60 delay-200"></div>
                <div className="absolute top-2/5 left-1/4 w-20 h-1 bg-lime-400 rounded animate-pulse opacity-60 delay-400"></div>
              </div>
            </div>
          </div>

          {/* Slide 4 - Energy Sector */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${animationPhase === 3 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative w-full h-full">
              <Image
                src="/images/hero/energy-sector.jpg"
                alt="Energy Sector Trading"
                fill
                className="object-cover opacity-25"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/50"></div>
              {/* Animated Energy Elements */}
              <div className="absolute inset-0">
                <div className="absolute bottom-1/3 right-1/4 text-lime-400 text-xs font-bold animate-pulse">CRUDE +1.2%</div>
                <div className="absolute bottom-1/4 right-1/3 text-lime-400 text-xs font-bold animate-pulse delay-700">BRENT $82.15</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Trade Elements */}
        <div className="absolute inset-0">
          {/* Global Connection Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#76ff03" stopOpacity="0" />
                <stop offset="50%" stopColor="#76ff03" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#76ff03" stopOpacity="0" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* World Trade Routes */}
            <path
              d="M 100 300 Q 400 200 800 300 Q 1000 350 1100 300"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              filter="url(#glow)"
            />
            <path
              d="M 100 500 Q 300 400 600 500 Q 900 550 1100 500"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse delay-1000"
              filter="url(#glow)"
            />

            {/* Trade Hubs */}
            {[
              { x: 200, y: 300 },
              { x: 500, y: 250 },
              { x: 800, y: 300 },
              { x: 1000, y: 280 },
              { x: 300, y: 500 },
              { x: 700, y: 520 },
              { x: 950, y: 500 },
            ].map((hub, i) => (
              <circle
                key={i}
                cx={hub.x}
                cy={hub.y}
                r="4"
                fill="#76ff03"
                className="animate-ping"
                style={{ animationDelay: `${i * 0.3}s` }}
                filter="url(#glow)"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-lime-400/20 backdrop-blur-sm rounded-full px-4 py-2 text-lime-400 text-sm border border-lime-400/30 shadow-lg shadow-lime-400/10">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">Global Trade Solutions</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Connect{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-300 drop-shadow-lg">
                  Markets
                </span>
                <br />
                <span className="text-lime-400">Worldwide</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Your trusted partner in international trade. We facilitate seamless import, export, and wholesale
                operations across global markets with{" "}
                <span className="text-lime-400 font-semibold">unmatched reliability</span> and expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-black px-8 py-4 text-lg font-bold shadow-lg shadow-lime-400/25 hover:shadow-lime-400/50 transition-all duration-300 transform hover:scale-105"
              >
                Start Trading
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black px-8 py-4 text-lg bg-transparent font-medium shadow-lg shadow-lime-400/10 hover:shadow-lime-400/25 transition-all duration-300"
              >
                View Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center group">
                <div className="text-3xl font-bold text-lime-400 group-hover:scale-110 transition-transform duration-300">
                  150+
                </div>
                <div className="text-gray-400 text-sm">Countries</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-lime-400 group-hover:scale-110 transition-transform duration-300">
                  50K+
                </div>
                <div className="text-gray-400 text-sm">Shipments</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-lime-400 group-hover:scale-110 transition-transform duration-300">
                  25+
                </div>
                <div className="text-gray-400 text-sm">Years</div>
              </div>
            </div>
          </div>

          {/* Right Content - Clean Space */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-lime-400/20">TRADE</div>
                <div className="text-2xl text-white/60">Connecting Global Markets</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
} 