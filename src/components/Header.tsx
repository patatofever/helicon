import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { Music, Menu, X, Sun, Moon, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Why Us", href: "#why-choose-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? theme === "dark"
              ? "glass-nav py-3"
              : "glass-nav-light py-3 shadow-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 group"
              id="nav-logo"
            >
              <div className="bg-luxury-gold p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Music className="w-5 h-5 text-luxury-navy-900" />
              </div>
              <div className="flex flex-col">
                <span className={`font-serif font-bold text-xl tracking-wider transition-colors duration-300 ${
                  isScrolled
                    ? theme === "dark"
                      ? "text-white"
                      : "text-luxury-navy-900"
                    : "text-white"
                }`}>
                  HELICON
                </span>
                <span className={`text-[10px] font-sans tracking-[0.3em] uppercase font-medium -mt-1 transition-colors duration-300 ${
                  isScrolled
                    ? theme === "dark"
                      ? "text-luxury-gold"
                      : "text-luxury-gold-dark"
                    : "text-luxury-gold"
                }`}>
                  Academy
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative font-sans text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-luxury-gold"
                        : isScrolled
                        ? theme === "dark"
                          ? "text-gray-300 hover:text-white"
                          : "text-luxury-navy-800 hover:text-luxury-navy-950"
                        : "text-gray-200 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-luxury-gold"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Utility Buttons */}
            <div className="hidden md:flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isScrolled
                    ? theme === "dark"
                      ? "bg-white/5 hover:bg-white/10 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-luxury-navy-900"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
                aria-label="Toggle Theme"
                id="theme-toggle-btn"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-luxury-gold" />
                ) : (
                  <Moon className={`w-4 h-4 ${isScrolled ? "text-luxury-navy-900" : "text-white"}`} />
                )}
              </button>

              {/* Call to Action Button */}
              <a
                href="#admission"
                onClick={(e) => handleNavClick(e, "#admission")}
                className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden text-sm font-medium tracking-wide text-luxury-navy-900 transition duration-300 ease-out border-2 border-luxury-gold rounded-full shadow-md group"
                id="nav-enroll-btn"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-luxury-navy-800 group-hover:translate-x-0 ease">
                  Enroll Now
                </span>
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-luxury-navy-900 bg-luxury-gold transition-all duration-300 ease group-hover:translate-x-full">
                  Enroll Now
                </span>
                <span className="relative invisible">Enroll Now</span>
              </a>
            </div>

            {/* Mobile Actions and Menu Trigger */}
            <div className="flex md:hidden items-center gap-3">
              {/* Theme Toggle for Mobile */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isScrolled
                    ? theme === "dark"
                      ? "bg-white/5 text-white"
                      : "bg-gray-100 text-luxury-navy-900"
                    : "bg-white/10 text-white"
                }`}
                aria-label="Toggle Theme Mobile"
                id="theme-toggle-mobile"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-luxury-gold" />
                ) : (
                  <Moon className={`w-4 h-4 ${isScrolled ? "text-luxury-navy-900" : "text-white"}`} />
                )}
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isScrolled
                    ? theme === "dark"
                      ? "bg-white/5 text-white"
                      : "bg-gray-100 text-luxury-navy-900"
                    : "bg-white/10 text-white"
                }`}
                aria-label="Open menu"
                id="mobile-menu-trigger"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-x-0 top-[70px] z-40 p-6 md:hidden shadow-2xl ${
              theme === "dark" ? "bg-luxury-navy-950 border-b border-white/5" : "bg-white border-b border-gray-100"
            }`}
            id="mobile-nav-panel"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`font-sans py-2.5 text-base font-semibold border-b border-gray-100/10 dark:border-white/5 ${
                      isActive
                        ? "text-luxury-gold"
                        : theme === "dark"
                        ? "text-gray-300 hover:text-white"
                        : "text-luxury-navy-800 hover:text-luxury-navy-950"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#admission"
                  onClick={(e) => handleNavClick(e, "#admission")}
                  className="w-full bg-luxury-gold hover:bg-luxury-gold-hover text-luxury-navy-900 text-center font-semibold py-3 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 text-sm"
                >
                  Enroll Now
                </a>
                <a
                  href="tel:9855733559"
                  className="w-full flex items-center justify-center gap-2 border border-luxury-gold text-luxury-gold font-semibold py-3 rounded-full transition-colors duration-300 text-sm"
                >
                  <Phone className="w-4 h-4" /> Call Admissions
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
