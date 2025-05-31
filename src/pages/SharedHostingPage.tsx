// File: src/pages/SharedHostingPage.tsx
import React, { useState } from 'react';
import {
  Check, Shield, Cloud, Database, Cpu, Settings, Heart, Globe, Lock
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './SharedHostingPage.css';
import SharedHostingFAQ from '../components/SharedHostingFAQ';
import SharedPricingTable from '../components/Pricing/SharedPricingTable';
import AccordionSection from '../components/Pricing/AccordionSection';

const SharedHostingPage: React.FC = () => {
  const { language } = useLanguage();
  const [selectedPeriod, setSelectedPeriod] = useState<'monthly' | 'annually' | 'triennially'>('triennially');
  const [showFeatures, setShowFeatures] = useState(false);

  const texts = {
    en: {
      titleLine1: 'Get Worry-Free',
      titleLine2: 'Web Hosting',
      startNow: 'Start Now',
      moneyBack: '60 Days Money Back Guarantee',
      bullets: [
        '100% Cloud Platform Hosting',
        'Tier-3 Premium Data Center in Multi-locations',
        '100% Fast support by our experts'
      ],
      periods: {
        monthly: 'Monthly',
        annually: 'Annually',
        triennially: '3 Years'
      }
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
      ],
      periods: {
        monthly: 'Bulanan',
        annually: 'Tahunan',
        triennially: '3 Tahun'
      }
    }
  };

  const rawPlans = [
    {
      name: 'Personal',
      price: {
        monthly: { idr: '25000', usd: '1.5' },
        annually: { idr: '300000', usd: '15' },
        triennially: { idr: '900000', usd: '45' }
      },
      originalPrice: {
        monthly: '75000',
        annually: '900000',
        triennially: '1800000'
      },
      discount: '67',
      featured: false,
      location: 'Jakarta',
      features: [
        '5 GB NVMe Storage', '2 Core CPU', '1 GB RAM',
        'Unlimited Bandwidth', 'Free Domain (?)', 'Free Website Migration', 'Backup Harian (?)'
      ]
    },
    {
      name: 'Pro',
      price: {
        monthly: { idr: '40000', usd: '2.5' },
        annually: { idr: '480000', usd: '25' },
        triennially: { idr: '1440000', usd: '75' }
      },
      originalPrice: {
        monthly: '120000',
        annually: '1440000',
        triennially: '2880000'
      },
      discount: '67',
      featured: true,
      location: 'Jakarta',
      features: [
        '10 GB NVMe Storage', '2 Core CPU', '1 GB RAM',
        'Unlimited Bandwidth', 'Free Domain (?)', 'Free Website Migration', 'Backup Harian (?)'
      ],
      addons: [
        ['Unlimited Addon Domains', 'One-Click Backup Restore', '2x More CPU & RAM']
      ]
    },
    {
      name: 'Super',
      price: {
        monthly: { idr: '70000', usd: '5' },
        annually: { idr: '840000', usd: '50' },
        triennially: { idr: '2520000', usd: '150' }
      },
      originalPrice: {
        monthly: '210000',
        annually: '2520000',
        triennially: '5040000'
      },
      discount: '67',
      featured: false,
      location: 'Jakarta',
      features: [
        '20 GB NVMe Storage', '2 Core CPU', '2 GB RAM',
        'Unlimited Bandwidth', 'Free Domain (?)', 'Free Website Migration', 'Backup Harian (?)'
      ],
      addons: [
        ['Unlimited Addon Domains', 'One-Click Backup Restore'],
        ['4x More traffic handled', 'Turbo Cache OPcache/APC/Redis']
      ]
    }
  ];

  const formatPlansForDisplay = () => {
    return rawPlans.map(plan => ({
      name: plan.name,
      price: {
        monthly: language === 'id' ? plan.price.monthly.idr : plan.price.monthly.usd,
        annually: language === 'id' ? plan.price.annually.idr : plan.price.annually.usd,
        triennially: language === 'id' ? plan.price.triennially.idr : plan.price.triennially.usd,
      },
      originalPrice: plan.originalPrice,
      discount: plan.discount,
      featured: plan.featured,
      location: plan.location,
      features: plan.features,
      addons: plan.addons || []
    }));
  };

  const t = texts[language];

  return (
    <div className="shared-hosting-page">
      {/* Hero Section */}
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
                  <a href="#" className="hero-button hero-button-primary">{t.startNow}</a>
                  <p className="money-back">{t.moneyBack}</p>
                </div>
              </div>
            </div>

            {/* Icon Section */}
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative min-h-[500px]">
              <div className="floating-icons">
                {[Shield, Cloud, Database, Cpu, Settings, Heart, Globe, Lock].map((Icon, i) => (
                  <div key={i} className={`floating-icon icon-${i + 1}`}>
                    <Icon className="text-white" size={24} />
                  </div>
                ))}
              </div>
              <div className="moving-clouds">
                <div className="cloud cloud-1" />
                <div className="cloud cloud-2" />
                <div className="cloud cloud-3" />
              </div>
              <div className="diagonal-ripples">
                <div className="diagonal-line" />
                <div className="diagonal-line" />
                <div className="diagonal-line" />
                <div className="diagonal-line" />
              </div>
            </div>
          </div>
        </div>

        {/* Period Tabs */}
        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex gap-12">
            {(['monthly', 'annually', 'triennially'] as const).map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`text-xl font-semibold transition-colors duration-300 ${
                  selectedPeriod === period ? 'text-secondary' : 'text-white/80 hover:text-white'
                }`}
              >
                {t.periods[period]}
              </button>
            ))}
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="wave-bottom">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58..." className="shape-fill"></path>
          </svg>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="pricing-section -mt-64">
        <SharedPricingTable
          period={selectedPeriod}
          plans={formatPlansForDisplay()}
        />
      </div>

      {/* Fitur Lengkap Button */}
      <div className="text-center my-10">
        <button
          className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
          onClick={() => setShowFeatures(!showFeatures)}
        >
          {showFeatures ? 'Sembunyikan Fitur Lengkap' : 'Lihat Semua Fitur'}
        </button>
      </div>

      {showFeatures && (
        <div className="mt-8 space-y-4">
          {/* Accordion Sections Here */}
        </div>
      )}

      <SharedHostingFAQ />
    </div>
  );
};

export default SharedHostingPage;
