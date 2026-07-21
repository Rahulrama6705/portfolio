import { fallbackAnswer, knowledge } from './knowledge'

function tokenize(text: string): string[] {
  return text.toLowerCase().match(/[a-z0-9']+/g) ?? []
}

function keywordMatches(keyword: string, tokens: string[], rawText: string): boolean {
  const k = keyword.toLowerCase()
  if (k.includes(' ')) {
    return rawText.includes(k)
  }
  return tokens.some((t) => {
    if (t === k) return true
    // Simple plural handling — only for words long enough that an "s" suffix is unambiguous.
    if (k.length >= 4 && t === `${k}s`) return true
    if (k.length >= 4 && `${t}s` === k) return true
    return false
  })
}

export function getAnswer(question: string): string {
  const q = question.toLowerCase()
  const tokens = tokenize(q)

  let bestCount = 0
  let bestRatio = 0
  let bestAnswer: string | null = null

  for (const entry of knowledge) {
    const matched = entry.keywords.filter((k) => keywordMatches(k, tokens, q)).length
    if (matched === 0) continue
    const ratio = matched / entry.keywords.length
    if (matched > bestCount || (matched === bestCount && ratio > bestRatio)) {
      bestCount = matched
      bestRatio = ratio
      bestAnswer = entry.answer
    }
  }

  return bestAnswer ?? fallbackAnswer
}
