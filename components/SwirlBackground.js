'use client'

import React, { useRef, useEffect } from 'react'

export default function SwirlBackground({ className = "fixed inset-0 z-0" }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Particle system for swirl effect
    const particles = []
    const particleCount = 50 // Reduced from 100 for more subtle effect

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: 0,
        vy: 0,
        life: 0,
        maxLife: 50 + Math.random() * 100,
        hue: 220 + Math.random() * 100,
        radius: 1 + Math.random() * 3 // Smaller particles (was 3 + Math.random() * 6)
      })
    }

    const animate = () => {
      time += 0.01

      // Clear canvas (let body background show through)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Create swirl motion using noise-like function
        const centerX = canvas.width * 0.5
        const centerY = canvas.height * 0.5
        
        // Distance from center
        const dx = particle.x - centerX
        const dy = particle.y - centerY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const angle = Math.atan2(dy, dx)
        
        // Create swirl with multiple noise layers
        const noise1 = Math.sin(particle.x * 0.005 + time * 2) * Math.cos(particle.y * 0.005 + time * 2)
        const noise2 = Math.sin(particle.x * 0.01 + time) * Math.cos(particle.y * 0.01 + time)
        const swirl = angle + (noise1 * 0.2) + (noise2 * 0.1) + (time * 0.5)
        
        // Update velocity based on swirl
        const speed = 0.3 + Math.sin(time + distance * 0.01) * 0.2
        particle.vx = Math.cos(swirl) * speed
        particle.vy = Math.sin(swirl) * speed
        
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        // Calculate opacity based on life
        const alpha = Math.max(0, (1 - particle.life / particle.maxLife) * 0.9)
        
        if (alpha > 0) {
          // Draw particle trail - make it more visible
          ctx.save()
          ctx.strokeStyle = `hsla(${particle.hue}, 100%, 60%, ${alpha})`
          ctx.lineWidth = particle.radius * 2
          ctx.lineCap = 'round'
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(particle.x + particle.vx * 15, particle.y + particle.vy * 15)
          ctx.stroke()
          ctx.restore()
        }

        // Reset particle if it's dead or out of bounds
        if (particle.life > particle.maxLife || 
            particle.x < -50 || particle.x > canvas.width + 50 ||
            particle.y < -50 || particle.y > canvas.height + 50) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
          particle.life = 0
          particle.hue = 220 + Math.random() * 100
          particle.maxLife = 50 + Math.random() * 100
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ 
        pointerEvents: 'none',
        mixBlendMode: 'screen'
      }}
    />
  )
}