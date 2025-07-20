'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, Smartphone, Star, MapPin } from 'lucide-react';

export default function ImpactMetrics() {
  const t = useTranslations();

  const metrics = [
    {
      icon: Users,
      value: '15,000+',
      label: t('metrics.customers'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Smartphone,
      value: '25,000+',
      label: t('metrics.devices'),
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Star,
      value: '98%',
      label: t('metrics.satisfaction'),
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: MapPin,
      value: '12',
      label: t('metrics.cities'),
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('metrics.title')}
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Icon */}
              <div className={`w-20 h-20 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <metric.icon className="w-10 h-10 text-white" />
              </div>

              {/* Value */}
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {metric.value}
              </div>

              {/* Label */}
              <div className="text-blue-100 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Join thousands of satisfied customers who trust Swi9a Phone for their premium refurbished iPhone needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}