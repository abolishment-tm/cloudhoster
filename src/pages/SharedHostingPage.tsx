// src/pages/SharedHostingPage.tsx
import React, { useState } from 'react';
import { Check, Server, Cloud, Shield, Zap, Database, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './SharedHostingPage.css';

const SharedHostingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually' | 'triennially'>('triennially');
  const { language } = useLanguage();

  const texts = {
    en: {
      title: "Hosting Plans for Every Website",
      description: "Experience lightning-fast hosting with 99.9% uptime guarantee and 24/7 expert support.",
      features: [
        { icon: Shield, text: "Free SSL Security" },
        { icon: Cloud, text: "Daily Backups" },
        { icon: Zap, text: "LiteSpeed Cache" },
        { icon: Database, text: "NVMe SSD Storage" }
      ]
    },
    id: {
      title: "Paket Hosting untuk Setiap Website",
      description: "Rasakan hosting super cepat dengan jaminan uptime 99.9% dan dukungan ahli 24/7.",
      features: [
        { icon: Shield, text: "SSL Security Gratis" },
        { icon: Cloud, text: "Backup Harian" },
        { icon: Zap, text: "LiteSpeed Cache" },
        { icon: Database, text: "Storage SSD NVMe" }
      ]
    }
  };

  const t = texts[language];

  const periodLabels = {
    triennially: language === 'id' ? '3 Tahunan' : 'Triennially',
    annually: language === 'id' ? 'Tahunan' : 'Annually',
    monthly: language === 'id' ? 'Bulanan' : 'Monthly'
  };

  const plans = {
    personal: {
      name: 'Personal',
      monthly: { price: '75.000', originalPrice: '150.000' },
      annually: { price: '52.000', originalPrice: '150.000' },
      triennially: { price: '35.000', originalPrice: '150.000' },
      essentialFeatures: [
        { value: '1', label: 'Website' },
        { value: '20 GB', label: 'NVMe Storage' },
        { value: 'Unlimited', label: 'Bandwidth' },
        { value: 'Free', label: 'Domain' },
        { value: 'Free', label: 'Website Migration' },
        { value: '10', label: 'Days Backups' },
        { value: 'Free', label: 'SSL Certificate' }
      ]
    },
    pro: {
      name: 'Pro',
      monthly: { price: '105.000', originalPrice: '240.000' },
      annually: { price: '75.000', originalPrice: '240.000' },
      triennially: { price: '52.000', originalPrice: '240.000' },
      badge: true,
      essentialFeatures: [
        { value: 'Unlimited', label: 'Websites' },
        { value: '30 GB', label: 'NVMe Storage' },
        { value: 'Unlimited', label: 'Bandwidth' },
        { value: 'Free', label: 'Domain' },
        { value: 'Free', label: 'Website Migrations' },
        { value: '20', label: 'Days Backups' },
        { value: 'Free', label: 'SSL Certificate' }
      ],
      proFeatures: [
        { value: 'Unlimited', label: 'Addon Domains' },
        { value: 'One-Click', label: 'Backup Restore' },
        { value: '2x', label: 'More CPU & RAM' }
      ]
    },
    super: {
      name: 'Super',
      monthly: { price: '135.000', originalPrice: '300.000' },
      annually: { price: '97.000', originalPrice: '300.000' },
      triennially: { price: '67.000', originalPrice: '300.000' },
      essentialFeatures: [
        { value: 'Unlimited', label: 'Websites' },
        { value: '40 GB', label: 'NVMe Storage' },
        { value: 'Unlimited', label: 'Bandwidth' },
        { value: 'Free', label: 'Domain' },
        { value: 'Free', label: 'Website Migrations' },
        { value: '30', label: 'Days Backups' },
        { value: 'Free', label: 'SSL Certificate' }
      ],
      proFeatures: [
        { value: 'Unlimited', label: 'Addon Domains' },
        { value: 'One-Click', label: 'Backup Restore' },
        { value: '3x', label: 'More CPU & RAM' }
      ],
      turboFeatures: [
        { value: '4x', label: 'More traffic handled' },
        { value: 'HTTP/3', label: 'Support (QUIC by Google)' },
        { value: 'Turbo Cache', label: 'OPcache/APC/Redis' },
        { value: 'Free', label: 'Malware Scanner & Removal' }
      ]
    }
  };

  const getDiscount = (plan: any, period: string) => {
    const discounts = {
      personal: { monthly: '50%', annually: '65%', triennially: '75%' },
      pro: { monthly: '55%', annually: '70%', triennially: '78%' },
      super: { monthly: '60%', annually: '75%', triennially: '77%' }
    };
    return discounts[plan][period];
  };

  return (
    <div className="shared-hosting-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{t.title}</h1>
            <p className="hero-description">{t.description}</p>
            <div className="hero-features">
              {t.features.map((feature, index) => (
                <div key={index} className="hero-feature">
                  <div className="hero-feature-icon">
                    <feature.icon size={24} />
                  </div>
                  <span className="hero-feature-text">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-illustration">
            <div className="server-icon">
              <Server size={64} color="#fff" />
            </div>
            <div className="floating-icon icon-1"><Globe size={32} /></div>
            <div className="floating-icon icon-2"><Cloud size={32} /></div>
            <div className="floating-icon icon-3"><Shield size={32} /></div>
            <div className="floating-icon icon-4"><Database size={32} /></div>
          </div>
        </div>
      </div>

      <div className="pricing-section">
        <div className="period-tabs">
          {Object.entries(periodLabels).map(([period, label]) => (
            <button
              key={period}
              className={billingPeriod === period ? 'active' : ''}
              onClick={() => setBillingPeriod(period as any)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="pricing-tables">
          {Object.entries(plans).map(([key, plan]) => (
            <div key={key} className={`pricing-table ${plan.badge ? 'featured' : ''}`}>
              <div className="plan-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="currency">{language === 'id' ? 'Rp.' : 'USD'}</span>
                  <span className="amount">{plan[billingPeriod].price}</span>
                  <span className="period">/bln</span>
                </div>
                <div className="original-price">{language === 'id' ? 'Rp.' : 'USD'} {plan[billingPeriod].originalPrice}</div>
                <div className="discount">Diskon {getDiscount(key, billingPeriod)}!</div>
                <button className="order-button">Pesan Sekarang</button>
              </div>

              <div className="datacenter">
                <span>{language === 'id' ? 'Datacenter terdekat:' : 'Nearest Datacenter:'}</span>
                <strong>Jakarta</strong>
                <img src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/id.svg" alt="ID" />
              </div>

              <div className="features-section">
                {plan.essentialFeatures.map((feature, index) => (
                  <div key={index} className="feature">
                    <Check size={16} />
                    <span><span className="feature-value">{feature.value}</span> {feature.label}</span>
                  </div>
                ))}
              </div>

              {plan.proFeatures && (
                <div className="features-section pro">
                  <h4>Pro Features</h4>
                  {plan.proFeatures.map((feature, index) => (
                    <div key={index} className="feature">
                      <Check size={16} />
                      <span><span className="feature-value">{feature.value}</span> {feature.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {plan.turboFeatures && (
                <div className="features-section turbo">
                  <h4>Turbo Features</h4>
                  {plan.turboFeatures.map((feature, index) => (
                    <div key={index} className="feature">
                      <Check size={16} />
                      <span><span className="feature-value">{feature.value}</span> {feature.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SharedHostingPage;
