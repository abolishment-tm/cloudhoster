import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HelpCircle, MessageSquare, DollarSign, CreditCard } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import './TopBar.css';

const TopBar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [currency, setCurrency] = React.useState<'IDR' | 'USD'>('IDR');
  const location = useLocation();
  
  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };
  
  const toggleCurrency = () => {
    setCurrency(currency === 'IDR' ? 'USD' : 'IDR');
  };
  
  const texts = {
    en: {
      support: 'Support Center',
      liveChat: 'Live Chat',
      payment: 'Payment Confirmation',
      language: 'Language',
      currency: 'Currency'
    },
    id: {
      support: 'Pusat Bantuan',
      liveChat: 'Live Chat',
      payment: 'Konfirmasi Pembayaran',
      language: 'Bahasa',
      currency: 'Mata Uang'
    }
  };
  
  const t = texts[language];
  const isWordPressPage = location.pathname === '/managed-wordpress';
  
  return (
    <div className={`top-bar ${isWordPressPage ? 'managed-wordpress' : ''}`}>
      <div className="container">
        <div className="top-bar-content">
          <div className="top-bar-left"></div>
          <div className="top-bar-right">
            <Link to="/pusat-bantuan" className="top-bar-link">
              <HelpCircle />
              {t.support}
            </Link>
            <div className="top-bar-divider"></div>
            <a href="#" className="top-bar-link">
              <MessageSquare />
              {t.liveChat}
            </a>
            <div className="top-bar-divider"></div>
            <a href="#" className="top-bar-link">
              <CreditCard />
              {t.payment}
            </a>
            <div className="top-bar-divider"></div>
            <button 
              className="toggle-button" 
              onClick={toggleLanguage}
              aria-label="Toggle Language"
            >
              <img 
                src={`https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/${language === 'id' ? 'id' : 'us'}.svg`}
                alt={language.toUpperCase()}
                className="flag-icon"
              />
              {language.toUpperCase()}
            </button>
            <button 
              className="toggle-button" 
              onClick={toggleCurrency}
              aria-label="Toggle Currency"
            >
              <DollarSign />
              {currency}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar