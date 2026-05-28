import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Zap, Sun, Award, HelpCircle, Check, ArrowRight, ShieldCheck, Cpu, Battery, ShieldAlert, Milestone, ShoppingCart } from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface Appliance {
  id: string;
  name: string;
  watts: number;
  qty: number;
  label: string;
}

export default function SolarSolutions() {
  const { addToCart, clearCart, setIsInquiryOpen } = useApp();
  const [appliances, setAppliances] = useState<Appliance[]>([
    { id: 'fans', name: 'Ceiling Fans', watts: 75, qty: 5, label: '75W energy saver fan' },
    { id: 'ac', name: 'Inverter Air Conditioners (1.5 Ton)', watts: 1400, qty: 1, label: 'Modern eco inverter AC' },
    { id: 'leds', name: 'LED Ceiling Lights / Bulbs', watts: 12, qty: 15, label: '12W SMD downlight' },
    { id: 'fridge', name: 'Refrigerator / Freezer', watts: 350, qty: 1, label: 'Digital inverter fridge' },
    { id: 'pump', name: 'Water Pump (1 HP Motor)', watts: 1000, qty: 0, label: 'Submersible water pump' },
    { id: 'tv', name: 'LED Smart TVs', watts: 120, qty: 1, label: '55" smart display panel' },
  ]);

  const [backupRequirement, setBackupRequirement] = useState<'none' | 'partial' | 'full'>('partial');
  const [solarCategoryFilter, setSolarCategoryFilter] = useState<string>('all');
  const [calculationResult, setCalculationResult] = useState({
    totalLoad: 0,
    solarCapacityKw: 0,
    panelsCount: 0,
    inverterRating: '',
    batteriesRequired: '',
    estimatedBasePrice: 0,
  });

  const updateQty = (id: string, newQty: number) => {
    setAppliances((prev) =>
      prev.map((app) => (app.id === id ? { ...app, qty: Math.max(0, Math.min(newQty, 15)) } : app))
    );
  };

  useEffect(() => {
    const loadSum = appliances.reduce((sum, app) => sum + (app.watts * app.qty), 0);
    
    let capacityKw = 0;
    let panelsCount = 0;
    let inverterRating = '';
    let batteriesRequired = '';
    let estimatedPrice = 0;

    if (loadSum === 0) {
      setCalculationResult({ totalLoad: 0, solarCapacityKw: 0, panelsCount: 0, inverterRating: '-', batteriesRequired: '-', estimatedBasePrice: 0 });
      return;
    }

    if (loadSum <= 1500) {
      capacityKw = 3.3;
      panelsCount = 6;
      inverterRating = '3.2kW Smart Hybrid Inverter';
      batteriesRequired = backupRequirement === 'none' ? 'None (Grid Only)' : backupRequirement === 'partial' ? '2x TA-1800 12V Batteries' : '2x TA-2000 Specialized Tubular Packs';
      estimatedPrice = 320000 + (backupRequirement === 'none' ? 0 : backupRequirement === 'partial' ? 104000 : 125000);
    } else if (loadSum <= 3500) {
      capacityKw = 6.0;
      panelsCount = 11;
      inverterRating = 'Growatt 6.0kW Smart Inverter';
      batteriesRequired = backupRequirement === 'none' ? 'None (Grid Only)' : backupRequirement === 'partial' ? '4x TA-1800 12V Batteries' : '4x TA-2000 High Capacity';
      estimatedPrice = 580000 + (backupRequirement === 'none' ? 0 : backupRequirement === 'partial' ? 208000 : 250000);
    } else if (loadSum <= 7000) {
      capacityKw = 10.0;
      panelsCount = 18;
      inverterRating = 'Inverex Nitrox 10kW Hybrid 3-Phase';
      batteriesRequired = backupRequirement === 'none' ? 'None (Grid Only)' : backupRequirement === 'partial' ? '4x Heavy 185Ah Tubular' : '8x Specialized Tubular Bank / Lithium Module';
      estimatedPrice = 960000 + (backupRequirement === 'none' ? 0 : backupRequirement === 'partial' ? 220000 : 450000);
    } else {
      capacityKw = 15.0;
      panelsCount = 28;
      inverterRating = 'Inverex Nitrox 15kW Custom Smart Controller';
      batteriesRequired = backupRequirement === 'none' ? 'None (Grid Only)' : backupRequirement === 'partial' ? '8x TA-1800 12V Batteries' : 'Lithium Cabinet Module (48V 100Ah)';
      estimatedPrice = 1450000 + (backupRequirement === 'none' ? 0 : backupRequirement === 'partial' ? 416000 : 70000);
    }

    setCalculationResult({
      totalLoad: loadSum,
      solarCapacityKw: capacityKw,
      panelsCount: panelsCount,
      inverterRating: inverterRating,
      batteriesRequired: batteriesRequired,
      estimatedBasePrice: estimatedPrice,
    });
  }, [appliances, backupRequirement]);

  const handlePreorder = () => {
    const packageProduct = {
      id: `solar-calc-${calculationResult.solarCapacityKw}kw`,
      name: `Nasir Premium ${calculationResult.solarCapacityKw}kW Custom Solar Package`,
      category: 'solar',
      price: calculationResult.estimatedBasePrice,
      description: `Custom calculated ${calculationResult.solarCapacityKw}kW Solar Installation. Includes: ${calculationResult.panelsCount}x Jinko 550W Panels, 1x ${calculationResult.inverterRating}, backup battery bank (${calculationResult.batteriesRequired}), and structured engineering components.`,
      image: '/src/assets/images/solar_panel_product_1779880947279.png',
      rating: 5.0,
      reviewsCount: 1,
      badge: 'Calculated Spec',
      specs: {
        'Capacity': `${calculationResult.solarCapacityKw} kW`,
        'Inverter': calculationResult.inverterRating,
        'Battery Tech': calculationResult.batteriesRequired,
        'Panels': `${calculationResult.panelsCount}x 550W N-Type`,
        'Peak Load Allowed': `${calculationResult.totalLoad} Watts`,
      },
      features: [
        'Custom calculated home load profiles matching Nasir specifications',
        'Includes structural frames, DB boards, protection breakers, and Fast Cables copper wiring',
        'Net-metering green system validation',
      ],
      warranty: '5-Year Inverter, 25-Year Panel',
      stockStatus: 'In Stock' as const,
    };

    clearCart();
    addToCart(packageProduct, 1);
    setIsInquiryOpen(true);
  };

  const scrollSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solarAndMaterialProducts = PRODUCTS.filter((p) => {
    if (solarCategoryFilter === 'all') {
      return (
        p.category === 'solar' ||
        p.category === 'inverters' ||
        p.category === 'batteries' ||
        p.category === 'breakers' ||
        p.category === 'wires'
      );
    }
    if (solarCategoryFilter === 'solar') {
      return p.category === 'solar';
    }
    if (solarCategoryFilter === 'inverters') {
      return p.category === 'inverters';
    }
    if (solarCategoryFilter === 'batteries') {
      return p.category === 'batteries';
    }
    if (solarCategoryFilter === 'breakers_wires') {
      return p.category === 'breakers' || p.category === 'wires';
    }
    return false;
  });

  return (
    <section id="solar-solutions" className="py-12 bg-white text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* 1. Complete Solar Solutions Banner exact to reference image */}
        <div className="relative w-full rounded-2xl bg-gradient-to-r from-[#FDFCF7] to-[#F1F3D5] overflow-hidden border border-[#E9EAB7] p-8 lg:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left Text */}
          <div className="text-left space-y-4 max-w-xl z-10">
            <span className="text-xs font-bold text-[#EAA814] uppercase tracking-wider block">
              Complete Solar Solutions
            </span>
            <h2 className="font-sans font-black text-2.5xl sm:text-4xl text-[#1E293B] leading-tight tracking-tight">
              For Home, Business & Industry
            </h2>
            <p className="text-slate-600 text-sm font-sans leading-relaxed">
              Get reliable, efficient & affordable solar products <br />
              from Pakistan's trusted store.
            </p>
            <button
              onClick={() => {
                const el = document.getElementById('buy-solar-materials');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-md bg-[#F1C40F] hover:bg-[#EAA814] text-[#1E293B] font-sans font-extrabold text-xs tracking-wider flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            >
              Explore Solar Panels & Materials <span className="text-sm">→</span>
            </button>
          </div>

          {/* Right graphics backdrop with illustration and lightning sticker */}
          <div className="relative w-full md:w-[48%] h-[180px] sm:h-[220px] flex items-center justify-center z-10 shrink-0">
            {/* Elegant Modern Home Silhouette */}
            <div className="absolute inset-0 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl opacity-90">
              <img
                src="/src/assets/images/hero_solar_house_1779880922340.png"
                alt="Solar Architecture"
                className="w-full h-full object-cover opacity-65 scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Sun sticker symbol of lightning badge strictly corresponding to photo */}
            <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg border border-slate-50">
              <Zap className="w-6 h-6 text-[#F1C40F] fill-[#F1C40F]" />
            </div>
          </div>

        </div>

        {/* 2. Buyable Solar Materials & Products Catalog Grid */}
        <div id="buy-solar-materials" className="space-y-8 pt-10 border-t border-slate-100 scroll-mt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-[#F39C12] font-extrabold uppercase tracking-widest block bg-[#FAF9F6] border border-[#F1C40F]/10 px-3 py-1 rounded-full w-max">
                M.E.S Certified Shop
              </span>
              <h3 className="font-sans font-black text-2xl sm:text-3.5xl text-slate-900 tracking-tight">
                Buy Solar Materials & Components
              </h3>
              <p className="text-sm text-slate-500 font-sans font-medium">
                Directly purchase Tier-1 solar panels, hybrid inverters, deep-cycle tubular batteries, and certified DC components.
              </p>
            </div>
          </div>

          {/* Tab Categories for Filtering Solar Materials */}
          <div className="flex flex-wrap gap-2 pb-2">
            {[
              { id: 'all', label: 'All Materials', icon: Zap },
              { id: 'solar', label: 'Solar Panels', icon: Sun },
              { id: 'inverters', label: 'Smart Inverters', icon: Cpu },
              { id: 'batteries', label: 'Backup Batteries', icon: Battery },
              { id: 'breakers_wires', label: 'DC Wires & Breakers', icon: ShieldAlert },
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = solarCategoryFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSolarCategoryFilter(tab.id)}
                  className={`px-4.5 py-2.5 rounded-full font-sans font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#F1C40F] text-[#1E293B] shadow-md shadow-[#F1C40F]/10 font-bold border border-[#F1C40F]'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border border-transparent'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {solarAndMaterialProducts.map((product) => {
              // Custom category badges formatting
              const specBadgeText = 
                product.category === 'solar' ? 'Tier-1 Panel' :
                product.category === 'inverters' ? 'Inverter Module' :
                product.category === 'batteries' ? 'Storage Power' :
                product.category === 'breakers' ? 'DC Protection' : 'Tinned copper';

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-100 hover:border-yellow-500/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full text-left overflow-hidden group"
                >
                  {/* Image & Badge Overlay */}
                  <div className="relative aspect-video w-full bg-slate-50 overflow-hidden flex items-center justify-center">
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
                      className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center text-center p-3 animate-pulse"
                    >
                      <div className="p-2 sm:p-3 rounded-full bg-slate-100 flex items-center justify-center text-[#EAA814]/85 mb-1">
                        {product.category === 'solar' && <Sun className="w-5 h-5 sm:w-6 sm:h-6" />}
                        {product.category === 'inverters' && <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />}
                        {product.category === 'batteries' && <Battery className="w-5 h-5 sm:w-6 sm:h-6" />}
                        {product.category === 'breakers' && <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6" />}
                        {product.category === 'wires' && <Milestone className="w-5 h-5 sm:w-6 sm:h-6" />}
                      </div>
                      <span className="text-[8px] text-slate-400 font-mono font-bold uppercase tracking-widest block">
                        {product.category.replace('-', ' ')}
                      </span>
                    </div>

                    {/* Floating stickers */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 z-10">
                      <span className="text-[8px] sm:text-[9px] font-mono font-black uppercase text-[#1E293B] bg-[#F1C40F] border border-[#F1C40F]/20 px-1.5 py-0.5 rounded-md shadow-xs">
                        {specBadgeText}
                      </span>
                      {product.badge && (
                        <span className="text-[8px] sm:text-[9px] font-mono font-black uppercase text-white bg-rose-600 border border-rose-500/10 px-1.5 py-0.5 rounded-md shadow-xs">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-white/95 backdrop-blur-xs text-[8px] sm:text-xs font-bold text-slate-800 px-1.5 py-1 rounded-lg border border-slate-100 shadow-sm flex items-center gap-1 font-mono">
                      <ShieldCheck className="w-3 h-3 text-green-500" />
                      <span className="hidden sm:inline">{product.warranty || 'MES Certified'}</span>
                      <span className="sm:hidden">Certified</span>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-3 sm:p-5 flex flex-col justify-between flex-grow gap-2 sm:gap-4">
                    <div className="space-y-1 sm:space-y-2">
                      <h4 className="font-sans font-black text-xs sm:text-base text-slate-900 line-clamp-2 leading-tight min-h-[32px] sm:min-h-[44px]">
                        {product.name}
                      </h4>
                      
                      {/* Pricing Tag */}
                      <div className="flex items-baseline gap-1.5 sm:gap-2">
                        <span className="font-sans font-black text-[#EAA814] text-sm sm:text-lg">
                          PKR {product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="font-sans text-[9px] sm:text-xs text-slate-400 line-through">
                            PKR {product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      <p className="text-slate-500 text-[10px] sm:text-xs leading-relaxed font-sans font-medium line-clamp-2">
                        {product.description}
                      </p>

                      {/* Dynamic Specs Bullet Block */}
                      <div className="pt-2 border-t border-slate-50 hidden sm:flex flex-wrap gap-1.5">
                        {Object.entries(product.specs || {}).map(([key, val]) => (
                          <div key={key} className="bg-slate-50 text-slate-600 text-[10px] font-mono font-medium px-2 py-1 rounded-md border border-slate-100/50">
                            <strong>{key}:</strong> {val}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action button */}
                    <button
                      onClick={() => {
                        clearCart();
                        addToCart(product, 1);
                        setIsInquiryOpen(true);
                      }}
                      className="w-full bg-[#1E293B] hover:bg-[#F1C40F] text-white hover:text-[#1E293B] font-sans font-black text-[10px] sm:text-xs py-2 sm:py-3 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer shadow-md group-hover:shadow-lg"
                    >
                      <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-current" />
                      <span className="hidden sm:inline">Inquire & Buy This Item</span>
                      <span className="sm:hidden">Buy Now</span>
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Interactive Calculator Panel Box (Under matching ID) - Temporarily hidden per user request */}
        {false && (
        <div id="solar-calculator-box" className="p-px rounded-2xl bg-slate-100 scroll-mt-6">
          <div className="bg-[#FAF9F6] rounded-[15px] p-6 lg:p-10 space-y-10 flex flex-col items-center">
            
            {/* Title / Description */}
            <div className="max-w-2xl text-center space-y-3">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#F1C40F] font-black border border-[#F1C40F]/30 bg-white px-3 py-1 rounded-full">
                Interactive Multi-Unit Calculator
              </span>
              <h3 className="font-sans font-black text-2xl text-[#1E293B] tracking-tight">
                Smart Solar Load Calculator
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto">
                Customize your home loads below, define your storage/backup tier, and compute your custom solar size instantly.
              </p>
            </div>

            {/* Split layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
              
              {/* Input Cards */}
              <div className="lg:col-span-7 space-y-6">
                <div className="bg-white p-5 rounded-xl border border-slate-100 space-y-4">
                  <h4 className="font-sans font-extrabold text-[#1E293B] text-xs uppercase tracking-wider text-left border-b border-slate-50 pb-2">
                    Step 1: Declare Appliances & Quantities
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {appliances.map((app) => (
                      <div key={app.id} className="p-3.5 rounded-lg bg-[#FAFBFD] border border-slate-50 flex items-center justify-between gap-3">
                        <div className="text-left space-y-0.5">
                          <span className="font-sans font-bold text-xs text-[#1E293B] block">{app.name}</span>
                          <span className="text-[10px] font-mono text-slate-400 block leading-tight">{app.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQty(app.id, app.qty - 1)}
                            className="w-7 h-7 rounded-md bg-white border border-slate-150 text-slate-700 hover:bg-slate-100 flex items-center justify-center font-bold text-xs"
                          >
                            -
                          </button>
                          <span className="w-5 text-center font-bold text-xs text-[#1E293B]">
                            {app.qty}
                          </span>
                          <button
                            onClick={() => updateQty(app.id, app.qty + 1)}
                            className="w-7 h-7 rounded-md bg-white border border-slate-150 text-slate-700 hover:bg-slate-100 flex items-center justify-center font-bold text-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Storage Need */}
                <div className="bg-white p-5 rounded-xl border border-slate-100 space-y-4">
                  <h4 className="font-sans font-extrabold text-[#1E293B] text-xs uppercase tracking-wider text-left border-b border-slate-50 pb-2">
                    Step 2: Backup Battery Tier
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'none', label: 'Grid-Tie Setup', desc: 'No battery plates. Maximum green power contribution.' },
                      { id: 'partial', label: 'Tubular Standard', desc: '4-6 hours normal tubular plate battery bank.' },
                      { id: 'full', label: 'Heavy Cabinet Storage', desc: 'Premium deep cycles or scalable Lithium bank.' },
                    ].map((step) => (
                      <div
                        key={step.id}
                        onClick={() => setBackupRequirement(step.id as any)}
                        className={`p-3.5 rounded-lg border cursor-pointer text-left transition-colors ${
                          backupRequirement === step.id
                            ? 'bg-[#F1C40F]/5 border-[#F1C40F] text-[#1E293B]'
                            : 'bg-[#FAFBFD] border-slate-50 hover:bg-slate-50'
                        }`}
                      >
                        <h5 className="font-bold text-xs text-slate-900 mb-0.5">{step.label}</h5>
                        <p className="text-[10px] text-slate-400 leading-normal font-sans">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output Specs Card */}
              <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-150 shadow-md flex flex-col justify-between">
                
                <div className="space-y-5">
                  <h4 className="font-sans font-extrabold text-[#1E293B] text-xs uppercase tracking-wider text-left border-b border-slate-100 pb-3">
                    Calculated Result Diagnostics
                  </h4>

                  <div className="space-y-3 font-mono text-[11px] text-left">
                    <div className="p-3 bg-slate-50 rounded-lg flex justify-between items-center">
                      <span className="text-slate-500 font-sans font-semibold">TOTAL APPLIANCE LOAD:</span>
                      <span className="font-sans font-extrabold text-slate-900">{calculationResult.totalLoad} Watts</span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg flex justify-between items-center">
                      <span className="text-slate-500 font-sans font-semibold">RECOMMENDED CAPACITY:</span>
                      <span className="font-sans font-extrabold text-[#EAA814]">{calculationResult.solarCapacityKw.toFixed(2)} kW</span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg flex justify-between items-center">
                      <span className="text-slate-500 font-sans font-semibold">550W TIER-1 MODULES:</span>
                      <span className="font-sans font-extrabold text-slate-900">{calculationResult.panelsCount} modules</span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg flex justify-between items-center">
                      <span className="text-slate-500 font-sans font-semibold font-sans">SMART SOLAR INVERTER:</span>
                      <span className="font-sans font-extrabold text-slate-900 text-[10px]" title={calculationResult.inverterRating}>{calculationResult.inverterRating.split(' ')[0]} Smart</span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg flex justify-between items-center">
                      <span className="text-slate-500 font-sans font-semibold">BATTERY SPEC SUGGESTION:</span>
                      <span className="font-sans font-extrabold text-slate-900 text-[10px] text-right truncate max-w-[150px]" title={calculationResult.batteriesRequired}>{calculationResult.batteriesRequired}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 space-y-4 text-left">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[11px] font-bold text-slate-400 uppercase">Estimated Base Rate:</span>
                    <span className="font-sans font-black text-2xl text-[#1E293B]">
                      {calculationResult.totalLoad > 0 ? (
                        `PKR ${calculationResult.estimatedBasePrice.toLocaleString()}`
                      ) : (
                        <span className="text-xs font-semibold text-slate-400">Specify home load specs</span>
                      )}
                    </span>
                  </div>

                  <button
                    disabled={calculationResult.totalLoad === 0}
                    onClick={handlePreorder}
                    className="w-full bg-[#F1C40F] hover:bg-[#EAA814] text-[#1E293B] font-bold text-xs py-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Assemble Pack & Buy <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
        )}

        {/* 3. Manufacturer Brand Partners Logos matching exact layout in image */}
        <div className="space-y-4 pt-10 border-t border-slate-100">
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-6 items-center justify-items-center opacity-70">
            {/* JA SOLAR */}
            <div className="flex flex-col items-center">
              <span className="font-display font-black tracking-tighter text-[#1C3E6E] text-base md:text-lg">JA SOLAR</span>
              <span className="text-[7px] font-mono tracking-widest text-slate-400 mt-[-2px]">TIER-1 CORE</span>
            </div>

            {/* LONGi */}
            <div className="flex flex-col items-center">
              <span className="font-display font-black tracking-widest text-[#152F4E] text-base md:text-lg">LONGi</span>
              <span className="text-[7px] font-mono tracking-widest text-slate-400 mt-[-2px]">SOLAR</span>
            </div>

            {/* JinkoSolar */}
            <div className="flex flex-col items-center">
              <span className="font-display font-black text-[#0B355E] text-base md:text-lg">JinkoSolar</span>
              <span className="text-[7px] font-mono tracking-widest text-slate-400 mt-[-2px]">EFFICIENCY TIER-1</span>
            </div>

            {/* Growatt */}
            <div className="flex flex-col items-center">
              <span className="font-display font-black text-slate-800 text-base md:text-lg">Growatt</span>
              <span className="text-[7px] font-mono tracking-widest text-slate-400 mt-[-2px]">SMART INVERTER</span>
            </div>

            {/* INVEREX */}
            <div className="flex flex-col items-center">
              <span className="font-display font-black uppercase text-[#1B4B75] text-base md:text-lg">INVEREX</span>
              <span className="text-[7px] font-mono tracking-widest text-slate-400 mt-[-2px]">PAKISTAN CERTIFIED</span>
            </div>

            {/* OSAKA BRAND */}
            <div className="flex flex-col items-center">
              <span className="font-display font-black uppercase text-slate-800 text-base md:text-lg">OSAKA</span>
              <span className="text-[7px] font-mono tracking-widest text-slate-400 mt-[-2px]">BATTERIES</span>
            </div>
          </div>
        </div>

        {/* 4. Complete Stats Row of 1968 Trust exact to image */}
        <div className="relative w-full rounded-xl bg-[#07162C] p-6 lg:p-8 border border-white/5 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center justify-items-center">
            
            {/* Stat Item 1 */}
            <div className="flex items-center gap-3 text-left">
              <span className="text-3xl lg:text-4xl text-[#F1C40F]">🏆</span>
              <div className="space-y-0.5">
                <h4 className="font-sans font-black text-xl lg:text-2xl text-white leading-none">58+</h4>
                <p className="text-[10px] text-gray-300 font-sans leading-none uppercase tracking-wider">Years of Trust</p>
                <p className="text-[9px] text-gray-400 leading-none">Since 1968</p>
              </div>
            </div>

            {/* Stat Item 2 */}
            <div className="flex items-center gap-3 text-left">
              <span className="text-3xl lg:text-4xl text-[#F1C40F]">📦</span>
              <div className="space-y-0.5">
                <h4 className="font-sans font-black text-xl lg:text-2xl text-white leading-none">10K+</h4>
                <p className="text-[10px] text-gray-300 font-sans leading-none uppercase tracking-wider">Happy Customers</p>
                <p className="text-[9px] text-gray-400 leading-none">Across Pakistan</p>
              </div>
            </div>

            {/* Stat Item 3 */}
            <div className="flex items-center gap-3 text-left">
              <span className="text-3xl lg:text-4xl text-[#F1C40F]">⚡</span>
              <div className="space-y-0.5">
                <h4 className="font-sans font-black text-xl lg:text-2xl text-white leading-none">1000+</h4>
                <p className="text-[10px] text-gray-300 font-sans leading-none uppercase tracking-wider">Quality Products</p>
                <p className="text-[9px] text-gray-400 leading-none">In Stock</p>
              </div>
            </div>

            {/* Stat Item 4 */}
            <div className="flex items-center gap-3 text-left">
              <span className="text-3xl lg:text-4xl text-[#F1C40F]">💬</span>
              <div className="space-y-0.5">
                <h4 className="font-sans font-black text-xl lg:text-2xl text-white leading-none">24/7</h4>
                <p className="text-[10px] text-gray-300 font-sans leading-none uppercase tracking-wider">Customer Support</p>
                <p className="text-[9px] text-gray-400 leading-none">We are here to help</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
