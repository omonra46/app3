import { terms } from "./terms"
import { termsPart2 } from "./terms-part2"
import { termsPart3 } from "./terms-part3"
import { termsPart4 } from "./terms-part4"


export type { Category, Term } from "./terms"
export { categories } from "./terms"

export const allTerms = [...terms, ...termsPart2, ...termsPart3, ...termsPart4]

export const promptAnatomy = [
  {
    id: "role",
    label: "Роль",
    hint: "Кем модель себя считает",
    example: "Ты — senior React-разработчик.",
    color: "text-violet-300",
    border: "border-violet-400/40",
  },
  {
    id: "context",
    label: "Контекст",
    hint: "Что уже известно",
    example: "Проект: Vite + React 19 + Tailwind, тёмная тема, аудитория — новички.",
    color: "text-cyan-300",
    border: "border-cyan-400/40",
  },
  {
    id: "task",
    label: "Задача",
    hint: "Что конкретно сделать",
    example: "Добавь поиск по списку терминов с подсветкой совпадений.",
    color: "text-fuchsia-300",
    border: "border-fuchsia-400/40",
  },
  {
    id: "format",
    label: "Формат",
    hint: "Как должен выглядеть ответ",
    example: "Один компонент TSX, без пояснений, только код.",
    color: "text-emerald-300",
    border: "border-emerald-400/40",
  },
  {
    id: "constraints",
    label: "Ограничения",
    hint: "Чего делать нельзя",
    example: "Без новых зависимостей, не трогай App.tsx.",
    color: "text-amber-300",
    border: "border-amber-400/40",
  },
]
