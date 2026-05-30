import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Truck, Lock, Headphones, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    tagline: "ESTABLISHED SINCE 1968 — MAILSI, PUNJAB",
    bgImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1600&auto=format&fit=crop",
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
    bgImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
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
    bgImage: "https://images.unsplash.com/photo-1565538810844-1e119fea115d?q=80&w=1600&auto=format&fit=crop",
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

  // Auto cyclic banner rotation every 6 seconds (6000ms) - resets automatically upon manual slide shifts
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

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
      
      {/* Picture-Friendly Crossfading Banner Backgrounds with Deep Overlay masks */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 0.23, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={SLIDES[currentSlide].bgImage}
              alt="Banner Background Banner"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Dynamic Vignette & Smart Contrast Gradients ensuring crisp text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07162C] via-[#07162C]/90 to-[#07162C]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07162C] via-transparent to-transparent" />
      </div>

      {/* Golden Glowing Circular Orbits in Background (Elegant & Matches the image perfectly) */}
      <div className="absolute top-[10%] right-[10%] w-[380px] h-[380px] lg:w-[460px] lg:h-[460px] rounded-full border border-yellow-500/10 pointer-events-none z-0 scale-110" />
      <div className="absolute top-[8%] right-[8%] w-[420px] h-[420px] lg:w-[500px] lg:h-[500px] rounded-full border border-yellow-500/5 pointer-events-none z-0 animate-[spin_40s_linear_infinite]" />
      <div className="absolute top-[5%] right-[5%] w-[480px] h-[480px] lg:w-[560px] lg:h-[560px] rounded-full border border-yellow-500/5 pointer-events-none z-0" />

      {/* Slide Navigation Arrow Left */}
      <button 
        onClick={handlePrevSlide}
        className="absolute left-2.5 sm:left-4 top-[50%] -translate-y-[50%] flex w-8 h-8 sm:w-11 sm:h-11 items-center justify-center rounded-full bg-[#07162C]/65 hover:bg-[#07162C]/95 text-white/85 hover:text-white border border-white/15 backdrop-blur-md shadow-lg transition-all duration-300 z-25 cursor-pointer"
        title="Previous Banner Slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </button>

      {/* Slide Navigation Arrow Right */}
      <button 
        onClick={handleNextSlide}
        className="absolute right-2.5 sm:right-4 top-[50%] -translate-y-[50%] flex w-8 h-8 sm:w-11 sm:h-11 items-center justify-center rounded-full bg-[#07162C]/65 hover:bg-[#07162C]/95 text-white/85 hover:text-white border border-white/15 backdrop-blur-md shadow-lg transition-all duration-300 z-25 cursor-pointer"
        title="Next Banner Slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
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

        {/* Right Elements - Richly styled exact graphics mockup cluster mimicking image with dynamic transition */}
        <div className="lg:col-span-6 relative hidden lg:flex h-full lg:min-h-[500px] items-center justify-center">
          
          {/* Circle frame behind products */}
          <div className="absolute w-[360px] h-[360px] rounded-full bg-[#F1C40F]/2 pointer-events-none z-0" />

          {/* AnimatePresence to transition right side products along with text */}
          <div className="relative w-[480px] h-[400px] select-none scale-90 xxl:scale-100 z-10 font-sans">
            <AnimatePresence mode="wait">
              {currentSlide === 0 && (
                <motion.div
                  key="slide-0-graphics"
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  {/* 1. Transparent PNG Cutout representation of the Residential Solar roof from URL */}
                  <div 
                    className="absolute top-[-30px] left-[10px] w-[320px] h-[220px] transition-transform duration-300 hover:scale-105 select-none"
                    style={{
                      filter: 'drop-shadow(0 20px 25px rgba(0,0,0,0.25)) drop-shadow(0 10px 10px rgba(0,0,0,0.15))',
                    }}
                  >
                    <img 
                      src="https://i.ibb.co/s9LJh6C4/on-grid-solar-system-for-residential-use.jpg"
                      alt="On-grid Residential Solar Cutout"
                      className="w-full h-full object-cover rounded-xl"
                      style={{
                        clipPath: 'polygon(0% 41%, 48% 12%, 100% 32%, 100% 90%, 82% 100%, 0% 100%)',
                      }}
                      referrerPolicy="no-referrer"
                    />
                    {/* Tiny premium watermark */}
                    <div className="absolute bottom-2 left-3 bg-black/50 text-[8px] text-[#F1C40F] px-1.5 py-0.5 rounded-md font-mono tracking-wider">
                      ON-GRID RESIDENTIAL
                    </div>
                  </div>

                  {/* 2. Tier-1 Jinko Panel (Layered next to it) */}
                  <img 
                    src="/src/assets/images/solar_panel_product_1779880947279.png"
                    alt="Tier-1 Solar Panel"
                    className="absolute top-[80px] right-[10px] w-[200px] h-auto object-contain z-20 transition-transform duration-300 hover:scale-105 drop-shadow-xl"
                  />

                  {/* 3. White Intelligent Inverter System */}
                  <img 
                    src="/src/assets/images/smart_inverter_product_1779880968248.png"
                    alt="White Grid Inverter"
                    className="absolute bottom-[30px] left-[120px] w-[180px] h-auto object-contain z-30 transition-transform duration-300 hover:scale-105 drop-shadow-2xl"
                  />

                  {/* 4. Pure Copper Cable representation icon */}
                  <div className="absolute bottom-[20px] left-[-20px] w-[150px] h-[100px] z-30 transition-transform duration-300 hover:scale-105">
                    <svg viewBox="0 0 100 60" className="w-[140px] drop-shadow-2xl">
                      <ellipse cx="50" cy="30" rx="42" ry="24" fill="none" stroke="#E74C3C" strokeWidth="12" />
                      <ellipse cx="50" cy="30" rx="38" ry="20" fill="none" stroke="#C0392B" strokeWidth="2" />
                      <ellipse cx="50" cy="30" rx="32" ry="16" fill="none" stroke="#E67E22" strokeWidth="4" />
                      <text x="50" y="34" fontFamily="sans-serif" fontSize="6.5" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">99.9% COPPER</text>
                    </svg>
                  </div>
                </motion.div>
              )}

              {currentSlide === 1 && (
                <motion.div
                  key="slide-1-graphics"
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  {/* 1. Premium Deluxe BLDC Ceiling Fan graphic cutout design */}
                  <div className="absolute top-[20px] left-[60px] w-[280px] h-[280px] rounded-full bg-slate-800/20 border-2 border-[#2ECC71]/20 p-4 flex items-center justify-center shadow-xl transition-all duration-300 hover:rotate-12">
                    <img 
                      src="https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=600&auto=format&fit=crop"
                      alt="Royal BLDC Inverter Fan"
                      className="w-full h-full object-cover rounded-full pointer-events-none"
                    />
                    <div className="absolute inset-0 rounded-full border border-dashed border-[#2ECC71]/30 animate-[spin_50s_linear_infinite]" />
                    {/* Badge */}
                    <div className="absolute -top-3 right-0 bg-[#2ECC71] text-[#1E293B] text-[9px] font-black uppercase px-2 py-1 rounded-full shadow-md font-mono tracking-wider">
                      60% Energy Save
                    </div>
                  </div>

                  {/* 2. Copper Toroid stabilizer or automatic level controller cutout overlay */}
                  <div className="absolute bottom-[30px] right-[20px] w-[140px] h-[150px] bg-slate-900/90 rounded-2xl border-2 border-[#2ECC71]/30 p-4.5 shadow-2xl transition-transform duration-300 hover:scale-105 flex flex-col justify-between text-left">
                    <div className="text-[9px] font-bold text-[#2ECC71] uppercase font-mono tracking-widest">Servo Stabilizer</div>
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-[#2ECC71] animate-pulse" />
                    </div>
                    <div className="text-white font-mono text-[16px] font-black tracking-tight leading-none">220.0 V</div>
                    <div className="text-[8px] text-slate-400 font-sans">Automatic microprocessor correction active</div>
                  </div>

                  {/* 3. Pure copper motor stator coil graphic representation */}
                  <div className="absolute bottom-[20px] left-[-10px] w-[130px] h-[130px] rounded-full bg-slate-900 border border-slate-800 p-2 shadow-2xl transition-transform duration-300 hover:scale-[1.08] flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_12s_linear_infinite]">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#E67E22" strokeWidth="6" strokeDasharray="6,4" />
                      <circle cx="50" cy="50" r="35" fill="none" stroke="#D35400" strokeWidth="8" />
                      <circle cx="50" cy="50" r="25" fill="#34495E" />
                      <circle cx="50" cy="50" r="15" fill="#2C3E50" />
                    </svg>
                  </div>
                </motion.div>
              )}

              {currentSlide === 2 && (
                <motion.div
                  key="slide-2-graphics"
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  {/* 1. Neon rope pixels spool setup with strong glowing cyan blur */}
                  <div className="absolute top-[40px] left-[50px] w-[260px] h-[260px] rounded-full bg-slate-900/60 border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.2)] flex items-center justify-center transition-transform hover:scale-[1.03] duration-500">
                    <svg viewBox="0 0 80 80" className="w-[210px] h-[210px] drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                      <circle cx="40" cy="40" r="35" fill="none" stroke="#06B6D4" strokeWidth="4" />
                      <circle cx="40" cy="40" r="28" fill="none" stroke="#22D3EE" strokeWidth="2.5" />
                      <circle cx="40" cy="40" r="20" fill="none" stroke="#0891B2" strokeWidth="3" />
                      <circle cx="40" cy="40" r="12" fill="#155E75" />
                      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                        <circle
                          key={deg}
                          cx={40 + 28 * Math.cos((deg * Math.PI) / 180)}
                          cy={40 + 28 * Math.sin((deg * Math.PI) / 180)}
                          r="2.5"
                          className="fill-cyan-400 animate-ping"
                          style={{ animationDelay: `${deg * 50}ms` }}
                        />
                      ))}
                      <text x="40" y="43" className="fill-white font-black text-[6px]" textAnchor="middle">RGB PIXEL</text>
                    </svg>
                  </div>

                  {/* 2. Flush Spot Downlight component */}
                  <div className="absolute bottom-[30px] right-[40px] w-[130px] h-[130px] bg-white rounded-full p-2.5 border border-slate-100 shadow-[0_15px_30px_rgba(0,0,0,0.3)] z-35 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
                    <img 
                      src="/src/assets/images/smart_lighting_deco_1779881000337.png"
                      alt="Spot Downlight"
                      className="w-[90px] h-[90px] object-contain"
                    />
                    <div className="absolute inset-0 rounded-full bg-cyan-400/5 mix-blend-screen pointer-events-none" />
                  </div>

                  {/* 3. MCB breaker box component representation */}
                  <div className="absolute bottom-[50px] left-[-10px] w-[95px] h-[115px] bg-[#111827] rounded-xl border border-slate-800 p-2 shadow-2xl z-35 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                    <svg viewBox="0 0 40 50" className="w-full h-full">
                      <rect x="5" y="5" width="30" height="40" rx="3" fill="#1F2937" stroke="#374151" strokeWidth="1.5" />
                      <rect x="12" y="10" width="16" height="8" rx="1" fill="#374151" stroke="#4B5563" />
                      <rect x="11" y="24" width="7" height="14" rx="1" fill="#06B6D4" />
                      <rect x="22" y="24" width="7" height="14" rx="1" fill="#06B6D4" />
                      <line x1="11" y1="28" x2="29" y2="28" stroke="#111827" strokeWidth="2" />
                      <circle cx="20" cy="41" r="1.5" fill="#4B5563" />
                    </svg>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
