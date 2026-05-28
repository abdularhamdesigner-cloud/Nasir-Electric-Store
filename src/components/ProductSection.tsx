import { useApp } from '../context/AppContext';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from './ProductCard';
import { EyeOff, MoveRight, ChevronRight, RefreshCw } from 'lucide-react';

interface ProductSectionProps {
  isFeaturedOnly?: boolean;
}

export default function ProductSection({ isFeaturedOnly = false }: ProductSectionProps) {
  const { selectedCategory, setSelectedCategory, searchQuery, setSearchQuery, setCurrentView } = useApp();

  // Filter products based on active filters
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = isFeaturedOnly ? true : (selectedCategory === 'all' || p.category === selectedCategory);
    const matchesSearch = isFeaturedOnly ? true : (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const displayProducts = isFeaturedOnly ? filteredProducts.slice(0, 5) : filteredProducts;

  return (
    <section id="products" className="py-16 bg-[#F8F9FA] scroll-mt-6">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Dynamic header row to match e-commerce look of image */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-8">
          
          <div className="text-left space-y-1">
            <h2 className="font-sans font-black text-xl sm:text-2xl text-slate-800 tracking-tight">
              {isFeaturedOnly
                ? 'Signature Products'
                : selectedCategory === 'all' 
                  ? 'Featured Products' 
                  : CATEGORIES.find(c => c.id === selectedCategory)?.name || 'Domain Collection'
              }
            </h2>
            <p className="text-xs text-slate-400 font-sans font-medium">
              Authentic premium products from top global energy manufacturers
            </p>
          </div>

          {/* Right Action Trigger */}
          <div className="flex items-center gap-4">
            {/* Quick Reset Label */}
            {!isFeaturedOnly && (selectedCategory !== 'all' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-[11px] font-sans font-bold text-red-500 hover:text-red-700 flex items-center gap-1 cursor-pointer bg-red-50 px-3 py-1.5 rounded-md"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Clear Filters
              </button>
            )}

            <button
              onClick={() => {
                setCurrentView('products');
                setSelectedCategory('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#1E293B] hover:text-[#EAA814] font-sans font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>View All Products</span>
              <MoveRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Carousel Grid layout styled cleanly with carousel controls */}
        <div className="relative">
          
          {displayProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
              {displayProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center space-y-4 max-w-sm mx-auto flex flex-col items-center justify-center bg-white rounded-xl border border-slate-100 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                <EyeOff className="w-6 h-6" />
              </div>
              <h4 className="font-sans font-extrabold text-[#1E293B] text-sm">No hardware found</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans px-4">
                We couldn't locate any products matching "{searchQuery}". Try refining spelling, or clearing filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-[#F1C40F] hover:bg-[#EAA814] text-[#1E293B] text-xs font-bold rounded-md transition-colors cursor-pointer"
              >
                Show All Items
              </button>
            </div>
          )}

          {/* Right Indicator Slide Arrow matching the photo */}
          {displayProducts.length > 4 && (
            <button
              onClick={() => {
                setCurrentView('products');
                setSelectedCategory('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="absolute -right-3 top-[50%] -translate-y-[50%] hidden xl:flex w-10 h-10 items-center justify-center rounded-full bg-white text-slate-600 hover:text-[#EAA814] border border-slate-100 shadow-lg hover:shadow-xl transition-all z-20 cursor-pointer"
              title="View next hardware assets"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          )}

        </div>

      </div>
    </section>
  );
}
