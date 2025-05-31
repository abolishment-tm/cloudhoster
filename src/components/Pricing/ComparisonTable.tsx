import React from 'react';
import './ComparisonTable.css';

interface Feature {
  name: string;
  values: string[];
}

interface ComparisonTableProps {
  features: Feature[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ features }) => {
  const plans = ['Personal', 'Pro', 'Super'];

  return (
    <div className="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Fitur</th>
            {plans.map((plan, index) => (
              <th key={index}>{plan}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, i) => (
            <tr key={i}>
              <td>{feature.name}</td>
              {feature.values.map((val, j) => (
                <td key={j}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
