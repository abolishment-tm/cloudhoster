// File: src/components/Header/DropdownMenu.tsx
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './DropdownMenu.css';

interface Item {
  icon: string;
  titleID: string;
  titleEN: string;
  descriptionID: string;
  descriptionEN: string;
  href: string;
}

export interface DropdownGroupProps {
  items: Item[];
  pointerX?: number;
  dropdownLeft?: number;
  wrapperClass?: string;
}

const DropdownGroup: React.FC<DropdownGroupProps> = ({
  items,
  pointerX,
  dropdownLeft,
  wrapperClass = '',
}) => {
  const { language } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = dropdownRef.current;
    if (!el) return;

    if (typeof pointerX === 'number') {
      el.style.setProperty('--pointer-x', `${pointerX}px`);
    }

    if (typeof dropdownLeft === 'number') {
      el.style.left = `${dropdownLeft}px`;
      el.style.top = `calc(100% + 18px)`;
    }
  }, [pointerX, dropdownLeft]);

  return (
    <div ref={dropdownRef} className={`dropdown-wrapper ${wrapperClass}`}>
      <div className="dropdown-group">
        {items.map((item, index) => (
          <a key={index} href={item.href} className="dropdown-item">
            <div className="dropdown-icon-wrapper">
              <img
                src={item.icon}
                alt={language === 'id' ? item.titleID : item.titleEN}
                className="dropdown-icon"
              />
            </div>
            <div className="dropdown-text">
              <div className="dropdown-title">
                {language === 'id' ? item.titleID : item.titleEN}
              </div>
              <div className="dropdown-description">
                {language === 'id' ? item.descriptionID : item.descriptionEN}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropdownGroup;
