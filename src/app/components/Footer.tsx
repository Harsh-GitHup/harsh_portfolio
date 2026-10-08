import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { profile } from "../data/profile";

export const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Dev Portfolio. All rights reserved.
          </p>

          {/* Logo / Brand - Centered */}
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-white">HARSH</span>
            <span className="text-[#39ff14]">.DEV</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <SocialLink
              href={profile.socials.github}
              icon={<Github size={20} />}
            />
            <SocialLink
              href={profile.socials.linkedin}
              icon={<Linkedin size={20} />}
            />
            <SocialLink
              href={profile.socials.twitter}
              icon={<Twitter size={20} />}
            />
            <SocialLink
              href={`mailto:${profile.email}`}
              icon={<Mail size={20} />}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => {
  const isMailto = href.startsWith("mailto:");
  return (
    <a
      href={href}
      {...(!isMailto && { target: "_blank", rel: "noopener noreferrer" })}
      className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-[#39ff14] hover:bg-white/10 transition-all hover:scale-110"
    >
      {icon}
    </a>
  );
};
