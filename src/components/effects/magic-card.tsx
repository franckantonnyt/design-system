import * as React from "react"
import { cn } from "../../lib/utils"

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Spotlight size in px. Default: 300 */
  spotlightSize?: number
  /** Spotlight color (with opacity). Default: "rgba(120, 119, 198, 0.15)" */
  spotlightColor?: string
  /** Border spotlight color. Default: "rgba(120, 119, 198, 0.3)" */
  borderColor?: string
}

const MagicCard = React.forwardRef<HTMLDivElement, MagicCardProps>(
  (
    {
      className,
      children,
      spotlightSize = 300,
      spotlightColor = "rgba(120, 119, 198, 0.15)",
      borderColor = "rgba(120, 119, 198, 0.3)",
      ...props
    },
    ref
  ) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = React.useState(false)
    const [opacity, setOpacity] = React.useState(0)

    React.useImperativeHandle(ref, () => containerRef.current!)

    const handleMouseMove = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      },
      []
    )

    const handleMouseEnter = React.useCallback(() => {
      setIsHovered(true)
      setOpacity(1)
    }, [])

    const handleMouseLeave = React.useCallback(() => {
      setIsHovered(false)
      setOpacity(0)
    }, [])

    return (
      <div
        ref={containerRef}
        className={cn(
          "group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors duration-300",
          isHovered && "border-border/80",
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Spotlight effect */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity,
            background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
          }}
        />
        {/* Border glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity,
            background: `radial-gradient(${spotlightSize * 0.8}px circle at ${position.x}px ${position.y}px, ${borderColor}, transparent 70%)`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    )
  }
)
MagicCard.displayName = "MagicCard"

export { MagicCard }
export type { MagicCardProps }
