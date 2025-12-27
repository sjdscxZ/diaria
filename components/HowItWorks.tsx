import React from 'react';
import { MapPin, Smartphone, Zap } from 'lucide-react';

const steps = [
    {
        icon: MapPin,
        title: "01. REQUEST",
        desc: "Set your location and time. A professional creator accepts your gig instantly."
    },
    {
        icon: Smartphone,
        title: "02. SHOOT",
        desc: "Our pro arrives with top-tier gear. They capture the vibe while you enjoy the event."
    },
    {
        icon: Zap,
        title: "03. LAUNCH",
        desc: "Edits are done on the spot. Receive a secure link to your 4K reel in 10 minutes."
    }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-surface border-t border-b border-borderDark">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-16">The Engine</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
                <div key={index} className="relative group">
                    <div className="absolute -left-4 -top-4 text-8xl font-display font-bold text-white/5 select-none pointer-events-none group-hover:text-cyberLime/10 transition-colors">
                        {index + 1}
                    </div>
                    <div className="relative z-10 bg-midnight p-8 border border-borderDark hover:border-cyberLime transition-colors h-full flex flex-col items-start">
                        <div className="w-12 h-12 bg-surface border border-borderDark flex items-center justify-center mb-6 text-cyberLime group-hover:bg-cyberLime group-hover:text-midnight transition-colors">
                            <step.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white mb-4">{step.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;