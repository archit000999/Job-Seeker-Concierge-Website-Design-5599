import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiDollarSign, FiRefreshCw, FiTrendingUp } = FiIcons;

const PricingSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  const features = [
    "Automated job scanning across 50+ sources",
    "Direct outreach to hiring managers",
    "Personalized email templates",
    "Real-time job alerts",
    "Interview scheduling assistance",
    "Performance tracking dashboard",
    "Dedicated account manager",
    "24/7 customer support"
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Risk-Free Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We only succeed when you succeed. Our pricing model aligns our incentives with your career goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pricing Card */}
          <motion.div
            className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-2xl border border-primary-100"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ApplyFirst Concierge Service
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  {/* <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-primary-600" /> */}
                  <span className="text-4xl font-bold text-gray-900">$299</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg inline-block">
                  <span className="font-semibold">Refundable Security Deposit</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiRefreshCw} className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Money-Back Guarantee</div>
                  <div className="text-gray-600">If we don't land you interviews, you get your deposit back</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-primary-500 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Success-Based Fee</div>
                  <div className="text-gray-600">Only pay 1% of yearly compensation when you get hired through our efforts</div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-semibold text-gray-900 mb-4">Everything Included:</h4>
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                How Our Pricing Works
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <h4 className="font-semibold text-gray-900">Start with Security Deposit</h4>
                  </div>
                  <p className="text-gray-600 ml-11">
                    Pay $299/month as a refundable security deposit. This covers our operational costs and shows you're serious about your job search.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <h4 className="font-semibold text-gray-900">We Deliver Results</h4>
                  </div>
                  <p className="text-gray-600 ml-11">
                    Our team works to land you interviews. If we don't deliver within 60 days, you get your full deposit back — no questions asked.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <h4 className="font-semibold text-gray-900">Success Fee Only When You Win</h4>
                  </div>
                  <p className="text-gray-600 ml-11">
                    When you land a job through our outreach, we charge just 1% of your yearly compensation. Your success is our success.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              className="bg-primary-600 text-white rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="font-bold text-lg mb-2">Example Scenario:</h4>
              <p className="text-primary-100 mb-4">
                You land a $120K role through ApplyFirst. You pay our 1% success fee ($1,200 from your yearly $120K salary) and get your $299 deposit back.
              </p>
              <div className="text-primary-100">
                <strong>Total cost: $1,200 for a $120K opportunity</strong>
              </div>
            </motion.div>

            <motion.button
              onClick={handleGetStarted}
              className="w-full bg-primary-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Free Evaluation
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;