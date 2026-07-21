import { useEffect, useState } from 'react'

export default function TypewriterText({ words, className }: { words: string[]; className?: string }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    const typingSpeed = deleting ? 40 : 80
    const pauseAtFull = 1400
    const pauseAtEmpty = 300

    let timeout: number

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), pauseAtFull)
    } else if (deleting && text === '') {
      timeout = window.setTimeout(() => {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      }, pauseAtEmpty)
    } else {
      timeout = window.setTimeout(() => {
        setText(current.slice(0, deleting ? text.length - 1 : text.length + 1))
      }, typingSpeed)
    }

    return () => window.clearTimeout(timeout)
  }, [text, deleting, wordIndex, words])

  return (
    <span className={className}>
      {text}
      <span className="typing-cursor text-accent-light">|</span>
    </span>
  )
}
