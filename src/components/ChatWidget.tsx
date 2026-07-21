import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, Send, X } from 'lucide-react'
import { getAnswer } from '../chatbot/match'
import { suggestedQuestions } from '../chatbot/knowledge'
import { profile } from '../data'

type Message = { role: 'bot' | 'user'; text: string }

function renderFormatted(text: string): ReactNode {
  return text.split('\n').map((line, i) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g)
    return (
      <p key={i} className={line.trim() === '' ? 'h-2' : 'mb-1.5 last:mb-0'}>
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**') ? (
            <strong key={j} className="font-bold text-ink">
              {part.slice(2, -2)}
            </strong>
          ) : (
            <span key={j}>{part}</span>
          ),
        )}
      </p>
    )
  })
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: `Hey! 👋 I'm ${profile.name}'s portfolio assistant. Ask me anything about his experience, projects, skills, or how to get in touch.`,
    },
  ])
  const [input, setInput] = useState('')
  const [thinking, setThinking] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, thinking])

  const ask = (question: string) => {
    const q = question.trim()
    if (!q) return
    setMessages((m) => [...m, { role: 'user', text: q }])
    setInput('')
    setThinking(true)
    window.setTimeout(() => {
      const answer = getAnswer(q)
      setMessages((m) => [...m, { role: 'bot', text: answer }])
      setThinking(false)
    }, 350)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    ask(input)
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_10px_30px_rgba(28,74,70,0.35)]"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? 'close' : 'open'}
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.15 }}
          >
            {open ? <X size={24} /> : <MessageCircle size={24} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-[60] flex h-[min(560px,70vh)] w-[min(380px,90vw)] flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-[0_20px_60px_rgba(28,74,70,0.25)]"
          >
            <div className="flex items-center justify-between border-b border-ink/10 bg-paperDeep px-5 py-4">
              <div>
                <p className="font-serif text-lg font-bold text-ink">Ask about Rahul</p>
                <p className="text-xs text-ink/50">Instant answers, no waiting</p>
              </div>
              <span
                className="h-2 w-2 rounded-full bg-accent-light"
                style={{ animation: 'dotPulse 2.4s ease-in-out infinite' }}
              />
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'rounded-br-sm bg-accent text-white'
                        : 'rounded-bl-sm border border-ink/10 bg-white text-ink/90'
                    }`}
                  >
                    {renderFormatted(m.text)}
                  </div>
                </div>
              ))}
              {thinking && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-bl-sm border border-ink/10 bg-white px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-ink/30"
                        style={{ animation: `dotPulse 1s ease-in-out ${i * 0.15}s infinite` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {messages.length === 1 && !thinking && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => ask(q)}
                      className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent/20"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-ink/10 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink/40 focus:border-accent-light"
              />
              <button
                type="submit"
                aria-label="Send"
                disabled={!input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-opacity disabled:opacity-40"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
