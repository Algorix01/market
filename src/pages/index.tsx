import Image from 'next/image'
import Offering from '../components/Offering';
import { Heart, Star, Coffee } from 'react-feather';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Brand from '../components/Brand'
import { Layout } from '@/components/Layout';

const Home: React.FC = () => {  

  
  const offerings = [
    {
      id: '1',
      title: 'Manage Subscriptions',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      icon: <Heart size={32} />,
    },
    {
      id: '2',
      title: 'AI Developer Portal',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
      icon: <Star size={32} />,
    },
    {
      id: '3',
      title: 'Browse AI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      icon: <Coffee size={32} />,
    },
    {
      id: '4',
      title: 'Train your AI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      icon: <Coffee size={32} />,
    },
    {
      id: '5',
      title: 'Dashboard',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      icon: <Star size={32} />,
    },
    {
      id: '6',
      title: 'Synthetic Data Generator',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      icon: <Heart size={32} />,
    },
  ];
  const router = useRouter()

  const handleClick = (id: string) => {
    router.push(`/offerings/${id}`)
  }

  return (    
    <div className="fixed top-0 flex w-full bg-gray-700 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="flex flex-col h-screen justify-between">
        <Brand />
        <main className="flex flex-grow justify-center items-center p-16 mx-auto">
          <div className="p-4 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {offerings.map((offering) => (
              <Link href={`/offerings/${offering.id}`} key={offering.id} onClick={() => handleClick(offering.id)}>
                <Offering title={offering.title} icon={offering.icon} description={offering.description} id={offering.id} />
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}


export default Home;
