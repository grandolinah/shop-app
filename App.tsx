import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'react-native';

import { AppContext } from './context/AppContext';

import DrawerStack from './components/ShopNavigation';

import { ProductInterface } from './interfaces/product-interface';
import { OrderInterface } from './interfaces/order-interface';

import { STORAGE_KEY_CART, STORAGE_KEY_ORDERS } from './config/storage-keys';

const App: () => React.ReactNode = () => {
  const [isStorageDataRead, setIsStorageDataRead] = useState<boolean>(false);
  const [cart, setCart] = useState<ProductInterface[]>([]);
  const [orders, setOrders] = useState<OrderInterface[]>([]);

  console.log(orders);

  const storeData = async (cart: ProductInterface[], orders: OrderInterface[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_CART, JSON.stringify(cart));

      await AsyncStorage.setItem(STORAGE_KEY_ORDERS, JSON.stringify(orders));
    } catch (error) {
      console.log(error);
    }
  };

  const readData = async () => {
    try {
      const storageArrayCart = await AsyncStorage.getItem(STORAGE_KEY_CART);
      const storageArrayOrders = await AsyncStorage.getItem(STORAGE_KEY_ORDERS);

      if (storageArrayCart) {
        setCart(JSON.parse(storageArrayCart));
      }

      if (storageArrayOrders) {
        setOrders(JSON.parse(storageArrayOrders));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isStorageDataRead) {
      readData();
      setIsStorageDataRead(true);
    }
  });

  useEffect(() => {
    if (isStorageDataRead) {
      storeData(cart, orders);
    }
  }, [cart, isStorageDataRead]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppContext.Provider value={{ cart, setCart, orders, setOrders }}>
        <DrawerStack />
      </AppContext.Provider>
    </>
  );
};

export default App;
