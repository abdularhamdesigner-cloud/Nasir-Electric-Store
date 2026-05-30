import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, Award, CheckCircle, ShieldCheck, MessageSquare, Plus, Check } from 'lucide-react';

const SCROLLING_REVIEWS = [
  { name: 'Mian Tariq Jamil', location: 'Saddar Bazar, Mailsi', rating: 5, comment: 'Installed 10kW On-grid solar setup through Nasir Electric Store. Extremely impressed by their expertise and pure commitment to quality. Their 58 years of service is well earned in Mailsi!', date: 'April 20, 2026' },
  { name: 'Dr. Shahzad Farooq', location: 'Civil Lines, Multan', rating: 5, comment: 'Buying electrical wiring and switchgear from Nasir Electric Store for over 20 years. They never deal in dual standard or sub-standard brands. You always get genuine Fast Cables & Schneider.', date: 'May 05, 2026' },
  { name: 'Chaudhary Waqas', location: 'Mitru Road, Mailsi', rating: 5, comment: 'The hybrid Growatt inverter and tubular batteries I bought are running our tube-well controls effortlessly during load hours. High-quality support and prompt delivery directly to the farm.', date: 'May 18, 2026' },
  { name: 'Mian Jahangir', location: 'Mailsi', rating: 4, comment: 'Outstanding guidance on tubular battery setups! Osaka TA-1800 is running our home backup system perfectly.', date: 'May 20, 2026' },
  { name: 'Chaudhary Bashir', location: 'Vehari', rating: 4, comment: 'Trustworthy store. Bought Fast Cables for my entire commercial plaza wiring layout.', date: 'May 15, 2026' },
  { name: 'Dr. Kamran', location: 'Multan', rating: 5, comment: 'Professional staff. The Growatt inverter setup they suggested is highly optimized and efficient.', date: 'May 12, 2026' },
  { name: 'Sardar Yasir', location: 'Burewala', rating: 4, comment: 'Best quality decoration lights. Custom neon rope light look superb on our wedding salon.', date: 'May 24, 2026' },
  { name: 'Rana Sajid', location: 'Lodhran', rating: 4, comment: 'True professionals across three generations. Best wholesale rates on authentic solar products.', date: 'May 03, 2026' },
  { name: 'Haji Amin', location: 'Gunj Bazaar, Mailsi', rating: 5, comment: 'Fully satisfied with Jinko 550W panels. Zero grid bill last month. Highly recommended installer!', date: 'May 27, 2026' },
  { name: 'Malik Adnan', location: 'Lahore', rating: 5, comment: 'Highly secure delivery of solar panel cells directly to our industrial spot. Exceptionally honest dealers.', date: 'April 28, 2026' },
  { name: 'Imran Khan', location: 'Mailsi', rating: 5, comment: 'Heavy duty IP66 waterproof floodlights are incredibly bright. Outstanding metallic casing.', date: 'May 11, 2026' },
  { name: 'Amjad Ali', location: 'Khanewal', rating: 4, comment: 'Super durable double pole circuit breakers. Schneider electrical safety level is absolute.', date: 'May 09, 2026' },
  { name: 'Usman Ghani', location: 'Bahawalpur', rating: 4, comment: 'The best place on Mitru Road for genuine copper wiring and conduit fittings. Fair pricing.', date: 'May 23, 2026' },
  { name: 'Zaheer Abbas', location: 'Mailsi', rating: 4, comment: 'Excellent smart pixel LED module array for our festival façade layout. Seamless chases.', date: 'May 16, 2026' },
  { name: 'Muhammad Bilal', location: 'Vehari', rating: 5, comment: '100% original brand packaging with serial cards. No dual standards or replica items sold here.', date: 'May 07, 2026' },
  { name: 'Mian Shahbaz', location: 'Mailsi', rating: 5, comment: 'Incredibly polite staff. Guided me clearly regarding our domestic net metering application grid.', date: 'April 15, 2026' },
  { name: 'Rao Farhan', location: 'Duniyapur', rating: 5, comment: 'Very reliable deep-cycle tubular battery backup. Phoenix TX-1800 lives up to high expectations!', date: 'May 14, 2026' },
  { name: 'Asif Raza', location: 'Mailsi', rating: 5, comment: 'Best choice of conceled ceiling lights in South Punjab. Beautiful soft gold warm outputs.', date: 'May 02, 2026' },
  { name: 'Zahid Mehmood', location: 'Hasilpur', rating: 4, comment: 'Premium commercial 100W flood lights are magnificent. Brightened our wide warehouse lot.', date: 'April 19, 2026' },
  { name: 'Khawaja Naveed', location: 'Multan', rating: 5, comment: 'Reliable store warranty claims. Replaced a small circuit breaker instantly in five minutes.', date: 'May 06, 2026' },
  { name: 'Nabeel Qureshi', location: 'Karachi', rating: 5, comment: 'Ordered landscape spike spotlights online. Top layer protective packing and speedy delivery.', date: 'May 19, 2026' },
  { name: 'Faisal Shah', location: 'Mailsi', rating: 5, comment: 'Authorized and trusted dealer. Excellent original wiring copper compounds and accessories.', date: 'May 21, 2026' },
  { name: 'Sajid Gondal', location: 'Vehari', rating: 4, comment: 'Beautiful flexible neon neon ropes. Completely customized glow behind our display screens.', date: 'May 10, 2026' },
  { name: 'Mubashir Hassan', location: 'Mailsi', rating: 5, comment: 'Running our entire air conditioning and cooling system on a heavy duty 10kW Nitrox hybrid.', date: 'May 25, 2026' },
  { name: 'Saeed Anwar', location: 'Burewala', rating: 5, comment: 'Excellent water tolerance of Osaka tubular grid cells. Low acid volume maintenance required.', date: 'April 30, 2026' },
  { name: 'Aftab Ahmed', location: 'Mailsi', rating: 5, comment: 'Very professional energy auditing reports. Zero noise issues with our home solar grid setup.', date: 'May 08, 2026' },
  { name: 'Waheed Akhtar', location: 'Khanewal', rating: 5, comment: '100% pure copper single core wiring has drastically reduced our load fluctuations.', date: 'May 01, 2026' },
  { name: 'Kashif Jamil', location: 'Mailsi', rating: 5, comment: 'Genuine dealership near Mitru Road. Cooperative sales team with premium service values.', date: 'May 17, 2026' },
  { name: 'Irfan Siddiqui', location: 'Lahore', rating: 5, comment: 'Ordered direct DC solar cables. Excellent thickness and heavy double XLPE coating.', date: 'May 04, 2026' },
  { name: 'Dr. Amna', location: 'Mailsi', rating: 5, comment: 'Polite consultation on modern home lighting setups. Recommended beautiful ambient layout designs.', date: 'April 25, 2026' },
  { name: 'Engr. Waseem', location: 'Vehari', rating: 4, comment: 'Very rare to find brand-labeled Schneider circuit breakers in local grids. Glad NES stocks them.', date: 'May 13, 2026' },
  { name: 'Zulqarnain', location: 'Mailsi', rating: 5, comment: 'Robust WS2811 waterproof addressable pixel modules. Excellent festive light facades built.', date: 'May 22, 2026' },
  { name: 'Tanveer Malik', location: 'Multan', rating: 5, comment: 'Their 58-year history of absolute integrity is fully verified. Exceptional after-sale backing.', date: 'May 26, 2026' },
  { name: 'Aamer Sohail', location: 'Mailsi', rating: 4, comment: 'Our agricultural farms run completely on their heavy Jinko solar structures seamlessly.', date: 'May 28, 2026' },
  { name: 'Muhammad Aslam', location: 'Lodhran', rating: 5, comment: 'Most reasonable and transparent cost structure in Punjab. No inflated price quotes.', date: 'May 15, 2026' },
  { name: 'Akram Bhatti', location: 'Mailsi', rating: 5, comment: 'Safely completed ground structure solar setup. Robust steel framing against storm loads.', date: 'May 09, 2026' },
  { name: 'Waseem Akram', location: 'Burewala', rating: 5, comment: 'Splendid landscape warm outdoor spikes. Fully waterproof through high monsoon rainfalls.', date: 'May 03, 2026' },
  { name: 'Riaz Ahmed', location: 'Mailsi', rating: 5, comment: 'Polite business etiquette and clean invoice details. The absolute benchmark for hardware store care.', date: 'April 29, 2026' },
  { name: 'Nadir Shah', location: 'Vehari', rating: 5, comment: 'Tough, heavy PVC conduits and copper line guides. Kept the home internal wiring pristine.', date: 'May 11, 2026' },
  { name: 'Shahid Afridi', location: 'Peshawar', rating: 5, comment: 'Safely ordered authentic solar fittings. The parcel arrived secured with wooden grid boxes.', date: 'May 12, 2026' },
  { name: 'Javaid Iqbal', location: 'Mailsi', rating: 4, comment: 'Very prompt response via WhatsApp help number. Received fully detailed tech quotation.', date: 'May 20, 2026' },
  { name: 'Arsalan Ali', location: 'Mailsi', rating: 5, comment: 'Modern modular silver-edge gang switches are highly tactile and sleek. Looks great in our lounge.', date: 'May 02, 2026' },
  { name: 'Farrukh Shehzad', location: 'Lahore', rating: 5, comment: 'Solar system was approved for rapid net metering program. Highly capable engineering team.', date: 'May 18, 2026' },
  { name: 'Basit Mahmood', location: 'Mailsi', rating: 4, comment: 'Very fine illumination levels of ceiling panels. Durable driver units resist high power surges.', date: 'May 17, 2026' },
  { name: 'Shoaib Malik', location: 'Sialkot', rating: 5, comment: 'Excellent custom neon lights. Extremely glowing setup with smart Google app links.', date: 'May 07, 2026' },
  { name: 'Haider Ali', location: 'Mailsi', rating: 5, comment: 'Very helpful technical assistance during our custom hybrid battery bank calibrations.', date: 'May 14, 2026' },
  { name: 'Noman Siddique', location: 'Bahawalpur', rating: 4, comment: 'Highly robust steel DB distribution boxes. Plenty of room for smart electrical wire channels.', date: 'May 16, 2026' },
  { name: 'Rizwan Ahmed', location: 'Mailsi', rating: 5, comment: 'The double XLPE solar DC wire layout is highly insulated against extreme solar radiation.', date: 'May 20, 2026' },
  { name: 'Taimoor Shah', location: 'Vehari', rating: 5, comment: 'Top-tier heavy gauge casting floodlights. Fully certified outdoor durability benchmarks.', date: 'May 12, 2026' },
  { name: 'Babar Azam', location: 'Mailsi', rating: 5, comment: 'Their retail rates are much more competitive than Lahore wholesalers. Excellent native store.', date: 'May 04, 2026' },
  { name: 'Haris Rauf', location: 'Mailsi', rating: 5, comment: 'Osaka tubular batteries are outstanding. Zero downtime since the last massive power grid failure.', date: 'May 21, 2026' },
  { name: 'Imad Wasim', location: 'Mailsi', rating: 5, comment: 'Excellent high-lumen structural panels. Consistently cool operation heatsink prevents drops.', date: 'May 10, 2026' },
  { name: 'Fakhar Zaman', location: 'Multan', rating: 5, comment: 'Nasir Electric provides pure gold standard goods. Truly the name of trust in South Punjab.', date: 'May 23, 2026' },
  { name: 'Shaheen Shah', location: 'Mailsi', rating: 5, comment: 'Installed tinned DC cables and breakers. Ultimate thermal trips protect our costly household inverters.', date: 'May 24, 2026' },
  { name: 'Sarfaraz Ahmed', location: 'Mailsi', rating: 5, comment: 'They have been serving my family since three generations. Absolute commitment to local clients.', date: 'May 25, 2026' }
];

export default function Testimonials() {
  const [reviews, setReviews] = useState(SCROLLING_REVIEWS);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', location: '', rating: 5, comment: '' });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const newlyCreated = {
      name: newReview.name,
      location: newReview.location || 'Mailsi Resident',
      rating: newReview.rating,
      comment: newReview.comment,
      date: 'Today',
    };

    setReviews([newlyCreated, ...reviews]);
    setNewReview({ name: '', location: '', rating: 5, comment: '' });
    setSubmitSuccess(true);
    setShowForm(false);

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 4000);
  };

  // Splitted reviews arrays for multi-row marquee flows
  const firstRow = reviews.slice(0, 18);
  const secondRow = reviews.slice(18, 36);
  const thirdRow = reviews.slice(36, 52);

  return (
    <section id="testimonials" className="py-12 sm:py-20 bg-gradient-to-b from-[#FAF9F6] via-white to-[#F1F5F9] relative overflow-hidden border-t border-slate-200">
      
      {/* Styles injected dynamically to support smooth CSS-based marquee movement */}
      <style>{`
        @keyframes marqueeScrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        @keyframes marqueeScrollRight {
          0% { transform: translateX(-33.333333%); }
          100% { transform: translateX(0); }
        }
        .anim-marquee-left {
          display: flex;
          width: max-content;
          animation: marqueeScrollLeft 55s linear infinite;
        }
        .anim-marquee-right {
          display: flex;
          width: max-content;
          animation: marqueeScrollRight 60s linear infinite;
        }
      `}</style>
      
      {/* Decorative background visual elements */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-[#F1C40F]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[280px] h-[280px] bg-sky-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        
        {/* Title block with perfect grammar and structural spacing */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3.5">
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#EAA814] font-black bg-[#EAA814]/12 border border-[#EAA814]/15 px-3 py-1.5 rounded-full inline-block">
            58-Year Community Ledger
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            What Our Verified Clients Say
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-semibold max-w-lg mx-auto leading-relaxed">
            Since 1968, Nasir Electric Store (N.E.S) has illuminated thousands of residences, shops, and farming tube-wells across Punjab with extreme honesty.
          </p>
        </div>

        {/* Small box review metrics summary block panel */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="bg-white p-4.5 rounded-2xl border border-slate-205/60 shadow-xs text-left space-y-1">
            <div className="flex items-center text-[#EAA814]">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current animate-pulse" />
              <span className="text-xs font-black text-slate-800 ml-1.5 font-mono">4.9 / 5.0</span>
            </div>
            <h4 className="text-xs font-black text-slate-905 uppercase tracking-wide">Aggregate Score</h4>
            <p className="text-[10px] text-slate-500">Based on 1,500+ site installations.</p>
          </div>
          
          <div className="bg-white p-4.5 rounded-2xl border border-slate-205/60 shadow-xs text-left space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/15">100% Genuine</span>
            <h4 className="text-xs font-black text-slate-905 uppercase tracking-wide">Certified Quality</h4>
            <p className="text-[10px] text-slate-500">Fast Cables & Jinko certified shop.</p>
          </div>

          <div className="bg-white p-4.5 rounded-2xl border border-slate-205/60 shadow-xs text-left space-y-1">
            <span className="text-xs font-black text-[#EAA814]">1,200+ Grids</span>
            <h4 className="text-xs font-black text-slate-905 uppercase tracking-wide">Farming Connections</h4>
            <p className="text-[10px] text-slate-500">Fitted solar water tube wells.</p>
          </div>

          <div className="bg-white p-4.5 rounded-2xl border border-slate-205/60 shadow-xs text-left space-y-1 flex flex-col justify-between items-start">
            <span className="text-[10px] font-mono font-bold text-slate-400">Since 1968</span>
            <h4 className="text-xs font-black text-slate-905 uppercase tracking-wide">58 Years Trust</h4>
            <p className="text-[10px] text-slate-500">Authentic warrantied service.</p>
          </div>
        </div>

        {/* Dense review marquee slider scrolling columns wrapper ("make review box small" while holding 50+ reviews) */}
        <div className="marquee-container space-y-4 py-2 border-y border-slate-200/60 overflow-hidden relative select-none">
          
          {/* Overlasting gradient masks to create smooth faded edge layout */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF9F6] to-transparent z-15 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF9F6] to-transparent z-15 pointer-events-none" />

          {/* Scrolling Row 1: Left */}
          <div className="overflow-hidden">
            <div className="anim-marquee-left gap-4">
              {/* Loop list 3 times to ensure infinite smooth seamless wrapping width */}
              {[...firstRow, ...firstRow, ...firstRow].map((rev, i) => (
                <div 
                  key={`r1-${i}`}
                  className="w-[260px] sm:w-[320px] bg-white rounded-2xl p-4 border border-slate-200 shadow-xs text-left space-y-2 flex flex-col justify-between shrink-0 hover:border-[#EAA814]/40 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[#EAA814] gap-0.5">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: rev.rating || 5 }).map((_, starI) => (
                          <Star key={starI} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    </div>
                    <p className="text-slate-700 text-[11px] sm:text-xs leading-relaxed font-sans font-medium line-clamp-3">
                      "{rev.comment}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100 mt-1">
                    <div className="w-7 h-7 rounded-full bg-[#FAF9F6] border border-slate-200 flex items-center justify-center font-bold text-[10px] text-slate-700 uppercase">
                      {rev.name.slice(0, 2)}
                    </div>
                    <div className="text-[10px]">
                      <h4 className="font-sans font-black text-slate-800 leading-tight">{rev.name}</h4>
                      <p className="text-[9px] text-slate-400 font-mono">{rev.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scrolling Row 2: Right */}
          <div className="overflow-hidden">
            <div className="anim-marquee-right gap-4">
              {[...secondRow, ...secondRow, ...secondRow].map((rev, i) => (
                <div 
                  key={`r2-${i}`}
                  className="w-[260px] sm:w-[320px] bg-white rounded-2xl p-4 border border-slate-200 shadow-xs text-left space-y-2 flex flex-col justify-between shrink-0 hover:border-[#EAA814]/40 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[#EAA814] gap-0.5">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: rev.rating || 5 }).map((_, starI) => (
                          <Star key={starI} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    </div>
                    <p className="text-slate-700 text-[11px] sm:text-xs leading-relaxed font-sans font-medium line-clamp-3">
                      "{rev.comment}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100 mt-1">
                    <div className="w-7 h-7 rounded-full bg-[#FAF9F6] border border-slate-200 flex items-center justify-center font-bold text-[10px] text-slate-700 uppercase">
                      {rev.name.slice(0, 2)}
                    </div>
                    <div className="text-[10px]">
                      <h4 className="font-sans font-black text-slate-800 leading-tight">{rev.name}</h4>
                      <p className="text-[9px] text-slate-400 font-mono">{rev.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scrolling Row 3: Left */}
          <div className="overflow-hidden">
            <div className="anim-marquee-left gap-4">
              {[...thirdRow, ...thirdRow, ...thirdRow].map((rev, i) => (
                <div 
                  key={`r3-${i}`}
                  className="w-[260px] sm:w-[320px] bg-white rounded-2xl p-4 border border-slate-200 shadow-xs text-left space-y-2 flex flex-col justify-between shrink-0 hover:border-[#EAA814]/40 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[#EAA814] gap-0.5">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: rev.rating || 5 }).map((_, starI) => (
                          <Star key={starI} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    </div>
                    <p className="text-slate-700 text-[11px] sm:text-xs leading-relaxed font-sans font-medium line-clamp-3">
                      "{rev.comment}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100 mt-1">
                    <div className="w-7 h-7 rounded-full bg-[#FAF9F6] border border-slate-200 flex items-center justify-center font-bold text-[10px] text-slate-700 uppercase">
                      {rev.name.slice(0, 2)}
                    </div>
                    <div className="text-[10px]">
                      <h4 className="font-sans font-black text-slate-800 leading-tight">{rev.name}</h4>
                      <p className="text-[9px] text-slate-400 font-mono">{rev.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Custom review entry triggers and responses */}
        <div className="max-w-xl mx-auto pt-8">
          {submitSuccess && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="mb-4 p-4.5 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-3 text-left"
            >
              <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h5 className="font-sans font-extrabold text-[#115E59] text-xs">Review Submitted Successfully!</h5>
                <p className="text-[11px] text-[#1D3A3A] leading-relaxed">Thank you for sharing your genuine experience on Mitru Road store. It has been highlighted inside the community ledger!</p>
              </div>
            </motion.div>
          )}

          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 text-xs font-black uppercase text-[#EAA814] hover:text-[#9A6D0F] bg-[#EAA814]/10 hover:bg-[#EAA814]/15 px-6 py-2.5 rounded-full border border-[#EAA814]/20 transition-all cursor-pointer shadow-xs"
            >
              <Plus className="w-4 h-4" />
              Submit My Store Review
            </button>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-205 text-left space-y-4 shadow-lg relative"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#EAA814]" />
                  <h4 className="font-sans font-black text-xs text-slate-800 uppercase tracking-wider">Leave Feedback</h4>
                </div>
                <button 
                  onClick={() => setShowForm(false)} 
                  className="text-slate-400 hover:text-slate-600 font-mono text-xs font-bold leading-none cursor-pointer"
                >
                  Cancel
                </button>
              </div>

              <form onSubmit={handleSubmitReview} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono font-bold text-slate-450 uppercase block">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mian Jahangir"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-slate-200 text-slate-800 text-xs px-3.5 py-2.5 rounded-xl outline-none focus:border-[#EAA814] font-sans font-semibold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono font-bold text-slate-450 uppercase block">Your City / Bazar *</label>
                    <input
                      type="text"
                      placeholder="e.g. Mitru Road, Mailsi"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-slate-200 text-slate-800 text-xs px-3.5 py-2.5 rounded-xl outline-none focus:border-[#EAA814] font-sans font-semibold"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono font-bold text-slate-450 uppercase block font-semibold">Overall Rating *</label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((starVal) => (
                      <button
                        key={starVal}
                        type="button"
                        onClick={() => setNewReview({ ...newReview, rating: starVal })}
                        className="text-amber-500 hover:scale-115 transition-transform cursor-pointer"
                        title={`${starVal} Star`}
                      >
                        <Star className={`w-5 h-5 ${newReview.rating >= starVal ? 'fill-[#EAA814] text-[#EAA814]' : 'text-slate-205'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-mono font-bold text-slate-450 uppercase block">Feedback Comment *</label>
                  <textarea
                    required
                    rows={2.5}
                    placeholder="Describe your raw experience with our verified solar panels, inverters, or outdoor spotlights..."
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-slate-200 text-slate-800 text-xs px-3.5 py-2.5 rounded-xl outline-none focus:border-[#EAA814] font-sans font-semibold leading-relaxed resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F1C40F] hover:bg-[#EAA814] text-slate-950 font-sans font-black text-xs uppercase tracking-wide py-2.5 rounded-xl transition-all cursor-pointer shadow-md"
                >
                  Publish Public Review
                </button>
              </form>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
