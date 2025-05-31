// File: src/components/Pricing/AddonFeaturesCard.tsx
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './AddonFeaturesCard.css';

interface Props {
  features: string[][];
  planName: string; // "Pro" atau "Super"
}

const AddonFeaturesCard: React.FC<Props> = ({ features, planName }) => {
  const { language } = useLanguage();
  const label = planName;

  return (
    <>
      {features.map((group, i) => (
        <div
          key={i}
          className="addon-card relative border border-dotted border-orange-500 rounded-xl bg-white p-6 mt-0.5"
        >
          <div className="vertical-addon-label text-[14px] font-semibold text-orange-600">
            {label}
          </div>
          <ul className="addon-list">
            {group.map((item, j) => (
              <li key={j} className="addon-item">
                {item.split(' ').map((word, k) =>
                  ['Free', 'Unlimited', '1x', '2x', '3x', '4x', 'One-Click'].includes(word) ? (
                    <span key={k} className="font-semibold">{word} </span>
                  ) : (
                    <span key={k}>{word} </span>
                  )
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default AddonFeaturesCard;
