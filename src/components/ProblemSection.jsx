import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiDollarSign, FiClock, FiAlertCircle } = FiIcons;

const ProblemSection = () => {
  const problems = [
    {
      icon: FiAlertCircle,
      title: "You apply to ghost jobs or miss the timing",
      description: "By the time jobs appear on LinkedIn, hundreds have already applied. You're competing against an oversaturated pool."
    },
    {
      icon: FiDollarSign,
      title: "Sending InMails is expensive and often ignored",
      description: "LinkedIn InMail credits cost $10+ each, and most hiring managers don't even check their LinkedIn messages regularly."
    },
    {
      icon: FiClock,
      title: "Manual outreach is time-consuming and rarely converts",
      description: "Researching companies, finding emails, and crafting personalized messages takes hours with minimal success rates."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why LinkedIn Isn't Enough
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional job searching puts you at a disadvantage. Here's why the current process is broken:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={problem.icon} className="w-6 h-6 text-red-600" />
                </div>
                {/* <SafeIcon icon={FiX} className="w-5 h-5 text-red-500" /> */}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-primary-600 text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              There's a Better Way
            </h3>
            <p className="text-lg text-primary-100">
              Instead of competing with hundreds of applicants, what if you could reach hiring managers 
              directly before jobs even hit the public boards?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;