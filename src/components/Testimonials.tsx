import React, { useState } from "react";
import { testimonials } from "../data";
import { useTheme } from "./ThemeContext";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles } from "lucide-react";

export const Testimonials: React.FC = () => {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-luxury-navy-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16" id="testimonials-header-block">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold-dark dark:text-luxury-gold mb-4">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-luxury-navy-900 dark:text-white mb-4">
            Voice of Our Virtuosos
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-500 dark:text-gray-400 font-sans">
            Hear from our students and supportive parents who have unlocked their artistic potentials with Helicon Academy.
          </p>
        </div>

        {/* Testimonial Slider Panel */}
        <div className="relative" id="testimonial-slider-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className={`p-8 sm:p-12 rounded-3xl relative overflow-hidden ${
                theme === "dark"
                  ? "bg-luxury-navy-800/40 border border-white/5 shadow-2xl"
                  : "bg-gray-50 border border-gray-200/50 shadow-md"
              }`}
              id={`testimonial-card-${testimonials[activeIndex].id}`}
            >
              {/* Giant decorative quote icon */}
              <Quote className="absolute -top-4 -right-4 w-40 h-40 text-luxury-gold/5 dark:text-luxury-gold/5 transform rotate-12" />

              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                {/* Avatar / Photo */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-luxury-gold shadow-lg">
                      <img
                        src={testimonials[activeIndex].avatar}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                    {/* Tiny quote badge */}
                    <div className="absolute -bottom-1 -right-1 bg-luxury-gold p-1.5 rounded-full text-luxury-navy-900">
                      <Quote className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                </div>

                {/* Content text */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating Stars */}
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                    ))}
                  </div>

                  {/* Quote Paragraph */}
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-200 font-sans italic leading-relaxed mb-6">
                    "{testimonials[activeIndex].quote}"
                  </p>

                  {/* Student Signature */}
                  <div>
                    <h4 className="font-serif font-black text-xl text-luxury-navy-900 dark:text-white">
                      {testimonials[activeIndex].name}
                    </h4>
                    <span className="text-xs font-semibold text-luxury-gold-dark dark:text-luxury-gold uppercase tracking-widest mt-0.5 block">
                      {testimonials[activeIndex].role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center md:justify-end items-center gap-4 mt-8" id="slider-nav-arrows">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-full border border-gray-300/30 dark:border-white/5 hover:border-luxury-gold bg-gray-100/20 dark:bg-white/5 text-gray-500 hover:text-luxury-gold transition-colors duration-300 cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-sm tracking-widest text-gray-400">
              {activeIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3.5 rounded-full border border-gray-300/30 dark:border-white/5 hover:border-luxury-gold bg-gray-100/20 dark:bg-white/5 text-gray-500 hover:text-luxury-gold transition-colors duration-300 cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
