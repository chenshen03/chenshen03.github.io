import React from 'react';
import { useTranslation } from 'react-i18next';
import { services } from '../../store/mockData';
import { Users } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'zh';

  return (
    <section id="services" className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
        <span className="bg-green-500 w-2 h-8 mr-3 rounded-full"></span>
        {t('sections.services')}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div 
            key={service.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
                <Users size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {service.role[lang] || service.role.en}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {service.items.map((item, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
