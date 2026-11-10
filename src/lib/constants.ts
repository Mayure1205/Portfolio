import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiPrisma,
  SiDocker,
  SiKubernetes,
  SiSolidity,
  SiPython,
  SiJavascript,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

export const PERSONAL_INFO = {
  name: "Mayuresh Tardekar",
  title: "Software Engineer",
  subtitle: "Full-Stack Developer",
  availability: "Open to Full-Stack Internships",
  email: "mayutardekar1205@gmail.com",
  location: "Mumbai, India",
  github: "https://github.com/MayureshTardekar",
  linkedin: "https://linkedin.com/in/mayuop",
  twitter: "https://x.com/MayuuuOP",
  bio: "I'm a software engineer who loves solving problems and building useful software. As technology evolves, I learn by building with new tools and applying them where they make a difference.",
  shortBio: "Building things that live on the internet.",
  resumeUrl: "/resume.pdf",
  resumeFilename: "Mayuresh_Tardekar_Resume.pdf",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Database"
  | "DevOps"
  | "Tools";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number; style?: React.CSSProperties }>;
  category: SkillCategory;
  color: string;
  whyUsed: string;
  whereUsed: string;
  whyLearned: string;
}

export const SKILLS: Skill[] = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Languages",
    color: "#f7df1e",
    whyUsed: "JavaScript is my core language for web development. I use it to create interactive user interfaces, handle asynchronous actions, fetch data dynamically, and manage state in single-page apps. It's the language that connects the browser DOM to complex logic.",
    whereUsed: "It powers the core functionality across all my frontend applications, including EzyVote's client panel, BidArena's web sockets integration, Sahayak's interface, and the interactive widgets on this portfolio.",
    whyLearned: "Learned the fundamentals during my computer applications curriculum at SPIT Mumbai. I then transitioned into advanced JavaScript (ES6+, Event Loop, Promises) by building real-world projects."
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Languages",
    color: "#3178c6",
    whyUsed: "TypeScript is essential for keeping large codebases scalable and error-free. It adds static typing, interfaces, and generic types to JavaScript, which lets me catch potential runtime errors during development and refactor code with confidence.",
    whereUsed: "I used it in ForgeAgent to build type-safe React components and schema types, in Sahayak to ensure API requests match expectations, and throughout this entire Next.js portfolio.",
    whyLearned: "Self-taught TypeScript after my plain JavaScript codebases grew too large and complex to maintain. The benefits of autocompletion and compiler safety made it my default stack."
  },
  {
    name: "Python",
    icon: SiPython,
    category: "Languages",
    color: "#3776ab",
    whyUsed: "Python is my default choice for machine learning, data cleaning, and backend scripting. Its clean syntax and extensive ecosystem of libraries (like Pandas, NumPy, and Scikit-Learn) let me implement complex ML models and process data with very little overhead.",
    whereUsed: "Built the ML backend for Sahayak using Flask, hosting a DistilBERT text-classification model and integrating with the Gemini API to analyze user queries.",
    whyLearned: "Self-taught to explore machine learning, RAG pipelines, and automated scripting. It became an invaluable tool in my developer toolkit."
  },
  {
    name: "Java",
    icon: FaJava,
    category: "Languages",
    color: "#b07219",
    whyUsed: "Java taught me structured Object-Oriented Programming (OOP) principles. It is excellent for building robust, multi-threaded applications, understanding design patterns (like MVC, Singleton, and Factory), and managing memory and class structures cleanly.",
    whereUsed: "Used extensively in academic assignments and backend systems design at SPIT Mumbai to model complex data structures and solve object-oriented programming challenges.",
    whyLearned: "Part of the MCA curriculum at SPIT Mumbai. Mastering Java helped me build a strong foundation in system architecture, compilation, and clean OOP practices."
  },
  {
    name: "C++",
    icon: TbBrandCpp,
    category: "Languages",
    color: "#00599c",
    whyUsed: "C++ is my language of choice for solving complex Data Structures and Algorithms (DSA) problems. Because it compiles directly to machine code, it offers outstanding execution speed and complete control over memory management, pointers, and systems.",
    whereUsed: "Used to solve hundreds of algorithmic challenges on LeetCode and GeeksforGeeks during technical interview preparation, focusing on dynamic programming, trees, and graphs.",
    whyLearned: "Introduced in academics to master the fundamentals of low-level systems, pointers, and memory layout. I kept using it for competitive programming."
  },
  {
    name: "React",
    icon: SiReact,
    category: "Frontend",
    color: "#61dafb",
    whyUsed: "React is my preferred framework for building component-driven user interfaces. Its virtual DOM, declarative state management, and custom hook patterns allow me to build modular, reactive, and highly reusable frontend components.",
    whereUsed: "Built the dashboards and client dashboards for ForgeAgent, the live bidding room UI for BidArena, and the dynamic pages for Sahayak.",
    whyLearned: "Introduced at SPIT Mumbai, but mastered by building projects. Reading React docs and shipping real UIs taught me about state optimization, virtual DOM rendering, and custom hooks."
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Frontend",
    color: "#ffffff",
    whyUsed: "Next.js is my default for production-ready web apps. It enhances React with Server-Side Rendering (SSR), Static Site Generation (SSG), file-based routing, and built-in API routes, making it easy to build SEO-friendly full-stack apps.",
    whereUsed: "Powers this portfolio website using the Next.js App Router, React Server Components for fast loading, and Serverless API routes.",
    whyLearned: "Self-taught to build high-performance web applications that demand excellent SEO, routing, and fast initial page loads out-of-the-box."
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frontend",
    color: "#06b6d4",
    whyUsed: "Tailwind CSS allows me to design beautiful, modern interfaces at rapid speed. Its utility-first approach keeps my styling clean and co-located with the TSX code, eliminating the need to write and maintain massive CSS sheets.",
    whereUsed: "Applied across all my modern projects, including the dashboards of ForgeAgent, the theme options in Sahayak, and the glassmorphic dark mode layout of this portfolio.",
    whyLearned: "Self-taught to speed up my design prototyping. It transformed styling from a tedious layout process into a fast, fluid experience."
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    category: "Backend",
    color: "#339933",
    whyUsed: "Node.js allows me to write high-performance backend systems in JavaScript. Its event-driven, non-blocking I/O model makes it highly efficient and lightweight, perfect for running data-intensive real-time applications.",
    whereUsed: "Built the real-time server for BidArena to handle concurrent live bidding events, WebSockets connectivity, and background timer events.",
    whyLearned: "Self-taught Node.js to bridge the gap between frontend development and full-stack engineering, enabling me to build complete apps end-to-end."
  },
  {
    name: "Express",
    icon: SiExpress,
    category: "Backend",
    color: "#a0a0b0",
    whyUsed: "Express is a fast, unopinionated, minimalist web framework for Node.js. It simplifies route management, middleware creation, and HTTP request handling, providing a structured foundation for designing RESTful APIs.",
    whereUsed: "Implemented the modular API routing, authentication middlewares, and session endpoints for the BidArena backend.",
    whyLearned: "Learned the basics at SPIT Mumbai as the standard Node web framework, then mastered it by designing robust, production-style REST APIs."
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "Database",
    color: "#47a248",
    whyUsed: "MongoDB is my default NoSQL database. Its document-oriented structure stores data in flexible, JSON-like formats, which makes schema migrations unnecessary and speeds up iteration when requirements are changing.",
    whereUsed: "Stored the product details, user bidding history, and dynamic live auction configurations for the BidArena project.",
    whyLearned: "Learned in the DBMS class at SPIT Mumbai, then used it practically in full-stack projects to handle semi-structured data."
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: "Database",
    color: "#00758f",
    whyUsed: "MySQL is my go-to relational database when data integrity, structured tables, and relationships are paramount. It guarantees ACID transactions, handles complex SQL joins efficiently, and enforces strict foreign key rules.",
    whereUsed: "Designed and query-optimized relational schemas for multiple academic projects and inventory systems built during my coursework.",
    whyLearned: "Mastered relational database design, normalization, indexing, and advanced SQL querying in the database management curriculum at SPIT Mumbai."
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    category: "Database",
    color: "#3ecf8e",
    whyUsed: "Supabase is an incredible open-source Firebase alternative. It provides a managed PostgreSQL database with auto-generated REST APIs, secure user authentication, row-level security (RLS), and real-time database subscription features out of the box.",
    whereUsed: "Acts as the entire backend and database for ForgeAgent, handling user login, PostgreSQL data queries, and file storage for chatbot documents.",
    whyLearned: "Self-taught to bypass building boilerplate backends, allowing me to focus on product features, security, and vector databases."
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    category: "Database",
    color: "#5a67d8",
    whyUsed: "Prisma is a modern TypeScript ORM. It provides an intuitive schema definition language and generates fully type-safe database clients, preventing runtime SQL errors and making query auto-completion seamless.",
    whereUsed: "Used in serverless Next.js API routes to handle migrations, relation queries, and database updates cleanly without hand-writing SQL queries.",
    whyLearned: "Self-taught to improve backend developer experience and ensure the database layer is perfectly typed and synced with TypeScript types."
  },
  {
    name: "AWS",
    icon: FaAws,
    category: "DevOps",
    color: "#ff9900",
    whyUsed: "AWS is the industry-standard cloud platform. I use it to host servers, manage storage buckets, and configure secure networks. It provides essential services like EC2 instances, S3 storage, and VPC setup.",
    whereUsed: "Deployed static frontend builds on AWS S3, set up virtual servers with EC2, and configured VPC subnets for cloud networking experiments.",
    whyLearned: "Self-taught the fundamentals of cloud infrastructure to understand how web applications scale and run in production environments."
  },
  {
    name: "Docker",
    icon: SiDocker,
    category: "DevOps",
    color: "#2496ed",
    whyUsed: "Docker simplifies deployment by packaging apps and their dependencies into lightweight, portable containers. It guarantees that the code runs exactly the same way in local dev, staging, and production environments.",
    whereUsed: "Containerized the Flask ML service and Node.js backend to prevent dependency mismatches during deployment on server environments.",
    whyLearned: "Learned in DevOps coursework at SPIT Mumbai to understand containerization, image building, and multi-stage container orchestration."
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    category: "DevOps",
    color: "#326ce5",
    whyUsed: "Kubernetes is the industry standard for container orchestration. It automates container deployment, scaling, load balancing, and self-healing, making microservice architectures highly resilient and reliable.",
    whereUsed: "Set up local minikube clusters to deploy distributed application containers, test automated scaling, and simulate node failures.",
    whyLearned: "Studied in DevOps and systems configuration modules to understand how large production container clusters are managed."
  },
  {
    name: "Linux",
    icon: SiLinux,
    category: "DevOps",
    color: "#fcc624",
    whyUsed: "Linux is the operating system that powers modern cloud hosting and databases. Mastering the command line, shell scripts, and system config files is crucial for maintaining server environments and deploying apps.",
    whereUsed: "Use Linux terminal and Bash scripting daily to automate folder structures, manage remote servers, and run deployment commands.",
    whyLearned: "Learned through MCA academics and personal use to master terminal commands, permission structures, and automated shell scripting."
  },
  {
    name: "Solidity",
    icon: SiSolidity,
    category: "Languages",
    color: "#9c9c9c",
    whyUsed: "Solidity is a language for writing smart contracts on Ethereum and other EVM-compatible networks. It requires precision because deployed code is difficult to change and can handle financial transactions.",
    whereUsed: "Designed the core transparent election and voter verification contract for EzyVote, ensuring tamper-proof, secure on-chain elections.",
    whyLearned: "Self-taught out of pure curiosity for decentralized apps (dApps) and Web3, leading to building secure smart contracts."
  },
  {
    name: "Git",
    icon: SiGit,
    category: "Tools",
    color: "#f05032",
    whyUsed: "Git is my repository version control tool. It allows me to branch code, experiment with features, collaborate without conflicts, and maintain a complete historical record of code modifications.",
    whereUsed: "Used daily to track all changes, branch out features, merge pull requests, and maintain clean commits across every single project I build.",
    whyLearned: "Taught as a foundational development tool at SPIT Mumbai. It quickly became second nature for all code modifications."
  },
  {
    name: "GitHub",
    icon: SiGithub,
    category: "Tools",
    color: "#ffffff",
    whyUsed: "GitHub is the hub for collaboration, repository hosting, and CI/CD pipelines. It provides excellent pull request reviews, issue management, and GitHub Actions to deploy code automatically to host services.",
    whereUsed: "Hosts all my open-source project codebases, integrates with Vercel webhooks for automatic deployments, and tracks task issues.",
    whyLearned: "Self-taught to build a public presence, contribute to repositories, review code changes, and manage deployment workflows."
  },
  {
    name: "Postman",
    icon: SiPostman,
    category: "Tools",
    color: "#ff6c37",
    whyUsed: "Postman is an indispensable tool for testing and debugging APIs. It lets me craft requests, test headers and payloads, chain request variables, and document endpoints before writing frontend integration code.",
    whereUsed: "Tested all the backend endpoints of BidArena and Sahayak, validating response payloads and status codes during API construction.",
    whyLearned: "Learned in computer networks and systems courses at SPIT Mumbai to verify server responses and document REST endpoints."
  }
];

export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  techStack: string[];
  github?: string;
  githubLabel?: string;
  live?: string;
  image?: string;
  imageFit?: "contain";
  featured: boolean;
  year: string;
  problemStatement?: string;
  solutionApproach?: string;
  keyFeatures?: string[];
  challenges?: string[];
  architecture?: string;
  teamSize?: string;
  duration?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "ForgeAgent",
    slug: "agentforge",
    description:
      "AI No-Code Chatbot Builder — A multi-tenant SaaS platform for creating and deploying AI-powered chatbots using RAG.",
    longDescription:
      "Designed and built a multi-tenant SaaS platform that allows users to create and deploy AI-powered chatbots using Retrieval-Augmented Generation (RAG) without writing code. Implemented a document ingestion pipeline with chunking, embedding generation, and pgvector-based semantic search. Built an embeddable real-time chat widget with theme customization, analytics dashboard, and automated fallback to human agents.",
    techStack: ["React", "TypeScript", "Supabase", "pgvector"],
    live: "https://forgeagent.in/",
    image: "/images/agentforge.png",
    featured: true,
    year: "2025",
    problemStatement:
      "Businesses need custom AI chatbots trained on their own data, but building RAG systems requires significant engineering expertise and infrastructure knowledge.",
    solutionApproach:
      "Created a no-code platform where users upload documents, which are automatically chunked, embedded, and stored in pgvector for semantic search. The chatbot uses RAG to provide accurate, context-aware responses from the uploaded knowledge base.",
    keyFeatures: [
      "No-code chatbot creation with document upload",
      "RAG pipeline with chunking, embeddings, and pgvector semantic search",
      "Embeddable chat widget with theme customization",
      "Analytics dashboard tracking conversations and satisfaction",
      "Automated fallback to human agents for unresolved queries",
      "Multi-tenant architecture with isolated data per user",
    ],
    challenges: [
      "Optimizing document chunking strategy for different file types to maintain context",
      "Implementing efficient pgvector similarity search at scale",
      "Building a real-time embeddable widget that works across different host websites",
    ],
    architecture:
      "React + TypeScript frontend → Supabase backend with PostgreSQL + pgvector → Document ingestion pipeline → Embedding generation → Semantic search → LLM response generation",
    teamSize: "Solo",
    duration: "3 weeks",
  },
  {
    title: "Dexter Write",
    slug: "dexter-write",
    description:
      "AI-assisted writing workspace for Markdown and LaTeX with live previews, document editing through MCP, and PDF export.",
    longDescription:
      "Built a writing workspace that pairs a Markdown and LaTeX editor with an AI assistant that can read and edit the active document. Users can bring their own AI provider key, review changes as diffs, and export their work in multiple formats.",
    techStack: ["React", "TypeScript", "Monaco Editor", "MCP"],
    github: "https://github.com/MayureshTardekar/Dexter-Writer",
    live: "https://dexter-writer.vercel.app/",
    image: "/images/dexter-write.png",
    featured: true,
    year: "2026",
    problemStatement:
      "Writing technical documents often means switching between an editor, a preview tool, and an AI chat, then manually copying edits back into the document.",
    solutionApproach:
      "Built document tools that let the assistant read and edit the active file in context. A diff review mode lets writers accept or reject changes before applying them.",
    keyFeatures: [
      "Markdown and LaTeX editor with live previews",
      "Chat and voice controls for drafting and revising documents",
      "MCP tools for reading, editing, and compiling documents",
      "Bring-your-own-key support for multiple AI providers",
      "Local MCP bridge for connecting external assistants to the active document",
      "Export to PDF, Markdown, LaTeX, HTML, or plain text",
    ],
    challenges: [
      "Give different AI providers the same editing interface by exposing the active Monaco buffer through MCP tools.",
      "Make proposed edits easy to inspect by showing a diff before the writer accepts or rejects a change.",
    ],
    architecture:
      "Chat or voice request → Selected AI provider → MCP document tools → Monaco editor and diff review → Preview and export",
  },
  {
    title: "FitGo",
    slug: "fitgo",
    description:
      "Offline-first fitness tracker for calories, fasting, workouts, hydration, sleep, and weight.",
    longDescription:
      "Built a Flutter app that stores fitness logs locally and turns them into daily targets and progress charts. It redistributes the remaining calorie allowance across the week and calculates fasting time from a saved start timestamp.",
    techStack: ["Flutter", "Dart", "Riverpod", "Hive", "Supabase"],
    github: "https://github.com/MayureshTardekar/FitGo",
    image: "/images/fitgo.jpg",
    imageFit: "contain",
    featured: true,
    year: "2026",
    problemStatement:
      "Tracking food, activity, and fasting gets harder when the tools require a connection or lose progress after a restart.",
    solutionApproach:
      "Built an offline-first dashboard that turns daily logs into weekly targets and progress charts. Hive stores activity on the device, and Supabase handles account sign-in.",
    keyFeatures: [
      "Weekly calorie budgets that adjust daily targets",
      "Fasting timer that survives app restarts",
      "Exercise, hydration, sleep, and weight logs",
      "Progress charts for cumulative calorie intake, daily trends, and goal consistency",
    ],
    challenges: [
      "Resume fasting sessions after the app restarts by calculating elapsed time from the start timestamp saved in Hive.",
      "Adjust daily calorie targets by dividing the remaining weekly allowance across the days left in the week.",
    ],
    architecture:
      "Flutter tracking screens → Riverpod state and calculations → Hive on-device storage → Analytics charts built with fl_chart",
  },
  {
    title: "EzyVote",
    slug: "ezyvote",
    description:
      "Decentralized voting app with tamper-resistant records and publicly verifiable results.",
    longDescription:
      "Developed a voting system that uses Solidity smart contracts to enforce voting rules and record results. Integrated ethers.js for frontend-contract communication, optimized gas usage, and applied OpenZeppelin security patterns.",
    techStack: ["Solidity", "Hardhat", "ethers.js", "OpenZeppelin"],
    github: "https://github.com/MayureshTardekar/EzyVote-Prototype",
    live: "https://ezyvote-git-stable-vite5-mayuresh0512s-projects.vercel.app/",
    image: "/images/ezyvote.png",
    featured: true,
    year: "2024-2025",
    problemStatement:
      "Traditional voting systems are vulnerable to tampering, lack transparency, and require trust in centralized authorities to ensure fair elections.",
    solutionApproach:
      "Recorded each vote on-chain so results can be verified. Smart contracts enforce voting rules automatically.",
    keyFeatures: [
      "Immutable on-chain vote recording",
      "Transparent election results verifiable by anyone",
      "Smart contract-enforced voting rules (one person, one vote)",
      "Wallet-based authentication (no passwords)",
      "Gas-optimized contract deployment",
      "OpenZeppelin security standards for attack prevention",
    ],
    challenges: [
      "Optimizing Solidity gas costs while maintaining security guarantees",
      "Implementing secure voter verification without compromising anonymity",
      "Synchronizing frontend state with on-chain transaction confirmations",
    ],
    architecture:
      "React frontend → ethers.js for contract calls → Solidity smart contracts on Ethereum → Hardhat for testing and deployment → OpenZeppelin for security patterns",
    teamSize: "Solo",
    duration: "1 month",
  },
  {
    title: "BidArena",
    slug: "bidarena",
    description:
      "Real-Time Auction Platform — Supporting concurrent live bidding with JWT auth and Razorpay payments.",
    longDescription:
      "Engineered a real-time auction platform supporting concurrent live bidding with JWT authentication and integrated Razorpay payment workflows. Implemented WebSocket-based event broadcasting using Socket.io for instant bid updates. Automated auction lifecycle management using background cron jobs for expiry handling and winner finalization.",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/MayureshTardekar/BidArena",
    live: "https://bidarena-six.vercel.app/",
    image: "/images/bidarena.png",
    featured: true,
    year: "2025",
    problemStatement:
      "Traditional auction platforms suffer from latency issues where users don't see bid updates in real-time, leading to poor user experience and unfair bidding outcomes.",
    solutionApproach:
      "Built a WebSocket-powered architecture using Socket.io that broadcasts bid events instantly to all connected clients. Combined with automated lifecycle management using cron jobs for auction expiry, cleanup, and winner determination.",
    keyFeatures: [
      "Real-time bid updates via WebSocket (Socket.io)",
      "JWT authentication with secure session management",
      "Razorpay payment integration for seamless transactions",
      "Automated auction lifecycle (start, expire, finalize winner)",
      "Background cron jobs for cleanup and expiry handling",
      "Concurrent bidding support with race condition handling",
    ],
    challenges: [
      "Handling race conditions when multiple users bid simultaneously",
      "Designing reliable auction expiry with background cron jobs",
      "Integrating Razorpay payment flow with auction winner determination",
    ],
    architecture:
      "React + TypeScript frontend → Node.js + Express backend → MongoDB database → Socket.io for real-time events → Razorpay payment gateway → node-cron for scheduled tasks",
    teamSize: "Solo",
    duration: "2 weeks",
  },
  {
    title: "Sahayak",
    slug: "sahayak",
    description:
      "AI-Powered Railway Complaint Intelligence System — 3-tier AI pipeline for multilingual complaint classification and prioritization.",
    longDescription:
      "Built during a 10-hour hackathon, Sahayak is a sophisticated complaint management system for Indian Railways. Citizens can submit complaints in multiple languages (Hindi, Marathi, English), which are automatically classified and prioritized using a multi-tier AI pipeline combining DistilBERT, Google Gemini, and keyword-based fallback.",
    techStack: ["React", "TypeScript", "Python", "Supabase", "Gemini API"],
    github: "https://github.com/MayureshTardekar/Sahayak-Hackathon-10hr",
    image: "/images/sahayak.png",
    featured: true,
    year: "2026",
    problemStatement:
      "Indian Railways receives thousands of complaints daily in multiple languages with no automated way to classify severity, route to the right department, or identify systemic issues across regions.",
    solutionApproach:
      "Built a 3-tier AI classification pipeline: Tier 1 uses a fine-tuned DistilBERT model for high-confidence local classification. Tier 2 falls back to Google Gemini 2.5 Flash API for complex cases. Tier 3 uses keyword-based offline classification as the final fallback, ensuring 100% uptime.",
    keyFeatures: [
      "Multilingual complaint submission (Hindi, Marathi, English)",
      "3-tier AI classification pipeline (DistilBERT → Gemini → Keywords)",
      "Real-time admin dashboard with live stats and analytics",
      "KMeans clustering analysis with SVD projections for pattern detection",
      "QR code-based mobile submission for field officers",
      "Role-based access control with Google OAuth",
    ],
    challenges: [
      "Training DistilBERT on limited multilingual railway complaint data within hackathon timeframe",
      "Designing a graceful fallback system that maintains classification quality across all 3 tiers",
      "Building responsive real-time dashboard with complex data visualizations under time pressure",
    ],
    architecture:
      "React + TypeScript frontend with Tailwind/shadcn UI → Supabase backend with PostgreSQL → Python ML pipeline (Flask + DistilBERT) → Google Gemini API fallback → Edge Functions for serverless logic",
    teamSize: "Team of 4",
    duration: "10 hours (hackathon)",
  },
  {
    title: "ProStock",
    slug: "prostock",
    description:
      "Paper trading platform for Indian markets with virtual funds, watchlists, and portfolio tracking.",
    longDescription:
      "Built a stock market simulator for practicing NSE and BSE trades with virtual funds. It uses market quotes to show portfolio value, profit and loss, and trading history.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
    github: "https://github.com/MayureshTardekar/ProStock",
    image: "/images/prostock.jpg",
    featured: true,
    year: "2025",
    problemStatement:
      "New traders need a way to practice placing orders and understand how trades affect a portfolio before risking real money.",
    solutionApproach:
      "Built an Express API with MySQL to record simulated orders and holdings. The React dashboard uses Yahoo Finance quotes to show price movements and portfolio performance.",
    keyFeatures: [
      "Simulated buy and sell orders with a virtual balance",
      "NSE and BSE stock search and watchlists",
      "Holdings, profit and loss, and order history",
      "Market dashboards for NIFTY 50, SENSEX, and BANK NIFTY",
    ],
    challenges: [
      "Keep the order record, virtual cash balance, and share holdings consistent by writing them in one MySQL transaction.",
      "Track the average purchase price across multiple buys so the analytics can calculate realized gains when shares are sold.",
    ],
    architecture:
      "React and TypeScript trading dashboard → Express API with JWT authentication → MySQL for trades and holdings → Portfolio analytics using trade history and Yahoo Finance quotes",
  },
  {
    title: "LetShop",
    slug: "letshop",
    description:
      "Responsive e-commerce storefront with product discovery, a persistent cart, and simulated checkout.",
    longDescription:
      "Built a React storefront that takes users from product discovery through checkout and order confirmation. Product search, filtering, and sorting run in the browser, and the cart persists between visits.",
    techStack: ["React", "JavaScript", "Vite", "React Router", "CSS"],
    github: "https://github.com/MayureshTardekar/letshop-e-com",
    githubLabel: "Prototype code",
    image: "/images/letshop.jpg",
    featured: true,
    year: "2025",
    problemStatement:
      "A storefront needs to make it easy to find products, review a cart, and complete checkout on both desktop and mobile.",
    solutionApproach:
      "Used React Router for the shopping flow, React Context for shared cart state, and localStorage to keep cart items across reloads.",
    keyFeatures: [
      "Search by product name or description, filter by category, and sort by price or rating",
      "Product detail pages with quantity selection",
      "Persistent cart with editable quantities and order totals",
      "Validated checkout form and simulated order confirmation",
    ],
    challenges: [
      "Keep cart quantities and totals consistent across the product, cart, and checkout pages with one shared cart state.",
      "Pass a snapshot of the items and total to the confirmation page so it can show the order after the cart clears.",
    ],
    architecture:
      "Local product catalog → React Router storefront → React Context cart persisted in localStorage → Simulated checkout and order confirmation",
  },
];

export interface TimelineItem {
  title: string;
  subtitle: string;
  logo?: string;
  location: string;
  period: string;
  description: string;
  type: "education" | "work" | "achievement";
}

export const TIMELINE: TimelineItem[] = [
  {
    title: "Master of Computer Applications (MCA)",
    subtitle: "Sardar Patel Institute of Technology (Autonomous)",
    logo: "/images/spit-logo.png",
    location: "Mumbai, India",
    period: "2025 — 2027",
    description:
      "Pursuing MCA with focus on advanced software engineering, distributed systems, and AI/ML.",
    type: "education",
  },
  {
    title: "Bachelor of Science in Information Technology",
    subtitle: "Thakur Ramnarayan College of Arts & Commerce",
    logo: "/images/trcac-logo.png",
    location: "Mumbai, India",
    period: "2022 — 2025",
    description:
      "Completed BSc IT with strong foundation in Data Structures, Algorithms, DBMS, Computer Networks, and Cloud Computing.",
    type: "education",
  },
  {
    title: "Alkimi Move FWD Hackathon",
    subtitle: "Hackathon Participant",
    logo: "/images/alkimi-logo.jpg",
    location: "",
    period: "2025",
    description: "Participated and competed in the Alkimi Move FWD Hackathon.",
    type: "achievement",
  },
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available commands:
  about       - Know more about me
  skills      - View my technical skills
  projects    - Browse my projects
  experience  - View my education & achievements
  contact     - Get my contact info
  github      - Visit my GitHub
  resume      - Download my resume
  clear       - Clear terminal
  sudo hire-me - 😏`,
  about: `
> Mayuresh Tardekar
> Software Engineer | Full-Stack Developer
> Mumbai, India
>
> MCA student at SPIT Mumbai.
> ${PERSONAL_INFO.bio}`,
  skills: `
> Languages:  JavaScript, TypeScript, Python, Java, C++, Solidity
> Frontend:   React, Next.js, Tailwind CSS
> Backend:    Node.js, Express
> Databases:  MongoDB, MySQL, Supabase, Prisma
> DevOps:     AWS, Docker, Kubernetes, Linux
> Tools:      Git, GitHub, Postman`,
  projects: PROJECTS.map(
    (project, index) =>
      `> ${index + 1}. ${project.title}\n>    ${project.techStack.join(", ")}`
  ).join("\n>\n"),
  experience: `
> Education:
>   MCA @ SPIT Mumbai (2025-2027)
>   BSc IT @ Thakur Ramnarayan College (2022-2025)
>
> Achievements:
>   Alkimi Move FWD Hackathon (2025)`,
  contact: `
> Email:    mayutardekar1205@gmail.com
> LinkedIn: linkedin.com/in/mayuop
> GitHub:   github.com/MayureshTardekar
> Location: Mumbai, India`,
  github: `> Opening GitHub... 🚀
> github.com/MayureshTardekar`,
  resume: `> Downloading resume... 📄`,
  "sudo hire-me": `
>  _    _                 _   _
> | |  | |               | | | |
> | |__| |___ _ __ ___  _| |_| |
> |  __  / _ \\ '__/ _ \\/ _  |_|
> | |  | |  __/ | |  __/ (_| |_
> |_|  |_|\\___|_|  \\___|\\__,_(_)
>
> 🎉 You found the secret! Let's talk!
> Email: mayutardekar1205@gmail.com`,
};
