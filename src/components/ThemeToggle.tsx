import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <FaSun className="text-yellow-400" size={20} />
      ) : (
        <FaMoon className="text-gray-700" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;