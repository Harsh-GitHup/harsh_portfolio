import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Download,
  ExternalLink,
  Briefcase,
  GraduationCap,
  FileWarning,
} from "lucide-react";

export const Resume = () => {
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
              A summary of my professional experience and
              education.
            </p>
          </div>

          <motion.a
            href="/resume.pdf"
            download="Harsh_Kesharwani_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-[#39ff14] text-black font-bold rounded-full hover:bg-[#32d911] transition-colors shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)]"
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
              <h3 className="text-2xl font-bold text-white">
                Education
              </h3>
            </div>

            <TimelineItem
              role="Bachelor of Technology in Computer Science"
              company="RGPV University"
              period="2020 - 2024"
              description="Specialized in Software Development and Database Systems. Graduated with Honors."
            />

            {/* Experience Column */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-[#39ff14]/10 rounded-lg text-[#39ff14]">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Experience
              </h3>
            </div>

            <TimelineItem
              role="Python Intern"
              company="Oasis Infobyte"
              period="Nov 2023 - Dec 2023"
              description="Engineered a suite of Python applications including a voice assistant, a BMI calculator, and a secure random password generator to streamline task automation and data processing."
            />

            <TimelineItem
              role="Web Development Intern"
              company="Cognifyz Technologies"
              period="Sep 2023 - Oct 2023"
              description="Developed responsive web components and landing pages using HTML, CSS, and JavaScript, focusing on interactive UI elements and cross-device compatibility."
            />

            <TimelineItem
              role="Python trainee"
              company="SmartInternz"
              period="Aug 2021 - Sep 2023"
              description="Engineered a machine learning pipeline to process large-scale placement datasets, uncovering hidden patterns in student profiles and academic performance using predictive algorithms."
            />
          </div>

          {/* Preview Column */}
          <div className="space-y-12">
            {/* Resume Preview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-1 mt-[45px]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10 pointer-events-none" />

              <div className="relative h-[790px] bg-white rounded-xl overflow-hidden">
                <EmbedPdfViewer fileUrl="/resume.pdf" />
              </div>

              {/* External Link Button - Since internal controls are hidden */}
              <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-[#39ff14] text-black rounded-full shadow-lg flex items-center justify-center"
                >
                  <ExternalLink size={20} />
                </motion.a>
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
    <p className="text-gray-400 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const EmbedPdfViewer = ({ fileUrl }: { fileUrl: string }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the file actually exists before trying to embed it
    fetch(fileUrl, { method: 'HEAD' })
      .then((res) => {
        // If it's not a PDF or returns a 404, set error
        const contentType = res.headers.get('content-type');
        if (!res.ok || (contentType && !contentType.includes('pdf'))) {
          setHasError(true);
        }
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, [fileUrl]);

  if (isLoading) {
    return <div className="h-full w-full bg-[#0a0a0a] flex items-center justify-center text-[#39ff14]">Loading...</div>;
  }

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full p-8 text-center bg-[#0a0a0a]">
        <div className="p-4 bg-red-500/10 rounded-full text-red-500 mb-4">
          <FileWarning size={48} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Resume Preview Unavailable</h3>
        <p className="text-gray-400 text-sm max-w-[250px]">
          We couldn't find the file at public{fileUrl}.
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#111] rounded-xl">
      <embed
        src={fileUrl}
        type="application/pdf"
        width="100%"
        height="110%"
        className="absolute top-[-56px] left-0"
      />
      <div className="absolute top-0 left-0 w-full h-12 z-10 bg-transparent" />
    </div>
  );
};