import * as React from "react"
import { cn } from "../../lib/utils"

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Duration of one full rotation in seconds. Default: 8 */
  duration?: number
  /** Shine colors. Default: ["#A07CFE", "#FE8FB5", "#FFBE7B"] */
  shineColors?: string[]
  /** Border width in px. Default: 1.5 */
  borderWidth?: number
  /** Border radius. Default: "0.75rem" */
  borderRadius?: string
}

const ShineBorder = React.forwardRef<HTMLDivElement, ShineBorderProps>(
  (
    {
      className,
      children,
      duration = 8,
      shineColors = ["#A07CFE", "#FE8FB5", "#FFBE7B"],
      borderWidth = 1.5,
      borderRadius = "0.75rem",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden bg-background", className)}
        style={{
          borderRadius,
          padding: `${borderWidth}px`,
        }}
        {...props}
      >
        {/* Animated gradient background */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius,
            background: `conic-gradient(from calc(var(--shine-angle, 0) * 1deg), ${shineColors.join(", ")}, ${shineColors[0]})`,
            animation: `shine-border-spin ${duration}s linear infinite`,
          }}
        />
        {/* Content container */}
        <div
          className="relative z-10 h-full w-full bg-background"
          style={{ borderRadius: `calc(${borderRadius} - ${borderWidth}px)` }}
        >
          {children}
        </div>
      </div>
    )
  }
)
ShineBorder.displayName = "ShineBorder"

export { ShineBorder }
export type { ShineBorderProps }
