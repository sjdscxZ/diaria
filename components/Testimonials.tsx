import React from 'react';
import { BRAND_LOGOS, TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-midnight overflow-hidden">
      
      {/* Infinite Scroll Ticker */}
      <div className="w-full border-t border-b border-white/5 bg-surface/30 mb-20 py-8 relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-midnight to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-midnight to-transparent z-10"></div>
        
        <div className="flex overflow-hidden whitespace-nowrap">
            <div className="flex animate-marquee space-x-16 min-w-full items-center justify-around">
                {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, i) => (
                    <span key={i} className="text-2xl md:text-4xl font-display font-bold text-white/20 uppercase">
                        {logo}
                    </span>
                ))}
            </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-surface p-8 border border-white/5 hover:border-white/20 transition-all">
                    <div className="flex items-center space-x-1 mb-6">
                        {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-cyberLime text-cyberLime" />
                        ))}
                    </div>
                    <p className="text-lg text-white mb-8 leading-relaxed">"{t.content}"</p>
                    <div className="flex items-center space-x-4">
                        <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full grayscale hover:grayscale-0 transition-all" />
                        <div>
                            <h4 className="font-bold text-white text-sm uppercase">{t.name}</h4>
                            <p className="text-gray-500 text-xs">{t.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;