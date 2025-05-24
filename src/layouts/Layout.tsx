import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { PromoProvider } from '../contexts/PromoContext';
import { LanguageProvider } from '../contexts/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LanguageProvider>
      <PromoProvider>
        <div className="layout">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </PromoProvider>
    </LanguageProvider>
  );
};

export default Layout;