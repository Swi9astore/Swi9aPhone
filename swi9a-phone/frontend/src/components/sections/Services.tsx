'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RefreshCw, Wrench, HeadphonesIcon, ArrowRight } from 'lucide-react';

export default function Services() {
  const t = useTranslations();
  const locale = useLocale();

  const services = [
    {
      icon: RefreshCw,
      title: t('tradein.title'),
      description: t('tradein.description'),
      status: t('tradein.status'),
      href: `/${locale}/services/trade-in`,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      available: false,
    },
    {
      icon: Wrench,
      title: t('repair.title'),
      description: t('repair.description'),
      status: t('repair.status'),
      href: `/${locale}/services/repair`,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      available: true,
    },
    {
      icon: HeadphonesIcon,
      title: t('support.title'),
      description: t('support.description'),
      status: t('support.status'),
      href: `/${locale}/services/support`,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      available: true,
    },
  ];

  return (
    <section className="py-20 bg-white">
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
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for all your iPhone needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${service.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 ${
                service.available ? 'hover:scale-105' : 'opacity-75'
              }`}
            >
              {/* Status Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                service.available 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {service.status}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* CTA */}
              {service.available ? (
                <Link
                  href={service.href}
                  className="inline-flex items-center text-gray-900 font-semibold hover:text-blue-600 transition-colors"
                >
                  {t('common.learnMore')}
                  <ArrowRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                </Link>
              ) : (
                <span className="inline-flex items-center text-gray-500 font-semibold">
                  Coming Soon
                  <div className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 bg-gray-300 rounded-full"></div>
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need Help with Your iPhone?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our expert team is here to help with repairs, trade-ins, and any questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                {t('common.contact')} Us
              </Link>
              <a
                href="https://wa.me/212XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                {t('common.whatsapp')} Chat
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}