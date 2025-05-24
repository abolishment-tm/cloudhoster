import React, { useState } from 'react';
import { Search, ArrowRight, Globe, Calendar, User, Building } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './WhoisLookupPage.css';

const WhoisLookupPage: React.FC = () => {
  const [domain, setDomain] = useState('');
  const [searchResult, setSearchResult] = useState<null | {
    domain: string;
    registrar: string;
    registrant: string;
    createdDate: string;
    expiryDate: string;
    status: string;
  }>(null);
  
  const { language } = useLanguage();

  const texts = {
    en: {
      title: 'WHOIS Domain Lookup',
      subtitle: 'Check domain name availability and ownership information',
      searchPlaceholder: 'Enter domain name (e.g., example.com)',
      search: 'Check WHOIS',
      features: [
        {
          icon: Globe,
          title: 'Domain Information',
          description: 'Get detailed information about any domain name'
        },
        {
          icon: Calendar,
          title: 'Registration Details',
          description: 'View registration and expiration dates'
        },
        {
          icon: User,
          title: 'Ownership Data',
          description: 'Find out who owns the domain'
        },
        {
          icon: Building,
          title: 'Registrar Info',
          description: 'See which company manages the domain'
        }
      ],
      results: {
        title: 'WHOIS Results',
        domain: 'Domain Name',
        registrar: 'Registrar',
        registrant: 'Registrant',
        created: 'Created Date',
        expiry: 'Expiry Date',
        status: 'Domain Status'
      },
      noResults: 'Enter a domain name to see WHOIS information'
    },
    id: {
      title: 'Cek WHOIS Domain',
      subtitle: 'Periksa ketersediaan nama domain dan informasi kepemilikan',
      searchPlaceholder: 'Masukkan nama domain (contoh: example.com)',
      search: 'Cek WHOIS',
      features: [
        {
          icon: Globe,
          title: 'Informasi Domain',
          description: 'Dapatkan informasi detail tentang nama domain'
        },
        {
          icon: Calendar,
          title: 'Detail Registrasi',
          description: 'Lihat tanggal registrasi dan kedaluwarsa'
        },
        {
          icon: User,
          title: 'Data Kepemilikan',
          description: 'Cari tahu siapa pemilik domain'
        },
        {
          icon: Building,
          title: 'Info Registrar',
          description: 'Lihat perusahaan yang mengelola domain'
        }
      ],
      results: {
        title: 'Hasil WHOIS',
        domain: 'Nama Domain',
        registrar: 'Registrar',
        registrant: 'Pemilik',
        created: 'Tanggal Dibuat',
        expiry: 'Tanggal Kedaluwarsa',
        status: 'Status Domain'
      },
      noResults: 'Masukkan nama domain untuk melihat informasi WHOIS'
    }
  };

  const t = texts[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated WHOIS lookup result
    setSearchResult({
      domain: domain,
      registrar: 'Example Registrar, Inc.',
      registrant: 'John Doe',
      createdDate: '2020-01-01',
      expiryDate: '2024-01-01',
      status: 'Active'
    });
  };

  return (
    <div className="whois-page">
      <div className="whois-hero">
        <div className="container mx-auto px-4">
          <h1 className="whois-title">{t.title}</h1>
          <p className="whois-subtitle">{t.subtitle}</p>
          
          <form onSubmit={handleSubmit} className="whois-search-form">
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
        </div>
      </div>

      <div className="whois-features">
        <div className="container mx-auto px-4">
          <div className="features-grid">
            {t.features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <feature.icon size={32} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="whois-results">
        <div className="container mx-auto px-4">
          <div className="results-card">
            <h2>{t.results.title}</h2>
            {searchResult ? (
              <div className="results-grid">
                <div className="result-item">
                  <span className="label">{t.results.domain}</span>
                  <span className="value">{searchResult.domain}</span>
                </div>
                <div className="result-item">
                  <span className="label">{t.results.registrar}</span>
                  <span className="value">{searchResult.registrar}</span>
                </div>
                <div className="result-item">
                  <span className="label">{t.results.registrant}</span>
                  <span className="value">{searchResult.registrant}</span>
                </div>
                <div className="result-item">
                  <span className="label">{t.results.created}</span>
                  <span className="value">{searchResult.createdDate}</span>
                </div>
                <div className="result-item">
                  <span className="label">{t.results.expiry}</span>
                  <span className="value">{searchResult.expiryDate}</span>
                </div>
                <div className="result-item">
                  <span className="label">{t.results.status}</span>
                  <span className="value">{searchResult.status}</span>
                </div>
              </div>
            ) : (
              <p className="no-results">{t.noResults}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoisLookupPage;