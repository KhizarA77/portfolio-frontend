import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container text-center">
        <p className="flex items-center justify-center">
          &copy; {currentYear} Khizar Asad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;