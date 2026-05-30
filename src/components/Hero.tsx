import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Truck, Lock, Headphones, ChevronLeft, ChevronRight, ArrowRight, Settings, Image, Check, RefreshCw } from 'lucide-react';

const DEFAULT_SLIDES = [
  {
    id: 1,
    tagline: "ESTABLISHED SINCE 1968 — MAILSI, PUNJAB",
    title: "Complete Electrical, Solar & General Center",
    subtitle: "High-durability inverter fans, copper cables, brand certified switches, and professional tier-1 smart on-grid solar energy systems.",
    primaryBtnText: "Browse All Products",
    secondaryBtnText: "Explore Solar",
    image: "https://i.ibb.co/s9LJh6C4/on-grid-solar-system-for-residential-use.jpg",
    accentColor: "#F1C40F", // Gold yellow
    bgTone: "#07162C" // Cosmic Navy
  },
  {
    id: 2,
    tagline: "ENERGY SAVING SMART HOME APPLIANCES",
    title: "Premium BLDC Inverter Fans & Safety Stabilizers",
    subtitle: "Saves up to 60% electricity. Premium Royal & GFC copper BLDC fans, automatic microprocessor stabilizers, and intelligent well switches.",
    primaryBtnText: "View Electronics",
    secondaryBtnText: "Shop Fans",
    image: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=800&auto=format&fit=crop",
    accentColor: "#2ECC71", // Safe energy emerald
    bgTone: "#051324" // Dark navy slate
  },
  {
    id: 3,
    tagline: "SMART ARCHITECTURAL NEON & AMBIENT LEDS",
    title: "Stunning Neon Ropes, Downlights & Fixtures",
    subtitle: "Elevate your space with individually addressable pixel strips, cozy recessed spotlights, and weather-sealed festive exterior lighting.",
    primaryBtnText: "Explore Lighting FX",
    secondaryBtnText: "Go to Catalog",
    image: "https://images.unsplash.com/photo-1565538810844-1e119fea115d?q=80&w=800&auto=format&fit=crop",
    accentColor: "#06B6D4", // Electric cyan
    bgTone: "#061221" // Midnight cyber blue
  }
];

export default function Hero() {
  const { setSelectedCategory, setCurrentView } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState(() => {
    const saved = localStorage.getItem('custom_store_slides');
    return saved ? JSON.parse(saved) : DEFAULT_SLIDES;
  });
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [customizerFields, setCustomizerFields] = useState({
    title: '',
    tagline: '',
    subtitle: '',
    image: '',
    primaryBtnText: '',
    bgTone: '#FAF6F1'
  });

  // Keep customizer fields in sync with the current slide
  useEffect(() => {
    if (slides[currentSlide]) {
      setCustomizerFields({
        title: slides[currentSlide].title,
        tagline: slides[currentSlide].tagline,
        subtitle: slides[currentSlide].subtitle,
        image: slides[currentSlide].image,
        primaryBtnText: slides[currentSlide].primaryBtnText,
        bgTone: slides[currentSlide].bgTone || '#FAF6F1'
      });
    }
  }, [currentSlide, slides]);

  // Auto cyclic banner rotation every 6 seconds (6000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const handleUpdateSlide = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = [...slides];
    updated[currentSlide] = {
      ...updated[currentSlide],
      ...customizerFields
    };
    setSlides(updated);
    localStorage.setItem('custom_store_slides', JSON.stringify(updated));
    alert("Banner updated successfully and saved locally!");
  };

  const handleResetSlides = () => {
    if (window.confirm("Are you sure you want to reset all slide banners to raw default styles?")) {
      setSlides(DEFAULT_SLIDES);
      localStorage.removeItem('custom_store_slides');
    }
  };

  const handleShopNow = () => {
    setCurrentView('products');
    setSelectedCategory('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSlideButtonClick = () => {
    handleShopNow();
  };

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[currentSlide] || DEFAULT_SLIDES[0];

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[640px] lg:h-[700px] flex items-center overflow-hidden transition-colors duration-1000 bg-[#07162C]"
      style={{ backgroundColor: activeSlide.bgTone || '#07162C' }}
    >
      {/* Background Subtle Gradient Overlay & Cosmic Orbits behind */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-[8%] right-[8%] w-[420px] h-[420px] lg:w-[500px] lg:h-[500px] rounded-full border border-yellow-500/5 pointer-events-none z-0 animate-[spin_40s_linear_infinite]" />
      <div className="absolute top-[5%] right-[5%] w-[480px] h-[480px] lg:w-[560px] lg:h-[560px] rounded-full border border-yellow-500/5 pointer-events-none z-0" />

      {/* Slide Navigation Arrow Left */}
      <button 
        onClick={handlePrevSlide}
        className="absolute left-3 sm:left-6 top-[50%] -translate-y-[50%] flex w-9 h-9 sm:w-12 sm:h-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 shadow-md transition-all duration-300 z-25 cursor-pointer backdrop-blur-md"
        title="Previous Banner Slide"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      {/* Slide Navigation Arrow Right */}
      <button 
        onClick={handleNextSlide}
        className="absolute right-3 sm:right-6 top-[50%] -translate-y-[50%] flex w-9 h-9 sm:w-12 sm:h-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 shadow-md transition-all duration-300 z-25 cursor-pointer backdrop-blur-md"
        title="Next Banner Slide"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-0 grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center z-10 text-left">
        
        {/* Left Elements - Text */}
        <div className="lg:col-span-6 min-h-[380px] flex flex-col justify-center overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-6 text-left"
            >
              {/* Tagline / Subtitle Mini above */}
              <span 
                className="inline-flex items-center gap-1.5 text-xs lg:text-sm tracking-[0.22em] font-extrabold uppercase font-sans"
                style={{ color: activeSlide.accentColor }}
              >
                ✦ {activeSlide.tagline}
              </span>

              {/* Title using premium Serif */}
              <h1 className="font-serif font-normal text-4xl sm:text-5.5xl lg:text-6.5xl text-white leading-tight tracking-[0.01em]">
                {activeSlide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-slate-300 text-sm sm:text-base font-light font-sans max-w-lg leading-relaxed">
                {activeSlide.subtitle}
              </p>

              {/* Action Buttons styled like the minimalist inspiration image */}
              <div className="flex flex-wrap items-center gap-4.5 pt-4">
                <button
                  onClick={handleSlideButtonClick}
                  className="px-8 py-3 rounded-sm font-sans font-bold text-xs sm:text-sm uppercase tracking-widest hover:brightness-110 shadow-lg transition-all flex items-center gap-2.5 cursor-pointer text-slate-950"
                  style={{ backgroundColor: activeSlide.accentColor }}
                >
                  {activeSlide.primaryBtnText}
                </button>

                <button
                  onClick={handleShopNow}
                  className="px-8 py-3 rounded-sm font-sans font-medium text-xs sm:text-sm uppercase tracking-widest bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white transition-all cursor-pointer"
                >
                  {activeSlide.secondaryBtnText}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Sub Row: Premium Features Styled in matching natural Gold motif */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4.5 pt-10 mt-8 border-t border-white/10">
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <ShieldCheck className="w-4 h-4" style={{ color: activeSlide.accentColor }} />
              </div>
              <div className="text-left font-sans">
                <div className="text-[10px] font-bold text-slate-100 uppercase tracking-wider leading-tight">100% Original</div>
                <div className="text-[9px] text-slate-400">Certified Brands</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Truck className="w-4 h-4" style={{ color: activeSlide.accentColor }} />
              </div>
              <div className="text-left font-sans">
                <div className="text-[10px] font-bold text-slate-100 uppercase tracking-wider leading-tight">Fast Shipping</div>
                <div className="text-[9px] text-slate-400">Across Pakistan</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Lock className="w-4 h-4" style={{ color: activeSlide.accentColor }} />
              </div>
              <div className="text-left font-sans">
                <div className="text-[10px] font-bold text-slate-100 uppercase tracking-wider leading-tight">Secure Checkouts</div>
                <div className="text-[9px] text-slate-400">Safe Payments</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Headphones className="w-4 h-4" style={{ color: activeSlide.accentColor }} />
              </div>
              <div className="text-left font-sans">
                <div className="text-[10px] font-bold text-slate-100 uppercase tracking-wider leading-tight">24/7 Support</div>
                <div className="text-[9px] text-slate-400 font-sans">Expert Electricians</div>
              </div>
            </div>

          </div>

        </div>

        {/* Right Elements - Sophisticated customizable photo frame matching the inspiration image */}
        <div className="lg:col-span-6 relative flex h-[360px] lg:h-full items-center justify-center">
          
          {/* Beautiful rectangular frame layout with elegant custom border & shadow of the image */}
          <div className="relative w-full max-w-[420px] h-[350px] lg:h-[485px] select-none z-10 overflow-hidden rounded-2xl border-[5px] border-white/10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] bg-slate-950/40">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <img 
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Label overlay at top of photo */}
                <div 
                  className="absolute top-4 left-4 font-sans backdrop-blur-md px-3 py-1.5 rounded text-[10px] font-extrabold tracking-widest text-[#07162C] shadow-md"
                  style={{ backgroundColor: activeSlide.accentColor }}
                >
                  DEPT. {activeSlide.id}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide dots indicators positioned elegantly at the bottom center of the product photo */}
          <div className="absolute bottom-[-24px] lg:bottom-4 left-[50%] -translate-y-[50%] flex items-center gap-2.5 z-15 bg-slate-900/80 backdrop-blur-md py-1.5 px-3 rounded-full border border-white/10">
            {slides.map((_, idx) => (
              <span 
                key={idx}
                className={`transition-all duration-300 rounded-full cursor-pointer h-2 ${
                  idx === currentSlide 
                    ? 'w-6' 
                    : 'w-2 bg-slate-600 hover:bg-slate-300'
                }`}
                style={{
                  backgroundColor: idx === currentSlide ? activeSlide.accentColor : undefined
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(idx);
                }}
                title={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Floating Settings Gear: Allows replacing images, color, background & text live at any time! */}
      <div className="absolute bottom-4 right-4 z-20">
        <button
          onClick={() => setShowCustomizer(!showCustomizer)}
          className="flex items-center gap-2 bg-[#1E293B] hover:bg-black text-white px-3.5 py-2 rounded-full shadow-lg text-xs font-semibold cursor-pointer select-none transition-all duration-300 border border-white/10"
          title="Banner Settings & Image Replacer"
        >
          <Settings className="w-4 h-4 animate-spin-slow text-[#F1C40F]" />
          <span>Adjust Slide {currentSlide + 1}</span>
        </button>
      </div>

      {/* Slide Customizer Settings Drawer Panel */}
      <AnimatePresence>
        {showCustomizer && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="absolute bottom-16 right-4 w-[340px] sm:w-[380px] bg-slate-900 text-white rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-800 z-50 text-left font-sans"
          >
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
              <div className="flex items-center gap-1.5 font-bold text-sm text-slate-100">
                <Image className="w-4.5 h-4.5 text-[#F1C40F]" />
                <span>Adjust Slide {currentSlide + 1} Content</span>
              </div>
              <button 
                onClick={() => setShowCustomizer(false)}
                className="text-slate-400 hover:text-slate-200 text-xs font-bold font-sans cursor-pointer px-1.5 py-0.5"
              >
                ✕ Close
              </button>
            </div>

            <form onSubmit={handleUpdateSlide} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 font-bold mb-1">Slide Image (Paste URL address):</label>
                <input 
                  type="text"
                  required
                  value={customizerFields.image}
                  onChange={(e) => setCustomizerFields({...customizerFields, image: e.target.value})}
                  className="w-full px-2.5 py-1.5 rounded border border-slate-800 bg-slate-950 focus:outline-[#F1C40F] text-slate-200"
                  placeholder="Insert image link (e.g. https://...)"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-400 font-bold mb-1">Tagline Label:</label>
                  <input 
                    type="text"
                    required
                    value={customizerFields.tagline}
                    onChange={(e) => setCustomizerFields({...customizerFields, tagline: e.target.value})}
                    className="w-full px-2.5 py-1.5 rounded border border-slate-800 bg-slate-950 focus:outline-[#F1C40F] text-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-bold mb-1">Backup Bg Color:</label>
                  <input 
                    type="color"
                    required
                    value={customizerFields.bgTone}
                    onChange={(e) => setCustomizerFields({...customizerFields, bgTone: e.target.value})}
                    className="w-full h-8 rounded cursor-pointer border border-slate-800 bg-slate-950 p-0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 font-bold mb-1">Headline text:</label>
                <input 
                  type="text"
                  required
                  value={customizerFields.title}
                  onChange={(e) => setCustomizerFields({...customizerFields, title: e.target.value})}
                  className="w-full px-2.5 py-1.5 rounded border border-slate-800 bg-slate-950 focus:outline-[#F1C40F] text-slate-200"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-bold mb-1">Description Paragraph:</label>
                <textarea 
                  required
                  rows={2}
                  value={customizerFields.subtitle}
                  onChange={(e) => setCustomizerFields({...customizerFields, subtitle: e.target.value})}
                  className="w-full px-2.5 py-1.5 rounded border border-slate-800 bg-slate-950 focus:outline-[#F1C40F] text-slate-200 resize-none"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#F1C40F] hover:bg-yellow-500 text-slate-950 py-2 rounded font-bold transition flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5" />
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleResetSlides}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 rounded transition flex items-center justify-center cursor-pointer"
                  title="Reset to Factory Defaults"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
