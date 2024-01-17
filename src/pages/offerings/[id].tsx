import React from 'react';
import { useRouter } from 'next/router';
import Brand from '../../components/Brand';
import Leftnav from '../../components/Leftnav';
import OfferingDetails from '../../components/OfferingDetails';
import SubOfferings from '../../components/SubOfferings';
import { Layout } from '@/components/Layout';

const Offerings: React.FC = () => {
  
  const subOfferings = [
    {
      title: 'Publish AI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      name: 'publish-ai'
    },
    {
      title: 'Additional Offering 2',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      name: 'additional-offering-2'
    },
    {
      title: 'Additional Offering 3',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      name: 'additional-offering-3'
    },
    {
      title: 'Additional Offering 4',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      name: 'additional-offering-4'
    },
    {
      title: 'Additional Offering 5',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      name: 'additional-offering-5'
    },
    {
      title: 'Additional Offering 6',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      name: 'additional-offering-6'
    },
  ];

  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>          
      <div className="flex flex-auto">
        <Leftnav />
        <div className="flex relative justify-center items-center p-8 mx-auto">          
          <SubOfferings offerings={subOfferings} />
        </div>
      </div>
      
    </Layout>
  );
};

export default Offerings;
