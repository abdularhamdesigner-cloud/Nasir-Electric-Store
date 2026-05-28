import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import { Star, Eye, ShieldAlert, Milestone, BatteryCharging, Sun, Cpu, Lightbulb, Sparkles, Plug } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  key?: any;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, clearCart, setIsInquiryOpen, setActiveProductDetail } = useApp();
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [product.image]);

  // Helper to format currency
  const formatPKR = (num: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  // Badge Color Mapper perfectly corresponding to photo style
  const getBadgeStyle = (badge: string) => {
    const b = badge.toLowerCase();
    if (b.includes('new')) {
      return 'bg-[#2ECC71] text-white'; // Green
    }
    if (b.includes('best') || b.includes('heavy') || b.includes('premium')) {
      return 'bg-[#3498DB] text-white'; // Blue
    }
    if (b.includes('sale')) {
      return 'bg-[#E74C3C] text-white'; // Red
    }
    return 'bg-[#F39C12] text-white'; // Gold/Yellow
  };

  const handleInquireNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveProductDetail(product);
  };

  const renderCategoryIcon = () => {
    const sizeClass = "w-8 h-8 sm:w-12 sm:h-12";
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
        return <Cpu className={`${sizeClass} text-slate-400`} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      whileHover={{ y: -6, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)' }}
      className="bg-white border border-slate-150 rounded-xl overflow-hidden p-3 sm:p-4 flex flex-col justify-between transition-all duration-300 h-full relative group"
    >
      
      {/* Top Graphic Elements - Badges & Image */}
      <div className="relative w-full aspect-square bg-[#FAF9F6] rounded-lg flex items-center justify-center p-2 sm:p-4 mb-2 sm:mb-4 border border-slate-100 overflow-hidden">
        
        {/* Left Side Label Bag */}
        {product.badge && (
          <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 z-10">
            <span className={`text-[8px] sm:text-[10px] font-sans font-black uppercase tracking-widest px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md shadow-sm ${getBadgeStyle(product.badge)}`}>
              {product.badge}
            </span>
          </div>
        )}

        {/* Product Image on clean container */}
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            className="max-h-[90px] sm:max-h-[140px] max-w-full object-contain transform group-hover:scale-110 transition-transform duration-300 z-0 p-1"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-2 space-y-1.5 h-full w-full">
            <div className="p-2 sm:p-3 rounded-full bg-slate-50 border border-slate-100 shadow-inner flex items-center justify-center">
              {renderCategoryIcon()}
            </div>
            <span className="text-[8px] sm:text-[9px] text-slate-400 font-mono font-bold uppercase tracking-wider">
              {product.category.replace('-', ' ')}
            </span>
          </div>
        )}

      </div>

      {/* Title & Specs */}
      <div className="space-y-1.5 sm:space-y-2 flex-1 flex flex-col justify-between">
        <div className="space-y-0.5 sm:space-y-1">
          {/* Subtitle Category metadata */}
          <span className="text-[8px] sm:text-[9px] font-mono text-slate-400 uppercase tracking-widest block text-left font-bold">
            {product.category.replace('-', ' ')}
          </span>

          {/* Bold Name */}
          <h3 
            onClick={() => setActiveProductDetail(product)}
            className="font-sans font-extrabold text-[11px] sm:text-sm text-[#1E293B] hover:text-[#EAA814] cursor-pointer text-left leading-tight sm:leading-normal line-clamp-2 min-h-[32px] sm:min-h-[40px] transition-colors"
          >
            {product.name}
          </h3>
        </div>

        {/* Price layout */}
        <div className="py-1 sm:py-2 flex items-baseline gap-1.5 sm:gap-2 text-left">
          {product.originalPrice && product.originalPrice > product.price ? (
            <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
              <span className="text-[10px] sm:text-xs text-slate-400 line-through">
                {formatPKR(product.originalPrice)}
              </span>
              <span className="font-sans font-black text-xs sm:text-base text-[#E74C3C]">
                {formatPKR(product.price)}
              </span>
            </div>
          ) : (
            <span className="font-sans font-black text-xs sm:text-base text-[#1E293B]">
              {formatPKR(product.price)}
            </span>
          )}
        </div>

        {/* Action Tray at bottom: Custom Quotation Inquiry focus */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2 pt-2 sm:pt-3 border-t border-slate-100">
          
          {/* Inquire Now */}
          <button
            onClick={handleInquireNow}
            className="col-span-3 h-8 sm:h-10 bg-[#F1C40F] hover:bg-[#EAA814] text-[#1E293B] font-sans font-black text-[10px] sm:text-xs tracking-wider uppercase rounded-lg flex items-center justify-center gap-1 transition-colors active:scale-95 cursor-pointer shadow-sm hover:shadow-md"
            title="Request sales quotation"
          >
            <span className="hidden sm:inline">Inquire Now</span>
            <span className="sm:hidden">Inquire</span>
            <span className="text-[10px] sm:text-sm">→</span>
          </button>

          {/* Eye Detail Button (Specs/Technical sheet) */}
          <button
            onClick={() => setActiveProductDetail(product)}
            className="col-span-1 h-8 sm:h-10 bg-[#FAF9F6] border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors rounded-lg flex items-center justify-center active:scale-95 cursor-pointer"
            title="View technical datasheet"
          >
            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

        </div>
      </div>

    </motion.div>
  );
}
