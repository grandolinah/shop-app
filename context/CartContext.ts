import { useContext, createContext } from 'react';

import { ProductInterface } from '../interfaces/product-interface';

export type CartContextType = {
  cart: ProductInterface[];
  setCart: (cart: ProductInterface[]) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: (cart) => console.warn('no provider'),
});

export const useCart = () => useContext(CartContext);
