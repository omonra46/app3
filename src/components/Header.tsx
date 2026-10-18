import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#tutorial", label: "Курс" },
  { href: "#glossary", label: "Словарь" },
  { href: "#patterns", label: "Паттерны" },
  { href: "#pitfalls", label: "Грабли" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-background/80 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-bold tracking-tight text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500">
            <Sparkles className="size-4 text-white" aria-hidden="true" />
          </span>
          вайб·словарь
        </a>
        <nav aria-label="Основная навигация" className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors duration-300 hover:bg-white/5 hover:text-foreground sm:px-4 sm:text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
