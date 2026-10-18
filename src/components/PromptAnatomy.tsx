import { motion } from "motion/react"
import { Wand2, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { promptAnatomy } from "@/data"

export function PromptAnatomy() {
  return (
    <section id="anatomy" className="relative mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <div className="pointer-events-none absolute top-1/3 -right-40 hidden lg:block" aria-hidden="true">
        <div className="aurora aurora-b opacity-20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Промтостроение
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Анатомия промпта
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Формула сильного промпта — пять блоков сверху вниз. Не все нужны
          всегда, но чем сложнее задача, тем больше из них стоит заполнить.
        </p>
      </motion.div>

      <div className="space-y-3">
        {promptAnatomy.map((part, i) => (
          <motion.div
            key={part.id}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative rounded-2xl border bg-card/80 p-5 backdrop-blur-sm sm:p-6",
              part.border,
            )}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-6">
              <div className="flex items-baseline gap-3 sm:w-40 sm:shrink-0">
                <span className="font-mono text-xs text-muted-foreground/70 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className={cn("text-base font-bold", part.color)}>
                    {part.label}
                  </h3>
                  <p className="text-[11px] text-muted-foreground">{part.hint}</p>
                </div>
              </div>
              <p className="font-mono text-[13px] leading-relaxed text-foreground/85 sm:text-sm">
                {part.example}
              </p>
            </div>
            {i < promptAnatomy.length - 1 && (
              <ArrowDown
                className="absolute -bottom-4 left-8 hidden size-4 text-muted-foreground/50 sm:block"
                aria-hidden="true"
              />
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex items-start gap-4 rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-500/15 to-cyan-500/10 p-6"
      >
        <Wand2 className="mt-0.5 size-5 shrink-0 text-violet-300" aria-hidden="true" />
        <div>
          <p className="text-sm font-semibold text-foreground">
            Проверка на прочность
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            Прежде чем отправлять, спроси себя: если бы этот промпт получил
            человек-фрилансер, который ничего не знает о твоём проекте, — он бы
            справился? Если нет, модели он тоже маловато дал. Добавь контекст,
            уточни формат и перечитай глазами адресата.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
