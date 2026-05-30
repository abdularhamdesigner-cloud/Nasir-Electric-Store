import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import LightingShowcase from './components/LightingShowcase';
import SolarSolutions from './components/SolarSolutions';
import Testimonials from './components/Testimonials';
import InquiryModal from './components/InquiryModal';
import ProductDetailPage from './components/ProductDetailPage';
import AboutStore from './components/AboutStore';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, ArrowRight, ExternalLink, Mail, MessageSquare } from 'lucide-react';

function MainContent() {
  const { currentView, setSelectedCategory, setCurrentView, activeProductDetail } = useApp();

  const renderView = () => {
    if (activeProductDetail) {
      return (
        <motion.div
          key="product-detail"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <ProductDetailPage />
        </motion.div>
      );
    }

    switch (currentView) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            {/* Elegant slider orbit banner */}
            <Hero />
            
            {/* Signature highlights preview catalog block */}
            <div className="py-16 bg-white border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 text-left">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#F39C12] font-extrabold uppercase tracking-widest block bg-[#FAF9F6] border border-[#F1C40F]/10 px-3 py-1 rounded-full w-max">
                      Selected Highlights
                    </span>
                    <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                      Mailsi's Choice Electrical &amp; Energy Solutions
                    </h2>
                  </div>
                </div>
                <ProductSection isFeaturedOnly={true} />
              </div>
            </div>

            {/* Concise Solar, Electronics & Lighting preview cards to route to details and make interface multi-perspective */}
            <div className="bg-[#FAF9F6] py-16 border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                
                {/* Home Electronics option banner */}
                <div className="p-8 bg-[#0B2516] text-white rounded-2xl relative overflow-hidden group shadow-md text-left">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono uppercase bg-white/10 text-emerald-400 font-bold px-2.5 py-1 rounded-full border border-white/5">
                      Premium Appliances
                    </span>
                    <h3 className="font-display font-black text-xl tracking-tight">BLDC Fans &amp; Electronics</h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-sm">
                      Check energy-saving Royal ceiling fans, automatic servo stabilizers, and smart water pump controllers.
                    </p>
                    <button
                      onClick={() => {
                        setCurrentView('products');
                        setSelectedCategory('electronics');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-emerald-400 hover:text-white font-sans font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer pt-2"
                    >
                      <span>Explore Premium Electronics</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>

                {/* Solar option banner */}
                <div className="p-8 bg-[#07162C] text-white rounded-2xl relative overflow-hidden group shadow-md text-left">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono uppercase bg-white/10 text-cyan-400 font-bold px-2.5 py-1 rounded-full border border-white/5">
                      Renewable Choice
                    </span>
                    <h3 className="font-display font-black text-xl tracking-tight">Hybrid Solar Solutions</h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-sm">
                      Check premium off-grid and hybrid solar panels, structural brackets, controllers, and custom energy assemblies.
                    </p>
                    <button
                      onClick={() => {
                        setCurrentView('solar');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-cyan-400 hover:text-white font-sans font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer pt-2"
                    >
                      <span>Explore Solar Panels</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>

                {/* Lighting option banner */}
                <div className="p-8 bg-slate-900 text-white rounded-2xl relative overflow-hidden group shadow-md text-left">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono uppercase bg-white/10 text-[#F1C40F] font-bold px-2.5 py-1 rounded-full border border-white/5">
                      Premium Interior
                    </span>
                    <h3 className="font-display font-black text-xl tracking-tight">Architectural Smart Lighting</h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-sm">
                      Experience customized gold warm washes, ambient study highlights, and robust commercial lighting.
                    </p>
                    <button
                      onClick={() => {
                        setCurrentView('lighting');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-[#F1C40F] hover:text-white font-sans font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer pt-2"
                    >
                      <span>Explore Premium Lighting</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* About Our 58-Year Story & Legacy */}
            <div className="bg-white py-16 border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6 text-left">
                    <span className="text-[10px] font-mono text-[#EAA814] font-extrabold uppercase tracking-widest block bg-[#F1C40F]/10 border border-[#F1C40F]/20 px-3.5 py-1.5 rounded-full w-max">
                      OUR LEGACY SINCE 1968
                    </span>
                    <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                      About Nasir Electric Store
                    </h2>
                    <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-sans font-semibold">
                      For over 58 years, Nasir Electric Store (N.E.S) has been the cornerstone of electrical quality and solar innovation in Mailsi, District Vehari. What started as a local family retail shop has evolved into a premier supply hub and certified energy contractor, illuminating domestic properties, heavy industrial sites, and modern off-grid agricultural farms across Punjab.
                    </p>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                      We strictly filter out dual-standard copies, delivering absolute brand authenticity in 99.9% pure copper cables, tier-1 solar cells, and high-lux architectural lights. Our reputation rests on genuine technical performance and uncompromised safety standards.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setCurrentView('about');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="bg-[#1E293B] hover:bg-[#F1C40F] text-white hover:text-slate-950 text-xs uppercase font-sans font-black tracking-widest px-5 py-3 rounded-xl cursor-pointer transition-all duration-300 shadow-sm flex items-center gap-1.5"
                      >
                        <span>Read Our Full Story</span>
                        <ArrowRight className="w-3.5 h-3.5 text-current" />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#EAA814]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EAA814]/80 shrink-0" />
                        Mitru Road, Mailsi
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-[#F39C12]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F39C12] shrink-0" />
                        58+ Years Unbroken Trust
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-350 shrink-0" />
                        Authorized Solar Partner
                      </div>
                    </div>
                  </div>

                  {/* Bento feature Grid column */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 bg-[#FAF9F6] border border-slate-100 rounded-2xl text-left space-y-2">
                      <span className="text-2xl">🏆</span>
                      <h4 className="font-sans font-black text-slate-800 text-xs uppercase tracking-wide">58 Years Premium Legacy</h4>
                      <p className="text-[11px] text-slate-550 leading-relaxed font-semibold">Serving three generations of buyers with certified high durability components and solar assemblies.</p>
                    </div>
                    <div className="p-6 bg-[#FAF9F6] border border-slate-100 rounded-2xl text-left space-y-2">
                      <span className="text-2xl">🌱</span>
                      <h4 className="font-sans font-black text-slate-800 text-xs uppercase tracking-wide">100% Genuine Brands</h4>
                      <p className="text-[11px] text-slate-550 leading-relaxed font-semibold">We reject sub-standard stock. Handpicked Jinko Solar, Schneider Electric, Fast Cables, and Osaka tubular packs.</p>
                    </div>
                    <div className="p-6 bg-[#FAF9F6] border border-slate-100 rounded-2xl text-left space-y-2">
                      <span className="text-2xl">🛠️</span>
                      <h4 className="font-sans font-black text-slate-800 text-xs uppercase tracking-wide">Expert Service Team</h4>
                      <p className="text-[11px] text-slate-550 leading-relaxed font-semibold">We provide real load analyses, precise site plans, and fast local deliveries to your properties or remote farms.</p>
                    </div>
                    <div className="p-6 bg-amber-500/10 border border-amber-500/15 rounded-2xl text-left space-y-2 flex flex-col justify-between">
                      <div>
                        <span className="text-2xl">⚡</span>
                        <h4 className="font-sans font-black text-slate-800 text-xs uppercase tracking-wide font-extrabold text-slate-900">Save 90% power bills</h4>
                      </div>
                      <button
                        onClick={() => {
                          setCurrentView('solar');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-xs font-mono font-black text-[#EAA814] flex items-center gap-1 hover:underline cursor-pointer uppercase tracking-wider text-left bg-transparent border-none mt-2"
                      >
                        Calculate Solar Yields →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'products':
        return (
          <motion.div
            key="products"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <ProductSection />
          </motion.div>
        );
      case 'lighting':
        return (
          <motion.div
            key="lighting"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <LightingShowcase />
          </motion.div>
        );
      case 'solar':
        return (
          <motion.div
            key="solar"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <SolarSolutions />
          </motion.div>
        );
      case 'testimonials':
        return (
          <motion.div
            key="testimonials"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <Testimonials />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <AboutStore />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="bg-white min-h-[60vh] py-16"
          >
            <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#F39C12] uppercase font-bold tracking-widest">
                  ESTABLISHED SINCE 1968
                </span>
                <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
                  Nasir Electric Store (N.E.S)
                </h1>
                <p className="text-sm text-slate-500 max-w-2xl mx-auto font-sans leading-relaxed">
                  Serving three generations of customers in Mailsi and South Punjab with absolute trust, authentic brand warranties, and customized solar & architectural lighting.
                </p>
              </div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6"
              >
                {/* Location Card */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    show: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    window.open('https://www.google.com/maps/search/?api=1&query=Nasir+Electric+Store+Mitru+Road+Mailsi', '_blank');
                  }}
                  className="p-6 bg-slate-50 border border-slate-205 rounded-2xl text-left flex flex-col justify-between gap-4 transition-all duration-305 hover:shadow-lg hover:border-[#F1C40F]/40 cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F39C12]/10 flex items-center justify-center text-[#F39C12] transition-colors group-hover:bg-[#F39C12] group-hover:text-white shrink-0 shadow-xs">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wider block">Main Showroom</span>
                        <h3 className="font-sans font-black text-xs text-slate-800 uppercase tracking-wider">Store Location</h3>
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-[13px] text-slate-705 font-bold font-sans leading-relaxed">
                      Mitru Road, Near National Bank, Mailsi, District Vehari, Punjab.
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F39C12] mt-2 group-hover:underline">
                    Get Directions <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </motion.div>

                {/* Phone Card */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    show: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    window.open('tel:+923037985478', '_self');
                  }}
                  className="p-6 bg-slate-50 border border-slate-205 rounded-2xl text-left flex flex-col justify-between gap-4 transition-all duration-305 hover:shadow-lg hover:border-[#F1C40F]/40 cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F39C12]/10 flex items-center justify-center text-[#F39C12] transition-colors group-hover:bg-[#F39C12] group-hover:text-white shrink-0 shadow-xs">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wider block">Voice & Cellular</span>
                        <h3 className="font-sans font-black text-xs text-slate-800 uppercase tracking-wider">Phone Number</h3>
                      </div>
                    </div>
                    
                    <p className="text-sm font-black text-slate-800 font-sans tracking-wide leading-tight">
                      +92 303 7985478
                    </p>
                    <p className="text-[11px] text-slate-500 font-bold font-sans leading-relaxed">
                      Call desk is open to assist with physical specifications, pricing, and stock status.
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F39C12] mt-2 group-hover:underline">
                    Tap to Call Store <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </motion.div>

                {/* WhatsApp Card */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    show: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const whatsappUrl = `https://wa.me/923037985478?text=Assalamu%20Alaikum%20Nasir%20Electric%20Store%2C%20I'd%20like%20to%20inquire%20about%20your%20product%20catalog%20availability.`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="p-6 bg-slate-50 border border-slate-205 rounded-2xl text-left flex flex-col justify-between gap-4 transition-all duration-305 hover:shadow-lg hover:border-emerald-500/40 cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100/30 flex items-center justify-center text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white shrink-0 shadow-xs">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-emerald-600 font-bold uppercase tracking-wider block">Chat & Specs Desk</span>
                        <h3 className="font-sans font-black text-xs text-slate-800 uppercase tracking-wider">WhatsApp Number</h3>
                      </div>
                    </div>
                    
                    <p className="text-sm font-black text-slate-800 font-sans tracking-wide leading-tight">
                      +92 303 7985478
                    </p>
                    <p className="text-[11px] text-slate-500 font-bold font-sans leading-relaxed">
                      Send product snapshots or spec sheets to receive instant price computations.
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 mt-2 group-hover:underline">
                    Inquire on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </motion.div>

                {/* Email Card */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    show: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    window.open('mailto:info@nasirelectricstore.com', '_self');
                  }}
                  className="p-6 bg-slate-50 border border-slate-205 rounded-2xl text-left flex flex-col justify-between gap-4 transition-all duration-305 hover:shadow-lg hover:border-[#F1C40F]/45 cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-100/30 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white shrink-0 shadow-xs">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-blue-600 font-bold uppercase tracking-wider block">Corporate & Quotes</span>
                        <h3 className="font-sans font-black text-xs text-slate-800 uppercase tracking-wider">Email Address</h3>
                      </div>
                    </div>
                    
                    <p className="text-[11px] font-black text-slate-800 font-sans truncate tracking-tight leading-tight">
                      info@nasirelectricstore.com
                    </p>
                    <p className="text-[11px] text-slate-500 font-bold font-sans leading-relaxed">
                      For corporate inquiries, official quotation sheets, or heavy energy installations.
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F39C12] mt-2 group-hover:underline">
                    Send Mail Message <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </motion.div>
              </motion.div>

              {/* Polished Showroom Timing Alert Banner */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-slate-50 border border-slate-200/60 p-4.5 rounded-2xl text-left max-w-xl mx-auto">
                <div className="w-9 h-9 rounded-xl bg-[#F39C12]/10 flex items-center justify-center text-[#F39C12] shrink-0">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-0.5 text-center sm:text-left">
                  <span className="text-[10px] font-mono text-slate-400 font-extrabold uppercase tracking-widest block">Showroom Timing Policy</span>
                  <p className="text-xs sm:text-[13px] text-slate-705 font-bold leading-relaxed">
                    Open <strong className="text-slate-900 font-black">Every Single Day</strong> (Mon – Sun): <span className="text-[#EAA814] font-black font-mono">09:00 AM – 08:00 PM</span>
                  </p>
                </div>
              </div>

              {/* Direct secure quoting panel */}
              <div className="p-8 bg-slate-900 text-white rounded-3xl text-left relative overflow-hidden shadow-xl mt-8">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F1C40F]/10 rounded-full blur-3xl -z-0" />
                <div className="relative z-10 space-y-4 max-w-lg">
                  <span className="text-[10px] font-mono uppercase bg-white/10 text-[#F1C40F] font-bold px-2.5 py-1 rounded-full border border-white/5">
                    Direct Quotation Setup
                  </span>
                  <h3 className="font-display font-black text-xl sm:text-2xl tracking-tight">
                    Planning a detailed residential solar setup or commercial grid?
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans font-medium">
                    Discuss customized brackets, specific tubular inverter batteries, net-metering legal authorization, or customized multi-room setups directly with our lead sales engineers via WhatsApp.
                  </p>
                  <button
                    onClick={() => {
                      const whatsappUrl = `https://wa.me/923037985478?text=Hi%2C%20I'd%20like%20to%20get%20in%20touch%20about%20a%20custom%20electrical%2Fsolar%20consultation%20for%2520my%2520property.`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="mt-2 bg-[#F1C40F] hover:bg-[#EAA814] text-slate-900 text-xs uppercase font-sans font-black tracking-widest px-6 py-3.5 rounded-xl cursor-pointer shadow-md flex items-center gap-1.5"
                  >
                    Send Direct Message →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="relative min-h-[70vh]">
      <AnimatePresence mode="wait">
        {renderView()}
      </AnimatePresence>
    </main>
  );
}

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] selection:bg-[#F1C40F] selection:text-[#1E293B] leading-normal antialiased">
        {/* Navigation Head Utility and Brand navs */}
        <Navbar />

        {/* Master Section Router Grid strictly matching routing guidelines */}
        <MainContent />

        {/* Cart/Inquiry confirmation Drawer modal */}
        <InquiryModal />

        {/* Deep, professional corporate Footer exact to directory specs */}
        <Footer />
      </div>
    </AppProvider>
  );
}
