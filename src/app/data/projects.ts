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
  githubBackendUrl?: string | null;
  highlights: string[];
};

export const projects: Project[] = [
  // ==========================================
  // 1. BACKEND API
  // ==========================================
  {
    id: 1,
    title: "E-Commerce API",
    description:
      "A scalable e-commerce backend API built with FastAPI and PostgreSQL. Features include user authentication, product management, order processing, and payment integration.",
    category: "E-commerce Platform",
    types: "Backend API",
    image: "/projects/E-CommerceAPI.jpg",
    year: "2025",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "JWT"],
    liveDemoUrl: null,
    githubRepoUrl: null,
    highlights: [
      "RESTful API with 50+ endpoints",
      "JWT-based authentication",
      "Real-time inventory management",
      "Stripe payment integration",
    ],
  },

  // ==========================================
  // 2. FULL STACK WEB APP
  // ==========================================
  {
    id: 2,
    title: "Blog Platform",
    description:
      "A modern, full-stack blogging and publishing platform featuring rich markdown editing, user authentication, categorized content streams, interactive comments, and SEO optimization.",
    category: "Content Management & Publishing",
    types: "Full Stack Web App",
    image: "/projects/BlogPlatform.png",
    year: "2026",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
    ],
    liveDemoUrl: "https://blog-platform-roan-three.vercel.app/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/blog-platform",
    highlights: [
      "Rich Markdown & WYSIWYG article editor",
      "Secure JWT-based user authentication & author profiles",
      "Interactive commenting, likes, and reading time estimation",
      "SEO-friendly server-side rendering and dynamic open-graph metadata",
    ],
  },
  {
    id: 3,
    title: "AI Career Portal",
    description:
      "An intelligent career acceleration platform featuring automated resume analysis, readiness scoring, interview preparation with speech recognition, and opportunity discovery powered by Gemini AI and Django REST Framework.",
    category: "AI Career & Recruitment Platform",
    types: "Full Stack Web App",
    image: "/projects/AICareerPortal.png",
    year: "2026",
    techStack: [
      "Python",
      "Django",
      "Django REST Framework",
      "Gemini API",
      "Celery",
      "Redis",
      "JavaScript",
      "Tailwind CSS",
    ],
    liveDemoUrl: null,
    githubRepoUrl: "https://github.com/Harsh-GitHup/AI-Career_Portal",
    highlights: [
      "AI resume intelligence with skill gap analysis & scoring",
      "Interactive voice mock interviews with real-time feedback",
      "Automated job and internship opportunity matching engine",
      "Asynchronous scraping and LLM pipelines via Celery & Redis",
    ],
  },
  {
    id: 4,
    title: "DataVision",
    description:
      "Interactive dashboard for data visualization and analytics with Python backend processing and dynamic frontend charts, offering customizable analytics similar to Tableau for exploring datasets.",
    category: "Analytics Dashboard",
    types: "Full Stack Web App",
    image: "/projects/DataVisualizationTool.png",
    year: "2023",
    techStack: [
      "Python",
      "Flask",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "JavaScript",
      "Bootstrap",
    ],
    liveDemoUrl: null,
    githubRepoUrl: "https://github.com/Harsh-GitHup/data-visualization-tool",
    highlights: [
      "Interactive data visualization charts",
      "CSV & dataset upload and transformation",
      "Real-time data processing",
      "Custom analytics report generation",
      "Statistical metrics and correlation matrices",
    ],
  },
  {
    id: 5,
    title: "Team Task Manager",
    description:
      "A modern task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
    category: "Team Task Management Dashboard",
    types: "Full Stack Web App",
    image: "/projects/TeamTaskManager.png",
    year: "2025",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WebSocket"],
    liveDemoUrl: "https://team-task-manager-frontend-pi.vercel.app/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/team-task-manager-frontend",
    githubBackendUrl: "https://github.com/Harsh-GitHup/team-task-manager-backend",
    highlights: [
      "Real-time collaboration",
      "Drag & drop interface",
      "Advanced filtering & search",
      "Mobile responsive design",
    ],
  },
  {
    id: 6,
    title: "Flask Portfolio Web App",
    description:
      "A full-stack personal portfolio web application built with Python Flask, SQLAlchemy, and Jinja2 templates, featuring dynamic project showcasing, SQLite database storage, and automated contact form processing.",
    category: "Full-Stack Portfolio Web App",
    types: "Full Stack Web App",
    image: "/projects/FlaskPortfolio.png",
    year: "2024",
    techStack: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "SQLite",
      "Bootstrap 5",
      "Flask-WTF",
      "Flask-Mail",
      "Docker",
      "Gunicorn",
    ],
    liveDemoUrl: null,
    githubRepoUrl: "https://github.com/Harsh-GitHup/flask-portfolio",
    highlights: [
      "Dynamic project catalog powered by SQLite database and SQLAlchemy ORM models",
      "Secure contact form with Flask-WTF validation and automated email delivery via Flask-Mail",
      "Modular Flask application factory pattern with blueprint architecture and database migrations",
      "Dockerized container setup with Gunicorn WSGI server ready for production deployment",
    ],
  },
  {
    id: 7,
    title: "DevOps Monitoring Tool",
    description:
      "Comprehensive monitoring and alerting system for DevOps teams with custom dashboards, automated deployments, and performance tracking.",
    category: "DevOps Tool",
    types: "Full Stack Web App",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    year: "In Progress",
    techStack: [
      "Python",
      "Django",
      "Docker",
      "Kubernetes",
      "Grafana",
      "Prometheus",
    ],
    liveDemoUrl: null,
    githubRepoUrl: null,
    highlights: [
      "Real-time system monitoring",
      "Automated alerting",
      "Custom dashboards",
      "CI/CD integration",
    ],
  },
  {
    id: 8,
    title: "Social Media Frontend",
    description:
      "Modern social media application frontend with infinite scroll, real-time messaging, and responsive design built with React and TypeScript.",
    category: "Social Media Website",
    types: "Full Stack Web App",
    image:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    year: "In Progress",
    techStack: ["React", "TypeScript", "Redux", "Socket.io", "Tailwind CSS"],
    liveDemoUrl: null,
    githubRepoUrl: null,
    highlights: [
      "Infinite scroll feed",
      "Real-time messaging",
      "Image/video upload",
      "Progressive Web App",
    ],
  },
  {
    id: 9,
    title: "AI Chatbot Service",
    description:
      "Intelligent chatbot service using natural language processing, built with Python, integrated with multiple messaging platforms and custom training capabilities.",
    category: "AI Service",
    types: "Full Stack Web App",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    year: "2025",
    techStack: ["Python", "NLP", "TensorFlow", "Flask", "MongoDB", "WebSocket"],
    liveDemoUrl: null,
    githubRepoUrl: null,
    highlights: [
      "Natural language processing",
      "Multi-platform integration",
      "Custom model training",
      "Analytics dashboard",
    ],
  },
  {
    id: 10,
    title: "Flask Weather Forecast App",
    description:
      "Advanced weather forecasting web application with a Python Flask backend serving live weather API data to a dynamic frontend interface.",
    category: "Full-Stack Weather App",
    types: "Full Stack Web App",
    image: "/projects/FlaskWeatherApp.png",
    year: "2024",
    techStack: ["Python", "Flask", "Angular.js", "OpenWeather API"],
    liveDemoUrl: "https://harsh7987.pythonanywhere.com/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/flask-weather-app",
    highlights: [
      "Flask REST API backend weather service",
      "Multi-day temperature and condition forecast",
      "City search with auto-completion",
      "Graceful error handling for missing cities",
    ],
  },

  // ==========================================
  // 3. PYTHON SCRIPTS
  // ==========================================
  {
    id: 11,
    title: "AI Voice Assistant",
    description:
      "Custom Python voice assistant that processes voice commands for web search, reminders, system automation, and task execution using popular speech processing libraries.",
    category: "AI Desktop/Terminal App",
    types: "Python Script",
    image: "/projects/VoiceAssistant.png",
    year: "2023",
    techStack: [
      "Python",
      "SpeechRecognition",
      "PyAudio",
      "pyttsx3",
      "Wikipedia API",
    ],
    liveDemoUrl: null,
    githubRepoUrl: "https://github.com/Harsh-GitHup/voice-assistant",
    highlights: [
      "Natural language speech command recognition",
      "Automated web search and Wikipedia summaries",
      "System audio volume and launch controls",
      "Hands-free voice interaction loop",
    ],
  },
  {
    id: 12,
    title: "ATM Simulation System",
    description:
      "A comprehensive Python program simulating a real ATM system with secure user login, account creation, balance inquiry, deposit, withdrawal, and fund transfers via CLI.",
    category: "Python Terminal App",
    types: "Python Script",
    image: "/projects/ATMProject.png",
    year: "2023",
    techStack: ["Python", "OOP", "File Handling"],
    liveDemoUrl: null,
    githubRepoUrl: "https://github.com/Harsh-GitHup/ATM-Management-System",
    highlights: [
      "PIN authentication and account creation",
      "Cash deposit, withdrawal, and balance check",
      "Inter-account funds transfer simulation",
      "Transaction history logging with timestamps",
    ],
  },
  {
    id: 13,
    title: "Library Management System",
    description:
      "A desktop and CLI library management application for cataloging books, managing member borrowings, tracking return deadlines, and automating overdue fee calculations.",
    category: "Database & Python Utility",
    types: "Python Script",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    year: "2023",
    techStack: ["Python", "SQLite", "Tkinter", "OOP"],
    liveDemoUrl: null,
    githubRepoUrl: "https://github.com/Harsh-GitHup/Library-Management-System",
    highlights: [
      "Automated book issue and return processing",
      "Member registration and search indexing",
      "Overdue fee and return penalty calculation",
      "Persistent relational SQLite database storage",
    ],
  },
  {
    id: 14,
    title: "File Organizer",
    description:
      "Python automation utility that automatically organizes clutter in directories by sorting files into categorized folders based on file extensions.",
    category: "System Automation Tool",
    types: "Python Script",
    image: "/projects/FileOrganizer.png",
    year: "2024",
    techStack: ["Python", "OS Module", "Shutil"],
    liveDemoUrl: null,
    githubRepoUrl: "https://github.com/Harsh-GitHup/file-organizer",
    highlights: [
      "Automatic categorization for documents, images, video, and audio",
      "Name collision avoidance and duplicate resolution",
      "Fast batch file sorting across directories",
      "Customizable file category extension rules",
    ],
  },
  {
    id: 15,
    title: "YouTube Video Downloader",
    description:
      "A user-friendly Python application built with Streamlit that allows users to download YouTube videos in multiple resolutions and audio formats by simply pasting the video URL.",
    category: "Python Streamlit Utility",
    types: "Python Script",
    image: "/projects/YouTubeVideoDownloader.png",
    year: "2024",
    techStack: ["Python", "Streamlit", "pytube"],
    liveDemoUrl: null,
    githubRepoUrl: null,
    highlights: [
      "Direct video and audio stream extraction",
      "Resolution selector (1080p, 720p, 480p, MP3)",
      "Interactive Streamlit web GUI",
      "Download progress indication",
    ],
  },
  {
    id: 16,
    title: "Random Password Generator",
    description:
      "Python security script that generates cryptographically strong random passwords, featuring custom length options, character sets, and clipboard copy capability.",
    category: "Security & Python Utility",
    types: "Python Script",
    image: "/projects/RandomPasswordGenrator.png",
    year: "2023",
    techStack: ["Python", "Secrets", "Tkinter"],
    liveDemoUrl: null,
    githubRepoUrl: null,
    highlights: [
      "Cryptographically secure character generation",
      "Configurable uppercase, lowercase, numbers, and symbols",
      "Instant copy to clipboard functionality",
      "Password entropy and strength validation",
    ],
  },
  {
    id: 17,
    title: "Python BMI Calculator",
    description:
      "A lightweight Python terminal application that calculates Body Mass Index (BMI) and provides instant health categorization according to WHO standards.",
    category: "Health & Fitness CLI",
    types: "Python Script",
    image: "/projects/PythonBMICalc.png",
    year: "2023",
    techStack: ["Python"],
    liveDemoUrl: null,
    githubRepoUrl: null,
    highlights: [
      "Accurate BMI computation from height & weight",
      "WHO health classification feedback",
      "Input validation and unit handling",
      "Lightweight command-line interface",
    ],
  },

  // ==========================================
  // 4. MACHINE LEARNING & DATA ANALYSIS
  // ==========================================
  {
    id: 18,
    title: "Campus Placement Prediction using Machine Learning",
    description:
      "A predictive machine learning system utilizing Scikit-learn to analyze historical student performance and campus placement datasets, achieving a 70% accuracy rate in forecasting placement outcomes.",
    category: "Machine Learning & Predictive Modeling",
    types: "IBM Hack Challange 2023",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1080&q=80",
    year: "2023",
    techStack: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Seaborn"],
    liveDemoUrl:
      "https://drive.google.com/file/d/1Z9OWd9YMUzs53Qd30eq3RlkDbjOQ3Je4/view?usp=share_link",
    githubRepoUrl:
      "https://github.com/Harsh-GitHup/Engineering_placement_prediction",
    highlights: [
      "Engineered a predictive Machine Learning model utilizing Scikit-learn to analyze historical campus placement data, achieving 70% accuracy rate in forecasting outcomes",
      "Deciphered complex datasets to isolate the top 5 key placement factors, providing actionable correlations for stakeholders",
      "Presented a scalable ML model & real-world application to IBM mentors during the 2023 Hack Challenge",
    ],
  },
  {
    id: 19,
    title: "Employee Salary Analysis",
    description:
      "Comprehensive exploratory data analysis and compensation analytics project examining pay disparities, departmental budget allocations, and salary distributions across 1,000+ employee records.",
    category: "HR Analytics & Data Visualization",
    types: "Data Analysis",
    image: "/projects/EmployeeSalaryAnalysis.jpg",
    year: "2024",
    techStack: ["Python", "Pandas", "Matplotlib", "Excel"],
    liveDemoUrl: null,
    githubRepoUrl: null,
    highlights: [
      "Identified compensation trends and pay disparities across departments by analyzing datasets of 1000 entries",
      "Designed interactive dashboards (box plots, histograms) to visualize salary distributions and outliers",
      "Authored HR report with 10+ actionable recommendations for budget allocation and pay equity",
    ],
  },
  {
    id: 20,
    title: "EDA on Google Play Store Data",
    description:
      "In-depth Exploratory Data Analysis (EDA) on thousands of Google Play Store mobile applications to uncover high-growth app category trends, user engagement, and rating factors.",
    category: "Exploratory Data Analysis",
    types: "Data Analysis",
    image: "/projects/GooglePlayStoreAnalysis.jpg",
    year: "2024",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Excel"],
    liveDemoUrl: null,
    githubRepoUrl: null,
    highlights: [
      "Cleaned and preprocessed a large-scale dataset of 1000's mobile applications ensuring data integrity",
      "Uncovered high-growth app category trends, revealing 60% correlation b/w specific features & user ratings",
      "Delivered a data-driven report that translated complex statistical findings into clear business insights",
    ],
  },

  // ==========================================
  // 5. ANGULAR STATIC WEBSITE
  // ==========================================
  {
    id: 21,
    title: "Weather Forecast",
    description:
      "Real-time weather dashboard fetching live atmospheric data from OpenWeatherMap API and dynamically updating the UI based on any global city location.",
    category: "Weather Website",
    types: "Angular Static Website",
    image: "/projects/AngularWeatherApp.png",
    year: "2024",
    techStack: ["TypeScript", "Angular", "Bootstrap", "OpenWeatherMap API"],
    liveDemoUrl: "https://weather-app-18.vercel.app/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/WeatherApp",
    highlights: [
      "Live data fetching from OpenWeatherMap API",
      "Current conditions: temperature, humidity, wind",
      "5-day predictive weather forecasts",
      "Clean, modern responsive interface",
    ],
  },
  {
    id: 22,
    title: "Zerodha Clone",
    description:
      "Trading platform clone inspired by Zerodha, featuring stock market data visualization, portfolio tracking, and a streamlined trading user interface.",
    category: "FinTech Trading Interface",
    types: "Angular Static Website",
    image: "/projects/ZerodhaClone.png",
    year: "2024",
    techStack: ["Angular", "TypeScript", "CSS3", "Chart.js"],
    liveDemoUrl: "https://zerodha-clone-lake.vercel.app/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/ang-zerodha-clone",
    highlights: [
      "Stock market visual candlestick & area charts",
      "Holdings, positions, and watchlist management",
      "Modern dark/light financial UI theme",
      "Responsive trading dashboard design",
    ],
  },
  {
    id: 23,
    title: "Tourism Landing Page",
    description:
      "A visually engaging landing page for a tourism website, highlighting travel destinations, attractions, and tour itineraries with modern responsive layouts.",
    category: "Travel & Hospitality UI",
    types: "Angular Static Website",
    image: "/projects/TourismLandingPage.png",
    year: "2024",
    techStack: ["Angular", "TypeScript", "CSS3"],
    liveDemoUrl: "https://hyderabad-turism.vercel.app/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/ang-hyderabad-truism",
    highlights: [
      "Destination highlight carousel and cards",
      "Interactive booking and tour inquiry form",
      "Vibrant high-resolution travel aesthetics",
      "Mobile-optimized performance",
    ],
  },
  {
    id: 24,
    title: "Mind Reader",
    description:
      "Interactive mind reading game that uses mathematical patterns and algorithmic deduction to predict user choices with captivating animations.",
    category: "Interactive Math Game",
    types: "Angular Static Website",
    image: "/projects/MindReader.png",
    year: "2024",
    techStack: ["Angular", "TypeScript", "CSS3"],
    liveDemoUrl: "https://ang-mind-reader.vercel.app/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/Mind-Reader",
    highlights: [
      "Mathematical deduction algorithm",
      "Interactive symbol matrix generation",
      "Smooth animation reveals and transitions",
      "Modular Angular component design",
    ],
  },
  {
    id: 25,
    title: "Angular Todo List",
    description:
      "Task management application built with the Angular framework, utilizing reactive forms, two-way data binding, and component modularity.",
    category: "Productivity Application",
    types: "Angular Static Website",
    image: "/projects/AngularTodoList.png",
    year: "2024",
    techStack: ["Angular", "TypeScript", "CSS3"],
    liveDemoUrl: "https://ang-todo-list-one.vercel.app/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/angular-todo-list",
    highlights: [
      "Reactive forms for task addition",
      "Task completion toggle and item deletion",
      "Filter tasks by active or finished status",
      "Component architecture with strict typing",
    ],
  },
  {
    id: 26,
    title: "Rock Paper Scissors (Angular)",
    description:
      "Interactive Rock Paper Scissors game developed in Angular featuring animated UI cards, score tracking, and automated computer opponent logic.",
    category: "Interactive Angular Game",
    types: "Angular Static Website",
    image: "/projects/StonePaperScissor.png",
    year: "2024",
    techStack: ["Angular", "TypeScript", "CSS3"],
    liveDemoUrl: "https://ang-rock-paper-scissor.vercel.app/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/rock-paper-scissor",
    highlights: [
      "Randomized computer choice engine",
      "Round score tracking and win streaks",
      "Animated victory / loss dialog cards",
      "Angular component-based state management",
    ],
  },

  // ==========================================
  // 6. REACT STATIC WEBSITE
  // ==========================================
  {
    id: 27,
    title: "React Todo List",
    description:
      "Responsive task organizer application built with React.js featuring state-driven updates, inline status toggle, and clean task grouping.",
    category: "Productivity Web App",
    types: "React Static Website",
    image: "/projects/ReactTodoList.png",
    year: "2023",
    techStack: ["React.js", "JavaScript", "Bootstrap"],
    liveDemoUrl: "https://todo-list-53.vercel.app/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/Todo-List",
    highlights: [
      "React state hooks for real-time task updates",
      "Add, complete, and delete task items",
      "Task count and progress summary",
      "Mobile-friendly Bootstrap styling",
    ],
  },
  {
    id: 28,
    title: "Vite Todo List",
    description:
      "Ultra-fast and lightweight todo application built using Vite for optimized bundle size, rapid HMR development, and instant task manipulation.",
    category: "Productivity Web App",
    types: "React Static Website",
    image: "/projects/ViteTodoList.png",
    year: "2024",
    techStack: ["Vite", "JavaScript", "Bootstrap"],
    liveDemoUrl: "https://todo-list-app-five-eta.vercel.app/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/vite-todo-list",
    highlights: [
      "Instant page load with Vite build tooling",
      "Quick task entry and completion checklist",
      "Minimalist, zero-lag user experience",
      "Responsive mobile and desktop UI",
    ],
  },
  {
    id: 29,
    title: "Developer Portfolio",
    description:
      "A modern, responsive personal portfolio web application built with React, Vite, TypeScript, and Tailwind CSS, featuring interactive project showcases, real-time search filtering, full-image lightboxes, keyboard arrow navigation, and fluid Framer Motion animations.",
    category: "Developer Portfolio Website",
    types: "React Static Website",
    image: "/projects/HarshPortfolio.png",
    year: "2026",
    techStack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveDemoUrl: "https://harshkesharwani.vercel.app/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/harsh_portfolio",
    highlights: [
      "Interactive project modal with keyboard arrow navigation (← / →)",
      "Instant real-time search across categories, technologies, and titles",
      "Expandable full-image view with smooth Framer Motion transitions",
      "Responsive UI design with custom theme accents and skill brand icons",
    ],
  },

  // ==========================================
  // 7. HTML/CSS STATIC WEBSITE
  // ==========================================
  {
    id: 30,
    title: "Recipe Finder",
    description:
      "A responsive recipe discovery platform allowing users to explore culinary dishes, filter by dietary requirements, and access detailed step-by-step cooking guides.",
    category: "Recipe Finder Website",
    types: "HTML/CSS Static Website",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    year: "2024",
    techStack: ["JavaScript", "HTML5", "CSS3", "Edamam API", "Responsive UI"],
    highlights: [
      "Keyword & ingredient-based dish search",
      "Step-by-step cooking instructions",
      "Dietary tags and calorie calculation",
      "Clean mobile-first design layout",
    ],
    liveDemoUrl: "https://harsh-githup.github.io/recipe-finder/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/recipe-finder",
  },
  {
    id: 31,
    title: "Todo List",
    description:
      "A lightweight and intuitive task manager with instant status tracking, local data persistence, and category-based productivity filtering.",
    category: "Todo List Application",
    types: "HTML/CSS Static Website",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    year: "2024",
    techStack: ["JavaScript", "HTML5", "CSS3", "LocalStorage", "DOM APIs"],
    liveDemoUrl: null,
    githubRepoUrl: null,
    highlights: [
      "Fast task creation and completion",
      "Persistent state via browser LocalStorage",
      "Quick filters: All, Pending, Completed",
      "Smooth animations and keyboard shortcuts",
    ],
  },
  {
    id: 32,
    title: "Currency Converter",
    description:
      "Interactive web converter for global currencies using live exchange rate APIs, featuring instant calculations and currency pair swapping.",
    category: "Financial API Application",
    types: "HTML/CSS Static Website",
    image: "/projects/CurrencyConverter.png",
    year: "2023",
    techStack: ["HTML5", "CSS3", "JavaScript", "ExchangeRate API"],
    liveDemoUrl: "https://harsh-githup.github.io/currency-converter/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/currency-converter",
    highlights: [
      "Live exchange rates from international APIs",
      "Instant calculations with currency swap button",
      "Support for 150+ fiat currencies",
      "Mobile-friendly clean input controls",
    ],
  },
  {
    id: 33,
    title: "Music Player",
    description:
      "Web-based audio player with playlist management, audio scrubbing, track duration counters, and responsive UI built using HTML5 Audio APIs.",
    category: "Multimedia Audio App",
    types: "HTML/CSS Static Website",
    image: "/projects/MusicPlayer.png",
    year: "2023",
    techStack: ["JavaScript", "HTML5 Audio API", "Bootstrap", "CSS3"],
    liveDemoUrl: "https://harsh-githup.github.io/music-player/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/music-player",
    highlights: [
      "Interactive audio playback controls",
      "Dynamic playlist track queue management",
      "Real-time seek bar and volume adjustments",
      "Album artwork and song metadata display",
    ],
  },
  {
    id: 34,
    title: "Digital Bubble Wrap",
    description:
      "A fun sensory web app recreating bubble wrap popping, featuring responsive interactive bubbles, realistic audio sound effects, and satisfying visual haptics.",
    category: "Interactive Sensory Web App",
    types: "HTML/CSS Static Website",
    image: "/projects/DigitalBubbleWrap.png",
    year: "2023",
    techStack: ["JavaScript", "HTML5", "CSS3", "Web Audio API"],
    liveDemoUrl: "https://harsh-githup.github.io/digital-bubble-wrap/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/digital-bubble-wrap",
    highlights: [
      "Interactive grid of poppable bubbles",
      "Authentic popping audio effects",
      "Live counter tracking total bubbles popped",
      "One-click refresh to unroll fresh sheet",
    ],
  },
  {
    id: 35,
    title: "Web BMI Calculator",
    description:
      "User-friendly web BMI calculator with an intuitive responsive interface, supporting metric and imperial units with instant graphical health zone feedback.",
    category: "Health & Fitness Web App",
    types: "HTML/CSS Static Website",
    image: "/projects/BMICalculator.png",
    year: "2023",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveDemoUrl: "https://harsh-githup.github.io/BMICalculator/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/BMICalculator",
    highlights: [
      "Metric (kg/cm) and imperial (lbs/in) modes",
      "Interactive visual health gauge indicator",
      "Instant calculation without page refresh",
      "Mobile-friendly touch interface",
    ],
  },
  {
    id: 36,
    title: "Stone Paper Scissors (JS)",
    description:
      "A feature-rich browser version of the classic game with score tracking, sound feedback, visual hand gesture indicators, and responsive controls.",
    category: "Classic Browser Game",
    types: "HTML/CSS Static Website",
    image: "/projects/RockPaperScissor.png",
    year: "2023",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveDemoUrl: "https://harsh-githup.github.io/Stone-Paper-Scissors/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/Stone-Paper-Scissors",
    highlights: [
      "Player vs Computer game engine",
      "Persistent session score tracker",
      "Visual hand icon animations",
      "Touch-optimized button controls",
    ],
  },
  {
    id: 37,
    title: "Tic Tac Toe",
    description:
      "Classic Tic Tac Toe web game featuring interactive 3x3 grid, turn-based player switching, winning pattern detection, and match resets.",
    category: "Classic Browser Game",
    types: "HTML/CSS Static Website",
    image: "/projects/TicTacToe.png",
    year: "2023",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveDemoUrl: "https://harsh-githup.github.io/Tic-Tac-Toe/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/Tic-Tac-Toe",
    highlights: [
      "Two-player turn-based gameplay (X & O)",
      "Instant win line animation & draw check",
      "Match statistics and win counter",
      "Responsive neon-accented board design",
    ],
  },
  {
    id: 38,
    title: "Simple Calculator",
    description:
      "A clean web calculator supporting arithmetic operations with smooth keyboard and mouse interaction, optimized for all screen sizes.",
    category: "Utility Web App",
    types: "HTML/CSS Static Website",
    image: "/projects/SimpleCalculator.png",
    year: "2023",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveDemoUrl: "https://harsh-githup.github.io/SimpleCalculator/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/SimpleCalculator",
    highlights: [
      "Standard arithmetic & decimal point handling",
      "Keyboard shortcut support (numbers, enter, backspace)",
      "Error handling (division by zero)",
      "Compact responsive glassmorphic design",
    ],
  },
  {
    id: 39,
    title: "WeatherApp",
    description:
      "Web-based weather application fetching live atmospheric data from OpenWeatherMap API and dynamically updating the UI based on any global city location.",
    category: "Weather Website",
    types: "HTML/CSS Static Website",
    image: "/projects/WeatherApp.png",
    year: "2023",
    techStack: ["HTML5", "CSS3", "JavaScript", "OpenWeatherMap API"],
    liveDemoUrl: "https://harsh-githup.github.io/Weather-Forecast-App/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/Weather-Forecast-App",
    highlights: [
      "Live data fetching from OpenWeatherMap API",
      "Current conditions: temperature, humidity, wind",
      "5-day predictive weather forecasts",
      "Clean, modern responsive interface",
    ],
  },
  {
    id: 40,
    title: "Portfolio Website (Classic)",
    description:
      "Clean, modern personal portfolio website showcasing early software projects, technical background, and interactive contact forms.",
    category: "Personal Portfolio",
    types: "HTML/CSS Static Website",
    image: "/projects/Portfolio.png",
    year: "2023",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveDemoUrl: "https://harsh-githup.github.io/My-Portfolio/",
    githubRepoUrl: "https://github.com/Harsh-GitHup/My-Portfolio",
    highlights: [
      "Multi-section developer profile showcase",
      "Categorized project display cards",
      "Integrated contact form layout",
      "Smooth navigation and responsive grid",
    ],
  },
  {
    id: 41,
    title: "Marketing Landing Page",
    description:
      "Professional product landing page with modern layout architecture, prominent call-to-action sections, feature highlights, and responsive layouts.",
    category: "Marketing Landing Page",
    types: "HTML/CSS Static Website",
    image: "/projects/LandingPage.png",
    year: "2023",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveDemoUrl: null,
    githubRepoUrl: null,
    highlights: [
      "Eye-catching hero section with CTAs",
      "Service and feature grid breakdown",
      "Testimonials and pricing table layout",
      "Fully responsive across all screen sizes",
    ],
  },
];
