export const profile = {
  name: 'Rahul Rama',
  role: 'AI/ML Engineer & Builder',
  location: 'Hyderabad, India',
  email: 'rahulrama018@gmail.com',
  phone: '+91 7995539569',
  linkedin: 'https://www.linkedin.com/in/rahulrama/',
  github: 'https://github.com/Rahulrama6705',
  blurb:
    "CS undergrad specializing in AI & ML, building agentic LLM systems, deep learning research, and offline-first AI tools that work without the cloud.",
  bio: "I'm a Computer Science undergrad at Woxsen University specializing in Artificial Intelligence & Machine Learning. I like building everything from deep learning models on raw signal data to multi-agent LLM systems that automate real research and business workflows. Recently I've been focused on offline-first AI: running capable LLMs locally for privacy-sensitive use cases like resume screening and compliance auditing, without relying on cloud APIs.",
}

export const education = {
  school: 'Woxsen University',
  degree: 'B.Tech CS — AI & ML',
  dates: 'Aug 2023 – 2027',
  cgpa: '8.6 / 10',
}

export const certifications = [
  'AI for Everyone — DeepLearning.AI',
  'Machine Learning with Python — IBM',
  'Probability and Statistics for ML and Data Science — DeepLearning.AI',
]

export const experience = [
  {
    role: 'Web Development Intern',
    org: 'Brazeforce Pvt Ltd',
    dates: 'Jul 2026 – Present',
    bullets: [
      'Contributing to front-end feature development and UI implementation as part of the engineering team.',
    ],
  },
  {
    role: 'Artificial Intelligence Intern',
    org: 'Unical Systems',
    dates: 'Apr 2026 – May 2026',
    bullets: [
      'Built an offline AI-powered Resume Screening Assistant using Python, Streamlit, Ollama, and Phi-3 Mini.',
      'Built an offline AI-powered Audit & Compliance Assistant for ISO 27001/9001.',
      'Designed lightweight rule-based reasoning with on-device LLM inference — no cloud APIs.',
      'Shipped both projects end-to-end.',
    ],
  },
]

export const projects = [
  {
    title: 'AI Audit & Compliance System',
    dates: 'Apr–May 2026',
    stack: ['Python', 'Streamlit', 'Ollama', 'Phi-3 Mini'],
    github: 'https://github.com/Rahulrama6705/Audit-compliance-system',
    image: '/projects/audit-compliance.png',
    description:
      'Lightweight offline Audit & Compliance Assistant for ISO 27001/9001; generates severity analysis and remediation recommendations, with a modular architecture extending to Healthcare, Defence, Manufacturing, and IT.',
  },
  {
    title: 'AI Resume Screening Parser',
    dates: 'Apr–May 2026',
    stack: ['Python', 'Ollama', 'FastAPI'],
    github: 'https://github.com/Rahulrama6705/resume-screening-parser',
    image: '/projects/resume-parser.png',
    description:
      'Fully offline resume screening assistant that extracts structured candidate details, with a filterable real-time candidate management UI.',
  },
  {
    title: 'Agentic AI System for Automated Literature Review',
    dates: 'Sept 2025 – Mar 2026',
    stack: ['Python', 'CrewAI', 'LLMs'],
    description:
      'Multi-agent system automating literature review — retrieves, chunks, and summarizes 50+ papers from Semantic Scholar and generates Markdown research surveys, cutting manual review time by 60–70%.',
  },
  {
    title: 'Deep Learning based EEG Signal Analysis for Schizophrenia Detection',
    dates: 'Jun 2024 – Mar 2025',
    stack: ['Python', 'Deep Learning', 'CNN', 'VGG', 'GNN'],
    image: '/projects/eeg-schizophrenia.png',
    description:
      'Team project predicting schizophrenia from EEG signals over 10,000+ preprocessed windows; explored GNNs and contrastive learning for an 18% metric improvement, with ablation studies underway for a journal manuscript.',
  },
]

export const skills = [
  { name: 'LANGUAGES', items: ['Python', 'Java', 'SQL', 'HTML'] },
  {
    name: 'FRAMEWORKS & LIBRARIES',
    items: ['TensorFlow', 'LangChain', 'CrewAI', 'AutoGen', 'LangGraph', 'OpenAI SDK', 'Ollama', 'FastAPI', 'Pandas', 'Matplotlib', 'Scikit-learn'],
  },
  { name: 'AI/ML CONCEPTS', items: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Artificial Intelligence'] },
  { name: 'DEVELOPER TOOLS', items: ['Git', 'VS Code', 'IntelliJ IDEA', 'Streamlit'] },
]
