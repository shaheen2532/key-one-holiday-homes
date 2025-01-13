import '../assets/css/tailwind.css';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
  })

export const metadata = {
    title: 'Key One Holiday Homes',
    keywords: 'Holiday, Holiday homes, Property, List, Asset, Management',
    description: 'List your property with Key One Holiday Homes'
}

const RootLayout = ({children}) => {
    return (
        <html className={`${inter.variable} font-sans`}>
            <body className="bg-gray-100">
                <div className="ml-28"><Navbar /></div>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}

export default RootLayout;