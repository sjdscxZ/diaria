import React from 'react';
import { PRICING_TIERS } from '../constants';
import Button from './ui/Button';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-midnight relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">FAIR <span className="text-cyberLime">RATES</span>. FAST DELIVERY.</h2>
            <p className="text-gray-400">No hidden fees. Pay for the time, get the assets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_TIERS.map((tier) => (
                <div 
                    key={tier.id} 
                    className={`relative p-8 border flex flex-col ${tier.isPopular ? 'bg-surface border-cyberLime shadow-[0_0_30px_rgba(204,255,0,0.1)]' : 'bg-transparent border-white/10'}`}
                >
                    {tier.isPopular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyberLime text-midnight text-xs font-bold px-4 py-1 uppercase tracking-widest">
                            Most Popular
                        </div>
                    )}

                    <div className="mb-8">
                        <h3 className="text-xl font-display font-bold text-white uppercase mb-2">{tier.name}</h3>
                        <div className="flex items-baseline">
                            <span className="text-4xl font-bold text-white">{tier.price}</span>
                            {tier.price !== 'Custom' && <span className="text-gray-500 ml-2">/ session</span>}
                        </div>
                        <p className="text-gray-400 text-sm mt-4 min-h-[40px]">{tier.description}</p>
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                        {tier.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-300">
                                <Check className={`w-5 h-5 mr-3 shrink-0 ${tier.isPopular ? 'text-cyberLime' : 'text-gray-500'}`} />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <Button variant={tier.isPopular ? 'primary' : 'outline'} className="w-full">
                        {tier.price === 'Custom' ? 'Contact Sales' : 'Book Now'}
                    </Button>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;