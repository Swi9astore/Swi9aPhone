import { useTranslations } from 'next-intl';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import RefurbishmentProcess from '@/components/sections/RefurbishmentProcess';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import ImpactMetrics from '@/components/sections/ImpactMetrics';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* Refurbishment Process */}
      <RefurbishmentProcess />
      
      {/* Services (Trade-in, Repair, Support) */}
      <Services />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Impact Metrics */}
      <ImpactMetrics />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}