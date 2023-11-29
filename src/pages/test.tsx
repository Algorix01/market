import { Layout } from '@/components/Layout'
import Leftnav from '@/components/Leftnav'
import React from 'react'

const test: React.FC = () => {
  return (
    <Layout>     
        <div className="flex"></div>   
        <Leftnav />
        <div></div>
    </Layout>
  )
}

export default test