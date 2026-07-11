import React from "react";
import { Award, Shield, Users2, Sparkles, Music4 } from "lucide-react";
import { motion } from "motion/react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-luxury-navy-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Photo Collage / Brand Graphic */}
          <div className="lg:col-span-5 relative" id="about-graphics">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-luxury-navy-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] aspect-[4/5] max-w-[360px] mx-auto lg:mx-0">
                <img
                  src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80"
                  alt="Helicon Student Playing Grand Piano"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Overlapping Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-6 -right-2 md:right-8 bg-luxury-gold text-luxury-navy-900 p-6 rounded-2xl shadow-2xl max-w-[220px] border border-white/20 z-20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-luxury-navy-900 text-luxury-gold p-2 rounded-full">
                    <Music4 className="w-5 h-5" />
                  </div>
                  <span className="font-serif font-black text-2xl">15+ Yrs</span>
                </div>
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-luxury-navy-800">
                  Nurturing Extraordinary Talent
                </p>
              </motion.div>
            </motion.div>

            {/* Background Decorative Graphic */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-luxury-gold/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-luxury-navy-600/10 dark:bg-luxury-navy-600/5 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Side: Copywriting */}
          <div className="lg:col-span-7 flex flex-col justify-center" id="about-text-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold-dark dark:text-luxury-gold mb-4">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  About Our Academy
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-luxury-navy-900 dark:text-white mb-6 leading-tight">
                Where Passion Meets{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold-dark to-luxury-gold">
                  Performance
                </span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-sans leading-relaxed mb-6">
                Established with a vision to cultivate excellence in creative expression,{" "}
                <strong>Helicon Academy</strong> is Amritsar's premier destination for complete music and dance education.
                We provide a luxurious, fully equipped environment where students are motivated to reach their absolute pinnacle.
              </p>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-sans leading-relaxed mb-8">
                Our curriculum is carefully crafted to serve all age groups: from <strong>children</strong> stepping into their first rhythms, to <strong>teenagers</strong> aiming for international certifications, and <strong>adults</strong> rekindling their creative passions. Our lessons are taught by verified, award-winning professionals who tailor learning to your personal pace.
              </p>

              {/* Quick Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {/* Pillar 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-luxury-navy-900 text-luxury-gold dark:bg-white/5 dark:text-luxury-gold flex items-center justify-center border border-luxury-gold/20 shadow-md">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-luxury-navy-900 dark:text-white mb-1">
                      Elite Mentorship
                    </h4>
                    <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                      Certified professionals with years of national and global experience.
                    </p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-luxury-navy-900 text-luxury-gold dark:bg-white/5 dark:text-luxury-gold flex items-center justify-center border border-luxury-gold/20 shadow-md">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-luxury-navy-900 dark:text-white mb-1">
                      Global Standards
                    </h4>
                    <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                      Standardized curriculum prepared for Trinity and global certifications.
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-luxury-navy-900 text-luxury-gold dark:bg-white/5 dark:text-luxury-gold flex items-center justify-center border border-luxury-gold/20 shadow-md">
                    <Users2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-luxury-navy-900 dark:text-white mb-1">
                      Inspiring Environment
                    </h4>
                    <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                      Modern soundproof studios, acoustic control, and wooden dance stages.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
