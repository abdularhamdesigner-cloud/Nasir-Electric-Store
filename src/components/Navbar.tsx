import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Menu, X, User, Home, Sun, Lightbulb, Phone, Star, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

const navLinks = [
  { label: 'About Store', view: 'home', category: 'all', icon: Home },
  { label: 'Solar Panels', view: 'solar', icon: Sun },
  { label: 'Lighting', view: 'lighting', icon: Lightbulb },
  { label: 'Reviews', view: 'testimonials', icon: Star },
  { label: 'Contact', view: 'contact', icon: Phone },
];

export default function Navbar() {
  const { setSelectedCategory, currentView, setCurrentView } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: string, category?: string) => {
    setCurrentView(view);
    if (category) {
      setSelectedCategory(category);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`w-full z-50 sticky top-0 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/60 py-2' 
          : 'bg-[#07162C]/95 md:bg-[#07162C]/85 backdrop-blur-md border-b border-white/10 py-3 md:py-4'
      }`}
    >
      {/* Main Brand Navbar - Ultra clean and minimalist */}
      <nav className="w-full relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          
          {/* Elegant Logo with Sunburst design */}
          <div 
            onClick={() => handleNavClick('home', 'all')} 
            className="flex items-center gap-2 cursor-pointer select-none shrink-0"
          >
            <div className="flex items-center gap-2.5">
              <Logo size={isScrolled ? 36 : 42} className="hover:scale-105 transition-transform duration-300" />

              <div className="flex flex-col text-left">
                <span className={`font-display font-black text-md md:text-lg tracking-tight leading-none uppercase transition-colors duration-300 ${isScrolled ? 'text-[#1E293B]' : 'text-white'}`}>
                  Nasir
                </span>
                <span className={`text-[9px] md:text-[10px] font-sans font-bold tracking-[0.05em] uppercase leading-tight transition-colors duration-300 ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>
                  Electric Store
                </span>
              </div>
            </div>
          </div>

          {/* Links: Premium Dynamic Navigation with sliding animations shown directly on all screens */}
          <div className="flex items-center justify-start md:justify-center gap-1 sm:gap-2.5 text-sm font-semibold select-none relative overflow-x-auto scrollbar-none py-1.5 w-full md:w-auto -mx-4 px-4 sm:mx-0 sm:px-0 flex-nowrap">
            {navLinks.map((link) => {
              const LinkIcon = link.icon;
              const isActive = currentView === link.view;
              return (
                <button
                  key={link.label}
                  onClick={(e) => {
                    e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                    handleNavClick(link.view, link.category);
                  }}
                  className={`relative px-2.5 xs:px-3 sm:px-4 py-1 sm:py-1.5 md:py-2 transition-all duration-300 font-sans cursor-pointer text-[11px] xs:text-xs sm:text-[13px] tracking-tight leading-tight rounded-full flex items-center justify-center gap-1 sm:gap-1.5 shrink-0 border ${
                    isActive
                      ? isScrolled
                        ? 'bg-[#F1C40F]/15 text-[#EAA814] font-black border-[#F1C40F]/35 shadow-xs scale-102'
                        : 'bg-[#F1C40F]/20 text-[#F1C40F] font-black border-[#F1C40F]/50 shadow-xs scale-102'
                      : isScrolled
                        ? 'text-slate-650 hover:text-[#F39C12] hover:bg-slate-100 border-transparent'
                        : 'text-slate-200 hover:text-[#F1C40F] hover:bg-white/5 border-transparent'
                  }`}
                >
                  <LinkIcon className="w-3.5 h-3.5 opacity-85" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

        </div>

      </nav>
    </header>
  );
}
