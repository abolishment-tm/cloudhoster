import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DomainPage.css';

const DomainPage: React.FC = () => {
  const [domain, setDomain] = useState('');
  const { language } = useLanguage();

  const texts = {
    en: {
      title: 'Find Your Perfect Domain Name',
      searchPlaceholder: 'Enter your domain name',
      search: 'Search',
      extensions: [
        { name: '.com', price: '120,000', priceUsd: '8.99' },
        { name: '.net', price: '150,000', priceUsd: '9.99' },
        { name: '.org', price: '140,000', priceUsd: '9.49' },
        { name: '.id', price: '350,000', priceUsd: '24.99' },
        { name: '.co.id', price: '400,000', priceUsd: '29.99' }
      ],
      perYear: '/year',
      features: [
        'Free DNS Management',
        'Free Email Forwarding',
        'Free Domain Forwarding',
        'Free Domain Privacy',
        'Free Domain Lock'
      ]
    },
    id: {
      title: 'Temukan Nama Domain Sempurna Anda',
      searchPlaceholder: 'Masukkan nama domain Anda',
      search: 'Cari',
      extensions: [
        { name: '.com', price: '120.000', priceUsd: '8.99' },
        { name: '.net', price: '150.000', priceUsd: '9.99' },
        { name: '.org', price: '140.000', priceUsd: '9.49' },
        { name: '.id', price: '350.000', priceUsd: '24.99' },
        { name: '.co.id', price: '400.000', priceUsd: '29.99' }
      ],
      perYear: '/tahun',
      features: [
        'Manajemen DNS Gratis',
        'Email Forwarding Gratis',
        'Domain Forwarding Gratis',
        'Domain Privacy Gratis',
        'Domain Lock Gratis'
      ]
    }
  };

  const t = texts[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for domain:', domain);
  };

  return (
    <div className="domain-page">
      <div className="domain-hero">
        <div className="container mx-auto px-4">
          <h1 className="domain-title">{t.title}</h1>
          
          <form onSubmit={handleSubmit} className="domain-search-form">
            <div className="search-input-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="search-input"
              />
            </div>
            <button type="submit" className="search-button">
              {t.search}
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="domain-extensions">
            {t.extensions.map((ext, index) => (
              <div key={index} className="extension-card">
                <span className="extension-name">{ext.name}</span>
                <div className="extension-price">
                  <span className="currency">{language === 'id' ? 'Rp.' : 'USD'}</span>
                  <span className="amount">{language === 'id' ? ext.price : ext.priceUsd}</span>
                  <span className="period">{t.perYear}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="domain-features">
            {t.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <ArrowRight className="feature-icon" size={20} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainPage;