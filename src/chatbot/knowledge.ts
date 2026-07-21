import { certifications, education, experience, profile, projects, skills } from '../data'

export type KnowledgeEntry = {
  keywords: string[]
  answer: string
}

const projectByKeywords = (matchWords: string[], title: string) => {
  const p = projects.find((x) => x.title === title)!
  return {
    keywords: matchWords,
    answer: `**${p.title}** (${p.dates})\n\n${p.description}\n\nStack: ${p.stack.join(', ')}${p.github ? `\n\nGitHub: ${p.github}` : ''}`,
  }
}

export const knowledge: KnowledgeEntry[] = [
  // Specific projects first (most specific keyword sets win ties)
  projectByKeywords(['audit', 'compliance', 'iso'], 'AI Audit & Compliance System'),
  projectByKeywords(['resume', 'screening', 'parser', 'recruiter'], 'AI Resume Screening Parser'),
  projectByKeywords(['literature', 'crewai', 'research survey', 'agentic', 'semantic scholar'], 'Agentic AI System for Automated Literature Review'),
  projectByKeywords(['eeg', 'schizophrenia', 'signal', 'gnn', 'cnn', 'vgg'], 'Deep Learning based EEG Signal Analysis for Schizophrenia Detection'),

  {
    keywords: ['project', 'projects', 'built', 'build', 'portfolio', 'work on', 'made'],
    answer:
      `Rahul has built ${projects.length} main projects:\n\n` +
      projects.map((p) => `• **${p.title}** (${p.dates}) — ${p.description}`).join('\n\n') +
      `\n\nAsk me about any one of them by name for more detail!`,
  },
  {
    keywords: ['education', 'study', 'studying', 'university', 'college', 'degree', 'cgpa', 'gpa', 'woxsen', 'school'],
    answer: `Rahul is pursuing a **${education.degree}** at **${education.school}** (${education.dates}), with a CGPA of **${education.cgpa}**.`,
  },
  {
    keywords: ['experience', 'work', 'job', 'intern', 'internship', 'worked', 'company', 'brazeforce', 'unical', 'employer'],
    answer:
      `Rahul's work experience:\n\n` +
      experience
        .map((e) => `• **${e.role}** at ${e.org} (${e.dates})\n  ${e.bullets.join(' ')}`)
        .join('\n\n'),
  },
  {
    keywords: ['skill', 'skills', 'tech stack', 'technologies', 'languages', 'frameworks', 'tools', 'know', 'proficient', 'stack'],
    answer:
      `Rahul's technical skills:\n\n` +
      skills.map((g) => `• **${g.name}**: ${g.items.join(', ')}`).join('\n'),
  },
  {
    keywords: ['certification', 'certificate', 'certified', 'courses', 'coursera', 'deeplearning'],
    answer: `Rahul's certifications:\n\n` + certifications.map((c) => `• ${c}`).join('\n'),
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'phone', 'number', 'linkedin', 'github', 'connect', 'get in touch'],
    answer: `You can reach Rahul at:\n\n• Email: ${profile.email}\n• Phone: ${profile.phone}\n• LinkedIn: ${profile.linkedin}\n• GitHub: ${profile.github}\n\nHe usually replies within a day!`,
  },
  {
    keywords: ['available', 'hiring', 'open to work', 'freelance', 'opportunity', 'looking for'],
    answer: `Yes — Rahul is currently open to internships, research collaborations, and AI/ML engineering roles. Feel free to reach out at ${profile.email}.`,
  },
  {
    keywords: ['who are you', 'about you', 'introduce', 'tell me about rahul', 'who is rahul'],
    answer: profile.bio,
  },
  {
    keywords: ['hi', 'hello', 'hey', 'yo', 'sup'],
    answer: `Hey! 👋 I'm Rahul's portfolio assistant. Ask me about his experience, projects, skills, education, or how to get in touch.`,
  },
]

export const suggestedQuestions = [
  'What projects has Rahul built?',
  'What are his technical skills?',
  'What is his experience?',
  'How can I contact him?',
]

export const fallbackAnswer = `I don't have a specific answer for that, but you can reach Rahul directly at ${profile.email} — he usually replies within a day! Try asking about his projects, skills, experience, or education.`
