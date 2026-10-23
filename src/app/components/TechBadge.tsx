import React from "react";
import {
  Code2,
  Database,
  Globe,
  Server,
  Terminal,
  Zap,
  Cpu,
  Sparkles,
  Lock,
  Cloud,
  FileCode,
  Layers,
  FolderTree,
  Mic,
  Video,
  BookOpen,
  AppWindow,
  Coins,
  Brain,
  BarChart3,
  LineChart,
} from "lucide-react";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({
  name,
  className = "w-3.5 h-3.5",
}) => {
  const normalized = name.toLowerCase().trim();

  // Python
  if (normalized === "python") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M11.9 2c-5.2 0-4.9 2.2-4.9 2.2l.01 2.3h5v.72H5s-3.2.36-3.2 5.1c0 5 2.8 5 2.8 5h1.6v-2.3s-.1-2.8 2.7-2.8h4.9s2.7.05 2.7-2.6V4.4s.38-2.4-4.7-2.4zm-2.7 1.5a.95.95 0 110 1.9.95.95 0 010-1.9z"
          fill="#387EB8"
        />
        <path
          d="M12.1 22c5.2 0 4.9-2.2 4.9-2.2l-.01-2.3h-5v-.72H19s3.2-.36 3.2-5.1c0-5-2.8-5-2.8-5h-1.6v2.3s.1 2.8-2.7 2.8H10s-2.7-.05-2.7 2.6v5.2s-.38 2.4 4.7 2.4zm2.7-1.5a.95.95 0 110-1.9.95.95 0 010 1.9z"
          fill="#FFE873"
        />
      </svg>
    );
  }

  // React / React.js
  if (normalized.includes("react") && !normalized.includes("native")) {
    return (
      <svg
        viewBox="-11.5 -10.2 23 20.4"
        className={className}
        fill="none"
      >
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // TypeScript
  if (normalized === "typescript" || normalized === "ts") {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M4 8h8v2.4H9.5V19H6.5v-8.6H4V8zm9.8 7.2c.7.5 1.5.8 2.4.8 1 0 1.5-.4 1.5-1 0-.6-.5-.9-1.7-1.3-1.8-.6-3-1.4-3-3 0-1.8 1.4-3 3.6-3 1.1 0 2 .3 2.7.7l-.8 2.3c-.6-.4-1.3-.6-1.9-.6-.8 0-1.3.4-1.3.9 0 .5.5.8 1.6 1.2 1.9.6 3.1 1.4 3.1 3.1 0 1.9-1.5 3.1-3.9 3.1-1.3 0-2.4-.4-3.2-1l.9-2.2z"
          fill="#FFF"
        />
      </svg>
    );
  }

  // JavaScript / JS
  if (normalized === "javascript" || normalized === "js") {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M6 8h3v8.5c0 1.6-.8 2.5-2.4 2.5-.9 0-1.8-.3-2.3-.7l.7-2c.3.3.7.5 1.1.5.6 0 .9-.3.9-.9V8zm7.8 7.2c.7.5 1.5.8 2.4.8 1 0 1.5-.4 1.5-1 0-.6-.5-.9-1.7-1.3-1.8-.6-3-1.4-3-3 0-1.8 1.4-3 3.6-3 1.1 0 2 .3 2.7.7l-.8 2.3c-.6-.4-1.3-.6-1.9-.6-.8 0-1.3.4-1.3.9 0 .5.5.8 1.6 1.2 1.9.6 3.1 1.4 3.1 3.1 0 1.9-1.5 3.1-3.9 3.1-1.3 0-2.4-.4-3.2-1l.9-2.2z"
          fill="#000"
        />
      </svg>
    );
  }

  // Next.js
  if (normalized.includes("next")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <circle
          cx="12"
          cy="12"
          r="10.5"
          fill="#000"
          stroke="#FFF"
          strokeWidth="1.2"
        />
        <path
          d="M8.5 7.5v9M16.5 7.5l-8 10h1.8l7.2-9h-1z"
          fill="#FFF"
        />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes("tailwind")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#38BDF8">
        <path d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6C13.7 10.6 15 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C16.3 6.2 15 4.8 12 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.5 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C10.3 13.4 9 12 6 12z" />
      </svg>
    );
  }

  // Framer Motion / Motion
  if (normalized.includes("motion") || normalized.includes("framer")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M4 2h16v7.3H12zm0 7.3h8l8 7.4H4zm0 7.4h8v7.3z" fill="#0055FF" />
      </svg>
    );
  }

  // HTML / HTML5
  if (normalized.includes("html")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M3 2.5l1.7 18.9L12 23.5l7.3-2.1L21 2.5H3z" fill="#E34F26" />
        <path d="M12 21.6l5.7-1.6 1.4-15H12v16.6z" fill="#EF652A" />
        <path
          d="M12 7.2H7.6l.3 3.3H12V7.2zm0 5.8H9.7l.2 2.2 2.1.6v-2.8z"
          fill="#EBEBEB"
        />
        <path
          d="M12 7.2v3.3h4.1l-.4 4.5-3.7 1v2.3l5.8-1.6.8-9.5H12z"
          fill="#FFF"
        />
      </svg>
    );
  }

  // CSS / CSS3
  if (normalized.includes("css")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M3 2.5l1.7 18.9L12 23.5l7.3-2.1L21 2.5H3z" fill="#1572B6" />
        <path d="M12 21.6l5.7-1.6 1.4-15H12v16.6z" fill="#33A9DC" />
        <path
          d="M12 7.2H7.6l.3 3.3H12V7.2zm0 5.8H9.7l.2 2.2 2.1.6v-2.8z"
          fill="#EBEBEB"
        />
        <path
          d="M12 7.2v3.3h4.1l-.4 4.5-3.7 1v2.3l5.8-1.6.8-9.5H12z"
          fill="#FFF"
        />
      </svg>
    );
  }

  // Angular / Angular.js
  if (normalized.includes("angular")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M12 2L2.5 5.5l1.5 12.5L12 22l8-4 1.5-12.5L12 2z"
          fill="#DD0031"
        />
        <path d="M12 2v20l8-4 1.5-12.5L12 2z" fill="#C3002F" />
        <path
          d="M12 5.5L7 16.5h2.2l1-2.5h3.6l1 2.5H17L12 5.5zm1.3 7h-2.6l1.3-3.2 1.3 3.2z"
          fill="#FFF"
        />
      </svg>
    );
  }

  // Bootstrap
  if (normalized.includes("bootstrap")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="5" fill="#7952B3" />
        <path
          d="M7 6.5h5.2c1.7 0 2.8.9 2.8 2.2 0 .9-.5 1.7-1.4 2 1.2.3 1.9 1.2 1.9 2.3 0 1.6-1.3 2.5-3.2 2.5H7V6.5zm2.8 3.5h2.1c.7 0 1.1-.3 1.1-.9 0-.6-.4-.9-1.1-.9H9.8V10zm0 3.8v1.9h2.3c.8 0 1.3-.4 1.3-1 0-.6-.5-.9-1.3-.9H9.8z"
          fill="#FFF"
        />
      </svg>
    );
  }

  // FastAPI
  if (normalized.includes("fastapi")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="12" r="11" fill="#009688" />
        <path d="M13 3L6 13h5l-1 8 8-11h-5l1-7z" fill="#FFF" />
      </svg>
    );
  }

  // Django
  if (normalized.includes("django")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="4" fill="#092E20" />
        <path
          d="M13.2 7h2.4v7.7c0 1.9-1 2.9-2.7 2.9-.7 0-1.4-.2-1.9-.5l.5-1.7c.4.2.8.3 1.2.3.9 0 1.4-.5 1.4-1.4V7zm-2.8 4.2v2.7c-.3.1-.7.2-1.2.2-1.2 0-1.8-.7-1.8-1.9 0-1.2.7-1.9 1.8-1.9.4 0 .8.1 1.2.2v.7zm0-4.4h2.4v8.5c-.7.5-1.7.7-2.7.7-2.3 0-3.9-1.5-3.9-3.8s1.6-3.8 3.9-3.8c.1 0 .2 0 .3 0V6.8z"
          fill="#2BA977"
        />
      </svg>
    );
  }

  // Flask / Flask-WTF / Flask-Mail
  if (normalized.includes("flask")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M9 3h6m-4 0v5.5L4.5 19A2 2 0 006.2 22h11.6a2 2 0 001.7-3L13 8.5V3"
          stroke="#E2E8F0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 17h11"
          stroke="#39FF14"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Docker
  if (normalized.includes("docker")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M22.8 11.2c-.4-.3-1.6-.4-2.4.1-.1-.6-.5-1.2-1.1-1.6l-.8-.5-.5.8c-.4.7-.4 1.5-.1 2.2-.6.4-1.8.4-2.5.2l-.3-.1-.1.3c-.6 2.3-2.5 3.7-4.9 3.7H3.4c-.4 0-.8-.3-.8-.7 0-1.8 1.4-3.3 3.3-3.4h.4v-1.6H4.2V8.6h2.1V7h2.1v1.6h2.1V7h2.1v1.6h2.1V7h2.1v3.7c1-.1 2.3.2 3.1.9l.4.3.4-.4c.6-.7 1.5-1 2.4-.9.2.6.2 1.3 0 1.9z"
          fill="#2496ED"
        />
      </svg>
    );
  }

  // PostgreSQL
  if (normalized.includes("postgres")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M12 2C6.5 2 2 6.5 2 12c0 3.6 1.9 6.8 4.8 8.5.5-.9 1-2 1.3-3.2-1.3-.8-2.1-2.2-2.1-3.8 0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 1.6-.8 3-2.1 3.8.3 1.2.8 2.3 1.3 3.2 2.9-1.7 4.8-4.9 4.8-8.5 0-5.5-4.5-10-10-10z"
          fill="#4169E1"
        />
        <circle cx="9.5" cy="11.5" r="1" fill="#FFF" />
        <circle cx="14.5" cy="11.5" r="1" fill="#FFF" />
        <path
          d="M12 14c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2z"
          fill="#FFF"
        />
      </svg>
    );
  }

  // MongoDB
  if (normalized.includes("mongo")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M12 1.5s-6 5.5-6 11.5c0 5 3.5 8 5.7 9.5.2.1.4.1.6 0 2.2-1.5 5.7-4.5 5.7-9.5 0-6-6-11.5-6-11.5z"
          fill="#47A248"
        />
        <path
          d="M12 2v19.5c.1-.1.2-.1.3-.2 1.8-1.3 4.7-3.9 4.7-8.3 0-5-5-9.5-5-11z"
          fill="#499D4A"
        />
      </svg>
    );
  }

  // Redis
  if (normalized.includes("redis")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M3 7l9-4 9 4-9 4-9-4zm0 5l9 4 9-4m-18 5l9 4 9-4"
          stroke="#DC382D"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes("node")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z"
          fill="#5FA04E"
        />
        <path
          d="M8 10v4l4 2.3 4-2.3v-4L12 7.7 8 10z"
          stroke="#FFF"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    );
  }

  // Vite
  if (normalized.includes("vite")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M19.7 3.5L12.5 17 9.8 11.8 19.7 3.5z" fill="#BD34FE" />
        <path d="M4.3 3.5l8.2 17.2 4.2-7.9-12.4-9.3z" fill="#41D1FF" />
        <path d="M13.2 2.8l-7.4 1.3 6.4 12.8 1-14.1z" fill="#FFD62E" />
      </svg>
    );
  }

  // Excel
  if (normalized.includes("excel")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect x="2" y="3" width="20" height="18" rx="3" fill="#217346" />
        <path
          d="M7 7.5l4 4.5-4 4.5h2.2l2.8-3.3 2.8 3.3H17l-4-4.5 4-4.5h-2.2L12 10.8 9.2 7.5H7z"
          fill="#FFF"
        />
      </svg>
    );
  }

  // Scikit-Learn
  if (normalized.includes("scikit") || normalized.includes("sklearn")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="8" cy="12" r="5" fill="#F7931E" opacity="0.9" />
        <circle cx="16" cy="12" r="5" fill="#387EB8" opacity="0.9" />
        <path
          d="M12 9a4.5 4.5 0 000 6 4.5 4.5 0 000-6z"
          fill="#2D3748"
        />
      </svg>
    );
  }

  // Pandas
  if (normalized.includes("pandas")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect x="4" y="4" width="3.5" height="16" rx="1.5" fill="#150458" />
        <rect x="10" y="8" width="3.5" height="12" rx="1.5" fill="#FF4336" />
        <rect x="16" y="3" width="3.5" height="17" rx="1.5" fill="#E70488" />
      </svg>
    );
  }

  // NumPy
  if (normalized.includes("numpy")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="4" fill="#013243" />
        <path
          d="M6 7h2.8l6.4 10V7H18v10h-2.8L8.8 7H6z"
          fill="#4DABCF"
        />
      </svg>
    );
  }

  // Matplotlib
  if (normalized.includes("matplotlib")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="4" fill="#11557C" />
        <path
          d="M5 16s2.5-8 5-8 4 9 7 3"
          stroke="#39FF14"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Seaborn
  if (normalized.includes("seaborn")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="4" fill="#2C3E50" />
        <path
          d="M6 17c3-1 4-9 6-9s3 6 6 4"
          stroke="#3498DB"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Redux
  if (normalized.includes("redux")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="12" r="10" fill="#764ABC" />
        <path
          d="M12 6a6 6 0 100 12 6 6 0 000-12zm-3 6a3 3 0 116 0 3 3 0 01-6 0z"
          fill="#FFF"
        />
      </svg>
    );
  }

  // Kubernetes
  if (normalized.includes("kubernetes")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="12" r="10" fill="#326CE5" />
        <path
          d="M12 6l5 3v6l-5 3-5-3V9l5-3zm0 3.5L9.5 11v2l2.5 1.5 2.5-1.5v-2L12 9.5z"
          fill="#FFF"
        />
      </svg>
    );
  }

  // Streamlit
  if (normalized.includes("streamlit")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M4 17l4-9 4 9H4zm8-4l3-6 3 6h-6zm6 4l2-4 2 4h-4z"
          fill="#FF4B4B"
        />
      </svg>
    );
  }

  // SQLite / MySQL
  if (normalized.includes("sqlite") || normalized.includes("mysql") || normalized.includes("sql")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="4" fill="#003B57" />
        <path
          d="M5 9c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3zm0 3c0 1.7 3.1 3 7 3s7-1.3 7-3m-14 3c0 1.7 3.1 3 7 3s7-1.3 7-3"
          stroke="#00A3E0"
          strokeWidth="1.6"
        />
      </svg>
    );
  }

  // Gemini AI / Google Gemini
  if (normalized.includes("gemini")) {
    return <Sparkles className={`${className} text-[#4facfe]`} />;
  }

  // TensorFlow / NLP
  if (normalized.includes("tensorflow") || normalized.includes("nlp")) {
    return <Brain className={`${className} text-[#FF6F00]`} />;
  }

  // WebSocket / Socket.io
  if (normalized.includes("socket") || normalized.includes("websocket")) {
    return <Zap className={`${className} text-yellow-400`} />;
  }

  // JWT
  if (normalized.includes("jwt")) {
    return <Lock className={`${className} text-pink-500`} />;
  }

  // SpeechRecognition / PyAudio / pyttsx3
  if (
    normalized.includes("speech") ||
    normalized.includes("pyaudio") ||
    normalized.includes("pyttsx3") ||
    normalized.includes("voice")
  ) {
    return <Mic className={`${className} text-purple-400`} />;
  }

  // Chart.js / Recharts
  if (normalized.includes("chart")) {
    return <BarChart3 className={`${className} text-emerald-400`} />;
  }

  // Grafana
  if (normalized.includes("grafana")) {
    return <LineChart className={`${className} text-orange-500`} />;
  }

  // Prometheus
  if (normalized.includes("prometheus")) {
    return <Zap className={`${className} text-red-500`} />;
  }

  // Gunicorn
  if (normalized.includes("gunicorn")) {
    return <Server className={`${className} text-green-500`} />;
  }

  // YouTube / pytube
  if (normalized.includes("youtube") || normalized.includes("pytube")) {
    return <Video className={`${className} text-red-500`} />;
  }

  // Wikipedia
  if (normalized.includes("wikipedia")) {
    return <BookOpen className={`${className} text-gray-300`} />;
  }

  // Weather API
  if (normalized.includes("weather")) {
    return <Cloud className={`${className} text-sky-400`} />;
  }

  // Currency / Exchange
  if (normalized.includes("exchange") || normalized.includes("currency")) {
    return <Coins className={`${className} text-amber-400`} />;
  }

  // Tkinter / GUI
  if (normalized.includes("tkinter")) {
    return <AppWindow className={`${className} text-indigo-400`} />;
  }

  // File handling / OS / Shutil
  if (
    normalized.includes("file") ||
    normalized.includes("os module") ||
    normalized.includes("shutil")
  ) {
    return <FolderTree className={`${className} text-blue-400`} />;
  }

  // Web Audio / Audio
  if (normalized.includes("audio")) {
    return <Zap className={`${className} text-cyan-400`} />;
  }

  // LocalStorage / DOM APIs
  if (normalized.includes("storage") || normalized.includes("dom")) {
    return <Cpu className={`${className} text-purple-300`} />;
  }

  // API generic
  if (normalized.includes("api")) {
    return <Globe className={`${className} text-teal-400`} />;
  }

  // Generic DB
  if (normalized.includes("db") || normalized.includes("database")) {
    return <Database className={`${className} text-cyan-400`} />;
  }

  // Generic Terminal / Code fallback
  return <Code2 className={`${className} text-gray-400`} />;
};

interface TechBadgeProps {
  name: string;
  size?: "sm" | "md";
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  size = "sm",
  className = "",
}) => {
  const isSm = size === "sm";

  return (
    <span
      className={`inline-flex items-center gap-1.5 transition-all select-none border font-medium ${
        isSm
          ? "px-2.5 py-1 text-[11px] rounded-lg bg-white/[0.04] border-white/10 text-gray-300 hover:text-white hover:bg-white/[0.08] hover:border-white/25"
          : "px-3 py-1.5 text-xs rounded-xl bg-white/[0.06] border-white/15 text-gray-200 hover:text-white hover:bg-white/10 hover:border-[#39ff14]/40"
      } ${className}`}
      title={name}
    >
      <TechIcon
        name={name}
        className={isSm ? "w-3.5 h-3.5 shrink-0" : "w-4 h-4 shrink-0"}
      />
      <span className="truncate tracking-wide">{name}</span>
    </span>
  );
};
