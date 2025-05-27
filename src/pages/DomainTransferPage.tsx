import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import HeroSection from '../components/Hero/HeroSection';
import './DomainTransferPage.css';

const DomainTransferPage: React.FC = () => {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: 'Domain Transfer',
      subtitle: 'Transfer your domain to us easily and securely',
      features: [
        'Free Domain Transfer',
        'One-Click Transfer Process',
        '24/7 Transfer Support'
      ]
    },
    id: {
      title: 'Transfer Domain',
      subtitle: 'Transfer domain Anda dengan mudah dan aman',
      features: [
        'Transfer Domain Gratis',
        'Proses Transfer Satu Klik',
        'Dukungan Transfer 24/7'
      ]
    }
  };

  return (
    <div className="domain-transfer-page">
      <HeroSection />
      {/* Add domain transfer specific content here */}
    </div>
  );
};

export default DomainTransferPage;