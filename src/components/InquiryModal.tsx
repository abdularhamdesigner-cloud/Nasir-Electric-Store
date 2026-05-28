import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Award, FileText, Globe } from 'lucide-react';

export default function InquiryModal() {
  const {
    cart,
    clearCart,
    addToCart,
    activeProductDetail,
    setActiveProductDetail,
    isInquiryOpen,
    setIsInquiryOpen,
  } = useApp();

  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Mailsi',
    address: '',
    notes: '',
  });

  // Calculate totals
  const cartTotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const selectedProduct = cart.length > 0 ? cart[0].product : null;

  // Form submit -> WhatsApp payload generator
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    // Formatting string for WhatsApp pre-filled text
    let message = `*M.E.S - NASIR ELECTRIC STORE*\n`;
    message += `_Established since 1968 — 58 Years of Trust_\n`;
    message += `===============================\n\n`;
    message += `*CUSTOMER DETAILS:*\n`;
    message += `• Name: ${formData.name}\n`;
    message += `• Phone: ${formData.phone}\n`;
    message += `• Location: ${formData.city}\n`;
    if (formData.address) message += `• Address: ${formData.address}\n`;
    if (formData.notes) message += `• Custom Note: ${formData.notes}\n\n`;

    message += `*PRODUCT INQUIRY DETAILS:*\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   Qty: ${item.quantity} x Price: PKR ${item.product.price.toLocaleString()}\n`;
      if (item.product.warranty) message += `   Warranty: ${item.product.warranty}\n`;
      message += `-------------------------------\n`;
    });

    message += `\n*TOTAL ESTIMATED SUM: PKR ${cartTotal.toLocaleString()}*\n\n`;
    message += `Please review our request and provide a formal shipping quote and banking details. Thank you!`;

    // Encode text
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923037985478?text=${encodedText}`;

    // Action -> Open WhatsApp (uses standard web window trigger)
    window.open(whatsappUrl, '_blank');

    setInquirySubmitted(true);
    setTimeout(() => {
      clearCart();
      setIsInquiryOpen(false);
      setInquirySubmitted(false);
      setFormData({ name: '', phone: '', city: 'Mailsi', address: '', notes: '' });
    }, 4000); // Close and flush cart gracefully
  };

  return (
    <>
      {/* Dynamic Formal WhatsApp Inquiry & Quotation form Modal */}
      <AnimatePresence>
        {isInquiryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark glass cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsInquiryOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white border border-slate-150 max-w-4xl w-full rounded-2xl overflow-hidden relative z-10 text-left shadow-2xl flex flex-col md:flex-row h-auto max-h-[90vh]"
            >
              {/* Overlay success block */}
              {inquirySubmitted ? (
                <div className="p-12 w-full text-center flex flex-col items-center justify-center space-y-6 min-h-[420px]">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-16 h-16 bg-emerald-100 border border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center self-center"
                  >
                    <CheckCircle2 className="w-9 h-9" />
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="font-sans font-black text-slate-800 text-xl">Order Assembly Redirecting</h3>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto font-sans">
                      We have compiled your product specifications and generated your quotation request. Connecting you directly on WhatsApp for instant booking & custom negotiation.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[#F1C40F] font-bold animate-pulse">
                    Routing to Secure WhatsApp Chat...
                  </span>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col md:flex-row w-full overflow-hidden">
                  
                  {/* Left Column: Form Details (Width: 3/5 on desktop) */}
                  <div className="w-full md:w-3/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[80vh] md:max-h-[90vh]">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start pb-4 border-b border-slate-100">
                        <div className="space-y-1">
                          <span className="text-[9px] font-mono text-[#EAA814] uppercase tracking-wider font-extrabold flex items-center gap-1.5 bg-[#FAF9F6] border border-[#F1C40F]/10 px-2.5 py-1 rounded-full w-max">
                            <Award className="w-3.5 h-3.5" />
                            Since 1968 — 58 Years of Trust
                          </span>
                          <h3 className="font-sans font-black text-slate-900 text-lg sm:text-xl">Request Custom Quotation</h3>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsInquiryOpen(false)}
                          className="p-1 rounded-lg hover:bg-slate-50 text-slate-400 hover:text-slate-700 cursor-pointer"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Fields */}
                      <div className="space-y-4">
                        {/* Compact Item Info Header for mobile and desktop context clarity */}
                        {selectedProduct && (
                          <div className="bg-slate-50 border border-slate-150 p-3 sm:p-4 rounded-xl flex items-start gap-3 text-left">
                            <img
                              src={selectedProduct.image}
                              alt={selectedProduct.name}
                              className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg bg-white border border-slate-200 p-1 shrink-0"
                              referrerPolicy="no-referrer"
                            />
                            <div className="space-y-1 overflow-hidden">
                              <span className="text-[8px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">
                                {selectedProduct.category.replace('-', ' ')}
                              </span>
                              <h4 className="font-sans font-extrabold text-[#1E293B] text-xs sm:text-sm line-clamp-1">
                                {selectedProduct.name}
                              </h4>
                              <p className="text-[10px] sm:text-xs text-slate-500 line-clamp-2 leading-relaxed font-sans">
                                {selectedProduct.description}
                              </p>
                              <div className="flex items-center gap-2 pt-1.5 flex-wrap">
                                <span className="font-sans font-black text-xs text-[#EAA814]">
                                  PKR {selectedProduct.price.toLocaleString()}
                                </span>
                                {selectedProduct.warranty && (
                                  <span className="text-[8px] font-sans font-bold text-emerald-600 bg-emerald-50 border border-emerald-100/50 px-1.5 py-0.5 rounded">
                                    {selectedProduct.warranty}
                                  </span>
                                )}
                              </div>
                              {/* Specs Pills */}
                              <div className="flex flex-wrap gap-1 pt-1.5">
                                {Object.entries(selectedProduct.specs).slice(0, 3).map(([k, v]) => (
                                  <span key={k} className="text-[8px] font-mono text-slate-500 bg-white border border-slate-150 rounded px-1.5 py-0.5">
                                    {k}: {v}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Instant Direct WhatsApp Checkout Option */}
                        {selectedProduct && (
                          <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
                            <div className="space-y-1">
                              <span className="text-[9px] font-mono text-emerald-600 bg-emerald-500/12 px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider block w-max">
                                ⚡ Fast-Track WhatsApp Checkout
                              </span>
                              <h4 className="font-sans font-black text-xs text-slate-900">
                                Instant Order via WhatsApp (No Form)
                              </h4>
                              <p className="text-[10px] text-slate-600 font-semibold leading-relaxed">
                                Skip typing details. Clicking below instantly formats {selectedProduct.name} specs into WhatsApp for quick checkout!
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                if (cart.length === 0) return;
                                let message = `*M.E.S - NASIR ELECTRIC STORE*\n`;
                                message += `_Established since 1968 — 58 Years of Trust_\n`;
                                message += `===============================\n\n`;
                                message += `*INSTANT WHATSAPP DIRECT PURCHASE:*\n`;
                                message += `I'd like to buy this product directly:\n\n`;
                                cart.forEach((item, index) => {
                                  message += `${index + 1}. *${item.product.name}*\n`;
                                  message += `   Price: PKR ${item.product.price.toLocaleString()}\n`;
                                  if (item.product.warranty) message += `   Warranty: ${item.product.warranty}\n`;
                                  if (item.product.specs) {
                                    message += `   Specs:\n`;
                                    Object.entries(item.product.specs).forEach(([k, v]) => {
                                      message += `   • ${k}: ${v}\n`;
                                    });
                                  }
                                  message += `-------------------------------\n`;
                                });
                                message += `\nEstimated Price: *PKR ${cartTotal.toLocaleString()}*\n\n`;
                                message += `Please inform me about availability at Mitru Road, Mailsi and payment details. Thanks!`;
                                
                                window.open(`https://wa.me/923037985478?text=${encodeURIComponent(message)}`, '_blank');
                                clearCart();
                                setIsInquiryOpen(false);
                              }}
                              className="w-full sm:w-auto shrink-0 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-[10px] sm:text-xs font-black uppercase px-4 py-2.5 rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer whitespace-nowrap"
                            >
                              <span>Order on WhatsApp</span>
                            </button>
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Name */}
                          <div className="space-y-1.5 text-left">
                            <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block font-bold">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="e.g. Mian Tariq Jamil"
                              className="w-full bg-[#FAF9F6] border border-slate-200 text-slate-800 text-xs px-4 py-3 rounded-xl outline-none focus:border-[#F1C40F] focus:ring-1 focus:ring-[#F1C40F]/30 font-sans font-semibold"
                            />
                          </div>

                          {/* Contact */}
                          <div className="space-y-1.5 text-left">
                            <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block font-bold">
                              Phone / WhatsApp *
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="e.g. 03037985478"
                              className="w-full bg-[#FAF9F6] border border-slate-200 text-slate-800 text-xs px-4 py-3 rounded-xl outline-none focus:border-[#F1C40F] focus:ring-1 focus:ring-[#F1C40F]/30 font-sans font-semibold"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* City */}
                          <div className="space-y-1.5 text-left">
                            <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block font-bold">
                              City *
                            </label>
                            <select
                              value={formData.city}
                              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                              className="w-full bg-[#FAF9F6] border border-slate-200 text-slate-800 text-xs px-4 py-3 rounded-xl outline-none focus:border-[#F1C40F] focus:ring-1 focus:ring-[#F1C40F]/30 font-sans font-semibold appearance-none"
                            >
                              <option value="Mailsi">Mailsi (Free Shipping)</option>
                              <option value="Multan">Multan</option>
                              <option value="Vehari">Vehari</option>
                              <option value="Lahore">Lahore</option>
                              <option value="Karachi">Karachi</option>
                              <option value="Islamabad">Islamabad</option>
                              <option value="Other Area">Other Pakistan Area</option>
                            </select>
                          </div>

                          {/* Address */}
                          <div className="space-y-1.5 text-left">
                            <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block font-bold">
                              Delivery Address 
                            </label>
                            <input
                              type="text"
                              value={formData.address}
                              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                              placeholder="e.g. Near Gunj Bazaar Mailsi"
                              className="w-full bg-[#FAF9F6] border border-slate-200 text-slate-800 text-xs px-4 py-3 rounded-xl outline-none focus:border-[#F1C40F] focus:ring-1 focus:ring-[#F1C40F]/30 font-sans font-semibold"
                            />
                          </div>
                        </div>

                        {/* Custom notes */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block font-bold">
                            Special Instructions or Custom Requirements
                          </label>
                          <textarea
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            placeholder="e.g. Do you need extra cables, net-metering support, specific tubular batteries or customized brackets?"
                            rows={3}
                            className="w-full bg-[#FAF9F6] border border-slate-200 text-slate-800 text-xs p-4 rounded-xl outline-none focus:border-[#F1C40F] focus:ring-1 focus:ring-[#F1C40F]/30 resize-none font-sans font-semibold"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA bar */}
                    <div className="pt-6 border-t border-slate-100 min-h-[50px] flex items-center justify-between mt-6">
                      <p className="text-[10px] font-sans text-slate-400 font-semibold leading-normal max-w-[280px]">
                        💡 Final pricing details, custom packaging, and secure bank options will be coordinated in WhatsApp directly.
                      </p>
                      <button
                        type="submit"
                        className="bg-[#F1C40F] hover:bg-[#EAA814] text-[#1E293B] font-sans font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                      >
                        <span>Send WhatsApp Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Selected Product Diagnostic Widget (Width: 2/5 on desktop) */}
                  {selectedProduct && (
                    <div className="w-full md:w-2/5 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-100 max-h-[40vh] md:max-h-[90vh] overflow-y-auto">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-200/50">
                          <FileText className="w-4 h-4 text-[#F39C12]" />
                          <h4 className="font-sans font-extrabold text-xs text-slate-800 uppercase tracking-wider">
                            Inquiry Spec Grid
                          </h4>
                        </div>

                        {/* Image inside container */}
                        <div className="w-full h-32 bg-white rounded-xl border border-slate-150 flex items-center justify-center p-4">
                          <img
                            src={selectedProduct.image}
                            alt={selectedProduct.name}
                            className="max-h-full max-w-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <div className="space-y-1 text-left">
                          <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-extrabold">
                            {selectedProduct.category.replace('-', ' ')}
                          </span>
                          <h4 className="font-sans font-bold text-xs sm:text-sm text-slate-800 line-clamp-2 leading-tight">
                            {selectedProduct.name}
                          </h4>
                        </div>

                        {/* Specs list */}
                        <div className="space-y-1.5 font-mono text-[10px] border-t border-slate-200/40 pt-3">
                          {Object.entries(selectedProduct.specs).slice(0, 4).map(([key, value]) => (
                            <div key={key} className="flex justify-between py-1 border-b border-slate-100/50">
                              <span className="text-slate-400 uppercase block">{key}</span>
                              <span className="text-slate-700 font-bold block">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Total estimate sum details */}
                      <div className="pt-4 border-t border-slate-200/65 mt-4 text-left">
                        <span className="text-[9px] font-mono text-slate-400 block font-bold leading-none uppercase">
                          Purchasing Rate Sum:
                        </span>
                        <span className="font-sans font-black text-xl text-slate-800 block mt-1">
                          PKR {selectedProduct.price.toLocaleString()}
                        </span>
                        {selectedProduct.warranty && (
                          <span className="text-[9px] font-sans text-emerald-600 block bg-emerald-50 border border-emerald-100 rounded px-1.5 py-0.5 mt-1.5 w-max font-bold">
                            ✔ {selectedProduct.warranty}
                          </span>
                        )}
                      </div>

                    </div>
                  )}

                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Deep Product Details Inspectors Panel */}
      <AnimatePresence>
        {activeProductDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop cover blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProductDetail(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white border border-slate-150 max-w-2xl w-full rounded-2xl overflow-hidden relative z-10 text-left shadow-2xl flex flex-col md:flex-row h-auto max-h-[90vh] overflow-hidden"
            >
              {/* Image Column */}
              <div className="md:w-1/2 p-6 bg-slate-50 flex items-center justify-center relative border-b md:border-b-0 md:border-r border-slate-150">
                <button
                  onClick={() => setActiveProductDetail(null)}
                  className="absolute top-4 left-4 p-1.5 rounded-lg bg-white border border-slate-200 hover:text-[#F39C12] text-slate-500 z-10 cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>

                <img
                  src={activeProductDetail.image}
                  alt={activeProductDetail.name}
                  className="max-h-[220px] md:max-h-[300px] object-contain p-2"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Information Column */}
              <div className="md:w-1/2 p-6 overflow-y-auto flex flex-col justify-between max-h-[50vh] md:max-h-none">
                <div className="space-y-4">
                  <div className="space-y-1.5 text-left">
                    <span className="text-[9px] font-mono text-[#EAA814] uppercase bg-[#FAF9F6] border border-[#F1C40F]/10 px-2.5 py-0.5 rounded-full w-max block font-bold">
                      {activeProductDetail.category.replace('-', ' ')}
                    </span>
                    <h3 className="font-sans font-black text-slate-900 text-lg leading-snug">
                      {activeProductDetail.name}
                    </h3>
                  </div>

                  {/* Core description */}
                  <p className="text-slate-600 font-sans text-xs sm:text-[13px] leading-relaxed text-left font-medium">
                    {activeProductDetail.description}
                  </p>

                  {/* Specifications Grid */}
                  <div className="space-y-2 border-t border-slate-150 pt-4">
                    <h4 className="font-sans font-extrabold text-[11px] text-slate-800 tracking-wide uppercase flex items-center gap-1.5 text-left">
                      <FileText className="w-4 h-4 text-[#F39C12]" />
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-1 gap-1.5 text-[10px] font-mono">
                      {Object.entries(activeProductDetail.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-1 border-b border-slate-100">
                          <span className="text-slate-400 uppercase block text-left">{key}</span>
                          <span className="text-slate-700 font-extrabold block text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Warranty tags if exist */}
                  {activeProductDetail.warranty && (
                    <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#F1C40F]/10 flex items-center gap-2 justify-start">
                      <Award className="w-4 h-4 text-[#F39C12] shrink-0" />
                      <span className="text-[10px] font-sans text-slate-600 font-bold">
                        ESTABLISHED WARRANTY: <strong className="text-slate-800">{activeProductDetail.warranty}</strong>
                      </span>
                    </div>
                  )}
                </div>

                {/* Sub-tray actions */}
                <div className="pt-6 border-t border-slate-150 flex flex-col sm:flex-row items-stretch sm:items-center justify-between mt-6 gap-3">
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block font-bold">Rate:</span>
                    <span className="font-sans font-black text-base md:text-lg text-slate-800">
                      PKR {activeProductDetail.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    {/* Instant Direct WhatsApp Order Link Option */}
                    <button
                      onClick={() => {
                        let message = `*M.E.S - NASIR ELECTRIC STORE*\n`;
                        message += `_Established since 1968 — 58 Years of Trust_\n`;
                        message += `===============================\n\n`;
                        message += `*DIRECT WHATSAPP INQUIRY:*\n`;
                        message += `I'd like to buy/inquire about this item:\n\n`;
                        message += `• *Product*: ${activeProductDetail.name}\n`;
                        message += `• *Price*: PKR ${activeProductDetail.price.toLocaleString()}\n`;
                        if (activeProductDetail.warranty) {
                          message += `• *Warranty*: ${activeProductDetail.warranty}\n`;
                        }
                        message += `• *Details*:\n`;
                        Object.entries(activeProductDetail.specs).forEach(([k, v]) => {
                          message += `  - ${k}: ${v}\n`;
                        });
                        message += `\nIs this available at Mitru Road, Mailsi? Please direct me regarding purchase. Thanks!`;
                        
                        window.open(`https://wa.me/923037985478?text=${encodeURIComponent(message)}`, '_blank');
                        setActiveProductDetail(null);
                      }}
                      className="bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-sans font-extrabold text-[11px] sm:text-xs tracking-wider uppercase px-4 py-2.5 sm:py-3 rounded-xl hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span className="text-sm">💬</span>
                      <span>Buy via WhatsApp</span>
                    </button>

                    <button
                      onClick={() => {
                        clearCart();
                        addToCart(activeProductDetail, 1);
                        setActiveProductDetail(null);
                        setIsInquiryOpen(true);
                      }}
                      className="bg-[#FAF9F6] border border-slate-200 hover:bg-slate-50 text-slate-700 font-sans font-extrabold text-[11px] sm:text-xs tracking-wider uppercase px-4 py-2.5 sm:py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Inquiry Form</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
