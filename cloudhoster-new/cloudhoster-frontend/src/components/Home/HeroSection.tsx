// File: src/components/Home/HeroSection.tsx
import React from 'react';
import './HeroSection.css';
import { useLanguage } from '../../contexts/LanguageContext';

import HeroIllustration from '../../assets/images/hero-ilustration-home.svg';
import CheckIcon from '../../assets/icons/checkmark.svg';

const HeroSection: React.FC = () => {
  const { language } = useLanguage();

  const texts = {
    id: {
      title: 'Dapatkan Web Hosting Aman Tanpa Khawatir',
      bullets: [
        '24/7 Support dengan Expert',
        '100 Cloud Platform yang aman',
        'Tier-3 Data Center di Multi-Lokasi',
        'Migrasi yang mudah',
      ],
      cta: 'Mulai Sekarang',
      guarantee: '45 Hari Jaminan Uang Kembali',
    },
    en: {
      title: 'Get Secure Web Hosting with Confidence',
      bullets: [
        '24/7 Expert Support',
        '100% Secure Cloud Platform',
        'Tier-3 Data Centers in Multiple Locations',
        'Easy Migration',
      ],
      cta: 'Get Started',
      guarantee: '45-Day Money Back Guarantee',
    },
  };

  const t = texts[language];

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-title">{t.title}</h1>
          <ul className="hero-bullets">
            {t.bullets.map((item, index) => (
              <li key={index}>
                <img src={CheckIcon} alt="check" /> {item}
              </li>
            ))}
          </ul>
          <button className="hero-cta">{t.cta}</button>
          <div className="hero-guarantee">{t.guarantee}</div>
        </div>

        <div className="hero-right">
          <img src={HeroIllustration} alt="Hosting Illustration" className="hero-image" />
        </div>
      </div>

      {/* Wave bawah (homepage) bentuk ripple */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            className="shape-fill"
            d="M0,40 C360,120 1080,-40 1440,60 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
