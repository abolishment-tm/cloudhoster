import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import HeroSection from '../components/Hero/HeroSection';
import './WhoisLookupPage.css';

const WhoisLookupPage: React.FC = () => {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: 'WHOIS Lookup',
      subtitle: 'Check domain ownership and registration details',
      features: [
        'Instant WHOIS Results',
        'Comprehensive Domain Info',
        'Free Unlimited Searches'
      ]
    },
    id: {
      title: 'WHOIS Lookup',
      subtitle: 'Cek kepemilikan dan detail registrasi domain',
      features: [
        'Hasil WHOIS Instan',
        'Info Domain Lengkap',
        'Pencarian Tak Terbatas Gratis'
      ]
    }
  };

  return (
    <div className="whois-lookup-page">
      <HeroSection />
      {/* Add WHOIS lookup specific content here */}
    </div>
  );
};

export default WhoisLookupPage;