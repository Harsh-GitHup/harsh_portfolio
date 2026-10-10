export type Project = {
  id: number;
  title: string;
  description: string;
  year: string;
  image: string;
  techStack: string[];
  category: string;
  types: string;
  liveDemoUrl: string | null;
  githubRepoUrl: string | null;
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce API",
    description:
      "A scalable e-commerce backend API built with FastAPI and PostgreSQL. Features include user authentication, product management, order processing, and payment integration.",
    category: "E-commerce Platform",
    image:
      "https://images.unsplash.com/photo-1758404196311-70c62a445e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY3liZXJwdW5rJTIwY2l0eSUyMG5lb258ZW58MXx8fHwxNzcwMjkxODM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2025",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "JWT"],
    liveDemoUrl: null,
    githubRepoUrl: "https://github.com/Harsh-GitHup/ecommerce-api",
    highlights: [
      "RESTful API with 50+ endpoints",
      "JWT-based authentication",
      "Real-time inventory management",
      "Stripe payment integration",
    ],
  },
  {
    id: 2,
    title: "DataVision",
    description:
      "Interactive dashboard for data visualization and analytics with Python backend processing and React frontend for dynamic charts and reports.",
    category: "Analytics Dashboard",
    image:
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjB1aSUyMGRhcmslMjBtb2RlfGVufDF8fHx8MTc3MDQwNDAyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2023",
    techStack: ["Python", "Django", "Pandas", "React", "D3.js", "PostgreSQL"],
    liveDemoUrl: null,
    githubRepoUrl: "https://github.com/Harsh-GitHup/data-visualization-tool",
    highlights: [
      "Interactive data visualization",
      "Real-time data processing",
      "Custom report generation",
      "Multi-tenant architecture",
    ],
  },
  {
    id: 3,
    title: "AI Voice Assistant",
    description:
      "Intelligent chatbot service using natural language processing, built with Python, integrated with multiple messaging platforms and custom training capabilities.",
    category: "AI Desktop/Terminal App",
    image:
      "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2025/03/marquee-agentforce-ai-chatbot.png?resize=1024,576",
    year: "2026",
    techStack: ["Python", "NLP", "TensorFlow", "Flask", "MongoDB", "WebSocket"],
    liveDemoUrl: null,
    githubRepoUrl: "https://github.com/Harsh-GitHup/voice-assistant",
    highlights: [
      "Natural language processing",
      "Multi-platform integration",
      "Custom model training",
      "Analytics dashboard",
    ],
  },
  {
    id: 4,
    title: "Weather Forecast",
    description:
      "Weather Forecasting website to check weather of any city in the world.",
    category: "Weather Website",
    image:
      "https://sundayguardianlive.com/wp-content/uploads/2026/03/weather-today-10-march-2026_4.png",
    year: "2024",
    techStack: ["TypeScript", "Angular", "Bootstrap", "OpenWeatherMap"],
    liveDemoUrl: "https://weather-app-18.vercel.app/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/weather-app",
    highlights: [
      "Fetching weather data from OpenWeatherMap API",
      "Displaying current weather conditions",
      "Predicting future weather conditions",
      "Clean and modern user interface",
    ],
  },
];
