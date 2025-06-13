import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './FeatureAccordion.css';

interface FeatureItem {
  labelID: string;
  labelEN: string;
}

interface AccordionCategory {
  category: string;
  items: FeatureItem[];
}

interface FeatureAccordionProps {
  features: AccordionCategory[];
}

const FeatureAccordion: React.FC<FeatureAccordionProps> = ({ features }) => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isID = language === 'id';

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="accordion-wrapper">
      {features.map((section, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <span>{section.category}</span>
            <span className="accordion-icon">{openIndex === index ? '−' : '+'}</span>
          </button>

          {openIndex === index && (
            <ul className="accordion-content">
              {section.items.map((item, i) => (
                <li key={i} className="accordion-feature">
                  {isID ? item.labelID : item.labelEN}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeatureAccordion;
