// File: src/components/ShareHosting/PricingCards.tsx

import React, { useState } from 'react';
import './PricingCards.css';
import helpIcon from '../../assets/icons/help.svg';
import { useLanguage } from '../../contexts/LanguageContext';
import AddonFeatures from './AddonFeatures';

type FeatureItem = string | { text: string; tooltip: string };

interface PricingCardsProps {
  plans: {
    title: string;
    features: FeatureItem[];
  }[];
}

interface ModalContent {
  title: string;
  content: string;
}

const PricingCards: React.FC<PricingCardsProps> = ({ plans }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({ title: '', content: '' });
  const { language } = useLanguage();
  const isID = language === 'id';

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content });
    setModalVisible(true);
  };

  const closeModal = () => setModalVisible(false);

  return (
    <div className="pricing-table-wrapper">
      {plans.map((plan, index) => (
        <div key={index} className="pricing-card">
          <ul className="pricing-feature-list">
            {plan.features.map((item, idx) => {
              if (typeof item === 'string') {
                const isDomain = item.toLowerCase().includes('domain');
                const isBackup = item.toLowerCase().includes('backup');
                const [firstWord, ...rest] = item.split(' ');

                return (
                  <li key={idx}>
                    <b>{firstWord}</b> {rest.join(' ')}
                    {(isDomain || isBackup) && (
                      <img
                        src={helpIcon}
                        alt="help"
                        className="feature-help-icon"
                        onClick={() =>
                          openModal(
                            isID
                              ? isDomain
                                ? 'Gratis Domain'
                                : 'Backup Harian'
                              : isDomain
                              ? 'Free Domain'
                              : 'Daily Backup',
                            isID
                              ? isDomain
                                ? 'Gratis Domain hanya berlaku untuk pembelian paket minimal 1 tahun.'
                                : 'Backup harian dilakukan otomatis dan disimpan selama 14 hari.'
                              : isDomain
                              ? 'Free Domain is only available for a minimum 1-year plan.'
                              : 'Daily backups are automatic and stored for 14 days.'
                          )
                        }
                      />
                    )}
                  </li>
                );
              }

              // object with tooltip
              return (
                <li key={idx}>
                  {item.text}
                  <img
                    src={helpIcon}
                    alt="info"
                    className="feature-help-icon"
                    onClick={() => openModal(item.text, item.tooltip)}
                  />
                </li>
              );
            })}
          </ul>

          {plan.title === 'Elang' && <AddonFeatures plan="Elang" />}
          {plan.title === 'Garuda' && <AddonFeatures plan="Garuda" />}
        </div>
      ))}

      {modalVisible && (
        <div className="tooltip-overlay" onClick={closeModal}>
          <div className="tooltip-box" onClick={(e) => e.stopPropagation()}>
            <button className="tooltip-close" onClick={closeModal}>
              ×
            </button>
            <h2 className="tooltip-title">{modalContent.title}</h2>
            <p className="tooltip-content">{modalContent.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingCards;
