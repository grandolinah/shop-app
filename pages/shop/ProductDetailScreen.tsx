import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
} from 'react-native';

import { useCard } from '../../context/CartContext';

import { COLORS } from '../../config/colors';

const ProductDetailScreen = ({ route }) => {
  const item = route.params?.item ?? '';

  const { cart, setCart } = useCard();

  return (
    <ScrollView>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.actions}>
        <Button
          title="Add to Cart"
          color={COLORS.maroonFlush}
          onPress={() => {
            setCart([...cart, {
              name: item.title,
              price: item.price,
            }]);
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
