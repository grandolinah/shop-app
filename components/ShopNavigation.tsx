import React from 'react';
import { Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductsOverviewScreen from '../pages/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../pages/shop/ProductDetailScreen';
import OrdersScreen from '../pages/shop/OrdersScreen';
import CardScreen from '../pages/shop/CardScreen';

import { COLORS} from '../config/colors';

const ShopNavigationStack = createStackNavigator();
const ShopNavigation = () => {
  return (
    <NavigationContainer>
      <ShopNavigationStack.Navigator screenOptions={{
        headerTitle: 'All Products',
        headerTitleStyle: {
          color: COLORS.white,
          fontFamily: 'RobotoMono-Bold',
        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? COLORS.maroonFlush: '',
        },
        headerTintColor: Platform.OS === 'android' ? COLORS.white : COLORS.maroonFlush,
      }}>
        <ShopNavigationStack.Screen name="ProductOverview" component={ProductsOverviewScreen} />
      </ShopNavigationStack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigation;
