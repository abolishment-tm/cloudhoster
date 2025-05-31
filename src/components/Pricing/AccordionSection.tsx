import React, { useState } from 'react';
import ComparisonTable from './ComparisonTable';

interface AccordionSectionProps {
  title: string;
  features: {
    name: string;
    values: string[];
  }[];
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, features }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-section border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="accordion-header"
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          <ComparisonTable features={features} />
        </div>
      )}
    </div>
  );
};

export default AccordionSection;
