import React from 'react';
import './Logo.css';
import LogoImage from '../../assets/logo/cloudhoster-logo-white.png?url';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({
  size = 'medium',
  variant = 'light',
}) => {
  const getImageHeight = () => {
    switch (size) {
      case 'small':
        return '53px'; // sebelumnya 44px
      case 'medium':
        return '75px'; // sebelumnya 63px
      case 'large':
        return '104px'; // sebelumnya 87px
      default:
        return '75px';
    }
  };

  return (
    <div className={`logo ${size} ${variant}`}>
      <div className="logo-icon">
        <img
          src={LogoImage}
          alt="CloudHoster Logo"
          style={{
            height: getImageHeight(),
            maxWidth: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
};

export default Logo;
