import React from 'react';
import { Cloud } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Logo.css';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showTagline?: boolean;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'medium', 
  showTagline = true,
  variant = 'light'
}) => {
  const { language } = useLanguage();
  
  const taglines = {
    en: 'Hosting for all websites',
    id: 'Hosting untuk semua website'
  };
  
  const getIconSize = () => {
    switch (size) {
      case 'small':
        return 28;
      case 'medium':
        return 40;
      case 'large':
        return 48;
      default:
        return 40;
    }
  };
  
  return (
    <div className={`logo ${size} ${variant}`}>
      <div className="logo-icon">
        <div className="cloud-wrapper">
          <Cloud 
            size={getIconSize()}
            strokeWidth={1.5}
            className="cloud-main"
          />
          <Cloud 
            size={getIconSize() * 0.6}
            strokeWidth={1.5}
            className="cloud-accent"
          />
        </div>
      </div>
      
      <div className="logo-text">
        <div className="logo-brand-container">
          <span className="logo-brand">CloudHoster</span>
          {showTagline && (
            <span className="logo-tagline">{taglines[language]}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logo;