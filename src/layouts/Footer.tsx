import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from '../components/Common/Logo';
import './Footer.css';

// Import SVGs sebagai URL agar Vite menyalinnya ke /assets
import BcaLogo        from '../assets/payment-logos/payment-bca.svg?url';
import VisaLogo       from '../assets/payment-logos/payment-visa.svg?url';
import MastercardLogo from '../assets/payment-logos/payment-mastercard.svg?url';
import PaypalLogo     from '../assets/payment-logos/payment-paypal.svg?url';
import GooglePayLogo  from '../assets/payment-logos/payment-googlepay.svg?url';
import ApplePayLogo   from '../assets/payment-logos/payment-applepay.svg?url';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const content = {
    en: {
      hosting: 'Hosting',
      wordpress: 'WordPress',
      domain: 'Domain',
      pricing: 'Pricing',
      support: 'Support Center',
      about: 'About Us',
      contact: 'Contact',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      copyright: '© 2025 CloudHoster Indonesia. All rights reserved.',
      tagline: 'Hosting for all websites',
      cloudLogin: 'Cloud Login',
      adminLogin: 'Admin Login'
    },
    id: {
      hosting: 'Hosting',
      wordpress: 'WordPress',
      domain: 'Domain',
      pricing: 'Harga',
      support: 'Pusat Bantuan',
      about: 'Tentang Kami',
      contact: 'Kontak',
      terms: 'Ketentuan Layanan',
      privacy: 'Kebijakan Privasi',
      copyright: '© 2025 CloudHoster Indonesia. All rights reserved.',
      tagline: 'Hosting untuk semua website',
      cloudLogin: 'Login Cloud',
      adminLogin: 'Login Admin'
    }
  };
  const t = content[language];

  return (
    <footer className="footer font-[AvertaStd]">
      <div className="container">
        <div className="footer-content">
          {/* Logo + Payment Logos */}
          <div className="footer-logo">
            <Logo size="medium" showTagline={false} variant="dark" />
            <p>{t.tagline}</p>
            <div className="payment-methods">
              <img src={BcaLogo}        alt="BCA"        className="h-9" />
              <img src={VisaLogo}       alt="Visa"       className="h-9" />
              <img src={MastercardLogo} alt="Mastercard" className="h-9" />
              <img src={PaypalLogo}     alt="PayPal"     className="h-9" />
              <img src={GooglePayLogo}  alt="Google Pay" className="h-9" />
              <img src={ApplePayLogo}   alt="Apple Pay"  className="h-9" />
            </div>
          </div>

          {/* Link Columns */}
          <div className="footer-links">
            <div className="footer-column">
              <h4>{t.hosting}</h4>
              <ul>
                <li><Link to="/shared-hosting">Shared Hosting</Link></li>
                <li><Link to="/cloud-dashboard">{t.cloudLogin}</Link></li>
                <li><Link to="/email-hosting">Email Hosting</Link></li>
                <li><Link to="/dedicated-hosting">Dedicated Server</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{t.wordpress}</h4>
              <ul>
                <li><Link to="/wordpress-hosting">WordPress Hosting</Link></li>
                <li><Link to="/managed-wordpress">Managed WordPress</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{t.support}</h4>
              <ul>
                <li><Link to="/pusat-bantuan">{t.support}</Link></li>
                <li><Link to="/contact">{t.contact}</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/terms">{t.terms}</Link></li>
                <li><Link to="/privacy">{t.privacy}</Link></li>
                <li><Link to="/gdpr">GDPR</Link></li>
                <li><Link to="/admin">{t.adminLogin}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;