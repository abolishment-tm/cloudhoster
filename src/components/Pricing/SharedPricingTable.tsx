// src/components/Pricing/SharedPricingTable.tsx
import React from 'react';
import PricingCard from './PricingCard';
import EssentialFeaturesCard from './EssentialFeaturesCard';
import AddonFeaturesCard from './AddonFeaturesCard';
import './SharedPricingTable.css';

interface Plan {
  name: string;
  price: {
    monthly: string;
    annually: string;
    triennially: string;
  };
  originalPrice: {
    monthly: string;
    annually: string;
    triennially: string;
  };
  discount: string;
  featured: boolean;
  location: string;
  features: string[];
  addons?: string[][];
}

interface Props {
  period: 'monthly' | 'annually' | 'triennially';
  plans: Plan[];
}

const SharedPricingTable: React.FC<Props> = ({ period, plans }) => {
  return (
    <div className="pricing-section">
      <div className="grid-wrapper">
        {plans.map((plan, index) => (
          <div className="plan-column" key={index}>
            <PricingCard
              name={plan.name}
              price={plan.price}
              originalPrice={plan.originalPrice}
              discount={plan.discount}
              isFeatured={plan.featured}
              location={plan.location}
              period={period}
            />
            <EssentialFeaturesCard features={plan.features} />
            {plan.addons && plan.addons.length > 0 ? (
              <AddonFeaturesCard features={plan.addons} planName={plan.name} />
            ) : (
              <div className="addon-placeholder" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SharedPricingTable;
