import React from 'react';
    import { Box, Heading, SimpleGrid, Text, Flex } from '@chakra-ui/react';

    const ServicesOverview = () => {
      const services = [
        { title: 'AC Repair & Installation', description: 'Expert AC repair and installation services.' },
        { title: 'Emergency Services', description: '24/7 emergency HVAC services.' },
        { title: 'Preventive Maintenance', description: 'Regular maintenance to keep your system running smoothly.' },
        { title: 'Commercial HVAC', description: 'HVAC solutions for commercial properties.' },
        { title: 'Indoor Air Quality', description: 'Improving your indoor air quality.' },
        { title: 'Custom Solutions', description: 'Tailored HVAC solutions for your specific needs.' },
      ];

      return (
        <Box p={8} bg="gray.50">
          <Heading as="h2" size="xl" mb={8} textAlign="center" color="#333333">
            Our Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {services.map((service, index) => (
              <Flex
                key={index}
                direction="column"
                p={6}
                bg="white"
                borderRadius="md"
                boxShadow="md"
                align="center"
              >
                <Heading as="h3" size="lg" mb={4} color="#333333">
                  {service.title}
                </Heading>
                <Text color="#333333">{service.description}</Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      );
    };

    export default ServicesOverview;
