import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container text-center">
        <p className="flex items-center justify-center">
          &copy; {currentYear} Khizar Asad. Made with <FaHeart className="text-red-500 mx-1" /> using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;