import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './CTASection.css';

const CTASection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="cta-section">
      <h2 className="cta-title">
        {language === 'id'
          ? 'Saatnya Pesan Hosting di CloudHoster, Order Sekarang!'
          : 'It’s Time to Order Hosting at CloudHoster, Get Started Now!'}
      </h2>
      <p className="cta-subtext">
        {language === 'id'
          ? 'Dapatkan domain gratis + layanan premium sekarang juga.'
          : 'Get a free domain and premium features now.'}
      </p>
      <a href="#" className="cta-button">
        {language === 'id' ? 'Mulai Sekarang' : 'Get Started'}
      </a>
    </section>
  );
};

export default CTASection;
