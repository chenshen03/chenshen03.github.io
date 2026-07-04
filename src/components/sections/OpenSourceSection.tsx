import React from 'react';
import { useTranslation } from 'react-i18next';
import { openSourceProjects } from '../../store/mockData';
import { Github, Star, ExternalLink } from 'lucide-react';

const OpenSourceSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'zh';

  return (
    <section id="opensource" className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
        <span className="bg-purple-500 w-2 h-8 mr-3 rounded-full"></span>
        {t('sections.opensource')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {openSourceProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
                  <Github size={20} />
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1"
                >
                  {project.name}
                  <ExternalLink size={14} className="opacity-50" />
                </a>
              </div>
              <div className="flex items-center gap-1 text-sm text-yellow-500 font-medium">
                <Star size={14} fill="currentColor" />
                {project.stars}
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description[lang] || project.description.en}
            </p>

            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                {project.role[lang] || project.role.en}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenSourceSection;
