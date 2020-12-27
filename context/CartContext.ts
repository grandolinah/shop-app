import React, { useContext, createContext } from 'react';

import { ProductInterface } from '../interfaces/product-interface';

export type CardContextType = {
  cart: ProductInterface[];
  setCart: (cart: ProductInterface[]) => void;
};

export const CardContext = createContext<CardContextType>({
  cart: [],
  setCart: (cart) => console.warn('no provider'),
});

export const useCard = () => useContext(CardContext);
