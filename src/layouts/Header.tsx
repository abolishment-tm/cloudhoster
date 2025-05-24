import React from 'react';
import TopBar from '../components/Navigation/TopBar';
import PromoBar from '../components/PromoBar/PromoBar';
import MainNav from '../components/Navigation/MainNav';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <PromoBar />
      <TopBar />
      <MainNav />
    </header>
  );
};

export default Header;