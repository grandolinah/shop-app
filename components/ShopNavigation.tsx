import React from 'react';
import { Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductsOverviewScreen from '../pages/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../pages/shop/ProductDetailScreen';
import OrdersScreen from '../pages/shop/OrdersScreen';
import CartScreen from '../pages/shop/CartScreen';

import HeaderButton from './UI/HeaderButton';

import { COLORS} from '../config/colors';

export type ShopNavigationParamList = {
  ProductDetail: {
    item: {
      title: string;
    };
  },
  ProductOverview: {},
  Cart: {},
};

const ShopNavigationStack = createStackNavigator<ShopNavigationParamList>();
const ShopNavigation = () => {
  return (
    <NavigationContainer>
      <ShopNavigationStack.Navigator screenOptions={{
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
        <ShopNavigationStack.Screen name="ProductOverview" component={ProductsOverviewScreen}
        options={({ route, navigation }) => ({
          headerTitle: 'All Products',
          headerRight: () => (
            <HeaderButton
              onPressed={() => {
                navigation.navigate('Cart')
              }}
              icon='ios-cart'
            />
          ),
        })}
        />
        <ShopNavigationStack.Screen name="ProductDetail" component={ProductDetailScreen} options={({ route }) => ({ headerTitle: route.params.item.title })}/>
        <ShopNavigationStack.Screen name="Cart" component={CartScreen} />
      </ShopNavigationStack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigation;
