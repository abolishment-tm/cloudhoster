import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Logo from '../Common/Logo';
import './MainNav.css';

// Import custom SVG illustrations
import sharedHosting from '../../assets/icons/shared-hosting.svg?url';
import dedicatedHosting from '../../assets/icons/dedicated-hosting.svg?url';
import emailHosting from '../../assets/icons/email-hosting.svg?url';
import wordpressHosting from '../../assets/icons/wordpress-hosting.svg?url';
import managedWordpress from '../../assets/icons/wordpress-managed.svg?url';
import daftarDomain from '../../assets/icons/daftar-domain.svg?url';
import transferDomain from '../../assets/icons/transfer-domain.svg?url';
import checkWhois from '../../assets/icons/check-whois.svg?url';

const MainNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const texts = {
    en: {
      hosting: {
        title: 'Hosting',
        items: [
          { name: 'Shared Hosting', description: 'The easiest way to launch and grow your website.', icon: sharedHosting, link: '/shared-hosting' },
          { name: 'Dedicated Hosting', description: 'Maximum power and performance.', icon: dedicatedHosting, link: '/dedicated-hosting' },
          { name: 'Email Hosting', description: 'Email hosting with your own domain.', icon: emailHosting, link: '/email-hosting' }
        ]
      },
      wordpress: {
        title: 'WordPress',
        items: [
          { name: 'WordPress Hosting', description: 'Fast and secure WordPress hosting.', icon: wordpressHosting, link: '/wordpress-hosting' },
          { name: 'Managed WordPress', description: 'Worry-free WordPress site management.', icon: managedWordpress, link: '/managed-wordpress' }
        ]
      },
      domains: {
        title: 'Domains',
        items: [
          { name: 'Register Domain', description: 'Find and register your perfect domain.', icon: daftarDomain, link: '/daftar-domain' },
          { name: 'Transfer Domain', description: 'Move your domain to us easily.', icon: transferDomain, link: '/transfer-domain' },
          { name: 'WHOIS Lookup', description: 'Check domain ownership info.', icon: checkWhois, link: '/whois-lookup' }
        ]
      },
      pricing: 'Pricing',
      login: 'Login',
      cart: 'Cart'
    },
    id: {
      hosting: {
        title: 'Hosting',
        items: [
          { name: 'Shared Hosting', description: 'Cara termudah untuk memulai dan mengembangkan website Anda.', icon: sharedHosting, link: '/shared-hosting' },
          { name: 'Dedicated Hosting', description: 'Performa terbaik untuk situs besar.', icon: dedicatedHosting, link: '/dedicated-hosting' },
          { name: 'Email Hosting', description: 'Layanan email profesional sesuai domain Anda.', icon: emailHosting, link: '/email-hosting' }
        ]
      },
      wordpress: {
        title: 'WordPress',
        items: [
          { name: 'WordPress Hosting', description: 'Hosting WordPress yang cepat dan aman.', icon: wordpressHosting, link: '/wordpress-hosting' },
          { name: 'Managed WordPress', description: 'Manajemen WordPress tanpa repot.', icon: managedWordpress, link: '/managed-wordpress' }
        ]
      },
      domains: {
        title: 'Domain',
        items: [
          { name: 'Daftar Domain', description: 'Temukan dan daftarkan nama domain Anda.', icon: daftarDomain, link: '/daftar-domain' },
          { name: 'Transfer Domain', description: 'Pindahkan domain Anda dengan mudah.', icon: transferDomain, link: '/transfer-domain' },
          { name: 'Cek WHOIS', description: 'Periksa kepemilikan domain.', icon: checkWhois, link: '/whois-lookup' }
        ]
      },
      pricing: 'Harga',
      login: 'Masuk',
      cart: 'Keranjang'
    }
  };

  const t = texts[language];

  return (
    <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            <Logo size="medium" />
          </Link>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {['hosting', 'wordpress', 'domains'].map(section => (
              <li key={section} className="nav-item has-dropdown">
                <button className="nav-link">
                  {t[section].title} <ChevronDown size={16} />
                </button>
                <div className="dropdown-menu mega-menu">
                  <div className="mega-menu-grid">
                    {t[section].items.map((item, index) => (
                      <Link key={index} to={item.link} className="mega-menu-item">
                        <div className="mega-menu-icon">
                          <img src={item.icon} alt={item.name} className="w-16 h-16" />
                        </div>
                        <div className="mega-menu-content">
                          <h3>{item.name}</h3>
                          <p>{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ))}
            <li className="nav-item">
              <Link to="/pricing" className="nav-link">{t.pricing}</Link>
            </li>
          </ul>
          <div className={`nav-actions ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/login" className="btn btn-primary">{t.login}</Link>
            <Link to="/cart" className="cart-icon" aria-label="Shopping cart">
              <ShoppingCart size={20} />
              <span className="cart-badge">0</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;