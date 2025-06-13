// File: src/components/ShareHosting/AddonFeatures.tsx
import React from 'react';
import './AddonFeatures.css';

interface AddonItem {
  label: string;
}

interface AddonProps {
  plan: 'Elang' | 'Garuda';
}

const AddonFeatures: React.FC<AddonProps> = ({ plan }) => {
  const elangItems: AddonItem[] = [
    { label: 'Unlimited Database' },
    { label: 'Unlimited Emails' },
    { label: '50 Addon Domain' },
  ];

  const garudaItemsBlue: AddonItem[] = [
    { label: 'Unlimited Database' },
    { label: 'Unlimited Emails' },
    { label: 'Unlimited Addon Domain' },
  ];

  const garudaItemsRed: AddonItem[] = [
    { label: '20 MB/s Disk I/O Throughput' },
    { label: 'HTTP/3 Support (QUIC by Google)' },
    { label: 'Free Malware Scanner & Removal' },
  ];

  const renderList = (items: AddonItem[]) =>
    items.map((item, idx) => {
      const [first, ...rest] = item.label.split(' ');
      return (
        <li key={idx}>
          <b>{first}</b> {rest.join(' ')}
        </li>
      );
    });

  return (
    <div className="addon-section">
      {plan === 'Elang' && (
        <div className="addon-box blue-border">
          <ul className="addon-list">{renderList(elangItems)}</ul>
        </div>
      )}

      {plan === 'Garuda' && (
        <>
          <div className="addon-box blue-border">
            <ul className="addon-list">{renderList(garudaItemsBlue)}</ul>
          </div>
          <div className="addon-box red-border">
            <ul className="addon-list">{renderList(garudaItemsRed)}</ul>
          </div>
        </>
      )}
    </div>
  );
};

export default AddonFeatures;
