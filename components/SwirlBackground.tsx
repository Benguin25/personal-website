'use client'

import React from 'react'

// Utility functions
const rand = (n: number) => n * Math.random()
const randRange = (n: number) => n - rand(2 * n)
const fadeInOut = (t: number, m: number) => {
  let hm = 0.5 * m
  return Math.abs((t + hm) % m - hm) / hm
}
const lerp = (n1: number, n2: number, speed: number) => (1 - speed) * n1 + speed * n2

// Simple noise implementation (simplified version)
class SimplexNoise {
  private p: number[]
  private perm: number[]
  private permMod12: number[]

  constructor() {
    this.p = []
    for (let i = 0; i < 256; i++) {
      this.p[i] = Math.floor(Math.random() * 256)
    }
    
    this.perm = new Array(512)
    this.permMod12 = new Array(512)
    for (let i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255]
      this.permMod12[i] = this.perm[i] % 12
    }
  }

  noise3D(x: number, y: number, z: number): number {
    // Simplified 3D noise - for production, use a proper simplex noise library
    return Math.sin(x * 0.1) * Math.cos(y * 0.1) * Math.sin(z * 0.1)
  }
}

interface SwirlBackgroundProps {
  className?: string
}

export default function SwirlBackground({ className = "fixed inset-0 -z-10" }: SwirlBackgroundProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const animationRef = React.useRef<number>()

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Configuration
    const particleCount = 500 // Reduced for performance
    const particlePropCount = 9
    const particlePropsLength = particleCount * particlePropCount
    const rangeY = 100
    const baseTTL = 50
    const rangeTTL = 150
    const baseSpeed = 0.1
    const rangeSpeed = 2
    const baseRadius = 1
    const rangeRadius = 4
    const baseHue = 220
    const rangeHue = 100
    const noiseSteps = 8
    const xOff = 0.00125
    const yOff = 0.00125
    const zOff = 0.0005
    const TAU = 2 * Math.PI

    let center: number[] = []
    let tick = 0
    const simplex = new SimplexNoise()
    const particleProps = new Float32Array(particlePropsLength)

    const resize = () => {
      const { innerWidth, innerHeight } = window
      canvas.width = innerWidth
      canvas.height = innerHeight
      center[0] = 0.5 * canvas.width
      center[1] = 0.5 * canvas.height
    }

    const initParticle = (i: number) => {
      const x = rand(canvas.width)
      const y = center[1] + randRange(rangeY)
      const vx = 0
      const vy = 0
      const life = 0
      const ttl = baseTTL + rand(rangeTTL)
      const speed = baseSpeed + rand(rangeSpeed)
      const radius = baseRadius + rand(rangeRadius)
      const hue = baseHue + rand(rangeHue)

      particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i)
    }

    const checkBounds = (x: number, y: number) => {
      return x > canvas.width || x < 0 || y > canvas.height || y < 0
    }

    const drawParticle = (x: number, y: number, x2: number, y2: number, life: number, ttl: number, radius: number, hue: number) => {
      ctx.save()
      ctx.lineCap = 'round'
      ctx.lineWidth = radius
      ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x2, y2)
      ctx.stroke()
      ctx.closePath()
      ctx.restore()
    }

    const updateParticle = (i: number) => {
      const i2 = 1 + i, i3 = 2 + i, i4 = 3 + i, i5 = 4 + i, i6 = 5 + i, i7 = 6 + i, i8 = 7 + i, i9 = 8 + i

      const x = particleProps[i]
      const y = particleProps[i2]
      const n = simplex.noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU
      const vx = lerp(particleProps[i3], Math.cos(n), 0.5)
      const vy = lerp(particleProps[i4], Math.sin(n), 0.5)
      const life = particleProps[i5]
      const ttl = particleProps[i6]
      const speed = particleProps[i7]
      const x2 = x + vx * speed
      const y2 = y + vy * speed
      const radius = particleProps[i8]
      const hue = particleProps[i9]

      drawParticle(x, y, x2, y2, life, ttl, radius, hue)

      const newLife = life + 1

      particleProps[i] = x2
      particleProps[i2] = y2
      particleProps[i3] = vx
      particleProps[i4] = vy
      particleProps[i5] = newLife

      if (checkBounds(x, y) || newLife > ttl) {
        initParticle(i)
      }
    }

    const drawParticles = () => {
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        updateParticle(i)
      }
    }

    const initParticles = () => {
      tick = 0
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        initParticle(i)
      }
    }

    const draw = () => {
      tick++

      // Clear canvas with dark background
      ctx.fillStyle = 'hsla(260,40%,5%,0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawParticles()

      animationRef.current = requestAnimationFrame(draw)
    }

    // Initialize
    resize()
    initParticles()
    draw()

    // Event listeners
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
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