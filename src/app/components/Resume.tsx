import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Download,
  ExternalLink,
  Briefcase,
  GraduationCap,
  FileWarning,
  FileText,
} from "lucide-react";
import { profile, education, experience } from "../data/profile";

export const Resume = () => {
  const resumeFileName = `${profile.name.replace(/\s+/g, "_")}_Resume.pdf`;

  return (
    <section
      id="resume"
      className="py-24 bg-[#050505] relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-[#39ff14]">Resume</span>
            </h2>
            <p className="text-gray-400 text-lg">
              A summary of my professional experience and education.
            </p>
          </div>

          <motion.a
            href={profile.resumeFile}
            download={resumeFileName}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-[#39ff14] text-black font-bold rounded-full hover:bg-[#32d911] transition-colors shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)]"
            aria-label="Download CV"
          >
            <Download size={20} />
            Download CV
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            {/* Education Column */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            {education.map((item, index) => (
              <TimelineItem
                key={`${item.company}-${item.role}-${index}`}
                {...item}
              />
            ))}

            {/* Experience Column */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-[#39ff14]/10 rounded-lg text-[#39ff14]">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>

            {experience.map((item, index) => (
              <TimelineItem
                key={`${item.company}-${item.role}-${index}`}
                {...item}
              />
            ))}
          </div>

          {/* Preview Column */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#39ff14]/10 rounded-lg text-[#39ff14]">
                  <FileText size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Preview</h3>
              </div>

              {/* Quick direct PDF link */}
              <a
                href={profile.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#39ff14] hover:underline flex items-center gap-1.5"
                title="Open full PDF document in a new tab"
              >
                <span>Full PDF</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Responsive Glassmorphic Resume Preview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-md p-3 sm:p-4 flex flex-col shadow-2xl shadow-black/80 hover:border-[#39ff14]/30 transition-all duration-300"
            >
              {/* Card HUD Toolbar Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2 text-gray-300 min-w-0">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39ff14] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39ff14]" />
                  </span>
                  <span className="truncate font-medium" title={resumeFileName}>
                    {resumeFileName}
                  </span>
                </div>
                <span className="text-gray-500 hidden sm:inline shrink-0">
                  1 Page • PDF
                </span>
              </div>

              {/* Responsive Resume Embed Housing */}
              <div className="relative w-full h-[480px] sm:h-[600px] lg:h-[780px] rounded-xl overflow-hidden bg-[#0c0c0c]">
                <EmbedPdfViewer fileUrl={profile.resumeFile} />

                {/* Subtle bottom fade gradient */}
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0c0c0c]/80 via-[#0c0c0c]/20 to-transparent pointer-events-none" />
              </div>

              {/* Action Buttons Bar */}
              <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center gap-3">
                <a
                  href={profile.resumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#39ff14]/50 hover:bg-[#39ff14]/10 text-white text-xs sm:text-sm font-mono font-medium transition-all flex items-center justify-center gap-2 cursor-pointer"
                  title="Open full PDF document in a new tab"
                >
                  <ExternalLink size={15} className="text-[#39ff14]" />
                  <span>View PDF</span>
                </a>
                <a
                  href={profile.resumeFile}
                  download={resumeFileName}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#39ff14] text-black text-xs sm:text-sm font-mono font-bold hover:bg-[#32d911] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(57,255,20,0.3)] cursor-pointer"
                  title="Download resume as PDF"
                >
                  <Download size={15} />
                  <span>Download</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({
  role,
  company,
  period,
  description,
}: {
  role: string;
  company: string;
  period: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 border-l border-white/10 pb-8 last:pb-0"
  >
    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#39ff14] shadow-[0_0_10px_#39ff14]" />
    <h4 className="text-xl font-bold text-white">{role}</h4>
    <div className="flex items-center gap-3 text-sm text-gray-400 mt-1 mb-3">
      <span className="text-[#39ff14]">{company}</span>
      <span>•</span>
      <span>{period}</span>
    </div>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const EmbedPdfViewer = ({ fileUrl }: { fileUrl: string }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setHasError(false);

    // Validate that the file is reachable
    fetch(fileUrl, { method: "HEAD" })
      .then((res) => {
        const contentType = res.headers.get("content-type") || "";
        if (!res.ok || contentType.includes("text/html")) {
          if (isMounted) setHasError(true);
        }
      })
      .catch(() => {
        if (isMounted) setHasError(true);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [fileUrl]);

  if (isLoading) {
    return (
      <div className="h-full w-full bg-[#0c0c0c] flex flex-col items-center justify-center gap-3 text-[#39ff14]">
        <div className="w-8 h-8 border-2 border-[#39ff14]/30 border-t-[#39ff14] rounded-full animate-spin" />
        <span className="font-mono text-xs text-gray-400">
          Loading Resume...
        </span>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full p-8 text-center bg-[#0c0c0c]">
        <div className="p-4 bg-red-500/10 rounded-full text-red-500 mb-4">
          <FileWarning size={40} />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">
          Resume Preview Unavailable
        </h3>
        <p className="text-gray-400 text-xs max-w-[250px] mb-4">
          Unable to preview PDF document directly.
        </p>
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#39ff14] text-black text-xs font-mono font-bold rounded-lg hover:bg-[#32d911] transition-colors"
        >
          Open Document
        </a>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0c0c0c] rounded-xl [color-scheme:dark]">
      <iframe
        src={`${fileUrl}#toolbar=0&navpanes=0`}
        className="w-[calc(100%+32px)] h-full border-0 bg-white max-w-none block"
        title="Resume PDF"
      />
    </div>
  );
};
