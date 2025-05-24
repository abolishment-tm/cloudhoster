import React, { useState } from 'react';
import { Search, ArrowRight, Shield, Globe, Clock, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DomainTransferPage.css';

const DomainTransferPage: React.FC = () => {
  const [domain, setDomain] = useState('');
  const { language } = useLanguage();

  const texts = {
    en: {
      title: 'Transfer Your Domain to CloudHoster',
      subtitle: 'Fast, secure, and hassle-free domain transfers',
      searchPlaceholder: 'Enter your domain name',
      search: 'Transfer Now',
      features: [
        {
          icon: Shield,
          title: 'Free Domain Privacy',
          description: 'Keep your personal information private with free WHOIS privacy protection'
        },
        {
          icon: Globe,
          title: 'Free DNS Management',
          description: 'Manage your DNS records with our easy-to-use control panel'
        },
        {
          icon: Clock,
          title: 'Quick Transfer',
          description: 'Most domain transfers complete within 5-7 days'
        }
      ],
      steps: [
        {
          title: 'Unlock Your Domain',
          description: 'Remove domain lock from your current registrar'
        },
        {
          title: 'Get Auth Code',
          description: 'Obtain authorization code from current registrar'
        },
        {
          title: 'Initiate Transfer',
          description: 'Enter your domain and auth code to start transfer'
        },
        {
          title: 'Confirm Transfer',
          description: 'Approve the transfer request via email'
        }
      ],
      requirements: {
        title: 'Transfer Requirements',
        items: [
          'Domain must be unlocked',
          'Authorization code from current registrar',
          'Admin email access',
          'Domain registered for at least 60 days',
          'Valid WHOIS information'
        ]
      }
    },
    id: {
      title: 'Transfer Domain Anda ke CloudHoster',
      subtitle: 'Transfer domain yang cepat, aman, dan mudah',
      searchPlaceholder: 'Masukkan nama domain Anda',
      search: 'Transfer Sekarang',
      features: [
        {
          icon: Shield,
          title: 'Privacy Domain Gratis',
          description: 'Jaga informasi pribadi Anda dengan proteksi privasi WHOIS gratis'
        },
        {
          icon: Globe,
          title: 'Manajemen DNS Gratis',
          description: 'Kelola record DNS dengan panel kontrol yang mudah digunakan'
        },
        {
          icon: Clock,
          title: 'Transfer Cepat',
          description: 'Mayoritas transfer domain selesai dalam 5-7 hari'
        }
      ],
      steps: [
        {
          title: 'Buka Kunci Domain',
          description: 'Hapus kunci domain dari registrar saat ini'
        },
        {
          title: 'Dapatkan Kode Auth',
          description: 'Dapatkan kode otorisasi dari registrar saat ini'
        },
        {
          title: 'Mulai Transfer',
          description: 'Masukkan domain dan kode auth untuk memulai transfer'
        },
        {
          title: 'Konfirmasi Transfer',
          description: 'Setujui permintaan transfer melalui email'
        }
      ],
      requirements: {
        title: 'Persyaratan Transfer',
        items: [
          'Domain harus tidak terkunci',
          'Kode otorisasi dari registrar saat ini',
          'Akses email admin',
          'Domain terdaftar minimal 60 hari',
          'Informasi WHOIS yang valid'
        ]
      }
    }
  };

  const t = texts[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Transferring domain:', domain);
  };

  return (
    <div className="domain-transfer-page">
      <div className="transfer-hero">
        <div className="container mx-auto px-4">
          <h1 className="transfer-title">{t.title}</h1>
          <p className="transfer-subtitle">{t.subtitle}</p>
          
          <form onSubmit={handleSubmit} className="transfer-search-form">
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

      <div className="transfer-features">
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

      <div className="transfer-steps">
        <div className="container mx-auto px-4">
          <div className="steps-grid">
            {t.steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="transfer-requirements">
        <div className="container mx-auto px-4">
          <h2>{t.requirements.title}</h2>
          <div className="requirements-list">
            {t.requirements.items.map((item, index) => (
              <div key={index} className="requirement-item">
                <Check size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainTransferPage;