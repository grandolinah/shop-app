import { useContext, createContext } from 'react';

import { ProductInterface } from '../interfaces/product-interface';
import { OrderInterface } from '../interfaces/order-interface';

export type AppContextType = {
  cart: ProductInterface[];
  setCart: (cart: ProductInterface[]) => void;
  orders: OrderInterface[];
  setOrders: (order: OrderInterface[]) => void;
};

export const AppContext = createContext<AppContextType>({
  cart: [],
  setCart: (cart) => console.warn('no provider'),
  orders: [],
  setOrders: (order) => console.warn('no provider'),
});

export const useAppContext = () => useContext(AppContext);
