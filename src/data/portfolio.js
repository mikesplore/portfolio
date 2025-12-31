export const projects = [
  {
    title: "Timetabling System",
    category: "Flagship Project",
    tier: "flagship",
    type: "fullstack",
    problem: "University scheduling requires manual coordination across dozens of constraints.",
    description:
      "Intelligent university course scheduling platform enforcing lecturer availability, room capacity, time slots, and curriculum requirements with real-time constraint validation.",
    system:
      "Ktor-powered REST API with PostgreSQL junction tables for many-to-many lecturer/room/time relationships. WebSocket subscriptions for live updates when constraints change. Transactional consistency for concurrent schedule modifications.",
    tech: ["Ktor", "PostgreSQL", "React", "WebSockets"],
    impact: "70% reduction in schedule creation time",
    highlights: [
      "Transaction-safe constraint updates across many-to-many relationships",
      "Real-time WebSocket synchronization for live schedule changes",
      "Deterministic constraint solver handling 100+ simultaneous constraints"
    ],
    link: "https://github.com/mikesplore",
    demoLink: "#",
    repoLink: "https://github.com/mikesplore",
    docsLink: "#"
  },
  {
    title: "Scheduling & Constraints Engine",
    category: "Flagship Project",
    tier: "flagship",
    type: "backend",
    problem: "Course scheduling is an NP-hard problem; standard databases don't enforce complex business rules.",
    description:
      "Rule-based backend engine enforcing hard constraints (lecturer hours, room capacity) and soft constraints (preferences, gaps) with guaranteed consistency.",
    system:
      "PostgreSQL with careful junction table design for many-to-many modeling. Ktor endpoints that validate all constraint changes before committing. Transactional blocks ensure no partial updates. Custom validation layer prevents invalid states.",
    tech: ["Ktor", "PostgreSQL", "Constraint Logic", "Transactions"],
    impact: "Handled 100+ simultaneous constraints with zero consistency violations",
    highlights: [
      "Many-to-many modeling via properly indexed junction tables",
      "Transactional consistency for complex multi-entity updates",
      "Hard + soft constraint separation for flexible scheduling"
    ],
    link: "https://github.com/mikesplore",
    demoLink: "#",
    repoLink: "https://github.com/mikesplore",
    docsLink: "#"
  },
  {
    title: "QuizBaze",
    category: "Flagship Project",
    tier: "flagship",
    type: "backend",
    problem: "Flashcard AI assistants hallucinate answers; users can't trust them for studying.",
    description:
      "Quizlet assistant using retrieval-augmented generation that locks answers to indexed flashcards, eliminating hallucinations entirely.",
    system:
      "Vector embeddings stored in PostgreSQL. Retrieval pipeline searches only within user's deck. LLM receives only retrieved cards as context. No open-ended generation—only exact card answers.",
    tech: ["Vector Search", "Controlled Retrieval", "RAG", "Backend APIs"],
    impact: "Zero hallucinations; 100% of answers verified against source flashcards",
    highlights: [
      "Retrieval-locked AI pipeline: no hallucinations possible",
      "Vector search over user flashcards for precision results",
      "Deterministic Q&A grounded in indexed content"
    ],
    link: "https://github.com/mikesplore",
    demoLink: "#",
    repoLink: "https://github.com/mikesplore",
    docsLink: "#"
  },
  {
    title: "Style AI Studio",
    category: "Secondary Project",
    tier: "secondary",
    type: "web",
    problem: "Fashion designers waste hours organizing mood boards and design iterations manually.",
    description:
      "Generative AI platform for visualizing, organizing, and managing fashion concepts and collections.",
    system:
      "AI-powered interface with generative capabilities for concept visualization and iteration management.",
    tech: ["Generative AI", "Web Application", "Design Systems"],
    impact: "Transformed fashion ideation into an interactive, AI-driven workflow",
    link: "https://github.com/mikesplore",
    demoLink: "#",
    repoLink: "https://github.com/mikesplore",
    docsLink: "#"
  },
  {
    title: "StoryLoom",
    category: "Secondary Project",
    tier: "secondary",
    type: "fullstack",
    problem: "Multilingual learners lack tools that combine story reading with comprehension verification.",
    description:
      "AI-powered story generator, translator, reader, and quiz engine with multilingual support.",
    system:
      "Fullstack application supporting story generation, real-time translation, and AI-driven comprehension quizzes across 10+ languages.",
    tech: ["Generative AI", "NLP", "Multilingual Processing"],
    impact: "Enabled interactive storytelling and comprehension through AI-driven quizzes",
    link: "https://github.com/mikesplore",
    demoLink: "#",
    repoLink: "https://github.com/mikesplore",
    docsLink: "#"
  },
  {
    title: "Tuya Billing System",
    category: "Secondary Project",
    tier: "secondary",
    type: "fullstack",
    problem: "Manual payment processing creates bottlenecks and fraud risks.",
    description:
      "End-to-end billing platform with secure M-Pesa STK Push integration and transaction tracking.",
    system:
      "Node.js backend with MongoDB transaction logs. React frontend with STK push orchestration. M-Pesa API integration with retry logic and reconciliation.",
    tech: ["React", "Node.js", "MongoDB", "M-Pesa API"],
    impact: "90% faster payment processing",
    link: "https://github.com/mikesplore",
    demoLink: "#",
    repoLink: "https://github.com/mikesplore",
    docsLink: "#"
  },
  {
    title: "StudVerify",
    category: "Secondary Project",
    tier: "secondary",
    type: "mobile",
    problem: "Exam verification is slow and prone to fraud; manual checking doesn't scale.",
    description:
      "QR-based exam verification system designed to reduce fraud and speed up verification processes.",
    system:
      "Jetpack Compose Android app with Firebase backend. QR scanning for instant verification. Real-time admin dashboards for oversight.",
    tech: ["Jetpack Compose", "Firebase", "QR Scanning"],
    impact: "85% reduction in verification time",
    link: "https://github.com/mikesplore",
    demoLink: "#",
    repoLink: "https://github.com/mikesplore",
    docsLink: "#"
  },
  {
    title: "GitHub Wrapped",
    category: "Creative / Experimental",
    tier: "creative",
    type: "ai",
    problem: "Developers want shareable year-in-review analytics mixed with personality.",
    description:
      "AI-powered roast and recap of a developer's GitHub year, blending analytics with humor.",
    system:
      "GitHub API scraping, data aggregation, and LLM-powered witty narrative generation for personalized, shareable recaps.",
    tech: ["AI Analysis", "Data Visualization", "LLMs"],
    impact: "Increased engagement through personalized, shareable developer insights",
    link: "https://github.com/mikesplore",
    demoLink: "#",
    repoLink: "https://github.com/mikesplore",
    docsLink: "#"
  },
  {
    title: "Eeh Sawa",
    category: "Creative / Experimental",
    tier: "creative",
    type: "ai",
    problem: "Most AI assistants are helpful but boring; personality attracts users.",
    description:
      "Sarcastic multilingual AI assistant built to generate witty, context-aware responses.",
    system:
      "LLM-powered conversational interface with custom personality fine-tuning. Multilingual NLP processing with tone consistency across languages.",
    tech: ["LLMs", "Multilingual NLP", "Web Interfaces"],
    impact: "Delivered personality-driven interactions across multiple languages",
    link: "https://github.com/mikesplore",
    demoLink: "#",
    repoLink: "https://github.com/mikesplore",
    docsLink: "#"
  }
];

export const skillsGrouped = [
  {
    system: "Backend & APIs",
    skills: [
      { name: "Ktor", level: 85 },
      { name: "Kotlin", level: 80 },
      { name: "Django", level: 40 },
      { name: "RESTful APIs", level: 80 }
    ]
  },
  {
    system: "Databases & Constraints",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "Constraint Logic", level: 75 },
      { name: "Transaction Management", level: 80 },
      { name: "MongoDB", level: 65 }
    ]
  },
  {
    system: "AI Systems",
    skills: [
      { name: "Vector Search & RAG", level: 70 },
      { name: "LLM Integration", level: 75 },
      { name: "Retrieval Pipelines", level: 75 }
    ]
  },
  {
    system: "Mobile & UI",
    skills: [
      { name: "Jetpack Compose", level: 80 },
      { name: "React", level: 70 },
      { name: "Kotlin Multiplatform", level: 75 }
    ]
  }
];

// Legacy skills array for backward compatibility
export const skills = [
  { name: "Ktor", level: 85 },
  { name: "Kotlin", level: 80 },
  { name: "Jetpack Compose", level: 75 },
  { name: "PostgreSQL", level: 65 },
  { name: "Firebase", level: 60 },
  { name: "React", level: 55 },
  { name: "Django", level: 40 }
];

export const interests = {
  title: "Currently exploring",
  items: [
    "Retrieval-augmented generation systems",
    "Kotlin Multiplatform Mobile",
    "Constraint-aware AI systems",
    "Production-grade real-time backends"
  ]
};

export const achievements = [
  {
    value: "85%",
    description: "Reduction in verification time with StudVerify"
  },
  {
    value: "70%",
    description: "Faster timetable creation in scheduling system"
  },
  {
    value: "90%",
    description: "Reduction in payment processing time"
  },
  {
    value: "3+",
    description: "Production-grade systems built using Kotlin & Ktor"
  },
  {
    value: "1",
    description: "M-Pesa STK Push integration implemented end-to-end"
  }
];

export const recognition = [
  {
    title: "🏆 Ubunifu Hackathon Winner",
    organization: "WesterWelle Startup Haus",
    description: "QuickScore – ML-powered loan credibility scoring system",
    year: "2025"
  },
  {
    title: "Community Engagement",
    organization: "Google Developers",
    description: "DevFest participant & ecosystem contributor",
    year: "2024–2025"
  }
];

export const techStack = [
  "Android Development",
  "Kotlin Backend (Ktor)",
  "Constraint-based Systems",
  "PostgreSQL & Data Modeling",
  "Payment Systems (M-Pesa)",
  "Real-time Systems",
  "RESTful APIs",
  "Kotlin Multiplatform (KMP)"
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/mikesplore", label: "GitHub" },
  { name: "Google Dev", url: "https://g.dev/mikesplore", label: "Google Developers" },
  { name: "X", url: "https://x.com/pandeylore", label: "X" },
  { name: "Email", url: "mailto:mikepremium8@gmail.com", label: "Email" }
];

export const galleryTimeline = [
  {
    image: "photo1.jpg",
    title: "Ubunifu Hackathon",
    description: "Team Blue Finance presenting QuickScore",
    date: "2025"
  },
  {
    image: "photo2.jpg",
    title: "Google DevFest 2024",
    description: "Attending tech talks and networking",
    date: "2024"
  },
  {
    image: "photo3.jpg",
    title: "Swahilipot Hub",
    description: "Internship experience",
    date: "2025"
  },
  {
    image: "photo4.jpg",
    title: "Google DevFest 2025",
    description: "Second year attending DevFest",
    date: "2025"
  },
  {
    image: "photo5.jpg",
    title: "Tech Community",
    description: "Engaging with fellow developers",
    date: "2024"
  },
  {
    image: "photo6.jpg",
    title: "Hackathon Win",
    description: "Award ceremony at WesterWelle",
    date: "2025"
  }
];
