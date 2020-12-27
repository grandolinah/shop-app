import React, { useContext, createContext } from 'react';

import { Product } from '../interfaces/product-interface';

export type CardContextType = {
  cart: Product[];
  setCart: (cart: Product[]) => void;
};

export const CardContext = createContext<CardContextType>({ cart: [], setCart: cart => console.warn('no provider')});

export const useCard = () => useContext(CardContext);
