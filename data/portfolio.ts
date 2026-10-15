export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  description?: string;
  current?: boolean;
  logo?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: "AI & ML" | "Award" | "Programming" | "Management" | "Workshop";
  date?: string;
  credentialUrl?: string;
  image: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    icon: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Akmal Ahamath",
    shortName: "Akmal",
    titles: [
      "AI Engineer",
      "Full-Stack Developer",
    ],
    heroTagline: "Building intelligent solutions for real-world problems.",
    heroBio:
      "Computer Science undergraduate with a strong interest in AI Engineering and intelligent systems. Skilled in Programming, Data Structures, Algorithms, Databases, and Software Development, with a growing focus on Artificial Intelligence and Machine Learning.",
    aboutBio: [
      "Computer Science undergraduate with a strong interest in AI Engineering and intelligent systems. Skilled in Programming, Data Structures, Algorithms, Databases, and Software Development, with a growing focus on Artificial Intelligence and Machine Learning.",
      "Passionate about building smart, real-world solutions and continuously improving my technical skills. Seeking internship and learning opportunities to gain hands-on experience and grow as a future AI Engineer.",
    ],
    aboutPillars: [
      {
        title: "AI Engineering & ML",
        description: "Exploring neural architectures, LLM orchestration, and intelligent algorithmic solutions.",
      },
      {
        title: "Full-Stack Architecture",
        description: "Crafting end-to-end applications with modern frontend frameworks and scalable backend services.",
      },
      {
        title: "Algorithmic Problem Solving",
        description: "Deep foundation in data structures, computational logic, and clean software engineering practices.",
      },
    ],
    aboutTags: [
      "AI Engineering",
      "Machine Learning",
      "Full-Stack Development",
      "Problem Solving",
      "Software Development",
      "Intelligent Systems",
    ],
    location: "Dehiwala, Western Province, Sri Lanka",
    email: "akmalahamath0403@gmail.com",
    linkedin: "https://www.linkedin.com/in/akmalahamath",
    github: "https://github.com/akmalahamath",
    cvPath: "/cv/Akmal_Ahamath_CV.pdf",
  },

  skills: {
    verifiedCore: [
      {
        name: "Machine Learning",
        description: "Mathematical models, pattern recognition, and predictive intelligent algorithms.",
        badge: "Core Discipline",
      },
      {
        name: "Generative AI",
        description: "Prompt engineering, LLMs, transformer architectures, and generative agents.",
        badge: "Specialization",
      },
      {
        name: "Problem Solving",
        description: "Data structures, computational complexity, algorithms, and modular design.",
        badge: "Foundation",
      },
    ],
    categories: [
      {
        category: "Artificial Intelligence",
        description: "Intelligent systems, neural modeling, and modern AI toolkits",
        skills: [
          { name: "Machine Learning", icon: "Brain", highlight: true },
          { name: "Generative AI", icon: "Sparkles", highlight: true },
          { name: "Intelligent Systems", icon: "Cpu", highlight: true },
          { name: "Python for AI", icon: "Code", highlight: true },
          { name: "Neural Networks", icon: "Network" },
          { name: "Data Processing", icon: "Database" },
        ],
      },
      {
        category: "Frontend Development",
        description: "Modern, responsive, high-performance web interfaces",
        skills: [
          { name: "Next.js", icon: "Layers", highlight: true },
          { name: "React", icon: "Component", highlight: true },
          { name: "TypeScript", icon: "FileCode2", highlight: true },
          { name: "Tailwind CSS", icon: "Palette", highlight: true },
          { name: "HTML5 / CSS3", icon: "Layout" },
          { name: "Framer Motion", icon: "Activity" },
        ],
      },
      {
        category: "Backend & Systems",
        description: "Server architecture, APIs, and scalable services",
        skills: [
          { name: "Node.js", icon: "Server", highlight: true },
          { name: "REST APIs", icon: "ArrowLeftRight", highlight: true },
          { name: "Python Backend", icon: "Terminal" },
          { name: "System Design Basics", icon: "Cpu" },
        ],
      },
      {
        category: "Programming & Foundations",
        description: "Core computer science fundamentals and languages",
        skills: [
          { name: "Python", icon: "Code", highlight: true },
          { name: "TypeScript", icon: "FileCode2", highlight: true },
          { name: "JavaScript", icon: "Code2" },
          { name: "Data Structures", icon: "Binary", highlight: true },
          { name: "Algorithms", icon: "GitBranch", highlight: true },
          { name: "OOP", icon: "Boxes" },
        ],
      },
      {
        category: "Databases & Storage",
        description: "Relational, document, and vector data persistence",
        skills: [
          { name: "Databases (SQL)", icon: "Database", highlight: true },
          { name: "Relational Modeling", icon: "Table" },
          { name: "Query Optimization", icon: "Search" },
          { name: "NoSQL Concepts", icon: "HardDrive" },
        ],
      },
      {
        category: "Developer Tools & Workflow",
        description: "Tooling for agile versioning and engineering hygiene",
        skills: [
          { name: "Git", icon: "GitCommit", highlight: true },
          { name: "GitHub", icon: "Github", highlight: true },
          { name: "VS Code", icon: "Monitor" },
          { name: "Postman", icon: "Send" },
          { name: "Terminal / Bash", icon: "TerminalSquare" },
        ],
      },
    ] as SkillCategory[],
    marqueeTechnologies: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "Python",
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Data Structures",
      "Algorithms",
      "PostgreSQL",
      "Git & GitHub",
      "Intelligent Systems",
    ],
  },

  education: [
    {
      id: "edu-1",
      institution: "University of Plymouth",
      degree: "Bachelor of Science (BSc)",
      field: "Computer Science",
      period: "January 2026 – November 2029",
      description:
        "Rigorous computer science curriculum focusing on advanced computing theory, software engineering methodologies, artificial intelligence, and enterprise-grade systems.",
      current: true,
      logo: "/images/education/plymouth.png",
    },
    {
      id: "edu-2",
      institution: "NSBM Green University",
      degree: "Bachelor of Science (BSc)",
      field: "Computer Science",
      period: "2026 – 2027",
      description:
        "Comprehensive undergraduate program in computing and applied software engineering, nurturing strong problem-solving and software development capabilities.",
      current: true,
      logo: "/images/education/nsbm.png",
    },
    {
      id: "edu-3",
      institution: "ESOFT Metro Campus",
      degree: "Diploma of Education",
      field: "Information Technology",
      period: "April 2021 – January 2022",
      description:
        "Foundational diploma in Information Technology covering programming principles, database architecture, and computer systems.",
      current: false,
      logo: "/images/education/esoft.png",
    },
  ] as Education[],

  certifications: [
    {
      id: "cert-1",
      title: "Introduction to Generative AI",
      issuer: "Verified Credential",
      category: "AI & ML",
      date: "Recent",
      credentialUrl: "#",
      image: "/images/certifications/GenAI.jpg",
    },
    {
      id: "cert-2",
      title: "Techwave 1st Runner-up",
      issuer: "Techwave Competition",
      category: "Award",
      date: "Achievement",
      credentialUrl: "#",
      image: "/images/certifications/TechWave.jpg",
    },
    {
      id: "cert-3",
      title: "Introduction to Programming Using Python",
      issuer: "Accredited Technical Program",
      category: "Programming",
      date: "Certified",
      credentialUrl: "#",
      image: "/images/certifications/Moratuwa.jpg",
    },
    {
      id: "cert-4",
      title: "Project Management Foundations: Communication",
      issuer: "Professional Development",
      category: "Management",
      date: "Credential",
      credentialUrl: "#",
      image: "/images/certifications/ProjectManagement.jpg",
    },
    {
      id: "cert-5",
      title: "BOTLAB 2026 – AI & Machine Learning Workshop",
      issuer: "Hands-on Engineering Bootcamp",
      category: "Workshop",
      date: "2026",
      credentialUrl: "#",
      image: "/images/certifications/BOTLAB.jpg",
    },
  ] as Certification[],

  /**
   * Editable project placeholders:
   * Akmal can easily update these with his own live project titles,
   * descriptions, screenshots, and repo links as he ships new work.
   */
  projects: [
    {
      id: "project-1",
      title: "NSBM Event Hub",
      category: "Full-Stack Web Application",
      description:
        "Developed NSBM Event Hub, a comprehensive full-stack web application for university event management, student registrations, and administrative control.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Web Development"],
      githubUrl: "https://github.com/akmalahamath/NSBM_Eventhub_Web_Project.git",
      liveUrl: "https://nevnthub.com.lk",
      featured: true,
      image: "/images/projects/nsbm-eventhub.png",
    },
    {
      id: "project-2",
      title: "Student Management System",
      category: "Desktop Application / OOP",
      description:
        "Developed a Student Management System for my university OOP assessment using C#, Windows Forms, and SQL Server LocalDB. Features include student and course management, enrollment, attendance tracking, and marks management, with input validation and database CRUD operations.",
      technologies: ["C#", "Windows Forms", "SQL Server", "OOP", "UI/UX"],
      githubUrl: "https://github.com/akmalahamath/Student_Management_Akmal.git",
      featured: true,
      image: "/images/projects/student-management.png",
    },
  ] as Project[],

  currentlyExploring: [
    {
      title: "Artificial Intelligence",
      tagline: "Autonomous systems & intelligent logic",
      description: "Developing intelligent computational systems that perceive, reason, and adapt dynamically.",
      icon: "Brain",
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    },
    {
      title: "Machine Learning",
      tagline: "Statistical pattern optimization",
      description: "Harnessing supervised, unsupervised, and deep architectures for high-precision predictive modeling.",
      icon: "Cpu",
      gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    },
    {
      title: "Generative AI",
      tagline: "Large language models & multi-modal agents",
      description: "Building next-generation generative pipelines, prompt structures, and contextual reasoning workflows.",
      icon: "Sparkles",
      gradient: "from-cyan-400/20 via-purple-500/10 to-transparent",
    },
    {
      title: "Intelligent Systems",
      tagline: "Autonomous and reactive architectures",
      description: "Integrating smart reasoning capabilities into distributed, fault-tolerant software infrastructures.",
      icon: "Network",
      gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
    },
    {
      title: "Full-Stack Development",
      tagline: "Seamless user experiences & scalable APIs",
      description: "Engineering resilient, fluid user interfaces backed by robust microservices and database engines.",
      icon: "Layers",
      gradient: "from-sky-500/20 via-blue-600/10 to-transparent",
    },
  ],
};
