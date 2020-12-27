import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'react-native';

import { CardContext } from './context/CartContext';

import ShopNavigation from './components/ShopNavigation';

import { ProductInterface } from './interfaces/product-interface';

import { STORAGE_KEY_CART } from './config/storage-keys';

const App: () => React.ReactNode = () => {
  const [isStorageDataRead, setIsStorageDataRead] = useState<boolean>(false);
  const [cart, setCart] = useState<ProductInterface[]>([]);

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
      <CardContext.Provider value={{ cart, setCart }}>
        <ShopNavigation />
      </CardContext.Provider>
    </>
  );
};

export default App;
