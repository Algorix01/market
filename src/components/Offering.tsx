import { Feather as Icon } from 'react-feather';
import { useRouter } from 'next/router';

interface OfferingProps {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const Offering: React.FC<OfferingProps> = ({ title, description, icon }) => {
  return (
    <div>
     <div className="p-4 bg-white rounded-md shadow-md flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <div className="mb-4">
            {icon}
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Offering;
