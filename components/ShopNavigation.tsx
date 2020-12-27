import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProductsOverviewScreen from '../pages/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../pages/shop/ProductDetailScreen';
import OrdersScreen from '../pages/shop/OrdersScreen';
import CartScreen from '../pages/shop/CartScreen';

import HeaderButton from './UI/HeaderButton';

import { COLORS } from '../config/colors';

export type ShopNavigationParamList = {
  ProductDetail: {
    item: {
      title: string;
    };
  };
  ProductOverview: {};
  Cart: {};
};

const ShopNavigationStack = createStackNavigator<ShopNavigationParamList>();

const ShopNavigation = () => {
  return (
    <ShopNavigationStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: COLORS.white,
          fontFamily: 'RobotoMono-Bold',
        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? COLORS.maroonFlush : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? COLORS.white : COLORS.maroonFlush,
      }}>
      <ShopNavigationStack.Screen
        name="ProductOverview"
        component={ProductsOverviewScreen}
        options={({ route, navigation }) => ({
          headerTitle: 'All Products',
          headerRight: () => (
            <HeaderButton
              onPressed={() => {
                navigation.navigate('Cart');
              }}
              icon="ios-cart"
            />
          ),
          headerLeft: () => (
            <HeaderButton
              onPressed={() => {
                navigation.toggleDrawer();
              }}
              icon="ios-menu"
            />
          ),
        })}
      />
      <ShopNavigationStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ route }) => ({ headerTitle: route.params.item.title })}
      />
      <ShopNavigationStack.Screen name="Cart" component={CartScreen} />
    </ShopNavigationStack.Navigator>
  );
};

const OrdersStack = createStackNavigator();

const Orders = () => {
  return (
    <OrdersStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: COLORS.white,
          fontFamily: 'RobotoMono-Bold',
        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? COLORS.maroonFlush : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? COLORS.white : COLORS.maroonFlush,
      }}>
      <OrdersStack.Screen
        name="Orders"
        component={OrdersScreen}
        options={({ route, navigation }) => ({
          headerTitle: 'Orders',
          headerLeft: () => (
            <HeaderButton
              onPressed={() => {
                navigation.toggleDrawer();
              }}
              icon="ios-menu"
            />
          ),
        })}
      />
    </OrdersStack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Shop" component={ShopNavigation} />
        <Drawer.Screen name="Orders" component={Orders} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerStack;
