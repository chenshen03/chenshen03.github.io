import React from 'react';
import { useTranslation } from 'react-i18next';
import { awards } from '../../store/mockData';
import Collapse from '../Collapse';
import { Trophy, ExternalLink } from 'lucide-react';

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
        {awards.map((award) => {
          const titleText = award.title[lang] || award.title.en;
          
          return (
            <Collapse 
              key={award.id}
              title={
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full text-yellow-600 dark:text-yellow-400 flex-shrink-0">
                      <Trophy size={18} />
                    </div>
                    <span className="text-gray-900 dark:text-white font-semibold text-lg leading-tight">
                      {titleText}
                    </span>
                  </div>
                  {award.authors && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-normal ml-11">
                      {award.authors}
                    </div>
                  )}
                  <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium ml-11">
                    {award.organization.replace(String(award.year), '').trim()} · {award.year}
                  </div>
                </div>
              }
            >
              <div className="space-y-4 ml-11">
                {award.abstract && (
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    <span className="font-semibold text-gray-900 dark:text-white mr-2">Details:</span>
                    {award.abstract[lang] || award.abstract.en}
                  </p>
                )}

              </div>
            </Collapse>
          );
        })}
      </div>
    </section>
  );
};

export default AwardsSection;
