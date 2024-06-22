import React from 'react';
import { Box, Grid, Image, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: 100, image: '/images/product1.jpg' },
  { id: 2, name: 'Product 2', price: 200, image: '/images/product2.jpg' },
  { id: 3, name: 'Product 3', price: 300, image: '/images/product3.jpg' },
];

const ProductListing = () => (
  <Box p={4}>
    <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
      {products.map(product => (
        <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={product.image} alt={product.name} />
          <Box p={6}>
            <Text fontWeight="bold" fontSize="xl">{product.name}</Text>
            <Text>${product.price}</Text>
            <Button as={Link} to={`/product/${product.id}`} mt={4} colorScheme="teal">View Details</Button>
          </Box>
        </Box>
      ))}
    </Grid>
  </Box>
);

export default ProductListing;