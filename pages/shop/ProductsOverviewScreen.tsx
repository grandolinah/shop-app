import React from 'react';
import { View, Text, FlatList } from 'react-native';

import PRODUCTS from '../../data/dummy-data';

const ProductsOverviewScreen = () => {
  return (
    <View>
      <Text>ProductsOverviewScreen</Text>
      <FlatList
        data={PRODUCTS}
        renderItem={(itemData) => (
          <Text>{itemData.item.title}</Text>
        )}
      />
    </View>
  );
};

export default ProductsOverviewScreen;
