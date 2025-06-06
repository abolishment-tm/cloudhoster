// src/pages/HostingPricingBuilderPage.tsx

import React, { useState } from 'react';
import {
  Server,
  Database,
  Globe,
  Shield,
  Cloud,
  Zap,
  Cpu,
  Wifi,
  Lock,
  BarChart,
  Check,
  Settings,
  Heart
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import './HostingPricingBuilderPage.css';

const HostingPricingBuilderPage: React.FC = () => {
  const { language } = useLanguage();

  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually' | 'triennially'>('triennially');

  const periodLabels = {
    triennially: language === 'id' ? '3 Tahunan' : 'Triennially',
    annually: language === 'id' ? 'Tahunan' : 'Annually',
    monthly: language === 'id' ? 'Bulanan' : 'Monthly'
  };

  const texts = {
    en: {
      titleLine1: 'Get Worry-Free',
      titleLine2: 'Web Hosting',
      startNow: 'Start Now',
      moneyBack: '60 Days Money Back Guarantee',
      bullets: [
        '100% Cloud Platform Hosting',
        'Tier-3 Premium Data Center di Multi-lokasi',
        '100% Fast support by our experts'
      ]
    },
    id: {
      titleLine1: 'Dapatkan Web Hosting',
      titleLine2: 'Tanpa Khawatir',
      startNow: 'Mulai Sekarang',
      moneyBack: '60 Hari Garansi Uang Kembali',
      bullets: [
        '100% Cloud Platform Hosting',
        'Tier-3 Premium Data Center di Multi-lokasi',
        '100% Support cepat dengan ahlinya'
      ]
    }
  };

  const plans = {
    personal: {
      name: language === 'id' ? 'Personal' : 'Personal',
      price: '35.000',
      priceUsd: '2.49',
      originalPrice: '150.000',
      originalPriceUsd: '9.99',
      discount: '75%',
      featured: false,
      features: [
        { value: '1', label: 'Website' },
        { value: '20 GB', label: 'NVMe SSD' },
        { value: 'Unlimited', label: 'Bandwidth' },
        { value: '1', label: 'CPU Core' },
        { value: '1 GB', label: 'RAM' },
        { value: '250,000', label: 'Inodes' },
        { value: 'Free', label: 'SSL' },
        { value: 'Free', label: 'Domain' },
        { value: '10 Days', label: 'Backup' },
        { value: '24/7', label: 'Support' }
      ]
    },
    pro: {
      name: 'Pro',
      price: '52.000',
      priceUsd: '3.49',
      originalPrice: '240.000',
      originalPriceUsd: '15.99',
      discount: '78%',
      featured: true,
      features: [
        { value: 'Unlimited', label: 'Website' },
        { value: '30 GB', label: 'NVMe SSD' },
        { value: 'Unlimited', label: 'Bandwidth' },
        { value: '2', label: 'CPU Cores' },
        { value: '2 GB', label: 'RAM' },
        { value: '350,000', label: 'Inodes' },
        { value: 'Free', label: 'SSL' },
        { value: 'Free', label: 'Domain' },
        { value: '20 Days', label: 'Backup' },
        { value: 'Priority', label: 'Support' }
      ]
    },
    super: {
      name: 'Super',
      price: '89.000',
      priceUsd: '5.99',
      originalPrice: '400.000',
      originalPriceUsd: '26.99',
      discount: '77%',
      featured: false,
      features: [
        { value: 'Unlimited', label: 'Website' },
        { value: '50 GB', label: 'NVMe SSD' },
        { value: 'Unlimited', label: 'Bandwidth' },
        { value: '4', label: 'CPU Cores' },
        { value: '4 GB', label: 'RAM' },
        { value: '750,000', label: 'Inodes' },
        { value: 'Free', label: 'SSL' },
        { value: 'Free', label: 'Domain' },
        { value: '30 Days', label: 'Backup' },
        { value: 'VIP', label: 'Support' }
      ]
    }
  };

  const t = texts[language];

  return (
    <div className="shared-hosting-page">
      {/* HERO */}
      <div className="hero-section">
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 text-white relative z-20">
              <h1 className="hero-title">
                <span className="hero-title-line">{t.titleLine1}</span>
                <span className="hero-title-line">{t.titleLine2}</span>
              </h1>
              <ul className="hero-bullets">
                {t.bullets.map((item, i) => (
                  <li key={i} className="hero-bullet">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="hero-buttons">
                <div className="flex flex-col">
                  <a href="#" className="hero-button hero-button-primary">
                    {t.startNow}
                  </a>
                  <p className="money-back">{t.moneyBack}</p>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative min-h-[500px]">
              <div className="floating-icons">
                {[Shield, Cloud, Database, Cpu, Settings, Heart, Globe, Lock].map((Icon, i) => (
                  <div key={i} className={`floating-icon icon-${i + 1}`}>
                    <Icon className="text-white" size={24} />
                  </div>
                ))}
              </div>
              <div className="moving-clouds">
                <div className="cloud cloud-1"></div>
                <div className="cloud cloud-2"></div>
                <div className="cloud cloud-3"></div>
              </div>
              <div className="diagonal-ripples">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="diagonal-line"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="wave-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>

      {/* ? PERIOD TABS */}
      <div className="period-tabs">
        {Object.entries(periodLabels).map(([key, label]) => (
          <span
            key={key}
            className={billingPeriod === key ? 'active' : ''}
            onClick={() => setBillingPeriod(key as any)}
            style={{ cursor: 'pointer' }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* PRICING SECTION */}
      <div className="pricing-section">
        <div className="pricing-tables">
          {Object.entries(plans).map(([key, plan]) => (
            <div key={key} className={`pricing-table ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && <div className="featured-badge">Most Popular</div>}
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">{language === 'id' ? 'Rp ' : '$'}</span>
                  {language === 'id' ? plan.price : plan.priceUsd}
                  <span className="period">/{language === 'id' ? 'bln' : 'mo'}</span>
                </div>
                <div className="original-price">
                  {language === 'id' ? 'Rp ' : '$'}
                  {language === 'id' ? plan.originalPrice : plan.originalPriceUsd}
                </div>
                <div className="discount">Save {plan.discount}</div>
              </div>
              <ul className="features-list">
                {plan.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <Check size={16} />
                    <span>
                      <span className="feature-value">{feature.value}</span> {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="order-button">{language === 'id' ? 'Pilih Paket' : 'Choose Plan'}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostingPricingBuilderPage;
