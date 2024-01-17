import React from 'react';
import { useRouter } from 'next/router';
import Leftnav from '../../components/Leftnav';
import { Layout } from '@/components/Layout';
import Card from '@/components/Card';
import { appConfig } from '@/config';

//const Card = dynamic(() => import('@/components/Card'), { ssr: false });

const Actions: React.FC = () => {
  

  const router = useRouter();
  const { name } = router.query;

  return (
    <Layout>      
      <div className="flex">
        <Leftnav />
        <div className="flex justify-center items-center p-16 mx-auto">
          <Card config={ appConfig } />
        </div>
      </div>
    </Layout>
  );
};

export default Actions;
