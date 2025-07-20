import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter, Noto_Sans_Arabic } from 'next/font/google';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSansArabic = Noto_Sans_Arabic({ 
  subsets: ['arabic'], 
  variable: '--font-noto-arabic' 
});

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  return {
    title: {
      template: '%s | Swi9a Phone',
      default: 'Swi9a Phone - Morocco\'s Premier iPhone Destination',
    },
    description: 'Premium refurbished iPhones backed by cutting-edge technology and unmatched expertise. Quality devices at incredible prices.',
    keywords: ['iPhone', 'refurbished', 'Morocco', 'Casablanca', 'premium', 'warranty'],
    authors: [{ name: 'Swi9a Phone' }],
    creator: 'Swi9a Phone',
    publisher: 'Swi9a Phone',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'ar': '/ar',
        'fr': '/fr',
      },
    },
    openGraph: {
      title: 'Swi9a Phone - Morocco\'s Premier iPhone Destination',
      description: 'Premium refurbished iPhones backed by cutting-edge technology and unmatched expertise.',
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: 'Swi9a Phone',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Swi9a Phone - Premium Refurbished iPhones',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Swi9a Phone - Morocco\'s Premier iPhone Destination',
      description: 'Premium refurbished iPhones backed by cutting-edge technology and unmatched expertise.',
      images: ['/og-image.jpg'],
    },
  };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${inter.variable} ${notoSansArabic.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}