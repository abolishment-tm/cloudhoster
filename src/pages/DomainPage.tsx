import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import HeroSection from '../components/Hero/HeroSection';
import './DomainPage.css';

const DomainPage: React.FC = () => {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: 'Domain Registration',
      subtitle: 'Find and register your perfect domain name',
      features: [
        'Instant Domain Registration',
        'Free DNS Management',
        'Domain Privacy Protection'
      ]
    },
    id: {
      title: 'Pendaftaran Domain',
      subtitle: 'Temukan dan daftarkan nama domain sempurna Anda',
      features: [
        'Registrasi Domain Instan',
        'Manajemen DNS Gratis',
        'Proteksi Privasi Domain'
      ]
    }
  };

  return (
    <div className="domain-page">
      <HeroSection />
      {/* Add domain registration specific content here */}
    </div>
  );
};

export default DomainPage;