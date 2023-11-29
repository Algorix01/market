import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import Brand from './Brand';

interface LayoutProps {
    children: ReactNode;    
}

const Layout:React.FC<LayoutProps> = ({ children }) =>{
    const router = useRouter();

    return (
        <div className="fixed top-0 flex w-full bg-gray-700 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="flex flex-col h-screen justify-between">
                <Brand />
                {children}
            </div>
        </div>
    );
}

export { Layout };