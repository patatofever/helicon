import React from "react";
import { useTheme } from "./ThemeContext";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export const Contact: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-luxury-navy-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16" id="contact-header-block">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold-dark dark:text-luxury-gold mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-widest">Find Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-luxury-navy-900 dark:text-white mb-4">
            Our Amritsar Campus
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-500 dark:text-gray-400 font-sans">
            Have any questions or want to visit? Drop by our fully-equipped studios or contact us directly.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-section-grid">
          
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between" id="contact-details-col">
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl border flex gap-4 ${
                theme === "dark"
                  ? "bg-luxury-navy-900/40 border-white/5 shadow-md"
                  : "bg-white border-gray-200/50 shadow-sm"
              }`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-luxury-gold/10 text-luxury-gold flex items-center justify-center border border-luxury-gold/15 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-luxury-navy-900 dark:text-white mb-1.5">
                  Academy Campus Address
                </h4>
                <p className="font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                  11 D, Majitha Rd, Near White Enclave, <br />
                  Himmat Singh Road, Sandhu Colony, <br />
                  Amritsar, Punjab 143001
                </p>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`p-6 rounded-2xl border flex gap-4 ${
                theme === "dark"
                  ? "bg-luxury-navy-900/40 border-white/5 shadow-md"
                  : "bg-white border-gray-200/50 shadow-sm"
              }`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-luxury-gold/10 text-luxury-gold flex items-center justify-center border border-luxury-gold/15 shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-luxury-navy-900 dark:text-white mb-1.5">
                  Call Admission Desk
                </h4>
                <div className="space-y-1">
                  <a
                    href="tel:9855733559"
                    className="block font-sans text-sm sm:text-base text-gray-500 dark:text-gray-300 hover:text-luxury-gold transition-colors font-medium"
                  >
                    +91-98557-33559
                  </a>
                  <a
                    href="tel:9855089007"
                    className="block font-sans text-sm sm:text-base text-gray-500 dark:text-gray-300 hover:text-luxury-gold transition-colors font-medium"
                  >
                    +91-98550-89007
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`p-6 rounded-2xl border flex gap-4 ${
                theme === "dark"
                  ? "bg-luxury-navy-900/40 border-white/5 shadow-md"
                  : "bg-white border-gray-200/50 shadow-sm"
              }`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-luxury-gold/10 text-luxury-gold flex items-center justify-center border border-luxury-gold/15 shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-luxury-navy-900 dark:text-white mb-1.5">
                  Email Support Desk
                </h4>
                <a
                  href="mailto:heliconmusicacademy@gmail.com"
                  className="font-sans text-sm sm:text-base text-gray-500 dark:text-gray-300 hover:text-luxury-gold transition-colors font-medium break-all"
                >
                  heliconmusicacademy@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Opening Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`p-6 rounded-2xl border flex gap-4 ${
                theme === "dark"
                  ? "bg-luxury-navy-900/40 border-white/5 shadow-md"
                  : "bg-white border-gray-200/50 shadow-sm"
              }`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-luxury-gold/10 text-luxury-gold flex items-center justify-center border border-luxury-gold/15 shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-luxury-navy-900 dark:text-white mb-1.5">
                  Academy Timing
                </h4>
                <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                  Monday – Saturday: <span className="font-semibold text-luxury-navy-900 dark:text-white">10:00 AM – 8:00 PM</span> <br />
                  Sunday: <span className="text-luxury-gold-dark dark:text-luxury-gold font-semibold">Special Batches Only</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 flex" id="contact-map-col">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`w-full rounded-3xl overflow-hidden border p-2 flex ${
                theme === "dark"
                  ? "bg-luxury-navy-900/40 border-white/5 shadow-2xl"
                  : "bg-white border-gray-200 shadow-md"
              }`}
            >
              <iframe
                title="Helicon Academy Google Map"
                src="https://maps.google.com/maps?q=Helicon%20Music%20%26%20Dance%20Academy%20Amritsar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full min-h-[350px] lg:min-h-full rounded-2xl border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
