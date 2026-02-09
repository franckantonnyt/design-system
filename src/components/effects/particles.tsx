import * as React from "react"
import { cn } from "../../lib/utils"

interface ParticlesProps extends React.HTMLAttributes<HTMLCanvasElement> {
  /** Number of particles. Default: 50 */
  quantity?: number
  /** Particle color (hex). Default: "#ffffff" */
  color?: string
  /** Min particle size. Default: 0.5 */
  minSize?: number
  /** Max particle size. Default: 2 */
  maxSize?: number
  /** Speed multiplier. Default: 0.3 */
  speed?: number
  /** Whether particles react to mouse. Default: true */
  interactive?: boolean
  /** Mouse repel radius in px. Default: 100 */
  mouseRadius?: number
}

interface Particle {
  x: number
  y: number
  size: number
  vx: number
  vy: number
  opacity: number
  opacityDir: number
}

const Particles = React.forwardRef<HTMLCanvasElement, ParticlesProps>(
  (
    {
      className,
      quantity = 50,
      color = "#ffffff",
      minSize = 0.5,
      maxSize = 2,
      speed = 0.3,
      interactive = true,
      mouseRadius = 100,
      ...props
    },
    ref
  ) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const mouseRef = React.useRef({ x: -1000, y: -1000 })
    const particlesRef = React.useRef<Particle[]>([])
    const animationRef = React.useRef<number>(0)

    React.useImperativeHandle(ref, () => canvasRef.current!)

    const hexToRgb = React.useCallback((hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 255, g: 255, b: 255 }
    }, [])

    React.useEffect(() => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const rgb = hexToRgb(color)
      let width = 0
      let height = 0

      const resize = () => {
        const rect = canvas.parentElement?.getBoundingClientRect()
        if (!rect) return
        width = rect.width
        height = rect.height
        canvas.width = width * window.devicePixelRatio
        canvas.height = height * window.devicePixelRatio
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      }

      const initParticles = () => {
        particlesRef.current = Array.from({ length: quantity }, () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * (maxSize - minSize) + minSize,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          opacity: Math.random() * 0.6 + 0.2,
          opacityDir: (Math.random() - 0.5) * 0.01,
        }))
      }

      const animate = () => {
        ctx.clearRect(0, 0, width, height)
        const mx = mouseRef.current.x
        const my = mouseRef.current.y

        for (const p of particlesRef.current) {
          // Mouse repel
          if (interactive) {
            const dx = p.x - mx
            const dy = p.y - my
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < mouseRadius) {
              const force = (mouseRadius - dist) / mouseRadius
              p.vx += (dx / dist) * force * 0.3
              p.vy += (dy / dist) * force * 0.3
            }
          }

          // Apply velocity with damping
          p.x += p.vx
          p.y += p.vy
          p.vx *= 0.99
          p.vy *= 0.99

          // Opacity pulse
          p.opacity += p.opacityDir
          if (p.opacity <= 0.1 || p.opacity >= 0.8) {
            p.opacityDir *= -1
          }

          // Wrap around
          if (p.x < -10) p.x = width + 10
          if (p.x > width + 10) p.x = -10
          if (p.y < -10) p.y = height + 10
          if (p.y > height + 10) p.y = -10

          // Draw
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${p.opacity})`
          ctx.fill()
        }

        animationRef.current = requestAnimationFrame(animate)
      }

      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect()
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        }
      }

      const handleMouseLeave = () => {
        mouseRef.current = { x: -1000, y: -1000 }
      }

      resize()
      initParticles()
      animate()

      window.addEventListener("resize", () => {
        resize()
        initParticles()
      })

      if (interactive) {
        canvas.addEventListener("mousemove", handleMouseMove)
        canvas.addEventListener("mouseleave", handleMouseLeave)
      }

      return () => {
        cancelAnimationFrame(animationRef.current)
        window.removeEventListener("resize", resize)
        if (interactive) {
          canvas.removeEventListener("mousemove", handleMouseMove)
          canvas.removeEventListener("mouseleave", handleMouseLeave)
        }
      }
    }, [quantity, color, minSize, maxSize, speed, interactive, mouseRadius, hexToRgb])

    return (
      <canvas
        ref={canvasRef}
        className={cn("pointer-events-auto absolute inset-0", className)}
        {...props}
      />
    )
  }
)
Particles.displayName = "Particles"

export { Particles }
export type { ParticlesProps }
