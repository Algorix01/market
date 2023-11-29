import React from 'react';
import { FaBars, FaList, FaStar } from 'react-icons/fa';

const Leftnav: React.FC = () => {
  return (
    <nav className="relative flex-grow w-1/3 p-4 max-w-fit  bg-gray-700 hidden lg:flex flex-col justify-start h-full">
      <ul>
        <li className="mb-4 p-0 text-white flex items-center">            
            <FaBars className="w-6 h-6 mr-2" />
            Main Menu      
        </li>
        <li className="mb-4 text-white flex items-center">
          <FaList className="w-6 h-6 mr-2" />
          Categories
        </li>
        <li className="mb-4 text-white flex items-center">
          <FaStar className="w-6 h-6 mr-2" />
          Favorites
        </li>
      </ul>
    </nav>
  );
};

export default Leftnav;
