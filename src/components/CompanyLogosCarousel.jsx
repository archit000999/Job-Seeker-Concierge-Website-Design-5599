import React from 'react';
import { motion } from 'framer-motion';

const CompanyLogosCarousel = () => {
  // Using company names as logos since we can't guarantee external logo URLs will work
  const companies = [
    'Google', 'Microsoft', 'Apple', 'Amazon', 'Meta',
    'Netflix', 'Spotify', 'Uber', 'Airbnb', 'Tesla',
    'Salesforce', 'Adobe', 'Nvidia', 'Intel', 'IBM',
    'Oracle', 'Zoom', 'Slack', 'Dropbox', 'Stripe'
  ];

  // Duplicate the array to create seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Our clients have landed roles at
          </h3>
          <p className="text-3xl font-bold text-gray-900">
            Top Companies Worldwide
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <motion.div
            className="flex space-x-12"
            animate={{
              x: [0, -50 * companies.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear"
              }
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <motion.div
                key={`${company}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-8 py-4 hover:shadow-md transition-shadow duration-200">
                  <span className="text-xl font-bold text-gray-700 whitespace-nowrap">
                    {company}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Job Placements</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">92%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">$150K</div>
                <div className="text-sm text-gray-600">Average Salary Increase</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyLogosCarousel;