import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../../config/colors';

import { CartItemPropsInterface } from '../../interfaces/cart-item-props-interface';

const CartItem = ({
  quantity,
  title,
  amount,
  onRemove,
  id,
}: CartItemPropsInterface) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{quantity} </Text>
        <Text style={styles.mainText}>{title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>${amount.toFixed(2)}</Text>
        <TouchableOpacity
          onPress={() => onRemove(id)}
          style={styles.deleteButton}>
          <Icon
            name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
            size={23}
            color={COLORS.maroonFlush}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    color: COLORS.maroonFlush,
    fontFamily: 'RobotoMono-Bold',
    fontSize: 16,
  },
  mainText: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 20,
  },
});

export default CartItem;
