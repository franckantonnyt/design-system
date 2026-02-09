import * as React from "react"
import { cn } from "../../lib/utils"

interface BorderBeamProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Duration of one full rotation in seconds. Default: 6 */
  duration?: number
  /** Size of the beam in px. Default: 200 */
  size?: number
  /** Beam color. Default: "hsl(var(--color-primary))" */
  colorFrom?: string
  /** Beam end color. Default: transparent */
  colorTo?: string
  /** Border width in px. Default: 1.5 */
  borderWidth?: number
  /** Animation delay in seconds. Default: 0 */
  delay?: number
}

const BorderBeam = React.forwardRef<HTMLDivElement, BorderBeamProps>(
  (
    {
      className,
      duration = 6,
      size = 200,
      colorFrom = "hsl(var(--color-primary))",
      colorTo = "transparent",
      borderWidth = 1.5,
      delay = 0,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit]",
          className
        )}
        style={
          {
            "--border-beam-size": `${size}px`,
            "--border-beam-duration": `${duration}s`,
            "--border-beam-color-from": colorFrom,
            "--border-beam-color-to": colorTo,
            "--border-beam-delay": `${delay}s`,
            "--border-beam-width": `${borderWidth}px`,
          } as React.CSSProperties
        }
        {...props}
      >
        <div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            padding: `${borderWidth}px`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            background: `conic-gradient(from calc(var(--border-beam-angle, 0) * 1deg), transparent, var(--border-beam-color-from) 10%, var(--border-beam-color-to) 20%, transparent 30%)`,
            animation: `border-beam-spin var(--border-beam-duration) linear infinite`,
            animationDelay: `var(--border-beam-delay)`,
          }}
        />
      </div>
    )
  }
)
BorderBeam.displayName = "BorderBeam"

export { BorderBeam }
export type { BorderBeamProps }
