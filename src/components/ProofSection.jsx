import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiUsers, FiTarget, FiClock } = FiIcons;

const ProofSection = () => {
  const stats = [
    {
      icon: FiTarget,
      number: "15+",
      label: "Average interviews landed",
      sublabel: "in 2 months"
    },
    {
      icon: FiUsers,
      number: "600+",
      label: "High-intent contacts",
      sublabel: "reached monthly"
    },
    {
      icon: FiTrendingUp,
      number: "3x",
      label: "Higher response rate",
      sublabel: "vs LinkedIn InMail"
    },
    {
      icon: FiClock,
      number: "<10min",
      label: "Average response time",
      sublabel: "to new job postings"
    }
  ];

  const testimonials = [
    {
      quote: "I landed 3 interviews in my first week with Saki. The hiring managers were impressed that I reached out so quickly.",
      author: "Sarah Chen",
      role: "Senior Product Manager",
      company: "Tech Startup"
    },
    {
      quote: "Finally, a service that actually works. I was getting lost in the LinkedIn application black hole before Saki.",
      author: "Michael Rodriguez",
      role: "Engineering Director",
      company: "Fortune 500"
    },
    {
      quote: "The ROI is incredible. I got my dream job through Saki's outreach and the 1% fee was totally worth it.",
      author: "Jennifer Kim",
      role: "VP of Marketing",
      company: "Scale-up"
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
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our clients consistently land more interviews, faster responses, and better opportunities.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={stat.icon} className="w-8 h-8 text-primary-600" />
              </div>
              
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              
              <div className="text-lg font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              
              <div className="text-sm text-gray-500">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            What Our Clients Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <div className="text-4xl text-primary-600 mb-4">"</div>
                  <p className="text-gray-700 leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-primary-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Them?
            </h3>
            <p className="text-lg text-primary-100 mb-6">
              Start landing interviews before your competition even knows the jobs exist.
            </p>
            <motion.button
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See If You Qualify
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofSection;