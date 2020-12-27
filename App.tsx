import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'react-native';

import { AppContext } from './context/AppContext';

import DrawerStack from './components/ShopNavigation';

import { ProductInterface } from './interfaces/product-interface';
import { OrderInterface } from './interfaces/order-interface';

import { STORAGE_KEY_CART } from './config/storage-keys';

const App: () => React.ReactNode = () => {
  const [isStorageDataRead, setIsStorageDataRead] = useState<boolean>(false);
  const [cart, setCart] = useState<ProductInterface[]>([]);
  const [orders, setOrders] = useState<OrderInterface[]>([]);

  const storeData = async (array: ProductInterface[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_CART, JSON.stringify(array));
    } catch (error) {
      console.log(error);
    }
  };

  const readData = async () => {
    try {
      const storageArray = await AsyncStorage.getItem(STORAGE_KEY_CART);

      if (storageArray) {
        setCart(JSON.parse(storageArray));
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
      storeData(cart);
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
