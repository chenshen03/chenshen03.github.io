import React from 'react';
import { useTranslation } from 'react-i18next';
import { profileData } from '../store/mockData';
import { Mail, Github, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfileCard: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'zh';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-colors duration-300"
    >
      <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
      <div className="px-6 pb-8">
        <div className="relative flex justify-between items-end -mt-12 mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden bg-gray-200">
              <img
                src={profileData.avatar}
                alt={profileData.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150';
                }}
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "rgb(243, 244, 246)",
                  textAlign: "start",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  borderRadius: "0px",
                  margin: "0px",
                  padding: "0px"
                }} />
            </div>
          </div>
          <div className="flex space-x-3 mb-2">
            <a href={`mailto:${profileData.social.email}`} className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors">
              <Mail size={18} />
            </a>
            <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <Github size={18} />
            </a>
            <a href={profileData.social.scholar} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors">
              <GraduationCap size={18} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{profileData.name}</h1>
            <p className="text-blue-600 dark:text-blue-400 font-medium">{t('profile.role')}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{profileData.university}</p>
          </div>

          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 uppercase tracking-wider mb-2">
              {t('profile.about')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              {profileData.about[lang] || profileData.about.en}
            </p>
          </div>

          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 uppercase tracking-wider mb-2">
              {t('profile.interests')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {(profileData.interests[lang] || profileData.interests.en).map((interest, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
             <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 uppercase tracking-wider mb-2">
              {t('profile.education')}
            </h3>
            <div className="space-y-3">
              {profileData.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{edu.school}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {/* @ts-ignore */}
                    {typeof edu.degree === 'object' ? (edu.degree[lang] || edu.degree.en) : edu.degree}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {/* @ts-ignore */}
                    {typeof edu.year === 'object' ? (edu.year[lang] || edu.year.en) : edu.year}
                  </span>
                  
                  {/* @ts-ignore */}
                  {(edu.lab || edu.supervisor) && (
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400 space-y-0.5">
                      {/* @ts-ignore */}
                      {edu.lab && (
                        <div>
                          Lab: <a href={edu.lab.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{edu.lab.name}</a>
                        </div>
                      )}
                      {/* @ts-ignore */}
                      {edu.supervisor && (
                        <div>
                          Supervisor: <a href={edu.supervisor.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{edu.supervisor.name}</a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
