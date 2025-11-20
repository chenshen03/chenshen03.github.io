import React from 'react';
import { useTranslation } from 'react-i18next';
import { awards } from '../../store/mockData';
import Collapse from '../Collapse';
import { Trophy } from 'lucide-react';

const AwardsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'zh';

  return (
    <section id="awards" className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
        <span className="bg-yellow-500 w-2 h-8 mr-3 rounded-full"></span>
        {t('sections.awards')}
      </h2>
      
      <div className="space-y-4">
        {awards.map((award) => (
          <Collapse 
            key={award.id}
            title={
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full text-yellow-600 dark:text-yellow-400">
                  <Trophy size={18} />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 w-full">
                  <span className="text-gray-900 dark:text-white font-semibold">
                    {award.title[lang] || award.title.en}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 sm:ml-auto bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                    {award.year}
                  </span>
                </div>
              </div>
            }
          >
            <p className="text-gray-600 dark:text-gray-300 ml-11">
              {award.description[lang] || award.description.en}
            </p>
          </Collapse>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
