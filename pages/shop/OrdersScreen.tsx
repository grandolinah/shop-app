import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { useAppContext } from '../../context/AppContext';

import OrderItem from '../../components/shop/OrderItem';

const OrderScreen = () => {
  const { orders } = useAppContext();

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(order) => order.orderId}
        renderItem={(itemData) => (
          <OrderItem
            totalAmount={itemData.item.totalAmount}
            date={itemData.item.date}
            orderId={itemData.item.orderId}
            onViewDetails={() => { }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default OrderScreen;
