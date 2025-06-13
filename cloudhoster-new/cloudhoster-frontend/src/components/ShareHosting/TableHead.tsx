import React, { useEffect, useState } from 'react';
import './TableHead.css';
import helpIcon from '../../assets/icons/help.svg';
import { useLanguage } from '../../contexts/LanguageContext';
import { getNearestDataCenter } from '../DataCenter/getNearestDataCenter';

import flagID from '../../assets/icons/flag-id.svg';
import flagUS from '../../assets/icons/flag-us.svg';
import flagSG from '../../assets/icons/flag-sg.svg';
import flagHK from '../../assets/icons/flag-hk.svg';
import flagGB from '../../assets/icons/flag-gb.svg';
import flagDE from '../../assets/icons/flag-de.svg';

const flagMap: Record<string, string> = {
  ID: flagID,
  US: flagUS,
  SG: flagSG,
  HK: flagHK,
  GB: flagGB,
  DE: flagDE,
};

export interface PlanData {
  name: string;
  current: { monthly: string; yearly: string; triyearly: string };
  original: { monthly: string; yearly: string; triyearly: string };
  discount: string;
}

interface TableHeadProps {
  selectedPeriod: 'monthly' | 'yearly' | 'triyearly';
  plans: Record<string, PlanData>;
  onShowTooltip: () => void;
}

const TableHead: React.FC<TableHeadProps> = ({ selectedPeriod, plans, onShowTooltip }) => {
  const { language } = useLanguage();
  const isID = language === 'id';
  const ctaLabel = isID ? 'Pesan Sekarang' : 'Order Now';

  const unitLabel = {
    monthly: isID ? '/bln' : '/mo',
    yearly: isID ? '/thn' : '/yr',
    triyearly: isID ? '/3th' : '/3yr',
  };

  const [flagSrc, setFlagSrc] = useState<string | null>(null);
  const [locationName, setLocationName] = useState<string | null>(null);

  useEffect(() => {
    getNearestDataCenter().then((nearest) => {
      if (nearest) {
        setLocationName(nearest.name);
        setFlagSrc(flagMap[nearest.countryCode]);
      }
    });
  }, []);

  return (
    <div className="table-head-wrapper">
      {Object.entries(plans).map(([key, plan]) => (
        <div key={key} className="table-head-box">
          {plan.name === 'Elang' && (
            <div className="plan-ribbon">
              {isID ? 'Paling Hot' : 'Most Popular'}
            </div>
          )}

          <div className="plan-name">{plan.name}</div>
          <div className="plan-price">
            {plan.current[selectedPeriod]}<span className="price-unit">{unitLabel[selectedPeriod]}</span>
          </div>

          <div className="price-row">
            <span className="plan-original">{plan.original[selectedPeriod]}</span>
            <span className="plan-discount"><b>{plan.discount}</b></span>
            <img src={helpIcon} alt="?" className="discount-help-icon" onClick={onShowTooltip} />
          </div>

          <button className="plan-cta has-arrow">
            <span className="btn__text">
              {ctaLabel}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="16"
                height="16"
                className="arrow-icon"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          <div className="plan-datacenter">
            {isID ? 'Data Center Terdekat:' : 'Nearest Data Center:'}{' '}
            {locationName && <strong>{locationName}</strong>}{' '}
            {flagSrc && <img src={flagSrc} alt="flag" className="flag-icon" />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableHead;
