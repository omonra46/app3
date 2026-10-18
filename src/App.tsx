import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Tutorial } from "@/components/Tutorial"
import { Glossary } from "@/components/Glossary"
import { Patterns } from "@/components/Patterns"
import { Pitfalls } from "@/components/Pitfalls"
import { PromptAnatomy } from "@/components/PromptAnatomy"

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs text-muted-foreground">
          вайб·мануал — интерактивный учебник по вайбкодингу и промтостроению
        </p>
        <p className="text-xs text-muted-foreground/70">
          Сделано как пример вайбкодинга: React 19 + Tailwind + Vite
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div id="top" className="relative min-h-dvh">
      <Header />
      <main>
        <Hero />
        <Tutorial />
        <Glossary />
        <Patterns />
        <PromptAnatomy />
        <Pitfalls />
      </main>
      <Footer />
    </div>
  )
}
