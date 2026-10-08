import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">
            © 2026 Dev Portfolio. All rights reserved.
          </p>

          {/* Logo / Brand - Centered */}
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-white">HARSH</span>
            <span className="text-[#39ff14]">.DEV</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <SocialLink
              href="https://github.com/Harsh-GitHup"
              icon={<Github size={20} />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/harshkesharwani"
              icon={<Linkedin size={20} />}
            />
            <SocialLink
              href="https://x.com/HarshKesha91325"
              icon={<Twitter size={20} />}
            />
            <SocialLink
              href="mailto:harshkesharwani037@gmail.com"
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
