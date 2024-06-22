import { Box, Text, Image, Heading, VStack, Flex } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>Tic Tac Toe</Heading>
      <Text fontSize="lg" mb={6}>Classic tic-tac-toe game that allows players to compete online.</Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Features</Heading>
      <VStack spacing={5}>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Feature 1: Real-time</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Feature 2: Fun</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Engaging</Text>
        </Flex>
      </VStack>
    </Box>
  </Box>
);

export default About;