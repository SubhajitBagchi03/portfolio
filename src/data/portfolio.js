export const personalInfo = {
  name: "Subhajit Bagchi",
  firstName: "Subhajit",
  lastName: "Bagchi",
  title: "Full-Stack Developer & Founder",
  bio: "final-year B.Tech Computer Science student with strong analytical skills and hands-on experience in AI-driven applications and end-to-end project development. seeking an entry-level role where I can apply problem-solving ability, logical thinking, and technical skills to contribute to data-driven and client-focused solutions.",
  linkedin: "https://www.linkedin.com/in/subhajit-bagchi-94323b276/",
  github: "https://github.com/SubhajitBagchi03",
};

export const skills = {
  "Languages": ["C++", "Python", "JavaScript", "SQL"],
  "Frameworks": ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI"],
  "Databases": ["MongoDB", "ChromaDB", "Prisma"],
  "AI / ML": ["RAG", "LangChain", "Gemini API", "Ollama", "Vector Search"],
  "Tools": ["Git", "Docker", "Vite", "Socket.io", "WebContainers"],
  "Concepts": ["OOP", "REST APIs", "JWT Auth", "End-to-End Pipelines"],
};

export const launchNest = {
  name: "LaunchNest",
  tagline: "Get Your First 100 Users Before Launch.",
  status: "Active Development",
  description:
    "A pre-launch marketplace platform that connects indie SaaS founders with early adopters before their products go live. Founders submit their products to gather a critical mass of early testers and structured feedback.",
  problem:
    'The "Cold Start Problem" — the near-universal struggle founders face when trying to secure their first 100 users from zero.',
  stack: [
    "React 18", "Vite", "Tailwind CSS", "Framer Motion",
    "Node.js", "Express", "MongoDB", "Socket.io", "JWT",
  ],
  features: [
    { title: "Two-Sided Marketplace", desc: "Browse, discover, and join pre-launch products as a tester." },
    { title: "Structured Feedback System", desc: "Multi-type feedback with star ratings, threaded replies, and helpful voting." },
    { title: "Real-Time Chat", desc: "Socket.io powered floating chat widget with persistent message history." },
    { title: "Gamification Engine", desc: "Points, badges, and leaderboard to incentivize quality feedback." },
    { title: "Auto-Moderation", desc: "5-report threshold auto-redaction and content flagging system." },
    { title: "Security-First Architecture", desc: "Helmet.js, rate limiting, bcrypt hashing, env-based CORS." },
  ],
  metrics: {
    "Target Users": "100+",
    "Products": "20+",
    "Feedback": "50+",
  },
};

export const projects = [
  {
    id: 1,
    name: "Supply Chain AI Control Tower",
    tech: ["Python", "FastAPI", "RAG", "LangChain", "ChromaDB", "Gemini API"],
    description:
      "An agent-based supply chain decision system combining document intelligence and structured inventory data. Features end-to-end RAG pipeline, rule-driven Inventory Agent, and agent visualization.",
    github: "https://github.com/SubhajitBagchi03/agentic-ai-supply-chain",
    liveUrl: "https://agentic-ai-supply-chain-control-tower.onrender.com/",
    number: "01",
  },
  {
    id: 2,
    name: "Vibecode Editor",
    tech: ["Next.js 15", "Monaco Editor", "Ollama", "Prisma", "MongoDB", "WebContainers"],
    description:
      "A full-stack browser-based IDE with real-time Node.js execution, AI-powered autocomplete via locally hosted LLMs, interactive terminal, and AI Chat Assistant.",
    github: "https://github.com/SubhajitBagchi03/vibe-code-editor",
    number: "02",
  },
  {
    id: 3,
    name: "Star Champions Auction",
    tech: ["React", "JavaScript", "CSS"],
    description:
      "A cricket auction platform for the Star Champions League. Full auction flow with team management, player bidding, and dynamic UI for live events.",
    github: "https://github.com/SubhajitBagchi03/auction-site",
    liveUrl: "https://star-champions-league.onrender.com/",
    number: "03",
  },
  {
    id: 4,
    name: "Hiringo Job Portal",
    tech: ["React", "Supabase", "Clerk", "Shadcn UI"],
    description:
      "A responsive job portal with seamless booking integration, authentication, and a modern UI built during the Innobyte Services internship.",
    github: "https://github.com/SubhajitBagchi03/job-portal",
    number: "04",
  },
];

export const experience = [
  {
    role: "Web Development Intern",
    company: "Innobyte Services",
    period: "Aug 2025 — Sept 2025",
    description:
      "Contributed to the development of the frontend of a responsive guest house website with seamless booking integration.",
  },
  {
    role: "Salesforce Intern",
    company: "Indian Institute of Internship",
    period: "7 Aug — 25 Oct 2025",
    description:
      "Applied Salesforce CRM principles to deliver industry-aligned project solutions during the internship tenure.",
    certificate: true,
  },
];

export const education = {
  college: "Meghnad Saha Institute of Technology",
  degree: "Bachelor of Technology",
  department: "Computer Science and Engineering",
  period: "Oct 2022 — Jul 2026",
  cgpa: "7.87",
};

export const navSections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "launchnest", label: "LaunchNest" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
