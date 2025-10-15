'use client'

import React, { useRef, useEffect } from 'react'

interface SwirlBackgroundProps {
  className?: string
}

export default function SwirlBackground({ className = "fixed inset-0 -z-10" }: SwirlBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Simplified swirl animation
    let animationId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    let time = 0
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
      hue: number
    }> = []

    // Initialize particles
    for (let i = 0; i < 300; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: 0,
        vy: 0,
        life: 0,
        maxLife: 50 + Math.random() * 100,
        hue: 220 + Math.random() * 100
      })
    }

    const animate = () => {
      time += 0.01

      // Clear with trail effect
      ctx.fillStyle = 'rgba(13, 13, 35, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        // Update particle with swirl motion
        const centerX = canvas.width * 0.5
        const centerY = canvas.height * 0.5
        
        const angle = Math.atan2(particle.y - centerY, particle.x - centerX)
        const distance = Math.sqrt((particle.x - centerX) ** 2 + (particle.y - centerY) ** 2)
        
        const noise = Math.sin(particle.x * 0.01 + time) * Math.cos(particle.y * 0.01 + time)
        const swirl = angle + noise * 0.1
        
        particle.vx = Math.cos(swirl) * 0.5
        particle.vy = Math.sin(swirl) * 0.5
        
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        // Draw particle
        const alpha = (1 - particle.life / particle.maxLife) * 0.8
        if (alpha > 0) {
          ctx.strokeStyle = `hsla(${particle.hue}, 100%, 60%, ${alpha})`
          ctx.lineWidth = 2
          ctx.lineCap = 'round'
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(particle.x + particle.vx * 5, particle.y + particle.vy * 5)
          ctx.stroke()
        }

        // Reset particle if dead or out of bounds
        if (particle.life > particle.maxLife || 
            particle.x < 0 || particle.x > canvas.width ||
            particle.y < 0 || particle.y > canvas.height) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
          particle.life = 0
          particle.hue = 220 + Math.random() * 100
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ 
        pointerEvents: 'none'
      }}
    />
  )
}