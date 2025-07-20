'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const productLinks = [
    { name: t('footer.products.iphone15'), href: `/${locale}/products/iphone-15` },
    { name: t('footer.products.iphone14'), href: `/${locale}/products/iphone-14` },
    { name: t('footer.products.iphone13'), href: `/${locale}/products/iphone-13` },
    { name: t('footer.products.iphone12'), href: `/${locale}/products/iphone-12` },
    { name: t('footer.products.accessories'), href: `/${locale}/products/accessories` },
  ];

  const serviceLinks = [
    { name: t('footer.services.refurbishment'), href: `/${locale}/services/refurbishment` },
    { name: t('footer.services.warranty'), href: `/${locale}/services/warranty` },
    { name: t('footer.services.support'), href: `/${locale}/services/support` },
    { name: t('footer.services.tradein'), href: `/${locale}/services/trade-in` },
    { name: t('footer.services.repair'), href: `/${locale}/services/repair` },
  ];

  const companyLinks = [
    { name: t('footer.company.about'), href: `/${locale}/about` },
    { name: t('footer.company.process'), href: `/${locale}/our-process` },
    { name: t('footer.company.careers'), href: `/${locale}/careers` },
    { name: t('footer.company.privacy'), href: `/${locale}/privacy` },
    { name: t('footer.company.terms'), href: `/${locale}/terms` },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Swi9a Phone</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{t('contact.info.store')}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-gray-300">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>+212-XXX-XXX-XXX</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-gray-300">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>contact@swi9aphone.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-gray-300">
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Mon–Fri: 9:00–19:00</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.products.title')}</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services.title')}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company.title')}</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* WhatsApp Button */}
            <div className="mt-6">
              <a
                href="https://wa.me/212XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                {t('common.whatsapp')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Swi9a Phone. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <Link href={`/${locale}/privacy`} className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href={`/${locale}/terms`} className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}