import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: 100, description: 'Description of Product 1', image: '/images/product1.jpg' },
  { id: 2, name: 'Product 2', price: 200, description: 'Description of Product 2', image: '/images/product2.jpg' },
  { id: 3, name: 'Product 3', price: 300, description: 'Description of Product 3', image: '/images/product3.jpg' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <Image src={product.image} alt={product.name} />
      <Text fontWeight="bold" fontSize="2xl">{product.name}</Text>
      <Text>${product.price}</Text>
      <Text mt={4}>{product.description}</Text>
      <Button mt={4} colorScheme="teal">Add to Cart</Button>
    </Box>
  );
};

export default ProductDetail;