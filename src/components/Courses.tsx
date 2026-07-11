import React, { useState } from "react";
import { musicCourses, danceCourses } from "../data";
import { Course } from "../types";
import { useTheme } from "./ThemeContext";
import { motion, AnimatePresence } from "motion/react";
import * as Icons from "lucide-react";

// Helper component to render Lucide Icons dynamically
const DynamicIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  // Direct mapping check
  const IconComponent = (Icons as any)[name];
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  // Generic safe fallbacks
  return <Icons.Music className={className} />;
};

export const Courses: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<"music" | "dance">("music");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const displayedCourses = activeTab === "music" ? musicCourses : danceCourses;

  const handleEnrollClick = (courseTitle: string) => {
    setSelectedCourse(null);
    // Find form select
    const formElement = document.getElementById("admission");
    if (formElement) {
      const headerOffset = 80;
      const elementPosition = formElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Set input value
      setTimeout(() => {
        const selectEl = document.getElementById("course-select") as HTMLSelectElement;
        if (selectEl) {
          selectEl.value = courseTitle;
          // Trigger a change event so state updates
          selectEl.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }, 500);
    }
  };

  return (
    <section id="courses" className="py-24 bg-gray-50 dark:bg-luxury-navy-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center mb-16" id="courses-header-block">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold-dark dark:text-luxury-gold mb-4">
            <Icons.BookOpen className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-widest">Our Programs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-luxury-navy-900 dark:text-white mb-4">
            Academy Masterclasses
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-500 dark:text-gray-400 font-sans">
            Explore our professional suite of certified music and dance courses carefully customized for kids, teenagers, and ambitious adults.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12" id="course-tab-bar">
          <div className="inline-flex p-1.5 rounded-full bg-gray-200/50 dark:bg-white/5 border border-gray-300/20 dark:border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("music")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === "music"
                  ? "bg-luxury-navy-900 text-luxury-gold shadow-lg"
                  : "text-gray-600 dark:text-gray-300 hover:text-luxury-navy-900 dark:hover:text-white"
              }`}
            >
              <Icons.Music className="w-4 h-4" />
              Music Department
            </button>
            <button
              onClick={() => setActiveTab("dance")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === "dance"
                  ? "bg-luxury-navy-900 text-luxury-gold shadow-lg"
                  : "text-gray-600 dark:text-gray-300 hover:text-luxury-navy-900 dark:hover:text-white"
              }`}
            >
              <Icons.Sparkles className="w-4 h-4" />
              Dance Department
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="courses-grid"
        >
          <AnimatePresence mode="popLayout">
            {displayedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative group rounded-2xl p-6 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  theme === "dark"
                    ? "glass-panel hover:border-luxury-gold/40 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                    : "glass-panel-light hover:border-luxury-navy-900/30 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                }`}
              >
                {/* Background Shimmer */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-full blur-2xl group-hover:bg-luxury-gold/15 transition-colors duration-500" />
                
                {/* Header Content */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-luxury-navy-900 dark:bg-white/5 border border-luxury-gold/30 text-luxury-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <DynamicIcon name={course.iconName} className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold tracking-widest uppercase bg-luxury-gold/10 text-luxury-gold-dark dark:text-luxury-gold px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-luxury-navy-900 dark:text-white mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 font-sans leading-relaxed mb-6 line-clamp-3">
                    {course.description}
                  </p>
                </div>

                {/* Footer Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-white/5">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                    <Icons.Calendar className="w-3.5 h-3.5" />
                    {course.duration}
                  </span>
                  
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="text-sm font-semibold tracking-wider text-luxury-gold-dark dark:text-luxury-gold group-hover:text-luxury-navy-900 dark:group-hover:text-white flex items-center gap-1 transition-colors duration-300 cursor-pointer"
                  >
                    Learn More
                    <Icons.ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Learn More Lightbox Modal Overlay */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="course-details-modal">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`relative w-full max-w-lg rounded-2xl overflow-hidden p-8 z-10 ${
                theme === "dark"
                  ? "bg-luxury-navy-900 border border-white/10 text-white"
                  : "bg-white border border-gray-200 text-luxury-navy-900"
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100/10 dark:hover:bg-white/5 text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Close modal"
              >
                <Icons.X className="w-5 h-5" />
              </button>

              {/* Course Title Block */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-luxury-navy-950 dark:bg-white/5 border border-luxury-gold/30 text-luxury-gold flex items-center justify-center shadow-2xl">
                  <DynamicIcon name={selectedCourse.iconName} className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-luxury-gold font-bold">
                    {selectedCourse.category} program
                  </span>
                  <h3 className="text-2xl font-serif font-bold mt-0.5">
                    {selectedCourse.title}
                  </h3>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-gray-100/40 dark:bg-white/5 border border-gray-200/20 dark:border-white/5">
                <div>
                  <span className="text-[10px] font-sans text-gray-400 uppercase tracking-widest block mb-0.5">
                    Duration
                  </span>
                  <span className="font-semibold text-sm flex items-center gap-1">
                    <Icons.Clock className="w-4 h-4 text-luxury-gold" />
                    {selectedCourse.duration}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-sans text-gray-400 uppercase tracking-widest block mb-0.5">
                    Class Level
                  </span>
                  <span className="font-semibold text-sm flex items-center gap-1">
                    <Icons.Award className="w-4 h-4 text-luxury-gold" />
                    {selectedCourse.level}
                  </span>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300 font-sans leading-relaxed mb-6">
                {selectedCourse.description}
              </p>

              {/* Syllabus/Highlights */}
              <div className="mb-8">
                <h4 className="text-xs font-semibold tracking-widest uppercase text-luxury-gold mb-3">
                  What You Will Learn
                </h4>
                <ul className="space-y-2.5">
                  {selectedCourse.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                      <Icons.CheckCircle2 className="w-4 h-4 text-luxury-gold flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button
                  onClick={() => handleEnrollClick(selectedCourse.title)}
                  className="flex-1 bg-luxury-gold hover:bg-luxury-gold-hover text-luxury-navy-900 font-bold py-3.5 px-6 rounded-full text-center transition-all duration-300 shadow-xl hover:shadow-luxury-gold/20 transform hover:-translate-y-0.5 cursor-pointer text-sm"
                >
                  Apply & Inquire Now
                </button>
                <a
                  href={`https://wa.me/919855733559?text=Hi%20Helicon%20Academy!%20I'm%20interested%20in%20enrolling%20for%20the%20${encodeURIComponent(
                    selectedCourse.title
                  )}%20course.%20Please%20share%20the%20fee%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 border border-gray-300/30 dark:border-white/10 hover:border-luxury-gold rounded-full flex items-center justify-center hover:bg-luxury-gold/5 transition-colors group"
                >
                  <Icons.MessageSquare className="w-5 h-5 text-luxury-gold group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
