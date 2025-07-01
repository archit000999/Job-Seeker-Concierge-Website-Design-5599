import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import HeroSection from './HeroSection';
import CompanyLogosCarousel from './CompanyLogosCarousel';
import ProblemSection from './ProblemSection';
import HowItWorksSection from './HowItWorksSection';
import ProofSection from './ProofSection';
import PricingSection from './PricingSection';
import FAQSection from './FAQSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CompanyLogosCarousel />
        <ProblemSection />
        <HowItWorksSection />
        <ProofSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;