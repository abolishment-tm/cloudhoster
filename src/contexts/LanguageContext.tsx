import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'id';
type Currency = 'idr' | 'usd';

interface LanguageContextType {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  currency: Currency;
  setCurrency: React.Dispatch<React.SetStateAction<Currency>>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');
  const [currency, setCurrency] = useState<Currency>('idr'); // Tambahan

  return (
    <LanguageContext.Provider value={{ language, setLanguage, currency, setCurrency }}>
      {children}
    </LanguageContext.Provider>
  );
};
