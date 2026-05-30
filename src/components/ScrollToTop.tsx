import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronsUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after 250px of scroll
      const scrolled = window.scrollY;
      if (scrolled > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(scrolled / totalHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once at load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="scroll-to-top-btn"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg border border-slate-200 bg-white overflow-hidden cursor-pointer group flex items-center justify-center"
          title="Scroll to Top"
        >
          {/* 1. Base Layer (White Background with Blue Chevron) */}
          <div className="absolute inset-0 bg-white flex items-center justify-center z-0">
            <ChevronsUp className="w-6 h-6 text-[#2563EB] group-hover:-translate-y-1 transition-transform duration-300 ease-out" />
          </div>

          {/* 2. Top Fluid Layer (Blue Background with White Chevron) clipped to scroll height with smoothness */}
          <div
            className="absolute inset-0 bg-[#2563EB] flex items-center justify-center z-10 transition-[clip-path] duration-150 ease-out pointer-events-none"
            style={{
              clipPath: `inset(${(1 - scrollProgress) * 100}% 0% 0% 0%)`,
            }}
          >
            <ChevronsUp className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform duration-300 ease-out" />
          </div>

          {/* 3. Outer Radial Progress Ring for extra premium visual alignment */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none z-20">
            <circle
              cx="28"
              cy="28"
              r="26"
              className="stroke-slate-200/40 fill-none"
              strokeWidth="2"
            />
            <circle
              cx="28"
              cy="28"
              r="26"
              className="stroke-[#EAA814]/80 fill-none transition-all duration-100"
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * 26}`}
              strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress)}`}
              strokeLinecap="round"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
