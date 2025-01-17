import React from 'react';
    import { Box, Heading, SimpleGrid, Text, Flex } from '@chakra-ui/react';

    const WhyChooseUs = () => {
      const benefits = [
        { title: '20+ Years of Experience', description: 'Decades of experience in the HVAC industry.' },
        { title: '24/7 Emergency Services', description: 'Available around the clock for emergencies.' },
        { title: 'Certified Technicians', description: 'Highly trained and certified professionals.' },
        { title: '100% Customer Satisfaction', description: 'Committed to ensuring customer satisfaction.' },
      ];

      return (
        <Box p={8} bg="white">
          <Heading as="h2" size="xl" mb={8} textAlign="center" color="#333333">
            Why Choose Us
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
            {benefits.map((benefit, index) => (
              <Flex
                key={index}
                direction="column"
                p={6}
                bg="gray.50"
                borderRadius="md"
                boxShadow="md"
                align="center"
              >
                <Heading as="h3" size="lg" mb={4} color="#333333">
                  {benefit.title}
                </Heading>
                <Text color="#333333">{benefit.description}</Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      );
    };

    export default WhyChooseUs;
