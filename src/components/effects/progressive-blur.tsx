import * as React from "react"
import { cn } from "../../lib/utils"

interface ProgressiveBlurProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Direction the blur increases toward. Default: "bottom" */
  direction?: "top" | "bottom" | "left" | "right"
  /** Max blur intensity in px. Default: 12 */
  blurIntensity?: number
}

const ProgressiveBlur = React.forwardRef<HTMLDivElement, ProgressiveBlurProps>(
  (
    {
      className,
      direction = "bottom",
      blurIntensity = 12,
      ...props
    },
    ref
  ) => {
    // The "to" direction for the gradient — blur increases toward this direction
    const gradientTo = {
      bottom: "to bottom",
      top: "to top",
      left: "to left",
      right: "to right",
    }[direction]

    // 8 fixed layers with exponentially increasing blur
    // Each layer covers from its start% to 100% (in the blur direction)
    // with a smooth fade-in at the leading edge
    const steps = [
      { blur: blurIntensity * 0.02, start: 0 },
      { blur: blurIntensity * 0.06, start: 10 },
      { blur: blurIntensity * 0.12, start: 20 },
      { blur: blurIntensity * 0.2, start: 30 },
      { blur: blurIntensity * 0.35, start: 40 },
      { blur: blurIntensity * 0.55, start: 55 },
      { blur: blurIntensity * 0.78, start: 70 },
      { blur: blurIntensity, start: 85 },
    ]

    return (
      <div
        ref={ref}
        className={cn("pointer-events-none absolute inset-0 z-10", className)}
        {...props}
      >
        {steps.map((step, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${step.blur}px)`,
              WebkitBackdropFilter: `blur(${step.blur}px)`,
              maskImage: `linear-gradient(${gradientTo}, rgba(0,0,0,0) ${step.start}%, rgba(0,0,0,1) ${Math.min(step.start + 15, 100)}%)`,
              WebkitMaskImage: `linear-gradient(${gradientTo}, rgba(0,0,0,0) ${step.start}%, rgba(0,0,0,1) ${Math.min(step.start + 15, 100)}%)`,
            }}
          />
        ))}
      </div>
    )
  }
)
ProgressiveBlur.displayName = "ProgressiveBlur"

export { ProgressiveBlur }
export type { ProgressiveBlurProps }
