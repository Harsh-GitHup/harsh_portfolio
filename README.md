# 🌟 Futuristic Dark Portfolio Website

[![Built with React](https://img.shields.io/badge/Built%20With-React%2018%20%7C%20TypeScript%20%7C%20Vite%206-39ff14?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-CSS%204-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)](https://harshkesharwani.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

A stunning, modern portfolio website featuring a dark theme with neon green accents (`#39ff14`). Built with cutting-edge web technologies to showcase full-stack projects, software engineering skills, and professional experience with smooth animations and an immersive user experience.

---

## 🎯 Live Demo

🚀 **[View Live Site — harshkesharwani.vercel.app](https://harshkesharwani.vercel.app/)** *(Deployed to Vercel with Global Edge Network)*

---

## ✨ Features & Architecture

### 🎨 Design & UI
* **Futuristic Dark Cyber Theme** with vibrant neon green (`#39ff14`) accents.
* **Smooth Micro-Animations** powered by Framer Motion.
* **Responsive Layout** — Tailored for mobile, tablet, laptop, and ultra-wide displays.
* **Glassmorphism & Gradient Effects** with backdrop blur layers and cyber grid overlays.

### 💼 Portfolio Showcase & Project Explorer
* **Live Search & Technology Filter**: Instant fuzzy search across titles, descriptions, categories, and tech stack tags.
* **Interactive Project Modal**:
  * Keyboard navigation support (`←` and `→` arrow keys to cycle projects, `Esc` to close).
  * Expandable high-resolution project preview screenshot modal.
  * Dual repository links for frontend and backend codebases.
* **TechStack Skill Badges**: Integrated brand iconography for technologies (Django, React, PostgreSQL, Docker, AWS, etc.).

### 🔒 Security & Performance Hardening
* **Zero Hardcoded Secrets**: Contact form submits via Web3Forms using `VITE_WEB3FORMS_ACCESS_KEY` loaded strictly from environment variables.
* **Custom Email Subjects**: Pre-tags contact message submissions with sender names and project inquiry titles.
* **Non-Blocking Telemetry**: Visitor counter API requests wrapped in an `AbortController` with a 2-second timeout to prevent hydration delays.
* **HTTP Security Headers**: [vercel.json](vercel.json) enforces `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `X-XSS-Protection`, and `Referrer-Policy: strict-origin-when-cross-origin`.

### 🌐 SEO & SERP Optimization
* **JSON-LD Schema**: Schema.org `@graph` metadata declaring `Person` and `WebSite` entities for Google Knowledge Graph.
* **Robots & Sitemap**: Production-ready [robots.txt](public/robots.txt) and canonical [sitemap.xml](public/sitemap.xml).
* **OpenGraph & Twitter Cards**: High-resolution metadata tags with creator attribution.

---

## 🛠️ Tech Stack

### Core Framework & Tools
* **React 18.3.1** — Component-driven frontend library
* **TypeScript 5.8** — Strict static type safety with bundler module resolution
* **Vite 6.4** — Next-generation frontend build tooling and hot-module reloading
* **Tailwind CSS 4** — Modern utility-first CSS framework
* **Framer Motion** — Fluid physics-based animations

### UI Primitives & Utilities
* **Radix UI** — Accessible, unstyled UI primitives (Dialog, Tooltip, Dropdown, Accordion)
* **Lucide React** — Crisp vector icons
* **React PDF & PDF.js** — Interactive resume viewer with worker thread execution

---

## 📁 Project Structure

```text
harsh_portfolio/
├── public/                     # Static assets, resume.pdf, robots.txt, sitemap.xml
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx      # Navigation bar with blur backdrop
│   │   │   ├── Hero.tsx        # Hero section with animated counter
│   │   │   ├── About.tsx       # Bio, education, and credentials
│   │   │   ├── TechStack.tsx   # Categorized skills matrix
│   │   │   ├── Projects.tsx    # Searchable projects grid with modal
│   │   │   ├── Resume.tsx      # Experience timeline and embedded PDF viewer
│   │   │   ├── Contact.tsx     # Validated Web3Forms contact form
│   │   │   ├── Footer.tsx      # Social links and copyright
│   │   │   └── TechBadge.tsx   # Technology icon badge component
│   │   ├── data/
│   │   │   └── projects.ts     # Project showcase data and repository links
│   │   └── App.tsx             # Root application component
│   ├── styles/                 # Custom styling
│   ├── index.css               # Global styles and Tailwind imports
│   ├── main.tsx                # Application entrypoint
│   └── vite-env.d.ts           # Environment variable TypeScript definitions
├── .env.example                # Template for environment variables
├── index.html                  # HTML template with JSON-LD schema
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration with bundler resolution
├── vercel.json                 # Vercel SPA rewrites and security headers
└── vite.config.ts              # Vite plugins, aliases, and rollup chunks
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** (v18.0 or higher)
* **npm** or **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Harsh-GitHup/harsh_portfolio.git
   cd harsh_portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```
   Add your Web3Forms access key:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
   ```

4. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Production Build & Deployment

### Build Locally
```bash
npm run build
```
This generates an optimized production bundle in the `dist/` directory.

### Deploying to Vercel
1. Push your repository to GitHub.
2. In [Vercel](https://vercel.com/), click **New Project** and import `harsh_portfolio`.
3. Set Framework Preset to **Vite**.
4. Add the following Environment Variable under **Settings > Environment Variables**:
   * `VITE_WEB3FORMS_ACCESS_KEY`: *Your Web3Forms API Key*
5. Click **Deploy**. Vercel will build and route all requests through [vercel.json](vercel.json).

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

## 👨‍💻 Author
**Harsh Kesharwani**
* Portfolio: [harshkesharwani.vercel.app](https://harshkesharwani.vercel.app/)
* GitHub: [@Harsh-GitHup](https://github.com/Harsh-GitHup)
* LinkedIn: [harshkesharwani](https://www.linkedin.com/in/harshkesharwani)
* Email: [harshkesharwani037@gmail.com](mailto:harshkesharwani037@gmail.com)
