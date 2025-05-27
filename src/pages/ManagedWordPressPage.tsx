import React from 'react';
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
import { useLanguage } from '../contexts/LanguageContext';
import './ManagedWordPressPage.css';

const ManagedWordPressPage: React.FC = () => {
  const { language } = useLanguage();

  const texts = {
    en: {
      titleLine1: 'Managed WordPress',
      titleLine2: 'Made Simple',
      startNow: 'Start Now',
      moneyBack: '30-Day Money Back Guarantee',
      bullets: [
        'Automated WordPress Updates',
        'Daily Security Scans',
        'Expert WordPress Support',
        'Advanced Caching',
        'Free SSL Certificates'
      ]
    },
    id: {
      titleLine1: 'WordPress Terkelola',
      titleLine2: 'Lebih Mudah',
      startNow: 'Mulai Sekarang',
      moneyBack: 'Jaminan Uang Kembali 30 Hari',
      bullets: [
        'Update WordPress Otomatis',
        'Pemindaian Keamanan Harian',
        'Dukungan WordPress Ahli',
        'Caching Tingkat Lanjut',
        'Sertifikat SSL Gratis'
      ]
    }
  };

  const t = texts[language];

  return (
    <div className="managed-wordpress-page">
      <div className="hero-section">
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 text-white relative z-20">
              <h1 className="hero-title">
                <span className="hero-title-line">{t.titleLine1}</span>
                <span className="hero-title-line">{t.titleLine2}</span>
              </h1>

              {/* Bullet List */}
              <ul className="hero-bullets">
                {t.bullets.map((item, i) => (
                  <li key={i} className="hero-bullet">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Buttons + Money-Back */}
              <div className="hero-buttons">
                <div className="flex flex-col">
                  <a href="#" className="hero-button hero-button-primary">
                    {t.startNow}
                  </a>
                  <p className="money-back">{t.moneyBack}</p>
                </div>
              </div>
            </div>

            {/* Right Column - Illustration */}
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative min-h-[500px]">
              {/* Floating Icons */}
              <div className="floating-icons">
                <div className="floating-icon icon-1">
                  <Shield className="text-white" size={24} />
                </div>
                <div className="floating-icon icon-2">
                  <Cloud className="text-white" size={24} />
                </div>
                <div className="floating-icon icon-3">
                  <Database className="text-white" size={24} />
                </div>
                <div className="floating-icon icon-4">
                  <Cpu className="text-white" size={24} />
                </div>
                <div className="floating-icon icon-5">
                  <Settings className="text-white" size={24} />
                </div>
                <div className="floating-icon icon-6">
                  <Heart className="text-white" size={24} />
                </div>
                <div className="floating-icon icon-7">
                  <Globe className="text-white" size={24} />
                </div>
                <div className="floating-icon icon-8">
                  <Lock className="text-white" size={24} />
                </div>
              </div>

              {/* Moving Clouds */}
              <div className="moving-clouds">
                <div className="cloud cloud-1"></div>
                <div className="cloud cloud-2"></div>
                <div className="cloud cloud-3"></div>
              </div>

              {/* Diagonal Ripple Lines */}
              <div className="diagonal-ripples">
                <div className="diagonal-line"></div>
                <div className="diagonal-line"></div>
                <div className="diagonal-line"></div>
                <div className="diagonal-line"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="wave-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ManagedWordPressPage;