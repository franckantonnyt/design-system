import { useState, useEffect } from "react"
import { Button } from "@/components/ui"
import { Input } from "@/components/ui"

type Page = "getting-started" | "button" | "input"

function App() {
  const [isDark, setIsDark] = useState(true)
  const [currentPage, setCurrentPage] = useState<Page>("getting-started")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const menuItems: { id: Page; label: string; isComponent?: boolean }[] = [
    { id: "getting-started", label: "Getting Started" },
    { id: "button", label: "Button", isComponent: true },
    { id: "input", label: "Input", isComponent: true },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-foreground">
              <span className="text-xs font-bold text-background">DS</span>
            </div>
            <span className="font-semibold text-foreground">design-system/ui</span>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="h-8 w-8"
            >
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="sticky top-14 h-[calc(100vh-3.5rem)] w-64 shrink-0 border-r border-border/40">
          <nav className="h-full overflow-y-auto py-6 pr-6 pl-6">
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 text-sm font-semibold text-foreground">
                  Getting Started
                </h4>
                <div className="space-y-1">
                  <button
                    onClick={() => setCurrentPage("getting-started")}
                    className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                      currentPage === "getting-started"
                        ? "bg-accent text-accent-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`}
                  >
                    Installation
                  </button>
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold text-foreground">
                  Components
                </h4>
                <div className="space-y-1">
                  {menuItems
                    .filter((item) => item.isComponent)
                    .map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setCurrentPage(item.id)}
                        className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                          currentPage === item.id
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="mx-auto max-w-3xl px-8 py-10">
            {currentPage === "getting-started" && <GettingStartedPage />}
            {currentPage === "button" && <ButtonPage />}
            {currentPage === "input" && <InputPage />}
          </div>
        </main>
      </div>
    </div>
  )
}

function CodeBlock({ children, title }: { children: string; title?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-lg border border-border bg-zinc-950 dark:bg-zinc-900">
      {title && (
        <div className="flex items-center gap-2 border-b border-border/50 px-4 py-2">
          <span className="text-xs font-medium text-zinc-400">{title}</span>
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-sm">
          <code className="text-zinc-100">{children}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
        >
          {copied ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

function GettingStartedPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Installation
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          How to install and use the design system in your project.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            1. Install the package
          </h2>
          <CodeBlock title="npm">
{`npm install @design-system/ui`}
          </CodeBlock>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            2. Install dependencies
          </h2>
          <p className="text-muted-foreground mb-4">
            The library requires these peer dependencies:
          </p>
          <CodeBlock title="npm">
{`npm install class-variance-authority clsx tailwind-merge`}
          </CodeBlock>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            3. Add the CSS file
          </h2>
          <p className="text-muted-foreground mb-4">
            Import the styles in your main CSS file or entry point:
          </p>
          <CodeBlock title="main.tsx or App.tsx">
{`import "@design-system/ui/styles.css"`}
          </CodeBlock>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            4. Configure Tailwind (optional)
          </h2>
          <p className="text-muted-foreground mb-4">
            If you're using Tailwind CSS v4+, the CSS variables are already included. For custom theming, you can override the CSS variables:
          </p>
          <CodeBlock title="globals.css">
{`:root {
  --color-primary: hsl(240 5.9% 10%);
  --color-primary-foreground: hsl(0 0% 98%);
  /* ... other variables */
}

.dark {
  --color-primary: hsl(0 0% 98%);
  --color-primary-foreground: hsl(240 5.9% 10%);
  /* ... other variables */
}`}
          </CodeBlock>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            5. Add the cn utility
          </h2>
          <p className="text-muted-foreground mb-4">
            Create a utility file for className merging:
          </p>
          <CodeBlock title="lib/utils.ts">
{`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
          </CodeBlock>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            6. Start using components
          </h2>
          <CodeBlock title="Example">
{`import { Button, Input } from "@design-system/ui"

export function MyComponent() {
  return (
    <div className="space-y-4">
      <Input placeholder="Enter your email" />
      <Button>Subscribe</Button>
    </div>
  )
}`}
          </CodeBlock>
        </div>
      </div>
    </div>
  )
}

function ButtonPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Button
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Displays a button or a component that looks like a button.
        </p>
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Installation</h2>
        <CodeBlock title="npm">
{`npm install @design-system/ui`}
        </CodeBlock>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">
{`import { Button } from "@design-system/ui"

export default function Example() {
  return <Button>Click me</Button>
}`}
        </CodeBlock>
      </div>

      {/* Examples */}
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>

        {/* Variants */}
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Variants</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>
          <CodeBlock>
{`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
          </CodeBlock>
        </div>

        {/* Sizes */}
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Sizes</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </Button>
            </div>
          </div>
          <CodeBlock>
{`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <PlusIcon />
</Button>`}
          </CodeBlock>
        </div>

        {/* States */}
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">States</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="flex flex-wrap gap-3">
              <Button>Enabled</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
          <CodeBlock>
{`<Button>Enabled</Button>
<Button disabled>Disabled</Button>`}
          </CodeBlock>
        </div>
      </div>
    </div>
  )
}

function InputPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Input
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Displays a form input field or a component that looks like an input field.
        </p>
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Installation</h2>
        <CodeBlock title="npm">
{`npm install @design-system/ui`}
        </CodeBlock>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">
{`import { Input } from "@design-system/ui"

export default function Example() {
  return <Input placeholder="Email" />
}`}
        </CodeBlock>
      </div>

      {/* Examples */}
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>

        {/* Default */}
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Default</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="max-w-sm">
              <Input placeholder="Digite algo..." />
            </div>
          </div>
          <CodeBlock>
{`<Input placeholder="Digite algo..." />`}
          </CodeBlock>
        </div>

        {/* Types */}
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Types</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="max-w-sm space-y-3">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Input type="number" placeholder="Number" />
            </div>
          </div>
          <CodeBlock>
{`<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Number" />`}
          </CodeBlock>
        </div>

        {/* States */}
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">States</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="max-w-sm space-y-3">
              <Input placeholder="Enabled" />
              <Input placeholder="Disabled" disabled />
            </div>
          </div>
          <CodeBlock>
{`<Input placeholder="Enabled" />
<Input placeholder="Disabled" disabled />`}
          </CodeBlock>
        </div>

        {/* File Input */}
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">File</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="max-w-sm">
              <Input type="file" />
            </div>
          </div>
          <CodeBlock>
{`<Input type="file" />`}
          </CodeBlock>
        </div>

        {/* With Label */}
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">With Label</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="max-w-sm space-y-2">
              <label className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input type="email" placeholder="m@example.com" />
              <p className="text-sm text-muted-foreground">
                Enter your email address.
              </p>
            </div>
          </div>
          <CodeBlock>
{`<div className="space-y-2">
  <label className="text-sm font-medium">
    Email
  </label>
  <Input type="email" placeholder="m@example.com" />
  <p className="text-sm text-muted-foreground">
    Enter your email address.
  </p>
</div>`}
          </CodeBlock>
        </div>
      </div>
    </div>
  )
}

export default App
