'use client';

import { motion } from 'framer-motion';
import { ClockIcon, CheckBadgeIcon, AcademicCapIcon, GlobeAmericasIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutSection() {
  const { translations } = useLanguage();
  const stats = [
    {
      icon: ClockIcon,
      value: '10+',
      label: translations.about.experience
    },
    {
      icon: CheckBadgeIcon,
      value: '500+',
      label: translations.about.projects
    },
    {
      icon: UserGroupIcon,
      value: '200+',
      label: translations.about.clients
    },
    {
      icon: GlobeAmericasIcon,
      value: '5',
      label: translations.about.countries
    }
  ];

  return (
    <section id="about" className="py-20 pt-32 md:pt-36 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            {translations.about.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {translations.about.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6 rounded-xl bg-blue-50"
            >
              <item.icon className="h-12 w-12 mx-auto text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
