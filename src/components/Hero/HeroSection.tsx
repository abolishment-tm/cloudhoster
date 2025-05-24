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
  Check
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: 'Get Worry-Free Web Hosting',
      startNow: 'Start Now',
      moneyBack: '60 Days Money Back Guarantee',
      bullets: [
        '100% Cloud Platform Hosting',
        'Tier-3 Premium Data Center di Multi-lokasi',
        '100% Fast support by our experts'
      ]
    },
    id: {
      title: 'Dapatkan Web Hosting Tanpa Khawatir',
      startNow: 'Mulai Sekarang',
      moneyBack: '60 Hari Garansi Uang Kembali',
      bullets: [
        '100% Cloud Platform Hosting',
        'Tier-3 Premium Data Center di Multi-lokasi',
        '100% Support cepat dengan ahlinya'
      ]
    }
  };

  const t = texts[language];

  return (
    <div className="relative bg-gradient-to-br from-primary to-primary-light overflow-hidden">
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 text-white relative z-20">
            {/* Title */}
            <h1 className="hero-title">{t.title}</h1>

            {/* New: Bullet List */}
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

          {/* Right Column – Illustration */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative min-h-[500px]">
            <div className="hero-illustration absolute inset-0">
              {/* semua ikon & animasi seperti semula */}
              <div className="icon-container icon-server animate-float">
                <Server className="icon" size={48} />
              </div>
              <div className="icon-container icon-database animate-float-delay">
                <Database className="icon" size={40} />
              </div>
              <div className="icon-container icon-globe animate-float-slow">
                <Globe className="icon" size={44} />
              </div>
              <div className="icon-container icon-shield animate-float">
                <Shield className="icon" size={36} />
              </div>
              <div className="icon-container icon-cloud animate-float-delay">
                <Cloud className="icon" size={42} />
              </div>
              <div className="icon-container icon-speed animate-float-slow">
                <Zap className="icon" size={38} />
              </div>
              <div className="icon-container icon-cpu animate-float">
                <Cpu className="icon" size={34} />
              </div>
              <div className="icon-container icon-wifi animate-float-delay">
                <Wifi className="icon" size={36} />
              </div>
              <div className="icon-container icon-lock animate-float-slow">
                <Lock className="icon" size={32} />
              </div>
              <div className="icon-container icon-chart animate-float">
                <BarChart className="icon" size={34} />
              </div>
              {/* connection lines, circles, pulses */}
              <div className="connection-lines">
                <div className="line line-1" />
                <div className="line line-2" />
                <div className="line line-3" />
              </div>
              <div className="decorative-circles">
                <div className="circle circle-1" />
                <div className="circle circle-2" />
                <div className="circle circle-3" />
              </div>
              <div className="pulse-effects">
                <div className="pulse pulse-1" />
                <div className="pulse pulse-2" />
                <div className="pulse pulse-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="wave-shape" />
        <div className="wave-shape-2" />
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1440 320" className="wave-bottom" preserveAspectRatio="none">
          <path
            fill="currentColor"
            fillOpacity="0.1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
