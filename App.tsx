import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, StatusBar } from 'react-native';

import { CardContext } from './context/CartContext';
import ShopNavigation from './components/ShopNavigation';
import { Product } from './interfaces/product-interface';

const STORAGE_KEY = '@storage_Card'; // TODO config

const App: () => React.ReactNode = () => {
  const [isStorageDataRead, setIsStorageDataRead] = useState<boolean>(false)
  const [cart, setCart] = useState<Product[]>([]);

  console.log(cart);
  const storeData = async (array: Product[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(array));
    } catch (error) {
      console.log(error);
    }
  };

  const readData = async () => {
    try {
      const storageArray = await AsyncStorage.getItem(STORAGE_KEY);

      if (storageArray) {
        setCart(JSON.parse(storageArray));
        setIsStorageDataRead(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isStorageDataRead) {
      readData();
    }
  });

  useEffect(() => {
    if (isStorageDataRead) {
      storeData(cart);
    }
  }, [cart]);

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
