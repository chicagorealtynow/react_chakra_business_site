import React from 'react';
    import { Box, Heading, Text, Flex } from '@chakra-ui/react';

    const ServiceAreaMap = () => {
      return (
        <Box p={8} bg="gray.100">
          <Heading as="h2" size="xl" mb={8} textAlign="center" color="#333333">
            Service Area
          </Heading>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
          >
            <Box
              flex="1"
              mr={{ md: 8 }}
              mb={{ base: 4, md: 0 }}
              borderRadius="md"
              overflow="hidden"
              boxShadow="md"
            >
              <iframe
                title="Service Area Map"
                width="100%"
                height="400"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.743877720797!2d-73.98510728459472!3d40.71277538439597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1a1b%3A0x2a0b7866ef74a99b!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1638484848484!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
            <Box flex="1" p={4} bg="white" borderRadius="md" boxShadow="md">
              <Heading as="h3" size="lg" mb={4} color="#333333">
                Contact Us
              </Heading>
              <Text mb={2} color="#333333">
                Phone: (123) 456-7890
              </Text>
              <Text mb={2} color="#333333">
                Email: info@yourcompany.com
              </Text>
            </Box>
          </Flex>
        </Box>
      );
    };

    export default ServiceAreaMap;
