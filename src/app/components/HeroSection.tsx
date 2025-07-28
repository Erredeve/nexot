'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { scrollToSection } from '@/utils/scroll';

export default function HeroSection() {
  const { translations } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-blue-900 to-blue-800 pt-24 md:pt-28">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex items-center justify-center flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-5xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {translations.hero.title}
          </h1>
          <p className="text-2xl mb-4 text-orange-400">
            {translations.hero.subtitle}
          </p>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            {translations.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors"
            >
              {translations.nav.cta}
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('services')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-50 transition-colors"
            >
              {translations.hero.cta}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
