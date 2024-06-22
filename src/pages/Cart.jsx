import React from 'react';
import { Box, Text, Button, VStack } from '@chakra-ui/react';

const cartItems = [
  { id: 1, name: 'Product 1', price: 100, quantity: 1 },
  { id: 2, name: 'Product 2', price: 200, quantity: 2 },
];

const Cart = () => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        {cartItems.map(item => (
          <Box key={item.id} borderWidth="1px" borderRadius="lg" p={4}>
            <Text fontWeight="bold">{item.name}</Text>
            <Text>Price: ${item.price}</Text>
            <Text>Quantity: {item.quantity}</Text>
          </Box>
        ))}
      </VStack>
      <Text fontWeight="bold" fontSize="xl" mt={4}>Total: ${total}</Text>
      <Button mt={4} colorScheme="teal">Proceed to Checkout</Button>
    </Box>
  );
};

export default Cart;