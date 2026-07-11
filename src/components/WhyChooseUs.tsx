import React from "react";
import { Award, UserCheck, Music, Tv, ShieldAlert, Clock, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { motion } from "motion/react";

export const WhyChooseUs: React.FC = () => {
  const { theme } = useTheme();

  const features = [
    {
      id: "feat-1",
      icon: Award,
      title: "Certified Trainers",
      description: "Learn from globally recognized, certified master musicians and award-winning choreographers dedicated to raising your skill level."
    },
    {
      id: "feat-2",
      icon: UserCheck,
      title: "Individual Attention",
      description: "We maintain highly personalized, small batch sizes and 1-on-1 guidance structures to accelerate your artistic journey."
    },
    {
      id: "feat-3",
      icon: Music,
      title: "Stage Performances",
      description: "Build genuine stage confidence! We host quarterly academy recitals, live jams, and annual theater showcases for all students."
    },
    {
      id: "feat-4",
      icon: Tv,
      title: "Modern Studios",
      description: "State-of-the-art facilities equipped with professional acoustics, high-grade acoustic instruments, and wood-sprung dance floors."
    },
    {
      id: "feat-5",
      icon: Sparkles,
      title: "Affordable Fees",
      description: "We believe elite training should be accessible. Experience premier education with flexible payment plans and zero hidden costs."
    },
    {
      id: "feat-6",
      icon: Clock,
      title: "Flexible Timings",
      description: "Batches scheduled perfectly across weekdays and weekends, customized to fit school schedules and professional careers."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white dark:bg-luxury-navy-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16" id="why-header-block">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold-dark dark:text-luxury-gold mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-widest">Why Helicon</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-luxury-navy-900 dark:text-white mb-4">
            The Academy Standard
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-500 dark:text-gray-400 font-sans">
            We don't just teach courses; we nurture artistry. Here is what makes Helicon Academy Amritsar's most acclaimed conservatory.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="why-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col items-start ${
                  theme === "dark"
                    ? "bg-luxury-navy-800/40 border-white/5 hover:border-luxury-gold/40 hover:bg-luxury-navy-800/60 shadow-lg"
                    : "bg-white border-gray-100 hover:border-luxury-navy-900/20 hover:bg-gray-50 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
                }`}
                id={`why-card-${feature.id}`}
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-luxury-navy-900 dark:bg-white/5 border border-luxury-gold/20 text-luxury-gold flex items-center justify-center mb-6 shadow-md">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-luxury-navy-900 dark:text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-sans leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
