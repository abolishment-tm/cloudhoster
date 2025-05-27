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
import './HeroSection.css';

interface HeroSectionProps {
  titleLine1: string;
  titleLine2: string;
  startNow: string;
  moneyBack: string;
  bullets?: string[];
  customIcons?: React.ReactNode;
  customBackground?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  titleLine1,
  titleLine2,
  startNow,
  moneyBack,
  bullets = [], // Provide default empty array
  customIcons,
  customBackground
}) => {
  return (
    <div className="hero-section\" style={customBackground ? { background: customBackground } : undefined}>
      {/* Add animated circles */}
      <div className="animated-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 text-white relative z-20">
            <h1 className="hero-title">
              <span className="hero-title-line">{titleLine1}</span>
              <span className="hero-title-line">{titleLine2}</span>
            </h1>

            {/* Bullet List */}
            {bullets && bullets.length > 0 && (
              <ul className="hero-bullets">
                {bullets.map((item, i) => (
                  <li key={i} className="hero-bullet">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Buttons + Money-Back */}
            <div className="hero-buttons">
              <div className="flex flex-col">
                <a href="#" className="hero-button hero-button-primary">
                  {startNow}
                </a>
                <p className="money-back">{moneyBack}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative min-h-[500px]">
            {customIcons || (
              <>
                {/* Default floating icons */}
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
              </>
            )}

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
  );
};

export default HeroSection;