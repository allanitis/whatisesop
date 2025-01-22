import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { WhatIsEsop } from './components/WhatIsEsop';
import { WhyCare } from './components/WhyCare';
import { HowItWorks } from './components/HowItWorks';
import { VestingPeriod } from './components/VestingPeriod';
import { CashingOut } from './components/CashingOut';
import { RiskAndReward } from './components/RiskAndReward';
import { CommonMyths } from './components/CommonMyths';
import { EsopCalculator } from './components/EsopCalculator';
import { Faqs } from './components/Faqs';
import { Footer } from './components/Footer';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Hero />
      <WhatIsEsop />
      <WhyCare />
      <HowItWorks />
      <VestingPeriod />
      <CashingOut />
      <RiskAndReward />
      <CommonMyths />
      <EsopCalculator />
      <Faqs />
      <Footer />
    </div>
  );
}