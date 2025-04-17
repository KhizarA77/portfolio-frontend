import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-800 dark:text-white transition-colors duration-300">
      <div className="container py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          Khizar Asad
        </Link>

        <div className="flex items-center">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Mobile menu button */}
          <button className="ml-4 md:hidden text-dark dark:text-white" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8 text-lg ml-6">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-md p-4 md:hidden flex flex-col space-y-4">
            <a href="#about" className="hover:text-primary transition-colors" onClick={toggleMenu}>About</a>
            <a href="#projects" className="hover:text-primary transition-colors" onClick={toggleMenu}>Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors" onClick={toggleMenu}>Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;