import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlus, FiMinus } = FiIcons;

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  const handleBookConsult = () => {
    // You can implement a booking system or redirect to a calendar link
    console.log('Book consultation clicked');
  };

  const faqs = [
    {
      question: "How do you protect my privacy during outreach?",
      answer: "We use professional email templates that never mention you're using a service. All communications appear to come from you directly, and we never share your information with third parties. Your privacy and professional reputation are our top priorities."
    },
    {
      question: "How quickly can I expect to see results?",
      answer: "Most clients start receiving responses within the first week. On average, our users land their first interview within 2-3 weeks and receive 15+ interviews within 2 months. However, results can vary based on your industry, experience level, and market conditions."
    },
    {
      question: "What if I don't get any interviews?",
      answer: "If we don't land you any interviews within 60 days, you get your full $299 monthly deposit back. We're confident in our process, but we put our money where our mouth is with this guarantee."
    },
    {
      question: "How does the 1% success fee work?",
      answer: "You only pay our 1% success fee when you actually get hired through a job we helped you discover and apply for. It's calculated as 1% of your yearly gross compensation. If you get hired through other means, there's no success fee."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel anytime with 30 days' notice. If you cancel within the first 60 days and haven't received any interviews through our service, you'll get your deposit refunded according to our money-back guarantee."
    },
    {
      question: "What industries and roles do you support?",
      answer: "We work with professionals across tech, finance, marketing, sales, operations, and other corporate roles typically earning $100K+. Our system works best for mid to senior-level positions where direct hiring manager outreach is most effective."
    },
    {
      question: "How is this different from other job search services?",
      answer: "Unlike recruiters who work for companies, we work exclusively for you. Unlike job boards that are reactive, we're proactive — reaching hiring managers before jobs go public. Unlike expensive career coaches, we deliver concrete results with measurable ROI."
    },
    {
      question: "Do you help with interview preparation?",
      answer: "While our primary focus is landing you interviews, we provide basic interview scheduling assistance and can connect you with our network of interview coaches if needed. Our main value is getting you in front of the right people at the right time."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about ApplyFirst's concierge job search service.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <SafeIcon
                  icon={openIndex === index ? FiMinus : FiPlus}
                  className="w-5 h-5 text-primary-600 flex-shrink-0"
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-primary-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Job Search?
            </h3>
            <p className="text-lg text-primary-100 mb-6">
              Stop competing with hundreds of applicants. Start reaching hiring managers directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleGetStarted}
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See If You Qualify
              </motion.button>
              <motion.button
                onClick={handleBookConsult}
                className="border border-primary-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Free Consult
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;