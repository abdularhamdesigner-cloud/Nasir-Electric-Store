import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Lightbulb, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function LightingShowcase() {
  const { addToCart, clearCart, setIsInquiryOpen, setActiveProductDetail } = useApp();
  const [lightingCategoryFilter, setLightingCategoryFilter] = useState<'all' | 'panel' | 'decor'>('all');

  // Filter products by lighting categories
  const lightingProducts = PRODUCTS.filter(p => p.category === 'lighting' || p.category === 'decorative');
  const filteredProducts = lightingProducts.filter(p => {
    if (lightingCategoryFilter === 'all') return true;
    if (lightingCategoryFilter === 'panel') return p.category === 'lighting';
    if (lightingCategoryFilter === 'decor') return p.category === 'decorative';
    return false;
  });

  return (
    <section id="lighting-showcase" className="py-12 sm:py-20 bg-[#061121] relative border-t border-slate-900 overflow-hidden text-[#F8F9FA]">
      
      {/* Decorative ambient background wash */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[450px] rounded-full blur-[130px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F1C40F 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title and Intro header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#F1C40F] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            N.E.S Signature Collection
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Premium Architectural & Commercial Lighting
          </h2>
          <p className="text-sm sm:text-base text-slate-350 leading-relaxed font-sans font-medium">
            Nasir Electric Store offers high-lux waterproof spot projectors, heavy-duty outdoor floodlights, modern slim internal panel concealed lights, and high-quality festive string modules.
          </p>
        </div>

        {/* Catalog Control Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-white/5">
          <div className="space-y-1.5 text-left">
            <h3 className="font-sans font-black text-lg sm:text-xl text-white">
              MES Certified Lighting Shop
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Select a category below to filter our high-lumens durable lighting systems.
            </p>
          </div>

          {/* Tab filters */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {[
              { id: 'all', label: 'All Lights' },
              { id: 'panel', label: 'Outdoor & Spotlights' },
              { id: 'decor', label: 'Neon / Chasing Pixels' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setLightingCategoryFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full font-sans font-bold text-xs transition-all cursor-pointer border ${
                  lightingCategoryFilter === tab.id
                    ? 'bg-[#F1C40F] text-slate-950 border-[#F1C40F] shadow-lg shadow-yellow-500/15'
                    : 'bg-white/5 hover:bg-white/12 text-slate-300 border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid strictly designed to look highly polished */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#0b1b30] rounded-2xl border border-white/5 hover:border-[#F1C40F]/35 shadow-xl transition-all duration-300 flex flex-col h-full text-left overflow-hidden group hover:shadow-[0_0_20px_rgba(241,196,15,0.05)]"
            >
              {/* Photo & Badge Overlays */}
              <div className="relative aspect-video w-full bg-slate-900 overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating visual fallback category icon */}
                <div 
                  style={{ display: 'none' }} 
                  className="absolute inset-0 bg-[#071324] flex-col items-center justify-center text-center p-3"
                >
                  <div className="p-2 rounded-full bg-white/5 flex items-center justify-center text-[#F1C40F] mb-1">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <span className="text-[8px] text-[#F1C40F] font-mono font-bold uppercase tracking-wider block">
                    {product.category}
                  </span>
                </div>
                
                {/* Floating badges */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 z-10">
                  <span className="text-[8px] sm:text-[9px] font-mono font-black uppercase text-slate-950 bg-[#F1C40F] border border-[#F1C40F]/15 px-1.5 py-0.5 rounded shadow-xs">
                    {product.category === 'lighting' ? 'COB / Panel' : 'Smart Glow'}
                  </span>
                  {product.badge && (
                    <span className="text-[8px] sm:text-[9px] font-mono font-black uppercase text-white bg-purple-600 border border-purple-500/10 px-1.5 py-0.5 rounded shadow-xs">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-slate-950/90 backdrop-blur-xs text-[8px] sm:text-xs font-bold text-slate-200 px-1.5 py-0.5 rounded border border-white/10 shadow-sm flex items-center gap-1 font-mono">
                  <ShieldCheck className="w-3" />
                  <span className="hidden sm:inline">{product.warranty || 'MES Certified'}</span>
                  <span className="sm:hidden">Certified</span>
                </div>
              </div>

              {/* Body details */}
              <div className="p-3 sm:p-4.5 flex flex-col justify-between flex-grow gap-3 sm:gap-4">
                <div className="space-y-1 sm:space-y-1.5">
                  <h4 className="font-sans font-black text-xs sm:text-sm text-slate-200 line-clamp-2 leading-tight min-h-[32px] sm:min-h-[40px]">
                    {product.name}
                  </h4>
                  
                  {/* Pricing info */}
                  <div className="flex items-baseline gap-1.5 sm:gap-2">
                    <span className="font-sans font-black text-[#F1C40F] text-xs sm:text-base">
                      PKR {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="font-sans text-[9px] sm:text-[10px] text-slate-500 line-through">
                        PKR {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-400 text-[10px] sm:text-[11px] leading-relaxed font-sans font-medium line-clamp-2">
                    {product.description}
                  </p>

                  {/* Specs items block */}
                  <div className="pt-2 border-t border-white/5 hidden sm:flex flex-wrap gap-1">
                    {Object.entries(product.specs || {}).slice(0, 3).map(([key, val]) => (
                      <div key={key} className="bg-white/5 text-slate-350 text-[9px] font-mono px-1.5 py-0.5 rounded border border-white/5">
                        <strong>{key}:</strong> {val}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Immediate Action button */}
                <button
                  onClick={() => {
                    setActiveProductDetail(product);
                  }}
                  className="w-full h-8 sm:h-10 bg-[#F1C40F] hover:bg-[#EAA814] text-slate-950 font-sans font-extrabold text-[10px] sm:text-xs py-1.5 sm:py-2.5 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer shadow-md"
                >
                  <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-slate-950 text-slate-950 animate-pulse" />
                  <span className="hidden sm:inline">Inquire & Buy Now</span>
                  <span className="sm:hidden">Inquire Now</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
