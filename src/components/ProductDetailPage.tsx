import React from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { ArrowLeft, MessageSquare, Mail, ShieldCheck, Truck, Award, Check, ChevronRight, FileText, MapPin, Phone } from 'lucide-react';
import { Product } from '../types';

export default function ProductDetailPage() {
  const { 
    activeProductDetail, 
    setActiveProductDetail, 
    clearCart, 
    addToCart, 
    setIsInquiryOpen 
  } = useApp();

  if (!activeProductDetail) return null;

  const product = activeProductDetail;

  const formatPKR = (num: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  // Compile full product details to prefill WhatsApp chat
  const handleWhatsAppInquiry = () => {
    let message = `*N.E.S - NASIR ELECTRIC STORE*\n`;
    message += `_Established since 1968 — 58 Years of Trust_\n`;
    message += `===============================\n\n`;
    message += `*NEW PRODUCT ACQUISITION/INQUIRY:*\n`;
    message += `• Product: *${product.name}*\n`;
    message += `• Category: ${product.category.toUpperCase()}\n`;
    message += `• Listed Price: PKR ${product.price.toLocaleString()}\n`;
    if (product.warranty) message += `• Official Store Warranty: ${product.warranty}\n`;
    
    // Add technical characteristics
    message += `\n*TECHNICAL SPECIFICATIONS:*\n`;
    Object.entries(product.specs).forEach(([key, val]) => {
      message += `• ${key}: ${val}\n`;
    });

    message += `\n*STORE OUTLET:* Mitru Road, Mailsi.\n`;
    message += `===============================\n`;
    message += `Assalamu Alaikum, I would like to check the availability and arrange a booking for this product. Please share confirmation. Thanks!`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923037985478?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        
        {/* Navigation Breadcrumb & Back action */}
        <button
          onClick={() => {
            setActiveProductDetail(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group inline-flex items-center gap-2.5 text-slate-800 hover:text-[#EAA814] text-xs font-bold uppercase tracking-wider mb-6 sm:mb-8 transition-colors duration-200 cursor-pointer text-left"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-slate-600" />
          <span>Back to Store Items</span>
        </button>

        {/* Detail page Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 bg-white border border-slate-200/90 shadow-lg rounded-3xl p-4 sm:p-8 md:p-10 text-left">
          
          {/* Left Column: Premium Images & Delivery highlights (5/12 columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Immersive high contrast Image Showcase Frame */}
            <div className="bg-[#FAF9F6] rounded-2xl border border-slate-100 p-6 sm:p-10 flex items-center justify-center relative min-h-[300px] sm:min-h-[420px] shadow-sm select-none">
              
              {/* Category label */}
              <span className="absolute top-4 left-4 text-[9px] font-mono text-[#EAA814] bg-[#FAF9F6] border border-[#F1C40F]/15 px-3 py-1 rounded-full uppercase font-extrabold tracking-widest leading-none">
                {product.category.replace('-', ' ')}
              </span>

              {/* Verified Product Badge */}
              <span className="absolute top-4 right-4 text-[9px] font-mono font-black uppercase tracking-widest text-white bg-emerald-500/90 border border-emerald-400 px-3 py-1 rounded-md shadow-xs leading-none">
                N.E.S CERTIFIED
              </span>

              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={product.image}
                alt={product.name}
                className="max-h-[220px] sm:max-h-[300px] object-contain transition-transform duration-350 hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Verification highlights row */}
            <div className="grid grid-cols-3 gap-3 font-sans">
              <div className="bg-[#FAF9F6] p-3 border border-[#EAA814]/20 rounded-xl flex flex-col items-center justify-center text-center space-y-1">
                <span className="text-base sm:text-lg">🛡️</span>
                <span className="text-[9px] font-sans font-black uppercase text-slate-800 tracking-wide">100% Original</span>
              </div>
              <div className="bg-[#FAF9F6] p-3 border border-slate-100 rounded-xl flex flex-col items-center justify-center text-center space-y-1">
                <span className="text-base sm:text-lg">📦</span>
                <span className="text-[9px] font-sans font-black uppercase text-slate-800 tracking-wide">Brand Packing</span>
              </div>
              <div className="bg-[#FAF9F6] p-3 border border-slate-100 rounded-xl flex flex-col items-center justify-center text-center space-y-1">
                <span className="text-base sm:text-lg">⚡</span>
                <span className="text-[9px] font-sans font-black uppercase text-slate-800 tracking-wide">N.E.S Certified</span>
              </div>
            </div>

            {/* Store logistics, dispatch info */}
            <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl space-y-3.5 font-sans">
              
              <div className="flex gap-3 text-left">
                <Truck className="w-5 h-5 text-[#EAA814] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h5 className="font-sans font-black text-xs text-slate-800 uppercase tracking-wider">Fast Secure Logistics</h5>
                  <p className="text-[11px] text-slate-500 font-bold leading-relaxed">
                    Wooden protective crating provided free around Mailsi for tubular batteries, solar panels and heavy breakers.
                  </p>
                </div>
              </div>
              
              {product.warranty && (
                <div className="flex gap-3 text-left border-t border-slate-200/50 pt-3.5">
                  <Award className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <h5 className="font-sans font-black text-xs text-slate-800 uppercase tracking-wider">Physical store Warranty</h5>
                    <p className="text-[11px] text-slate-500 font-bold leading-relaxed">
                      Instant warranty claims physically handled directly inside our main showroom on <span className="text-slate-800">Mitru Road, Mailsi</span>.
                    </p>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Right Column: Title, pricing spec details, inquiry and official direct WhatsApp buttons (7/12 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-start space-y-6 sm:space-y-8">
            
            {/* Segment Title & Metadata */}
            <div className="space-y-2.5 sm:space-y-3.5">
              
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono font-bold uppercase tracking-wider">
                <span>N.E.S CATALOG</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                <span className="text-[#EAA814]">{product.category.replace('-', ' ')}</span>
              </div>

              <h1 className="font-display font-black text-xl sm:text-3.5xl lg:text-4xl text-slate-900 tracking-tight leading-tight uppercase">
                {product.name}
              </h1>

              {/* Price Tag with discount percentage badge */}
              <div className="flex items-baseline gap-3.5 pt-1 border-b border-slate-100 pb-4">
                {product.originalPrice && product.originalPrice > product.price ? (
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs sm:text-sm text-slate-400 line-through font-medium">
                      {formatPKR(product.originalPrice)}
                    </span>
                    <span className="font-sans font-black text-lg sm:text-3xl text-[#E74C3C]">
                      {formatPKR(product.price)}
                    </span>
                    <span className="text-[9px] font-sans font-black bg-red-100 text-red-650 px-2.5 py-1 rounded uppercase tracking-wider leading-none">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </div>
                ) : (
                  <span className="font-sans font-black text-lg sm:text-3xl text-slate-900">
                    {formatPKR(product.price)}
                  </span>
                )}
                
                <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-widest pl-3.5 border-l border-slate-200">
                  {product.stockStatus === 'In Stock' ? '🟢 In Stock at Showroom' : '🟡 Limited Stock'}
                </span>
              </div>

            </div>

            {/* Core Brand Description */}
            <div className="space-y-1.5">
              <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#EAA814] font-black block">Product Overview</h4>
              <p className="text-slate-650 font-sans text-xs sm:text-[14px] leading-relaxed font-bold">
                {product.description}
              </p>
            </div>

            {/* DIRECT ACTION OR INQUIRE OPTION */}
            <div className="space-y-5 bg-gradient-to-r from-emerald-50/40 to-emerald-500/5 p-5 border border-emerald-500/15 rounded-2xl">
              
              <div className="space-y-1">
                <h4 className="font-sans font-black text-xs text-[#065F46] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="text-sm">💬</span>
                  <span>Instant Verification & Ordering</span>
                </h4>
                <p className="text-[10px] text-slate-500 font-bold leading-relaxed">
                  Click below to instantly format this product's technical attributes, model guidelines, and price list, then open a direct chat conversation with Nasir Electric Store (N.E.S) on WhatsApp.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 font-sans font-black text-xs tracking-wider uppercase py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all text-white cursor-pointer shadow-md hover:shadow-lg active:scale-98"
                >
                  <span className="text-base">💬</span>
                  <span>WhatsApp Inquiry</span>
                </button>

                <button
                  onClick={() => {
                    clearCart();
                    addToCart(product, 1);
                    setIsInquiryOpen(true);
                  }}
                  className="flex-1 bg-slate-900 hover:bg-slate-800 font-sans font-black text-xs tracking-wider uppercase py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all text-white cursor-pointer shadow-md hover:shadow-lg active:scale-98"
                >
                  <span>Request Quote (Inquiry Form)</span>
                </button>
              </div>

            </div>

            {/* STORE SUPPORT CHANNELS AND EMAIL AS CONTACT OPTION (NO EMAIL FORM SUBMIT AS REQUESTED) */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              
              <h4 className="text-[10px] font-mono font-black uppercase text-slate-400 tracking-wider">
                Alternative Support & Inquiries
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs">
                
                {/* Store Phone Info */}
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#EAA814] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="block font-black text-slate-800 text-[10px] uppercase tracking-wider">Call Contact</span>
                    <a href="tel:+923037985478" className="font-bold text-slate-650 hover:underline hover:text-[#EAA814]">
                      +92 303 7985478
                    </a>
                  </div>
                </div>

                {/* Store Email Info (Added email option purely as a display contact choice as requested) */}
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="block font-black text-slate-800 text-[10px] uppercase tracking-wider">Email Inquiry</span>
                    <a href="mailto:info@nasirelectricstore.com" className="font-bold text-slate-650 hover:underline hover:text-slate-800">
                      info@nasirelectricstore.com
                    </a>
                  </div>
                </div>

                {/* Store Address Info */}
                <div className="flex items-start gap-2.5 sm:col-span-2 border-t border-slate-200/60 pt-2 text-left">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="block font-black text-slate-800 text-[10px] uppercase tracking-wider">Mitru Road Outlet</span>
                    <p className="font-bold text-slate-500 leading-relaxed text-[11px]">
                      Nasir Electric Store, Mitru Road, Near National Bank, Mailsi, District Vehari, Punjab.
                    </p>
                  </div>
                </div>

              </div>
              
            </div>

            {/* Technical Specifications Table Block */}
            <div className="space-y-3.5 pt-2 text-left">
              
              <div className="flex items-center gap-2 font-display font-black text-slate-800 text-xs uppercase tracking-wider">
                <FileText className="w-4 h-4 text-slate-405" />
                <span>Technical Specifications Data Sheet</span>
              </div>

              <div className="grid grid-cols-1 gap-1 border border-slate-200/80 rounded-2xl overflow-hidden bg-white">
                {Object.entries(product.specs).map(([key, value], idx) => (
                  <div 
                    key={key} 
                    className={`flex justify-between py-2 px-4 text-xs font-sans ${
                      idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'
                    }`}
                  >
                    <span className="text-slate-400 uppercase text-[10px] font-bold block">{key}</span>
                    <span className="text-slate-800 font-extrabold block text-right">{value}</span>
                  </div>
                ))}

                {product.warranty && (
                  <div className="flex justify-between py-2 px-4 text-xs font-sans bg-emerald-50/30 border-t border-emerald-100 font-bold">
                    <span className="text-emerald-700 uppercase text-[10px] font-black block">Manufacturer Warranty</span>
                    <span className="text-emerald-600 font-black block text-right">{product.warranty} Local Warranty Claim Desk</span>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
