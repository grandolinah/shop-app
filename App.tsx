import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import ShopNavigation from './components/ShopNavigation';

const App: () => React.ReactNode = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ShopNavigation />
    </>
  );
};

export default App;
