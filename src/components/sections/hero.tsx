"use client"

import { useState, useEffect } from "react"
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "../../components/ui/button"

export function Hero() {
  const [animationPhase, setAnimationPhase] = useState(0)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only set mounted to true after hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by using mounted check
  const isDark = mounted ? theme === 'dark' : true

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-black via-gray-900 to-black' : 'bg-gradient-to-br from-white/50 via-gray-50/30 to-gray-100/20'}`}>
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
                className={`object-cover ${isDark ? 'opacity-40' : 'opacity-75'}`}
                priority
              />
              <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-black/80 via-black/60 to-transparent' : 'bg-gradient-to-r from-white/30 via-white/20 to-transparent'}`}></div>
              {/* Animated Trade Elements for Oil */}
              <div className="absolute inset-0">
                <div className={`absolute top-1/4 right-1/4 w-8 h-12 bg-gradient-to-b from-orange-600 to-orange-800 rounded animate-float ${isDark ? 'opacity-60' : 'opacity-40'}`}></div>
                <div className={`absolute top-1/3 right-1/3 w-6 h-10 bg-gradient-to-b from-orange-500 to-orange-700 rounded animate-float-delayed ${isDark ? 'opacity-60' : 'opacity-40'}`}></div>
                <div className={`absolute top-1/5 left-1/4 text-sm font-bold animate-pulse ${isDark ? 'text-lime-400' : 'text-lime-600'}`}></div>
                <div className={`absolute top-1/3 left-1/3 text-sm font-bold animate-pulse delay-500 ${isDark ? 'text-lime-400' : 'text-lime-600'}`}>+2.3%</div>
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
                className={`object-cover ${isDark ? 'opacity-40' : 'opacity-75'}`}
                priority
              />
              <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-black/80 via-black/60 to-transparent' : 'bg-gradient-to-r from-white/30 via-white/20 to-transparent'}`}></div>
              {/* Animated Medical Elements */}
              <div className="absolute inset-0">
                <div className={`absolute top-1/4 right-1/3 w-6 h-6 ${isDark ? 'opacity-60' : 'opacity-40'}`}>
                  <div className={`absolute top-1/2 left-0 w-full h-1 transform -translate-y-1/2 animate-pulse ${isDark ? 'bg-lime-400' : 'bg-lime-600'}`}></div>
                  <div className={`absolute left-1/2 top-0 w-1 h-full transform -translate-x-1/2 animate-pulse ${isDark ? 'bg-lime-400' : 'bg-lime-600'}`}></div>
                </div>
                <div className={`absolute bottom-1/3 left-1/4 w-3 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full animate-float ${isDark ? 'opacity-60' : 'opacity-40'}`}></div>
                <div className={`absolute bottom-1/4 left-1/3 w-2 h-4 bg-gradient-to-b from-white to-gray-200 rounded-full animate-float-delayed ${isDark ? 'opacity-60' : 'opacity-40'}`}></div>
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
                className={`object-cover ${isDark ? 'opacity-40' : 'opacity-75'}`}
                priority
              />
              <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-black/80 via-black/60 to-transparent' : 'bg-gradient-to-r from-white/30 via-white/20 to-transparent'}`}></div>
              {/* Animated Trade Elements */}
              <div className="absolute inset-0">
                <div className={`absolute top-1/4 left-1/4 w-16 h-1 rounded animate-pulse opacity-60 ${isDark ? 'bg-lime-400' : 'bg-lime-600'}`}></div>
                <div className={`absolute top-1/3 left-1/4 w-12 h-1 rounded animate-pulse opacity-60 delay-200 ${isDark ? 'bg-lime-400' : 'bg-lime-600'}`}></div>
                <div className={`absolute top-2/5 left-1/4 w-20 h-1 rounded animate-pulse opacity-60 delay-400 ${isDark ? 'bg-lime-400' : 'bg-lime-600'}`}></div>
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
                className={`object-cover ${isDark ? 'opacity-40' : 'opacity-75'}`}
                priority
              />
              <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-black/80 via-black/60 to-transparent' : 'bg-gradient-to-r from-white/30 via-white/20 to-transparent'}`}></div>
              {/* Animated Energy Elements */}
              <div className="absolute inset-0">
              </div>
            </div>
          </div>
        </div>

        {/* Floating Trade Elements */}
        <div className="absolute inset-0">
          {/* Global Connection Lines */}
          <svg className={`absolute inset-0 w-full h-full ${isDark ? 'opacity-40' : 'opacity-30'}`} viewBox="0 0 1200 800">
            <defs>
              <linearGradient id={isDark ? "connectionGradient" : "connectionGradientLight"} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={isDark ? "#76ff03" : "#65a30d"} stopOpacity="0" />
                <stop offset="50%" stopColor={isDark ? "#76ff03" : "#65a30d"} stopOpacity="0.8" />
                <stop offset="100%" stopColor={isDark ? "#76ff03" : "#65a30d"} stopOpacity="0" />
              </linearGradient>
              <filter id={isDark ? "glow" : "glowLight"}>
                <feGaussianBlur stdDeviation={isDark ? "3" : "2"} result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* World Trade Routes */}
            <path
              d="M 100 300 Q 400 200 800 300 Q 1000 350 1100 300"
              stroke={`url(#${isDark ? "connectionGradient" : "connectionGradientLight"})`}
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              filter={`url(#${isDark ? "glow" : "glowLight"})`}
            />
            <path
              d="M 100 500 Q 300 400 600 500 Q 900 550 1100 500"
              stroke={`url(#${isDark ? "connectionGradient" : "connectionGradientLight"})`}
              strokeWidth="2"
              fill="none"
              className="animate-pulse delay-1000"
              filter={`url(#${isDark ? "glow" : "glowLight"})`}
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
                fill={isDark ? "#76ff03" : "#65a30d"}
                className="animate-ping"
                style={{ animationDelay: `${i * 0.3}s` }}
                filter={`url(#${isDark ? "glow" : "glowLight"})`}
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
              <div className={`inline-flex items-center space-x-2 backdrop-blur-sm rounded-full px-4 py-2 text-sm border shadow-lg ${
                isDark 
                  ? 'bg-lime-400/20 text-lime-400 border-lime-400/30 shadow-lime-400/10'
                  : 'bg-lime-100 text-lime-800 border-lime-300 shadow-lime-200/50'
              }`}>
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">Global Trade Solutions</span>
              </div>

              <h1 className={`text-5xl lg:text-7xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Connect{" "}
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  isDark 
                    ? 'from-lime-400 to-lime-300 drop-shadow-lg'
                    : 'from-lime-700 to-lime-600 drop-shadow-sm'
                }`}>
                  Markets
                </span>
                <br />
                <span className={isDark ? 'text-lime-400' : 'text-lime-700'}>Worldwide</span>
              </h1>

              <p className={`text-xl leading-relaxed max-w-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Your trusted partner in international trade. We facilitate seamless import, export, and wholesale
                operations across global markets with{" "}
                <span className={`font-semibold ${isDark ? 'text-lime-400' : 'text-lime-800'}`}>
                  unmatched reliability
                </span>{" "}
                and expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className={`px-8 py-4 text-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  isDark
                    ? 'bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-black shadow-lime-400/25 hover:shadow-lime-400/50'
                    : 'bg-gradient-to-r from-lime-700 to-lime-800 hover:from-lime-800 hover:to-lime-900 text-white shadow-lime-700/25 hover:shadow-lime-700/50'
                }`}
              >
                Start Trading
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`px-8 py-4 text-lg bg-transparent font-medium shadow-lg transition-all duration-300 ${
                  isDark
                    ? 'border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black shadow-lime-400/10 hover:shadow-lime-400/25'
                    : 'border-lime-700 text-lime-800 hover:bg-lime-700 hover:text-white shadow-lime-200/50 hover:shadow-lime-700/25'
                }`}
              >
                View Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center group">
                <div className={`text-3xl font-bold group-hover:scale-110 transition-transform duration-300 ${
                  isDark ? 'text-lime-400' : 'text-lime-800'
                }`}>
                  150+
                </div>
                <div className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  Global Partners
                </div>
              </div>
              <div className="text-center group">
                <div className={`text-3xl font-bold group-hover:scale-110 transition-transform duration-300 ${
                  isDark ? 'text-lime-400' : 'text-lime-600'
                }`}>
                  50K+
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Shipments</div>
              </div>
              <div className="text-center group">
                <div className={`text-3xl font-bold group-hover:scale-110 transition-transform duration-300 ${
                  isDark ? 'text-lime-400' : 'text-lime-600'
                }`}>
                  25+
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Years</div>
              </div>
            </div>
          </div>

          {/* Right Content - Clean Space */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className={`text-6xl font-bold ${isDark ? 'text-lime-400/20' : 'text-lime-200'}`}>TRADE</div>
                <div className={`text-2xl ${isDark ? 'text-white/60' : 'text-gray-400'}`}>Connecting Global Markets</div>
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