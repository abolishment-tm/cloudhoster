// src/components/Pricing/EssentialFeaturesCard.tsx
import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import TooltipModal from '../TooltipModal';
import questionIcon from '../../assets/icons/question-mark.svg?url';

interface Props {
  features: string[];
}

const EssentialFeaturesCard: React.FC<Props> = ({ features }) => {
  const { language } = useLanguage();
  const label = language === 'id' ? 'Fitur Dasar' : 'Essential Features';

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipContent, setTooltipContent] = useState('');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const contentMap: Record<string, string> = {
    'Free Domain': language === 'id'
      ? 'Gratis domain hanya untuk tahun pertama.'
      : 'Free domain for the first year only.',
    'Backup Harian': language === 'id'
      ? 'Backup otomatis setiap hari untuk keamanan Anda.'
      : 'Daily backups included.',
  };

  const emphasizeKeywords = (text: string) => {
    const keywords = ['Free', 'Unlimited', 'NVMe', 'LiteSpeed'];
    const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, i) =>
      keywords.includes(part) ? (
        <strong key={i}>{part}</strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
     <div className="essential-features-card relative rounded-xl border border-gray-300 bg-white shadow-sm">
      <div className="vertical-label text-[15px] items-center leading-tight font-bold text-black">{label}</div>
      <ul className="feature-list">
        {features.map((raw, index) => {
          const feature = raw.replace('(?)', '').trim();
          const showTooltip = contentMap[feature] !== undefined;

          return (
            <li key={index} className="feature-item text-[15px] leading-tight text-black flex items-start">
  <span className="text-left">
    {emphasizeKeywords(feature)}
    {showTooltip && (
      <button
        onClick={() => {
          setTooltipVisible(!tooltipVisible || activeIndex !== index);
          setActiveIndex(index);
          setTooltipContent(contentMap[feature]);
        }}
        className="ml-1 inline-block"
      >
        <img src={questionIcon} alt="info" className="w-4 h-4 inline" />
      </button>
    )}
  </span>
  {tooltipVisible && activeIndex === index && (
    <div className="tooltip-panel tooltip-below">
      <TooltipModal
        visible={true}
        onClose={() => setTooltipVisible(false)}
        title={language === 'id' ? 'Info Fitur' : 'Feature Info'}
        content={tooltipContent}
      />
    </div>
  )}
</li>

          );
        })}
      </ul>
    </div>
  );
};

export default EssentialFeaturesCard;
