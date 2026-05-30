import { motion } from 'motion/react';
import { Award, ShieldCheck, Clock, Users, Zap, CheckCircle, ChevronRight, MapPin, Building2, Eye, Target, History } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function AboutStore() {
  const { setCurrentView } = useApp();

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-20 font-sans text-left">
      
      {/* Immersive Header Banner with High-Contrast Typography */}
      <section className="bg-[#07162C] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-at-t from-blue-900/45 via-transparent to-transparent opacity-65 pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#F1C40F]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-4">
          <span className="text-[10px] font-mono text-[#F1C40F] font-black uppercase tracking-widest block bg-white/10 border border-white/10 px-3.5 py-1.5 rounded-full w-max leading-none">
            Est. 1968 — 58 Years Of Absolute Trust
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight uppercase max-w-4xl">
            Our Legacy, Your Power:<br />
            Nasir Electric Store (N.E.S)
          </h1>
          <p className="text-slate-300 font-sans text-xs sm:text-base leading-relaxed max-w-2xl font-medium">
            Mailsi’s pioneer family electrical showroom and authorized solar contractor. Delivering lifetime technical integrity, tier-1 components, and genuine local guarantees for three generations.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 space-y-16 sm:space-y-24">
        
        {/* Section 1: Our Authentic Story & Strategic Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#EAA814] font-black uppercase tracking-widest block">
                The Founder's Journey
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900 tracking-tight leading-tight uppercase">
                The Story of Nasir Electric Store
              </h2>
            </div>

            <div className="space-y-6">
              
              {/* Profile Card 1: Chaudhry Muhammad Aslam (Founder) */}
              <div id="founder-aslam-profile" className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-left">
                  
                  {/* Title Header rows */}
                  <div className="space-y-0.5 mb-3 border-b border-slate-100 pb-2">
                    <span className="text-[9px] font-mono text-[#EAA814] font-black uppercase tracking-widest block">The Legacy Founder</span>
                    <h4 className="font-display font-black text-lg text-slate-900 uppercase tracking-tight">
                      <span className="bg-[#F1C40F]/15 px-2.5 py-1 rounded-lg border-l-3 border-[#EAA814] inline-block">
                        Chaudhry Muhammad Aslam
                      </span>
                    </h4>
                    <p className="text-[11px] text-slate-450 font-extrabold uppercase tracking-widest mt-1">Founder (Est. 1968)</p>
                  </div>

                  <div className="flow-root">
                    {/* Photo Space on the Right Side - Floated so paragraph text starts exactly next to it on the left and wraps nicely */}
                    <div className="float-right ml-4 mb-2 w-28 md:w-36 h-36 md:h-44 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 hover:border-[#EAA814] relative shadow-inner group transition-all duration-300">
                      <img
                        src="https://i.ibb.co/xtNq7x54/image.png" 
                        alt="Chaudhry Muhammad Aslam"
                        className="w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-105 group-hover:contrast-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                        <span className="text-[9px] text-white font-mono uppercase bg-[#EAA814]/90 py-1 px-2.5 rounded font-black tracking-widest shadow-sm">
                          Founder
                        </span>
                      </div>
                      <div className="absolute bottom-2 left-2 bg-slate-900/90 text-[#F1C40F] text-[8px] font-mono uppercase font-black px-2 py-0.5 rounded shadow-sm border border-white/5 transition-opacity duration-350 group-hover:opacity-0">
                        Founder
                      </div>
                    </div>

                    <p className="text-xs sm:text-[13px] text-slate-650 leading-relaxed font-semibold mb-2">
                      Nasir Electric Store has been serving customers with dedication, reliability, and trust since <strong className="text-slate-800 font-extrabold">1968</strong>. Founded by <strong className="bg-[#F1C40F]/15 border-b border-[#EAA814]/30 text-slate-950 px-1.5 py-0.5 rounded font-black">Chaudhry Muhammad Aslam</strong>, the business began as a small electrical store with a simple mission: to provide quality electrical products, honest service, and long-term value to the local community.
                    </p>
                    <p className="text-xs sm:text-[13px] text-slate-650 leading-relaxed font-semibold">
                      Through decades of hard work and commitment, he earned a strong reputation for supplying dependable copper cabling and maintaining lasting relations.
                    </p>
                  </div>

                </div>
              </div>

              {/* Profile Card 2: Chaudhry Muhammad Usman (Leader / Managing Director) */}
              <div id="director-usman-profile" className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-left">
                  
                  {/* Title Header rows */}
                  <div className="space-y-0.5 mb-3 border-b border-slate-100 pb-2">
                    <span className="text-[9px] font-mono text-[#EAA814] font-black uppercase tracking-widest block">Present Leadership</span>
                    <h4 className="font-display font-black text-lg text-slate-900 uppercase tracking-tight">
                      <span className="bg-[#F1C40F]/15 px-2.5 py-1 rounded-lg border-l-3 border-[#EAA814] inline-block">
                        Chaudhry Muhammad Usman
                      </span>
                    </h4>
                    <p className="text-[11px] text-slate-450 font-extrabold uppercase tracking-widest mt-1">Managing Director</p>
                  </div>

                  <div className="flow-root">
                    {/* Photo Space on the Right Side - Floated so paragraph text starts exactly next to it on the left and wraps nicely */}
                    <div className="float-right ml-4 mb-2 w-28 md:w-36 h-36 md:h-44 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 hover:border-[#EAA814] relative shadow-inner group transition-all duration-300">
                      <img
                        src="https://i.ibb.co/svFZPy1K/Whats-App-Image-2026-05-30-at-22-13-56.jpg" 
                        alt="Chaudhry Muhammad Usman"
                        className="w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-105 group-hover:contrast-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                        <span className="text-[9px] text-white font-mono uppercase bg-[#EAA814]/90 py-1 px-2.5 rounded font-black tracking-widest shadow-sm">
                          Director
                        </span>
                      </div>
                      <div className="absolute bottom-2 left-2 bg-slate-900/90 text-[#F1C40F] text-[8px] font-mono uppercase font-black px-2 py-0.5 rounded shadow-sm border border-white/5 transition-opacity duration-350 group-hover:opacity-0">
                        Director
                      </div>
                    </div>

                    <p className="text-xs sm:text-[13px] text-slate-650 leading-relaxed font-semibold mb-2">
                      In 2002, <strong className="bg-[#F1C40F]/15 border-b border-[#EAA814]/30 text-slate-950 px-1.5 py-0.5 rounded font-black font-black">Chaudhry Muhammad Usman</strong>, the son of <strong className="text-slate-800 font-extrabold">Chaudhry Muhammad Aslam</strong>, joined the store and brought a modern vision while preserving the core values established by his father. Under his leadership, Nasir Electric Store expanded services and adapter solutions.
                    </p>
                    <p className="text-xs sm:text-[13px] text-slate-650 leading-relaxed font-semibold">
                      Today, he continues to lead with unparalleled excellence, scaling solar contracting and premium architectural fittings with high integrity.
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* Micro badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
              <div className="space-y-1">
                <span className="block font-display font-black text-slate-900 text-lg sm:text-2xl">1968</span>
                <span className="block text-[10px] uppercase font-mono tracking-wider font-extrabold text-slate-450">Year Founded</span>
              </div>
              <div className="space-y-1">
                <span className="block font-display font-black text-slate-900 text-lg sm:text-2xl">58+ Yrs</span>
                <span className="block text-[10px] uppercase font-mono tracking-wider font-extrabold text-slate-450">Unbroken History</span>
              </div>
              <div className="space-y-1">
                <span className="block font-display font-black text-slate-900 text-lg sm:text-2xl">25,000+</span>
                <span className="block text-[10px] uppercase font-mono tracking-wider font-extrabold text-slate-450">Homes Powered</span>
              </div>
              <div className="space-y-1">
                <span className="block font-display font-black text-emerald-600 text-lg sm:text-2xl">100%</span>
                <span className="block text-[10px] uppercase font-mono tracking-wider font-extrabold text-slate-450">Genuine Copper</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Historical Landmarks with modern design timeline */}
          <div className="lg:col-span-5 bg-white border border-slate-200 shadow-md rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="font-sans font-black text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <History className="w-5 h-5 text-[#EAA814]" />
              <span>Historical Milestones</span>
            </h3>

            <div className="relative border-l border-slate-150 pl-5.5 space-y-6 text-xs text-left">
              
              {/* Landmark 1 */}
              <div className="relative">
                <div className="absolute -left-7.5 top-0.5 w-4.5 h-4.5 rounded-full bg-[#FAF9F6] border-3 border-[#EAA814] flex items-center justify-center z-10" />
                <span className="font-mono font-black text-[#EAA814] block text-[11px] mb-0.5">1968</span>
                <h4 className="font-sans font-black text-slate-800 uppercase tracking-wide text-xs">The Mitru Road Genesis</h4>
                <p className="text-slate-500 font-semibold leading-relaxed mt-1">
                  Chaudhry Muhammad Aslam opens Nasir Electric Store. Providing basic cables, imported lamps, and motor starters for agricultural pumps.
                </p>
              </div>

              {/* Landmark 2 */}
              <div className="relative">
                <div className="absolute -left-7.5 top-0.5 w-4.5 h-4.5 rounded-full bg-[#FAF9F6] border-3 border-slate-400 flex items-center justify-center z-10" />
                <span className="font-mono font-black text-slate-500 block text-[11px] mb-0.5">1995</span>
                <h4 className="font-sans font-black text-slate-800 uppercase tracking-wide text-xs">Cabling Partnership Expansion</h4>
                <p className="text-slate-500 font-semibold leading-relaxed mt-1">
                  NES becomes the authorized dealer of certified 99.9% pure copper Pakistani cables. Rejecting dangerous sub-standard copy brands.
                </p>
              </div>

              {/* Landmark 3 */}
              <div className="relative">
                <div className="absolute -left-7.5 top-0.5 w-4.5 h-4.5 rounded-full bg-[#FAF9F6] border-3 border-emerald-500 flex items-center justify-center z-10" />
                <span className="font-mono font-black text-emerald-600 block text-[11px] mb-0.5">2012</span>
                <h4 className="font-sans font-black text-slate-800 uppercase tracking-wide text-xs">Solar Innovation Leap</h4>
                <p className="text-slate-500 font-semibold leading-relaxed mt-1">
                  Inaugurates specialized off-grid solar branch, supplying genuine panels, mounting frames, and hybrid smart controllers to remote locations.
                </p>
              </div>

              {/* Landmark 4 */}
              <div className="relative">
                <div className="absolute -left-7.5 top-0.5 w-4.5 h-4.5 rounded-full bg-[#FAF9F6] border-3 border-[#07162C] flex items-center justify-center z-10" />
                <span className="font-mono font-black text-slate-900 block text-[11px] mb-0.5">PRESENT</span>
                <h4 className="font-sans font-black text-slate-800 uppercase tracking-wide text-xs">Multi-Channel Showroom</h4>
                <p className="text-slate-500 font-semibold leading-relaxed mt-1">
                  Equipped with live light testing screens, advanced solar calculations, and direct instantaneous support lines for Punjab.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Section 2: Mission & Vision Cards (Side by Side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="bg-white border border-slate-200/80 shadow-md p-8 rounded-3xl space-y-4 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-[#EAA814] shadow-sm">
              <Target className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider">Our Core Objective</span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 uppercase tracking-tight">Our Mission</h3>
            </div>

            <p className="text-slate-600 font-sans text-xs sm:text-sm font-semibold leading-relaxed">
              To provide reliable electrical solutions, maintain the highest standards of customer satisfaction, and continue the legacy of trust established by our founder over 70 years ago.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#07162C] text-white p-8 rounded-3xl space-y-4 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F1C40F]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#F1C40F] shadow-sm">
              <Eye className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-300 tracking-wider">Our Aspirations</span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight">Our Vision</h3>
            </div>

            <p className="text-slate-300 font-sans text-xs sm:text-sm font-medium leading-relaxed">
              To continue being a trusted and leading supplier of electrical products by combining traditional values with modern business practices, ensuring every customer receives quality products and exceptional service.
            </p>
          </div>

        </div>

        {/* Section 3: What the Company Does (Grid of Services) */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-mono text-[#EAA814] font-black uppercase tracking-widest block bg-[#FAF9F6] border border-[#F1C40F]/10 px-3 py-1 rounded-full w-max mx-auto">
              What We Do Best
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3.5xl text-slate-900 tracking-tight uppercase">
              Our Signature Specialties
            </h2>
            <p className="text-slate-500 font-sans text-xs sm:text-sm font-semibold leading-relaxed">
              Delivering specialized, lab-certified components and bespoke site layout consulting on Mitru Road.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
            
            {/* Service 1 */}
            <div className="p-6 bg-white border border-slate-200 shadow-xs rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-black text-sm text-slate-850 uppercase tracking-wide">
                Certified Solar Installations
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-550 leading-relaxed font-semibold">
                We design and quote heavy-structure Jinko and Longi tier-1 solar packages, customized structures, and high-safety smart hybrid controllers for domestic, farm and industrial grids.
              </p>
              <ul className="text-[10px] text-slate-500 font-bold space-y-1 pl-1">
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-500">✓</span> Net Metering Certifications
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-500">✓</span> Custom mounting frames
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="p-6 bg-white border border-slate-200 shadow-xs rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-[#EAA814]">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-black text-sm text-slate-850 uppercase tracking-wide">
                Architectural Light Styling
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-550 leading-relaxed font-semibold">
                Expert spatial design for premium interior ceilings, spotlight washes, gorgeous decorative lamps, high-lux floodlighting, and custom festivity facade pixels on Mitru Road.
              </p>
              <ul className="text-[10px] text-slate-500 font-bold space-y-1 pl-1">
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-500">✓</span> Lux calculations & testing
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-500">✓</span> 3-Tone Smart LED Panels
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="p-6 bg-white border border-slate-200 shadow-xs rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900/10 flex items-center justify-center text-slate-800">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-black text-sm text-slate-850 uppercase tracking-wide">
                99.9% Pure Cabling & Breakers
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-550 leading-relaxed font-semibold">
                Supplying authentic, certified copper cables and Schneider/KE switchgear. Guarding houses against circuit blowouts, fires, or dangerous voltage fluctuations of sub-standard alloys.
              </p>
              <ul className="text-[10px] text-slate-500 font-bold space-y-1 pl-1">
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-500">✓</span> Pure oxygen-free copper
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-500">✓</span> Heat-resistant PVC skins
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Section 4: Trust Building Store Info */}
        <div className="bg-[#FAF9F6] border border-slate-200 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] font-mono text-[#EAA814] font-black uppercase tracking-widest block">
              Built on Trust
            </span>
            <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 tracking-tight uppercase leading-tight">
              Honesty, Quality, and Commitment
            </h3>
            <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold">
              At Nasir Electric Store, trust is more than a business value. It is the foundation of everything we do. Over the years, generations of customers have returned to us because they know they can rely on our honesty, product quality, and commitment to customer satisfaction.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-600 leading-relaxed mt-2">
              <div className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p><strong className="text-slate-800">Transparent & Fair:</strong> Transparent and fair business practices in every transaction.</p>
              </div>
              <div className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p><strong className="text-slate-800">Genuine & Reliable:</strong> Sourcing only authentic, genuine, and reliable electrical products.</p>
              </div>
              <div className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p><strong className="text-slate-800">Long-Term Relationships:</strong> Cultivating long-term customer relationships that span decades.</p>
              </div>
              <div className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p><strong className="text-slate-800">Professional Support:</strong> Providing expert technical guidance and professional customer support.</p>
              </div>
              <div className="flex gap-2 sm:col-span-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p><strong className="text-slate-800">Across Generations:</strong> Ensuring consistent service and durable power across multiple generations.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-6 border border-slate-200 rounded-2xl space-y-5">
            <h4 className="font-sans font-black text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#EAA814]" />
              <span>Showroom Address</span>
            </h4>
            
            <div className="space-y-3.5 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-slate-400 mt-0.5 shrink-0" />
                <p className="font-bold">
                  Mitru Road, Near National Bank, Mailsi, District Vehari, Punjab.
                </p>
              </div>
              
              <div className="flex items-start gap-2.5 border-t border-slate-150 pt-3">
                <Clock className="w-4.5 h-4.5 text-slate-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold">Mon – Sun (Open Every Day)</p>
                  <p className="font-extrabold text-[#EAA814] text-[11px] uppercase tracking-wider">09:00 AM – 08:00 PM</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setCurrentView('contact')}
              className="w-full bg-[#07162C] hover:bg-[#F1C40F] text-white hover:text-[#07162C] font-sans font-black text-[10px] tracking-wider uppercase py-3 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Visit / Contact Desk</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
