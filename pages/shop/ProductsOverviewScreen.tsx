import React from 'react';
import { View, FlatList } from 'react-native';

import PRODUCTS from '../../data/dummy-data';

import { useCard } from '../../context/CartContext';

import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = ({ navigation }) => {
  const { cart, setCart } = useCard();

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
              navigation.navigate('ProductDetail', {
                item: itemData.item,
              });
            }}
            onAddToCard={() => {
              setCart([...cart, {
                name: itemData.item.title,
                price: itemData.item.price,
              }]);
            }}
          />
        )}
      />
    </View>
  );
};

export default ProductsOverviewScreen;
