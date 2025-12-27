import React, { useState } from 'react';
import { MapPin, Calendar, Clock, ArrowRight, Video, CheckCircle2 } from 'lucide-react';
import Button from './ui/Button';

const BookingWidget: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [location, setLocation] = useState('');

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="w-full bg-surface border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Flat Progress Bar */}
      <div className="flex h-1 w-full bg-black">
        <div className={`h-full bg-cyberLime transition-all duration-500 ${step === 1 ? 'w-1/2' : 'w-full'}`}></div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-display font-bold text-white tracking-wide">
                {step === 1 ? "START SHOOT" : "CONFIRM"}
            </h3>
            <span className="text-[10px] text-gray-500 font-mono border border-gray-700 px-2 py-1 rounded">
                LIVE STATUS: ACTIVE
            </span>
        </div>

        {step === 1 ? (
            <form onSubmit={handleBook} className="space-y-5">
            <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Location</label>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <MapPin className="h-4 w-4 text-cyberLime" />
                    </div>
                    <input
                        type="text"
                        placeholder="123 Production Ave, NYC"
                        className="w-full bg-black/50 border border-white/10 text-white pl-10 pr-4 py-4 text-sm focus:border-cyberLime focus:outline-none transition-colors placeholder-gray-700 font-medium"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Date</label>
                    <div className="relative">
                        <input
                            type="date"
                            className="w-full bg-black/50 border border-white/10 text-white px-4 py-4 text-sm focus:border-cyberLime focus:outline-none transition-colors text-gray-300"
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Time</label>
                    <div className="relative">
                        <select className="w-full bg-black/50 border border-white/10 text-white px-4 py-4 text-sm focus:border-cyberLime focus:outline-none appearance-none cursor-pointer">
                            <option>ASAP (Rush)</option>
                            <option>Today, 8 PM</option>
                            <option>Tomorrow</option>
                        </select>
                    </div>
                </div>
            </div>

            <Button type="submit" className="w-full py-6 mt-4 bg-cyberLime text-black hover:bg-white border-0">
                Find Crew <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            </form>
        ) : (
            <div className="space-y-6 animate-fadeIn">
                <div className="bg-black/30 p-4 border border-white/5 flex gap-4 items-center">
                    <div className="h-10 w-10 bg-cyberLime/10 flex items-center justify-center rounded-full">
                        <CheckCircle2 className="w-5 h-5 text-cyberLime" />
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs">Crew Found</p>
                        <p className="text-white font-bold text-sm">~6 min arrival time</p>
                    </div>
                </div>

                <div className="space-y-1 pt-2">
                    <div className="flex justify-between text-xs py-2 border-b border-white/5">
                        <span className="text-gray-500 uppercase">Rate</span>
                        <span className="text-white font-mono">$149/hr</span>
                    </div>
                    <div className="flex justify-between text-xs py-2 border-b border-white/5">
                        <span className="text-gray-500 uppercase">Est. Output</span>
                        <span className="text-white font-mono">2 Reels</span>
                    </div>
                    <div className="flex justify-between text-lg py-4 font-bold">
                        <span className="text-white">TOTAL</span>
                        <span className="text-cyberLime">$149.00</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" onClick={() => setStep(1)} className="border-white/10 hover:border-white">Back</Button>
                    <Button className="bg-electricPurple hover:bg-electricPurple/90 border-0 text-white">Pay & Book</Button>
                </div>
            </div>
        )}
      </div>
      
      {/* Footer of card */}
      <div className="bg-black/40 p-4 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-wider">
        <span>Secure Payment</span>
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> System Online</span>
      </div>
    </div>
  );
};

export default BookingWidget;