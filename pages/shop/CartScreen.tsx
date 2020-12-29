import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

import { COLORS } from '../../config/colors';

import { useAppContext } from '../../context/AppContext';

import { ProductInterface } from '../../interfaces/product-interface';

import { cardShadow } from '../../styles/card-shadow';

import CartItem from '../../components/shop/CartItem';

const CartScreen = () => {
  const { cart, setCart, orders, setOrders } = useAppContext();
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const calculateTotalAmount = (cart: ProductInterface[]) => {
    let totalAmount = 0;

    cart.forEach((item: ProductInterface) => {
      totalAmount += item.price * item.quantity;
    });

    return totalAmount;
  };

  const onRemoveHandler = (id: string) => {
    const restProducts = cart.filter((cartItem) => cartItem.productId !== id);
    const sameProduct = cart.filter((cartItem) => cartItem.productId === id);

    if (sameProduct.length > 0) {
      const updatedQuantity =
        sameProduct[0].quantity > 1 ? sameProduct[0].quantity - 1 : 0;

      if (updatedQuantity !== 0) {
        const updatedItem = {
          title: sameProduct[0].title,
          price: sameProduct[0].price,
          productId: sameProduct[0].productId,
          quantity: updatedQuantity,
        };

        setCart([...restProducts, updatedItem]);
      } else {
        setCart([...restProducts]);
      }
    }
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
          onPress={() => {
            const newOrder = {
              totalAmount: calculateTotalAmount(cart),
              items: cart,
              date: Date.now(),
              orderId: `${Date.now()}-order`,
            };

            setOrders([...orders, newOrder]);

            // clear cart
            setCart([]);
          }}
          color={COLORS.maroonFlush}
          disabled={cart.length === 0}
        />
      </View>
      <View>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.productId}
          renderItem={(itemData) => (
            <CartItem
              quantity={itemData.item.quantity}
              title={itemData.item.title}
              amount={itemData.item.price}
              id={itemData.item.productId}
              onRemove={(id) => onRemoveHandler(id)}
            />
          )}
        />
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

export default CartScreen;
