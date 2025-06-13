// src/contexts/LanguageContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'id' | 'en';
type Currency = 'Rp' | 'USD';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');
  const [currency, setCurrency] = useState<Currency>('Rp');

  // Sinkronkan currency saat bahasa berubah
  useEffect(() => {
    setCurrency(language === 'id' ? 'Rp' : 'USD');
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, currency }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
