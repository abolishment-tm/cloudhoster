// File: src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PromoBar from './components/Home/PromoBar';
import PromoDropdown from './components/Home/PromoDropdown';
import Header from './components/Header/Header';
import HeroSection from './components/Home/HeroSection';
import ProductCards from './components/Home/ProductCards';
import WhyCloudHoster from './components/Home/WhyCloudHoster';
import MigrationSection from './components/Home/MigrationSection';
import MoreReasons from './components/Home/MoreReasons';
import CTASection from './components/Home/CTASection';
import Footer from './components/Footer/Footer';

import { CartProvider } from './contexts/CartContext';
import { CurrencyProvider } from './contexts/CurrencyContext';

// CSS imports
import './components/Home/PromoBar.css';
import './components/Home/PromoDropdown.css';
import './components/Home/HeroSection.css';
import './components/Home/ProductCards.css';
import './components/Header/Header.css';

// Import Share Hosting Page
import ShareHosting from './pages/ShareHosting';

const App: React.FC = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isPromoVisible, setPromoVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isDropdownVisible ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDropdownVisible]);

  // Homepage layout
  const HomePageLayout = () => (
    <div className={isDropdownVisible ? 'with-promo' : ''}>
      {/* Promo Bar */}
      {isPromoVisible && (
        <PromoBar
          isOpen={isDropdownVisible}
          onToggle={() => setDropdownVisible(prev => !prev)}
          onClose={() => setPromoVisible(false)}
        />
      )}

      {/* Promo Dropdown */}
      {isDropdownVisible && <PromoDropdown isOpen={isDropdownVisible} />}

      {/* Header */}
      {!isDropdownVisible && <Header withPromo={isPromoVisible} />}

      {/* Content */}
      <HeroSection />
      <ProductCards />
      <WhyCloudHoster />
      <MigrationSection />
      <MoreReasons />
      <CTASection />
      <Footer />
    </div>
  );

  return (
    <CartProvider>
      <CurrencyProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePageLayout />} />
            <Route path="/sharehosting" element={<ShareHosting />} />
          </Routes>
        </Router>
      </CurrencyProvider>
    </CartProvider>
  );
};

export default App;
