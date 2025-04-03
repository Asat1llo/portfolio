import { language } from '../data/localization';
import { Menu, X } from "lucide-react";
import { useState, useEffect } from 'react';

export const ContactButton = ({ lan, setMenuOpen, menuOpen }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 770);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <button 
      onClick={() => setMenuOpen(!menuOpen)} 
      className={
        isMobile 
          ? `md:hidden focus:outline-none pr-4`: isMobile && menuOpen ?  `bg-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-purple-500 transition-all duration-300`
          : `bg-black text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition-all duration-300`
      }
    >
      {isMobile 
        ? (menuOpen ? <X size={28} /> : <Menu size={28} />) 
        : language[lan].header.button
      }
    </button>
  );
};
