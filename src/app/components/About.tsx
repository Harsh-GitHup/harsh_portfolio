import { motion } from "motion/react";
import { GraduationCap, Award, HelpCircle } from "lucide-react";
import { about, profile } from "../data/profile";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  GraduationCap,
  Award,
};

export const About = () => {
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
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-84 md:h-84">
              {/* Pulsing ambient neon aura */}
              <div className="absolute inset-0 bg-[#39ff14]/20 rounded-full blur-2xl animate-pulse" />

              {/* Outer rotating dashed cyber-ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-5 border border-[#39ff14]/25 rounded-full border-dashed"
              />

              {/* Secondary glowing tech boundary ring */}
              <div className="absolute -inset-2 border border-white/10 rounded-full" />

              {/* Main Photo Housing */}
              <div className="relative w-full h-full rounded-full border-2 border-[#39ff14]/60 bg-gradient-to-b from-[#0a1a08] via-[#050505] to-[#000] backdrop-blur-md flex items-center justify-center overflow-hidden shadow-[0_0_35px_rgba(57,255,20,0.2)]">
                {/* Radial spotlight behind the head */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(57,255,20,0.25)_0%,_transparent_70%)] pointer-events-none" />

                {/* Profile Image - scaled & aligned to fill nicely */}
                <img
                  src={about.image}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top scale-110 translate-y-3 contrast-[1.06] brightness-[0.98] drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
                />

                {/* Bottom Torso Fade - eliminates harsh cut */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/75 to-transparent pointer-events-none" />

                {/* Soft Cyber Ambient Rim Overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#39ff14]/15 via-transparent to-[#39ff14]/10 mix-blend-screen pointer-events-none" />
              </div>

              {/* Floating Cyberpunk HUD Tag */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0a0a0a]/90 border border-[#39ff14]/40 shadow-xl shadow-black/90 backdrop-blur-md flex items-center gap-2 whitespace-nowrap z-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39ff14] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39ff14]" />
                </span>
                <span className="text-[11px] font-mono tracking-widest text-gray-200 uppercase font-semibold">
                  Dev // Harsh
                </span>
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
  icon: any;
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
