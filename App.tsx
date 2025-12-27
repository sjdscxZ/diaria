import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-midnight min-h-screen text-white font-sans selection:bg-cyberLime selection:text-midnight">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Portfolio />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;