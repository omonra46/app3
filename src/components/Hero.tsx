import { motion } from "motion/react"
import { Sparkles, BookOpen, GraduationCap, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute -top-40 -left-32" aria-hidden="true">
        <div className="aurora aurora-a" />
      </div>
      <div className="absolute -top-20 right-0" aria-hidden="true">
        <div className="aurora aurora-b" />
      </div>
      <div className="absolute top-40 left-1/3" aria-hidden="true">
        <div className="aurora aurora-c" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm"
        >
          <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
          Персональный мануал · курс · словарь · практика
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl leading-tight font-bold tracking-tight text-balance sm:text-6xl md:text-7xl"
        >
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            Вайбкодинг
          </span>{" "}
          и{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-violet-300 bg-clip-text text-transparent">
            промтостроение
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
        >
          Программирование сместилось: теперь главное умение — объяснить машине,
          что ты хочешь. Здесь собраны базовые термины двух этих миров — с
          разборами, примерами и честными предупреждениями о рисках.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#tutorial"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <GraduationCap className="size-4" aria-hidden="true" />
            Начать курс
          </a>
          <a
            href="#glossary"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <BookOpen className="size-4" aria-hidden="true" />
            Открыть словарь
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute inset-x-0 bottom-4 flex justify-center"
        >
          <a
            href="#glossary"
            aria-label="Прокрутить к словарю"
            className="text-muted-foreground/60 transition-colors hover:text-muted-foreground"
          >
            <ChevronDown className="size-5 animate-bounce" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
