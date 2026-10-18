import { motion } from "motion/react"
import { X, Check, GitBranch } from "lucide-react"
import { patterns } from "@/data/patterns"

export function Patterns() {
  return (
    <section id="patterns" className="relative mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Практика
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Паттерны промптов: плохо → хорошо
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Семь типовых промптов, которые почти каждый пишет в начале — и их
          рабочие версии. Сравни и переписывай свои по аналогии.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:gap-5">
        {patterns.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.25), ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-card/80 backdrop-blur-sm"
          >
            <h3 className="border-b border-white/10 p-5 pb-4 text-base font-semibold text-foreground sm:p-6">
              {p.title}
            </h3>
            <div className="grid divide-white/10 sm:grid-cols-2 sm:divide-x">
              <div className="p-5 sm:p-6">
                <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-rose-300">
                  <X className="size-3.5" aria-hidden="true" />
                  Плохо
                </div>
                <p className="rounded-xl border border-rose-400/20 bg-rose-500/10 p-4 font-mono text-[13px] leading-relaxed text-rose-200/90">
                  {p.bad}
                </p>
              </div>
              <div className="border-t border-white/10 p-5 sm:border-t-0 sm:p-6">
                <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
                  <Check className="size-3.5" aria-hidden="true" />
                  Хорошо
                </div>
                <p className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4 font-mono text-[13px] leading-relaxed text-emerald-200/90">
                  {p.good}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 border-t border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <GitBranch className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-muted-foreground">{p.why}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
