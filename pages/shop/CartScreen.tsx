import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { COLORS } from '../../config/colors';

import { useCard } from '../../context/CartContext';

import { Product } from '../../interfaces/product-interface';

import { cardShadow } from '../../styles/card-shadow';

const CardScreen = () => {
  const { cart, setCart } = useCard();
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const calculateTotalAmount = (cart: Product[]) => {
    let totalAmount = 0;

    cart.forEach((item: Product) => {
      totalAmount += item.price;
    });

    return totalAmount;
  };

  useEffect(() => {
    setTotalAmount(calculateTotalAmount(cart));
  }, [cart]);

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total price: $
          <Text style={styles.amount}>{totalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          title="Order Now"
          onPress={() => { }}
          color={COLORS.maroonFlush}
        />
      </View>
      <View>
        <Text>Cart Items:</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    ...cardShadow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
  },
  summaryText: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 18,
  },
  amount: {
    color: COLORS.maroonFlush,
  },
});

export default CardScreen;
