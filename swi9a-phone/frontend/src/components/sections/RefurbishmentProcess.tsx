'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Search, Settings, TestTube, Award } from 'lucide-react';

export default function RefurbishmentProcess() {
  const t = useTranslations();

  const steps = [
    {
      icon: Search,
      title: t('process.steps.inspection'),
      description: 'Comprehensive device assessment and quality evaluation.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Settings,
      title: t('process.steps.restoration'),
      description: 'Professional repair and component replacement.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: TestTube,
      title: t('process.steps.testing'),
      description: 'Rigorous performance and functionality testing.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Award,
      title: t('process.steps.certification'),
      description: 'Quality certification and warranty preparation.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('process.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('process.description')}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Number */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 rtl:mr-0 rtl:ml-4`}>
                  {index + 1}
                </div>
                <div className="flex-1 h-px bg-gray-300 hidden lg:block"></div>
              </div>

              {/* Card */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center mb-4`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-12 w-full h-px bg-gray-300 transform translate-x-4"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              32-Point Quality Inspection
            </h3>
            <p className="text-gray-600 mb-6">
              Every device undergoes our comprehensive 32-point inspection process to ensure premium quality and reliability.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Quality Tested</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">30 Days</div>
                <div className="text-sm text-gray-600">Warranty</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">Like New</div>
                <div className="text-sm text-gray-600">Condition</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">Certified</div>
                <div className="text-sm text-gray-600">Quality</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}