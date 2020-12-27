import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { COLORS } from '../../config/colors';
import { cardShadow } from '../../styles/card-shadow';

const CardScreen = () => {
  const totalPrice = `Total price: $ `;
  const cardTotalAmount = 0; // TODO

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          {totalPrice}
          <Text style={styles.amount}>{cardTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          title="Order Now"
          onPress={() => {}}
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
