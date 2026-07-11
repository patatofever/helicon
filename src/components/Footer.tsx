import React from "react";
import { Music, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, ArrowUp, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-luxury-navy-950 text-gray-300 pt-20 pb-8 border-t border-white/5 relative overflow-hidden" id="footer-section">
      {/* Dynamic Background Glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand details */}
          <div className="lg:col-span-4" id="footer-brand-col">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, "#home")}
              className="flex items-center gap-2 mb-6 group"
            >
              <div className="bg-luxury-gold p-2 rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Music className="w-5 h-5 text-luxury-navy-900" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl tracking-wider text-white">
                  HELICON
                </span>
                <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-luxury-gold font-medium -mt-1">
                  Academy
                </span>
              </div>
            </a>
            <p className="font-sans text-sm text-gray-400 leading-relaxed mb-6">
              "Where Passion Meets Performance." अमृतसर का अग्रणी संगीत और नृत्य संस्थान। Empowering creative souls through elite classical and contemporary training programs.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3" id="footer-social-icons">
              <a
                href="https://www.facebook.com/heliconmusicdanceacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-luxury-gold hover:text-luxury-navy-900 flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/helicon_academy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-luxury-gold hover:text-luxury-navy-900 flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-luxury-gold hover:text-luxury-navy-900 flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-luxury-gold hover:text-luxury-navy-900 flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2" id="footer-links-col">
            <h4 className="font-serif font-bold text-white text-lg mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-sm font-sans font-medium">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScrollTo(e, "#home")}
                  className="hover:text-luxury-gold transition-colors block"
                >
                  Home Screen
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScrollTo(e, "#about")}
                  className="hover:text-luxury-gold transition-colors block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleScrollTo(e, "#courses")}
                  className="hover:text-luxury-gold transition-colors block"
                >
                  Academy Courses
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleScrollTo(e, "#gallery")}
                  className="hover:text-luxury-gold transition-colors block"
                >
                  Life Gallery
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  onClick={(e) => handleScrollTo(e, "#why-choose-us")}
                  className="hover:text-luxury-gold transition-colors block"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleScrollTo(e, "#testimonials")}
                  className="hover:text-luxury-gold transition-colors block"
                >
                  Student Reviews
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="hover:text-luxury-gold transition-colors block"
                >
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div className="lg:col-span-3" id="footer-courses-col">
            <h4 className="font-serif font-bold text-white text-lg mb-6 tracking-wide">
              Featured Programs
            </h4>
            <ul className="space-y-3.5 text-sm font-sans font-medium">
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleScrollTo(e, "#courses")}
                  className="hover:text-luxury-gold transition-colors block text-gray-400 hover:text-white"
                >
                  Guitar Mastery Training
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleScrollTo(e, "#courses")}
                  className="hover:text-luxury-gold transition-colors block text-gray-400 hover:text-white"
                >
                  Classical Piano Course
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleScrollTo(e, "#courses")}
                  className="hover:text-luxury-gold transition-colors block text-gray-400 hover:text-white"
                >
                  Violin & Bowing Technique
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleScrollTo(e, "#courses")}
                  className="hover:text-luxury-gold transition-colors block text-gray-400 hover:text-white"
                >
                  Classical Kathak Dance
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleScrollTo(e, "#courses")}
                  className="hover:text-luxury-gold transition-colors block text-gray-400 hover:text-white"
                >
                  Bharatanatyam Recital Guide
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleScrollTo(e, "#courses")}
                  className="hover:text-luxury-gold transition-colors block text-gray-400 hover:text-white"
                >
                  Hip Hop & Street Choreography
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 space-y-4" id="footer-contact-col">
            <h4 className="font-serif font-bold text-white text-lg mb-6 tracking-wide">
              Admissions Desk
            </h4>
            <div className="space-y-4 text-sm font-sans">
              {/* Address */}
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 leading-relaxed">
                  11 D, Majitha Rd, Near White Enclave, Himmat Singh Road, Sandhu Colony, Amritsar, PB 143001
                </p>
              </div>

              {/* Phone */}
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <div className="text-gray-400">
                  <a href="tel:9855733559" className="hover:text-white block">
                    +91 98557 33559
                  </a>
                  <a href="tel:9855089007" className="hover:text-white block">
                    +91 98550 89007
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <a href="mailto:heliconmusicacademy@gmail.com" className="hover:text-white break-all text-gray-400">
                  heliconmusicacademy@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Block */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6" id="footer-bottom-block">
          {/* Copyright */}
          <span className="text-xs font-sans font-medium text-gray-500 text-center md:text-left">
            &copy; {currentYear} Helicon Academy. All Rights Reserved. Crafted with passion.
          </span>

          {/* Legal and Terms links */}
          <div className="flex items-center gap-6 text-xs font-sans font-medium text-gray-500" id="footer-bottom-legal-links">
            <a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className="hover:text-luxury-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className="hover:text-luxury-gold transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
