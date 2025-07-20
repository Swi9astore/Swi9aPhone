'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Award, Truck, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  const badges = [
    {
      icon: Shield,
      text: t('hero.badges.warranty'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Award,
      text: t('hero.badges.expert'),
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Truck,
      text: t('hero.badges.delivery'),
      color: 'from-green-500 to-green-600',
    },
    {
      icon: CheckCircle,
      text: t('hero.badges.quality'),
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 rtl:mr-0 rtl:ml-2"></span>
              Morocco's #1 iPhone Destination
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {t('hero.headline')}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
            >
              {t('hero.subheadline')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href={`/${locale}/products`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                {t('hero.cta')}
                <svg className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href={`/${locale}/contact`}
                className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                {t('common.contact')}
              </Link>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${badge.color} rounded-lg flex items-center justify-center mb-3`}>
                    <badge.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 leading-tight">
                    {badge.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Phone Image */}
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden">
                  {/* iPhone mockup */}
                  <div className="relative w-full h-full">
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
                    <div className="absolute top-16 left-4 right-4 bottom-8 bg-blue-500 rounded-xl flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-2xl font-bold mb-2">iPhone 15</div>
                        <div className="text-sm opacity-75">Like New</div>
                        <div className="text-xl font-semibold mt-4">15,999 MAD</div>
                        <div className="text-sm opacity-75 line-through">18,999 MAD</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Elements */}
              <div className="absolute top-8 right-8 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-purple-200 rounded-full opacity-50"></div>
              <div className="absolute top-1/2 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-gray-500">
          <span className="text-sm mb-2">Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}