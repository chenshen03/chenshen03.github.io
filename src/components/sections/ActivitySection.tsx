import React from 'react';
import { useTranslation } from 'react-i18next';
import { activities } from '../../store/mockData';
import Collapse from '../Collapse';
import { Calendar } from 'lucide-react';

const ActivitySection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'zh';

  return (
    <section id="home" className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
        <span className="bg-blue-500 w-2 h-8 mr-3 rounded-full"></span>
        {t('sections.activity')}
      </h2>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <Collapse 
            key={activity.id}
            title={
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-900 dark:text-white font-semibold">
                  {activity.title[lang] || activity.title.en}
                </span>
                <span className="flex items-center text-sm text-gray-500 dark:text-gray-400 sm:ml-auto">
                  <Calendar size={14} className="mr-1" />
                  {activity.date}
                </span>
              </div>
            }
            defaultOpen={activity.id === 1}
          >
            {activity.papers ? (
              <div className="space-y-2">
                {activity.papers.map((paper, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-300">
                    {paper[lang] || paper.en}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-300">
                {activity.description?.[lang] || activity.description?.en}
              </p>
            )}
          </Collapse>
        ))}
      </div>
    </section>
  );
};

export default ActivitySection;
