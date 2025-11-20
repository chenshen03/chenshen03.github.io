import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '../components/ProfileCard';
import ActivitySection from '../components/sections/ActivitySection';
import PublicationsSection from '../components/sections/PublicationsSection';
import AwardsSection from '../components/sections/AwardsSection';
import ServicesSection from '../components/sections/ServicesSection';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar - Profile */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-6">
          <ProfileCard />
        </div>

        {/* Right Content - Sections */}
        <div className="lg:col-span-8 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ActivitySection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PublicationsSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AwardsSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ServicesSection />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
