import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import WorldMap from '../../assets/images/worldmap-pastel.png';

const DataCenterSection: React.FC = () => {
  const { language } = useLanguage();

  const dataCenters = [
    { key: 'jakarta',    label: language === 'id' ? 'Jakarta'        : 'Jakarta',        top: '75%', left: '56%' },
    { key: 'singapore',  label: language === 'id' ? 'Singapura'      : 'Singapore',      top: '73%', left: '59%' },
    { key: 'london',     label: language === 'id' ? 'London'         : 'London',         top: '52%', left: '75%' },
    { key: 'washington', label: language === 'id' ? 'Washington'     : 'Washington',     top: '45%', left: '25%' },
    { key: 'newyork',    label: language === 'id' ? 'New York'       : 'New York',       top: '48%', left: '28%' },
    { key: 'silicon',    label: language === 'id' ? 'Silicon Valley' : 'Silicon Valley', top: '54%', left: '21%' },
    { key: 'dallas',     label: language === 'id' ? 'Dallas'         : 'Dallas',         top: '58%', left: '26%' },
  ];

  return (
    <section className="py-20 bg-white font-[AvertaStd]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'id' ? 'Lokasi Data Center Kami' : 'Our Data Center Locations'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'id'
              ? 'Jaringan server global untuk performa maksimal'
              : 'Global server network for peak performance'}
          </p>
        </div>

        <div className="relative w-full h-0" style={{ paddingBottom: '40%' }}>
          <img
            src={WorldMap}
            alt="World Map"
            className="absolute inset-0 w-full h-full object-contain"
          />
          {dataCenters.map(dc => (
            <div
              key={dc.key}
              className="absolute flex flex-col items-center text-sm text-primary"
              style={{ top: dc.top, left: dc.left, transform: 'translate(-50%, -50%)' }}
            >
              <span className="block w-3 h-3 bg-primary rounded-full mb-1"></span>
              <span>{dc.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataCenterSection;