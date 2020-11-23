import React from 'react';
import { View, Text, FlatList } from 'react-native';

import PRODUCTS from '../../data/dummy-data';
import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = () => {
  return (
    <View>
      <Text>ProductsOverviewScreen</Text>
      <FlatList
        data={PRODUCTS}
        renderItem={(itemData) => (
          <ProductItem
            title={itemData.item.title}
            price={itemData.item.price}
            imageUrl={itemData.item.imageUrl}
            onViewDetail={() => {
              console.log('pressed');
            }}
            onAddToCard={() => {
              console.log('pressed');
            }}
          />
        )}
      />
    </View>
  );r
};

export default ProductsOverviewScreen;
