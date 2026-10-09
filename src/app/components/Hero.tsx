import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Eye } from "lucide-react";
import { profile } from "../data/profile";

export const Hero = () => {
  const [animatedViews, setAnimatedViews] = useState<number>(0);

  useEffect(() => {
    const STORAGE_KEY = "harsh_portfolio_profile_views";
    const SESSION_KEY = "harsh_portfolio_session_viewed";
    const BASE_VIEWS = 1420;
    const COUNTER_KEY = "harsh_kesharwani_portfolio_views";

    let isMounted = true;

    const startCountAnimation = (targetCount: number) => {
      const duration = 1200;
      const steps = 30;
      const stepDuration = duration / steps;
      let step = 0;

      const timer = setInterval(() => {
        if (!isMounted) {
          clearInterval(timer);
          return;
        }
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setAnimatedViews(Math.floor(easeOut * targetCount));

        if (step >= steps) {
          clearInterval(timer);
          setAnimatedViews(targetCount);
        }
      }, stepDuration);
    };

    // Load initial cached or base count while fetching live data
    let localCount = BASE_VIEWS;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed) && parsed >= BASE_VIEWS) {
        localCount = parsed;
      }
    }
    setAnimatedViews(localCount);

    const fetchRealTimeViews = async () => {
      try {
        const isNewSession = !sessionStorage.getItem(SESSION_KEY);
        // Hit endpoint increments globally on new session, or gets latest value on repeat views
        const endpoint = isNewSession
          ? `https://countapi.mileshilliard.com/api/v1/hit/${COUNTER_KEY}`
          : `https://countapi.mileshilliard.com/api/v1/get/${COUNTER_KEY}`;

        const res = await fetch(endpoint);
        if (!res.ok) throw new Error("Counter API network response was not ok");

        const data = await res.json();
        if (data && typeof data.value === "number") {
          const liveTotal = BASE_VIEWS + data.value;
          if (isNewSession) {
            sessionStorage.setItem(SESSION_KEY, "true");
          }
          localStorage.setItem(STORAGE_KEY, liveTotal.toString());
          if (isMounted) {
            startCountAnimation(liveTotal);
          }
          return;
        }
      } catch (err) {
        console.warn("Real-time view counter fallback to local storage:", err);
      }

      // Graceful offline fallback
      if (!sessionStorage.getItem(SESSION_KEY)) {
        localCount += 1;
        sessionStorage.setItem(SESSION_KEY, "true");
        localStorage.setItem(STORAGE_KEY, localCount.toString());
      }
      if (isMounted) {
        startCountAnimation(localCount);
      }
    };

    fetchRealTimeViews();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#39ff14]/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#39ff14]/30 bg-[#39ff14]/5 text-[#39ff14] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39ff14] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39ff14]" />
              </span>
              <span className="text-xs sm:text-sm font-medium tracking-wide uppercase">
                Available for work
              </span>
            </div>

            {/* Profile Views / Visitor Counter Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-gray-300 backdrop-blur-sm hover:border-[#39ff14]/40 hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all group">
              <Eye className="w-3.5 h-3.5 text-[#39ff14] group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-mono tracking-wide">
                <span className="text-white font-bold">
                  {animatedViews > 0 ? animatedViews.toLocaleString() : "..."}
                </span>
                <span className="text-gray-400 ml-1.5 font-sans">
                  Profile Views
                </span>
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6">
            {profile.tagline.split(" ").slice(0, 2).join(" ")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-emerald-600">
              {profile.tagline.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {profile.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#39ff14] text-black font-bold rounded-full flex items-center gap-2 hover:bg-[#32d911] transition-colors"
            >
              View Projects
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
