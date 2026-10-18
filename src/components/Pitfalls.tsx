import { motion } from "motion/react"
import { AlertTriangle, Wrench } from "lucide-react"
import { pitfalls } from "@/data/pitfalls"

export function Pitfalls() {
  return (
    <section id="pitfalls" className="relative mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Грабли
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Семь граблей новичка
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Ошибки, на которые наступают почти все. Каждая — с конкретным
          лекарством.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        {pitfalls.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.2), ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col rounded-2xl border border-white/10 bg-card/80 p-5 backdrop-blur-sm sm:p-6"
          >
            <div className="mb-3 flex items-center gap-2.5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-amber-300">
                <AlertTriangle className="size-4" aria-hidden="true" />
              </span>
              <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-emerald-400/25 bg-emerald-500/10 p-3.5">
              <Wrench className="mt-0.5 size-4 shrink-0 text-emerald-300" aria-hidden="true" />
              <div>
                <p className="mb-0.5 text-[11px] font-bold tracking-wide text-emerald-300 uppercase">
                  Лекарство
                </p>
                <p className="text-[13px] leading-relaxed text-foreground/85">{p.fix}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
