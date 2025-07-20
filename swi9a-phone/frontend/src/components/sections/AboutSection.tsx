'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, Leaf, Calendar } from 'lucide-react';

export default function AboutSection() {
  const t = useTranslations();

  const highlights = [
    {
      icon: Award,
      title: t('about.highlights.quality'),
      description: 'Every device meets our rigorous quality standards.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Leaf,
      title: t('about.highlights.sustainable'),
      description: 'Contributing to a more sustainable future through device refurbishment.',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('about.title')}
            </h2>
            
            <div className="flex items-center mb-6">
              <Calendar className="w-6 h-6 text-blue-600 mr-3 rtl:mr-0 rtl:ml-3" />
              <span className="text-lg font-semibold text-gray-700">
                {t('about.founded')}
              </span>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${highlight.color} rounded-lg flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4 flex-shrink-0`}>
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 h-96 flex items-center justify-center">
              {/* Morocco Flag Colors Pattern */}
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-red-500 to-red-600 rounded-t-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-r from-green-500 to-green-600 rounded-b-3xl opacity-20"></div>
              
              {/* Content */}
              <div className="text-center z-10">
                <div className="text-6xl font-bold text-gray-900 mb-4">🇲🇦</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Made in Morocco
                </h3>
                <p className="text-gray-600">
                  Proudly serving Morocco with premium refurbished iPhones
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-purple-200 rounded-full opacity-50"></div>
              <div className="absolute top-1/2 left-8 w-8 h-8 bg-green-200 rounded-full opacity-50"></div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To make premium technology accessible to everyone in Morocco while promoting sustainability 
              through expert device refurbishment. We combine cutting-edge technology with traditional 
              Moroccan values of trust, quality, and exceptional customer service.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}