import React from 'react';
import { Play } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-midnight relative">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex items-end justify-between">
            <div>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">THE <span className="text-electricPurple">REAL</span> WORK</h2>
                <p className="text-gray-400 max-w-xl">Shot on iPhone 15 Pro Max & Sony FX3. Edited on-site. Delivered via Cloud.</p>
            </div>
            <button className="hidden md:block text-cyberLime uppercase tracking-wider text-sm font-bold hover:underline">View All Projects</button>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {PORTFOLIO_ITEMS.map((item) => (
                <div key={item.id} className="relative group overflow-hidden break-inside-avoid bg-surface border border-white/5 rounded-lg cursor-pointer">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 group-hover:bg-cyberLime group-hover:text-black transition-all">
                        <Play className="w-4 h-4 fill-current" />
                    </div>

                    <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                        <p className="text-cyberLime text-xs font-bold uppercase tracking-wider mb-1">{item.category}</p>
                        <h3 className="text-xl font-display font-bold text-white">{item.title}</h3>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;