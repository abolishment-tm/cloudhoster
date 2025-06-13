// File: src/components/Navigation/TopBar.tsx
import React, { useState } from 'react';
import './TopNav.css'; // Gunakan CSS yang sesuai class-nya

import HelpIcon from '../../assets/icons/help.svg';
import ChatIcon from '../../assets/icons/chat.svg';
import PaymentIcon from '../../assets/icons/payment.svg';
import FlagID from '../../assets/icons/flag-id.svg';
import FlagUS from '../../assets/icons/flag-us.svg';

const TopBar: React.FC = () => {
  const [language, setLanguage] = useState<'id' | 'en'>('id');
  const isID = language === 'id';
  const currency = isID ? 'Rp' : 'USD';

  const toggleLanguage = () => setLanguage(isID ? 'en' : 'id');

  return (
    <div className="top-nav">
      <div className="top-nav-content">
        <div className="top-nav-left">
          <a href="/help" className="top-nav-link">
            <img src={HelpIcon} alt="Help" className="top-icon" />
            Help Center
          </a>
          <a href="/livechat" className="top-nav-link">
            <img src={ChatIcon} alt="Live Chat" className="top-icon" />
            Live Chat
          </a>
          <a href="/konfirmasi" className="top-nav-link">
            <img src={PaymentIcon} alt="Payment" className="top-icon" />
            Konfirmasi Pembayaran
          </a>
        </div>
        <div className="top-nav-right">
          <button className="top-toggle" onClick={toggleLanguage}>
            <img
              src={isID ? FlagID : FlagUS}
              alt={isID ? 'ID' : 'EN'}
              className="flag-icon"
            />
            <span>{isID ? 'ID' : 'EN'}</span>
          </button>
          <button className="top-toggle">
            <span>{currency}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
