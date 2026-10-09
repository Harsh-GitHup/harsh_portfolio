import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Award, HelpCircle, User, Sparkles } from "lucide-react";
import { about, profile } from "../data/profile";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  GraduationCap,
  Award,
};

export const About = () => {
  const [avatarMode, setAvatarMode] = useState<"real" | "cyber">("real");

  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#39ff14]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                About <span className="text-[#39ff14]">Me</span>
              </h2>

              <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed space-y-6">
                {about.paragraphs.map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {about.cards.map((card, i) => {
                  const Icon = iconMap[card.iconName] || HelpCircle;
                  return (
                    <Card
                      key={i}
                      icon={Icon}
                      title={card.title}
                      subtitle={card.subtitle}
                      detail={card.detail}
                    />
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Visual/Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex flex-col items-center justify-center"
          >
            <div className="relative w-72 h-72 md:w-84 md:h-84 group">
              {/* Pulsing ambient neon aura */}
              <div className="absolute inset-0 bg-[#39ff14]/20 rounded-full blur-2xl animate-pulse pointer-events-none" />

              {/* Outer rotating dashed cyber-ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-5 border-2 border-[#39ff14]/25 rounded-full border-dashed pointer-events-none"
              />

              {/* Secondary glowing tech boundary ring */}
              <div className="absolute -inset-2 border-2 border-white/10 rounded-full pointer-events-none" />

              {/* Main Photo Housing - Interactive click toggles avatar */}
              <div
                role="button"
                tabIndex={0}
                aria-label="Toggle avatar between real photo and 3D cyber avatar"
                onClick={() => setAvatarMode((prev) => (prev === "real" ? "cyber" : "real"))}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setAvatarMode((prev) => (prev === "real" ? "cyber" : "real"));
                  }
                }}
                title="Click to switch avatar mode"
                className="relative w-full h-full rounded-full border-2 border-[#39ff14]/60 bg-gradient-to-b from-[#0a1a08] via-[#050505] to-[#000] backdrop-blur-md flex items-center justify-center overflow-hidden shadow-[0_0_35px_rgba(57,255,20,0.2)] cursor-pointer select-none transition-transform duration-300 group-hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#39ff14]"
              >
                {/* Radial spotlight behind the head */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(57,255,20,0.25)_0%,_transparent_70%)] pointer-events-none z-0" />

                {/* Animated Avatar switch */}
                <AnimatePresence mode="wait">
                  {avatarMode === "real" ? (
                    <motion.div
                      key="real"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full"
                    >
                      {/* Real Photo with Matched Cyberpunk Studio View */}
                      <img
                        src={about.image}
                        alt={`${profile.name} - Real Photo`}
                        className="w-full h-full object-cover object-[center_30%] scale-105 contrast-[1.04] brightness-[0.98] drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
                      />
                      {/* Ambient bottom vignette */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
                      {/* Soft Cyber Ambient Rim Overlay */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#39ff14]/15 via-transparent to-[#39ff14]/10 mix-blend-screen pointer-events-none" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="cyber"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full"
                    >
                      {/* Stylized 3D Cyberpunk Developer Avatar */}
                      <img
                        src={about.avatar3d || "/avatar-3d.jpg"}
                        alt={`${profile.name} - 3D Cyberpunk Avatar`}
                        className="w-full h-full object-cover object-center contrast-[1.04] brightness-[1.0] drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
                      />
                      {/* Ambient bottom vignette */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
                      {/* Holographic rim overlay */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#39ff14]/15 via-transparent to-[#39ff14]/10 mix-blend-screen pointer-events-none" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover Cue */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px] pointer-events-none">
                  <div className="px-3 py-1.5 rounded-full bg-black/85 border border-[#39ff14]/60 text-[#39ff14] text-xs font-mono font-medium flex items-center gap-1.5 shadow-lg shadow-black/80">
                    <Sparkles size={12} />
                    <span>Switch View</span>
                  </div>
                </div>
              </div>

              {/* Floating Cyberpunk HUD Tag */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0a0a0a]/95 border border-[#39ff14]/40 shadow-xl shadow-black/90 backdrop-blur-md flex items-center gap-2 whitespace-nowrap z-10 pointer-events-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39ff14] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39ff14]" />
                </span>
                <span className="text-[11px] font-mono tracking-widest text-gray-200 uppercase font-semibold">
                  {avatarMode === "real" ? "Identity // Real" : "Avatar // 3D Cyber"}
                </span>
              </div>
            </div>

            {/* Futuristic Mode Switcher Pills */}
            <div className="mt-8 flex items-center justify-center">
              <div className="p-1 rounded-full bg-[#0a0a0a]/90 border border-white/10 backdrop-blur-md flex items-center gap-1 shadow-xl shadow-black/80">
                <button
                  type="button"
                  onClick={() => setAvatarMode("real")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    avatarMode === "real"
                      ? "bg-[#39ff14] text-black shadow-[0_0_15px_rgba(57,255,20,0.4)] font-bold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <User size={13} />
                  <span>Real Photo</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAvatarMode("cyber")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    avatarMode === "cyber"
                      ? "bg-[#39ff14] text-black shadow-[0_0_15px_rgba(57,255,20,0.4)] font-bold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Sparkles size={13} />
                  <span>3D Cyber</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({
  icon: Icon,
  title,
  subtitle,
  detail,
}: {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  subtitle: string;
  detail: string;
}) => (
  <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#39ff14]/30 transition-colors">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-[#39ff14]/10 text-[#39ff14]">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-white font-semibold mb-1">{title}</h3>
        <p className="text-gray-300 font-medium text-sm">{subtitle}</p>
        <p className="text-gray-500 text-sm mt-1">{detail}</p>
      </div>
    </div>
  </div>
);
