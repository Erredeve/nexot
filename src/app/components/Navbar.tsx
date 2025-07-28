'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/context/LanguageContext';
import { scrollToSection } from '@/utils/scroll';
const languages = [
  { code: 'PT-BR' as const, name: 'Português', flag: '🇧🇷' },
  { code: 'EN' as const, name: 'English', flag: '🇺🇸' },
  { code: 'ES' as const, name: 'Español', flag: '🇪🇸' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { language, setLanguage, translations } = useLanguage();
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  const navItems = [
    { name: translations.nav.about, href: '#about' },
    { name: translations.nav.services, href: '#services' },
    { name: translations.nav.differentials, href: '#values' },
    { name: translations.nav.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-900/90 backdrop-blur-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center cursor-pointer"
          >
            <span className="text-xl font-bold text-white hover:text-orange-500 transition-colors">Nexo</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="text-white hover:text-orange-500 transition-colors"
              >
                {item.name}
              </button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              {translations.nav.cta}
            </motion.button>

            {/* Language Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center bg-white/10 px-3 py-2 rounded-lg text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">{currentLanguage.flag}</span>
                <ChevronDownIcon className="h-4 w-4 ml-1.5" />
              </motion.button>

              {isLanguageDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLanguageDropdownOpen(false);
                      }}
                      className={`flex items-center space-x-3 w-full px-4 py-2 text-left hover:bg-orange-100 transition-colors ${
                        currentLanguage.code === lang.code ? 'text-orange-500 bg-orange-50' : 'text-gray-800'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className="text-white hover:text-orange-500 transition-colors px-4 py-2 text-left w-full"
                  onClick={() => {
                    scrollToSection(item.href.substring(1));
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors mx-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {translations.nav.cta}
              </motion.button>

              {/* Mobile Language Options */}
              <div className="px-4 py-2">
                <div className="flex flex-col space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                        currentLanguage.code === lang.code
                          ? 'text-orange-500 bg-white/10'
                          : 'text-white hover:text-orange-500 hover:bg-white/5'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
