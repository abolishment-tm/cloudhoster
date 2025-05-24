import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, ChevronDown, Server, Cloud, Mail, Globe, Shield, Zap, BarChart, Search, ArrowLeftRight, Database } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Logo from '../Common/Logo';
import './MainNav.css';

const MainNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const texts = {
    en: {
      hosting: {
        title: 'Hosting',
        items: [
          {
            name: 'Shared Hosting',
            description: 'The easiest way to launch and grow your website.',
            icon: Server,
            link: '/shared-hosting'
          },
          {
            name: 'Email Hosting',
            description: 'Easy, affordable email hosting that matches your domain.',
            icon: Mail,
            link: '/email-hosting'
          }
        ]
      },
      wordpress: {
        title: 'WordPress',
        items: [
          {
            name: 'WordPress Hosting',
            description: 'Get easy, affordable WordPress hosting beyond expectations.',
            icon: Globe,
            link: '/wordpress-hosting'
          },
          {
            name: 'Managed WordPress',
            description: 'Get our top-tier WordPress hosting for mission-critical sites.',
            icon: Shield,
            link: '/managed-wordpress'
          },
          {
            name: 'WordPress Speed',
            description: 'Boost your WordPress site with our speed optimization.',
            icon: Zap,
            link: '/wordpress-speed'
          },
          {
            name: 'WordPress SEO',
            description: 'Improve your search rankings with our SEO tools.',
            icon: BarChart,
            link: '/wordpress-seo'
          }
        ]
      },
      domains: {
        title: 'Domains',
        items: [
          {
            name: 'Register Domain',
            description: 'Find and register your perfect domain name.',
            icon: Search,
            link: '/daftar-domain'
          },
          {
            name: 'Transfer Domain',
            description: 'Move your existing domain to us easily.',
            icon: ArrowLeftRight,
            link: '/transfer-domain'
          },
          {
            name: 'WHOIS Lookup',
            description: 'Check domain ownership and availability.',
            icon: Database,
            link: '/whois-lookup'
          }
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
          {
            name: 'Shared Hosting',
            description: 'Cara termudah untuk meluncurkan dan mengembangkan website Anda.',
            icon: Server,
            link: '/shared-hosting'
          },
          {
            name: 'Email Hosting',
            description: 'Hosting email yang terjangkau dan sesuai dengan domain Anda.',
            icon: Mail,
            link: '/email-hosting'
          }
        ]
      },
      wordpress: {
        title: 'WordPress',
        items: [
          {
            name: 'WordPress Hosting',
            description: 'Dapatkan hosting WordPress yang mudah dan terjangkau.',
            icon: Globe,
            link: '/wordpress-hosting'
          },
          {
            name: 'Managed WordPress',
            description: 'Hosting WordPress tingkat atas untuk situs penting Anda.',
            icon: Shield,
            link: '/managed-wordpress'
          },
          {
            name: 'WordPress Speed',
            description: 'Tingkatkan kecepatan situs WordPress Anda.',
            icon: Zap,
            link: '/wordpress-speed'
          },
          {
            name: 'WordPress SEO',
            description: 'Tingkatkan peringkat pencarian dengan tools SEO kami.',
            icon: BarChart,
            link: '/wordpress-seo'
          }
        ]
      },
      domains: {
        title: 'Domain',
        items: [
          {
            name: 'Daftar Domain',
            description: 'Temukan dan daftarkan nama domain sempurna Anda.',
            icon: Search,
            link: '/daftar-domain'
          },
          {
            name: 'Transfer Domain',
            description: 'Pindahkan domain Anda dengan mudah.',
            icon: ArrowLeftRight,
            link: '/transfer-domain'
          },
          {
            name: 'Cek WHOIS',
            description: 'Periksa kepemilikan dan ketersediaan domain.',
            icon: Database,
            link: '/whois-lookup'
          }
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
            <li className="nav-item has-dropdown">
              <button className="nav-link">
                {t.hosting.title}
                <ChevronDown size={16} />
              </button>
              <div className="dropdown-menu mega-menu">
                <div className="mega-menu-grid">
                  {t.hosting.items.map((item, index) => (
                    <Link key={index} to={item.link} className="mega-menu-item">
                      <div className="mega-menu-icon">
                        <item.icon size={32} />
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
            
            <li className="nav-item has-dropdown">
              <button className="nav-link">
                {t.wordpress.title}
                <ChevronDown size={16} />
              </button>
              <div className="dropdown-menu mega-menu">
                <div className="mega-menu-grid">
                  {t.wordpress.items.map((item, index) => (
                    <Link key={index} to={item.link} className="mega-menu-item">
                      <div className="mega-menu-icon">
                        <item.icon size={32} />
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
            
            <li className="nav-item">
              <Link to="/pricing" className="nav-link">{t.pricing}</Link>
            </li>
            
            <li className="nav-item has-dropdown">
              <button className="nav-link">
                {t.domains.title}
                <ChevronDown size={16} />
              </button>
              <div className="dropdown-menu mega-menu">
                <div className="mega-menu-grid">
                  {t.domains.items.map((item, index) => (
                    <Link key={index} to={item.link} className="mega-menu-item">
                      <div className="mega-menu-icon">
                        <item.icon size={32} />
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
          </ul>
          
          <div className={`nav-actions ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/login" className="btn btn-primary">
              {t.login}
            </Link>
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