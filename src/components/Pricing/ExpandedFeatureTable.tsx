import React from 'react';
import './ExpandedFeatureTable.css';

const ExpandedFeatureTable: React.FC = () => {
  const features = [
    { label: 'Lokasi Server', values: ['Multi-Lokasi ??', 'Multi-Lokasi ??', 'Multi-Lokasi ??'], tooltip: 'Server tersedia di Jakarta, Singapore, London, USA' },
    { label: 'NVMe Storage', values: ['5 GB', '10 GB', '20 GB'] },
    { label: 'CPU Core', values: ['2 Core', '2 Core', '2 Core'] },
    { label: 'RAM', values: ['1 GB', '1 GB', '2 GB'] },
    { label: 'Bandwidth', values: ['Unlimited', 'Unlimited', 'Unlimited'] },
    { label: 'Free Domain', values: ['??', '??', '??'], tooltip: 'Gratis domain hanya untuk paket tahunan dan 3 tahunan' },
    { label: 'Free Website Migration', values: ['?', '?', '?'] },
    { label: 'Backup Harian', values: ['??', '??', '??'], tooltip: 'Backup otomatis disimpan selama 7 hari' },
    { label: 'LiteSpeed Cache', values: ['?', '?', '?'] },
    { label: 'Support Berbahasa Indonesia', values: ['?', '?', '?'] },
    { label: 'Harga Bulanan', values: ['Rp. 25.000', 'Rp. 40.000', 'Rp. 70.000'] },
    { label: 'Harga Tahunan', values: ['Rp. 300.000', 'Rp. 480.000', 'Rp. 840.000'] },
    { label: 'Harga 3 Tahunan', values: ['Rp. 900.000', 'Rp. 1.440.000', 'Rp. 2.520.000'] }
  ];

  const plans = ['Personal', 'Pro', 'Super'];

  return (
    <div className="expanded-feature-table">
      <table>
        <thead>
          <tr>
            <th>Fitur</th>
            {plans.map((plan) => (
              <th key={plan}>{plan}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, idx) => (
            <tr key={idx}>
              <td>
                {feature.label}
                {feature.tooltip && (
                  <span className="tooltip">
                    ?<span className="tooltip-text">{feature.tooltip}</span>
                  </span>
                )}
              </td>
              {feature.values.map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpandedFeatureTable;
