import React, { useState } from "react";
import { faqs } from "../data";
import { useTheme } from "./ThemeContext";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

// Individual Accordion Item
const AccordionItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ question, answer, isOpen, onToggle }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`border-b transition-colors duration-300 ${
        theme === "dark" ? "border-white/5" : "border-gray-200"
      }`}
    >
      {/* Trigger Button */}
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span
          className={`font-serif font-bold text-base sm:text-lg transition-colors duration-300 ${
            isOpen
              ? "text-luxury-gold"
              : theme === "dark"
              ? "text-white group-hover:text-luxury-gold"
              : "text-luxury-navy-900 group-hover:text-luxury-gold-dark"
          }`}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-400 group-hover:text-luxury-gold ml-4 flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>

      {/* Answer Panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm sm:text-base text-gray-500 dark:text-gray-400 font-sans leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-luxury-navy-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16" id="faq-header-block">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold-dark dark:text-luxury-gold mb-4">
            <HelpCircle className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-widest">Support FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-luxury-navy-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-500 dark:text-gray-400 font-sans">
            Got questions? We've got answers. Explore our detailed FAQs or reach out directly to our admissions counselor.
          </p>
        </div>

        {/* Accordion List */}
        <div
          className="p-6 sm:p-10 rounded-2xl bg-white dark:bg-luxury-navy-900 border border-gray-200/50 dark:border-white/5 shadow-xl"
          id="faq-accordion-list"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
