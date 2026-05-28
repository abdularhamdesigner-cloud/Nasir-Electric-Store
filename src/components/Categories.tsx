import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../data/products';
import { Sun, Cpu, BatteryCharging, ShieldAlert, Milestone, Lightbulb, Sparkles, MoveRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Categories() {
  const { selectedCategory, setSelectedCategory } = useApp();

  const handleCategoryClick = (id: string) => {
    setSelectedCategory(id);
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Custom mapping for exact beautiful icons as shown on referenced picture
  const renderCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'solar':
        return (
          <svg viewBox="0 0 48 48" className="w-13 h-13 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="8" y="16" width="32" height="24" rx="2" />
            <line x1="16" y1="16" x2="16" y2="40" />
            <line x1="24" y1="16" x2="24" y2="40" />
            <line x1="32" y1="16" x2="32" y2="40" />
            <line x1="8" y1="24" x2="40" y2="24" />
            <line x1="8" y1="32" x2="40" y2="32" />
            {/* Sun Rays */}
            <circle cx="24" cy="8" r="4" fill="#F1C40F" stroke="#F1C40F" />
            <line x1="24" y1="1" x2="24" y2="3" stroke="#F1C40F" strokeWidth="2" strokeLinecap="round" />
            <line x1="17" y1="11" x2="18.5" y2="12.5" stroke="#F1C40F" strokeWidth="2" strokeLinecap="round" />
            <line x1="31" y1="11" x2="29.5" y2="12.5" stroke="#F1C40F" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 'inverters':
        return (
          <svg viewBox="0 0 48 48" className="w-13 h-13 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="10" y="8" width="28" height="32" rx="3" />
            <circle cx="24" cy="18" r="4" strokeWidth="2" />
            <line x1="18" y1="30" x2="30" y2="30" strokeWidth="2" />
            <line x1="18" y1="34" x2="26" y2="34" strokeWidth="2" />
            {/* Knobs */}
            <circle cx="15" cy="13" r="1.5" fill="currentColor" />
            <circle cx="33" cy="13" r="1.5" fill="currentColor" />
          </svg>
        );
      case 'batteries':
        return (
          <svg viewBox="0 0 48 48" className="w-13 h-13 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="8" y="12" width="32" height="28" rx="2" />
            <line x1="14" y1="8" x2="14" y2="12" strokeWidth="2.5" />
            <line x1="34" y1="8" x2="34" y2="12" strokeWidth="2.5" />
            <rect x="16" y="22" width="16" height="10" rx="1" strokeWidth="1.5" />
            <line x1="20" y1="27" x2="28" y2="27" />
          </svg>
        );
      case 'breakers':
        return (
          <svg viewBox="0 0 48 48" className="w-13 h-13 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="14" y="8" width="20" height="32" rx="2" />
            <rect x="18" y="16" width="12" height="16" rx="1" fill="currentColor" className="opacity-10" />
            <line x1="24" y1="20" x2="24" y2="28" strokeWidth="3" strokeLinecap="round" />
            <circle cx="24" cy="35" r="1.5" fill="currentColor" />
            <circle cx="24" cy="12" r="1.5" fill="currentColor" />
          </svg>
        );
      case 'wires':
        return (
          <svg viewBox="0 0 48 48" className="w-13 h-13 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="24" cy="24" r="18" strokeWidth="2" />
            <circle cx="24" cy="24" r="12" strokeWidth="1.5" strokeDasharray="3 3" />
            <ellipse cx="24" cy="24" rx="20" ry="8" strokeWidth="1" className="opacity-40" />
            <ellipse cx="24" cy="24" rx="8" ry="20" strokeWidth="1" className="opacity-40" />
            <circle cx="24" cy="24" r="5" fill="currentColor" />
          </svg>
        );
      case 'lighting':
        return (
          <svg viewBox="0 0 48 48" className="w-13 h-13 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M16 22C16 17.58 19.58 14 24 14C28.42 14 32 17.58 32 22C32 24.5 30.5 27 29 29C27.5 31 27 33 27 35H21C21 33 20.5 31 19 29C17.5 27 16 24.5 16 22Z" />
            <path d="M21 39H27" strokeWidth="2" />
            <line x1="24" y1="4" x2="24" y2="9" strokeWidth="2" strokeLinecap="round" />
            <line x1="38" y1="10" x2="34" y2="13" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="10" x2="14" y2="13" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 'decorative':
        return (
          <svg viewBox="0 0 48 48" className="w-13 h-13 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="24" cy="24" r="20" />
            <circle cx="24" cy="24" r="14" strokeWidth="1" />
            <circle cx="24" cy="24" r="8" fill="currentColor" className="opacity-15" />
            {/* Pixels */}
            <circle cx="24" cy="10" r="1.5" fill="#F1C40F" />
            <circle cx="34" cy="14" r="1.5" fill="#F1C40F" />
            <circle cx="38" cy="24" r="1.5" fill="#F1C40F" />
            <circle cx="34" cy="34" r="1.5" fill="#F1C40F" />
            <circle cx="24" cy="38" r="1.5" fill="#F1C40F" />
            <circle cx="14" cy="34" r="1.5" fill="#F1C40F" />
            <circle cx="10" cy="24" r="1.5" fill="#F1C40F" />
            <circle cx="14" cy="14" r="1.5" fill="#F1C40F" />
          </svg>
        );
      default:
        return <Sun className="w-12 h-12 text-slate-800" />;
    }
  };

  return (
    <section id="categories" className="py-12 bg-[#F8F9FA] border-b border-gray-150 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Row of clean category blocks exact to image */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
          {CATEGORIES.slice(0, 7).map((cat, idx) => {
            const isActive = selectedCategory === cat.id;
            return (
              <motion.div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: 'easeOut' }}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                className={`flex flex-col items-center justify-between p-5 bg-white border rounded-xl cursor-pointer select-none transition-all duration-300 shadow-sm hover:shadow-md group ${
                  isActive
                    ? 'border-[#F1C40F] ring-2 ring-[#F1C40F]/20'
                    : 'border-slate-200 hover:border-[#F1C40F]'
                }`}
              >
                {/* Clean, Slate Icon Frame */}
                <div className="flex items-center justify-center p-2 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {renderCategoryIcon(cat.id)}
                </div>

                {/* Details */}
                <div className="text-center space-y-1">
                  <h3 className="text-slate-800 font-sans font-black text-xs md:text-[13px] tracking-tight leading-snug">
                    {cat.name}
                  </h3>
                  
                  {/* View Products arrow link */}
                  <div className="flex items-center justify-center gap-1.5 text-[10px] font-sans font-bold text-slate-400 group-hover:text-[#EAA814] transition-colors pt-2 border-t border-slate-50 mt-1">
                    <span>View Products</span>
                    <MoveRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
