import React from 'react';
import BookingWidget from './BookingWidget';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-midnight">
      
      {/* Abstract X Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[80vw] h-[150vh] bg-surface/30 transform -rotate-[15deg] translate-x-1/3 -translate-y-1/4 backdrop-blur-3xl border-l border-white/5"></div>
        <div className="absolute top-0 left-0 w-[40vw] h-[150vh] bg-surface/20 transform rotate-[15deg] -translate-x-1/4 -translate-y-1/4 backdrop-blur-3xl border-r border-white/5"></div>
        
        {/* Dynamic Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Hero Copy */}
        <div className="w-full lg:w-1/2 space-y-8">
            <div className="flex items-center space-x-4">
                <span className="h-px w-12 bg-cyberLime"></span>
                <span className="text-cyberLime text-xs font-bold tracking-[0.3em] uppercase">On-Demand Production</span>
            </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-[0.85] tracking-tight">
            SPEED<br />
            <span className="text-cyberLime text-7xl md:text-9xl relative -top-2 inline-block transform skew-x-[-10deg]">X</span><br />
            QUALITY
          </h1>
          
          <p className="text-lg text-gray-400 max-w-lg leading-relaxed font-light">
            Professional video crews at your location in minutes. <br/>
            Shot. Edited. Delivered. <span className="text-white font-medium">Before the night ends.</span>
          </p>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
             <div>
                <span className="block text-2xl font-bold font-display text-white">10m</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Turnaround</span>
             </div>
             <div>
                <span className="block text-2xl font-bold font-display text-white">4K</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Resolution</span>
             </div>
             <div>
                <span className="block text-2xl font-bold font-display text-white">NYC</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Active Hub</span>
             </div>
          </div>
        </div>

        {/* Booking Widget Container */}
        <div className="w-full lg:w-[420px] relative">
            {/* Decoration behind widget */}
            <div className="absolute -inset-4 bg-gradient-to-r from-electricPurple to-cyberLime opacity-20 blur-2xl rounded-full"></div>
            <BookingWidget />
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-cyberLime to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;