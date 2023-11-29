import React from 'react';

interface OfferingDetailsProps {
  title: string;
  description: string;
}

const OfferingDetails: React.FC<OfferingDetailsProps> = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default OfferingDetails;
