import React from 'react';
import { View, FlatList } from 'react-native';

import PRODUCTS from '../../data/dummy-data';

import { useAppContext } from '../../context/AppContext';

import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = ({ navigation }) => {
  const { cart, setCart } = useAppContext();

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
            onAddToCart={() => {
              const restProducts = cart.filter(
                (cartItem) => cartItem.title !== itemData.item.title,
              );
              const sameProduct = cart.filter(
                (cartItem) => cartItem.title === itemData.item.title,
              );
              let quantity = 1;

              if (sameProduct.length > 0) {
                quantity = sameProduct[0].quantity + 1;
              }

              setCart([
                ...restProducts,
                {
                  title: itemData.item.title,
                  price: itemData.item.price,
                  productId: itemData.item.id,
                  quantity: quantity,
                },
              ]);
            }}
          />
        )}
      />
    </View>
  );
};

export default ProductsOverviewScreen;
