// File: src/components/Home/PromoDropdown.tsx
import React from 'react';
import './PromoDropdown.css';
import CountdownTimer from './CountdownTimer';
import { useLanguage } from '../../contexts/LanguageContext';

const PromoDropdown: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const { language } = useLanguage();
  if (!isOpen) return null;

  const t = {
    id: {
      title1: 'Mulai Petualangan Online Anda',
      desc1: 'Nikmati diskon hingga 78% untuk paket Shared Hosting pilihan kami.',
      price1: 'Rp24.900/bln',
      sup1: '+ Domain Gratis',
      subtitle1: 'Diskon akan otomatis diterapkan saat checkout.',
      button1: 'Lihat Paket',

      title2: 'Email Profesional untuk Anda!',
      desc2: 'Buat kesan profesional dengan domain email bisnis Anda. Dapatkan harga hemat untuk Email Hosting.',
      price2: 'Rp12.000/bln',
      sup2: '+ Proteksi Spam',
      subtitle2: 'Promo berlaku otomatis tanpa kode tambahan.',
      button2: 'Lihat Paket',

      timerLabel: 'Berakhir dalam',
    },
    en: {
      title1: 'Start Your Online Journey',
      desc1: 'Enjoy up to 78% off on our Shared Hosting packages.',
      price1: '$1.49/mo',
      sup1: '+ Free Domain',
      subtitle1: 'Discount will be applied automatically at checkout.',
      button1: 'View Plans',

      title2: 'Professional Email for You!',
      desc2: 'Make a professional impression with your domain email. Get best deal on Email Hosting.',
      price2: '$0.99/mo',
      sup2: '+ Spam Protection',
      subtitle2: 'Promo applies automatically, no code needed.',
      button2: 'View Plans',

      timerLabel: 'Ends in',
    },
  }[language];

  return (
    <div className="promo-dropdown-fixed show">
      <div className="promo-dropdown-inner">
        {/* Shared Hosting */}
        <div className="promo-column">
          <h2 className="promo-title">{t.title1}</h2>
          <p className="promo-desc">{t.desc1}</p>
          <div className="promo-price-badge orange">
            {t.price1}
            <span className="promo-sup">{t.sup1}</span>
          </div>
          <div className="promo-timer-wrapper">
            <span className="timer-label">
              {t.timerLabel}
              <span className="clock-icon" />
            </span>
            <CountdownTimer expiredAt="2025-06-08T23:59:59Z" />
          </div>
          <p className="promo-subtext">{t.subtitle1}</p>
          <button className="promo-cta orange">{t.button1}</button>
        </div>

        {/* Email Hosting */}
        <div className="promo-column">
          <h2 className="promo-title">{t.title2}</h2>
          <p className="promo-desc">{t.desc2}</p>
          <div className="promo-price-badge green">
            {t.price2}
            <span className="promo-sup">{t.sup2}</span>
          </div>
          <div className="promo-timer-wrapper">
            <span className="timer-label">
              {t.timerLabel}
              <span className="clock-icon" />
            </span>
            <CountdownTimer expiredAt="2025-06-08T23:59:59Z" />
          </div>
          <p className="promo-subtext">{t.subtitle2}</p>
          <button className="promo-cta green">{t.button2}</button>
        </div>
      </div>
    </div>
  );
};

export default PromoDropdown;
