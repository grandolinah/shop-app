import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
} from 'react-native';

import { useAppContext } from '../../context/AppContext';

import { COLORS } from '../../config/colors';

const ProductDetailScreen = ({ route }) => {
  const item = route.params?.item ?? '';

  const { cart, setCart } = useAppContext();

  return (
    <ScrollView>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.actions}>
        <Button
          title="Add to Cart"
          color={COLORS.maroonFlush}
          onPress={() => {
            const restProducts = cart.filter(
              (cartItem) => cartItem.title !== item.title,
            );
            const sameProduct = cart.filter(
              (cartItem) => cartItem.title === item.title,
            );
            let quantity = 1;

            if (sameProduct.length > 0) {
              quantity = sameProduct[0].quantity + 1;
            }

            setCart([
              ...restProducts,
              {
                title: item.title,
                price: item.price,
                productId: item.id,
                quantity: quantity,
              },
            ]);
          }}
        />
      </View>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    alignItems: 'center',
    marginVertical: 10,
  },
  price: {
    marginVertical: 20,
    color: COLORS.maroonFlush,
    textAlign: 'center',
    fontFamily: 'RobotoMono-Bold',
    fontSize: 18,
  },
  description: {
    marginHorizontal: 20,
    color: COLORS.grey,
    fontFamily: 'RobotoMono-Regular',
    fontSize: 16,
  },
});

export default ProductDetailScreen;
