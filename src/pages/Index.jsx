import { Container, VStack } from "@chakra-ui/react";
import BitcoinPrice from "../components/BitcoinPrice";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <BitcoinPrice />
      </VStack>
    </Container>
  );
};

export default Index;