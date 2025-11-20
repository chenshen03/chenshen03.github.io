import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-8 mt-12 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>{t('footer.copyright')}</p>
        <p className="mt-2">
          Built with React, TypeScript, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
