import * as React from "react"
import { cn } from "../../lib/utils"

interface MeteorsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of meteors. Default: 20 */
  quantity?: number
  /** Meteor color (hex). Default: "#ffffff" */
  color?: string
  /** Min speed. Default: 4 */
  minSpeed?: number
  /** Max speed. Default: 10 */
  maxSpeed?: number
  /** Min tail length. Default: 40 */
  minTail?: number
  /** Max tail length. Default: 120 */
  maxTail?: number
}

interface Meteor {
  x: number
  y: number
  speed: number
  tail: number
  opacity: number
  size: number
  delay: number
  active: boolean
}

const Meteors = React.forwardRef<HTMLDivElement, MeteorsProps>(
  (
    {
      className,
      quantity = 20,
      color = "#ffffff",
      minSpeed = 4,
      maxSpeed = 10,
      minTail = 40,
      maxTail = 120,
      ...props
    },
    ref
  ) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const animationRef = React.useRef<number>(0)
    const meteorsRef = React.useRef<Meteor[]>([])

    const hexToRgb = React.useCallback((hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result
        ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
        : { r: 255, g: 255, b: 255 }
    }, [])

    React.useEffect(() => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const rgb = hexToRgb(color)

      // Direction: upper-right to lower-left (~215 degrees)
      const angle = (215 * Math.PI) / 180
      const dx = Math.cos(angle)
      const dy = -Math.sin(angle) // canvas Y is inverted

      let width = 0
      let height = 0

      const resize = () => {
        const parent = canvas.parentElement
        if (!parent) return
        const rect = parent.getBoundingClientRect()
        width = rect.width
        height = rect.height
        const dpr = window.devicePixelRatio || 1
        canvas.width = width * dpr
        canvas.height = height * dpr
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      }

      const createMeteor = (initial = false): Meteor => {
        // Spawn along top edge and right edge
        const fromTop = Math.random() > 0.3
        let x: number, y: number

        if (fromTop) {
          x = Math.random() * (width * 1.5) - width * 0.1
          y = -Math.random() * 50
        } else {
          x = width + Math.random() * 50
          y = Math.random() * height * 0.6
        }

        return {
          x,
          y,
          speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
          tail: Math.random() * (maxTail - minTail) + minTail,
          opacity: Math.random() * 0.6 + 0.4,
          size: Math.random() * 1.2 + 0.6,
          delay: initial ? Math.random() * 200 : 0,
          active: !initial || Math.random() > 0.5,
        }
      }

      const initMeteors = () => {
        meteorsRef.current = Array.from({ length: quantity }, () =>
          createMeteor(true)
        )
      }

      const animate = () => {
        ctx.clearRect(0, 0, width, height)

        for (let i = 0; i < meteorsRef.current.length; i++) {
          const m = meteorsRef.current[i]

          // Handle delay
          if (m.delay > 0) {
            m.delay--
            continue
          }

          if (!m.active) {
            m.active = true
          }

          // Move
          m.x += dx * m.speed
          m.y += dy * m.speed

          // Check out of bounds
          if (m.x < -100 || m.y > height + 100) {
            meteorsRef.current[i] = createMeteor(false)
            continue
          }

          // Draw tail (line from head backward along the trajectory)
          const tailEndX = m.x - dx * m.tail
          const tailEndY = m.y - dy * m.tail

          const gradient = ctx.createLinearGradient(m.x, m.y, tailEndX, tailEndY)
          gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${m.opacity})`)
          gradient.addColorStop(0.3, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${m.opacity * 0.4})`)
          gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`)

          ctx.beginPath()
          ctx.moveTo(m.x, m.y)
          ctx.lineTo(tailEndX, tailEndY)
          ctx.strokeStyle = gradient
          ctx.lineWidth = m.size
          ctx.lineCap = "round"
          ctx.stroke()

          // Draw head glow
          ctx.beginPath()
          ctx.arc(m.x, m.y, m.size + 0.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${m.opacity})`
          ctx.fill()

          // Outer glow
          const glowGradient = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.size * 4)
          glowGradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${m.opacity * 0.3})`)
          glowGradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`)
          ctx.beginPath()
          ctx.arc(m.x, m.y, m.size * 4, 0, Math.PI * 2)
          ctx.fillStyle = glowGradient
          ctx.fill()
        }

        animationRef.current = requestAnimationFrame(animate)
      }

      resize()
      initMeteors()
      animate()

      const resizeObserver = new ResizeObserver(() => {
        resize()
      })
      if (canvas.parentElement) {
        resizeObserver.observe(canvas.parentElement)
      }

      return () => {
        cancelAnimationFrame(animationRef.current)
        resizeObserver.disconnect()
      }
    }, [quantity, color, minSpeed, maxSpeed, minTail, maxTail, hexToRgb])

    return (
      <div
        ref={ref}
        className={cn("pointer-events-none absolute inset-0", className)}
        {...props}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
        />
      </div>
    )
  }
)
Meteors.displayName = "Meteors"

export { Meteors }
export type { MeteorsProps }
