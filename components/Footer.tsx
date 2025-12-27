import React from 'react';
import { Camera, Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import Button from './ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        {/* Call to Partner - Simplified */}
        <div className="border border-white/10 p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 bg-surface/5 relative overflow-hidden group">
            {/* Hover effect background */}
            <div className="absolute inset-0 bg-gradient-to-r from-electricPurple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold text-white mb-2 tracking-widest">JOIN THE <span className="text-electricPurple">X</span> NETWORK</h3>
                <p className="text-gray-400 text-sm max-w-md">Earn up to $80/hr using your phone. No editing. Just shoot.</p>
            </div>
            <div className="relative z-10">
                <Button variant="outline" className="border-white/20 hover:border-electricPurple hover:text-electricPurple">
                    Become a Partner <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-12 mb-12">
            <div className="space-y-6">
                <div className="flex items-center">
                    <span className="text-xl font-display font-bold text-white tracking-widest">
                        REEL<span className="text-cyberLime mx-0.5">X</span>PRESS
                    </span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
                    The intersection of speed and cinema. <br/>
                    On-demand video production for the modern era.
                </p>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em] text-cyberLime">Platform</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-white transition-colors">Book a Shoot</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em] text-cyberLime">Company</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em] text-cyberLime">Connect</h4>
                <div className="flex space-x-4">
                    <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-wider">
            <p>&copy; 2024 REEL X PRESS Inc.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-gray-400">Privacy</a>
                <a href="#" className="hover:text-gray-400">Terms</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;