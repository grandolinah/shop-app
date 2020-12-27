import React from 'react';
import { View, Text } from 'react-native';

import { useAppContext } from '../../context/AppContext';

const OrderScreen = () => {
  const { orders } = useAppContext();

  return (
    <View>
      <Text>{orders[0].totalPrice}</Text>
    </View>
  );
};

export default OrderScreen;
