import React from 'react';
import { Box, Text, Spinner } from '@chakra-ui/react';
import { useQuery } from 'react-query';

const fetchBitcoinPrice = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const BitcoinPrice = () => {
  const { data, error, isLoading } = useQuery('bitcoinPrice', fetchBitcoinPrice, {
    refetchInterval: 30000, // 30 seconds
  });

  if (isLoading) return <Spinner size="xl" />;
  if (error) return <Text>Error fetching data</Text>;

  return (
    <Box p={4} borderWidth={1} borderRadius="lg" textAlign="center">
      <Text fontSize="2xl">Bitcoin Price</Text>
      <Text fontSize="4xl" fontWeight="bold">${data.bitcoin.usd}</Text>
    </Box>
  );
};

export default BitcoinPrice;