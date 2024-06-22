import React from 'react';
import { Box, Text, Button, VStack, Input } from '@chakra-ui/react';

const Checkout = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Input placeholder="Name" />
        <Input placeholder="Address" />
        <Input placeholder="Credit Card Number" />
        <Button colorScheme="teal">Place Order</Button>
      </VStack>
    </Box>
  );
};

export default Checkout;