import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Truck, Lock, Headphones, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    tagline: "ESTABLISHED SINCE 1968 — MAILSI, PUNJAB",
    title: (
      <>
        The Complete <span className="text-[#F1C40F]">Electrical, Solar &amp;</span> <br />
        Electronics Centre
      </>
    ),
    subtitle: (
      <>
        High-durability fans, pure copper wires, certified switchgear, <br />
        and tier-1 smart renewable solar solutions. Serving generations with trust.
      </>
    ),
    primaryBtnText: "Browse All Products",
    secondaryBtnText: "Explore Solar Solutions",
    accentColor: "#F1C40F",
    actionType: "shop_catalog"
  },
  {
    id: 2,
    tagline: "ENERGY SAVING HOME ELECTRONICS & FANS",
    title: (
      <>
        Premium <span className="text-[#2ECC71]">BLDC Inverter Fans &amp;</span> <br />
        Home Appliances
      </>
    ),
    subtitle: (
      <>
        Shop high-performance Royal and GFC inverter-fans, water geysers, <br />
        automatic servo voltage stabilizers, and digitized well controllers.
      </>
    ),
    primaryBtnText: "View Home Electronics",
    secondaryBtnText: "Go to Catalog",
    accentColor: "#2ECC71",
    actionType: "electronics"
  },
  {
    id: 3,
    tagline: "SMART ARCHITECTURAL LIGHTING & DECOR",
    title: (
      <>
        Stunning <span className="text-cyan-400">Neon Ropes, Spotlights &amp;</span> <br />
        SMD LED Fixtures
      </>
    ),
    subtitle: (
      <>
        Individually addressable pixel strings, cozy ceiling coves, <br />
        and outdoor festive decoration setups for gorgeous warmth.
      </>
    ),
    primaryBtnText: "Explore Lighting FX",
    secondaryBtnText: "View Products",
    accentColor: "#06B6D4",
    actionType: "lighting"
  }
];

export default function Hero() {
  const { setSelectedCategory, setCurrentView } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto cyclic banner rotation every 2.5 seconds (2-3 seconds interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handleShopNow = () => {
    setCurrentView('products');
    setSelectedCategory('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreSolar = () => {
    setCurrentView('solar');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreLighting = () => {
    setCurrentView('lighting');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSlideButtonClick = (action: string) => {
    if (action === "lighting") {
      handleExploreLighting();
    } else if (action === "solar") {
      handleExploreSolar();
    } else if (action === "electronics") {
      setCurrentView('products');
      setSelectedCategory('electronics');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleShopNow();
    }
  };

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section id="hero" className="relative w-full min-h-[620px] lg:h-[680px] flex items-center bg-[#07162C] overflow-hidden">
      
      {/* Golden Glowing Circular Orbits in Background (Elegant & Matches the image perfectly) */}
      <div className="absolute top-[10%] right-[10%] w-[380px] h-[380px] lg:w-[460px] lg:h-[460px] rounded-full border border-yellow-500/15 pointer-events-none z-0 scale-110" />
      <div className="absolute top-[8%] right-[8%] w-[420px] h-[420px] lg:w-[500px] lg:h-[500px] rounded-full border border-yellow-500/10 pointer-events-none z-0 animate-[spin_40s_linear_infinite]" />
      <div className="absolute top-[5%] right-[5%] w-[480px] h-[480px] lg:w-[560px] lg:h-[560px] rounded-full border border-yellow-500/5 pointer-events-none z-0" />

      {/* Slide Navigation Arrow Left */}
      <button 
        onClick={handlePrevSlide}
        className="absolute left-4 top-[50%] -translate-y-[50%] hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-black/15 hover:bg-black/35 text-white/70 hover:text-white border border-white/10 transition-colors z-20 cursor-pointer animate-[fadeIn_0.5s_ease-out]"
        title="Previous Banner Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Slide Navigation Arrow Right */}
      <button 
        onClick={handleNextSlide}
        className="absolute right-4 top-[50%] -translate-y-[50%] hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-black/15 hover:bg-black/35 text-white/70 hover:text-white border border-white/10 transition-colors z-20 cursor-pointer animate-[fadeIn_0.5s_ease-out]"
        title="Next Banner Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-0 grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center z-10 text-left">
        
        {/* Left Elements - Text */}
        <div className="lg:col-span-6 min-h-[350px] flex flex-col justify-center overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="space-y-6 text-left"
            >
              {/* Tagline */}
              <span 
                className="inline-flex items-center gap-1.5 text-[11px] lg:text-xs tracking-[0.2em] font-extrabold uppercase font-sans font-black"
                style={{ color: SLIDES[currentSlide].accentColor }}
              >
                <Sparkles className="w-3.5 h-3.5 inline animate-pulse text-[#F1C40F]" />
                {SLIDES[currentSlide].tagline}
              </span>

              {/* Title */}
              <h1 className="font-display font-black text-3.5xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
                {SLIDES[currentSlide].title}
              </h1>

              {/* Subtitle */}
              <p className="text-gray-300 text-sm sm:text-base font-light font-sans max-w-lg leading-relaxed">
                {SLIDES[currentSlide].subtitle}
              </p>

              {/* Buttons Group */}
              <div className="flex flex-wrap items-center gap-4.5 pt-3">
                <button
                  onClick={() => handleSlideButtonClick(SLIDES[currentSlide].actionType)}
                  className="px-6 py-3 rounded-md font-sans font-bold text-xs sm:text-sm tracking-wide hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer text-[#1E293B]"
                  style={{ backgroundColor: SLIDES[currentSlide].accentColor }}
                >
                  {SLIDES[currentSlide].primaryBtnText} <ArrowRight className="w-4 h-4 text-[#1E293B]" />
                </button>

                <button
                  onClick={handleShopNow}
                  className="px-6 py-3 rounded-md font-sans font-semibold text-xs sm:text-sm tracking-wide bg-transparent hover:bg-white/5 text-white border border-white/30 hover:border-white transition-all cursor-pointer"
                >
                  {SLIDES[currentSlide].secondaryBtnText}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Sub Row: Support features exactly corresponding to bottom images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4.5 pt-8 border-t border-white/10">
            
            {/* 1. 100% Original */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#F1C40F]/10 flex items-center justify-center border border-[#F1C40F]/20">
                <ShieldCheck className="w-4.5 h-4.5 text-[#F1C40F]" />
              </div>
              <div className="text-left font-sans">
                <div className="text-[10px] font-bold text-white uppercase tracking-wider leading-tight">100% Original</div>
                <div className="text-[9px] text-gray-400">Premium Quality</div>
              </div>
            </div>

            {/* 2. Fast Delivery */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#F1C40F]/10 flex items-center justify-center border border-[#F1C40F]/20">
                <Truck className="w-4.5 h-4.5 text-[#F1C40F]" />
              </div>
              <div className="text-left font-sans">
                <div className="text-[10px] font-bold text-white uppercase tracking-wider leading-tight">Fast Delivery</div>
                <div className="text-[9px] text-gray-400">Across Pakistan</div>
              </div>
            </div>

            {/* 3. Secure Payments */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#F1C40F]/10 flex items-center justify-center border border-[#F1C40F]/20">
                <Lock className="w-4.5 h-4.5 text-[#F1C40F]" />
              </div>
              <div className="text-left font-sans">
                <div className="text-[10px] font-bold text-white uppercase tracking-wider leading-tight">Secure Payments</div>
                <div className="text-[9px] text-gray-400 font-sans">Multiple Options</div>
              </div>
            </div>

            {/* 4. Expert Support */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#F1C40F]/10 flex items-center justify-center border border-[#F1C40F]/20">
                <Headphones className="w-4.5 h-4.5 text-[#F1C40F]" />
              </div>
              <div className="text-left font-sans">
                <div className="text-[10px] font-bold text-white uppercase tracking-wider leading-tight">Expert Support</div>
                <div className="text-[9px] text-gray-400 font-sans">24/7 Assistance</div>
              </div>
            </div>

          </div>

        </div>

        {/* Right Elements - Richly styled exact graphics mockup cluster mimicking image */}
        <div className="lg:col-span-6 relative hidden lg:flex h-full lg:min-h-[500px] items-center justify-center">
          
          {/* Circle frame behind products */}
          <div className="absolute w-[360px] h-[360px] rounded-full bg-[#F1C40F]/2 pointer-events-none z-0" />

          {/* Product Items Collage strictly matching reference image */}
          <div className="relative w-[480px] h-[400px] select-none scale-90 xxl:scale-100 z-10 font-sans">
            
            {/* 1. High Tier Solar Panel (Top-Right Back) */}
            <img 
              src="/src/assets/images/solar_panel_product_1779880947279.png"
              alt="Tier-1 Solar Panel"
              className="absolute top-[-10px] right-[20px] w-[240px] h-auto object-contain z-10 transition-transform duration-300 hover:scale-105 drop-shadow-xl"
            />

            {/* 2. White Intelligent Inverter System (Inverex/Growatt look) (Middle-Center Front) */}
            <img 
              src="/src/assets/images/smart_inverter_product_1779880968248.png"
              alt="White Grid Inverter"
              className="absolute top-[80px] left-[150px] w-[210px] h-auto object-contain z-30 transition-transform duration-300 hover:scale-105 drop-shadow-2xl"
            />

            {/* 3. Pure Copper Cable Coil (Bottom-Left Front) */}
            <div className="absolute bottom-[20px] left-[-30px] w-[180px] h-[120px] z-30 transition-transform duration-300 hover:scale-105">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Red Copper cable icon representation */}
                <svg viewBox="0 0 100 60" className="w-[170px] drop-shadow-2xl">
                  <ellipse cx="50" cy="30" rx="42" ry="24" fill="none" stroke="#E74C3C" strokeWidth="12" />
                  <ellipse cx="50" cy="30" rx="38" ry="20" fill="none" stroke="#C0392B" strokeWidth="2" />
                  <ellipse cx="50" cy="30" rx="32" ry="16" fill="skip" stroke="#E67E22" strokeWidth="4" />
                  <ellipse cx="50" cy="30" rx="28" ry="12" fill="none" stroke="#D35400" strokeWidth="2" />
                  <text x="50" y="34" fontFamily="sans-serif" fontSize="6.5" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">99.9% COPPER</text>
                </svg>
              </div>
            </div>

            {/* 4. Flush Round Ceiling Spot LED downlight (Bottom-Center Front) */}
            <div className="absolute bottom-[40px] left-[130px] w-[110px] h-[110px] bg-white rounded-full p-2 border border-slate-100 shadow-xl z-35 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
              <img 
                src="/src/assets/images/smart_lighting_deco_1779881000337.png"
                alt="Spot Downlight"
                className="w-[80px] h-[80px] object-contain"
              />
            </div>

            {/* 5. Dual Circuit MCB Breaker (Bottom-Right Front) */}
            <div className="absolute bottom-[50px] right-[70px] w-[95px] h-[115px] bg-[#F8F9FA] rounded-md border border-slate-200 p-2 shadow-2xl z-35 flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <svg viewBox="0 0 40 50" className="w-full h-full">
                <rect x="5" y="5" width="30" height="40" rx="2" fill="#FFFFFF" stroke="#BDC3C7" strokeWidth="1.5" />
                <rect x="12" y="10" width="16" height="8" rx="1" fill="#ECEFF1" stroke="#90A4AE" />
                {/* Breaker safety toggles in green/yellow like standard breaker */}
                <rect x="11" y="24" width="7" height="14" rx="1" fill="#2ECC71" />
                <rect x="22" y="24" width="7" height="14" rx="1" fill="#2ECC71" />
                <line x1="11" y1="28" x2="29" y2="28" stroke="#37474F" strokeWidth="2" />
                <text x="20" y="16" fontSize="4.5" textAnchor="middle" fill="#546E7A" fontWeight="bold">63A</text>
                <circle cx="20" cy="41" r="1.5" fill="#90A4AE" />
              </svg>
            </div>

            {/* 6. Spool of Rope and Strips pixel lighting (Far Right Back) */}
            <div className="absolute top-[120px] right-[-10px] w-[140px] h-[140px] z-20 flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-xl">
                <circle cx="40" cy="40" r="35" fill="none" stroke="#2C3E50" strokeWidth="6" />
                <circle cx="40" cy="40" r="28" fill="none" stroke="#F1C40F" strokeWidth="3" />
                <circle cx="40" cy="40" r="20" fill="none" stroke="#E67E22" strokeWidth="3" />
                <circle cx="40" cy="40" r="12" fill="#34495E" />
                {/* Glowing LED rope simulation */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                  <circle
                    key={deg}
                    cx={40 + 28 * Math.cos((deg * Math.PI) / 180)}
                    cy={40 + 28 * Math.sin((deg * Math.PI) / 180)}
                    r="2"
                    fill="#F1C40F"
                  />
                ))}
                <text x="40" y="43" fontSize="8" textAnchor="middle" fill="#FFFFFF" fontWeight="900">ROPE</text>
              </svg>
            </div>

          </div>

          {/* Slide dots indicators at the bottom center of the hero */}
          <div className="absolute bottom-4 left-[50%] -translate-x-[50%] flex items-center gap-2.5 z-15">
            {SLIDES.map((_, idx) => (
              <span 
                key={idx}
                className={`transition-all duration-300 rounded-full cursor-pointer hover:scale-110 ${
                  idx === currentSlide 
                    ? 'w-6 h-2.5' 
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white'
                }`}
                style={{
                  backgroundColor: idx === currentSlide ? SLIDES[currentSlide].accentColor : undefined
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

    </section>
  );
}
