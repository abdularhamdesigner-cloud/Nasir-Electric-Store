import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Home, Sun, Lightbulb, Phone, Star, Info, Package, Zap, 
  Menu, X, Cpu, BatteryCharging, Wind, ShieldAlert, Milestone, Plug, Sparkles, ChevronRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

// The main navigation links requested on top (extremely crisp and high-contrast styling)
const navLinks = [
  { label: 'Home', view: 'home', category: 'all', icon: Home },
  { label: 'All Products', view: 'products', category: 'all', icon: Package },
  { label: 'About Us', view: 'about', icon: Info },
  { label: 'Reviews', view: 'testimonials', icon: Star },
  { label: 'Contact', view: 'contact', icon: Phone },
];

// List form categories specifically for the side drawer
const sidebarCategories = [
  { id: 'solar', name: 'Solar Solutions', icon: Sun, color: '#F1C40F' },
  { id: 'inverters', name: 'Inverters & UPS', icon: Cpu, color: '#3498DB' },
  { id: 'batteries', name: 'Batteries & Storage', icon: BatteryCharging, color: '#2ECC71' },
  { id: 'electronics', name: 'Fans & Electronics', icon: Wind, color: '#E67E22' },
  { id: 'wires', name: 'Wires & Cables', icon: Milestone, color: '#9B59B6' },
  { id: 'breakers', name: 'Electrical Components', icon: ShieldAlert, color: '#E74C3C' },
  { id: 'lighting', name: 'Outdoor & Spotlights', icon: Lightbulb, color: '#1ABC9C' },
  { id: 'decorative', name: 'Rope & Pixel Lights', icon: Sparkles, color: '#F39C12' },
  { id: 'accessories', name: 'Accessories & Switches', icon: Plug, color: '#95A5A6' },
];

export default function Navbar() {
  const { setSelectedCategory, currentView, setCurrentView, setActiveProductDetail } = useApp();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
    if (setActiveProductDetail) {
      setActiveProductDetail(null);
    }
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelect = (categoryId: string) => {
    setIsSidebarOpen(false);
    
    // Set appropriate categories and route to designated view
    if (categoryId === 'solar') {
      setCurrentView('solar');
    } else if (categoryId === 'lighting') {
      setCurrentView('lighting');
    } else {
      setCurrentView('products');
    }
    
    setSelectedCategory(categoryId);
    if (setActiveProductDetail) {
      setActiveProductDetail(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header 
        className={`w-full z-45 sticky top-0 transition-all duration-350 ${
          isScrolled 
            ? 'bg-white shadow-lg border-b border-slate-200 py-2.5' 
            : 'bg-[#07162C] border-b border-white/15 py-3'
        }`}
      >
        {/* Main Brand Navbar Row 1 - Logo & Nav links */}
        <nav className="w-full relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
            
            {/* Left brand column: Logo & Brand Text */}
            <div 
              onClick={() => handleNavClick('home', 'all')} 
              className="flex items-center gap-3 cursor-pointer select-none shrink-0"
              title="Nasir Electric Store (N.E.S)"
            >
              <Logo size={isScrolled ? 36 : 42} className="hover:scale-105 transition-transform duration-300 shrink-0 text-[#F1C40F]" />
              <div className="flex flex-col text-left">
                <span className={`font-display font-black text-base sm:text-lg lg:text-xl tracking-tight leading-none uppercase transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                  Nasir
                </span>
                <span className={`text-[8.5px] sm:text-[10px] font-sans font-extrabold tracking-[0.12em] uppercase leading-tight mt-0.5 transition-colors duration-300 ${isScrolled ? 'text-[#EAA814]' : 'text-[#F1C40F]'}`}>
                  Electric Store
                </span>
              </div>
            </div>
 
            {/* Right side (Desktop): Nav links */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 text-sm font-semibold select-none">
              {navLinks.map((link) => {
                const LinkIcon = link.icon;
                const isActive = currentView === link.view && (link.category === 'all' || link.view !== 'products');
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.view, link.category)}
                    className={`relative px-4 py-2 transition-all duration-300 font-sans font-bold cursor-pointer text-xs xl:text-[13px] tracking-tight leading-tight rounded-full flex items-center gap-1.5 shrink-0 border ${
                      isActive
                        ? isScrolled
                          ? 'bg-[#EAA814]/15 text-[#EAA814] font-black border-[#EAA814]'
                          : 'bg-[#F1C40F]/20 text-[#F1C40F] font-black border-[#F1C40F]'
                        : isScrolled
                          ? 'text-slate-800 hover:text-white hover:bg-slate-900 border-[#1E293B]/5'
                          : 'text-white hover:text-slate-900 hover:bg-[#F1C40F] border-transparent'
                    }`}
                  >
                    <LinkIcon className="w-3.5 h-3.5" />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>
 
            {/* Right side (Mobile/Tablet burger) */}
            <div className="lg:hidden flex items-center justify-end">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className={`py-1.5 px-3 rounded-full border cursor-pointer font-sans text-xs font-black tracking-wider flex items-center gap-1.5 transition-all duration-300 shadow-sm ${
                  isScrolled
                    ? 'border-[#EAA814] bg-[#FAF9F6] text-slate-900 hover:bg-[#EAA814]'
                    : 'border-[#F1C40F]/80 bg-white/5 text-white hover:bg-[#F1C40F] hover:text-slate-950'
                }`}
                title="Open Categories Sidebar"
              >
                <div className="flex flex-col gap-[3px] justify-center items-center w-3 h-3">
                  <span className={`w-2.5 h-[1.5px] rounded-full transition-colors duration-300 ${isScrolled ? 'bg-current' : 'bg-[#F1C40F]'}`}></span>
                  <span className={`w-3.5 h-[1.5px] rounded-full transition-colors duration-300 ${isScrolled ? 'bg-current' : 'bg-white'}`}></span>
                  <span className={`w-2.5 h-[1.5px] rounded-full transition-colors duration-300 ${isScrolled ? 'bg-current' : 'bg-[#F1C40F]'}`}></span>
                </div>
                <span className="uppercase text-[10px] tracking-wide">Categories</span>
              </button>
            </div>
 
          </div>
        </nav>

        {/* Brand Navbar Row 2 - Located beautifully UNDER the whole top line divider */}
        <div className={`mt-2.5 pt-2 border-t transition-colors duration-300 ${
          isScrolled ? 'border-slate-150' : 'border-white/10'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
            
            {/* Left Desktop Trigger of Row 2: Prominent & Clean Categories button below the line */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className={`hidden lg:flex py-1.5 px-4.5 rounded-full border cursor-pointer font-sans text-xs font-black tracking-widest uppercase items-center gap-2 transition-all duration-300 shadow-sm ${
                isScrolled
                  ? 'border-[#EAA814] bg-[#EAA814]/10 text-slate-900 hover:bg-[#EAA814] hover:text-white'
                  : 'border-[#F1C40F]/70 bg-white/5 text-[#F1C40F] hover:bg-[#F1C40F] hover:text-slate-950'
              }`}
              title="Open Categories Sidebar"
            >
              <div className="flex flex-col gap-[3px] justify-center items-center w-3.5 h-3.5">
                <span className={`w-3 h-[1.8px] rounded-full transition-colors duration-300 ${isScrolled ? 'bg-current' : 'bg-[#F1C40F]'}`}></span>
                <span className={`w-3.5 h-[1.8px] rounded-full transition-colors duration-300 ${isScrolled ? 'bg-current' : 'bg-white'}`}></span>
                <span className={`w-3 h-[1.8px] rounded-full transition-colors duration-300 ${isScrolled ? 'bg-current' : 'bg-[#F1C40F]'}`}></span>
              </div>
              <span className="text-[10px] tracking-widest">Browse Categories</span>
            </button>

            {/* Quick access Categories tags to balance the Row 2 display empty space beautifully */}
            <div className="hidden lg:flex items-center gap-2 select-none text-[11px] font-bold">
              <span className={`font-mono text-[9px] uppercase tracking-widest font-black mr-2 opacity-60 ${
                isScrolled ? 'text-slate-500' : 'text-slate-400'
              }`}>
                Hot Categories:
              </span>
              {sidebarCategories.slice(0, 5).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`px-3.5 py-1 rounded-full transition-all duration-200 tracking-tight ${
                    isScrolled
                      ? 'bg-slate-100/90 text-slate-700 hover:bg-[#EAA814]/15 hover:text-[#EAA814]'
                      : 'bg-white/5 text-slate-300 hover:bg-[#F1C40F]/15 hover:text-[#F1C40F]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Micro Badge indicator */}
            <div className={`hidden lg:flex items-center gap-1.5 font-sans text-[10px] font-extrabold tracking-tight uppercase select-none opacity-80 ${isScrolled ? 'text-slate-600' : 'text-slate-300'}`}>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span>Premium Quality Assured</span>
            </div>

          </div>
        </div>

        {/* Small Screen Bottom Horizontal quick-links bar - made much brighter and defined */}
        <div className="lg:hidden flex items-center justify-start gap-1.5 text-[11px] font-bold tracking-tight select-none relative overflow-x-auto scrollbar-none py-2 px-4 w-full border-t border-white/10 mt-1.5 bg-black/30">
          {navLinks.map((link) => {
            const isActive = currentView === link.view;
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.view, link.category)}
                className={`px-3 py-1.5 rounded-full shrink-0 font-extrabold transition-all duration-200 border ${
                  isActive 
                    ? 'bg-[#F1C40F] text-slate-950 border-[#F1C40F] shadow-md' 
                    : isScrolled 
                      ? 'text-slate-700 bg-white/80 border-slate-300 hover:bg-slate-100' 
                      : 'text-white bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      </header>

      {/* Side Categories Options Sidebar (List Form, Ultra-compact, Fits without scrolling) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Dark cozy blurring backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-110 cursor-pointer"
            />

            {/* Slide-out side drawer container */}
            <motion.div
              initial={{ x: '-100%' }} // Slides smooth from the left matching left icon alignment
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed left-0 top-0 bottom-0 w-[310px] max-w-full bg-[#081528] text-white z-120 shadow-2xl border-r border-white/10 flex flex-col overflow-hidden"
            >
              {/* Sidebar Header */}
              <div className="p-4 border-b border-white/15 flex items-center justify-between bg-slate-950/40">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F1C40F] animate-pulse" />
                  <span className="font-display font-black text-sm uppercase tracking-wider text-[#F1C40F]">
                    Product Categories
                  </span>
                </div>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer border border-white/10"
                  title="Close Menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Sidebar list items: Compact list form, fits perfectly without scrolling */}
              <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto scrollbar-none justify-center flex flex-col">
                <p className="text-[10px] font-mono font-black tracking-widest text-slate-400 uppercase px-3 mb-2">
                  Select a Collection
                </p>

                {sidebarCategories.map((cat) => {
                  const CatIcon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.id)}
                      className="flex items-center justify-between w-full p-2.5 rounded-xl transition-all duration-200 group text-left cursor-pointer hover:bg-white/5 border border-transparent hover:border-white/5"
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                        >
                          <CatIcon className="w-4 h-4 group-hover:scale-115 transition-transform duration-300" />
                        </div>
                        <span className="font-sans font-black text-[13px] tracking-tight text-slate-200 group-hover:text-[#F1C40F] transition-colors">
                          {cat.name}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#F1C40F] transition-transform duration-205 group-hover:translate-x-0.5 shrink-0" />
                    </button>
                  );
                })}
              </div>

              {/* Sidebar Sticky Quick Help Footer */}
              <div className="p-4 border-t border-white/15 bg-slate-950/30 text-center">
                <p className="text-[10px] text-slate-300 font-extrabold leading-relaxed">
                  Need professional technical guidance?
                </p>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="mt-2 w-full py-2.5 bg-[#F1C40F] hover:bg-[#F2C43E] text-slate-950 font-black font-sans text-xs rounded-lg cursor-pointer uppercase tracking-wider block transition-colors shadow-sm"
                >
                  Contact Expert
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
