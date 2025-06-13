// File: src/components/Home/PromoBar.tsx
import React, { useEffect, useState } from 'react';
import './PromoBar.css';

import FlameIcon from '../../assets/icons/flame.svg';
import ArrowDownIcon from '../../assets/icons/arrow-down.svg';
import CloseIcon from '../../assets/icons/closed.svg';

interface PromoBarProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const PromoBar: React.FC<PromoBarProps> = ({ isOpen, onToggle, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 30 * 60 * 1000); // 30 menit

    return () => clearTimeout(timer);
  }, []);

  // Toggle sticky class ke MainMenu jika PromoBar ditutup
  useEffect(() => {
    const menuElement = document.querySelector('.main-menu');
    if (!isVisible) {
      menuElement?.classList.add('sticky');
    } else {
      menuElement?.classList.remove('sticky');
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="promo-bar">
      <div className="promo-bar-inner">
        <span className="promo-label">
          <span className="promo-badge">
            <img src={FlameIcon} alt="Promo" className="flame-icon" />
            <span className="promo-badge-text">Event Promo</span>
          </span>
          <span className="promo-message">
            Promo Spesial Hosting Diskon Hingga 70%
          </span>
        </span>
        <div className="promo-buttons">
          <button
            className={`promo-button rotate-icon ${isOpen ? 'open' : ''}`}
            onClick={onToggle}
          >
            <img src={ArrowDownIcon} alt="Toggle" className="arrow-icon" />
          </button>
          <button
            className="promo-button"
            onClick={() => {
              setIsVisible(false);
              onClose();
            }}
          >
            <img src={CloseIcon} alt="Close" className="close-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBar;
