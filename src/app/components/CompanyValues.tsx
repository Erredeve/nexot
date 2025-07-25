'use client';

import { motion } from 'framer-motion';
import { RocketLaunchIcon, LightBulbIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/context/LanguageContext';

export default function CompanyValues() {
  const { translations } = useLanguage();
  const values = [
    {
      icon: RocketLaunchIcon,
      title: translations.values.mission.title,
      description: translations.values.mission.description
    },
    {
      icon: LightBulbIcon,
      title: translations.values.vision.title,
      description: translations.values.vision.description
    },
    {
      icon: HeartIcon,
      title: translations.values.values.title,
      description: translations.values.values.description
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {translations.values.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6 rounded-xl bg-blue-800/50 backdrop-blur-sm"
            >
              <value.icon className="h-12 w-12 mx-auto text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {value.title}
              </h3>
              <p className="text-blue-100">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
