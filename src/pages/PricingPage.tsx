import React, { useState } from 'react';
import { ArrowRight, HelpCircle, Shield, Zap, Cloud, Server } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './PricingPage.css';

const PricingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually' | 'triennially'>('triennially');
  const [activeTab, setActiveTab] = useState('shared');
  const { language } = useLanguage();

  const periodLabels = {
    triennially: language === 'id' ? '3 Tahun' : 'Triennially',
    annually: language === 'id' ? 'Tahunan' : 'Annually',
    monthly: language === 'id' ? 'Bulanan' : 'Monthly'
  };

  const features = [
    {
      icon: Shield,
      title: language === 'id' ? 'Keamanan Maksimal' : 'Maximum Security',
      description: language === 'id' ? 'SSL gratis dan proteksi DDoS' : 'Free SSL and DDoS protection'
    },
    {
      icon: Zap,
      title: language === 'id' ? 'Performa Tinggi' : 'High Performance',
      description: language === 'id' ? 'Server NVMe SSD tercepat' : 'Fastest NVMe SSD servers'
    },
    {
      icon: Cloud,
      title: language === 'id' ? 'Backup Otomatis' : 'Auto Backup',
      description: language === 'id' ? 'Backup harian otomatis' : 'Automatic daily backups'
    },
    {
      icon: Server,
      title: language === 'id' ? 'Uptime 99.9%' : '99.9% Uptime',
      description: language === 'id' ? 'Jaminan uptime server' : 'Server uptime guarantee'
    }
  ];

  const hostingTabs = [
    { id: 'shared', label: language === 'id' ? 'Shared Hosting' : 'Shared Hosting' },
    { id: 'dedicated', label: language === 'id' ? 'Dedicated Hosting' : 'Dedicated Hosting' },
    { id: 'wordpress', label: language === 'id' ? 'WordPress Hosting' : 'WordPress Hosting' },
    { id: 'email', label: language === 'id' ? 'Email Hosting' : 'Email Hosting' }
  ];

  const plans = {
    personal: {
      name: language === 'id' ? 'Personal' : 'Personal',
      price: '35.000',
      priceUsd: '2.49',
      originalPrice: '150.000',
      originalPriceUsd: '9.99',
      discount: '75%',
      features: [
        { value: '1', label: language === 'id' ? 'Website' : 'Website' },
        { value: '20 GB', label: 'NVMe SSD' },
        { value: 'Unlimited', label: language === 'id' ? 'Bandwidth' : 'Bandwidth' },
        { value: '1', label: 'CPU Core' },
        { value: '1 GB', label: 'RAM' },
        { value: '250,000', label: 'Inodes' },
        { value: 'Free', label: language === 'id' ? 'SSL' : 'SSL' },
        { value: 'Free', label: language === 'id' ? 'Domain' : 'Domain' },
        { value: '10 Days', label: language === 'id' ? 'Backup' : 'Backup' },
        { value: '24/7', label: language === 'id' ? 'Support' : 'Support' }
      ]
    },
    pro: {
      name: 'Pro',
      price: '52.000',
      priceUsd: '3.49',
      originalPrice: '240.000',
      originalPriceUsd: '15.99',
      discount: '78%',
      popular: true,
      features: [
        { value: 'Unlimited', label: language === 'id' ? 'Website' : 'Website' },
        { value: '30 GB', label: 'NVMe SSD' },
        { value: 'Unlimited', label: language === 'id' ? 'Bandwidth' : 'Bandwidth' },
        { value: '2', label: 'CPU Cores' },
        { value: '2 GB', label: 'RAM' },
        { value: '350,000', label: 'Inodes' },
        { value: 'Free', label: language === 'id' ? 'SSL' : 'SSL' },
        { value: 'Free', label: language === 'id' ? 'Domain' : 'Domain' },
        { value: '20 Days', label: language === 'id' ? 'Backup' : 'Backup' },
        { value: 'Priority', label: language === 'id' ? 'Support' : 'Support' }
      ]
    },
    turbo: {
      name: 'Turbo',
      price: '67.000',
      priceUsd: '4.49',
      originalPrice: '300.000',
      originalPriceUsd: '19.99',
      discount: '77%',
      features: [
        { value: 'Unlimited', label: language === 'id' ? 'Website' : 'Website' },
        { value: '40 GB', label: 'NVMe SSD' },
        { value: 'Unlimited', label: language === 'id' ? 'Bandwidth' : 'Bandwidth' },
        { value: '3', label: 'CPU Cores' },
        { value: '3 GB', label: 'RAM' },
        { value: '500,000', label: 'Inodes' },
        { value: 'Free', label: language === 'id' ? 'SSL' : 'SSL' },
        { value: 'Free', label: language === 'id' ? 'Domain' : 'Domain' },
        { value: '30 Days', label: language === 'id' ? 'Backup' : 'Backup' },
        { value: 'Priority', label: language === 'id' ? 'Support' : 'Support' }
      ]
    },
    super: {
      name: 'Super',
      price: '89.000',
      priceUsd: '5.99',
      originalPrice: '400.000',
      originalPriceUsd: '26.99',
      discount: '77%',
      features: [
        { value: 'Unlimited', label: language === 'id' ? 'Website' : 'Website' },
        { value: '50 GB', label: 'NVMe SSD' },
        { value: 'Unlimited', label: language === 'id' ? 'Bandwidth' : 'Bandwidth' },
        { value: '4', label: 'CPU Cores' },
        { value: '4 GB', label: 'RAM' },
        { value: '750,000', label: 'Inodes' },
        { value: 'Free', label: language === 'id' ? 'SSL' : 'SSL' },
        { value: 'Free', label: language === 'id' ? 'Domain' : 'Domain' },
        { value: '30 Days', label: language === 'id' ? 'Backup' : 'Backup' },
        { value: 'VIP', label: language === 'id' ? 'Support' : 'Support' }
      ]
    }
  };

  return (
    <div className="pricing-page">
      <div className="pricing-header">
        <div className="organic-shape shape-1"></div>
        <div className="organic-shape shape-2"></div>
        <div className="organic-shape shape-3"></div>

        <div className="pricing-container">
          <div className="hosting-tabs">
            {hostingTabs.map(tab => (
              <button
                key={tab.id}
                className={`hosting-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <h1 className="pricing-title">
            {language === 'id' ? 'Paket Shared Hosting' : 'Shared Hosting Plans'}
          </h1>
          <p className="pricing-subtitle">
            {language === 'id' 
              ? 'Pilih paket hosting yang sesuai dengan kebutuhan Anda'
              : 'Choose the hosting plan that fits your needs'}
          </p>
        </div>
      </div>

      <div className="pricing-content">
        <div className="pricing-container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <feature.icon size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

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

          <div className="pricing-grid">
            {Object.entries(plans).map(([key, plan]) => (
              <div key={key} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && (
                  <div className="popular-badge">
                    {language === 'id' ? 'Paling Populer' : 'Most Popular'}
                  </div>
                )}
                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="currency">{language === 'id' ? 'Rp' : '$'}</span>
                    <span className="amount">{language === 'id' ? plan.price : plan.priceUsd}</span>
                    <span className="period">{language === 'id' ? '/bln' : '/mo'}</span>
                  </div>
                  <div className="original-price">
                    {language === 'id' ? 'Rp' : '$'} {language === 'id' ? plan.originalPrice : plan.originalPriceUsd}
                  </div>
                  <div className="discount">
                    <span>{language === 'id' ? 'Hemat' : 'Save'} {plan.discount}</span>
                    <HelpCircle size={14} className="discount-icon" />
                  </div>
                </div>

                <div className="plan-features">
                  <ul className="feature-list">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-value">{feature.value}</span>
                        {' '}{feature.label}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="plan-cta">
                  <button className="cta-button">
                    {language === 'id' ? 'Pilih Paket' : 'Choose Plan'}
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;