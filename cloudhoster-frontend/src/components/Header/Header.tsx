// File: src/components/Header/Header.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCart } from '../../contexts/CartContext';
import DropdownGroup from './DropdownMenu';
import { wordpressMenu } from './Dropdowns/wordpressMenu';
import { domainMenu } from './Dropdowns/domainMenu';
import { hostingMenu } from './Dropdowns/hostingMenu';
import './Header.css';

import Logo from '../../assets/logo/cloudhoster-logo-white.svg';
import FlagID from '../../assets/icons/flag-id.svg';
import FlagUS from '../../assets/icons/flag-us.svg';
import CartIcon from '../../assets/icons/cart.svg';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import ChatIcon from '../../assets/icons/chat.svg';
import HelpIcon from '../../assets/icons/help.svg';
import PaymentIcon from '../../assets/icons/payment.svg';

const Header: React.FC<{ withPromo?: boolean }> = ({ withPromo = false }) => {
  const { language, setLanguage, currency } = useLanguage();
  const { itemCount } = useCart();
  const isID = language === 'id';

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [pointerX, setPointerX] = useState<number>(0);
  const [dropdownLeft, setDropdownLeft] = useState<number>(0);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const hostingRef = useRef<HTMLLIElement>(null);
  const wordpressRef = useRef<HTMLLIElement>(null);
  const domainRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const topOffset = withPromo ? '40px' : '0px';
    document.documentElement.style.setProperty('--main-header-top', topOffset);
  }, [withPromo]);

  const toggleLanguage = () => setLanguage(isID ? 'en' : 'id');

  const texts = {
    id: { login: 'Masuk', pricing: 'Harga' },
    en: { login: 'Login', pricing: 'Pricing' },
  };

  const calcPointer = (ref: React.RefObject<HTMLLIElement | null>) => {
    if (!ref.current) return;
    const arrowIcon = ref.current.querySelector('.arrow-icon') as HTMLElement | null;
    if (!arrowIcon) return;
    const parentRect = ref.current.getBoundingClientRect();
    const arrowRect = arrowIcon.getBoundingClientRect();
    const offset = arrowRect.left + arrowRect.width / 2 - parentRect.left;
    setPointerX(offset);
    setDropdownLeft(0);
  };

  const handleEnter = (menu: string, ref: React.RefObject<HTMLLIElement | null>) => {
    calcPointer(ref);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setOpenMenu(menu);
  };

  const handleLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setOpenMenu(null);
    }, 400);
  };

  return (
    <header className="header">
      {/* === TOP BAR === */}
      <div className="top-bar header-unified">
        <div className="top-bar-inner">
          <div className="top-links">
            <span className="top-link">
              <img src={ChatIcon} alt="Chat" className="top-icon" /> Live Chat
            </span>
            <span className="top-link">
              <img src={HelpIcon} alt="Help" className="top-icon" /> Help Center
            </span>
            <span className="top-link">
              <img src={PaymentIcon} alt="Payment" className="top-icon" /> Konfirmasi Pembayaran
            </span>
          </div>
          <div className="top-toggle-group">
            <button className="flag-btn" onClick={toggleLanguage}>
              <img src={isID ? FlagID : FlagUS} alt={isID ? 'ID' : 'EN'} className="flag-icon" />
              <span>{isID ? 'ID' : 'EN'}</span>
            </button>
            <button className="currency-btn">{currency}</button>
          </div>
        </div>
      </div>

      {/* === MAIN HEADER === */}
      <div className="main-header header-unified">
        <div className="main-header-inner">
          <div className="logo-area">
            <Link to="/" className="logo-link">
              <img src={Logo} alt="CloudHoster Logo" className="logo" />
            </Link>
          </div>

          <nav className="main-menu">
            <ul>
              <li
                ref={hostingRef}
                onMouseEnter={() => handleEnter('hosting', hostingRef)}
                onMouseLeave={handleLeave}
                style={{ position: 'relative' }}
              >
                Hosting <img src={ArrowDown} alt="v" className="arrow-icon" />
                {openMenu === 'hosting' && (
                  <DropdownGroup
                    items={hostingMenu}
                    pointerX={pointerX}
                    dropdownLeft={dropdownLeft}
                  />
                )}
              </li>

              <li
                ref={wordpressRef}
                onMouseEnter={() => handleEnter('wordpress', wordpressRef)}
                onMouseLeave={handleLeave}
                style={{ position: 'relative' }}
              >
                WordPress <img src={ArrowDown} alt="v" className="arrow-icon" />
                {openMenu === 'wordpress' && (
                  <DropdownGroup
                    items={wordpressMenu}
                    pointerX={pointerX}
                    dropdownLeft={dropdownLeft}
                  />
                )}
              </li>

              <li>{texts[language].pricing}</li>

              <li
                ref={domainRef}
                onMouseEnter={() => handleEnter('domain', domainRef)}
                onMouseLeave={handleLeave}
                style={{ position: 'relative' }}
              >
                Domain <img src={ArrowDown} alt="v" className="arrow-icon" />
                {openMenu === 'domain' && (
                  <DropdownGroup
                    items={domainMenu}
                    pointerX={pointerX}
                    dropdownLeft={dropdownLeft}
                    wrapperClass="domain"
                  />
                )}
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="login-btn">{texts[language].login}</button>
            <div className="relative">
              <img src={CartIcon} alt="Cart" className="cart-icon" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                  {itemCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
