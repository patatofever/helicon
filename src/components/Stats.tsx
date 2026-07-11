import React, { useEffect, useRef, useState } from "react";
import { stats } from "../data";
import * as Icons from "lucide-react";
import { motion, useInView } from "motion/react";
import { useTheme } from "./ThemeContext";

// Individual stat card that handles its own count-up animation
const StatCounter: React.FC<{
  value: number;
  suffix: string;
  label: string;
  iconName: string;
}> = ({ value, suffix, label, iconName }) => {
  const { theme } = useTheme();
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds animation
    const end = value;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * end);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  // Dynamically map Lucide icons
  const IconComponent = (Icons as any)[iconName] || Icons.Award;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center p-8 text-center border rounded-2xl transition-all duration-300 overflow-hidden group ${
        theme === "dark"
          ? "bg-luxury-navy-900 border-white/5 shadow-2xl"
          : "bg-white border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-luxury-navy-900/10"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className={`w-14 h-14 rounded-full border text-luxury-gold flex items-center justify-center mb-4 shadow-inner group-hover:scale-110 transition-transform duration-300 ${
        theme === "dark" ? "bg-white/5 border-luxury-gold/20" : "bg-luxury-navy-900/5 border-luxury-gold-dark/20"
      }`}>
        <IconComponent className="w-6 h-6" />
      </div>

      {/* Number */}
      <span className={`font-serif font-black text-4xl sm:text-5xl tracking-tight flex items-center ${
        theme === "dark" ? "text-white" : "text-luxury-navy-900"
      }`}>
        {count}
        <span className="text-luxury-gold ml-0.5">{suffix}</span>
      </span>

      {/* Label */}
      <span className={`text-xs sm:text-sm font-sans uppercase tracking-widest font-semibold mt-3 max-w-[200px] ${
        theme === "dark" ? "text-gray-400" : "text-gray-500"
      }`}>
        {label}
      </span>
    </div>
  );
};

export const Stats: React.FC = () => {
  const { theme } = useTheme();
  return (
    <section className="relative py-20 bg-gray-100 dark:bg-luxury-navy-950 transition-colors duration-300 overflow-hidden" id="stats-section">
      {/* Decorative vector overlays */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white dark:from-luxury-navy-900 to-transparent pointer-events-none" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-luxury-navy-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCounter
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              iconName={stat.iconName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
