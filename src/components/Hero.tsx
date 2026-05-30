import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Truck, Lock, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';

const DEFAULT_SLIDES = [
  {
    id: 1,
    tagline: "ESTABLISHED SINCE 1968 — MAILSI, PUNJAB",
    title: "Complete Electrical, Solar & General Center",
    subtitle: "Premium indoor wiring solutions, copper cables, brand certified switches, and professional tier-1 smart on-grid solar energy systems.",
    primaryBtnText: "Browse All Products",
    secondaryBtnText: "Explore Solar",
    image: "https://i.ibb.co/s9LJh6C4/on-grid-solar-system-for-residential-use.jpg",
    accentColor: "#F1C40F", // Gold yellow
    bgTone: "#07162C" // Cosmic Navy
  },
  {
    id: 2,
    tagline: "SMART ENERGY MANAGEMENT & CONTROLS",
    title: "Automatic Controllers & Premium Geysers",
    subtitle: "Fully automate water pump levels, monitor terminal load limits, schedule timers, and buy high-efficiency dual-fuel and instant geysers.",
    primaryBtnText: "View Electronics",
    secondaryBtnText: "Smart Devices",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
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
  const [slides] = useState(() => {
    const saved = localStorage.getItem('custom_store_slides');
    return saved ? JSON.parse(saved) : DEFAULT_SLIDES;
  });

  // Auto cyclic banner rotation every 6 seconds (6000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

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
      className="relative w-full min-h-[600px] lg:h-[680px] flex items-center overflow-hidden transition-colors duration-1000 bg-[#07162C]"
      style={{ backgroundColor: activeSlide.bgTone || '#07162C' }}
    >
      {/* Background Slideshow: Dynamic Background Image of active slide */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{ opacity: 0.65, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={activeSlide.image}
              alt={activeSlide.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Dynamic contrast masks to secure total legibility of high-end text content */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07162C] via-[#07162C]/70 to-[#07162C]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07162C] via-transparent to-[#07162C]/30" />
      </div>

      {/* Orbit rings behind */}
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
      <div className="relative max-w-7xl mx-auto px-6 py-12 w-full z-10 text-left">
        
        {/* Expanded Left Elements - Text */}
        <div className="max-w-3xl min-h-[380px] flex flex-col justify-center overflow-hidden">
          
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
              <p className="text-slate-200 text-sm sm:text-base font-light font-sans max-w-xl leading-relaxed">
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

      </div>

      {/* Slide dots indicators positioned elegantly at the bottom center of the hero section */}
      <div className="absolute bottom-4 left-[50%] -translate-x-[50%] flex items-center gap-2.5 z-15 bg-slate-900/60 backdrop-blur-md py-1.5 px-3 rounded-full border border-white/10">
        {slides.map((_, idx) => (
          <span 
            key={idx}
            className={`transition-all duration-300 rounded-full cursor-pointer h-2 ${
              idx === currentSlide 
                ? 'w-6' 
                : 'w-2 bg-slate-600 hover:bg-slate-350'
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

    </section>
  );
}
