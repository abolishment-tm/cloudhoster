// File: src/contexts/CartContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface CartContextType {
  itemCount: number;
  addItem: () => void;
  removeItem: () => void;
  resetCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [itemCount, setItemCount] = useState(0);

  const addItem = () => setItemCount((prev) => prev + 1);
  const removeItem = () => setItemCount((prev) => Math.max(0, prev - 1));
  const resetCart = () => setItemCount(0);

  return (
    <CartContext.Provider value={{ itemCount, addItem, removeItem, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
