'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingCart, Globe, Phone } from 'lucide-react';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const navigation = [
    { name: t('navigation.home'), href: `/${locale}` },
    {
      name: t('navigation.products'),
      href: `/${locale}/products`,
      children: [
        { name: t('navigation.iphone15'), href: `/${locale}/products/iphone-15` },
        { name: t('navigation.iphone14'), href: `/${locale}/products/iphone-14` },
        { name: t('navigation.iphone13'), href: `/${locale}/products/iphone-13` },
        { name: t('navigation.iphone12'), href: `/${locale}/products/iphone-12` },
      ],
    },
    {
      name: t('navigation.services'),
      href: `/${locale}/services`,
      children: [
        { name: t('navigation.refurbishment'), href: `/${locale}/services/refurbishment` },
        { name: t('navigation.warranty'), href: `/${locale}/services/warranty` },
        { name: t('navigation.support'), href: `/${locale}/services/support` },
        { name: t('navigation.tradein'), href: `/${locale}/services/trade-in` },
        { name: t('navigation.repair'), href: `/${locale}/services/repair` },
      ],
    },
    { name: t('navigation.about'), href: `/${locale}/about` },
    { name: t('navigation.contact'), href: `/${locale}/contact` },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Swi9a Phone
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors ${
                    pathname.startsWith(item.href) && item.href !== `/${locale}`
                      ? 'text-blue-600'
                      : ''
                  } ${pathname === item.href ? 'text-blue-600' : ''}`}
                >
                  {item.name}
                </Link>
                
                {/* Dropdown Menu */}
                {item.children && (
                  <div className="absolute left-0 rtl:left-auto rtl:right-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Cart */}
            <Link
              href={`/${locale}/cart`}
              className="text-gray-700 hover:text-blue-600 p-2 relative"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md ${
                    pathname === item.href ? 'text-blue-600 bg-blue-50' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                
                {/* Mobile dropdown items */}
                {item.children && (
                  <div className="ml-4 rtl:ml-0 rtl:mr-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}