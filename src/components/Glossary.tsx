import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Search, ChevronDown, Tag, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"
import { allTerms, categories, type Category, type Term } from "@/data"

const categoryStyles: Record<Category, { label: string; chip: string }> = {
  vibe: {
    label: "Вайбкодинг",
    chip: "bg-violet-500/15 text-violet-300 border-violet-400/30",
  },
  prompt: {
    label: "Промтостроение",
    chip: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-400/30",
  },
  tools: {
    label: "Инструменты",
    chip: "bg-cyan-500/15 text-cyan-300 border-cyan-400/30",
  },
  context: {
    label: "Контекст",
    chip: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
  },
  security: {
    label: "Безопасность",
    chip: "bg-amber-500/15 text-amber-300 border-amber-400/30",
  },
}

function TermCard({ term, index }: { term: Term; index: number }) {
  const [open, setOpen] = useState(false)
  const style = categoryStyles[term.category]

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-card/80 backdrop-blur-sm transition-colors duration-300 hover:border-white/20"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start gap-4 p-5 text-left sm:p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide",
                style.chip,
              )}
            >
              {style.label}
            </span>
            {term.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-muted-foreground"
              >
                <Tag className="size-2.5" aria-hidden="true" />
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-base font-semibold text-foreground sm:text-lg">
            {term.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {term.short}
          </p>
        </div>
        <ChevronDown
          className={cn(
            "mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-300",
            open && "rotate-180 text-foreground",
          )}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 px-5 pt-4 pb-5 sm:px-6 sm:pb-6">
              <p className="text-sm leading-relaxed text-foreground/85 sm:text-[15px]">
                {term.body}
              </p>
              {term.example && (
                <div className="mt-4 rounded-xl border border-accent/25 bg-accent/10 p-4">
                  <div className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-accent">
                    <Lightbulb className="size-3.5" aria-hidden="true" />
                    Пример
                  </div>
                  <p className="font-mono text-[13px] leading-relaxed text-foreground/80">
                    {term.example}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}


export function Glossary() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<Category | "all">("all")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return allTerms.filter((t) => {
      const matchesCategory = category === "all" || t.category === category
      if (!matchesCategory) return false
      if (!q) return true
      return (
        t.title.toLowerCase().includes(q) ||
        t.short.toLowerCase().includes(q) ||
        t.body.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q))
      )
    })
  }, [query, category])

  return (
    <section id="glossary" className="relative mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Словарь
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Базовые термины
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Нажми на карточку, чтобы раскрыть подробное объяснение и пример.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 space-y-4"
      >
        <label className="relative block">
          <Search
            className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <span className="sr-only">Поиск по терминам</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск: промпт, агент, контекст…"
            className="w-full rounded-full border border-white/15 bg-white/5 py-3.5 pr-5 pl-11 text-sm text-foreground placeholder:text-muted-foreground/70 backdrop-blur-sm transition-colors duration-300 focus:border-accent/50 focus:bg-white/[0.07] focus:outline-none"
          />
        </label>

        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Фильтр по категориям"
        >
          {categories.map((c) => {
            const active = category === c.id
            const count =
              c.id === "all"
                ? allTerms.length
                : allTerms.filter((t) => t.category === c.id).length
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                aria-pressed={active}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  active
                    ? "border-transparent bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-md shadow-violet-500/20"
                    : "border-white/15 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground",
                )}
              >
                {c.label}
                <span className={cn("ml-1.5 tabular-nums", active ? "text-white/70" : "text-muted-foreground/60")}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </motion.div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/15 p-12 text-center">
          <p className="text-sm text-muted-foreground">
            Ничего не найдено. Попробуй другой запрос — например, «промпт»
            или «агент».
          </p>
        </div>
      ) : (
        <motion.div layout className="grid gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((term, i) => (
              <TermCard key={term.id} term={term} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  )
}
