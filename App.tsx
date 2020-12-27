import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { CardContext } from './context/CartContext';

import ShopNavigation from './components/ShopNavigation';

import { Product } from './interfaces/product-interface';

// TODO save cart to device storage

const App: () => React.ReactNode = () => {
  const [cart, setCart] = React.useState<Product[]>([
    { price: 10, name: 'tshirt' },
  ]);

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
