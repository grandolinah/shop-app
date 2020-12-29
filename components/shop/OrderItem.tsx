import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native';

import { cardShadow } from '../../styles/card-shadow';

import { COLORS } from '../../config/colors';

// TODO interface props
const OrderItem = (props) => {
  
  return (
    <View style={styles.orderItem}>
      <Text style={styles.orderNumber}>{props.orderId}</Text>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${props.totalAmount}</Text>
        <Text style={styles.date}>{new Date(props.date).toLocaleString('en-US', { timeZone: 'UTC' })}</Text>
      </View>
      <Button title="Show Details" color={COLORS.maroonFlush} onPress={() => { }} />
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
