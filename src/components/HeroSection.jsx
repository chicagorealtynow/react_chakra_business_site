import React from 'react';
    import { Box, Heading, Text, Button, Flex, Image } from '@chakra-ui/react';

    const HeroSection = () => {
      return (
        <Flex
          align="center"
          justify="space-between"
          p={8}
          bg="white"
          direction={{ base: 'column', md: 'row' }}
        >
          <Box mr={{ md: 8 }} mb={{ base: 4, md: 0 }}>
            <Heading
              as="h1"
              size="2xl"
              mb={4}
              color="#333333"
            >
              Top-Rated AC Repair in Your Location – Your Local HVAC Specialists
            </Heading>
            <Text
              fontSize="xl"
              mb={6}
              color="#333333"
            >
              Fast, reliable, and affordable HVAC services available 24/7.
            </Text>
            <Button
              colorScheme="orange"
              size="lg"
            >
              Schedule Service Now
            </Button>
          </Box>
          <Image
            src="https://source.unsplash.com/random/800x600/?hvac"
            alt="HVAC Service"
            borderRadius="md"
            boxShadow="lg"
            maxW={{ base: '100%', md: '50%' }}
          />
        </Flex>
      );
    };

    export default HeroSection;
