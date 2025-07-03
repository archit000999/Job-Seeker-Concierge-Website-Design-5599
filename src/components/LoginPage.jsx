import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { QuestLogin } from '@questlabs/react-sdk';
import { useAuth } from '../context/AuthContext';
import questConfig from '../../questConfig';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = ({ userId, token, newUser }) => {
    // Store auth data
    login({ userId, token });
    
    // Navigate based on user status
    if (newUser) {
      navigate('/onboarding');
    } else {
      navigate('/dashboard'); // or your main app route
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Branding */}
      <motion.div 
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden"
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
              Welcome Back to Your
              <span className="block text-primary-200">Career Success</span>
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Continue your journey to landing interviews before jobs hit LinkedIn.
              Your personalized job search automation is waiting.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-primary-100">15+ interviews landed on average</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-primary-100">600+ hiring managers reached monthly</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-primary-100">3x higher response rate vs LinkedIn</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary-400/20 rounded-full blur-lg"></div>
      </motion.div>

      {/* Right Section - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
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
              Sign In
            </h2>
            <p className="text-gray-600">
              Access your personalized job search dashboard
            </p>
          </div>

          {/* Quest SDK Login Component */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-lg">
            <QuestLogin
              onSubmit={handleLogin}
              email={true}
              google={false}
              accent={questConfig.PRIMARY_COLOR}
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account? Sign up to get started with your automated job search.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;