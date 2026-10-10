import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  X,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Code,
} from "lucide-react";

import { projects } from "../data/projects";

const ProjectImage = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div
        className={`bg-gradient-to-br from-[#111c10] via-[#0d140c] to-[#050505] flex flex-col items-center justify-center text-center p-6 border border-[#39ff14]/20 ${className}`}
      >
        <div className="w-10 h-10 rounded-full bg-[#39ff14]/10 text-[#39ff14] flex items-center justify-center mb-2">
          <Code className="w-5 h-5" />
        </div>
        <span className="font-mono text-xs uppercase tracking-wider text-gray-300 font-semibold mb-1">
          {alt}
        </span>
        <span className="text-[11px] text-[#39ff14]/70 font-mono">
          Project Preview
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className={className}
    />
  );
};

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const maxVisiblePages = 3;

  const getPaginationItems = () => {
    if (totalPages <= maxVisiblePages) {
      return {
        pages: Array.from({ length: totalPages }, (_, i) => i + 1),
        showLeftEllipsis: false,
        showRightEllipsis: false,
        startPage: 1,
      };
    }

    let start = currentPage - 1;
    if (start < 1) {
      start = 1;
    } else if (start + maxVisiblePages - 1 > totalPages) {
      start = totalPages - maxVisiblePages + 1;
    }

    const pages = Array.from({ length: maxVisiblePages }, (_, i) => start + i);
    const showLeftEllipsis = start > 1;
    const showRightEllipsis = start + maxVisiblePages - 1 < totalPages;

    return {
      pages,
      showLeftEllipsis,
      showRightEllipsis,
      startPage: start,
    };
  };

  const {
    pages: visiblePages,
    showLeftEllipsis,
    showRightEllipsis,
    startPage,
  } = getPaginationItems();

  const currentProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Selected <span className="text-[#39ff14]">Works</span>
        </h2>

        <div className="flex flex-col">
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative border-t border-white/10 py-12 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#39ff14]/50"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              <div className="flex flex-col md:flex-row justify-between items-baseline relative z-10 mix-blend-difference">
                <h3 className="text-3xl md:text-6xl font-bold text-gray-400 group-hover:text-[#39ff14] transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <span className="text-lg text-gray-500">
                    {project.category}
                  </span>
                  <span className="text-sm border border-white/20 px-3 py-1 rounded-full text-gray-400">
                    {project.year}
                  </span>
                  <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>

              {/* Hover Image Reveal - Desktop Only */}
              <AnimatePresence>
                {hoveredProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.95, rotate: 2 }}
                    transition={{ duration: 0.2 }}
                    className="hidden md:block absolute right-20 -top-20 z-20 pointer-events-none w-[400px] h-[300px] rounded-xl overflow-hidden border-2 border-[#39ff14]/50 shadow-2xl shadow-[#39ff14]/20"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  >
                    <ProjectImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#39ff14]/10 mix-blend-overlay" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Image (Always visible but small) */}
              <div className="md:hidden mt-6 rounded-lg overflow-hidden border border-white/10">
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-16 pt-8 border-t border-white/10">
            {/* Live counter & pulse indicator */}
            <div className="text-xs uppercase tracking-widest text-gray-500 font-mono flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39ff14] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39ff14]" />
              </span>
              <span>
                Showing{" "}
                <span className="text-white font-semibold">
                  {(currentPage - 1) * itemsPerPage + 1}–
                  {Math.min(currentPage * itemsPerPage, projects.length)}
                </span>{" "}
                of <span className="text-white font-semibold">{projects.length}</span>{" "}
                Projects
              </span>
            </div>

            {/* Futuristic Glass Pill Pagination Controls */}
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl shadow-black/80 max-w-full overflow-x-auto">
              {/* Prev Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white disabled:opacity-25 disabled:hover:text-gray-400 disabled:cursor-not-allowed hover:bg-white/10 transition-all cursor-pointer shrink-0"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              {/* Numbered Pills (Max 3 Visible) */}
              <div className="flex items-center gap-1 px-1 shrink-0">
                {showLeftEllipsis && (
                  <button
                    onClick={() => setCurrentPage(Math.max(1, startPage - 1))}
                    className="w-7 h-8 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer text-xs font-mono font-bold tracking-widest shrink-0"
                    aria-label="Previous pages"
                    title="Previous pages"
                  >
                    ...
                  </button>
                )}

                {visiblePages.map((page) => {
                  const isActive = currentPage === page;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`relative w-8 h-8 rounded-full text-xs font-mono font-bold transition-all flex items-center justify-center cursor-pointer shrink-0 ${
                        isActive
                          ? "bg-[#39ff14] text-black shadow-[0_0_15px_rgba(57,255,20,0.5)] scale-105"
                          : "text-gray-400 hover:text-white hover:bg-white/10"
                      }`}
                      aria-label={`Go to page ${page}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {String(page).padStart(2, "0")}
                    </button>
                  );
                })}

                {showRightEllipsis && (
                  <button
                    onClick={() =>
                      setCurrentPage(
                        Math.min(totalPages, startPage + maxVisiblePages),
                      )
                    }
                    className="w-7 h-8 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer text-xs font-mono font-bold tracking-widest shrink-0"
                    aria-label="Next pages"
                    title="Next pages"
                  >
                    ...
                  </button>
                )}
              </div>

              {/* Next Button */}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white disabled:opacity-25 disabled:hover:text-gray-400 disabled:cursor-not-allowed hover:bg-white/10 transition-all cursor-pointer shrink-0"
                aria-label="Next Page"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 cursor-pointer hover:bg-black/80 rounded-full text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:w-1/2 h-64 md:h-auto relative shrink-0">
                <ProjectImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#39ff14]/10 mix-blend-overlay" />
              </div>

              <div className="md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
                <div className="text-[#39ff14] text-sm font-semibold mb-2">
                  {selectedProject.year}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 font-medium">
                  {selectedProject.category}
                </p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {selectedProject.techStack &&
                  selectedProject.techStack.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                {selectedProject.highlights &&
                  selectedProject.highlights.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-white mb-3">
                        Key Features
                      </h4>
                      <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                        {selectedProject.highlights.map((highlight, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-white/10">
                  {selectedProject.liveDemoUrl &&
                    selectedProject.liveDemoUrl !== "#" && (
                      <a
                        href={selectedProject.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-[#39ff14] text-black font-semibold rounded-lg hover:bg-[#32e011] transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  {selectedProject.githubRepoUrl &&
                    selectedProject.githubRepoUrl !== "#" && (
                      <a
                        href={selectedProject.githubRepoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/5 text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
