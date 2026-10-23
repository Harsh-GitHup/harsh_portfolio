import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  X,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Code,
  Maximize2,
  Minimize2,
  Search,
} from "lucide-react";

import { projects } from "../../data/projects";
import { TechBadge } from "../TechBadge";

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
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const categories = useMemo(() => {
    const types = Array.from(
      new Set(projects.map((p) => p.types).filter(Boolean)),
    );
    return ["All", ...types];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (selectedType !== "All" && project.types !== selectedType) {
        return false;
      }

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      const titleMatch = project.title.toLowerCase().includes(query);
      const categoryMatch = project.category?.toLowerCase().includes(query);
      const typeMatch = project.types?.toLowerCase().includes(query);
      const descMatch = project.description?.toLowerCase().includes(query);
      const techMatch = project.techStack?.some((tech) =>
        tech.toLowerCase().includes(query),
      );
      const yearMatch = project.year?.toLowerCase().includes(query);

      return (
        titleMatch ||
        categoryMatch ||
        typeMatch ||
        descMatch ||
        techMatch ||
        yearMatch
      );
    });
  }, [searchQuery, selectedType]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedType]);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const maxVisiblePages = 3;

  const currentProjectIndex = useMemo(() => {
    if (!selectedProject) return -1;
    return filteredProjects.findIndex((p) => p.id === selectedProject.id);
  }, [selectedProject, filteredProjects]);

  const handlePrevProject = useCallback(() => {
    if (filteredProjects.length === 0) return;
    const currentIndex = filteredProjects.findIndex(
      (p) => p.id === selectedProject?.id,
    );
    const newIndex =
      currentIndex <= 0 ? filteredProjects.length - 1 : currentIndex - 1;
    const prevProj = filteredProjects[newIndex];
    setSelectedProject(prevProj);
    const targetPage = Math.floor(newIndex / itemsPerPage) + 1;
    if (targetPage !== currentPage) {
      setCurrentPage(targetPage);
    }
  }, [filteredProjects, selectedProject, currentPage, itemsPerPage]);

  const handleNextProject = useCallback(() => {
    if (filteredProjects.length === 0) return;
    const currentIndex = filteredProjects.findIndex(
      (p) => p.id === selectedProject?.id,
    );
    const newIndex =
      currentIndex >= filteredProjects.length - 1 ? 0 : currentIndex + 1;
    const nextProj = filteredProjects[newIndex];
    setSelectedProject(nextProj);
    const targetPage = Math.floor(newIndex / itemsPerPage) + 1;
    if (targetPage !== currentPage) {
      setCurrentPage(targetPage);
    }
  }, [filteredProjects, selectedProject, currentPage, itemsPerPage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isInputActive =
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA";

      if (e.key === "Escape") {
        if (isImageExpanded) {
          setIsImageExpanded(false);
        } else if (selectedProject) {
          setSelectedProject(null);
        }
        return;
      }

      if (e.key === "/" && !selectedProject && !isInputActive) {
        e.preventDefault();
        searchInputRef.current?.focus();
        return;
      }

      if (isInputActive) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (selectedProject) {
          handlePrevProject();
        } else if (currentPage > 1) {
          setCurrentPage((prev) => Math.max(prev - 1, 1));
        }
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        if (selectedProject) {
          handleNextProject();
        } else if (currentPage < totalPages) {
          setCurrentPage((prev) => Math.min(prev + 1, totalPages));
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    selectedProject,
    isImageExpanded,
    handlePrevProject,
    handleNextProject,
    currentPage,
    totalPages,
  ]);

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

  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Title and Search Bar */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Selected <span className="text-[#39ff14]">Works</span>
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                Explore full-stack platforms, APIs, automation utilities & web
                apps
              </p>
            </div>

            {/* Modern Search Input */}
            <div className="relative w-full md:w-80 lg:w-96 group">
              <div className="relative flex items-center">
                <Search className="absolute left-3.5 w-4 h-4 text-gray-500 group-focus-within:text-[#39ff14] transition-colors pointer-events-none" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, tech (FastAPI, React...)"
                  className="w-full bg-[#121212] hover:bg-[#161616] focus:bg-[#141414] text-white text-sm pl-10 pr-10 py-3 rounded-xl border border-white/10 hover:border-white/20 focus:border-[#39ff14]/60 focus:ring-2 focus:ring-[#39ff14]/20 outline-none transition-all placeholder:text-gray-500 shadow-inner"
                />
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    title="Clear search"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="hidden sm:inline-block absolute right-3 px-1.5 py-0.5 text-[10px] font-mono text-gray-500 bg-white/5 border border-white/10 rounded pointer-events-none">
                    /
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((category) => {
              const isActive = selectedType === category;
              const count =
                category === "All"
                  ? projects.length
                  : projects.filter((p) => p.types === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedType(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                    isActive
                      ? "bg-[#39ff14] text-black font-semibold shadow-[0_0_15px_rgba(57,255,20,0.35)]"
                      : "bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08] border border-white/10"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive
                        ? "bg-black/25 text-black font-bold"
                        : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}

            {/* Active search or category reset link */}
            {(searchQuery || selectedType !== "All") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedType("All");
                }}
                className="text-xs text-gray-400 hover:text-[#39ff14] ml-auto shrink-0 transition-colors flex items-center gap-1 cursor-pointer py-1"
              >
                <X className="w-3 h-3" />
                <span>Reset filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Project List or Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center flex flex-col items-center justify-center border-t border-b border-white/10 my-8">
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 mb-4 shadow-lg shadow-black/50">
              <Search className="w-6 h-6 text-[#39ff14]/70" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              No matching projects found
            </h3>
            <p className="text-gray-400 text-sm max-w-md mb-6 leading-relaxed">
              No projects matched your search for{" "}
              {searchQuery && (
                <span className="text-[#39ff14] font-medium">
                  &ldquo;{searchQuery}&rdquo;
                </span>
              )}
              {searchQuery && selectedType !== "All" && " in "}
              {selectedType !== "All" && (
                <span className="text-white font-medium">{selectedType}</span>
              )}
              . Try checking for typos or searching another technology.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedType("All");
              }}
              className="px-5 py-2.5 bg-white/10 hover:bg-[#39ff14] text-white hover:text-black font-semibold text-xs rounded-xl transition-all cursor-pointer shadow-lg"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
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

                {/* TechStack Skill Badges with Icons */}
                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 mt-4 relative z-10">
                    {project.techStack.map((tech) => (
                      <TechBadge key={tech} name={tech} size="sm" />
                    ))}
                  </div>
                )}

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
        )}

        {/* Single Page result count status when filters are active */}
        {filteredProjects.length > 0 &&
          totalPages <= 1 &&
          (searchQuery || selectedType !== "All") && (
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10 text-xs font-mono text-gray-500">
              <span>
                Showing all{" "}
                <span className="text-[#39ff14] font-semibold">
                  {filteredProjects.length}
                </span>{" "}
                matching{" "}
                {filteredProjects.length === 1 ? "project" : "projects"}
                <span className="text-gray-400">
                  {" "}
                  (filtered from {projects.length})
                </span>
              </span>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedType("All");
                }}
                className="text-xs text-gray-400 hover:text-[#39ff14] transition-colors cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}

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
                  {Math.min(
                    currentPage * itemsPerPage,
                    filteredProjects.length,
                  )}
                </span>{" "}
                of{" "}
                <span className="text-white font-semibold">
                  {filteredProjects.length}
                </span>{" "}
                Projects
                {(searchQuery || selectedType !== "All") && (
                  <span className="text-gray-400">
                    {" "}
                    (filtered from {projects.length})
                  </span>
                )}
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
            className={`fixed inset-0 z-50 flex items-center justify-center ${
              isImageExpanded ? "p-2 sm:p-4 md:p-6" : "p-4 sm:p-6"
            }`}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            {/* Floating Left/Right Navigation Arrows for Desktop */}
            {filteredProjects.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevProject();
                  }}
                  className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/80 hover:bg-[#39ff14] text-white hover:text-black border border-white/20 hover:border-[#39ff14] items-center justify-center transition-all shadow-2xl cursor-pointer group"
                  title="Previous Project (Left Arrow ←)"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextProject();
                  }}
                  className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/80 hover:bg-[#39ff14] text-white hover:text-black border border-white/20 hover:border-[#39ff14] items-center justify-center transition-all shadow-2xl cursor-pointer group"
                  title="Next Project (Right Arrow →)"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" />
                </button>
              </>
            )}
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`relative w-full ${
                isImageExpanded ? "max-w-6xl" : "max-w-5xl"
              } max-h-[94vh] bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row transition-[max-width] duration-300`}
            >
              <button
                onClick={() => {
                  if (isImageExpanded) {
                    setIsImageExpanded(false);
                  } else {
                    setSelectedProject(null);
                  }
                }}
                aria-label={
                  isImageExpanded ? "Collapse image" : "Close project details"
                }
                title={
                  isImageExpanded
                    ? "Back to project details (Esc)"
                    : "Close (Esc)"
                }
                className={`absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2 bg-black/60 cursor-pointer hover:bg-black/90 rounded-full text-white transition-colors border border-white/10 shadow-lg group ${
                  isImageExpanded
                    ? "hidden sm:flex items-center justify-center"
                    : "flex items-center justify-center"
                }`}
              >
                {isImageExpanded ? (
                  <Minimize2 className="w-5 h-5 text-gray-300 group-hover:text-[#39ff14] transition-colors" />
                ) : (
                  <X className="w-5 h-5" />
                )}
              </button>

              {/* Project Image Showcase with Expand / Collapse Feature */}
              <motion.div
                layout
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`transition-all duration-300 ${
                  isImageExpanded
                    ? "w-full p-2 sm:p-5 md:p-8 max-h-[90vh] md:min-h-[560px]"
                    : "w-full md:w-1/2 min-h-[220px] md:min-h-full p-3 sm:p-6 border-b md:border-b-0 md:border-r border-white/10"
                } bg-gradient-to-br from-[#0d0d0d] via-[#090909] to-[#050505] flex flex-col items-center justify-center relative`}
              >
                <div
                  className={`w-full ${
                    isImageExpanded ? "max-h-[86vh]" : "max-h-[70vh]"
                  } flex flex-col rounded-xl overflow-hidden border border-white/10 bg-[#141414] shadow-2xl transition-all duration-300`}
                >
                  {/* Browser Mockup Top Bar */}
                  <div className="h-9 px-3 sm:px-4 bg-white/[0.04] border-b border-white/10 flex items-center justify-between gap-2 shrink-0 select-none">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                      </div>

                      {/* Top Bar Project Switcher */}
                      {filteredProjects.length > 1 && (
                        <div className="flex items-center gap-0.5 bg-black/40 border border-white/10 rounded-md px-1 py-0.5">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePrevProject();
                            }}
                            className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                            title="Previous project (← Left Arrow)"
                            aria-label="Previous project"
                          >
                            <ChevronLeft className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-[10px] font-mono text-[#39ff14] px-1 font-semibold">
                            {currentProjectIndex + 1}/{filteredProjects.length}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNextProject();
                            }}
                            className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                            title="Next project (→ Right Arrow)"
                            aria-label="Next project"
                          >
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                      <span className="text-[11px] font-mono text-gray-300 truncate">
                        {selectedProject.title}
                      </span>

                      {isImageExpanded && (
                        <span className="hidden sm:inline-flex text-[10px] font-mono text-[#39ff14] bg-[#39ff14]/10 border border-[#39ff14]/30 px-2 py-0.5 rounded-full shrink-0">
                          Full View
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {isImageExpanded ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsImageExpanded(false);
                          }}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-[#39ff14] text-gray-200 hover:text-black text-xs font-semibold transition-all cursor-pointer shadow-sm shrink-0"
                          title="Collapse view and show details"
                          aria-label="Collapse view and show details"
                        >
                          <Minimize2 className="w-3.5 h-3.5 text-[#39ff14] group-hover:text-black" />
                          <span className="hidden sm:inline">
                            Close Full Image
                          </span>
                          <span className="sm:hidden font-medium">Close</span>
                        </button>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsImageExpanded(true);
                          }}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white text-xs font-medium transition-all cursor-pointer shrink-0"
                          title="Click to view image bigger"
                          aria-label="View image bigger"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-[#39ff14]" />
                          <span className="hidden sm:inline">Expand</span>
                          <span className="sm:hidden">Zoom</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Interactive Screenshot Container */}
                  <div
                    onClick={() => setIsImageExpanded((prev) => !prev)}
                    className={`relative flex-1 flex items-center justify-center ${
                      isImageExpanded ? "p-1.5 sm:p-4" : "p-2 sm:p-4"
                    } overflow-hidden bg-black/50 group/preview ${
                      isImageExpanded ? "cursor-zoom-out" : "cursor-zoom-in"
                    }`}
                    title={
                      isImageExpanded
                        ? "Click to collapse image"
                        : "Click to see image bigger"
                    }
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedProject.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <ProjectImage
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className={`w-full h-full ${
                            isImageExpanded ? "max-h-[80vh]" : "max-h-[480px]"
                          } object-contain rounded drop-shadow-lg transition-all duration-300 group-hover/preview:scale-[1.01]`}
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Hover Hint Badge (when not expanded) */}
                    {!isImageExpanded && (
                      <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-200 bg-black/85 backdrop-blur-md border border-white/20 text-white text-xs px-2.5 py-1 rounded-full hidden sm:flex items-center gap-1.5 pointer-events-none shadow-xl">
                        <Maximize2 className="w-3.5 h-3.5 text-[#39ff14]" />
                        <span>Click image to view bigger</span>
                      </div>
                    )}

                    {/* Exit Hint Badge (when expanded) - hidden on mobile so it doesn't block the image */}
                    {isImageExpanded && (
                      <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-white/15 text-gray-300 text-xs px-3 py-1.5 rounded-full hidden sm:flex items-center gap-1.5 shadow-lg pointer-events-none">
                        <Minimize2 className="w-3.5 h-3.5 text-[#39ff14]" />
                        <span>Click image or Esc to return</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              <AnimatePresence initial={false}>
                {!isImageExpanded && (
                  <motion.div
                    key={`project-details-${selectedProject.id}`}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto"
                  >
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
                              <TechBadge key={idx} name={tech} size="md" />
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
                            {selectedProject.highlights.map(
                              (highlight, idx) => (
                                <li key={idx} className="leading-relaxed">
                                  {highlight}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}

                    <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-6 border-t border-white/10">
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.liveDemoUrl &&
                          selectedProject.liveDemoUrl !== "#" && (
                            <a
                              href={selectedProject.liveDemoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 bg-[#39ff14] text-black font-semibold rounded-lg hover:bg-[#32e011] transition-colors text-xs"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              Live Demo
                            </a>
                          )}
                        {selectedProject.githubRepoUrl &&
                          selectedProject.githubRepoUrl !== "#" && (
                            <a
                              href={selectedProject.githubRepoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/5 text-xs"
                            >
                              <Github className="w-3.5 h-3.5" />
                              {selectedProject.githubBackendUrl
                                ? "Frontend Repo"
                                : "Source Code"}
                            </a>
                          )}
                        {selectedProject.githubBackendUrl &&
                          selectedProject.githubBackendUrl !== "#" && (
                            <a
                              href={selectedProject.githubBackendUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/5 text-xs"
                            >
                              <Github className="w-3.5 h-3.5" />
                              Backend Repo
                            </a>
                          )}
                      </div>

                      {/* Modal Next/Prev Quick Switcher with Keyboard Key hints */}
                      {filteredProjects.length > 1 && (
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/[0.04] border border-white/10 px-2.5 py-1.5 rounded-lg select-none">
                          <button
                            onClick={handlePrevProject}
                            className="p-1 rounded hover:bg-white/10 text-gray-300 hover:text-[#39ff14] transition-colors cursor-pointer"
                            title="Previous project (Left Arrow ←)"
                            aria-label="Previous project"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <span className="font-mono text-[11px] text-gray-300">
                            <span className="text-[#39ff14] font-semibold">
                              {currentProjectIndex + 1}
                            </span>{" "}
                            / {filteredProjects.length}
                          </span>
                          <button
                            onClick={handleNextProject}
                            className="p-1 rounded hover:bg-white/10 text-gray-300 hover:text-[#39ff14] transition-colors cursor-pointer"
                            title="Next project (Right Arrow →)"
                            aria-label="Next project"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                          <span className="hidden sm:inline text-[10px] text-gray-500 font-mono pl-1.5 border-l border-white/10">
                            Use ← / → keys
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
