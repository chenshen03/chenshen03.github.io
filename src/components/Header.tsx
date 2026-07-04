import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStore } from '../store/useStore';
import { Moon, Sun, Languages } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme, language, setLanguage } = useStore();

  const handleLanguageChange = () => {
    const newLang = language === 'en' ? 'zh' : 'en';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          Shen Chen
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {['home', 'publications', 'awards', 'opensource', 'services'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t(`header.${item}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={handleLanguageChange}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
            aria-label="Toggle Language"
          >
            <Languages size={20} />
            <span className="sr-only">Switch Language</span>
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
