import React, { createContext, useContext, useState } from 'react';

interface Promo {
  message: string;
  code: string;
  endDate: string;
  url: string;
}

interface PromoContextType {
  promos: {
    hosting: Promo;
    email: Promo;
  };
  setPromos: React.Dispatch<React.SetStateAction<{
    hosting: Promo;
    email: Promo;
  }>>;
}

const PromoContext = createContext<PromoContextType | undefined>(undefined);

export const usePromo = () => {
  const context = useContext(PromoContext);
  if (!context) {
    throw new Error('usePromo must be used within a PromoProvider');
  }
  return context;
};

interface PromoProviderProps {
  children: React.ReactNode;
}

export const PromoProvider: React.FC<PromoProviderProps> = ({ children }) => {
  // Set end date to 3 days from now
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);
  
  const [promos, setPromos] = useState({
    hosting: {
      message: 'Get 50% off all hosting plans for your first year!',
      code: 'LAUNCH50',
      endDate: endDate.toISOString(),
      url: '#',
    },
    email: {
      message: 'Professional email hosting for just Rp 15,000/month!',
      code: 'EMAIL15K',
      endDate: endDate.toISOString(),
      url: '#',
    },
  });
  
  return (
    <PromoContext.Provider value={{ promos, setPromos }}>
      {children}
    </PromoContext.Provider>
  );
};