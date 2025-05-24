import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import CountdownTimer from './CountdownTimer';
import './PromoBar.css';

const PromoBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useLanguage();
  
  const texts = {
    en: {
      topBar: 'Spring into Savings!',
      mainMessage: 'Up to 78% Off Hosting + Free Domain & Website Migration',
      viewDeals: 'View Deals',
      hosting: {
        title: 'Start Your Online Adventure',
        description: 'New to the web? We\'ve got your back! Enjoy up to up to 78% Off on select shared hosting plans.',
        price: '2.49',
        period: '/mo',
        feature: '+ Free Domain',
        viewPlans: 'View Plans'
      },
      email: {
        title: 'Professional Email Hosting',
        description: 'Get professional email hosting for your business with advanced features and security.',
        price: '15.000',
        period: '/mo',
        feature: '+ Free Migration',
        viewPlans: 'View Plans'
      },
      expiresIn: 'Expires In:',
      discount: 'Discount will be automatically applied upon checkout.'
    },
    id: {
      topBar: 'Promo Musim Semi!',
      mainMessage: 'Diskon Hingga 78% untuk Hosting + Domain Gratis & Migrasi Website',
      viewDeals: 'Lihat Promo',
      hosting: {
        title: 'Mulai Petualangan Online Anda',
        description: 'Baru di web? Kami siap membantu! Nikmati diskon hingga 78% untuk paket shared hosting pilihan.',
        price: '35.000',
        period: '/bln',
        feature: '+ Domain Gratis',
        viewPlans: 'Lihat Paket'
      },
      email: {
        title: 'Email Hosting Profesional',
        description: 'Dapatkan email hosting profesional untuk bisnis Anda dengan fitur dan keamanan canggih.',
        price: '200.000',
        period: '/bln',
        feature: '+ Migrasi Gratis',
        viewPlans: 'Lihat Paket'
      },
      expiresIn: 'Berakhir Dalam:',
      discount: 'Diskon akan otomatis diterapkan saat checkout.'
    }
  };
  
  const t = texts[language];
  
  // Set end date to 8 hours, 4 minutes, and 39 seconds from now
  const endDate = new Date();
  endDate.setHours(endDate.getHours() + 8);
  endDate.setMinutes(endDate.getMinutes() + 4);
  endDate.setSeconds(endDate.getSeconds() + 39);
  
  if (!isOpen) return null;
  
  return (
    <div className="promo-bar">
      <div className="promo-top-bar">
        <div className="promo-tag">{t.topBar}</div>
        <div className="promo-message">{t.mainMessage}</div>
        <div className="promo-actions">
          <button 
            className="promo-expand-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label="Toggle promo details"
          >
            {t.viewDeals} <ChevronDown className={`icon ${isExpanded ? 'expanded' : ''}`} />
          </button>
          <button className="promo-close" onClick={() => setIsOpen(false)} aria-label="Close promo">
            <X size={18} />
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="promo-details">
          <div className="promo-grid">
            <div className="promo-card">
              <h3>{t.hosting.title}</h3>
              <p>{t.hosting.description}</p>
              <div className="promo-price">
                <span className="currency">{language === 'id' ? 'Rp.' : 'USD'}</span>
                <span className="amount">{t.hosting.price}</span>
                <span className="period">{t.hosting.period}</span>
              </div>
              <p className="promo-feature">{t.hosting.feature}</p>
              <div className="promo-timer">
                <span>{t.expiresIn}</span>
                <CountdownTimer targetDate={endDate} />
              </div>
              <p className="promo-discount">{t.discount}</p>
              <button className="promo-cta">{t.hosting.viewPlans}</button>
            </div>
            
            <div className="promo-card">
              <h3>{t.email.title}</h3>
              <p>{t.email.description}</p>
              <div className="promo-price">
                <span className="currency">{language === 'id' ? 'Rp.' : 'USD'}</span>
                <span className="amount">{t.email.price}</span>
                <span className="period">{t.email.period}</span>
              </div>
              <p className="promo-feature">{t.email.feature}</p>
              <div className="promo-timer">
                <span>{t.expiresIn}</span>
                <CountdownTimer targetDate={endDate} />
              </div>
              <p className="promo-discount">{t.discount}</p>
              <button className="promo-cta">{t.email.viewPlans}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromoBar;