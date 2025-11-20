import React from 'react';
import { useTranslation } from 'react-i18next';
import { publications } from '../../store/mockData';
import Collapse from '../Collapse';
import { FileText, ExternalLink, Code } from 'lucide-react';

const PublicationsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'zh';

  return (
    <section id="publications" className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
        <span className="bg-indigo-500 w-2 h-8 mr-3 rounded-full"></span>
        {t('sections.publications')}
      </h2>
      
      <div className="space-y-4">
        {publications.map((pub) => (
          <Collapse 
            key={pub.id}
            title={
              <div className="flex flex-col gap-1">
                <span className="text-gray-900 dark:text-white font-semibold text-lg leading-tight">
                  {pub.title[lang] || pub.title.en}
                </span>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-normal">
                  {pub.authors}
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {pub.conference.replace(String(pub.year), '').trim()} · {pub.year}
                </div>
              </div>
            }
          >
            <div className="space-y-4">
              {/* @ts-ignore - image property might not exist on all items yet */}
              {pub.image && (
                <div className="mt-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  <img 
                    src={pub.image} 
                    alt="Framework Diagram" 
                    className="w-full h-auto object-cover max-h-96"
                  />
                </div>
              )}
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                <span className="font-semibold text-gray-900 dark:text-white mr-2">Abstract:</span>
                {pub.abstract[lang] || pub.abstract.en}
              </p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                {pub.links.pdf && (
                  <a href={pub.links.pdf} className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <FileText size={16} className="mr-2" /> PDF
                  </a>
                )}
                {pub.links.code && (
                  <a href={pub.links.code} className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <Code size={16} className="mr-2" /> Code
                  </a>
                )}
                {pub.links.project && (
                  <a href={pub.links.project} className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <ExternalLink size={16} className="mr-2" /> Project Page
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {pub.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-300 rounded border border-indigo-100 dark:border-indigo-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Collapse>
        ))}
      </div>
    </section>
  );
};

export default PublicationsSection;
