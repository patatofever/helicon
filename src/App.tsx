import React, { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Courses } from "./components/Courses";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Stats } from "./components/Stats";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Admission } from "./components/Admission";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";
import { motion, AnimatePresence } from "motion/react";
import { Music, Sparkles } from "lucide-react";

const MainAppContent: React.FC = () => {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Load screen timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Track scroll position to update active nav items automatically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "courses", "why-choose-us", "gallery", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 160; // offset for nav height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={theme === "dark" ? "bg-luxury-navy-950 text-white" : "bg-white text-luxury-navy-900"}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-luxury-navy-950 z-[9999] flex flex-col items-center justify-center text-center"
            id="app-preloader"
          >
            {/* Elegant Spinning Music Badge */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              className="w-16 h-16 rounded-full bg-luxury-gold/15 flex items-center justify-center text-luxury-gold border border-luxury-gold/30 shadow-[0_0_20px_rgba(255,215,0,0.2)] mb-6"
            >
              <Music className="w-8 h-8" />
            </motion.div>

            {/* Academy Title and Slogan */}
            <h1 className="font-serif font-black text-3xl tracking-widest text-white uppercase">
              HELICON
            </h1>
            <span className="text-xs font-sans tracking-[0.4em] uppercase text-luxury-gold font-medium mt-1">
              Academy
            </span>

            {/* Glowing quote */}
            <div className="mt-8 flex items-center gap-1.5 justify-center text-[10px] sm:text-xs font-sans tracking-[0.2em] text-gray-400 uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-luxury-gold animate-pulse" />
              Where Passion Meets Performance
            </div>
            
            {/* Pulse Indicator */}
            <div className="w-40 h-0.5 bg-white/10 rounded-full overflow-hidden mt-6">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1/2 h-full bg-luxury-gold relative"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
            id="app-main-layout"
          >
            {/* Header / Nav */}
            <Header activeSection={activeSection} />

            {/* Content Body */}
            <main className="relative">
              {/* Home Section */}
              <Hero />

              {/* About Section */}
              <About />

              {/* Courses Grid */}
              <Courses />

              {/* Features / Why Us Section */}
              <WhyChooseUs />

              {/* Counters Statistics */}
              <Stats />

              {/* Life Gallery */}
              <Gallery />

              {/* Reviews Slider */}
              <Testimonials />

              {/* FAQ Accordion */}
              <FAQ />

              {/* Admission Enquiry */}
              <Admission />

              {/* Maps & Address */}
              <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Hover Floating Actions */}
            <FloatingButtons />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <MainAppContent />
    </ThemeProvider>
  );
}
