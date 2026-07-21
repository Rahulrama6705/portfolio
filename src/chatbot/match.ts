import { fallbackAnswer, knowledge } from './knowledge'

export function getAnswer(question: string): string {
  const q = question.toLowerCase()

  let bestScore = 0
  let bestAnswer: string | null = null

  for (const entry of knowledge) {
    const matched = entry.keywords.filter((k) => q.includes(k.toLowerCase())).length
    if (matched === 0) continue
    const score = matched / entry.keywords.length
    if (score > bestScore) {
      bestScore = score
      bestAnswer = entry.answer
    }
  }

  return bestAnswer ?? fallbackAnswer
}
