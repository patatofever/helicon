import React, { useState } from "react";
import { galleryItems } from "../data";
import { useTheme } from "./ThemeContext";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon, Sparkles } from "lucide-react";

export const Gallery: React.FC = () => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState<"all" | "music" | "dance" | "events">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { label: string; value: "all" | "music" | "dance" | "events" }[] = [
    { label: "Show All", value: "all" },
    { label: "Music Department", value: "music" },
    { label: "Dance Department", value: "dance" },
    { label: "Academy Events", value: "events" }
  ];

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-24 bg-gray-50 dark:bg-luxury-navy-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16" id="gallery-header-block">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold-dark dark:text-luxury-gold mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-widest">Visual Tour</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-luxury-navy-900 dark:text-white mb-4">
            Academy Life Gallery
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-500 dark:text-gray-400 font-sans">
            Witness the creative energy, live recitals, and rigorous masterclasses of Helicon Academy.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" id="gallery-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setFilter(cat.value);
                setLightboxIndex(null); // Reset lightbox logic to align with filtered list indexes
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                filter === cat.value
                  ? "bg-luxury-navy-900 dark:bg-luxury-gold text-luxury-gold dark:text-luxury-navy-900 shadow-md scale-105"
                  : "bg-gray-200/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative group rounded-2xl overflow-hidden aspect-[4/3] bg-luxury-navy-900 shadow-lg cursor-pointer"
                onClick={() => setLightboxIndex(index)}
                id={`gallery-item-${item.id}`}
              >
                {/* Image */}
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Glassmorphic Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy-950/90 via-luxury-navy-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-luxury-gold font-bold">
                        {item.category}
                      </span>
                      <h4 className="text-white font-serif font-bold text-lg mt-1 truncate max-w-[200px]">
                        {item.title}
                      </h4>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-luxury-gold text-luxury-navy-900 flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox full-screen overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md" id="gallery-lightbox">
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors duration-300 z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors duration-300 z-10"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image View */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[80vh] flex flex-col items-center"
            >
              <img
                src={filteredItems[lightboxIndex].url}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="text-center mt-6">
                <span className="text-xs tracking-[0.25em] uppercase text-luxury-gold font-bold">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h4 className="text-white font-serif font-bold text-xl mt-1.5">
                  {filteredItems[lightboxIndex].title}
                </h4>
              </div>
            </motion.div>

            {/* Right Nav Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors duration-300 z-10"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
