'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function FeaturedProducts() {
  const t = useTranslations();
  const locale = useLocale();

  const productSeries = [
    {
      name: t('featured.series.iphone15'),
      href: `/${locale}/products/iphone-15`,
      price: 'Starting at 15,999 MAD',
      originalPrice: '18,999 MAD',
      image: '/images/iphone-15.jpg',
      gradient: 'from-blue-500 to-purple-600',
      features: ['Dynamic Island', 'USB-C', 'A17 Pro Chip'],
      badge: 'Latest',
    },
    {
      name: t('featured.series.iphone14'),
      href: `/${locale}/products/iphone-14`,
      price: 'Starting at 12,999 MAD',
      originalPrice: '15,999 MAD',
      image: '/images/iphone-14.jpg',
      gradient: 'from-purple-500 to-pink-600',
      features: ['A16 Bionic', 'Dual Camera', 'Ceramic Shield'],
      badge: 'Popular',
    },
    {
      name: t('featured.series.iphone13'),
      href: `/${locale}/products/iphone-13`,
      price: 'Starting at 9,999 MAD',
      originalPrice: '12,999 MAD',
      image: '/images/iphone-13.jpg',
      gradient: 'from-green-500 to-teal-600',
      features: ['A15 Bionic', 'Cinematic Mode', '5G Ready'],
      badge: 'Best Value',
    },
    {
      name: t('featured.series.iphone12'),
      href: `/${locale}/products/iphone-12`,
      price: 'Starting at 7,999 MAD',
      originalPrice: '10,999 MAD',
      image: '/images/iphone-12.jpg',
      gradient: 'from-orange-500 to-red-600',
      features: ['5G Capable', 'MagSafe', 'Night Mode'],
      badge: 'Great Deal',
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
            {t('featured.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('featured.subtitle')}
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {productSeries.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Badge */}
              <div className={`absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r ${product.gradient} text-white text-xs font-semibold rounded-full`}>
                {product.badge}
              </div>

              {/* Product Image */}
              <div className={`relative h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                {/* iPhone Mockup */}
                <div className="relative w-24 h-40 bg-black rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-800 rounded-full"></div>
                  <div className="absolute top-6 left-1 right-1 bottom-2 bg-white rounded-md"></div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-800 rounded-full"></div>
                </div>

                {/* Rating Stars */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-white text-sm font-medium ml-1">4.9</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 rtl:mr-0 rtl:ml-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{product.price}</div>
                    <div className="text-sm text-gray-500 line-through">{product.originalPrice}</div>
                  </div>
                  <div className="text-green-600 font-semibold text-sm">
                    Save 25%
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={product.href}
                  className="w-full bg-gray-900 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center group"
                >
                  {t('common.viewAll')}
                  <ArrowRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Products Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            {t('common.viewAll')} Products
            <ArrowRight className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}