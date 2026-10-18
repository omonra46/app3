import { useState } from "react"
import { motion } from "motion/react"
import { GraduationCap, CheckCircle2, Circle, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"
import { steps } from "@/data/tutorial"
import { checklistItems } from "@/data/checklist"

export function Tutorial() {
  const [done, setDone] = useState<Set<string>>(new Set())
  const [checked, setChecked] = useState<Set<number>>(new Set())

  const toggleStep = (id: string) =>
    setDone((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const toggleCheck = (i: number) =>
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

  const progress = Math.round((done.size / steps.length) * 100)

  return (
    <section id="tutorial" className="relative mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Курс
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Вайбкодинг за 8 шагов
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          От «что вообще скачать» до «коммить после каждого шага». Отмечай
          пройденные шаги — прогресс считается автоматически.
        </p>
      </motion.div>

      <div className="mb-8 flex items-center gap-3">
        <div
          className="h-2 flex-1 overflow-hidden rounded-full bg-white/10"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Прогресс курса"
        >
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <span className="text-xs font-semibold text-muted-foreground tabular-nums">
          {done.size}/{steps.length}
        </span>
      </div>

      <div className="space-y-4">
        {steps.map((step, i) => {
          const isDone = done.has(step.id)
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "rounded-2xl border p-5 transition-colors duration-300 sm:p-6",
                isDone
                  ? "border-emerald-400/40 bg-emerald-500/10"
                  : "border-white/10 bg-card/80 backdrop-blur-sm",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold",
                      isDone
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "bg-white/5 text-muted-foreground",
                    )}
                  >
                    {isDone ? (
                      <CheckCircle2 className="size-5" aria-hidden="true" />
                    ) : (
                      String(i + 1).padStart(2, "0")
                    )}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground sm:text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-accent">{step.goal}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => toggleStep(step.id)}
                  aria-pressed={isDone}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-semibold text-muted-foreground transition-colors duration-300 hover:bg-white/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {isDone ? "Пройден" : "Отметить"}
                </button>
              </div>

              <ul className="mt-4 space-y-2.5 border-t border-white/10 pt-4 sm:pl-14">
                {step.details.map((d) => (
                  <li
                    key={d}
                    className="flex gap-2.5 text-sm leading-relaxed text-foreground/85"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/60"
                      aria-hidden="true"
                    />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              {step.tip && (
                <div className="mt-4 ml-0 flex items-start gap-2.5 rounded-xl border border-amber-400/25 bg-amber-500/10 p-3.5 sm:ml-14">
                  <Lightbulb
                    className="mt-0.5 size-4 shrink-0 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="text-[13px] leading-relaxed text-amber-200/90">
                    {step.tip}
                  </p>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-12 rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-6 sm:p-8"
      >
        <div className="mb-4 flex items-center gap-2.5">
          <GraduationCap className="size-5 text-cyan-300" aria-hidden="true" />
          <h3 className="font-display text-lg font-bold text-foreground">
            Чеклист перед отправкой промпта
          </h3>
        </div>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          Восемь пунктов, которые отсеивают 90% бесполезных итераций.
        </p>
        <ul className="space-y-2.5">
          {checklistItems.map((item, i) => {
            const on = checked.has(i)
            return (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => toggleCheck(i)}
                  aria-pressed={on}
                  className="flex w-full items-center gap-3 rounded-xl border p-3.5 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  style={{
                    borderColor: on
                      ? "rgba(52, 211, 153, 0.4)"
                      : "rgba(255,255,255,0.1)",
                    backgroundColor: on
                      ? "rgba(16, 185, 129, 0.08)"
                      : "transparent",
                  }}
                >
                  {on ? (
                    <CheckCircle2
                      className="size-5 shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <Circle
                      className="size-5 shrink-0 text-muted-foreground/50"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={cn(
                      "text-sm leading-relaxed",
                      on ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {item}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
        {checked.size > 0 && (
          <button
            type="button"
            onClick={() => setChecked(new Set())}
            className="mt-4 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Сбросить чеклист
          </button>
        )}
      </motion.div>
    </section>
  )
}
