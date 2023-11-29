import React from 'react';
import { useRouter } from 'next/router';
import Brand from '../../components/Brand';
import Leftnav from '../../components/Leftnav';
import SubOfferings from '../../components/SubOfferings';
import { Layout } from '@/components/Layout';
import Card from '@/components/Card';

const Actions: React.FC = () => {
  

  const router = useRouter();
  const { name } = router.query;

  return (
    <Layout>      
      <div className="flex">
        <Leftnav />
        <div className="flex justify-center items-center p-16 mx-auto">
          <Card />
        </div>
      </div>
    </Layout>
  );
};

export default Actions;
