import React, { useState, useEffect } from 'react';
import { Menu, X as XIcon } from 'lucide-react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-midnight/90 backdrop-blur-sm border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo - Focused on the X */}
        <div className="flex items-center group cursor-pointer z-50">
          <span className="text-xl md:text-2xl font-display font-bold text-white tracking-widest group-hover:tracking-[0.2em] transition-all duration-300">
            REEL
            <span className="text-cyberLime text-3xl mx-1 inline-block transform -skew-x-12 relative top-[2px]">X</span>
            PRESS
          </span>
        </div>

        {/* Desktop Nav - Simplified */}
        <nav className="hidden md:flex items-center space-x-10">
          {['How it Works', 'Real Work', 'Pricing'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-[0.15em] relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cyberLime transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest">Partner</a>
          <Button size="sm" className="bg-white text-black hover:bg-cyberLime hover:text-black border-none font-bold">
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50 hover:text-cyberLime transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XIcon /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-midnight flex flex-col items-center justify-center space-y-8 z-40 animate-fadeIn">
            {['How it Works', 'Real Work', 'Pricing'].map((item) => (
                <a 
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="text-3xl font-display font-bold text-white hover:text-cyberLime uppercase tracking-widest"
                >
                    {item}
                </a>
            ))}
            <Button className="mt-8 px-12" onClick={() => setMobileMenuOpen(false)}>Book Creator</Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;