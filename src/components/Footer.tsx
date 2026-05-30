import { useApp } from '../context/AppContext';
import { Phone, MapPin, Mail, Clock, ArrowUp, Facebook, Youtube, Instagram, MessageCircle } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const { setSelectedCategory, setCurrentView, setActiveProductDetail } = useApp();

  const handleNavClick = (view: string, category?: string) => {
    setCurrentView(view);
    if (category) {
      setSelectedCategory(category);
    }
    if (setActiveProductDetail) {
      setActiveProductDetail(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#ECEFF3] text-[#334155] border-t border-slate-200">
      
      {/* Primary Footer Grid Content */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12 text-left text-xs font-sans">
        
        {/* Column 1: Brand details and social icons */}
        <div className="space-y-4 col-span-1 text-left">
          
          {/* Logo Title matching standard style */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <Logo size={42} className="hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col text-left">
              <span className="font-display font-black text-sm text-[#1E293B] tracking-tight leading-none uppercase">
                Nasir
              </span>
              <span className="text-[9px] font-sans font-bold text-slate-500 tracking-wider uppercase leading-tight mt-0.5">
                Electric Store
              </span>
            </div>
          </div>

          <p className="text-[12px] text-slate-500 font-sans leading-relaxed max-w-sm">
            Serving Pakistan with premium electrical hardware, energy-saver BLDC fans, appliances, smart solar, and architectural lighting since 1968. 58 years of quality, reliability, and client-centered trust based in Mailsi.
          </p>

          {/* Social Row with colorful icons exact to image */}
          <div className="flex items-center gap-2.5 pt-1">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#3B5998] hover:opacity-90 flex items-center justify-center text-white text-sm" title="Facebook">
              <Facebook className="w-4 h-4 text-white fill-current" />
            </a>
            <a href="https://wa.me/923037985478" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#25D366] hover:opacity-90 flex items-center justify-center text-white" title="WhatsApp Chat">
              <MessageCircle className="w-4 h-4 text-white fill-current" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FD5949] to-[#D6249F] hover:opacity-90 flex items-center justify-center text-white" title="Instagram">
              <Instagram className="w-4 h-4 text-white" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#CD201F] hover:opacity-90 flex items-center justify-center text-white" title="YouTube Channel">
              <Youtube className="w-4 h-4 text-white fill-current " />
            </a>
          </div>

        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4 text-left">
          <h4 className="font-sans font-extrabold text-[#1E293B] text-xs uppercase tracking-wider pb-1.5 border-b border-slate-300">
            Quick Links
          </h4>
          <ul className="space-y-3 font-sans font-semibold text-slate-500">
            <li><button onClick={() => handleNavClick('home')} className="hover:text-[#F39C12] transition-colors cursor-pointer block text-left">Home</button></li>
            <li><button onClick={() => handleNavClick('products', 'all')} className="hover:text-[#F39C12] transition-colors cursor-pointer block text-left">All Products Portfolio</button></li>
            <li><button onClick={() => handleNavClick('products', 'electronics')} className="hover:text-[#F39C12] transition-colors cursor-pointer block text-left">Electronics &amp; BLDC Fans</button></li>
            <li><button onClick={() => handleNavClick('solar')} className="hover:text-[#F39C12] transition-colors cursor-pointer block text-left">Solar Solutions</button></li>
            <li><button onClick={() => handleNavClick('lighting')} className="hover:text-[#F39C12] transition-colors cursor-pointer block text-left">Lighting &amp; Decor</button></li>
            <li><button onClick={() => handleNavClick('about')} className="hover:text-[#F39C12] transition-colors cursor-pointer block text-left">About Us</button></li>
          </ul>
        </div>

        {/* Column 3: Contact Us details */}
        <div className="space-y-4 text-left">
          <h4 className="font-sans font-extrabold text-[#1E293B] text-xs uppercase tracking-wider pb-1.5 border-b border-slate-300">
            Contact & Location
          </h4>
          <ul className="space-y-3.5 font-sans font-semibold text-slate-500">
            
            {/* Address */}
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span className="leading-normal">Nasir Electric Store, Mitru Road, Mailsi, District Vehari, Punjab, Pakistan.</span>
            </li>

            {/* Telephone */}
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-slate-400 shrink-0" />
              <a href="tel:+923037985478" className="hover:text-[#F39C12] transition-colors">+92 303 7985478</a>
            </li>

            {/* Email */}
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-slate-400 shrink-0" />
              <a href="mailto:info@nasirelectricstore.com" className="hover:text-[#F39C12] transition-colors">info@nasirelectricstore.com</a>
            </li>

            {/* Clock timings */}
            <li className="flex items-start gap-2.5 leading-normal">
              <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="block">Every Day: 9:00 AM - 8:00 PM</span>
              </div>
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom Legal bar exact to design */}
      <div className="bg-[#E4E8EE] border-t border-slate-300">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          
          <div className="text-left">
            © {currentYear} NASIR ELECTRIC STORE (N.E.S). 58 Years of Trust Since 1968.
          </div>

          <div className="flex items-center gap-6">
            <span>Designed with ❤️ for a Brighter Tomorrow</span>
            
            {/* Scroll Up Button in golden/yellow exactly matching the bottom-right corner */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 rounded-full bg-[#F1C40F] hover:bg-[#EAA814] text-[#1E293B] flex items-center justify-center transition-all cursor-pointer shadow-md"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}
