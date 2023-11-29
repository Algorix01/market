import Link from 'next/link';
import router from 'next/router';
import React from 'react';

interface SubOfferingsProps {
    offerings: { 
        title: string; 
        description: string 
        name: string
    }[];
}

const handleClick = (name: string) => {
    router.push(`/actions/${name}`)
  }

const SubOfferings: React.FC<SubOfferingsProps> = ({ offerings }) => {
  return (
    <div className="flex flex-col p-2 mt-4">
      <h2 className="text-2xl font-semibold mb-8 text-white">Additional Offerings</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {offerings.map((offering, index) => (
            <Link href={`/offerings/${offering.name}`} key={index} onClick={() => handleClick(offering.name)}>
                <div key={index} className="p-4 bg-white rounded-md shadow-md">
                    <h3 className="text-md font-semibold mb-4">{offering.title}</h3>
                    <p className="text-sm">{offering.description}</p>
                </div>
            </Link>
        
        ))}
      </div>
    </div>
  );
};

export default SubOfferings;
