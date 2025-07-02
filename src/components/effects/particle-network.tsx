"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  originalX: number
  originalY: number
  size: number
}

interface ParticleNetworkProps {
  isDark?: boolean
}

export function ParticleNetwork({ isDark = false }: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      const particles: Particle[] = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 4000)

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const movementType = Math.random()
        let vx, vy

        if (movementType < 0.6) {
          vx = (Math.random() - 0.5) * 0.8
          vy = Math.random() * 1.2 + 0.3
        } else if (movementType < 0.8) {
          vx = (Math.random() - 0.5) * 1.5
          vy = (Math.random() - 0.5) * 0.3
        } else {
          vx = (Math.random() - 0.5) * 0.6
          vy = -(Math.random() * 0.8 + 0.3)
        }

        particles.push({
          x,
          y,
          vx,
          vy,
          originalX: x,
          originalY: y,
          size: Math.random() * 1.5 + 0.5,
        })
      }
      particlesRef.current = particles
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { 
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }

    const drawConnections = (particles: Particle[]) => {
      const maxDistance = 80
      const maxConnections = 3

      for (let i = 0; i < particles.length; i++) {
        const particle1 = particles[i]
        let connectionCount = 0

        for (let j = i + 1; j < particles.length && connectionCount < maxConnections; j++) {
          const particle2 = particles[j]
          const dx = particle1.x - particle2.x
          const dy = particle1.y - particle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (maxDistance - distance) / maxDistance
            ctx.beginPath()
            ctx.moveTo(particle1.x, particle1.y)
            ctx.lineTo(particle2.x, particle2.y)

            if (isDark) {
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`
            } else {
              ctx.strokeStyle = `rgba(100, 116, 139, ${opacity * 0.25})`
            }

            ctx.lineWidth = 0.5
            ctx.stroke()
            connectionCount++
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current

      particles.forEach((particle) => {
        const movementType =
          Math.abs(particle.vy) > 0.3 ? "falling" : Math.abs(particle.vx) > 0.3 ? "horizontal" : "floating"

        if (movementType === "falling") {
          particle.vy += 0.008
          particle.vx += (Math.random() - 0.5) * 0.015
        } else if (movementType === "horizontal") {
          particle.vx += (Math.random() - 0.5) * 0.02
          particle.vy += (Math.random() - 0.5) * 0.01
        } else {
          particle.vy -= 0.005
          particle.vx += (Math.random() - 0.5) * 0.015
        }

        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 120

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          particle.vx -= Math.cos(angle) * force * 0.2
          particle.vy -= Math.sin(angle) * force * 0.2
        }

        const returnForce = 0.001
        particle.vx += (particle.originalX - particle.x) * returnForce
        particle.vy += (particle.originalY - particle.y) * returnForce

        particle.vx *= 0.998
        particle.vy *= 0.998

        if (movementType === "falling") {
          particle.vx = Math.max(-1.0, Math.min(1.0, particle.vx))
          particle.vy = Math.max(-0.3, Math.min(2.0, particle.vy))
        } else if (movementType === "horizontal") {
          particle.vx = Math.max(-1.5, Math.min(1.5, particle.vx))
          particle.vy = Math.max(-0.5, Math.min(0.5, particle.vy))
        } else {
          particle.vx = Math.max(-0.8, Math.min(0.8, particle.vx))
          particle.vy = Math.max(-1.2, Math.min(0.3, particle.vy))
        }

        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < -10) particle.x = canvas.width + 10
        if (particle.x > canvas.width + 10) particle.x = -10
        if (particle.y < -10) particle.y = canvas.height + 10
        if (particle.y > canvas.height + 10) particle.y = -10
      })

      drawConnections(particles)

      particles.forEach((particle) => {
        const movementType =
          Math.abs(particle.vy) > 0.3 ? "falling" : Math.abs(particle.vx) > 0.3 ? "horizontal" : "floating"

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)

        let opacity
        if (movementType === "falling") {
          opacity = isDark ? 0.05 + Math.random() * 0.05 : 0.08 + Math.random() * 0.06
        } else if (movementType === "horizontal") {
          opacity = isDark ? 0.06 + Math.random() * 0.03 : 0.09 + Math.random() * 0.04
        } else {
          opacity = isDark ? 0.04 + Math.random() * 0.06 : 0.07 + Math.random() * 0.05
        }

        if (isDark) {
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        } else {
          ctx.fillStyle = `rgba(71, 85, 105, ${opacity})`
        }

        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isDark])

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none" 
      style={{ zIndex: 0 }} 
    />
  )
} 