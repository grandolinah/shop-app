import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import CartItem from '../../components/shop/CartItem';

import { cardShadow } from '../../styles/card-shadow';

import { OrderItemPropsInterface } from '../../interfaces/order-item-props.interface';

import { COLORS } from '../../config/colors';

const OrderItem = ({ orderId, totalAmount, date, items }: OrderItemPropsInterface) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);

  return (
    <View style={styles.orderItem}>
      <Text style={styles.orderNumber}>{orderId}</Text>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
        <Text style={styles.date}>
          {new Date(date).toLocaleString('en-US', { timeZone: 'UTC' })}
        </Text>
      </View>
      <Button
        title={!isDetailsOpen ? 'Show Details' : 'Hide details'}
        color={COLORS.maroonFlush}
        onPress={() => { setIsDetailsOpen(!isDetailsOpen) }}
      />
      {isDetailsOpen && (
        <View>
          {items.map((cartItem) => (
            <CartItem
              quantity={cartItem.quantity}
              title={cartItem.title}
              amount={cartItem.price}
              key={`${Math.random()}`}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    ...cardShadow,
    width: '90%',
    alignSelf: 'center',
    margin: 10,
    padding: 16,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalAmount: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 16,
  },
  orderNumber: {
    fontFamily: 'RobotoMono',
    fontSize: 16,
  },
  date: {
    fontFamily: 'RobotoMono',
    fontSize: 16,
  },
});

export default OrderItem;
