import React from 'react';
import { View, Text, FlatList } from 'react-native';

import PRODUCTS from '../../data/dummy-data';
import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={PRODUCTS}
        renderItem={(itemData) => (
          <ProductItem
            title={itemData.item.title}
            price={itemData.item.price}
            imageUrl={itemData.item.imageUrl}
            onViewDetail={() => {
              console.log('pressed');
              navigation.navigate('ProductDetail', {
                item: itemData.item,
              });
            }}
            onAddToCard={() => {
              console.log('pressed');
            }}
          />
        )}
      />
    </View>
  );
};

export default ProductsOverviewScreen;
