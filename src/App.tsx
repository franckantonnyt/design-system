import { useState, useEffect } from "react"
import { Button } from "@/components/ui"
import { Input } from "@/components/ui"
import { Badge } from "@/components/ui"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui"
import { Checkbox } from "@/components/ui"
import { Switch } from "@/components/ui"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from "@/components/ui"
import { ProgressiveBlur } from "@/components/effects"
import { BorderBeam } from "@/components/effects"
import { ShineBorder } from "@/components/effects"
import { MagicCard } from "@/components/effects"
import { Particles } from "@/components/effects"
import { Meteors } from "@/components/effects"

type Page =
  | "getting-started"
  | "button"
  | "input"
  | "badge"
  | "card"
  | "checkbox"
  | "switch"
  | "accordion"
  | "tabs"
  | "tooltip"
  | "dialog"
  | "alert-dialog"
  | "dropdown-menu"
  | "select"
  | "progressive-blur"
  | "border-beam"
  | "shine-border"
  | "magic-card"
  | "particles"
  | "meteors"

function App() {
  const [isDark, setIsDark] = useState(true)
  const [currentPage, setCurrentPage] = useState<Page>("getting-started")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const menuItems: { id: Page; label: string; isComponent?: boolean; category?: string }[] = [
    { id: "getting-started", label: "Getting Started" },
    { id: "accordion", label: "Accordion", isComponent: true, category: "Data Display" },
    { id: "alert-dialog", label: "Alert Dialog", isComponent: true, category: "Overlay" },
    { id: "badge", label: "Badge", isComponent: true, category: "UI" },
    { id: "button", label: "Button", isComponent: true, category: "UI" },
    { id: "card", label: "Card", isComponent: true, category: "UI" },
    { id: "checkbox", label: "Checkbox", isComponent: true, category: "Form" },
    { id: "dialog", label: "Dialog", isComponent: true, category: "Overlay" },
    { id: "dropdown-menu", label: "Dropdown Menu", isComponent: true, category: "Overlay" },
    { id: "input", label: "Input", isComponent: true, category: "Form" },
    { id: "select", label: "Select", isComponent: true, category: "Form" },
    { id: "switch", label: "Switch", isComponent: true, category: "Form" },
    { id: "tabs", label: "Tabs", isComponent: true, category: "Navigation" },
    { id: "tooltip", label: "Tooltip", isComponent: true, category: "Overlay" },
    { id: "border-beam", label: "Border Beam", isComponent: true, category: "Effects" },
    { id: "magic-card", label: "Magic Card", isComponent: true, category: "Effects" },
    { id: "meteors", label: "Meteors", isComponent: true, category: "Effects" },
    { id: "particles", label: "Particles", isComponent: true, category: "Effects" },
    { id: "progressive-blur", label: "Progressive Blur", isComponent: true, category: "Effects" },
    { id: "shine-border", label: "Shine Border", isComponent: true, category: "Effects" },
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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
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
                <h4 className="mb-2 text-sm font-semibold text-foreground">Getting Started</h4>
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
                <h4 className="mb-2 text-sm font-semibold text-foreground">Components</h4>
                <div className="space-y-1">
                  {menuItems
                    .filter((item) => item.isComponent && item.category !== "Effects")
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
              <div>
                <h4 className="mb-2 text-sm font-semibold text-foreground">Effects</h4>
                <div className="space-y-1">
                  {menuItems
                    .filter((item) => item.category === "Effects")
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
            {currentPage === "badge" && <BadgePage />}
            {currentPage === "button" && <ButtonPage />}
            {currentPage === "card" && <CardPage />}
            {currentPage === "input" && <InputPage />}
            {currentPage === "checkbox" && <CheckboxPage />}
            {currentPage === "switch" && <SwitchPage />}
            {currentPage === "accordion" && <AccordionPage />}
            {currentPage === "tabs" && <TabsPage />}
            {currentPage === "tooltip" && <TooltipPage />}
            {currentPage === "dialog" && <DialogPage />}
            {currentPage === "alert-dialog" && <AlertDialogPage />}
            {currentPage === "dropdown-menu" && <DropdownMenuPage />}
            {currentPage === "select" && <SelectPage />}
            {currentPage === "progressive-blur" && <ProgressiveBlurPage />}
            {currentPage === "border-beam" && <BorderBeamPage />}
            {currentPage === "shine-border" && <ShineBorderPage />}
            {currentPage === "magic-card" && <MagicCardPage />}
            {currentPage === "particles" && <ParticlesPage />}
            {currentPage === "meteors" && <MeteorsPage />}
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
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
          )}
        </button>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Getting Started
   ═══════════════════════════════════════════ */

function GettingStartedPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Installation</h1>
        <p className="mt-2 text-lg text-muted-foreground">How to install and use the design system in your project.</p>
      </div>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">1. Install the package</h2>
          <CodeBlock title="npm">{`npm install @franckantonny/design-system`}</CodeBlock>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">2. Add the CSS file</h2>
          <p className="text-muted-foreground mb-4">Import the styles in your main CSS file or entry point:</p>
          <CodeBlock title="main.tsx or App.tsx">{`import "@franckantonny/design-system/styles.css"`}</CodeBlock>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">3. Start using components</h2>
          <CodeBlock title="Example">{`import { Button, Input, Dialog } from "@franckantonny/design-system"

export function MyComponent() {
  return (
    <div className="space-y-4">
      <Input placeholder="Enter your email" />
      <Button>Subscribe</Button>
    </div>
  )
}`}</CodeBlock>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Button
   ═══════════════════════════════════════════ */

function ButtonPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Button</h1>
        <p className="mt-2 text-lg text-muted-foreground">Displays a button or a component that looks like a button.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { Button } from "@franckantonny/design-system"

export default function Example() {
  return <Button>Click me</Button>
}`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
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
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Sizes</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">States</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="flex flex-wrap gap-3">
              <Button>Enabled</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Badge
   ═══════════════════════════════════════════ */

function BadgePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Badge</h1>
        <p className="mt-2 text-lg text-muted-foreground">Displays a badge or a component that looks like a badge.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { Badge } from "@franckantonny/design-system"

export default function Example() {
  return <Badge>Badge</Badge>
}`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Variants</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="flex flex-wrap gap-3">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="muted">Muted</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Card
   ═══════════════════════════════════════════ */

function CardPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Card</h1>
        <p className="mt-2 text-lg text-muted-foreground">Displays a card with header, content, and footer.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@franckantonny/design-system"`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Default</h3>
          <div className="rounded-lg border border-border p-6">
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">This is the card content area. You can place any content here.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">With Form</h3>
          <div className="rounded-lg border border-border p-6">
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>Create account</CardTitle>
                <CardDescription>Enter your email below to create your account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="m@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Password</label>
                  <Input type="password" placeholder="••••••••" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Create account</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Input
   ═══════════════════════════════════════════ */

function InputPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Input</h1>
        <p className="mt-2 text-lg text-muted-foreground">Displays a form input field.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { Input } from "@franckantonny/design-system"

export default function Example() {
  return <Input placeholder="Email" />
}`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Default</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="max-w-sm">
              <Input placeholder="Digite algo..." />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Types</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="max-w-sm space-y-3">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Input type="number" placeholder="Number" />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">States</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="max-w-sm space-y-3">
              <Input placeholder="Enabled" />
              <Input placeholder="Disabled" disabled />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">File</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="max-w-sm">
              <Input type="file" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Checkbox
   ═══════════════════════════════════════════ */

function CheckboxPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Checkbox</h1>
        <p className="mt-2 text-lg text-muted-foreground">A control that allows the user to toggle between checked and not checked.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { Checkbox } from "@franckantonny/design-system"

export default function Example() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label htmlFor="terms">Accept terms</label>
    </div>
  )
}`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Default</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms1" />
              <label htmlFor="terms1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Accept terms and conditions
              </label>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">With Text</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="items-top flex space-x-2">
              <Checkbox id="terms2" />
              <div className="grid gap-1.5 leading-none">
                <label htmlFor="terms2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Accept terms and conditions
                </label>
                <p className="text-sm text-muted-foreground">
                  You agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Disabled</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms3" disabled />
              <label htmlFor="terms3" className="text-sm font-medium leading-none text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Switch
   ═══════════════════════════════════════════ */

function SwitchPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Switch</h1>
        <p className="mt-2 text-lg text-muted-foreground">A control that allows the user to toggle between on and off.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { Switch } from "@franckantonny/design-system"

export default function Example() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <label htmlFor="airplane-mode">Airplane Mode</label>
    </div>
  )
}`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Default</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="flex items-center space-x-2">
              <Switch id="airplane" />
              <label htmlFor="airplane" className="text-sm font-medium">Airplane Mode</label>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Settings Example</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Marketing emails</label>
                  <p className="text-sm text-muted-foreground">Receive emails about new products and features.</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Security emails</label>
                  <p className="text-sm text-muted-foreground">Receive emails about your account security.</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Disabled</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="flex items-center space-x-2">
              <Switch disabled />
              <label className="text-sm font-medium text-muted-foreground">Disabled</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Accordion
   ═══════════════════════════════════════════ */

function AccordionPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Accordion</h1>
        <p className="mt-2 text-lg text-muted-foreground">A vertically stacked set of interactive headings that each reveal a section of content.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@franckantonny/design-system"

export default function Example() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Default</h3>
          <div className="rounded-lg border border-border p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>Yes. It comes with default styles that match the other components' aesthetic.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Multiple</h3>
          <div className="rounded-lg border border-border p-6">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
                <AccordionContent>Yes! Set type="multiple" to allow multiple items to be open at the same time.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it customizable?</AccordionTrigger>
                <AccordionContent>Absolutely. You can customize it with className prop and Tailwind CSS.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Tabs
   ═══════════════════════════════════════════ */

function TabsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Tabs</h1>
        <p className="mt-2 text-lg text-muted-foreground">A set of layered sections of content known as tab panels, displayed one at a time.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@franckantonny/design-system"

export default function Example() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings here.</TabsContent>
      <TabsContent value="password">Password settings here.</TabsContent>
    </Tabs>
  )
}`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Default</h3>
          <div className="rounded-lg border border-border p-6">
            <Tabs defaultValue="account" className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>Make changes to your account here. Click save when you're done.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <label className="text-sm font-medium">Name</label>
                      <Input defaultValue="Franck Antonny" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium">Username</label>
                      <Input defaultValue="@franckantonny" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <label className="text-sm font-medium">Current password</label>
                      <Input type="password" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium">New password</label>
                      <Input type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save password</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Tooltip
   ═══════════════════════════════════════════ */

function TooltipPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Tooltip</h1>
        <p className="mt-2 text-lg text-muted-foreground">A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@franckantonny/design-system"

export default function Example() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>
          <p>Tooltip content</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Default</h3>
          <div className="rounded-lg border border-border p-6">
            <TooltipProvider>
              <div className="flex gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to library</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add new item</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Dialog
   ═══════════════════════════════════════════ */

function DialogPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dialog</h1>
        <p className="mt-2 text-lg text-muted-foreground">A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@franckantonny/design-system"

export default function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Dialog description here.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Default</h3>
          <div className="rounded-lg border border-border p-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-right text-sm font-medium">Name</label>
                    <Input className="col-span-3" defaultValue="Franck Antonny" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-right text-sm font-medium">Username</label>
                    <Input className="col-span-3" defaultValue="@franckantonny" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Alert Dialog
   ═══════════════════════════════════════════ */

function AlertDialogPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Alert Dialog</h1>
        <p className="mt-2 text-lg text-muted-foreground">A modal dialog that interrupts the user with important content and expects a response.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from "@franckantonny/design-system"

export default function Example() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Default</h3>
          <div className="rounded-lg border border-border p-6">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Yes, delete account</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Dropdown Menu
   ═══════════════════════════════════════════ */

function DropdownMenuPage() {
  const [showStatus, setShowStatus] = useState(true)
  const [showActivity, setShowActivity] = useState(false)

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dropdown Menu</h1>
        <p className="mt-2 text-lg text-muted-foreground">Displays a menu to the user — such as a set of actions or functions — triggered by a button.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@franckantonny/design-system"

export default function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Default</h3>
          <div className="rounded-lg border border-border p-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Keyboard shortcuts</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Invite users</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">With Checkboxes</h3>
          <div className="rounded-lg border border-border p-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">View Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={showStatus} onCheckedChange={setShowStatus}>
                  Status Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={showActivity} onCheckedChange={setShowActivity}>
                  Activity Bar
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Select
   ═══════════════════════════════════════════ */

function SelectPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Select</h1>
        <p className="mt-2 text-lg text-muted-foreground">Displays a list of options for the user to pick from, triggered by a button.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@franckantonny/design-system"

export default function Example() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  )
}`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Default</h3>
          <div className="rounded-lg border border-border p-6">
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="remix">Remix</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="gatsby">Gatsby</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">With Groups</h3>
          <div className="rounded-lg border border-border p-6">
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>North America</SelectLabel>
                  <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                  <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                  <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>South America</SelectLabel>
                  <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                  <SelectItem value="art">Argentina Time (ART)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Disabled</h3>
          <div className="rounded-lg border border-border p-6">
            <Select disabled>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Disabled" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a">Option A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Progressive Blur
   ═══════════════════════════════════════════ */

function ProgressiveBlurPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Progressive Blur</h1>
        <p className="mt-2 text-lg text-muted-foreground">A progressive blur overlay that fades from clear to blurred. Great for hero sections, image overlays, and content fade effects.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { ProgressiveBlur } from "@franckantonny/design-system"

export default function Example() {
  return (
    <div className="relative h-64 overflow-hidden">
      <img src="..." className="h-full w-full object-cover" />
      <ProgressiveBlur direction="bottom" />
    </div>
  )
}`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Scrollable List (bottom blur)</h3>
          <p className="text-sm text-muted-foreground">Scroll the list below — content fades smoothly into the blur at the bottom.</p>
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="relative h-80">
              <div className="h-full overflow-y-auto p-6 space-y-3">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">List item number {i + 1}</p>
                      <p className="text-xs text-muted-foreground">Scroll to see the blur effect at the bottom edge</p>
                    </div>
                  </div>
                ))}
              </div>
              <ProgressiveBlur direction="bottom" blurIntensity={14} />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Hero Image (bottom blur)</h3>
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="relative h-64 bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 p-6">
              <div className="space-y-3">
                <p className="text-white font-bold text-xl">Content at the top</p>
                <p className="text-white/80 text-sm">This text is fully visible at the top.</p>
                <p className="text-white/80 text-sm">As you go down, the content gets progressively blurred.</p>
                <p className="text-white/80 text-sm">More content here that will appear blurred.</p>
                <p className="text-white/80 text-sm">And even more content at the very bottom.</p>
                <p className="text-white/80 text-sm">This should be the most blurred.</p>
              </div>
              <ProgressiveBlur direction="bottom" blurIntensity={12} />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Top Blur</h3>
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="relative h-80">
              <div className="h-full overflow-y-auto p-6 space-y-3">
                {Array.from({ length: 15 }, (_, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-500/10 text-sm font-bold text-pink-500">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Chat message {i + 1}</p>
                      <p className="text-xs text-muted-foreground">Older messages blur at the top</p>
                    </div>
                  </div>
                ))}
              </div>
              <ProgressiveBlur direction="top" blurIntensity={12} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Border Beam
   ═══════════════════════════════════════════ */

function BorderBeamPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Border Beam</h1>
        <p className="mt-2 text-lg text-muted-foreground">An animated beam of light that travels around the border of an element. Perfect for highlighting cards, CTAs, or featured content.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { BorderBeam } from "@franckantonny/design-system"

export default function Example() {
  return (
    <div className="relative rounded-xl border bg-card p-6">
      <p>Your content here</p>
      <BorderBeam />
    </div>
  )
}`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Default</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="relative mx-auto max-w-md rounded-xl border bg-card p-8 text-center">
              <h3 className="text-lg font-semibold">Featured Card</h3>
              <p className="mt-2 text-sm text-muted-foreground">This card has an animated border beam effect that draws attention.</p>
              <BorderBeam duration={6} size={200} />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Custom Colors</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="flex gap-4">
              <div className="relative flex-1 rounded-xl border bg-card p-6 text-center">
                <p className="text-sm font-medium">Blue beam</p>
                <BorderBeam duration={4} colorFrom="#3b82f6" colorTo="#06b6d4" size={150} />
              </div>
              <div className="relative flex-1 rounded-xl border bg-card p-6 text-center">
                <p className="text-sm font-medium">Pink beam</p>
                <BorderBeam duration={4} colorFrom="#ec4899" colorTo="#f97316" size={150} />
              </div>
              <div className="relative flex-1 rounded-xl border bg-card p-6 text-center">
                <p className="text-sm font-medium">Green beam</p>
                <BorderBeam duration={4} colorFrom="#22c55e" colorTo="#06b6d4" size={150} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Shine Border
   ═══════════════════════════════════════════ */

function ShineBorderPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Shine Border</h1>
        <p className="mt-2 text-lg text-muted-foreground">An animated shining gradient border effect. Great for premium cards, pricing sections, or featured elements.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { ShineBorder } from "@franckantonny/design-system"

export default function Example() {
  return (
    <ShineBorder>
      <div className="p-6">
        <p>Your content here</p>
      </div>
    </ShineBorder>
  )
}`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Default</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="mx-auto max-w-md">
              <ShineBorder>
                <div className="p-8 text-center">
                  <h3 className="text-lg font-semibold">Shine Border</h3>
                  <p className="mt-2 text-sm text-muted-foreground">A beautiful animated gradient border that rotates around the container.</p>
                </div>
              </ShineBorder>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Custom Colors</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="flex gap-4">
              <ShineBorder shineColors={["#3b82f6", "#06b6d4", "#3b82f6"]} className="flex-1">
                <div className="p-6 text-center">
                  <p className="text-sm font-medium">Blue</p>
                </div>
              </ShineBorder>
              <ShineBorder shineColors={["#22c55e", "#84cc16", "#22c55e"]} className="flex-1">
                <div className="p-6 text-center">
                  <p className="text-sm font-medium">Green</p>
                </div>
              </ShineBorder>
              <ShineBorder shineColors={["#f97316", "#ef4444", "#f97316"]} className="flex-1">
                <div className="p-6 text-center">
                  <p className="text-sm font-medium">Orange</p>
                </div>
              </ShineBorder>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">With Card Content</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="mx-auto max-w-sm">
              <ShineBorder duration={6} borderWidth={2}>
                <div className="p-6">
                  <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pro Plan</div>
                  <div className="text-3xl font-bold">$29<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                  <p className="mt-2 text-sm text-muted-foreground">Everything you need to get started.</p>
                  <Button className="mt-6 w-full">Get Started</Button>
                </div>
              </ShineBorder>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Magic Card
   ═══════════════════════════════════════════ */

function MagicCardPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Magic Card</h1>
        <p className="mt-2 text-lg text-muted-foreground">A card with a spotlight effect that follows the mouse cursor. Creates a premium interactive feel.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { MagicCard } from "@franckantonny/design-system"

export default function Example() {
  return (
    <MagicCard>
      <h3>Card Title</h3>
      <p>Move your mouse over this card.</p>
    </MagicCard>
  )
}`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Default</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="grid grid-cols-2 gap-4">
              <MagicCard>
                <h3 className="text-lg font-semibold">Feature One</h3>
                <p className="mt-2 text-sm text-muted-foreground">Move your mouse over this card to see the spotlight effect follow your cursor.</p>
              </MagicCard>
              <MagicCard>
                <h3 className="text-lg font-semibold">Feature Two</h3>
                <p className="mt-2 text-sm text-muted-foreground">Each card has its own independent spotlight that creates a premium interactive feel.</p>
              </MagicCard>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Custom Colors</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="grid grid-cols-3 gap-4">
              <MagicCard spotlightColor="rgba(59, 130, 246, 0.2)" borderColor="rgba(59, 130, 246, 0.4)">
                <h3 className="text-sm font-semibold">Blue</h3>
                <p className="mt-1 text-xs text-muted-foreground">Blue spotlight</p>
              </MagicCard>
              <MagicCard spotlightColor="rgba(236, 72, 153, 0.2)" borderColor="rgba(236, 72, 153, 0.4)">
                <h3 className="text-sm font-semibold">Pink</h3>
                <p className="mt-1 text-xs text-muted-foreground">Pink spotlight</p>
              </MagicCard>
              <MagicCard spotlightColor="rgba(34, 197, 94, 0.2)" borderColor="rgba(34, 197, 94, 0.4)">
                <h3 className="text-sm font-semibold">Green</h3>
                <p className="mt-1 text-xs text-muted-foreground">Green spotlight</p>
              </MagicCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Particles
   ═══════════════════════════════════════════ */

function ParticlesPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Particles</h1>
        <p className="mt-2 text-lg text-muted-foreground">An interactive canvas-based particles background. Particles float, pulse, and react to mouse movement.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { Particles } from "@franckantonny/design-system"

export default function Example() {
  return (
    <div className="relative h-96 overflow-hidden rounded-xl bg-black">
      <Particles quantity={50} color="#ffffff" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Hero Section</h1>
      </div>
    </div>
  )
}`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Default (interactive)</h3>
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="relative h-72 bg-zinc-950">
              <Particles quantity={60} color="#ffffff" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2">
                <h3 className="text-white text-2xl font-bold">Move your mouse</h3>
                <p className="text-zinc-400 text-sm">Particles react to your cursor</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Colored</h3>
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="relative h-72 bg-zinc-950">
              <Particles quantity={40} color="#8b5cf6" maxSize={3} speed={0.2} />
              <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2">
                <h3 className="text-white text-2xl font-bold">Purple Vibes</h3>
                <p className="text-zinc-400 text-sm">Custom color particles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE — Meteors
   ═══════════════════════════════════════════ */

function MeteorsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Meteors</h1>
        <p className="mt-2 text-lg text-muted-foreground">Animated meteor streaks that fall across the element. Great for hero backgrounds, cards, and dark-themed sections.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Usage</h2>
        <CodeBlock title="React">{`import { Meteors } from "@franckantonny/design-system"

export default function Example() {
  return (
    <div className="relative h-96 overflow-hidden rounded-xl bg-black">
      <Meteors quantity={15} />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Hero Section</h1>
      </div>
    </div>
  )
}`}</CodeBlock>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">Default</h3>
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="relative h-72 bg-zinc-950">
              <Meteors quantity={15} />
              <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2">
                <h3 className="text-white text-2xl font-bold">Meteor Shower</h3>
                <p className="text-zinc-400 text-sm">Animated falling meteors</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium text-foreground">On a Card</h3>
          <div className="rounded-lg border border-border p-6">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-xl border border-border bg-zinc-950 p-8">
              <Meteors quantity={10} />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white">Featured Plan</h3>
                <p className="mt-2 text-sm text-zinc-400">The most popular choice for growing teams.</p>
                <div className="mt-4 text-3xl font-bold text-white">$49<span className="text-base font-normal text-zinc-400">/mo</span></div>
                <Button className="mt-6 w-full">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
