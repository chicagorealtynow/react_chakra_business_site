import React from 'react';
    import { Box, Flex, Heading, Spacer, Button, Link } from '@chakra-ui/react';

    const Navigation = () => {
      return (
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          p={4}
          bg="white"
          color="#333333"
          boxShadow="md"
        >
          <Heading as="h1" size="lg">
            Your Company Name
          </Heading>
          <Spacer />
          <Flex align="center">
            <Link href="/" mr={4}>
              Home
            </Link>
            <Link href="/services" mr={4}>
              Services
            </Link>
            <Link href="/contact" mr={4}>
              Contact
            </Link>
            <Button colorScheme="orange">Schedule Service Now</Button>
          </Flex>
        </Flex>
      );
    };

    export default Navigation;
