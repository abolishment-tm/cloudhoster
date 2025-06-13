import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Logo from '../../assets/logo/cloudhoster-logo-white.svg';
import BcaIcon from '../../assets/icons/payment-bca.svg';
import VisaIcon from '../../assets/icons/payment-visa.svg';
import MastercardIcon from '../../assets/icons/payment-mastercard.svg';
import PaypalIcon from '../../assets/icons/payment-paypal.svg';
import GooglePayIcon from '../../assets/icons/payment-googlepay.svg';
import ApplePayIcon from '../../assets/icons/payment-applepay.svg';
import './Footer.css';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  const labels = {
    id: {
      layanan: 'LAYANAN',
      bantuan: 'BANTUAN',
      why: 'WHY CLOUDHOSTER',
      tos: 'Syarat dan Ketentuan',
      privacy: 'Kebijakan Privasi',
      layananItems: [
        'Beli Domain',
        'Shared Hosting',
        'WordPress Hosting',
        'Managed WordPress',
        'Dedicated Hosting',
        'Email Hosting',
      ],
      bantuanItems: [
        'Basis Pengetahuan',
        'Sistem Status',
        'Promosi',
        'Tanya Jawab',
        'Live Chat',
        'Kirim Tiket',
      ],
      whyItems: [
        'Teknologi & Platform',
        'Service Uptime',
        '24/7 Dukungan Pelanggan',
      ],
      rights: 'Semua hak dilindungi Undang-Undang',
    },
    en: {
      layanan: 'SERVICES',
      bantuan: 'SUPPORT',
      why: 'WHY CLOUDHOSTER',
      tos: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      layananItems: [
        'Buy Domain',
        'Shared Hosting',
        'WordPress Hosting',
        'Managed WordPress',
        'Dedicated Hosting',
        'Email Hosting',
      ],
      bantuanItems: [
        'Knowledge Base',
        'System Status',
        'Promotions',
        'FAQ',
        'Live Chat',
        'Submit Ticket',
      ],
      whyItems: [
        'Technology & Platform',
        'Service Uptime',
        '24/7 Customer Support',
      ],
      rights: 'All rights reserved.',
    },
  };

  const t = labels[language];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column logo-section">
          <img src={Logo} alt="CloudHoster Logo" className="footer-logo" />

          <p className="footer-address">
            <strong>PT Cloud Hoster Indonesia</strong><br />
            Gedung Bursa Efek Indonesia Tower 1, Level 3 Unit 304, SCBD<br />
            Jakarta Selatan, DKI Jakarta 12190 – Indonesia
          </p>

          <hr className="footer-divider" />

          <div className="payment-icons">
            <img src={BcaIcon} alt="BCA" />
            <img src={VisaIcon} alt="Visa" />
            <img src={MastercardIcon} alt="Mastercard" />
            <img src={PaypalIcon} alt="PayPal" />
            <img src={GooglePayIcon} alt="Google Pay" />
            <img src={ApplePayIcon} alt="Apple Pay" />
          </div>

          <div className="footer-bottom">
            <span>© 2025 CloudHoster Indonesia. {t.rights}</span>
            <span className="footer-links">
              <a href="/syarat-ketentuan">{t.tos}</a>
              <span>&nbsp;|&nbsp;</span>
              <a href="/kebijakan-privasi">{t.privacy}</a>
            </span>
          </div>
        </div>

        <div className="footer-column">
          <h4>{t.layanan}</h4>
          <ul>
            {t.layananItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>{t.bantuan}</h4>
          <ul>
            {t.bantuanItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>{t.why}</h4>
          <ul>
            {t.whyItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
