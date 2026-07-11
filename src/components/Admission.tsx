import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import { Send, MessageSquare, Sparkles, CheckCircle2, Award, Calendar, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { InquiryFormData } from "../types";

export const Admission: React.FC = () => {
  const { theme } = { ...useTheme() };
  const [formData, setFormData] = useState<InquiryFormData>({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: ""
  });

  const [errors, setErrors] = useState<Partial<InquiryFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const coursesList = [
    { category: "Music Courses", titles: ["Guitar Mastery", "Classical Piano", "Electronic Keyboard", "Violin Expression", "Drums & Percussion", "Indian Classical Tabla", "Harmonium & Vocal Guide", "Hindustani Classical Vocal", "Western & Pop Vocal", "Advanced Music Theory"] },
    { category: "Dance Courses", titles: ["Bharatanatyam", "Kathak", "Hip Hop & Street Dance", "Contemporary Grace", "Bollywood Choreography", "Freestyle & Open Choreography", "Kids Creative Movement", "Wedding & Event Choreography", "Zumba Fitness"] }
  ];

  const validate = (): boolean => {
    const tempErrors: Partial<InquiryFormData> = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      tempErrors.phone = "Provide a valid 10-digit mobile number";
    }
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Provide a valid email address";
    }
    if (!formData.course) tempErrors.course = "Please select a course";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof InquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Clean form
      setFormData({ name: "", phone: "", email: "", course: "", message: "" });
    }, 1500);
  };

  const handleWhatsAppRedirect = () => {
    if (!formData.name.trim() || !formData.course) {
      alert("Please fill in at least your Name and select a Course to generate a customized WhatsApp enquiry!");
      return;
    }

    const messageString = `Hi Helicon Academy! I would like to make an admission enquiry:
*Name:* ${formData.name}
*Phone:* ${formData.phone || "Not specified"}
*Email:* ${formData.email || "Not specified"}
*Course:* ${formData.course}
*Message:* ${formData.message || "I'd like to schedule a trial session!"}`;

    const encodedMessage = encodeURIComponent(messageString);
    const whatsappUrl = `https://wa.me/919855733559?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="admission" className="py-24 bg-white dark:bg-luxury-navy-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Admission Info */}
          <div className="lg:col-span-5" id="admission-info-block">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold-dark dark:text-luxury-gold mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-widest">Enrollment open</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-luxury-navy-900 dark:text-white mb-6 leading-tight">
              Begin Your Artistic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold-dark to-luxury-gold">
                Journey Today
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-300 font-sans leading-relaxed mb-8">
              Securing your slot at Helicon Academy is easy. Fill in the enquiry form or ping us on WhatsApp to lock in your free trial consultation session.
            </p>

            {/* Steps timeline */}
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center font-bold text-sm border border-luxury-gold/20">
                  1
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-luxury-navy-900 dark:text-white mb-1">
                    Submit Inquiry
                  </h4>
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Fill in your contact details and desired music or dance program.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center font-bold text-sm border border-luxury-gold/20">
                  2
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-luxury-navy-900 dark:text-white mb-1">
                    Free Consultation & Trial
                  </h4>
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Attend a diagnostic class to evaluate pitch, rhythm, or physical flexibility.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center font-bold text-sm border border-luxury-gold/20">
                  3
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-luxury-navy-900 dark:text-white mb-1">
                    Get Certified
                  </h4>
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                    Begin structured masterclasses and prepare for global certifications & stage recitals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Area */}
          <div className="lg:col-span-7 w-full" id="admission-form-wrapper">
            <div
              className={`p-8 sm:p-10 rounded-3xl relative overflow-hidden transition-all duration-300 ${
                theme === "dark"
                  ? "bg-luxury-navy-800/40 border border-white/5 shadow-2xl"
                  : "bg-gray-50 border border-gray-200/50 shadow-lg"
              }`}
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="admission-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-luxury-navy-900 dark:text-white mb-1">
                        Send Admission Inquiry
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 font-sans">
                        Fields marked with * are required
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name-input" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                          Your Name *
                        </label>
                        <input
                          id="name-input"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3.5 rounded-xl border font-sans text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 ${
                            errors.name
                              ? "border-red-500 bg-red-500/5"
                              : theme === "dark"
                              ? "border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-luxury-gold"
                              : "border-gray-200 bg-white text-luxury-navy-900 placeholder-gray-400 focus:border-luxury-navy-900"
                          }`}
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-xs text-red-500 font-semibold mt-1.5">{errors.name}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone-input" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                          Phone Number *
                        </label>
                        <input
                          id="phone-input"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3.5 rounded-xl border font-sans text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 ${
                            errors.phone
                              ? "border-red-500 bg-red-500/5"
                              : theme === "dark"
                              ? "border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-luxury-gold"
                              : "border-gray-200 bg-white text-luxury-navy-900 placeholder-gray-400 focus:border-luxury-navy-900"
                          }`}
                          placeholder="98557xxxxx"
                        />
                        {errors.phone && <p className="text-xs text-red-500 font-semibold mt-1.5">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div>
                        <label htmlFor="email-input" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                          Email Address
                        </label>
                        <input
                          id="email-input"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3.5 rounded-xl border font-sans text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 ${
                            errors.email
                              ? "border-red-500 bg-red-500/5"
                              : theme === "dark"
                              ? "border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-luxury-gold"
                              : "border-gray-200 bg-white text-luxury-navy-900 placeholder-gray-400 focus:border-luxury-navy-900"
                          }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-xs text-red-500 font-semibold mt-1.5">{errors.email}</p>}
                      </div>

                      {/* Course Selection */}
                      <div>
                        <label htmlFor="course-select" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                          Desired Program *
                        </label>
                        <select
                          id="course-select"
                          name="course"
                          value={formData.course}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3.5 rounded-xl border font-sans text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 ${
                            errors.course
                              ? "border-red-500 bg-red-500/5"
                              : theme === "dark"
                              ? "border-white/10 bg-luxury-navy-900 text-white focus:border-luxury-gold"
                              : "border-gray-200 bg-white text-luxury-navy-900 focus:border-luxury-navy-900"
                          }`}
                        >
                          <option value="">Select a Course</option>
                          {coursesList.map((group) => (
                            <optgroup key={group.category} label={group.category} className={theme === "dark" ? "text-gray-400 bg-luxury-navy-950" : "text-gray-500 bg-white"}>
                              {group.titles.map((title) => (
                                <option key={title} value={title} className={theme === "dark" ? "text-white bg-luxury-navy-900" : "text-luxury-navy-900 bg-white"}>
                                  {title}
                                </option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                        {errors.course && <p className="text-xs text-red-500 font-semibold mt-1.5">{errors.course}</p>}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message-textarea" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Message / Scheduling Note
                      </label>
                      <textarea
                        id="message-textarea"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3.5 rounded-xl border font-sans text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 ${
                          theme === "dark"
                            ? "border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-luxury-gold"
                            : "border-gray-200 bg-white text-luxury-navy-900 placeholder-gray-400 focus:border-luxury-navy-900"
                        }`}
                        placeholder="Tell us about your prior background or best trial timings..."
                      />
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      {/* Standard Form Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-luxury-navy-900 text-luxury-gold dark:bg-luxury-gold dark:text-luxury-navy-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-102 active:scale-98 transition-all duration-300 shadow-xl cursor-pointer disabled:opacity-50 text-sm"
                        id="form-submit-btn"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            Sending Inquiry...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Submit Inquiry Form
                          </>
                        )}
                      </button>

                      {/* Direct WhatsApp Generation */}
                      <button
                        type="button"
                        onClick={handleWhatsAppRedirect}
                        className="bg-transparent text-luxury-gold border border-luxury-gold/50 hover:border-white hover:text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer text-sm"
                        id="form-whatsapp-btn"
                      >
                        <MessageSquare className="w-4 h-4 text-luxury-gold" />
                        Inquire via WhatsApp
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="admission-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 flex flex-col items-center"
                    id="admission-success-block"
                  >
                    <div className="w-16 h-16 bg-luxury-gold/15 rounded-full flex items-center justify-center text-luxury-gold mb-6 shadow-inner animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-black text-luxury-navy-900 dark:text-white mb-3">
                      Inquiry Submitted Successfully!
                    </h3>
                    <p className="max-w-md text-sm sm:text-base text-gray-500 dark:text-gray-300 font-sans leading-relaxed mb-8">
                      Thank you for choosing Helicon Academy. Our admissions officer will review your parameters and contact you via phone/email within the next 24 hours to finalize your trial slot.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-luxury-navy-900 text-luxury-gold dark:bg-luxury-gold dark:text-luxury-navy-900 font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer text-sm"
                    >
                      Enquire for another course
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};
