import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import { Sun, Cpu, BatteryCharging, ShieldAlert, Milestone, Lightbulb, Sparkles, Plug } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  key?: any;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { setActiveProductDetail } = useApp();
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [product.image]);

  // Dynamic precise currency text formatter match to user representation
  const formatPKRVal = (num: number) => {
    const formatted = num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return `Rs.${formatted} PKR`;
  };

  // Compute exact discount percentage dynamically based on actual prices
  let discountPercent = 0;
  if (product.originalPrice && product.originalPrice > product.price) {
    discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  }

  const renderCategoryIcon = () => {
    const sizeClass = "w-10 h-10 text-slate-400";
    switch (product.category) {
      case 'solar':
        return <Sun className={`${sizeClass} text-[#F1C40F]`} />;
      case 'inverters':
        return <Cpu className={`${sizeClass} text-[#3498DB]`} />;
      case 'batteries':
        return <BatteryCharging className={`${sizeClass} text-[#2ECC71]`} />;
      case 'breakers':
        return <ShieldAlert className={`${sizeClass} text-[#E74C3C]`} />;
      case 'wires':
        return <Milestone className={`${sizeClass} text-[#1abc9c]`} />;
      case 'lighting':
        return <Lightbulb className={`${sizeClass} text-[#F39C12]`} />;
      case 'decorative':
        return <Sparkles className={`${sizeClass} text-[#9b59b6]`} />;
      case 'accessories':
        return <Plug className={`${sizeClass} text-[#7f8c8d]`} />;
      default:
        return <Cpu className={`${sizeClass}`} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      onClick={() => setActiveProductDetail(product)}
      className="bg-white rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between transition-all duration-200 h-full relative cursor-pointer group border-2 border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#EAA814]/40"
    >
      {/* Product Image Stage with precise alignment */}
      <div className="relative w-full aspect-[4/3] rounded-lg flex items-center justify-center overflow-hidden bg-[#FBFBFA] border border-slate-100">
        
        {/* Crisp Rust-Orange Percentage Badge in the image corner exactly like mockup */}
        {discountPercent > 0 ? (
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="bg-[#C83F11] text-white text-[10px] sm:text-[11px] font-black tracking-wide px-3 py-1 rounded-full shadow-xs">
              -{discountPercent}%
            </span>
          </div>
        ) : product.badge ? (
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="bg-[#C83F11] text-white text-[9px] sm:text-[10px] font-black tracking-wide px-2.5 py-0.8 rounded-full shadow-xs">
              {product.badge}
            </span>
          </div>
        ) : null}

        {/* Scaled & perfectly fitting brand images */}
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-contain p-2 transform group-hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-4 text-center h-full w-full">
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-full mb-1">
              {renderCategoryIcon()}
            </div>
            <span className="text-[9px] text-[#8C9BA5] font-semibold uppercase tracking-wider">
              {product.category}
            </span>
          </div>
        )}
      </div>

      {/* Details layout: perfectly matched to mockup heights */}
      <div className="pt-2.5 pb-0 flex flex-col text-left space-y-1 flex-1 justify-between">
        <div>
          {/* Responsive font title */}
          <h3 className="font-sans font-bold text-slate-800 text-[13px] sm:text-[15px] hover:text-[#EAA814] leading-normal line-clamp-1 transition-colors">
            {product.name}
          </h3>

          {/* Current price styled with robust crimson font weight */}
          <div className="font-sans font-black text-[14px] sm:text-[17px] text-[#C83F11] tracking-tight leading-none pt-1">
            {formatPKRVal(product.price)}
          </div>

          {/* Original price below with strikethrough */}
          {product.originalPrice && product.originalPrice > product.price ? (
            <div className="text-[11px] sm:text-[13px] text-[#8C9BA5] line-through font-semibold leading-none pt-0.5">
              {formatPKRVal(product.originalPrice)}
            </div>
          ) : (
            <div className="text-[11px] sm:text-[13px] text-transparent leading-none select-none pt-0.5">
              &nbsp;
            </div>
          )}
        </div>

        {/* Highly Polished Interactive Premium Action Button */}
        <div className="pt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveProductDetail(product);
            }}
            className="w-full py-1.5 sm:py-2 bg-[#F1C40F] hover:bg-[#EAA814] text-slate-950 font-sans font-black text-[10px] sm:text-xs tracking-wider uppercase rounded-md flex items-center justify-center gap-1 transition-colors active:scale-95 cursor-pointer shadow-xs hover:shadow-sm"
          >
            <span>Inquire Now</span>
            <span className="text-[10px] sm:text-xs font-black">→</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
