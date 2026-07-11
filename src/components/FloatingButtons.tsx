import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const FloatingButtons: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3" id="floating-actions-container">
      
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/919855733559?text=Hi%20Helicon%20Academy!%20I'm%20interested%20in%20learning%20music%20or%20dance.%20Please%20provide%20the%20details."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] transition-all duration-300 border border-white/10 relative group"
        aria-label="Contact us on WhatsApp"
        id="whatsapp-floating-btn"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute right-16 bg-luxury-navy-950 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg border border-white/5">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Call Floating Button */}
      <motion.a
        href="tel:9855733559"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-luxury-gold text-luxury-navy-900 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(255,215,0,0.4)] hover:shadow-[0_4px_30px_rgba(255,215,0,0.6)] transition-all duration-300 border border-white/10 relative group"
        aria-label="Call admissions counselor"
        id="call-floating-btn"
      >
        <Phone className="w-6 h-6 fill-current" />
        <span className="absolute right-16 bg-luxury-navy-950 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg border border-white/5">
          Call Admissions
        </span>
      </motion.a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 bg-luxury-navy-900/80 dark:bg-white/10 text-luxury-gold hover:text-white rounded-full flex items-center justify-center shadow-lg hover:bg-luxury-navy-900 dark:hover:bg-white/25 backdrop-blur-md transition-all duration-300 border border-white/5 cursor-pointer"
            aria-label="Scroll to top of page"
            id="scroll-to-top-btn"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
};
