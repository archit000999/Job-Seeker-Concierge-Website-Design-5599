import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { OnBoarding } from '@questlabs/react-sdk';
import questConfig from '../../questConfig';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  const getAnswers = () => {
    // Navigate to main app after onboarding completion
    navigate('/dashboard'); // or your desired main app route
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Branding */}
      <motion.div 
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-500 via-primary-600 to-primary-700 relative overflow-hidden"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <span className="text-3xl font-bold">ApplyFirst</span>
            </div>
            
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Let's Get You
              <span className="block text-green-200">Set Up for Success</span>
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              We're personalizing your automated job search experience.
              This quick setup ensures we target the right opportunities for you.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">What We're Setting Up:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <span className="text-green-100">Your target job roles & industries</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <span className="text-green-100">Preferred company sizes & locations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <span className="text-green-100">Salary expectations & benefits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <span className="text-green-100">Outreach personalization preferences</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-400/20 rounded-full blur-lg"></div>
      </motion.div>

      {/* Right Section - Onboarding Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">ApplyFirst</span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Quick Setup
            </h2>
            <p className="text-gray-600">
              Help us personalize your job search experience
            </p>
          </div>

          {/* Quest SDK Onboarding Component */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg" style={{ minHeight: '400px' }}>
            <OnBoarding
              userId={userId}
              token={token}
              questId={questConfig.QUEST_ONBOARDING_QUESTID}
              answer={answers}
              setAnswer={setAnswers}
              getAnswers={getAnswers}
              accent={questConfig.PRIMARY_COLOR}
              singleChoose="modal1"
              multiChoice="modal2"
            >
              <OnBoarding.Header />
              <OnBoarding.Content />
              <OnBoarding.Footer />
            </OnBoarding>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              This information helps us find the most relevant opportunities for you.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OnboardingPage;