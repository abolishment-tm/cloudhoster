import React, { useState } from 'react';
import { Check, ChevronDown, Shield, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './PricingPage.css';

const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('shared');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { language } = useLanguage();

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const texts = {
    en: {
      tabs: {
        shared: 'Shared Hosting',
        wordpress: 'WordPress Hosting',
        email: 'Email Hosting'
      },
      sharedPlans: {
        starter: {
          name: 'Starter',
          price: '2.49',
          originalPrice: '9.95',
          discount: '75%',
          specs: {
            websites: '1 Website',
            storage: '20 GB',
            bandwidth: 'Unlimited',
            addons: '×',
            subdomains: 'Unlimited',
            parkedDomains: 'Unlimited',
            freeDomain: '✓',
            freeTransfer: '✓',
            backups: '10 Days',
            cpu: '1 Core',
            ram: '1 GB',
            inodes: '250,000',
            ssl: '✓',
            activation: '✓',
            support: '✓',
            softaculous: '✓',
            locations: '✓',
            moneyback: '✓'
          }
        },
        pro: {
          name: 'Pro',
          price: '3.49',
          originalPrice: '15.95',
          discount: '78%',
          popular: true,
          specs: {
            websites: 'Unlimited',
            storage: '30 GB',
            bandwidth: 'Unlimited',
            addons: 'Unlimited',
            subdomains: 'Unlimited',
            parkedDomains: 'Unlimited',
            freeDomain: '✓',
            freeTransfer: '✓',
            backups: '20 Days',
            cpu: '2 Core',
            ram: '2 GB',
            inodes: '350,000',
            ssl: '✓',
            activation: '✓',
            support: '✓',
            softaculous: '✓',
            locations: '✓',
            moneyback: '✓'
          }
        },
        turbo: {
          name: 'Turbo',
          price: '4.49',
          originalPrice: '19.95',
          discount: '77%',
          specs: {
            websites: 'Unlimited',
            storage: '40 GB',
            bandwidth: 'Unlimited',
            addons: 'Unlimited',
            subdomains: 'Unlimited',
            parkedDomains: 'Unlimited',
            freeDomain: '✓',
            freeTransfer: '✓',
            backups: '30 Days',
            cpu: '3 Core',
            ram: '3 GB',
            inodes: '500,000',
            ssl: '✓',
            activation: '✓',
            support: '✓',
            softaculous: '✓',
            locations: '✓',
            moneyback: '✓'
          }
        }
      },
      sections: {
        security: 'Security & Reliability',
        performance: 'Website Performance Features',
        email: 'Email Features'
      },
      features: {
        websites: 'Websites Hosted',
        storage: 'NVME Disk Space',
        bandwidth: 'Bandwidth',
        addons: 'Addon Domains',
        subdomains: 'Subdomains',
        parkedDomains: 'Parked Domains',
        freeDomain: 'Free domain registration',
        freeTransfer: 'Free Website Transfer',
        backups: 'Free Daily Backups',
        cpu: 'CPU Cores',
        ram: 'RAM Memory',
        inodes: 'Inodes',
        ssl: 'Free SSL Certificates',
        activation: 'Immediate Account Activation',
        support: '24/7 Support',
        softaculous: 'Softaculous 1-Click Install',
        locations: 'Multiple Server Locations',
        moneyback: '45 Days MoneyBack Guarantee'
      },
      promoText: {
        domain: 'free domain',
        plans: 'with any of these plans?',
        notConvinced: 'Not convinced yet?',
        chat: 'Chat with an expert!'
      },
      cta: 'Get Started Now'
    },
    id: {
      tabs: {
        shared: 'Hosting Shared',
        wordpress: 'Hosting WordPress',
        email: 'Hosting Email'
      },
      sharedPlans: {
        starter: {
          name: 'Starter',
          price: '2.49',
          originalPrice: '9.95',
          discount: '75%',
          specs: {
            websites: '1 Website',
            storage: '20 GB',
            bandwidth: 'Unlimited',
            addons: '×',
            subdomains: 'Unlimited',
            parkedDomains: 'Unlimited',
            freeDomain: '✓',
            freeTransfer: '✓',
            backups: '10 Hari',
            cpu: '1 Core',
            ram: '1 GB',
            inodes: '250,000',
            ssl: '✓',
            activation: '✓',
            support: '✓',
            softaculous: '✓',
            locations: '✓',
            moneyback: '✓'
          }
        },
        pro: {
          name: 'Pro',
          price: '3.49',
          originalPrice: '15.95',
          discount: '78%',
          popular: true,
          specs: {
            websites: 'Unlimited',
            storage: '30 GB',
            bandwidth: 'Unlimited',
            addons: 'Unlimited',
            subdomains: 'Unlimited',
            parkedDomains: 'Unlimited',
            freeDomain: '✓',
            freeTransfer: '✓',
            backups: '20 Hari',
            cpu: '2 Core',
            ram: '2 GB',
            inodes: '350,000',
            ssl: '✓',
            activation: '✓',
            support: '✓',
            softaculous: '✓',
            locations: '✓',
            moneyback: '✓'
          }
        },
        turbo: {
          name: 'Turbo',
          price: '4.49',
          originalPrice: '19.95',
          discount: '77%',
          specs: {
            websites: 'Unlimited',
            storage: '40 GB',
            bandwidth: 'Unlimited',
            addons: 'Unlimited',
            subdomains: 'Unlimited',
            parkedDomains: 'Unlimited',
            freeDomain: '✓',
            freeTransfer: '✓',
            backups: '30 Hari',
            cpu: '3 Core',
            ram: '3 GB',
            inodes: '500,000',
            ssl: '✓',
            activation: '✓',
            support: '✓',
            softaculous: '✓',
            locations: '✓',
            moneyback: '✓'
          }
        }
      },
      sections: {
        security: 'Keamanan & Keandalan',
        performance: 'Fitur Performa Website',
        email: 'Fitur Email'
      },
      features: {
        websites: 'Website Dihosting',
        storage: 'Ruang Disk NVME',
        bandwidth: 'Bandwidth',
        addons: 'Domain Addon',
        subdomains: 'Subdomain',
        parkedDomains: 'Domain Parked',
        freeDomain: 'Registrasi domain gratis',
        freeTransfer: 'Transfer Website Gratis',
        backups: 'Backup Harian Gratis',
        cpu: 'Core CPU',
        ram: 'Memori RAM',
        inodes: 'Inodes',
        ssl: 'Sertifikat SSL Gratis',
        activation: 'Aktivasi Akun Langsung',
        support: 'Dukungan 24/7',
        softaculous: 'Softaculous 1-Click Install',
        locations: 'Multiple Server Locations',
        moneyback: 'Garansi Uang Kembali 45 Hari'
      },
      promoText: {
        domain: 'domain gratis',
        plans: 'dengan paket-paket ini?',
        notConvinced: 'Masih ragu?',
        chat: 'Chat dengan ahli kami!'
      },
      cta: 'Mulai Sekarang'
    }
  };

  const t = texts[language];
  const plans = t.sharedPlans;

  return (
    <div className="pricing-page">
      <div className="pricing-hero">
        <div className="container mx-auto px-4">
          <div className="pricing-tabs">
            {Object.entries(t.tabs).map(([key, value]) => (
              <button
                key={key}
                className={`tab-button ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pricing-content">
        <div className="promo-text">
          <p>
            Did you know that you get a <span className="highlight">{t.promoText.domain}</span> {t.promoText.plans}
          </p>
          <p>
            {t.promoText.notConvinced} <a href="#" className="chat-link">{t.promoText.chat}</a>
          </p>
        </div>

        <div className="pricing-table">
          <div className="table-header">
            <div className="header-cell empty"></div>
            {Object.entries(plans).map(([key, plan]) => (
              <div key={key} className={`header-cell ${plan.popular ? 'popular' : ''}`}>
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="currency">${plan.price}</span>
                  <span className="period">/mo</span>
                </div>
                <div className="original-price">${plan.originalPrice}</div>
                <div className="discount">Now {plan.discount} Off!</div>
                <button className="cta-button">{t.cta}</button>
              </div>
            ))}
          </div>

          <div className="table-body">
            {Object.entries(t.features).map(([key, label]) => (
              <div key={key} className="table-row">
                <div className="feature-cell">
                  <span>{label}</span>
                  {key === 'storage' && <HelpCircle size={16} className="help-icon" />}
                </div>
                {Object.entries(plans).map(([planKey, plan]) => (
                  <div key={planKey} className="value-cell">
                    {plan.specs[key]}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {Object.entries(t.sections).map(([key, title]) => (
            <div key={key} className="expandable-section">
              <button 
                className="section-header"
                onClick={() => toggleSection(key)}
              >
                {title}
                <ChevronDown 
                  className={`icon ${expandedSection === key ? 'expanded' : ''}`}
                />
              </button>
              {expandedSection === key && (
                <div className="section-content">
                  {/* Section content here */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;