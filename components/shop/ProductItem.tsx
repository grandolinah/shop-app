import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

import { COLORS } from '../../config/colors';

import { cardShadow } from '../../styles/card-shadow';

import { ProductItemPropsInterface } from '../../interfaces/product-item-props-interface';

const ProductItem = ({
  title,
  price,
  imageUrl,
  onViewDetail,
  onAddToCart,
}: ProductItemPropsInterface) => {
  let Touchable;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  } else {
    Touchable = TouchableOpacity;
  }

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <Touchable onPress={onViewDetail} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: imageUrl }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>{price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
              <Button
                title="View details"
                color={COLORS.amber}
                onPress={onViewDetail}
              />
              <Button
                title="Add to cart"
                color={COLORS.maroonFlush}
                onPress={onAddToCart}
              />
            </View>
          </View>
        </Touchable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    ...cardShadow,
    height: 300,
    margin: 20,
  },
  touchable: {
    overflow: 'hidden',
    borderRadius: 10,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
  title: {
    marginVertical: 4,
    fontSize: 18,
    fontFamily: 'RobotoMono-Bold',
  },
  price: {
    marginVertical: 4,
    color: COLORS.grey,
    fontSize: 14,
    fontFamily: 'RobotoMono-Bold',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '25%',
    paddingHorizontal: 20,
  },
});

export default ProductItem;
