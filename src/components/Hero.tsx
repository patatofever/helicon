import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "motion/react";
import { ArrowRight, Music, Sparkles, PhoneCall } from "lucide-react";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const btnGroupRef = useRef<HTMLDivElement>(null);
  const floatNotesRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1920&q=80",
      alt: "Classical Piano",
      subtitle: "Master the keys of expression",
      title: "Unlock Your Inner Virtuoso"
    },
    {
      url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1920&q=80",
      alt: "Contemporary Grace",
      subtitle: "Every movement tells a story",
      title: "Choreograph Your Dreams"
    },
    {
      url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1920&q=80",
      alt: "Elite Violin Studio",
      subtitle: "Elite music training for all ages",
      title: "Where Passion Meets Performance"
    }
  ];

  // Rotate slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create animated timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4, delay: 0.3 }
      );

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.0 },
        "-=0.9"
      );

      tl.fromTo(
        btnGroupRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      );

      // Simple mousemove parallax effect on the background
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 15;
        const yPos = (clientY / window.innerHeight - 0.5) * 15;

        gsap.to(".hero-parallax-bg", {
          x: xPos,
          y: yPos,
          duration: 1.5,
          ease: "power2.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert(); // clean up on unmount
  }, []);

  const handleScrollTo = (id: string) => {
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

  // Generate musical notes for floating animation
  const musicalNotes = ["♪", "♫", "♩", "♬", "♭", "♮", "♯"];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-luxury-navy-950 flex items-center justify-center"
    >
      {/* Background Images Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              index === currentSlide ? "opacity-40 scale-105" : "opacity-0 scale-100"
            } hero-parallax-bg`}
            style={{
              backgroundImage: `url(${slide.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transitionProperty: "opacity, transform"
            }}
          />
        ))}
        {/* Luxury Vignette and Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy-900 via-luxury-navy-900/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy-950/70 via-transparent to-luxury-navy-950/70 z-10" />
      </div>

      {/* Floating Musical Notes Animation */}
      <div
        ref={floatNotesRef}
        className="absolute inset-0 pointer-events-none z-20 overflow-hidden"
        id="floating-notes"
      >
        {Array.from({ length: 15 }).map((_, idx) => {
          const note = musicalNotes[idx % musicalNotes.length];
          const leftPos = `${(idx * 7 + 10) % 100}%`;
          const duration = 8 + (idx % 5) * 3;
          const delay = (idx % 4) * 2.5;
          const fontSize = 16 + (idx % 3) * 8;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: "105%", x: 0 }}
              animate={{
                opacity: [0, 0.6, 0.4, 0],
                y: "-10%",
                x: [0, (idx % 2 === 0 ? 30 : -30), (idx % 2 === 0 ? -20 : 20)]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
              }}
              style={{
                position: "absolute",
                left: leftPos,
                fontSize: `${fontSize}px`,
                color: "#FFD700",
                textShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
                fontWeight: "bold"
              }}
            >
              {note}
            </motion.div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-30">
        <div ref={subtitleRef} className="opacity-0 mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-luxury-gold animate-pulse" />
          <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-luxury-gold font-medium">
            {slides[currentSlide].subtitle}
          </span>
        </div>

        <h1
          ref={titleRef}
          className="opacity-0 text-4xl sm:text-6xl md:text-8xl font-serif font-black tracking-tight text-white mb-6 leading-[1.1] text-shadow"
          id="hero-heading"
        >
          {slides[currentSlide].title.split(" ").map((word, i, arr) => (
            <React.Fragment key={i}>
              {word === "Virtuoso" || word === "Performance" || word === "Dreams" ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-white">
                  {word}
                </span>
              ) : (
                word
              )}
              {i < arr.length - 1 ? " " : ""}
            </React.Fragment>
          ))}
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 mb-10 font-sans leading-relaxed tracking-wide">
          Unlock your true creative potential with world-class masters. Amritsar's premier academy for classical & contemporary music and dance.
        </p>

        {/* CTA Button Group */}
        <div
          ref={btnGroupRef}
          className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          id="hero-ctas"
        >
          {/* Enroll Now */}
          <button
            onClick={() => handleScrollTo("#admission")}
            className="w-full sm:w-auto px-8 py-4 bg-luxury-gold hover:bg-luxury-gold-hover text-luxury-navy-900 font-bold tracking-wider rounded-full shadow-[0_0_25px_rgba(255,215,0,0.3)] hover:shadow-[0_0_35px_rgba(255,215,0,0.5)] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer text-sm"
          >
            Enroll Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Explore Courses */}
          <button
            onClick={() => handleScrollTo("#courses")}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold tracking-wider rounded-full border border-white/20 backdrop-blur-md transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            Explore Courses
          </button>

          {/* Call Us Directly */}
          <a
            href="tel:9855733559"
            className="w-full sm:w-auto px-6 py-4 bg-transparent hover:bg-white/5 text-luxury-gold hover:text-white font-semibold tracking-wider rounded-full border border-luxury-gold/50 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 text-sm"
          >
            <PhoneCall className="w-4 h-4" />
            Call Academy
          </a>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-gray-400 font-medium">
          Scroll to explore
        </span>
        <motion.button
          onClick={() => handleScrollTo("#about")}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1.5 focus:outline-none cursor-pointer"
          aria-label="Scroll down to About Section"
        >
          <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full" />
        </motion.button>
      </div>
    </section>
  );
};
