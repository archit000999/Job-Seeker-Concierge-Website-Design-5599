import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiMail, FiTarget, FiArrowRight } = FiIcons;

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FiSearch,
      title: "We scan the web for jobs",
      description: "Our AI continuously monitors job boards, company websites, and private networks for new opportunities — including ones not yet on LinkedIn.",
      detail: "Real-time monitoring across 50+ sources"
    },
    {
      icon: FiMail,
      title: "We instantly email hiring managers",
      description: "The moment a relevant job opens, we automatically send a personalized email with your resume directly to the decision-makers.",
      detail: "Average response time: under 10 minutes"
    },
    {
      icon: FiTarget,
      title: "You're in the first 10 applicants",
      description: "By reaching hiring managers before jobs go public, you skip the crowd and get genuine consideration for the role.",
      detail: "3x higher interview rate vs traditional applications"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Saki Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our automated system puts you ahead of the competition by reaching hiring managers 
            the moment opportunities become available.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                    <SafeIcon icon={step.icon} className="w-8 h-8 text-primary-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="bg-primary-50 rounded-lg p-3">
                    <span className="text-sm font-medium text-primary-700">
                      {step.detail}
                    </span>
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <SafeIcon icon={FiArrowRight} className="w-6 h-6 text-primary-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Skip the Competition?
            </h3>
            <p className="text-lg text-primary-100 mb-6">
              Join professionals who are landing interviews 3x faster with Saki's automated outreach.
            </p>
            <motion.button
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Free Evaluation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;