'use client';

import React, { createContext, useContext, useState } from 'react';
import { pt } from '@/translations/pt-BR';
import { en } from '@/translations/en';
import { es } from '@/translations/es';
import { Translation } from '@/translations/types';

type Language = 'PT-BR' | 'EN' | 'ES';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Translation;
}

const translations = {
  'PT-BR': pt,
  'EN': en,
  'ES': es,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('PT-BR');

  const value = {
    language,
    setLanguage,
    translations: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
