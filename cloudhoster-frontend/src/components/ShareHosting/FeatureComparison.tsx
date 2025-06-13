// File: src/components/ShareHosting/FeatureComparison.tsx
import React, { useState } from 'react';
import checkIcon from '../../assets/icons/checkmark.svg';
import xIcon from '../../assets/icons/x-icon.svg';
import helpIcon from '../../assets/icons/help.svg';
import plusIcon from '../../assets/icons/plus.svg';
import minusIcon from '../../assets/icons/minus.svg';
import TooltipModal from '../Tooltip/TooltipModal';
import './FeatureComparison.css';

interface Feature {
  labelID: string;
  labelEN: string;
  help?: boolean;
}

interface CategorizedFeature extends Feature {
  category: string;
  merak?: string | boolean;
  elang?: string | boolean;
  garuda?: string | boolean;
}

interface Plan {
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  buttonLabel: string;
  features: (string | boolean | { label: string; help?: boolean })[];
}

interface FeatureComparisonProps {
  features: Feature[];
  categorizedFeatures: CategorizedFeature[];
  plans: Plan[];
}

const FeatureComparison: React.FC<FeatureComparisonProps> = ({
  features,
  categorizedFeatures,
  plans,
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipTitle, setTooltipTitle] = useState('');
  const [tooltipContent, setTooltipContent] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const isID = features.length > 0 && !!features[0].labelID;

  const showTooltip = (title: string, content: string) => {
    setTooltipTitle(title);
    setTooltipContent(content);
    setTooltipOpen(true);
  };

  const hideTooltip = () => {
    setTooltipOpen(false);
    setTooltipTitle('');
    setTooltipContent('');
  };

  const renderFeatureCell = (value: string | boolean | { label: string; help?: boolean }) => {
    if (typeof value === 'boolean') {
      return (
        <img
          src={value ? checkIcon : xIcon}
          alt={value ? 'Yes' : 'No'}
          className={value ? 'check-icon' : 'x-icon'}
        />
      );
    }
    if (typeof value === 'object') {
      return (
        <>
          {value.label}
          {value.help && (
            <img
              src={helpIcon}
              alt="Help"
              className="help-icon"
              onClick={() =>
                showTooltip(
                  isID ? 'Info Fitur' : 'Feature Info',
                  isID
                    ? 'Keterangan tambahan fitur ini.'
                    : 'Additional info about this feature.'
                )
              }
            />
          )}
        </>
      );
    }
    return value;
  };

  // Group categorizedFeatures by category
  const groupedFeatures = categorizedFeatures.reduce(
    (acc: Record<string, CategorizedFeature[]>, feature) => {
      if (!acc[feature.category]) acc[feature.category] = [];
      acc[feature.category].push(feature);
      return acc;
    },
    {}
  );

  // Use Indonesian category keys (must match featuresAccordion.category)
  const accordionCategories = [
    'Fitur Keamanan & Reabilitas',
    'Fitur Performa Website',
    'Fitur Email',
    'Fitur Developer',
  ];

  // Translate category label to EN when needed
  const getCategoryLabel = (cat: string) =>
    isID
      ? cat
      : cat === 'Fitur Keamanan & Reabilitas'
      ? 'Security & Reliability'
      : cat === 'Fitur Performa Website'
      ? 'Website Performance Features'
      : cat === 'Fitur Email'
      ? 'Email Features'
      : cat === 'Fitur Developer'
      ? 'Developer Features'
      : cat;

  return (
    <div className="feature-compare-wrapper">
      <h2 className="compare-title">
        {isID ? 'Perbandingan Lengkap Fitur Hosting' : 'Complete Hosting Feature Comparison'}
      </h2>

      {/* === TABEL UTAMA === */}
      <div className="compare-table-scroll">
        <table className="compare-table">
          <thead>
            <tr>
              <th className="feature-col-header">
                <p className="highlight-paragraph">
                  {isID ? (
                    <>
                      <span className="bold">Gratis domain</span> untuk semua paket hosting. Untuk informasi lebih lanjut,{' '}
                      <span className="bold">Chat kami</span>.
                    </>
                  ) : (
                    <>
                      All hosting plans include a <span className="bold">free domain</span>. Not sure yet?{' '}
                      <span className="bold">Chat with us</span>.
                    </>
                  )}
                </p>
              </th>
              {plans.map((plan) => (
                <th key={plan.name} className="plan-col-header">
                  <div className="plan-name">{plan.name}</div>
                  <div className="plan-current-price">
                    {plan.price}
                    <span className="plan-price-unit">/bln</span>
                  </div>
                  <div className="plan-price-row">
                    {plan.originalPrice && (
                      <span
                        className="plan-original-price"
                        onClick={() =>
                          showTooltip(
                            isID ? 'Harga Normal' : 'Original Price',
                            isID ? 'Harga sebelum diskon yang berlaku.' : 'Price before discount.'
                          )
                        }
                      >
                        {plan.originalPrice}
                      </span>
                    )}
                    {plan.discount && (
                      <span
                        className="plan-discount"
                        onClick={() =>
                          showTooltip(
                            isID ? 'Diskon Promo' : 'Promo Discount',
                            isID
                              ? 'Diskon dan penawaran khusus berlaku hanya untuk pelanggan baru.'
                              : 'Discounts apply only for new customers.'
                          )
                        }
                      >
                        {plan.discount}
                        <img src={helpIcon} alt="Help" className="help-icon" />
                      </span>
                    )}
                  </div>
                  <button className="compare-cta">{plan.buttonLabel}</button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={feature.labelID} className={index % 2 === 0 ? 'row-even' : 'row-odd'}>
                <td className="feature-col">
                  {isID ? feature.labelID : feature.labelEN}
                  {feature.help && (
                    <img
                      src={helpIcon}
                      alt="Help"
                      className="help-icon"
                      onClick={() =>
                        showTooltip(
                          isID ? 'Info Fitur' : 'Feature Info',
                          isID ? 'Keterangan tambahan fitur ini.' : 'Additional info about this feature.'
                        )
                      }
                    />
                  )}
                </td>
                {plans.map((plan) => (
                  <td key={plan.name + feature.labelID} className="plan-col">
                    {renderFeatureCell(
                      plan.features.find((_, i) => features[i]?.labelID === feature.labelID) || ''
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* === ACCORDION VERTIKAL === */}
      <div className="feature-accordion-wrapper">
        {accordionCategories.map((category) => {
          const categoryFeatures = groupedFeatures[category] || [];
          return (
            <div key={category} className="accordion-category">
              <div
                className="accordion-category-title"
                onClick={() =>
                  setExpandedCategories((prev) => ({
                    ...prev,
                    [category]: !prev[category],
                  }))
                }
              >
                <span>{getCategoryLabel(category)}</span>
                <img
                  src={expandedCategories[category] ? minusIcon : plusIcon}
                  alt={expandedCategories[category] ? 'Collapse' : 'Expand'}
                  className="category-toggle-icon"
                />
              </div>
              {expandedCategories[category] &&
                categoryFeatures.map((feature, idx) => (
                  <div
                    key={feature.labelID}
                    className={`accordion-row ${idx % 2 === 0 ? 'row-even' : 'row-odd'}`}
                  >
                    <div className="feature-col">
                      {isID ? feature.labelID : feature.labelEN}
                      {feature.help && (
                        <img
                          src={helpIcon}
                          alt="Help"
                          className="help-icon"
                          onClick={() =>
                            showTooltip(
                              isID ? 'Info Fitur' : 'Feature Info',
                              isID
                                ? 'Keterangan tambahan fitur ini.'
                                : 'Additional info about this feature.'
                            )
                          }
                        />
                      )}
                    </div>
                    {plans.map((plan) => {
                      const key = plan.name.toLowerCase() as 'merak' | 'elang' | 'garuda';
                      const cellValue = feature[key] ?? false;
                      return (
                        <div key={plan.name + feature.labelID} className="plan-col">
                          {renderFeatureCell(cellValue)}
                        </div>
                      );
                    })}
                  </div>
                ))}
            </div>
          );
        })}
      </div>

      {tooltipOpen && (
        <TooltipModal
          title={tooltipTitle}
          content={tooltipContent}
          onClose={hideTooltip}
          positionMode="modal"
        />
      )}
    </div>
  );
};

export default FeatureComparison;
